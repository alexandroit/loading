import {
  createLoader,
  type LoaderInstance,
  type LoaderOptions,
  type LoaderVariant,
  loaderVariants
} from '@stackline/loading';

interface PlaygroundState {
  variant: LoaderVariant;
  size: number;
  speed: number;
  color: string;
  secondaryColor: string;
  overlay: boolean;
  fullscreen: boolean;
  centered: boolean;
  label: string;
  delay: number;
  minVisible: number;
  reducedMotion: boolean;
}

type PlaygroundPreviewTab = 'default' | 'table';

const defaultState: PlaygroundState = {
  variant: 'orbit',
  size: 60,
  speed: 900,
  color: '#2563eb',
  secondaryColor: 'rgba(37, 99, 235, 0.18)',
  overlay: false,
  fullscreen: false,
  centered: true,
  label: 'Loading preview',
  delay: 0,
  minVisible: 240,
  reducedMotion: false
};

function formatBooleanProperty(name: string, value: boolean): string {
  return value ? `  ${name}: true,\n` : '';
}

function createSnippet(state: PlaygroundState): string {
  const options: string[] = [];
  options.push(`  variant: '${state.variant}',`);
  options.push(`  size: ${state.size},`);
  options.push(`  speed: ${state.speed},`);
  options.push(`  color: '${state.color}',`);
  options.push(`  secondaryColor: '${state.secondaryColor}',`);

  if (state.overlay || state.fullscreen) {
    options.push(`  overlay: ${state.overlay || state.fullscreen},`);
  }

  if (state.fullscreen) {
    options.push(`  fullscreen: true,`);
  }

  if (state.centered && !state.fullscreen) {
    options.push(`  centered: true,`);
  }

  if (state.label) {
    options.push(`  label: '${state.label}',`);
  }

  if (state.delay > 0) {
    options.push(`  delay: ${state.delay},`);
  }

  if (state.minVisible !== defaultState.minVisible) {
    options.push(`  minVisible: ${state.minVisible},`);
  }

  return `const loader = createLoader({\n${options.join('\n')}\n});\n\nloader.mount(target);\nloader.show();`;
}

function toPreviewOptions(state: PlaygroundState): LoaderOptions {
  return {
    variant: state.variant,
    size: state.size,
    speed: state.speed,
    color: state.color,
    secondaryColor: state.secondaryColor,
    overlay: state.overlay || state.fullscreen,
    centered: state.centered || state.overlay || state.fullscreen,
    fullscreen: false,
    label: state.label,
    delay: state.delay,
    minVisible: state.minVisible
  };
}

