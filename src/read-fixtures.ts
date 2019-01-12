import * as fs from 'fs';
import * as path from 'path';
// @ts-ignore
import glob = require('tiny-glob/sync');

const rootDir = path.join(__dirname, '..', 'projects');

const directories = [
  'TypeScript/tests/cases',
  'typescript-collections/src',
  'vue-tsx-support/src',
  'vue-tsx-support/test'
];

interface Fixture {
  file: string;
  content: string;
  isTsx: boolean;
}

export function readFixtures(): string[] {
  return directories.flatMap(directory =>
    glob('**/*.{ts,tsx,js,jsx}', {
      cwd: path.join(rootDir, directory),
      absolute: true,
      filesOnly: true
    })
  );
}

export async function readFixture(file: string): Promise<Fixture> {
  return new Promise(resolve => {
    fs.readFile(
      file,
      {
        encoding: 'utf-8'
      },
      (err, content) => {
        resolve({
          file: file.replace(/\\/g, '/'),
          content,
          isTsx: path.extname(file) === '.tsx'
        });
      }
    );
  });
}
