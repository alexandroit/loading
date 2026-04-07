import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
  minify: false,
  outDir: 'dist',
  platform: 'browser',
  sourcemap: true,
  splitting: false,
  target: 'es2020',
  treeshake: true
});
