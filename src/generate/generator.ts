import { sortNodes, sortProps } from './sort';
import { format } from 'prettier';
import * as fs from 'fs';
import rawTemplate from './template';
import { PropOptions } from './types';

const typeAliases = new Map<string, string[]>(require('./aliases.json'));

export default class Generator {
  protected useAliases: boolean = false;

  protected nodes: Map<string, Map<string, PropOptions>>;

  get typeAliases(): Map<string, string[]> {
    return this.useAliases ? typeAliases : new Map();
  }

  constructor(nodes: Map<string, Map<string, PropOptions>>) {
    this.nodes = nodes;
  }

  public generateKeys(filename: string) {
    const data = Array.from(this.nodes).reduce<Record<string, any>>(
      (prev, [key, value]) => {
        prev[key] = Array.from(value)
          .filter(
            ([_key, value]) =>
              value.containTypes.size > 0 ||
              value.objectTypes.size > 0 ||
              value.containArrayOfTypes.size > 0
          )
          .flatMap(([key]) => key);
        return prev;
      },
      {}
    );
    const formatted = format(JSON.stringify(data), {
      parser: 'json'
    });
    fs.writeFileSync(`./${filename}.json`, formatted);
  }

  public generate(useAliases: boolean, filename: string) {
    this.useAliases = useAliases;

    const interfaces = Array.from(this.nodes)
      .sort((a, b) => sortNodes(a[0], b[0]))
      .map(
        node =>
          `export interface ${node[0]} extends BaseNode ${this.prepareProp(
            node[1]
          )}`
      );

    const aliases = Array.from(this.typeAliases).map(
      e => `export type ${e[0]} = ${Array.from(e[1]).join(' | ')};`
    );

    const code = `${rawTemplate}
      ${interfaces.join('\n\n')}

      ${aliases.join('\n\n')}
    `;

    const formatted = format(code, {
      parser: 'typescript',
      singleQuote: true,
      // @ts-ignore
      editorconfig: true
    });
    fs.writeFileSync(`./${filename}.d.ts`, formatted);
  }

  protected prepareProp(props: Map<string, PropOptions>) {
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
            `Array<${this.prepareTypes(propValue.containArrayOfTypes).join(
              ' | '
            )}>`
          );
        }
        if (propValue.containTypes.size > 0) {
          values.push(...this.prepareTypes(propValue.containTypes));
        }
        if (propValue.objectTypes.size > 0) {
          values.push(this.prepareProp(propValue.objectTypes));
        }

        typesDTS += `${propName}: ${values.join(' | ')};\n`;
      });
    typesDTS += `}`;
    return typesDTS;
  }

  protected prepareTypes(types: Set<string>): string[] {
    let result = Array.from(types).map(e => String(e));

    for (const aliases of this.typeAliases) {
      if (aliases[1].filter(alias => result.includes(alias)).length > 1) {
        result = result.filter(e => !aliases[1].includes(e));
        result.push(aliases[0]);
      }
    }

    return [...new Set(result)].sort((a, b) => sortNodes(a, b));
  }
}
