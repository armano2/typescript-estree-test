import path from 'path';

import { readFixture, readFixtures } from '../src/read-fixtures';
import { parseBabel, parseTsEstree } from '../src/parser';
import { deeplyCopy, preprocessBabylonAST, removeFromProgramNode } from "../src/utils";

describe('alignment', () => {
  const files = readFixtures();

  for (const file of files) {
    const filePath = path
      .normalize(path.relative(__dirname, file))
      .replace(/\\/g, '/');

    it(`${filePath}`, function() {
      return readFixture(file).then(({ content, isTsx }) => {
        let bCode;
        try {
          bCode = preprocessBabylonAST(parseBabel(content, isTsx));
          if (!bCode || bCode.parseError) {
            return;
          }
        } catch (e) {
          return;
        }

        const tsCode = parseTsEstree(content, isTsx);
        if (!tsCode || tsCode.parseError) {
          return;
        }

        expect(removeFromProgramNode(bCode)).toEqual(
          removeFromProgramNode(deeplyCopy(tsCode))
        );
      });
    });
  }
});
