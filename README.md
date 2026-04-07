# @revivejs/loading

> A maintained **framework-agnostic loading toolkit** for modern web applications, with polished variants, smart anti-flicker behavior, accessible defaults, and a documentation site with a live playground.

[![npm version](https://img.shields.io/npm/v/@revivejs/loading.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/loading)
[![npm downloads](https://img.shields.io/npm/dt/@revivejs/loading.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/loading)
[![license](https://img.shields.io/npm/l/@revivejs/loading.svg?style=flat-square)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![ESM + CJS](https://img.shields.io/badge/Build-ESM%20%2B%20CJS-111827?style=flat-square)](https://www.npmjs.com/package/@revivejs/loading)
[![Docs](https://img.shields.io/badge/Docs-Playground%20%26%20Guides-0f172a?style=flat-square)](https://alexandroit.github.io/loading/)

**[Documentation & Playground](https://alexandroit.github.io/loading/)** | **[npm](https://www.npmjs.com/package/@revivejs/loading)** | **[Issues](https://github.com/alexandroit/loading/issues)** | **[Repository](https://github.com/alexandroit/loading)**

**Latest version:** `0.1.1`

---

## Why this library?

Most loading packages stop at a basic spinner. Real products need more:

- multiple visual styles for cards, buttons, dashboards, tables, modals, and fullscreen states
- anti-flicker behavior so fast requests do not flash awkwardly
- accessible defaults with labels, `role="status"`, `aria-live`, and reduced-motion support
- themeability through CSS variables without bringing a framework wrapper into the core package

`@revivejs/loading` is built as a DOM-first TypeScript library that stays focused on the core runtime, so future framework wrappers can stay thin and consistent.

## Features

| Feature | Supported |
| :--- | :---: |
| TypeScript-first core library | ✅ |
| Framework-agnostic DOM runtime | ✅ |
| ESM + CJS + bundled types | ✅ |
| 35 built-in loading variants | ✅ |
| Spinner, dots, bars, shimmer, skeleton, geometric, sports, and cosmic styles | ✅ |
| Overlay, fullscreen, inline, and centered modes | ✅ |
| Delay before show | ✅ |
| Minimum visible duration | ✅ |
| Mount, unmount, show, hide, toggle, and destroy lifecycle | ✅ |
| Accessible labels and `aria-live` support | ✅ |
| Reduced-motion support | ✅ |
| CSS variable theming | ✅ |
| Documentation site with live playground | ✅ |
| Variant CSS injected on demand | ✅ |

## Table of Contents

1. [Installation](#installation)
2. [Quick Start](#quick-start)
3. [API Overview](#api-overview)
4. [Built-in Variants](#built-in-variants)
5. [Smart Loading Behavior](#smart-loading-behavior)
6. [Accessibility and Theming](#accessibility-and-theming)
7. [Documentation and Playground](#documentation-and-playground)
8. [Run Locally](#run-locally)
9. [License](#license)

## Installation

```bash
npm install @revivejs/loading
```

## Quick Start

```ts
import { createLoader } from '@revivejs/loading';

const panel = document.querySelector('.analytics-panel');

const loader = createLoader({
  variant: 'orbit',
  size: 48,
  color: '#2563eb',
  overlay: true,
  centered: true,
  delay: 150,
  minVisible: 280,
  label: 'Loading analytics'
});

loader.mount(panel);
loader.show();

try {
  await loadAnalytics();
} finally {
  await loader.hide();
  loader.destroy();
}
```

## API Overview

The library is centered around a small public API:

```ts
import {
  createLoader,
  hideLoader,
  hydrateLoaders,
  mountLoader,
  showLoader
} from '@revivejs/loading';
```

Core runtime capabilities:

- `createLoader(options)` creates a typed loader instance
- `loader.mount(target)` mounts into a container or fullscreen target
- `loader.show()` and `loader.hide()` respect `delay` and `minVisible`
- `loader.update()` lets you change variant, colors, sizing, or mode at runtime
- `loader.destroy()` removes the instance cleanly
- `hydrateLoaders()` enables declarative DOM usage through `data-*` attributes

## Built-in Variants

The package currently ships 35 variants:

- `ring`, `dual-ring`, `segmented-ring`, `arc`, `orbit`, `comet`, `halo`, `radar`
- `astronaut`, `astronaut-to-mars`, `baseball-player`, `football-player`, `galaxy`
- `pulse`, `wave-dots`, `bouncing-dots`, `typing-dots`, `grid-pulse`, `magnetic-dots`, `spiral-dots`, `constellation`
- `equalizer-bars`, `rising-bars`
- `shimmer`, `scan-line`, `liquid-pill`, `ripple-stack`, `minimal-spinner`, `neon-spinner`, `glass-spinner`
- `vortex`, `cube`, `diamond`, `prism`, `skeleton-blocks`

## Smart Loading Behavior

The toolkit is designed for real application behavior, not just decoration.

- `delay` prevents flashing loaders for very fast requests
- `minVisible` avoids abrupt hide/show flicker once the loader appears
- `overlay`, `fullscreen`, `inline`, and `centered` cover common product layouts
- runtime mounting makes it easy to load cards, sections, buttons, tables, modals, and full pages

Example:

```ts
const loader = createLoader({
  variant: 'ring',
  delay: 180,
  minVisible: 320,
  overlay: true,
  centered: true,
  label: 'Syncing dashboard'
});
```

## Accessibility and Theming

Accessibility is part of the default behavior:

- `role="status"` and `aria-live` support
- optional visible labels
- `label: ''` for compact cases where visible text should be removed
- reduced-motion support via `prefers-reduced-motion`

Theming is handled with CSS variables and exported theme tokens, so branded overrides stay straightforward.

## Documentation and Playground

The docs site includes:

- installation and quick start guides
- API reference
- variants gallery
- theming and accessibility guides
- overlay, button, fullscreen, and container loading examples
- delay and minimum visibility guidance
- a live playground for variant, size, speed, color, and behavior testing

Docs: `https://alexandroit.github.io/loading/`

## Run Locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Verification:

```bash
npm run typecheck
npm test
```

## License

MIT
