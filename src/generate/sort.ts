import { PropOptions } from "./types";

export function sortNodes(a: string | null, b: string | null) {
  if (a === null) {
    return 1;
  }
  if (b === null) {
    return -1;
  }
  if (a.startsWith('TS') === b.startsWith('TS')) {
    if (a.endsWith('Keyword') === b.endsWith('Keyword')) {
      return a > b ? 1 : -1;
    }
    return a.endsWith('Keyword') ? 1 : -1;
  }
  return a.startsWith('TS') ? 1 : -1;
}

export function sortProps(a: [string, PropOptions], b: [string, PropOptions]): number {
  if (a[0] === 'type') {
    return -1;
  }
  if (b[0] === 'type') {
    return 1;
  }
  const aPriority = a[1].isBoolean || a[1].isString || a[1].isNumber;
  const bPriority = b[1].isBoolean || b[1].isString || b[1].isNumber;
  if (aPriority === bPriority) {
    return a[0] > b[0] ? -1 : 1;
  }
  return aPriority ? -1 : 1;
}
