import { readFixtures, readFixture } from './read-fixtures';
import * as path from 'path';
import * as fs from 'fs';
import { parseTsEstree } from './utils';

const errors = new Map<string, string[]>();

const files = readFixtures();

const promises = [];
for (const file of files) {
  promises.push(
    readFixture(file).then(({ file, content, isTsx }) => {
      try {
        parseTsEstree(content, isTsx);
      } catch (e) {
        const filePath = path
          .normalize(path.relative(__dirname, file))
          .replace(/\\/g, '/');

        // if (tsCode.parseError.startsWith('Unknown AST_NODE_TYPE')) {
        const error = errors.get(e.message);
        if (error) {
          error.push(filePath);
        } else {
          errors.set(e.message, [filePath]);
        }
      }
    })
  );
}

Promise.all(promises).then(() => {
  const err = Array.from(errors);
  const toReport = {
    messages: err.map(item => item[0]),
    details: err.map(item => {
      return {
        message: item[0],
        files: item[1]
      };
    })
  };

  fs.writeFileSync(
    './messages.json',
    JSON.stringify(toReport.messages, null, 2)
  );
  fs.writeFileSync('./report.json', JSON.stringify(toReport, null, 2));
  console.log('reports saved.');
});
