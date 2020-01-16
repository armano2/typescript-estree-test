/**
 * Returns a raw copy of the typescript AST
 * @param ast the AST object
 * @returns copy of the AST object
 */
import { omitDeep } from './omitDeep';

export function deeplyCopy<T>(ast: T): T {
  return omitDeep(ast) as T;
}
