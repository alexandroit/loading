import type { LoaderOptions, LoaderVariant } from '@revivejs/loading';

export interface ExampleDemo {
  id: string;
  title: string;
  description: string;
  variant: LoaderVariant;
  options: LoaderOptions;
  previewOptions?: LoaderOptions;
  previewHtml: string;
  targetSelector: string;
  code: string;
}

export const featuredVariants: LoaderVariant[] = [
  'galaxy',
  'astronaut-to-mars',
  'baseball-player',
  'football-player'
];

export const snippets = {
  install: `npm install @revivejs/loading`,
  quickStart: `import { createLoader } from '@revivejs/loading';

const card = document.querySelector('.sales-card');

const loader = createLoader({
  variant: 'orbit',
  size: 48,
  color: '#2563eb',
  overlay: true,
  centered: true,
  label: 'Loading revenue'
});

loader.mount(card);
loader.show();

fetch('/api/revenue')
  .finally(() => loader.hide())
  .finally(() => loader.destroy());`,
  theme: `import { applyThemeTokens, darkTheme } from '@revivejs/loading';

applyThemeTokens(document.documentElement, {
  ...darkTheme,
  color: '#22c55e',
  secondaryColor: 'rgba(34, 197, 94, 0.18)'
});`,
  delay: `const loader = createLoader({
  variant: 'ring',
  delay: 180,
  minVisible: 320,
  overlay: true,
  centered: true,
  label: 'Syncing dashboard'
});

loader.mount(container);
loader.show();

try {
  await loadDashboard();
} finally {
  await loader.hide();
  loader.destroy();
}`,
  accessibility: `const loader = createLoader({
  variant: 'typing-dots',
  label: 'Loading chart data',
  ariaLive: 'polite',
  inline: true
});

loader.mount(statusRow);
loader.show();`,
  overlay: `const loader = createLoader({
  variant: 'glass-spinner',
  overlay: true,
  centered: true,
  blur: 16,
  background: 'rgba(255, 255, 255, 0.62)',
  label: 'Preparing your workspace'
});

loader.mount(panel);
loader.show();`,
  button: `const button = document.querySelector('[data-save-button]');

const loader = createLoader({
  variant: 'bouncing-dots',
  inline: true,
  size: 18,
  gap: 4,
  label: ''
});

button.disabled = true;
loader.mount(button);
loader.show();

try {
  await saveForm();
} finally {
  await loader.hide();
  loader.destroy();
  button.disabled = false;
}`,
  fullscreen: `const loader = createLoader({
  variant: 'vortex',
  size: 72,
  fullscreen: true,
  background: 'rgba(15, 23, 42, 0.54)',
  label: 'Loading application shell'
});

loader.show();`,
  container: `const loader = createLoader({
  variant: 'shimmer',
  overlay: true,
  centered: true,
  radius: 20,
  label: 'Loading table rows'
});

loader.mount(tableSection);
loader.show();`
};

