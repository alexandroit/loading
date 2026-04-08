import { createLoader } from '@stackline/loading';

const section = document.querySelector<HTMLElement>('[data-table-section]');

if (section) {
  const loader = createLoader({
    variant: 'shimmer',
    overlay: true,
    centered: true,
    radius: 20,
    label: 'Loading customer rows'
  });

  loader.mount(section);
  void loader.show();

  reloadCustomers()
    .finally(() => loader.hide())
    .finally(() => loader.destroy());
}

async function reloadCustomers(): Promise<void> {
  await new Promise((resolve) => window.setTimeout(resolve, 1600));
}
