import { UnknownObject } from './omitDeep';

/**
 * There is currently a really awkward difference in location data for Program nodes
 * between different parsers in the ecosystem. Hack around this by removing the data
 * before comparing the ASTs.
 *
 * See: https://github.com/babel/babylon/issues/673
 *
 * @param {Object} ast the raw AST with a Program node at its top level
 * @returns {Object} the ast with the location data removed from the Program node
 */
export function removeFromProgramNode(ast: any): UnknownObject {
  delete ast.loc;
  delete ast.range;
  delete ast.sourceType; // we can ignore sourceType here
  return ast;
}
