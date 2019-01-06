import { readFixture, readFixtures } from './read-fixtures';
import { parseBabel, parseTsEstree } from './parser';
import * as path from 'path';
import { removeFromProgramNode } from './utils';
import assert from 'assert';
import { preprocessBabelAST } from "./babel-utils";

describe('alignment', () => {
  const files = readFixtures();

  for (const file of files) {
    const filePath = path
      .normalize(path.relative(__dirname, file))
      .replace(/\\/g, '/');

    it(`${filePath}`, function() {
      return readFixture(file).then(({ content, isTsx }) => {
        const bCode = preprocessBabelAST(parseBabel(content, isTsx));
        if (!bCode || bCode.parseError) {
          return;
        }

        const tsCode = parseTsEstree(content, isTsx);
        if (!tsCode || tsCode.parseError) {
          return;
        }

        assert.deepStrictEqual(
          removeFromProgramNode(tsCode),
          removeFromProgramNode(bCode)
        );
      });
    });
  }
});
