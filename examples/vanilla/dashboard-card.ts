import { createLoader } from '@stackline/loading';

const card = document.querySelector<HTMLElement>('[data-revenue-card]');

if (card) {
  const loader = createLoader({
    variant: 'orbit',
    size: 42,
    overlay: true,
    centered: true,
    label: 'Refreshing revenue'
  });

  loader.mount(card);
  void loader.show();

  loadRevenueCard()
    .finally(() => loader.hide())
    .finally(() => loader.destroy());
}

async function loadRevenueCard(): Promise<void> {
  await new Promise((resolve) => window.setTimeout(resolve, 1200));
}
