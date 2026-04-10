import type { LoaderInstance, LoaderOptions } from './types';
import { createLoader } from './loader';

function parseBoolean(value: string | undefined): boolean | undefined {
  if (value == null) {
    return undefined;
  }

  return value === 'true' || value === '';
}

function parseNumber(value: string | undefined): number | undefined {
  if (value == null || value === '') {
    return undefined;
  }

  const parsed = Number(value);
  return Number.isNaN(parsed) ? undefined : parsed;
}

function parseOptions(element: HTMLElement): LoaderOptions {
  const { dataset } = element;
  const options: LoaderOptions = {};
  const size = parseNumber(dataset.loaderSize) ?? dataset.loaderSize;
  const radius = parseNumber(dataset.loaderRadius) ?? dataset.loaderRadius;
  const overlay = parseBoolean(dataset.loaderOverlay);
  const inline = parseBoolean(dataset.loaderInline);
  const centered = parseBoolean(dataset.loaderCentered);
  const fullscreen = parseBoolean(dataset.loaderFullscreen);
  const visible = parseBoolean(dataset.loaderVisible);
  const speed = parseNumber(dataset.loaderSpeed);
  const thickness = parseNumber(dataset.loaderThickness);
  const opacity = parseNumber(dataset.loaderOpacity);
  const blur = parseNumber(dataset.loaderBlur);
  const gap = parseNumber(dataset.loaderGap);
  const count = parseNumber(dataset.loaderCount);
  const delay = parseNumber(dataset.loaderDelay);
  const minVisible = parseNumber(dataset.loaderMinVisible);
  const zIndex = parseNumber(dataset.loaderZIndex);

  if (dataset.loaderVariant) {
    const variant = dataset.loaderVariant as LoaderOptions['variant'];
    if (variant) {
      options.variant = variant;
    }
  }

  if (size != null) {
    options.size = size;
  }

  if (dataset.loaderColor) {
    options.color = dataset.loaderColor;
  }

  if (dataset.loaderSecondaryColor) {
    options.secondaryColor = dataset.loaderSecondaryColor;
  }

  if (speed != null) {
    options.speed = speed;
  }

  if (thickness != null) {
    options.thickness = thickness;
  }

  if (opacity != null) {
    options.opacity = opacity;
  }

  if (dataset.loaderBackground) {
    options.background = dataset.loaderBackground;
  }

  if (overlay != null) {
    options.overlay = overlay;
  }

  if (blur != null) {
    options.blur = blur;
  }

  if (radius != null) {
    options.radius = radius;
  }

  if (gap != null) {
    options.gap = gap;
  }

  if (count != null) {
    options.count = count;
  }

  if (dataset.loaderDirection) {
    const direction = dataset.loaderDirection as LoaderOptions['direction'];
    if (direction) {
      options.direction = direction;
    }
  }

  if (dataset.loaderLabel) {
    options.label = dataset.loaderLabel;
  }

  if (inline != null) {
    options.inline = inline;
  }

  if (centered != null) {
    options.centered = centered;
  }

  if (fullscreen != null) {
    options.fullscreen = fullscreen;
  }

  if (visible != null) {
    options.visible = visible;
  }

  if (delay != null) {
    options.delay = delay;
  }

  if (minVisible != null) {
    options.minVisible = minVisible;
  }

  if (zIndex != null) {
    options.zIndex = zIndex;
  }

  if (dataset.loaderClassName) {
    options.className = dataset.loaderClassName;
  }

  if (dataset.loaderAriaLive) {
    const ariaLive = dataset.loaderAriaLive as LoaderOptions['ariaLive'];
    if (ariaLive) {
      options.ariaLive = ariaLive;
    }
  }

  return options;
}

export function hydrateLoaders(root: ParentNode = document): LoaderInstance[] {
  const hosts = Array.from(root.querySelectorAll<HTMLElement>('[data-stackline-loading]'));

  return hosts.map((host) => {
    const loader = createLoader({
      ...parseOptions(host),
      target: host,
      visible: true
    });

    loader.mount(host);
    void loader.show();
    return loader;
  });
}
