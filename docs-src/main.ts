import './styles/site.css';

import {
  applyThemeTokens,
  createLoader,
  darkTheme,
  getVariantDefinition,
  lightTheme,
  loaderVariants,
  type LoaderInstance,
  type LoaderVariant
} from '@stackline/loading';
import { mountPlayground } from './components/playground';
import { docsPages, navigation } from './content/pages';
import { exampleDemos, featuredVariants } from './data/snippets';

const app = document.querySelector<HTMLDivElement>('#app');
const cleanupTasks = new Set<() => void>();
const DOCS_THEME_STORAGE_KEY = 'revivejs-loading-docs-theme';
type DocsTheme = 'light' | 'dark';

function getRoute(): string {
  const normalized = window.location.hash.replace(/^#\/?/, '').trim();
  return normalized || 'playground';
}

function getPage(slug: string) {
  return docsPages.find((page) => page.slug === slug)
    ?? docsPages.find((page) => page.slug === 'playground')
    ?? docsPages[0]!;
}

function renderSidebar(currentSlug: string): string {
  return `
    <aside class="site-sidebar">
      <div class="sidebar-meta">
        <a class="brand-mark" href="#/playground">
          <span class="brand-badge"></span>
          <span class="brand-title">@stackline/loading</span>
        </a>
        <button class="sidebar-theme" type="button" data-theme-toggle>Theme</button>
      </div>
      <nav>
        ${navigation
          .map(
            (group) => `
              <section class="nav-group">
                <div class="nav-group-title">${group.title}</div>
                ${group.items
                  .map(
                    (item) => `
                      <a class="nav-link ${item.slug === currentSlug ? 'is-active' : ''}" href="#/${item.slug}">
                        ${item.title}
                      </a>
                    `
                  )
                  .join('')}
              </section>
            `
          )
          .join('')}
      </nav>
    </aside>
  `;
}

function renderHeader(): string {
  return `
    <header class="site-header">
      <button class="mobile-nav-toggle" type="button" data-nav-toggle>Menu</button>
      <button class="sidebar-theme" type="button" data-theme-toggle>Theme</button>
    </header>
  `;
}

function renderPage(): void {
  if (!app) {
    return;
  }

  cleanupTasks.forEach((task) => task());
  cleanupTasks.clear();

  const page = getPage(getRoute());

  app.innerHTML = `
    <div class="site-shell">
      ${renderSidebar(page.slug)}
      <main class="site-main">
        ${renderHeader()}
        <div class="page-shell">
          <header class="page-header">
            <span class="page-eyebrow">${page.eyebrow}</span>
            <h1>${page.title}</h1>
            <p>${page.description}</p>
          </header>
          <article>${page.body}</article>
        </div>
      </main>
    </div>
  `;

  window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  bindStaticInteractions();
  mountInteractiveBlocks();
  syncThemeToggleButtons();
}

function bindStaticInteractions(): void {
  document.querySelectorAll<HTMLElement>('[data-theme-toggle]').forEach((button) => {
    button.addEventListener('click', toggleTheme);
  });

  document.querySelector<HTMLElement>('[data-nav-toggle]')?.addEventListener('click', () => {
    document.body.classList.toggle('is-nav-open');
  });

  document.querySelectorAll<HTMLButtonElement>('.copy-button').forEach((button) => {
    button.addEventListener('click', async () => {
      const code = button.closest('.code-block')?.querySelector('code')?.textContent ?? '';
      try {
        await navigator.clipboard.writeText(code);
        button.textContent = 'Copied';
        window.setTimeout(() => {
          button.textContent = 'Copy';
        }, 1200);
      } catch {
        button.textContent = 'Copy failed';
      }
    });
  });

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('is-nav-open');
    });
  });
}

