import { readFixtures, readFixture } from './read-fixtures';
import path from 'path';
import fs from 'fs';
import { parseTsEstree } from './utils';

const missingNodes = new Map<string, string[]>();
const parseErrors = new Map<string, string[]>();

const files = readFixtures();

function createReport(errors: Map<string, string[]>) {
  const err = Array.from(errors);
  return {
    messages: err.map(item => item[0]),
    details: err.map(item => {
      return {
        message: item[0],
        files: item[1],
      };
    }),
  };
}

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

        if (e.message.startsWith('Unknown AST_NODE_TYPE')) {
          const error = missingNodes.get(e.message);
          if (error) {
            error.push(filePath);
          } else {
            missingNodes.set(e.message, [filePath]);
          }
        } else {
          const error = parseErrors.get(e.message);
          if (error) {
            error.push(filePath);
          } else {
            parseErrors.set(e.message, [filePath]);
          }
        }
      }
    }),
  );
}

function saveFile(name: string, data: unknown) {
  fs.writeFileSync(`./gen/${name}.json`, JSON.stringify(data, null, 2));
}

Promise.all(promises).then(() => {
  const toReport = createReport(missingNodes);
  const parseToReport = createReport(parseErrors);

  saveFile('messages', {
    nodes: toReport.messages,
    parse: parseToReport.messages,
  });
  saveFile('report', {
    nodes: toReport,
    parse: parseToReport,
  });
  console.log('reports saved.');
});
