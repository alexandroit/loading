# @stackline/loading-core project memory

Last updated: 2026-08-19

## Current release

- Package: `@stackline/loading-core`
- Stable version: `1.0.1`
- Public npm: `https://www.npmjs.com/package/@stackline/loading-core`
- Local Verdaccio: `http://127.0.0.1:4873/`
- Public docs: `https://alexandro.net/docs/vanilla/loading/`
- Repository: `https://github.com/alexandroit/loading`
- GitHub release: `https://github.com/alexandroit/loading/releases/tag/v1.0.1`

## Release evidence for 1.0.1

- Release source commit: `ac3e1e214fe447532254873a264b744cee515ff6`
- Git tag: `v1.0.1`
- GitHub Actions run: `https://github.com/alexandroit/loading/actions/runs/32311769283`
- CI result: passed on Node.js `22.22.0`.
- CI artifact path: `/storage/data/releases/stackline-loading-core/1.0.1-ci-32311769283/`
- Package filename: `stackline-loading-core-1.0.1.tgz`
- Package size: `147475` bytes.
- npm shasum: `162384c173953894d74e44dbe6240ccde60e30ce`
- SHA-512: `2327893b26f75623179b22aa210aa01d4c9313d7e3aade642dac7fe42c6ad4745b6fb98c5bd6ea271e83285a5fc73da053b9e39e577c1599c64d009063bd4564`
- npm integrity: `sha512-IyeJOyb3ViMXmyKqIQqgHUyTE9fjqt5kLax/5Cxq1HRbb7mMW9bqJx6DKFpfxz2gU7njnld8FZnGTQCQY71FZA==`
- The CI artifact, anonymous Verdaccio download, and anonymous public npm download had the same SHA-512.

## What changed in 1.0.1

- Updated Vite to `8.2.1`, Vitest to `4.1.11`, jsdom to `29.1.1`, and esbuild to `0.28.2`.
- Removed six vulnerable development paths reported by npm audit for the 1.0.0 toolchain, including the critical Vitest advisory.
- Declared esbuild directly for `build:download` instead of relying on a transitive dependency.
- Updated the Vite config to use `import.meta.dirname`, removing the Vite 8 native-config warning.
- Corrected ESM and CommonJS declaration routing with `index.d.ts` and `index.d.cts`.
- Added declaration normalization and a real TypeScript `3.9.10` compatibility test.
- Preserved all 15 JavaScript exports and all 35 loader variants.
- Confirmed the ESM and CommonJS runtime files are byte-identical to public version 1.0.0.
- Added `CHANGELOG.md`, pinned GitHub Actions CI, reproducible packaging, and SHA-512 verification.
- Moved `llms.txt` and `llms-full.txt` into `docs-src/public` so Vite rebuilds cannot remove them.
- Updated README, generated docs, AI guides, browser download, GitHub releases, Verdaccio, and public npm.

## Verification completed

- `npm ci`: passed with zero vulnerabilities.
- `npm run check`: passed.
- Runtime tests: `6/6` passed under Vitest 4 and jsdom 29.
- TypeScript `5.9.3` typecheck: passed.
- TypeScript `3.9.10` declaration parse: passed.
- ESM import and CommonJS require smoke tests: passed.
- Public API comparison against 1.0.0: identical exports and variants.
- `publint 0.3.23`: no errors; only the intentionally omitted Node engine suggestion.
- `@arethetypeswrong/cli 0.18.5`: no problems for Node 10, Node 16 CJS, Node 16 ESM, bundlers, or the package JSON export.
- `npm audit signatures`: all 128 dependencies had verified registry signatures; 44 had verified attestations.
- Public npm consumer install: passed with zero vulnerabilities.
- Production docs: desktop and mobile rendering checked, and all deployed file hashes matched local output.

The package intentionally does not declare `engines.node`. Its runtime is a browser-focused ES2020 library with zero runtime dependencies. Node 20.19+ is required by the development toolchain, not by consumers.

## Tombstoned old package name

Do not publish or document `@stackline/loading` as the current package.

- npm reports that old name as unpublished on `2026-04-10T02:19:10.845Z`.
- npm rejected reuse of the name with `E409`.
- The old local Verdaccio record was explicitly unpublished on `2026-05-22`.
- `@stackline/loading-core` is the permanent public package identity.

## Documentation deployment

- Local source: `/storage/data/github/revivejs/loading/loading/docs/`
- Production target: `/var/www/html/alexandro.net_docs/vanilla/loading/`
- SSH target: `codex-server`
- Deploy only this package route. Do not run a full docs-root `--delete` synchronization.
- Current production guides expose `1.0.1` in both `llms.txt` and `llms-full.txt`.

## Local integration app

Test app path:

```text
/storage/data/github/tests/stackline-loading-core-test
```

Current validated dependencies:

```text
@stackline/loading-core@1.0.1
vite@8.2.1
typescript@5.9.3
```

The app resolves the Stackline scope from Verdaccio, builds successfully, uses esbuild `0.28.2`, and has a zero-vulnerability audit.

Useful commands:

```bash
cd /storage/data/github/tests/stackline-loading-core-test
npm ls @stackline/loading-core vite typescript --depth=0
npm audit --audit-level=low
npm run build
```

## Release procedure for the next version

1. Preserve the public API, all variants, and TypeScript 3.9 declaration compatibility unless a documented major release changes support.
2. Keep AI guides in `docs-src/public`, then run `npm run check` to regenerate docs and downloads.
3. Run clean install, tests, audit, publint, arethetypeswrong, API comparison, and tarball smoke tests.
4. Push the release commit and wait for GitHub Actions to pass.
5. Publish the exact CI tarball to Verdaccio first and compare SHA-512 after anonymous download.
6. Publish the same tarball to public npm and compare SHA-512 after anonymous download.
7. Create the annotated tag and GitHub release with package, checksums, and browser bundle.
8. Deploy only `docs/vanilla/loading/`, verify production content and hashes, then update this memory.
