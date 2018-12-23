import * as fs from 'fs';
import * as path from 'path';
import glob = require('tiny-glob');

const rootDir = path.join(__dirname, '..', 'projects');

export async function readFixtures(
  onRead: (file: string, content: string, isTsx: boolean) => void
) {
  const files = await glob('**/*.{ts,tsx}', {
    cwd: rootDir
  });

  console.log(`reading ${files.length} files.`);

  files.forEach(file => {
    const content = fs.readFileSync(path.join(rootDir, file), {
      encoding: 'utf-8'
    });
    onRead(
      file.replace(/\\/g, '/'),
      content,
      path.extname(file) === '.tsx'
    );
  });

  console.log('reading finished.');

  return files;
}
