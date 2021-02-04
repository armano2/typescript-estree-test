import { normalize, relative, join } from 'path';

export function testName(file: string): string {
  return normalize(relative(join(__dirname, '..', '..'), file)).replace(
    /\\/g,
    '/',
  );
}