function createPreviewMarkup(tab: PlaygroundPreviewTab, fullscreen: boolean): string {
  const fullscreenClass = fullscreen ? 'is-fullscreen-simulated' : '';

  if (tab === 'table') {
    return `
      <div class="playground-surface playground-surface--table ${fullscreenClass}" data-surface>
        <div class="playground-table">
          <div class="playground-table-head">
            <span>Status</span>
            <span>Customer</span>
            <span>Plan</span>
            <span>MRR</span>
          </div>
          <div class="playground-table-row">
            <span><i></i></span>
            <span><i></i></span>
            <span><i></i></span>
            <span><i></i></span>
          </div>
          <div class="playground-table-row">
            <span><i></i></span>
            <span><i></i></span>
            <span><i></i></span>
            <span><i></i></span>
          </div>
          <div class="playground-table-row">
            <span><i></i></span>
            <span><i></i></span>
            <span><i></i></span>
            <span><i></i></span>
          </div>
          <div class="playground-table-row">
            <span><i></i></span>
            <span><i></i></span>
            <span><i></i></span>
            <span><i></i></span>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="playground-surface playground-surface--clean ${fullscreenClass}" data-surface></div>
  `;
}

export function mountPlayground(container: HTMLElement): () => void {
  let loader: LoaderInstance | null = null;
  const state: PlaygroundState = { ...defaultState };
  let activeTab: PlaygroundPreviewTab = 'default';

  container.innerHTML = `
    <div class="playground-shell">
      <form class="playground-controls">
        <div class="field">
          <label for="variant">Variant</label>
          <select id="variant" name="variant">
            ${loaderVariants.map((variant) => `<option value="${variant.value}">${variant.label}</option>`).join('')}
          </select>
        </div>
        <div class="field">
          <label for="size">Size <span data-size-value>${state.size}px</span></label>
          <input id="size" name="size" type="range" min="18" max="96" value="${state.size}" />
        </div>
        <div class="field">
          <label for="speed">Speed <span data-speed-value>${state.speed}ms</span></label>
          <input id="speed" name="speed" type="range" min="300" max="2200" step="50" value="${state.speed}" />
        </div>
        <div class="field two-up">
          <div>
            <label for="color">Primary</label>
            <input id="color" name="color" type="color" value="${state.color}" />
          </div>
          <div>
            <label for="secondaryColor">Secondary</label>
            <input id="secondaryColor" name="secondaryColor" type="color" value="#c7d2fe" />
          </div>
        </div>
        <div class="field">
          <label for="label">Label</label>
          <input id="label" name="label" type="text" value="${state.label}" />
        </div>
        <div class="field two-up">
          <div>
            <label for="delay">Delay</label>
            <input id="delay" name="delay" type="number" min="0" step="50" value="${state.delay}" />
          </div>
          <div>
            <label for="minVisible">Min visible</label>
            <input id="minVisible" name="minVisible" type="number" min="0" step="50" value="${state.minVisible}" />
          </div>
        </div>
        <div class="toggle-row">
          <label><input type="checkbox" name="overlay" /> Overlay</label>
          <label><input type="checkbox" name="fullscreen" /> Fullscreen</label>
          <label><input type="checkbox" name="centered" checked /> Centered</label>
          <label><input type="checkbox" name="reducedMotion" /> Reduced motion</label>
        </div>
        <div class="playground-actions">
          <button class="button-primary" type="button" data-replay>Replay timing</button>
          <button class="button-secondary" type="button" data-copy-playground>Copy code</button>
        </div>
      </form>
      <div class="playground-preview">
        <div class="playground-preview-tabs" role="tablist" aria-label="Preview surfaces">
          <button
            class="playground-preview-tab is-active"
            type="button"
            role="tab"
            aria-selected="true"
            data-preview-tab="default"
          >
            Default
          </button>
          <button
            class="playground-preview-tab"
            type="button"
            role="tab"
            aria-selected="false"
            data-preview-tab="table"
          >
            Table
          </button>
        </div>
        <div class="playground-stage">
          <div class="playground-stage-inner" data-playground-host></div>
        </div>
        <div class="code-block">
          <div class="code-block-head">
            <span>Generated code</span>
          </div>
          <pre><code data-playground-code></code></pre>
        </div>
      </div>
    </div>
  `;

  const form = container.querySelector<HTMLFormElement>('.playground-controls');
  const host = container.querySelector<HTMLElement>('[data-playground-host]');
  const code = container.querySelector<HTMLElement>('[data-playground-code]');
  const sizeValue = container.querySelector<HTMLElement>('[data-size-value]');
  const speedValue = container.querySelector<HTMLElement>('[data-speed-value]');
  const replayButton = container.querySelector<HTMLButtonElement>('[data-replay]');
  const copyButton = container.querySelector<HTMLButtonElement>('[data-copy-playground]');
  const stage = container.querySelector<HTMLElement>('.playground-stage');
  const tabButtons = Array.from(
    container.querySelectorAll<HTMLButtonElement>('[data-preview-tab]')
  );

  if (!form || !host || !code || !sizeValue || !speedValue || !replayButton || !copyButton || !stage) {
    return () => undefined;
  }

  const renderLoader = () => {
    loader?.destroy();
    loader = null;

    host.innerHTML = createPreviewMarkup(activeTab, state.fullscreen);

    stage.classList.toggle('is-reduced-motion', state.reducedMotion);
    stage.dataset.previewTab = activeTab;

    const surface = host.querySelector<HTMLElement>('[data-surface]') ?? host;
    loader = createLoader({
      ...toPreviewOptions(state),
      target: surface
    });
    loader.mount(surface);
    void loader.show();

    code.textContent = createSnippet(state);
    sizeValue.textContent = `${state.size}px`;
    speedValue.textContent = `${state.speed}ms`;
  };

  const updateState = () => {
    const data = new FormData(form);

    state.variant = (data.get('variant') as LoaderVariant) ?? defaultState.variant;
    state.size = Number(data.get('size') ?? defaultState.size);
    state.speed = Number(data.get('speed') ?? defaultState.speed);
    state.color = String(data.get('color') ?? defaultState.color);
    state.secondaryColor = state.color === '#2563eb'
      ? defaultState.secondaryColor
      : `color-mix(in srgb, ${state.color} 20%, transparent)`;
    state.label = String(data.get('label') ?? '');
    state.delay = Number(data.get('delay') ?? 0);
    state.minVisible = Number(data.get('minVisible') ?? defaultState.minVisible);
    state.overlay = data.get('overlay') === 'on';
    state.fullscreen = data.get('fullscreen') === 'on';
    state.centered = data.get('centered') === 'on';
    state.reducedMotion = data.get('reducedMotion') === 'on';

    renderLoader();
  };

  form.addEventListener('input', updateState);
  replayButton.addEventListener('click', () => {
    if (!loader) {
      return;
    }

    void loader.hide().then(() => loader?.show());
  });
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(code.textContent ?? '');
      copyButton.textContent = 'Copied';
      window.setTimeout(() => {
        copyButton.textContent = 'Copy code';
      }, 1200);
    } catch {
      copyButton.textContent = 'Copy failed';
    }
  });
  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const tab = button.dataset.previewTab as PlaygroundPreviewTab | undefined;

      if (!tab || tab === activeTab) {
        return;
      }

      activeTab = tab;
      tabButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle('is-active', isActive);
        item.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
      renderLoader();
    });
  });

  renderLoader();

  return () => {
    loader?.destroy();
  };
}
