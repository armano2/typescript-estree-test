import * as fs from 'fs';
import * as path from 'path';
import glob = require('tiny-glob');
import { parse } from 'typescript-estree/dist/parser';

const errors = new Map<string, string[]>();

glob('projects/**/*.ts', {
  cwd: __dirname,
  absolute: true
})
  .then(files => {
    for (const file of files) {
      const content = fs.readFileSync(file, {
        encoding: 'utf-8'
      });
      try {
        parse(content, {
          errorOnUnknownASTType: true
        });
      } catch (e) {
        const filePath = path.normalize(path.relative(__dirname, file));
        const error = errors.get(e.message);
        if (error) {
          error.push(filePath);
        } else {
          errors.set(e.message, [filePath]);
        }
      }
    }

    const toReport = {
      messages: Array.from(errors).map(item => item[0]),
      details: Array.from(errors).map(item => {
        return {
          message: item[0],
          files: item[1]
        };
      })
    };

    fs.writeFileSync('./messages.json', JSON.stringify(toReport.messages, null, 2));
    fs.writeFileSync('./report.json', JSON.stringify(toReport, null, 2));
    console.log('report saved.');
  })
  .catch(e => {
    throw e;
  });
