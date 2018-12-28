import * as fs from 'fs';
import * as path from 'path';
import glob = require('tiny-glob');

const rootDir = path.join(__dirname, '..', 'projects', 'TypeScript', 'tests', 'cases');

export async function readFixtures(
  onRead: (file: string, content: string, isTsx: boolean) => void
) {
  const files = await glob('**/*.{ts,tsx,js,jsx}', {
    cwd: rootDir
  });

  console.log(`reading ${files.length} files.`);

  const promises = [];

  for (const file of files) {
    promises.push(new Promise((resolve) => {
      fs.readFile(path.join(rootDir, file), {
        encoding: 'utf-8'
      }, (err, content) => {
        onRead(
          file.replace(/\\/g, '/'),
          content,
          path.extname(file) === '.tsx'
        );
        resolve()
      });
    }))
  }

  return Promise.all(promises);
}
