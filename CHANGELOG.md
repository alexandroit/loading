# Changelog

All notable changes to `@stackline/loading-core` are documented here.

## [1.0.1] - 2026-08-19

- Updated Vite to 8.2.1, Vitest to 4.1.11, jsdom to 29.1.1, and esbuild to 0.28.2.
- Removed the vulnerable legacy development dependency paths reported for the 1.0.0 toolchain.
- Declared esbuild directly for the browser-download build instead of relying on a transitive dependency.
- Corrected ESM and CommonJS declaration routing.
- Kept public declarations parseable by TypeScript 3.9 while retaining TypeScript 5.9 for builds.
- Preserved the runtime API, all 35 loader variants, and the zero-runtime-dependency package model.
- Added reproducible GitHub Actions packaging with a SHA-512 checksum.
- Made the AI documentation guides durable Vite public assets.

## [1.0.0] - 2026-05-22

- Published the stable Stackline loading runtime and vanilla documentation baseline.

[1.0.1]: https://github.com/alexandroit/loading/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/alexandroit/loading/releases/tag/v1.0.0
