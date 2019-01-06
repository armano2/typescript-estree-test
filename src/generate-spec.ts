import { readFixtures, readFixture } from './read-fixtures';
import { parseTsEstree } from './parser';
import * as fs from 'fs';
import { isPlainObject, traverse } from './utils';
import { format } from 'prettier';
import { sortNodes, sortProps } from './generate/sort';
import { PropOptions } from './generate/types';

const files = readFixtures();

const disabledStringFields = [
  'name',
  'raw',
  'value',
  'pattern',
  'flags',
  'cooked',
  'directive'
];

const nodes = new Map<string, Map<string, PropOptions>>();
const typeAliases = new Map<string, string[]>(require('./aliases.json'));

function getNode(type: string): Map<string, PropOptions> {
  let node = nodes.get(type);
  if (!node) {
    node = new Map();
    nodes.set(type, node);
  }
  return node;
}

function getProp(def: Map<string, PropOptions>, type: string) {
  let node = def.get(type);
  if (!node) {
    node = {
      isOptional: false,
      isNullable: false,
      isBoolean: false,
      isString: false,
      stringValues: new Set(),
      isNumber: false,
      containTypes: new Set(),
      objectTypes: new Map(),
      containArrayOfTypes: new Set()
    };
    def.set(type, node);
  }
  return node;
}

function parseType(def: Map<string, any>, node: Record<string, any>) {
  const keys = Object.keys(node);
  for (const key of keys) {
    const value = node[key];
    const prop = getProp(def, key);

    if (value === undefined) {
      prop.isOptional = true;
    } else if (value === null) {
      prop.isNullable = true;
    } else if (typeof value === 'string') {
      prop.isString = true;
      if (!disabledStringFields.includes(key)) {
        prop.stringValues.add(value);
      }
    } else if (typeof value === 'boolean') {
      prop.isBoolean = true;
    } else if (typeof value === 'number') {
      prop.isNumber = true;
    } else if (Array.isArray(value)) {
      for (const e of value) {
        if (e && typeof e.type === 'string') {
          prop.containArrayOfTypes.add(e.type);
        } else {
          prop.containArrayOfTypes.add(e);
        }
      }
    } else if (isPlainObject(value)) {
      if (typeof value.type === 'string') {
        prop.containTypes.add(value.type);
      } else {
        parseType(prop.objectTypes, value);
      }
    } else {
      throw new Error(`unexpected prop ${value}`);
    }
    def.set(key, prop);
  }

  def.forEach((value, key) => {
    if (!keys.includes(key)) {
      const prop = getProp(def, key);
      prop.isOptional = true;
      def.set(key, prop);
    }
  });
}

const promises = [];
for (const file of files) {
  promises.push(
    readFixture(file).then(({ file, content, isTsx }) => {
      const tsCode = parseTsEstree(content, isTsx);
      if (!tsCode.parseError) {
        traverse(tsCode, node => {
          delete node.range;
          delete node.loc;
          const def = getNode(node.type);

          parseType(def, node);
          nodes.set(node.type, def);
        });
      }
    })
  );
}

function prepareTypes(types: Set<string>): string[] {
  // TODO: check if present in aliases
  const result = Array.from(types)
    .map(e => String(e))
    .map(e => {
      for (const aliases of typeAliases) {
        if (aliases[1].some((alias) => alias === e)) {
          return aliases[0]
        }
      }
      return e;
    });

  return [...new Set(result)]
    .sort((a, b) => sortNodes(a, b));
}

function prepareProp(props: Map<string, PropOptions>) {
  let typesDTS = `{\n`;
  Array.from(props)
    .sort((a, b) => sortProps(a, b))
    .forEach(([propName, propValue]) => {
      if (propValue.isOptional) {
        propName += '?';
      }

      const values = [];
      if (propValue.isBoolean) {
        values.push('boolean');
      }
      if (propValue.isNullable) {
        values.push('null');
      }
      if (propValue.isNumber) {
        values.push('number');
      }
      if (propValue.isString) {
        if (propValue.stringValues.size === 0) {
          values.push('string');
        } else {
          values.push(
            ...Array.from(propValue.stringValues)
              .sort()
              .map(e => `'${e}'`)
          );
        }
      }
      if (propValue.containArrayOfTypes.size > 0) {
        values.push(
          `Array<${prepareTypes(propValue.containArrayOfTypes).join(' | ')}>`
        );
      }
      if (propValue.containTypes.size > 0) {
        values.push(...prepareTypes(propValue.containTypes));
      }
      if (propValue.objectTypes.size > 0) {
        values.push(prepareProp(propValue.objectTypes));
      }

      typesDTS += `${propName}: ${values.join(' | ')};\n`;
    });
  typesDTS += `}`;
  return typesDTS;
}

Promise.all(promises).then(() => {
  const interfaces = Array.from(nodes)
    .sort((a, b) => sortNodes(a[0], b[0]))
    .map(
      node =>
        `export interface ${node[0]} extends BaseNode ${prepareProp(node[1])}`
    );

  const aliases = Array.from(typeAliases).map(
    e => `export type ${e[0]} = ${Array.from(e[1]).join(' | ')};`
  );

  const template = `// This file is autogenerated, do not modify it.

  export interface Position {
    line: number;
    column: number;
  }

  interface SourceLocation {
    source?: string | null;
    start: Position;
    end: Position;
  }

  export interface BaseNode {
    type: string;
    loc?: SourceLocation | null;
    range?: [number, number];
  }

  export interface Comment extends BaseNode {
    type: "Line" | "Block";
    value: string;
  }

  ${aliases.join('\n\n')}

  ${interfaces.join('\n\n')}
  `;

  const formatted = format(template, {
    parser: 'typescript',
    singleQuote: true,
    // @ts-ignore
    editorconfig: true
  });
  fs.writeFileSync('./typescript-estree.spec.d.ts', formatted);
  console.log('reports saved.');
});
