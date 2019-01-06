// TypeScript ESTree
//
// Originally extracted from:
//
//   TypeScript ESLint Parser
// Copyright JS Foundation and other contributors, https://js.foundation
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//   * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
// * Redistributions in binary form must reproduce the above copyright
// notice, this list of conditions and the following disclaimer in the
// documentation and/or other materials provided with the distribution.
//
//   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
// THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
import { isPlainObject } from "./utils";

/**
 * Removes the given keys from the given AST object recursively
 * @param root A JavaScript object to remove keys from
 * @param keysToOmit Names and predicate functions use to determine what keys to omit from the final object
 * @param nodes advance ast modifications
 * @returns {Object} formatted object
 */
export function omitDeep(
  root: any,
  keysToOmit: { key: string; predicate: Function }[],
  nodes: Record<string, (node: any, parent: any) => void> = {}
) {
  function shouldOmit(keyName: string, val: any): boolean {
    if (keysToOmit && keysToOmit.length) {
      return keysToOmit.some(
        keyConfig => keyConfig.key === keyName && keyConfig.predicate(val)
      );
    }
    return false;
  }

  function visit(node: any, parent: any) {
    if (!node) {
      return;
    }

    for (const prop in node) {
      if (node.hasOwnProperty(prop)) {
        if (shouldOmit(prop, node[prop])) {
          delete node[prop];
          continue;
        }

        const child = node[prop];

        if (Array.isArray(child)) {
          for (const el of child) {
            visit(el, node);
          }
        } else if (isPlainObject(child)) {
          visit(child, node);
        }
      }
    }

    if (typeof node.type === 'string' && node.type in nodes) {
      nodes[node.type](node, parent);
    }
  }

  visit(root, null);
  return root;
}

/**
 * Common predicates for Babylon AST preprocessing
 */
const always = () => true;
const ifNumber = (val: any) => typeof val === 'number';

/**
 * - Babylon wraps the "Program" node in an extra "File" node, normalize this for simplicity for now...
 * - Remove "start" and "end" values from Babylon nodes to reduce unimportant noise in diffs ("loc" data will still be in
 * each final AST and compared).
 *
 * @param {Object} ast raw babylon AST
 * @returns {Object} processed babylon AST
 */
export function preprocessBabelAST(ast: any): any {
  return omitDeep(
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
       * Not yet supported in Babel https://github.com/babel/babel/issues/9228
       */
      StringLiteral(node: any) {
        node.type = 'Literal';
      },
      /**
       * Not yet supported in Babel https://github.com/babel/babel/issues/9228
       */
      NumericLiteral(node: any) {
        node.type = 'Literal';
      },
      /**
       * Not yet supported in Babel https://github.com/babel/babel/issues/9228
       */
      BooleanLiteral(node: any) {
        node.type = 'Literal';
        node.raw = String(node.value);
      },
      /**
       * Awaiting feedback on Babel issue https://github.com/babel/babel/issues/9231
       */
      TSCallSignatureDeclaration(node: any) {
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
      TSConstructSignatureDeclaration(node: any) {
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
      TSFunctionType(node: any) {
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
      TSConstructorType(node: any) {
        if (node.typeAnnotation) {
          node.returnType = node.typeAnnotation;
          delete node.typeAnnotation;
        }
        if (node.parameters) {
          node.params = node.parameters;
          delete node.parameters;
        }
      }
    }
  );
}