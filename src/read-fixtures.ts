import * as fs from 'fs';
import * as path from 'path';
// @ts-ignore
import glob = require('tiny-glob/sync');

const rootDir = path.join(
  __dirname,
  '..',
  'projects',
  'TypeScript',
  'tests',
  'cases'
);

interface Fixture {
  file: string;
  content: string;
  isTsx: boolean;
}

export function readFixtures(): string[] {
  return glob('**/*.{ts,tsx,js,jsx}', {
    cwd: rootDir
  });
}

export async function readFixture(file: string): Promise<Fixture> {
  return new Promise(resolve => {
    fs.readFile(
      path.join(rootDir, file),
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
