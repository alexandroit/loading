import type { StyleObject, StyleValue } from '../core/types';

export function toCssSize(value: string | number | undefined, fallback: string | number): string {
  const source = value ?? fallback;
  return typeof source === 'number' ? `${source}px` : source;
}

function toKebabCase(value: string): string {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

export function applyStyleObject(target: HTMLElement, styles: StyleObject): void {
  Object.entries(styles).forEach(([key, value]) => {
    const property = key.startsWith('--') ? key : toKebabCase(key);

    if (value == null) {
      target.style.removeProperty(property);
      return;
    }

    target.style.setProperty(property, normalizeStyleValue(value));
  });
}

export function normalizeStyleValue(value: StyleValue): string {
  return typeof value === 'number' ? String(value) : value ?? '';
}
