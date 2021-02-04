import { readFixture, readFixtures } from '../src/read-fixtures';
import { testName } from '../src/utils';
import { parse } from '@typescript-eslint/typescript-estree';

describe('catch-convert-errors', () => {
  const files = readFixtures().map((file) => [testName(file), file]);

  it.each(files)(`%s`, async function (name, file) {
    const { content, isTsx } = await readFixture(file);
    expect(() =>
      parse(content, {
        loc: true,
        range: true,
        tokens: true,
        comment: true,
        useJSXTextNode: true,
        errorOnUnknownASTType: false,
        jsx: isTsx,
      }),
    ).not.toThrow(TypeError);
  });
});
