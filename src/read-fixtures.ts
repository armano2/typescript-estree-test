import fs from 'fs';
import path from 'path';
// @ts-ignore
import glob = require('tiny-glob/sync');

const rootDir = path.join(__dirname, '..', 'projects');

const directories = ['TypeScript/'];

interface Fixture {
  file: string;
  content: string;
  isTsx: boolean;
}

/**
 * Check if file extension is one used for jsx
 * @param fileType
 */
export function isJSXFileType(fileType: string): boolean {
  if (fileType.startsWith('.')) {
    fileType = fileType.slice(1);
  }
  return fileType === 'js' || fileType === 'jsx' || fileType === 'tsx';
}

export function readFixtures(): string[] {
  return directories
    .map(directory =>
      glob('**/*.{ts,tsx,js,jsx,json}', {
        cwd: path.join(rootDir, directory),
        absolute: true,
        filesOnly: true
      })
    )
    .flat();
}

export async function readFixture(file: string): Promise<Fixture> {
  return new Promise(resolve => {
    fs.readFile(file, 'utf-8', (err, content) => {
      resolve({
        file: file.replace(/\\/g, '/'),
        content,
        isTsx: isJSXFileType(path.extname(file))
      });
    });
  });
}
