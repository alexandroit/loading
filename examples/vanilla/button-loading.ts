import { createLoader } from '@revivejs/loading';

const button = document.querySelector<HTMLButtonElement>('[data-save-button]');

if (button) {
  button.addEventListener('click', async () => {
    button.disabled = true;

    const loader = createLoader({
      variant: 'bouncing-dots',
      inline: true,
      size: 18,
      gap: 4,
      label: ''
    });

    loader.mount(button);
    await loader.show();

    try {
      await submitForm();
    } finally {
      await loader.hide();
      loader.destroy();
      button.disabled = false;
    }
  });
}

async function submitForm(): Promise<void> {
  await new Promise((resolve) => window.setTimeout(resolve, 950));
}
