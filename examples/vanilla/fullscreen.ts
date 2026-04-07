import { createLoader } from '@revivejs/loading';

const loader = createLoader({
  variant: 'vortex',
  size: 72,
  fullscreen: true,
  background: 'rgba(15, 23, 42, 0.54)',
  label: 'Loading workspace'
});

void loader.show();

bootstrapWorkspace()
  .finally(() => loader.hide())
  .finally(() => loader.destroy());

async function bootstrapWorkspace(): Promise<void> {
  await new Promise((resolve) => window.setTimeout(resolve, 2200));
}
