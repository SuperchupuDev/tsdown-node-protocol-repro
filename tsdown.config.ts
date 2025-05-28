import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  platform: 'node',
  target: 'node12',
  removeNodeProtocol: true
});
