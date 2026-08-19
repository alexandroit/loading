import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const rootDir = import.meta.dirname;

export default defineConfig({
  base: './',
  root: resolve(rootDir, 'docs-src'),
  resolve: {
    alias: {
      '@docs': resolve(rootDir, 'docs-src'),
      '@stackline/loading-core': resolve(rootDir, 'src/index.ts')
    }
  },
  build: {
    emptyOutDir: true,
    outDir: resolve(rootDir, 'docs'),
    sourcemap: true
  },
  server: {
    port: 4173
  }
});
