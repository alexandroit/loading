import { createLoader } from '@revivejs/loading';

const uploadZone = document.querySelector<HTMLElement>('[data-upload-zone]');

if (uploadZone) {
  const loader = createLoader({
    variant: 'diamond',
    overlay: true,
    centered: true,
    label: 'Uploading assets'
  });

  uploadZone.addEventListener('drop', async () => {
    loader.mount(uploadZone);
    await loader.show();

    try {
      await uploadFiles();
    } finally {
      await loader.hide();
      loader.destroy();
    }
  });
}

async function uploadFiles(): Promise<void> {
  await new Promise((resolve) => window.setTimeout(resolve, 1800));
}
