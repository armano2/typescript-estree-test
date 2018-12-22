import * as fs from 'fs';
import * as path from 'path';
import glob = require('tiny-glob');
import { parse } from 'typescript-estree/dist/parser';

const errors = new Map<string, string>();

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
        errors.set(e.message, path.relative(__dirname, file));
      }
    }

    console.error(Array.from(errors));
  })
  .catch(e => {
    throw e;
  });
