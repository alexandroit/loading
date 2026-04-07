function hexToRgba(hex: string, alpha: number): string {
  const normalized = hex.replace('#', '').trim();
  const full = normalized.length === 3
    ? normalized.split('').map((char) => `${char}${char}`).join('')
    : normalized.length === 4
      ? normalized.split('').map((char) => `${char}${char}`).join('')
      : normalized;

  if (full.length !== 6 && full.length !== 8) {
    return `color-mix(in srgb, ${hex} ${Math.round(alpha * 100)}%, transparent)`;
  }

  const red = parseInt(full.slice(0, 2), 16);
  const green = parseInt(full.slice(2, 4), 16);
  const blue = parseInt(full.slice(4, 6), 16);
  const existingAlpha = full.length === 8 ? parseInt(full.slice(6, 8), 16) / 255 : 1;

  return `rgba(${red}, ${green}, ${blue}, ${Math.max(0, Math.min(1, existingAlpha * alpha))})`;
}

function rgbToRgba(color: string, alpha: number): string {
  const parts = color
    .replace(/rgba?\(/, '')
    .replace(')', '')
    .split(',')
    .map((part) => part.trim());

  if (parts.length < 3) {
    return `color-mix(in srgb, ${color} ${Math.round(alpha * 100)}%, transparent)`;
  }

  return `rgba(${parts[0]}, ${parts[1]}, ${parts[2]}, ${alpha})`;
}

export function withAlpha(color: string, alpha: number): string {
  const normalizedAlpha = Math.max(0, Math.min(1, alpha));

  if (color.startsWith('#')) {
    return hexToRgba(color, normalizedAlpha);
  }

  if (color.startsWith('rgb')) {
    return rgbToRgba(color, normalizedAlpha);
  }

  return `color-mix(in srgb, ${color} ${Math.round(normalizedAlpha * 100)}%, transparent)`;
}
