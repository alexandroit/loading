import type { LoaderTarget } from '../core/types';

export function resolveTarget(target: LoaderTarget, doc: Document = document): HTMLElement {
  if (typeof target === 'string') {
    const found = doc.querySelector<HTMLElement>(target);

    if (!found) {
      throw new Error(`@revivejs/loading could not find target "${target}".`);
    }

    return found;
  }

  if (target instanceof HTMLElement) {
    return target;
  }

  return doc.body;
}

export function ensurePositionContext(target: HTMLElement): () => void {
  if (target === document.body || target === document.documentElement) {
    return () => undefined;
  }

  const computedPosition = window.getComputedStyle(target).position;

  if (computedPosition && computedPosition !== 'static') {
    return () => undefined;
  }

  const previousInlineValue = target.style.position;
  target.style.position = 'relative';

  return () => {
    if (previousInlineValue) {
      target.style.position = previousInlineValue;
      return;
    }

    target.style.removeProperty('position');
  };
}
