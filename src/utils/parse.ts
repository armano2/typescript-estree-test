// babel types are something we don't really care about
/* eslint-disable @typescript-eslint/no-explicit-any */
import { parse as babelParse, ParserPlugin } from '@babel/parser';
import { File } from '@babel/types';
import * as parser from '@typescript-eslint/typescript-estree';

function createError(
  message: string,
  line: number,
  column: number,
): SyntaxError {
  // Construct an error similar to the ones thrown by Babylon.
  const error = new SyntaxError(`${message} (${line}:${column})`);
  (error as any).loc = {
    line,
    column,
  };
  return error;
}

export function parseWithBabelParser(text: string, jsx = true): File {
  const plugins: ParserPlugin[] = [
    'classProperties',
    'decorators-legacy',
    'estree',
    'typescript',
  ];
  if (jsx) {
    plugins.push('jsx');
  }

  return babelParse(text, {
    sourceType: 'unambiguous',
    allowImportExportEverywhere: true,
    allowReturnOutsideFunction: true,
    ranges: true,
    plugins,
  });
}

const options = {
  loc: true,
  range: true,
  tokens: false,
  comment: false,
  useJSXTextNode: true,
  errorOnUnknownASTType: true,
  /**
   * Babel will always throw on these types of issues, so we enable
   * them in typescript-estree when comparing behavior between the
   * two parsers. By default, the TypeScript compiler is much more
   * forgiving.
   */
  errorOnTypeScriptSyntacticAndSemanticIssues: true,
};

export function parseWithTypeScriptESTree<T extends boolean>(
  text: string,
  jsx: T,
): parser.AST<typeof options & { jsx: T }> {
  try {
    const result = parser.parseAndGenerateServices(text, {
      ...options,
      jsx,
    });
    return result.ast;
  } catch (e) {
    throw createError(e.message, e.lineNumber, e.column);
  }
}
