import { join } from 'node:path';

console.log(join('this is a', 'path'));

export function myCoolRequire() {
  return require.resolve('picomatch');
}