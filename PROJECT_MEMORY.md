# @stackline/loading-core project memory

Last updated: 2026-05-22

## Current release

- Package: `@stackline/loading-core`
- Stable version: `1.0.0`
- Public npm registry: `https://registry.npmjs.org/`
- Local Verdaccio registry: `http://192.168.3.52:4873/`
- Public docs: `https://alexandro.net/docs/vanilla/loading/`
- Repository: `https://github.com/alexandroit/loading`

## What was done for 1.0.0

- Set `package.json` and `package-lock.json` to `1.0.0`.
- Updated `README.md` and `docs-src/content/pages.ts` to describe the stable baseline.
- Rebuilt generated library output, static docs, and direct download assets.
- Renamed the public package from `@stackline/loading` to `@stackline/loading-core` because the old npm package name is blocked by an unpublished registry record.
- Published `@stackline/loading-core@1.0.0` to public npm.
- Published `@stackline/loading-core@1.0.0` to the local Verdaccio registry.
- Updated the local test app to install `@stackline/loading-core@1.0.0` from Verdaccio.
- Published static docs to the production docs root on `codex-server`:
  - source staging: `/storage/data/build/alexandro.net-docs`
  - production target: `/var/www/html/alexandro.net_docs`
- Updated the `alexandro.net` public catalog so `/projects/loading/` shows `1.0.0`.

## npm public registry note

Publishing to `https://registry.npmjs.org/` was attempted for `@stackline/loading@1.0.0`, but npm rejected the old package name with `E409`.

The registry reports:

```text
Unpublished on 2026-04-10T02:19:10.845Z
```

Because of that registry state, the public catalog should use the `@stackline/loading-core` npm URL instead of the old `@stackline/loading` URL.

The package is now published publicly as:

```text
@stackline/loading-core@1.0.0
```

## Verification commands

Run these from `/storage/data/github/revivejs/loading/loading`:

```bash
npm run typecheck
npm test
npm run build:all
npm pack --dry-run
npm view @stackline/loading-core versions --registry http://192.168.3.52:4873/
```

Expected package check from the local test app:

```text
@stackline/loading-core@1.0.0
```

## Local test app

Test app path:

```text
/storage/data/github/tests/stackline-loading-core-test
```

The app installs `@stackline/loading-core@1.0.0` from local Verdaccio and runs with Vite.

Useful commands:

```bash
cd /storage/data/github/tests/stackline-loading-core-test
npm ls @stackline/loading-core --depth=0
npm run build
npm run dev -- --host 0.0.0.0
```

Current local test URL:

```text
http://192.168.3.52:5174/
```

## Notes for future releases

- Keep docs source changes in `docs-src`, then rebuild generated `docs`.
- Re-run the shared docs staging script before publishing docs:

```bash
node /storage/data/github/revivejs/tools/stage-alexandro-docs.mjs
```

- Sync staged docs to the production server with sudo rsync:

```bash
rsync -az --delete --rsync-path='sudo rsync' /storage/data/build/alexandro.net-docs/ codex-server:/var/www/html/alexandro.net_docs/
```

- Publish to local Verdaccio from localhost because the saved auth token is host-specific:

```bash
npm publish --registry http://127.0.0.1:4873/ --access public
```

- If the local Verdaccio metadata ever inherits an upstream npm `time.unpublished` marker again, remove that marker from the local storage metadata before using `npm view`.
