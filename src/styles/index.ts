import type { LoaderVariant } from '../core/types';
import { baseStyles } from './base';
import { variantStyles } from './variants';

const VARIANT_SELECTOR_PREFIX = '.rvl-variant--';
const variantStyleCache = new Map<LoaderVariant, string>();

function extractVariantStyles(variant: LoaderVariant): string {
  const requestedSelector = `${VARIANT_SELECTOR_PREFIX}${variant}`;
  const chunks: string[] = [];
  let index = 0;

  while (index < variantStyles.length) {
    while (index < variantStyles.length && /\s/.test(variantStyles[index] ?? '')) {
      index += 1;
    }

    if (index >= variantStyles.length) {
      break;
    }

    const selectorStart = index;
    while (index < variantStyles.length && variantStyles[index] !== '{') {
      index += 1;
    }

    if (index >= variantStyles.length) {
      break;
    }

    const selectorText = variantStyles.slice(selectorStart, index).trim();
    index += 1;

    const bodyStart = index;
    let depth = 1;

    while (index < variantStyles.length && depth > 0) {
      const character = variantStyles[index];

      if (character === '{') {
        depth += 1;
      } else if (character === '}') {
        depth -= 1;
      }

      index += 1;
    }

    if (!selectorText.includes(VARIANT_SELECTOR_PREFIX)) {
      continue;
    }

    const selectors = selectorText
      .split(',')
      .map((selector) => selector.trim())
      .filter(Boolean)
      .filter((selector) => selector.includes(requestedSelector));

    if (!selectors.length) {
      continue;
    }

    const bodyText = variantStyles.slice(bodyStart, index - 1).trimEnd();
    chunks.push(`${selectors.join(',\n')} {\n${bodyText}\n}`);
  }

  return chunks.join('\n\n');
}

export function getVariantStyles(variant: LoaderVariant): string {
  const cached = variantStyleCache.get(variant);
  if (cached) {
    return cached;
  }

  const styles = extractVariantStyles(variant);
  variantStyleCache.set(variant, styles);
  return styles;
}

export function getLoaderStyles(variant?: LoaderVariant): string {
  if (variant) {
    return `${baseStyles}\n${getVariantStyles(variant)}`;
  }

  return `${baseStyles}\n${variantStyles}`;
}

export const loaderBaseStyles = baseStyles;
export const loaderStyles = getLoaderStyles();