export const exampleDemos: ExampleDemo[] = [
  {
    id: 'dashboard-card',
    title: 'Dashboard card',
    description: 'A polished card overlay keeps the layout stable while a metric tile refreshes.',
    variant: 'orbit',
    options: {
      variant: 'orbit',
      size: 44,
      overlay: true,
      centered: true,
      label: 'Refreshing KPI'
    },
    previewHtml: `
      <div class="demo-surface surface-card" data-demo-host>
        <div class="surface-eyebrow">Revenue</div>
        <div class="surface-metric">$142.4k</div>
        <div class="surface-trend">+18.4% vs last month</div>
      </div>
    `,
    targetSelector: '[data-demo-host]',
    code: `const loader = createLoader({
  variant: 'orbit',
  overlay: true,
  centered: true,
  label: 'Refreshing KPI'
});

loader.mount(card);
loader.show();`
  },
  {
    id: 'table-section',
    title: 'Table section',
    description: 'Container overlays work well when a page is partially interactive and only one region is loading.',
    variant: 'shimmer',
    options: {
      variant: 'shimmer',
      size: 54,
      overlay: true,
      centered: true,
      radius: 20,
      label: 'Loading rows'
    },
    previewHtml: `
      <div class="demo-surface surface-table" data-demo-host>
        <div class="table-row table-head"></div>
        <div class="table-row"></div>
        <div class="table-row"></div>
        <div class="table-row"></div>
      </div>
    `,
    targetSelector: '[data-demo-host]',
    code: `const loader = createLoader({
  variant: 'shimmer',
  overlay: true,
  centered: true,
  label: 'Loading rows'
});

loader.mount(tableSection);
loader.show();`
  },
  {
    id: 'submit-button',
    title: 'Submit button',
    description: 'Inline loaders keep button width stable and make async feedback feel intentional.',
    variant: 'bouncing-dots',
    options: {
      variant: 'bouncing-dots',
      inline: true,
      size: 18,
      gap: 4,
      label: ''
    },
    previewHtml: `
      <button class="surface-button" type="button" data-demo-host>
        <span>Saving changes</span>
      </button>
    `,
    targetSelector: '[data-demo-host]',
    code: `const loader = createLoader({
  variant: 'bouncing-dots',
  inline: true,
  size: 18,
  gap: 4,
  label: ''
});

loader.mount(button);
loader.show();`
  },
  {
    id: 'full-page',
    title: 'Entire page',
    description: 'Fullscreen loaders are best for route-level transitions, auth gates, or cold starts.',
    variant: 'vortex',
    options: {
      variant: 'vortex',
      size: 68,
      fullscreen: true,
      background: 'rgba(15, 23, 42, 0.54)',
      label: 'Loading workspace'
    },
    previewOptions: {
      variant: 'vortex',
      size: 68,
      overlay: true,
      centered: true,
      background: 'rgba(15, 23, 42, 0.54)',
      label: 'Loading workspace'
    },
    previewHtml: `
      <div class="demo-surface surface-page" data-demo-host>
        <div class="page-topbar"></div>
        <div class="page-grid">
          <div class="page-tile"></div>
          <div class="page-tile"></div>
          <div class="page-tile"></div>
          <div class="page-tile"></div>
        </div>
      </div>
    `,
    targetSelector: '[data-demo-host]',
    code: `const loader = createLoader({
  variant: 'vortex',
  size: 68,
  fullscreen: true,
  background: 'rgba(15, 23, 42, 0.54)',
  label: 'Loading workspace'
});

loader.show();`
  },
  {
    id: 'modal-body',
    title: 'Modal body',
    description: 'Loading only the body keeps the modal frame and actions stable.',
    variant: 'glass-spinner',
    options: {
      variant: 'glass-spinner',
      size: 42,
      overlay: true,
      centered: true,
      blur: 14,
      label: 'Loading customer record'
    },
    previewHtml: `
      <div class="demo-surface surface-modal">
        <div class="modal-shell">
          <div class="modal-header"></div>
          <div class="modal-body" data-demo-host>
            <div class="modal-line"></div>
            <div class="modal-line short"></div>
            <div class="modal-line"></div>
          </div>
        </div>
      </div>
    `,
    targetSelector: '[data-demo-host]',
    code: `const loader = createLoader({
  variant: 'glass-spinner',
  overlay: true,
  centered: true,
  label: 'Loading customer record'
});

loader.mount(modalBody);
loader.show();`
  },
  {
    id: 'chart',
    title: 'Chart data',
    description: 'Equalizer and radar styles feel great on analytical surfaces while data streams in.',
    variant: 'equalizer-bars',
    options: {
      variant: 'equalizer-bars',
      size: 38,
      count: 5,
      overlay: true,
      centered: true,
      label: 'Loading chart data'
    },
    previewHtml: `
      <div class="demo-surface surface-chart" data-demo-host>
        <div class="chart-bar" style="height: 28%"></div>
        <div class="chart-bar" style="height: 46%"></div>
        <div class="chart-bar" style="height: 60%"></div>
        <div class="chart-bar" style="height: 38%"></div>
        <div class="chart-bar" style="height: 72%"></div>
        <div class="chart-bar" style="height: 55%"></div>
      </div>
    `,
    targetSelector: '[data-demo-host]',
    code: `const loader = createLoader({
  variant: 'equalizer-bars',
  overlay: true,
  centered: true,
  count: 5,
  label: 'Loading chart data'
});

loader.mount(chartPanel);
loader.show();`
  },
  {
    id: 'upload',
    title: 'File upload zone',
    description: 'A centered loader inside the drop zone keeps the task grounded in the user’s current context.',
    variant: 'diamond',
    options: {
      variant: 'diamond',
      size: 40,
      overlay: true,
      centered: true,
      label: 'Uploading assets'
    },
    previewHtml: `
      <div class="demo-surface surface-upload" data-demo-host>
        <div class="upload-icon"></div>
        <div class="upload-title">Drop files here</div>
        <div class="upload-caption">PNG, SVG, PDF up to 25 MB</div>
      </div>
    `,
    targetSelector: '[data-demo-host]',
    code: `const loader = createLoader({
  variant: 'diamond',
  overlay: true,
  centered: true,
  label: 'Uploading assets'
});

loader.mount(uploadZone);
loader.show();`
  },
  {
    id: 'artificial-delay',
    title: 'Artificial delay',
    description: 'Delay and minimum visibility are the key to removing loader flash on fast network calls.',
    variant: 'ring',
    options: {
      variant: 'ring',
      size: 36,
      overlay: true,
      centered: true,
      delay: 250,
      minVisible: 320,
      label: 'Checking availability'
    },
    previewHtml: `
      <div class="demo-surface surface-card" data-demo-host>
        <div class="surface-eyebrow">Availability</div>
        <div class="surface-metric">Checking...</div>
        <div class="surface-trend">Delay avoids flash on fast responses.</div>
      </div>
    `,
    targetSelector: '[data-demo-host]',
    code: `const loader = createLoader({
  variant: 'ring',
  overlay: true,
  centered: true,
  delay: 250,
  minVisible: 320,
  label: 'Checking availability'
});`
  }
];
