import type { LoaderInstance, LoaderOptions, LoaderTarget } from './types';
import { createLoader } from './loader';

export function mountLoader(target: LoaderTarget, options: LoaderOptions = {}): LoaderInstance {
  const loader = createLoader({
    ...options,
    target,
    visible: options.visible ?? true
  });

  loader.mount(target);

  if (options.visible ?? true) {
    void loader.show();
  }

  return loader;
}

export function showLoader(target: LoaderTarget, options: LoaderOptions = {}): LoaderInstance {
  const loader = mountLoader(target, {
    ...options,
    visible: true
  });

  return loader;
}

export async function hideLoader(loader: LoaderInstance): Promise<void> {
  await loader.hide();
}
