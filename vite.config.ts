import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  root: resolve(__dirname, 'docs-src'),
  resolve: {
    alias: {
      '@docs': resolve(__dirname, 'docs-src'),
      '@stackline/loading': resolve(__dirname, 'src/index.ts')
    }
  },
  build: {
    emptyOutDir: true,
    outDir: resolve(__dirname, 'docs'),
    sourcemap: true
  },
  server: {
    port: 4173
  }
});
