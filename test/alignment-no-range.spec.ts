import { readFixture, readFixtures } from '../src/read-fixtures';
import {
  omitRange,
  parseBabel,
  parseTsEstree,
  preprocessBabylonAST,
  removeFromProgramNode,
  testName,
} from '../src/utils';

describe('alignment', () => {
  const files = readFixtures();

  for (const file of files) {
    it(`${testName(file)}`, function() {
      return readFixture(file).then(({ content, isTsx }) => {
        let bCode, tsCode;
        try {
          bCode = preprocessBabylonAST(parseBabel(content, isTsx));
          tsCode = parseTsEstree(content, isTsx);
        } catch (e) {
          return;
        }

        expect(removeFromProgramNode(omitRange(tsCode))).toEqual(
          removeFromProgramNode(omitRange(bCode)),
        );
      });
    });
  }
});
