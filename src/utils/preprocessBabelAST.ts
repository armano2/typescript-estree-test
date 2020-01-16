import * as BabelTypes from '@babel/types';
import { AST_NODE_TYPES } from '@typescript-eslint/typescript-estree';
import { always, ifNumber, omitDeep } from './omitDeep';

/**
 * - Babylon wraps the "Program" node in an extra "File" node, normalize this for simplicity for now...
 * - Remove "start" and "end" values from Babylon nodes to reduce unimportant noise in diffs ("loc" data will still be in
 * each final AST and compared).
 *
 * @param ast raw babylon AST
 * @returns processed babylon AST
 */
export function preprocessBabylonAST(ast: BabelTypes.File): any {
  return omitDeep<any>(
    ast.program,
    [
      {
        key: 'start',
        // only remove the "start" number (not the "start" object within loc)
        predicate: ifNumber
      },
      {
        key: 'end',
        // only remove the "end" number (not the "end" object within loc)
        predicate: ifNumber
      },
      {
        key: 'identifierName',
        predicate: always
      },
      {
        key: 'extra',
        predicate: always
      },
      {
        key: 'innerComments',
        predicate: always
      },
      {
        key: 'leadingComments',
        predicate: always
      },
      {
        key: 'trailingComments',
        predicate: always
      },
      {
        key: 'guardedHandlers',
        predicate: always
      },
      {
        key: 'interpreter',
        predicate: always
      }
    ],
    {
      /**
       * Awaiting feedback on Babel issue https://github.com/babel/babel/issues/9231
       */
      TSCallSignatureDeclaration(node) {
        if (node.typeAnnotation) {
          node.returnType = node.typeAnnotation;
          delete node.typeAnnotation;
        }
        if (node.parameters) {
          node.params = node.parameters;
          delete node.parameters;
        }
      },
      MethodDefinition(node: any) {
        if (node.abstract) {
          delete node.abstract;
          node.type = AST_NODE_TYPES.TSAbstractMethodDefinition
        }
      },
      /**
       * Awaiting feedback on Babel issue https://github.com/babel/babel/issues/9231
       */
      TSConstructSignatureDeclaration(node) {
        if (node.typeAnnotation) {
          node.returnType = node.typeAnnotation;
          delete node.typeAnnotation;
        }
        if (node.parameters) {
          node.params = node.parameters;
          delete node.parameters;
        }
      },
      /**
       * Awaiting feedback on Babel issue https://github.com/babel/babel/issues/9231
       */
      TSFunctionType(node) {
        if (node.typeAnnotation) {
          node.returnType = node.typeAnnotation;
          delete node.typeAnnotation;
        }
        if (node.parameters) {
          node.params = node.parameters;
          delete node.parameters;
        }
      },
      /**
       * Awaiting feedback on Babel issue https://github.com/babel/babel/issues/9231
       */
      TSConstructorType(node) {
        if (node.typeAnnotation) {
          node.returnType = node.typeAnnotation;
          delete node.typeAnnotation;
        }
        if (node.parameters) {
          node.params = node.parameters;
          delete node.parameters;
        }
      },
      /**
       * Awaiting feedback on Babel issue https://github.com/babel/babel/issues/9231
       */
      TSMethodSignature(node) {
        if (node.typeAnnotation) {
          node.returnType = node.typeAnnotation;
          delete node.typeAnnotation;
        }
        if (node.parameters) {
          node.params = node.parameters;
          delete node.parameters;
        }
      },
      /**
       * We want this node to be different
       * @see https://github.com/JamesHenry/typescript-estree/issues/109
       * @see https://github.com/prettier/prettier/pull/5728
       */
      TSTypeParameter(node: any) {
        if (node.name) {
          node.name = {
            loc: {
              start: {
                column: node.loc.start.column,
                line: node.loc.start.line
              },
              end: {
                column: node.loc.start.column + node.name.length,
                line: node.loc.start.line
              }
            },
            name: node.name,
            range: [node.range[0], node.range[0] + node.name.length],
            type: AST_NODE_TYPES.Identifier
          };
        }
      },
      ClassProperty(node) {
        /**
         * Babel: ClassProperty + abstract: true
         * ts-estree: TSAbstractClassProperty
         */
        if (node.abstract) {
          node.type = 'TSAbstractClassProperty';
          delete node.abstract;
        }
        /**
         * TS 3.7: declare class properties
         * babel: sets declare property as true/undefined
         * ts-estree: sets declare property as true/false
         */
        if (!node.declare) {
          node.declare = false;
        }
      },
      TSExpressionWithTypeArguments(node, parent: any) {
        if (parent.type === 'TSInterfaceDeclaration') {
          node.type = 'TSInterfaceHeritage';
        } else if (
          parent.type === 'ClassExpression' ||
          parent.type === 'ClassDeclaration'
        ) {
          node.type = 'TSClassImplements';
        }
      },
      /**
       * @see https://github.com/prettier/prettier/issues/5817
       */
      FunctionExpression(node: any, parent: any) {
        if (parent.typeParameters && parent.type === 'Property') {
          node.typeParameters = parent.typeParameters;
          delete parent.typeParameters;
        }

        /**
         * babel issue: ranges of typeParameters are not included in FunctionExpression range
         */
        if (
          node.typeParameters &&
          node.typeParameters.range[0] < node.range[0]
        ) {
          node.range[0] = node.typeParameters.range[0];
          node.loc.start = Object.assign({}, node.typeParameters.loc.start);
        }

        if (!node.body) {
          node.body = null;
        }
      },
      /**
       * Template strings seem to also be affected by the difference in opinion between different parsers in
       * @see https://github.com/babel/babel/issues/6681
       * @see https://github.com/babel/babel-eslint/blob/master/lib/babylon-to-espree/convertAST.js#L81-L96
       */
      TemplateLiteral(node: any) {
        for (let j = 0; j < node.quasis.length; j++) {
          const q = node.quasis[j];
          q.range[0] -= 1;
          q.loc.start.column -= 1;
          if (q.tail) {
            q.range[1] += 1;
            q.loc.end.column += 1;
          } else {
            q.range[1] += 2;
            q.loc.end.column += 2;
          }
        }
      },
      /**
       * TS 3.7: optional chaining
       * babel: sets optional property as true/undefined
       * ts-estree: sets optional property as true/false
       */
      MemberExpression(node) {
        if (!node.optional) {
          node.optional = false;
        }
      },
      CallExpression(node) {
        if (!node.optional) {
          node.optional = false;
        }
      },
      OptionalCallExpression(node) {
        if (!node.optional) {
          node.optional = false;
        }
      },
      /**
       * TS 3.7: type assertion function
       * babel: sets asserts property as true/undefined
       * ts-estree: sets asserts property as true/false
       */
      TSTypePredicate(node) {
        if (!node.asserts) {
          node.asserts = false;
        }
      }
    }
  );
}
