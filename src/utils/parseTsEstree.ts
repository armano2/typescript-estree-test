import { parse as tsEstreeParse } from '@typescript-eslint/typescript-estree';

export function parseTsEstree(code: string, jsx: boolean) {
  const result = tsEstreeParse(code, {
    loc: true,
    range: true,
    tokens: false,
    comment: false,
    useJSXTextNode: true,
    errorOnUnknownASTType: true,
    jsx,
  });
  if ('parseError' in result) {
    throw new Error(result);
  }
  return result;
}
