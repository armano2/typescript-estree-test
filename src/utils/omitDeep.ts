/**
 * Common predicates for Babylon AST preprocessing
 */
export const always = (): boolean => true;
export const ifNumber = (val: unknown): boolean => typeof val === 'number';

type UnknownObject = Record<string, unknown>;

function isObjectLike(value: unknown | null): value is UnknownObject {
  return (
    typeof value === 'object' && !(value instanceof RegExp) && value !== null
  );
}

/**
 * Removes the given keys from the given AST object recursively
 * @param root A JavaScript object to remove keys from
 * @param keysToOmit Names and predicate functions use to determine what keys to omit from the final object
 * @param selectors advance ast modifications
 * @returns formatted object
 */
export function omitDeep<T = UnknownObject>(
  root: T,
  keysToOmit: { key: string; predicate: (value: unknown) => boolean }[] = [],
  selectors: Record<
    string,
    (node: UnknownObject, parent: UnknownObject | null) => void
  > = {}
): UnknownObject {
  function shouldOmit(keyName: string, val: unknown): boolean {
    if (keysToOmit.length) {
      return keysToOmit.some(
        keyConfig => keyConfig.key === keyName && keyConfig.predicate(val)
      );
    }
    return false;
  }

  function visit(
    oNode: UnknownObject,
    parent: UnknownObject | null
  ): UnknownObject {
    if (!Array.isArray(oNode) && !isObjectLike(oNode)) {
      return oNode;
    }

    const node = { ...oNode };

    for (const prop in node) {
      if (Object.prototype.hasOwnProperty.call(node, prop)) {
        if (shouldOmit(prop, node[prop]) || typeof node[prop] === 'undefined') {
          delete node[prop];
          continue;
        }

        const child = node[prop];
        if (Array.isArray(child)) {
          const value = [];
          for (const el of child) {
            value.push(visit(el, node));
          }
          node[prop] = value;
        } else if (isObjectLike(child)) {
          node[prop] = visit(child, node);
        }
      }
    }

    if (typeof node.type === 'string' && node.type in selectors) {
      selectors[node.type](node, parent);
    }

    return node;
  }

  return visit(root as UnknownObject, null);
}
