import { beforeEach, describe, expect, it, vi } from 'vitest';

import { createLoader, hydrateLoaders } from '../src';

describe('@stackline/loading', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    document.head
      .querySelectorAll('[data-rvl-loading-base], [data-rvl-loading-variant], [data-rvl-loading-styles]')
      .forEach((node) => node.remove());
    vi.useRealTimers();
  });

  it('waits for delay before becoming visible', async () => {
    vi.useFakeTimers();

    const host = document.createElement('div');
    document.body.append(host);

    const loader = createLoader({
      target: host,
      delay: 200
    });

    loader.mount(host);
    const showPromise = loader.show();

    expect(loader.element.hidden).toBe(true);

    await vi.advanceTimersByTimeAsync(199);
    expect(loader.element.hidden).toBe(true);

    await vi.advanceTimersByTimeAsync(1);
    await showPromise;

    expect(loader.element.hidden).toBe(false);
    loader.destroy();
  });

  it('keeps the loader visible for minVisible once shown', async () => {
    vi.useFakeTimers();

    const host = document.createElement('div');
    document.body.append(host);

    const loader = createLoader({
      target: host,
      minVisible: 300
    });

    loader.mount(host);
    await loader.show();

    const hidePromise = loader.hide();

    await vi.advanceTimersByTimeAsync(299);
    expect(loader.element.hidden).toBe(false);

    await vi.advanceTimersByTimeAsync(1);
    await hidePromise;

    expect(loader.element.hidden).toBe(true);
    loader.destroy();
  });

  it('restores overlay host positioning on destroy', async () => {
    const host = document.createElement('div');
    document.body.append(host);

    const loader = createLoader({
      target: host,
      overlay: true
    });

    loader.mount(host);
    await loader.show();

    expect(host.style.position).toBe('relative');

    loader.destroy();

    expect(host.style.position).toBe('');
  });

  it('hydrates declarative loaders from data attributes', async () => {
    document.body.innerHTML = `
      <div
        data-revive-loading
        data-loader-variant="typing-dots"
        data-loader-inline="true"
        data-loader-visible="true"
        data-loader-label="Loading stream"
      ></div>
    `;

    const loader = hydrateLoaders()[0]!;

    expect(loader.getOptions().variant).toBe('typing-dots');
    expect(loader.state.mounted).toBe(true);

    await loader.hide();
    loader.destroy();
  });

  it('allows disabling the visible label with an empty string', async () => {
    const host = document.createElement('div');
    document.body.append(host);

    const loader = createLoader({
      target: host,
      label: ''
    });

    loader.mount(host);
    await loader.show();

    expect(loader.getOptions().label).toBe('');
    expect(loader.element.classList.contains('has-label')).toBe(false);
    expect(loader.element.hasAttribute('aria-label')).toBe(false);

    loader.destroy();
  });

  it('injects only the requested variant styles and loads new variants on demand', async () => {
    const host = document.createElement('div');
    document.body.append(host);

    const loader = createLoader({
      target: host,
      variant: 'ring'
    });

    const baseStyle = document.head.querySelector('[data-rvl-loading-base="true"]');
    const ringStyle = document.head.querySelector('[data-rvl-loading-variant="ring"]');
    const typingDotsStyleBeforeUpdate = document.head.querySelector('[data-rvl-loading-variant="typing-dots"]');

    expect(baseStyle).not.toBeNull();
    expect(ringStyle?.textContent).toContain('.rvl-variant--ring');
    expect(ringStyle?.textContent).not.toContain('.rvl-variant--typing-dots');
    expect(typingDotsStyleBeforeUpdate).toBeNull();

    loader.update({ variant: 'typing-dots' });
    await loader.show();

    const typingDotsStyle = document.head.querySelector('[data-rvl-loading-variant="typing-dots"]');

    expect(typingDotsStyle?.textContent).toContain('.rvl-variant--typing-dots');
    expect(typingDotsStyle?.textContent).not.toContain('.rvl-variant--ring');

    loader.destroy();
  });
});
