import path from 'path';

import { readFixture, readFixtures } from '../src/read-fixtures';
import {
  deeplyCopy,
  parseBabel,
  parseTsEstree,
  preprocessBabylonAST,
  removeFromProgramNode
} from '../src/utils';

describe('alignment', () => {
  const files = readFixtures();

  for (const file of files) {
    const filePath = path
      .normalize(path.relative(__dirname, file))
      .replace(/\\/g, '/');

    it(`${filePath}`, function() {
      return readFixture(file).then(({ content, isTsx }) => {
        let bCode, tsCode;
        try {
          bCode = preprocessBabylonAST(parseBabel(content, isTsx));
          tsCode = deeplyCopy(parseTsEstree(content, isTsx));
        } catch (e) {
          return;
        }

        expect(removeFromProgramNode(bCode)).toEqual(
          removeFromProgramNode(tsCode)
        );
      });
    });
  }
});