function mountVariantGallery(target: HTMLElement, variants: LoaderVariant[]): void {
  target.innerHTML = variants
    .map((variant) => {
      const definition = getVariantDefinition(variant);
      return `
        <article class="gallery-card">
          <div class="gallery-preview">
            <div class="preview-host" data-variant-host="${variant}"></div>
          </div>
          <h3>${definition.label}</h3>
          <p>${definition.description}</p>
          <p class="meta"><strong>Best for:</strong> ${definition.recommendedUse}</p>
        </article>
      `;
    })
    .join('');

  target.querySelectorAll<HTMLElement>('[data-variant-host]').forEach((host) => {
    const variant = host.dataset.variantHost as LoaderVariant;
    const options = {
      variant,
      size: variant === 'shimmer' ? 56 : 44,
      centered: true,
      label: '',
      target: host,
      visible: true
    } as const;
    const count = variant.includes('dots') ? 4 : variant.includes('bars') ? 5 : null;
    const loader = createLoader(count == null ? options : { ...options, count });

    loader.mount(host);
    void loader.show();
    cleanupTasks.add(() => loader.destroy());
  });
}

function mountExamples(target: HTMLElement): void {
  target.innerHTML = exampleDemos
    .map(
      (example) => `
        <article class="example-card">
          <div class="example-preview">
            <div class="preview-host" data-example-id="${example.id}">
              ${example.previewHtml}
            </div>
          </div>
          <h3>${example.title}</h3>
          <p>${example.description}</p>
          <div class="code-block">
            <div class="code-block-head">
              <span>Example snippet</span>
              <button class="copy-button" type="button">Copy</button>
            </div>
            <pre><code>${example.code
              .split('&').join('&amp;')
              .split('<').join('&lt;')
              .split('>').join('&gt;')}</code></pre>
          </div>
        </article>
      `
    )
    .join('');

  target.querySelectorAll<HTMLElement>('[data-example-id]').forEach((wrapper) => {
    const id = wrapper.dataset.exampleId;
    const example = exampleDemos.find((item) => item.id === id);
    if (!example) {
      return;
    }

    const mountTarget = wrapper.querySelector<HTMLElement>(example.targetSelector) ?? wrapper;
    const loader = createLoader({
      ...(example.previewOptions ?? example.options),
      target: mountTarget
    });
    loader.mount(mountTarget);
    void loader.show();
    cleanupTasks.add(() => loader.destroy());
  });

  bindStaticInteractions();
}

function mountInteractiveBlocks(): void {
  document.querySelectorAll<HTMLElement>('[data-gallery]').forEach((target) => {
    const mode = target.dataset.gallery;
    const variants = mode === 'featured' ? featuredVariants : loaderVariants.map((variant) => variant.value);
    mountVariantGallery(target, variants);
  });

  document.querySelectorAll<HTMLElement>('[data-example-grid]').forEach((target) => {
    mountExamples(target);
  });

  document.querySelectorAll<HTMLElement>('[data-playground]').forEach((target) => {
    const cleanup = mountPlayground(target);
    cleanupTasks.add(cleanup);
  });
}

function getDocsThemeButtonLabel(theme: DocsTheme): string {
  return theme === 'light' ? 'Dark mode' : 'Light mode';
}

function syncThemeToggleButtons(): void {
  const currentTheme = document.documentElement.dataset.docsTheme === 'dark' ? 'dark' : 'light';
  const nextLabel = getDocsThemeButtonLabel(currentTheme);

  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((button) => {
    button.textContent = nextLabel;
    button.setAttribute('aria-label', `Switch to ${nextLabel.toLowerCase()}`);
    button.setAttribute('title', `Switch to ${nextLabel.toLowerCase()}`);
    button.setAttribute('aria-pressed', currentTheme === 'dark' ? 'true' : 'false');
  });
}

function applyDocsTheme(theme: DocsTheme): void {
  document.documentElement.dataset.docsTheme = theme;
  applyThemeTokens(document.documentElement, theme === 'light' ? lightTheme : darkTheme);
  window.localStorage.setItem(DOCS_THEME_STORAGE_KEY, theme);
  document
    .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'light' ? '#f7fafc' : '#08111f');
  syncThemeToggleButtons();
}

function toggleTheme(): void {
  const nextTheme = document.documentElement.dataset.docsTheme === 'light' ? 'dark' : 'light';
  applyDocsTheme(nextTheme);
}

function bootTheme(): void {
  const stored = window.localStorage.getItem(DOCS_THEME_STORAGE_KEY);
  applyDocsTheme(stored === 'dark' ? 'dark' : 'light');
}

bootTheme();
window.addEventListener('hashchange', renderPage);
renderPage();
