import { Node } from '@typescript-eslint/typescript-estree/dist/typedefs';

export function isPlainObject(obj: any) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

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
export function removeFromProgramNode(ast: any) {
  delete ast.loc;
  delete ast.range;
  delete ast.sourceType; // we can ignore sourceType here
  return ast;
}

export function traverse(root: any, cb: (node: Node, parent?: Node) => void) {
  function visit(node: Node, parent?: Node) {
    if (!node || typeof node.type !== 'string') {
      return;
    }

    for (const prop in node) {
      if (node.hasOwnProperty(prop)) {
        const child = (node as any)[prop];

        if (Array.isArray(child)) {
          for (const el of child) {
            visit(el, node);
          }
        } else if (isPlainObject(child)) {
          visit(child, node);
        }
      }
    }

    cb(node, parent);
  }

  visit(root);
  return root;
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
