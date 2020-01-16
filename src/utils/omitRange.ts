import { always, omitDeep } from './omitDeep';

export function omitRange(ast: any): any {
  return omitDeep(ast, [
    {
      key: 'range',
      // only remove the "end" number (not the "end" object within loc)
      predicate: always
    },
    {
      key: 'loc',
      // only remove the "end" number (not the "end" object within loc)
      predicate: always
    }
  ]);
}
