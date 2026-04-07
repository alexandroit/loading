import type { LoaderVariant } from './types';
import { getVariantStyles, loaderBaseStyles } from '../styles';
import { canUseDOM } from '../utils/env';

const BASE_STYLE_MARKER = 'data-rvl-loading-base';
const VARIANT_STYLE_MARKER = 'data-rvl-loading-variant';

function ensureBaseLoaderStyles(doc: Document): void {
  if (doc.head.querySelector(`[${BASE_STYLE_MARKER}]`)) {
    return;
  }

  const style = doc.createElement('style');
  style.setAttribute(BASE_STYLE_MARKER, 'true');
  style.textContent = loaderBaseStyles;
  doc.head.append(style);
}

function ensureVariantLoaderStyles(variant: LoaderVariant, doc: Document): void {
  if (doc.head.querySelector(`[${VARIANT_STYLE_MARKER}="${variant}"]`)) {
    return;
  }

  const variantStyles = getVariantStyles(variant);
  if (!variantStyles.trim()) {
    return;
  }

  const style = doc.createElement('style');
  style.setAttribute(VARIANT_STYLE_MARKER, variant);
  style.textContent = variantStyles;
  doc.head.append(style);
}

export function ensureLoaderStyles(variant: LoaderVariant, doc: Document = document): void {
  if (!canUseDOM()) {
    return;
  }

  ensureBaseLoaderStyles(doc);
  ensureVariantLoaderStyles(variant, doc);
}
