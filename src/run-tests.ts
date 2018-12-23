import { parse } from 'typescript-estree/dist/parser';
import { readFixtures } from './read-fixtures';
import * as path from 'path';
import * as fs from 'fs';

const errors = new Map<string, string[]>();

readFixtures((file: string, content: string, isTsx: boolean) => {
  try {
    parse(content, {
      errorOnUnknownASTType: true,
      jsx: isTsx
    });
  } catch (e) {
    const filePath = path
      .normalize(path.relative(__dirname, file))
      .replace(/\\/g, '/');

    const error = errors.get(e.message);
    if (error) {
      error.push(filePath);
    } else {
      errors.set(e.message, [filePath]);
    }
  }
}).then(() => {
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
