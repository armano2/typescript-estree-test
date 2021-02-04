import { readFixture, readFixtures } from '../src/read-fixtures';
import {
  deeplyCopy,
  parseWithBabelParser,
  parseWithTypeScriptESTree,
  preprocessBabylonAST,
  removeFromProgramNode,
  testName,
} from '../src/utils';

describe('alignment', () => {
  const files = readFixtures();

  for (const file of files) {
    it(`${testName(file)}`, function () {
      return readFixture(file).then(({ content, isTsx }) => {
        let bCode, tsCode;
        try {
          bCode = preprocessBabylonAST(parseWithBabelParser(content, isTsx));
          tsCode = deeplyCopy(parseWithTypeScriptESTree(content, isTsx));
        } catch (e) {
          return;
        }

        expect(removeFromProgramNode(bCode)).toEqual(
          removeFromProgramNode(tsCode),
        );
      });
    });
  }
});
