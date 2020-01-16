import { TSESTree } from '@typescript-eslint/typescript-estree';

export function isPlainObject(obj: any) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

export function traverse(
  root: any,
  cb: (node: TSESTree.Node, parent?: TSESTree.Node) => void
) {
  function visit(node: TSESTree.Node, parent?: TSESTree.Node) {
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
    return Object.entries(value as Record<string, any>).reduce((p, x) => {
      p[x[0]] = standardizeEl(x[1]);
      return p;
    }, {} as Record<string, any>);
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
