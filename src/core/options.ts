import type { LoaderOptions, ResolvedLoaderOptions } from './types';
import { getVariantDefinition, getVariantPartCount } from '../variants/definitions';
import { toCssSize } from '../utils/css';
import { withAlpha } from '../utils/color';
import { clamp, positiveNumber } from '../utils/math';

const baseDefaults: Omit<ResolvedLoaderOptions, 'count'> = {
  variant: 'ring',
  size: '40px',
  color: 'var(--rvl-theme-color)',
  secondaryColor: 'var(--rvl-theme-secondary)',
  speed: 900,
  thickness: 3,
  opacity: 1,
  background: 'var(--rvl-theme-overlay)',
  overlay: false,
  blur: 12,
  radius: '18px',
  gap: 8,
  direction: 'normal',
  label: '',
  inline: false,
  centered: false,
  fullscreen: false,
  visible: false,
  delay: 0,
  minVisible: 240,
  zIndex: 1600,
  className: '',
  style: {},
  ariaLive: 'polite',
  target: null
};

export function normalizeLoaderOptions(options: LoaderOptions = {}): ResolvedLoaderOptions {
  const variant = options.variant ?? baseDefaults.variant;
  const definition = getVariantDefinition(variant);
  const color = options.color ?? baseDefaults.color;
  const secondaryColor = options.secondaryColor ?? withAlpha(color, 0.2);
  const hasExplicitLabel = Object.prototype.hasOwnProperty.call(options, 'label');

  const resolved: ResolvedLoaderOptions = {
    variant,
    size: toCssSize(options.size, baseDefaults.size),
    color,
    secondaryColor,
    speed: clamp(positiveNumber(options.speed, baseDefaults.speed), 200, 8000),
    thickness: clamp(positiveNumber(options.thickness, baseDefaults.thickness), 1, 16),
    opacity: clamp(typeof options.opacity === 'number' ? options.opacity : baseDefaults.opacity, 0.12, 1),
    background: options.background ?? baseDefaults.background,
    overlay: options.overlay ?? baseDefaults.overlay,
    blur: clamp(positiveNumber(options.blur, baseDefaults.blur), 0, 32),
    radius: toCssSize(options.radius, baseDefaults.radius),
    gap: clamp(positiveNumber(options.gap, baseDefaults.gap), 0, 48),
    count: getVariantPartCount(variant, options),
    direction: options.direction ?? baseDefaults.direction,
    label: hasExplicitLabel ? (options.label ?? '') : baseDefaults.label,
    inline: options.inline ?? baseDefaults.inline,
    centered: options.centered ?? baseDefaults.centered,
    fullscreen: options.fullscreen ?? baseDefaults.fullscreen,
    visible: options.visible ?? baseDefaults.visible,
    delay: clamp(positiveNumber(options.delay, baseDefaults.delay), 0, 30000),
    minVisible: clamp(positiveNumber(options.minVisible, baseDefaults.minVisible), 0, 60000),
    zIndex: clamp(positiveNumber(options.zIndex, baseDefaults.zIndex), 1, 2147483647),
    className: options.className?.trim() ?? baseDefaults.className,
    style: options.style ?? {},
    ariaLive: options.ariaLive ?? baseDefaults.ariaLive,
    target: options.target ?? baseDefaults.target
  };

  if (resolved.fullscreen) {
    resolved.overlay = true;
    resolved.inline = false;
    resolved.centered = true;
  }

  if (resolved.inline) {
    resolved.overlay = false;
    resolved.fullscreen = false;
  }

  if (!hasExplicitLabel && !resolved.label) {
    resolved.label = `Loading with ${definition.label.toLowerCase()}`;
  }

  return resolved;
}

export function getPublicDefaults(): LoaderOptions {
  return {
    ...baseDefaults,
    size: 40,
    radius: 18,
    target: null
  };
}
