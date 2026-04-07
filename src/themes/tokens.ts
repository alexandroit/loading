import type { LoaderThemeTokens } from '../core/types';

export const lightTheme: LoaderThemeTokens = {
  color: '#2563eb',
  secondaryColor: 'rgba(37, 99, 235, 0.18)',
  surface: 'rgba(255, 255, 255, 0.92)',
  overlay: 'rgba(255, 255, 255, 0.72)',
  text: '#0f172a',
  muted: '#475569'
};

export const darkTheme: LoaderThemeTokens = {
  color: '#60a5fa',
  secondaryColor: 'rgba(96, 165, 250, 0.24)',
  surface: 'rgba(15, 23, 42, 0.78)',
  overlay: 'rgba(2, 6, 23, 0.7)',
  text: '#e2e8f0',
  muted: '#94a3b8'
};

export function applyThemeTokens(
  target: HTMLElement = document.documentElement,
  tokens: Partial<LoaderThemeTokens>
): HTMLElement {
  if (tokens.color) {
    target.style.setProperty('--rvl-theme-color', tokens.color);
  }

  if (tokens.secondaryColor) {
    target.style.setProperty('--rvl-theme-secondary', tokens.secondaryColor);
  }

  if (tokens.surface) {
    target.style.setProperty('--rvl-theme-surface', tokens.surface);
  }

  if (tokens.overlay) {
    target.style.setProperty('--rvl-theme-overlay', tokens.overlay);
  }

  if (tokens.text) {
    target.style.setProperty('--rvl-theme-text', tokens.text);
  }

  if (tokens.muted) {
    target.style.setProperty('--rvl-theme-muted', tokens.muted);
  }

  return target;
}
