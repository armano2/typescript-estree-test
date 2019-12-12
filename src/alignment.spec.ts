import { readFixture, readFixtures } from './read-fixtures';
import { parseBabel, parseTsEstree } from './parser';
import * as path from 'path';
import { removeFromProgramNode } from './utils';
import { omitCommon, preprocessBabelAST, preprocessESTSTreeAST } from "./babel-utils";

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
          bCode = preprocessBabelAST(parseBabel(content, isTsx));
          if (!bCode || bCode.parseError) {
            return;
          }
        } catch (e) {
          return;
        }

        const tsCode = preprocessESTSTreeAST(parseTsEstree(content, isTsx));
        if (!tsCode || tsCode.parseError) {
          return;
        }

        expect(removeFromProgramNode(omitCommon(bCode))).toEqual(
          removeFromProgramNode(omitCommon(tsCode))
        );
      });
    });
  }
});
