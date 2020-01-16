import { readFixtures, readFixture } from './read-fixtures';
import { parseTsEstree } from './parser';
import { isPlainObject, traverse } from './utils/utils';
import { PropOptions } from './generate/types';
import Generator from './generate/generator';

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

Promise.all(promises).then(() => {
  const generator = new Generator(nodes);
  generator.generateKeys('visitor-keys');
  generator.generate(true, 'typescript-estree.types');
  generator.generate(false, 'typescript-estree.spec');
  console.log('files saved.');
});
