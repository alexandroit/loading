import { createLoader } from '@stackline/loading';

const host = document.querySelector<HTMLElement>('[data-fast-request]');

if (host) {
  const loader = createLoader({
    variant: 'ring',
    overlay: true,
    centered: true,
    delay: 180,
    minVisible: 280,
    label: 'Checking availability'
  });

  loader.mount(host);
  void loader.show();

  runFastRequest()
    .finally(() => loader.hide())
    .finally(() => loader.destroy());
}

async function runFastRequest(): Promise<void> {
  await new Promise((resolve) => window.setTimeout(resolve, 140));
}
