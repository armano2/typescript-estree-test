import { readFixtures, readFixture } from './read-fixtures';
import { parseTsEstree } from './parser';
import * as fs from 'fs';
import { isPlainObject, traverse } from './utils';

const files = readFixtures();

interface PropOptions {
  isOptional: boolean;
  isNullable: boolean;
  isBoolean: boolean;
  isString: boolean;
  stringValues: Set<string>;
  isNumber: boolean;
  containTypes: Set<string>;
  objectTypes: Map<string, PropOptions>;
  containArrayOfTypes: Set<string>;
}

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

function standardizeEl(value: any) {
  if (value instanceof Map) {
    return standardize(value);
  } else if (value instanceof Set) {
    return Array.from(value);
  } else if (isPlainObject(value)) {
    return Object.entries(value as Record<string, any>).reduce(
      (p, x) => {
        p[x[0]] = standardizeEl(x[1]);
        return p;
      },
      {} as Record<string, any>
    );
  } else {
    return value;
  }
}

function standardize(map: Map<string, any>) {
  const out = Object.create(null);
  map.forEach((value, key) => {
    out[key] = standardizeEl(value);
  });
  return out;
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

function prepareProp(props: Map<string, PropOptions>, indent: number) {
  let typesDTS = `{\n`;
  props.forEach((propValue, propName) => {
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
        values.push(...Array.from(propValue.stringValues).map(e => `'${e}'`));
      }
    }
    if (propValue.containArrayOfTypes.size > 0) {
      values.push(
        `Array<${Array.from(propValue.containArrayOfTypes)
          .map(e => String(e))
          .join(' | ')}>`
      );
    }
    if (propValue.containTypes.size > 0) {
      values.push(...Array.from(propValue.containTypes).map(e => String(e)));
    }
    if (propValue.objectTypes.size > 0) {
      values.push(prepareProp(propValue.objectTypes, indent + 1));
    }

    typesDTS += `${' '.repeat((indent + 1) * 2)}${propName}: ${values.join(
      ' | '
    )};\n`;
  });
  typesDTS += `${' '.repeat(indent * 2)}}`;
  return typesDTS;
}

Promise.all(promises).then(() => {
  fs.writeFileSync('./types.json', JSON.stringify(standardize(nodes), null, 2));

  let typesDTS = '';
  const sortedMap = new Map(
    Array.from(nodes).sort((a, b) => {
      if (a[0].startsWith('TS') === b[0].startsWith('TS')) {
        if (a[0].endsWith('Keyword') === b[0].endsWith('Keyword')) {
          return a[0] > b[0] ? 1 : -1;
        }
        return a[0].endsWith('Keyword') ? 1 : -1;
      }
      return a[0].startsWith('TS') ? 1 : -1;
    })
  );

  sortedMap.forEach((props, type) => {
    typesDTS += `export interface ${type} ${prepareProp(props, 0)}\n\n`;
  });

  fs.writeFileSync('./typescript-estree.spec.d.ts', typesDTS);

  console.log('reports saved.');
});
