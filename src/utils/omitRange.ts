import { always, omitDeep, UnknownObject } from './omitDeep';

export function omitRange<T = UnknownObject>(ast: T): UnknownObject {
  return omitDeep<T>(ast, [
    {
      key: 'range',
      // only remove the "end" number (not the "end" object within loc)
      predicate: always,
    },
    {
      key: 'loc',
      // only remove the "end" number (not the "end" object within loc)
      predicate: always,
    },
  ]);
}
