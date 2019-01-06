import { parse as tsEstreeParse } from 'typescript-estree/dist/parser';
import { parse as babelParse, ParserPlugin } from '@babel/parser';

export function normalizeNodeTypes(ast: any): any {
  return JSON.parse(JSON.stringify(ast));
}

export function parseTsEstree(
  code: string,
  jsx: boolean,
  errorOnUnknownASTType: boolean
) {
  try {
    return normalizeNodeTypes(
      tsEstreeParse(code, {
        loc: true,
        range: true,
        tokens: false,
        comment: false,
        useJSXTextNode: true,
        errorOnUnknownASTType,
        jsx
      })
    );
  } catch (e) {
    return {
      parseError: e.message
    };
  }
}

export function parseBabel(text: string, jsx: boolean = true) {
  try {
    const plugins: ParserPlugin[] = [
      'typescript',
      'objectRestSpread',
      'decorators-legacy',
      'classProperties',
      'asyncGenerators',
      'dynamicImport',
      'estree',
      'bigInt'
    ];
    if (jsx) {
      plugins.push('jsx');
    }

    return normalizeNodeTypes(
      babelParse(text, {
        sourceType: 'unambiguous',
        allowImportExportEverywhere: true,
        allowReturnOutsideFunction: true,
        ranges: true,
        plugins
      })
    );
  } catch (e) {
    return {
      parseError: e.message
    };
  }
}
