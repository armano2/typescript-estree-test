import { readFixture, readFixtures } from './read-fixtures';
import { parseTsEstree } from './parser';
import * as path from 'path';

describe('alignment', () => {
  const files = readFixtures();

  for (const file of files) {
    const filePath = path
      .normalize(path.relative(__dirname, file))
      .replace(/\\/g, '/');

    it(`${filePath}`, function() {
      return readFixture(file).then(({ content, isTsx }) => {
        expect(parseTsEstree(content, isTsx)).toMatchSnapshot();
      });
    });
  }
});
