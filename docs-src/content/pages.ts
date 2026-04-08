import { snippets } from '../data/snippets';

export interface DocsPage {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  body: string;
}

export interface NavGroup {
  title: string;
  items: Array<Pick<DocsPage, 'slug' | 'title'>>;
}

function escapeHtml(value: string): string {
  return value
    .split('&').join('&amp;')
    .split('<').join('&lt;')
    .split('>').join('&gt;')
    .split('"').join('&quot;')
    .split("'").join('&#39;');
}

function codeBlock(title: string, code: string, language = 'ts'): string {
  return `
    <div class="code-block">
      <div class="code-block-head">
        <span>${title}</span>
        <button class="copy-button" type="button">Copy</button>
      </div>
      <pre><code class="language-${language}">${escapeHtml(code)}</code></pre>
    </div>
  `;
}

function section(title: string, content: string): string {
  return `
    <section class="page-section">
      <h2>${title}</h2>
      ${content}
    </section>
  `;
}

const apiTable = `
  <div class="api-table-wrap">
    <table class="api-table">
      <thead>
        <tr>
          <th>Option</th>
          <th>Type</th>
          <th>Why it exists</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><code>variant</code></td><td>Loader variant</td><td>Chooses the visual language.</td></tr>
        <tr><td><code>size</code></td><td>number | string</td><td>Controls physical size, from icon-scale to hero overlays.</td></tr>
        <tr><td><code>color</code></td><td>string</td><td>Main brand or semantic color.</td></tr>
        <tr><td><code>secondaryColor</code></td><td>string</td><td>Accent tone for tracks, depth, and softer layers.</td></tr>
        <tr><td><code>speed</code></td><td>number</td><td>Animation duration in milliseconds.</td></tr>
        <tr><td><code>thickness</code></td><td>number</td><td>Spinner stroke or bar weight.</td></tr>
        <tr><td><code>background</code></td><td>string</td><td>Overlay backdrop color.</td></tr>
        <tr><td><code>overlay</code></td><td>boolean</td><td>Turns the loader into a positioned container overlay.</td></tr>
        <tr><td><code>fullscreen</code></td><td>boolean</td><td>Promotes the overlay to the viewport.</td></tr>
        <tr><td><code>inline</code></td><td>boolean</td><td>Optimizes the layout for buttons and text rows.</td></tr>
        <tr><td><code>centered</code></td><td>boolean</td><td>Centers the loader in its host without forcing overlay mode.</td></tr>
        <tr><td><code>label</code></td><td>string</td><td>Visible status copy and assistive announcement. Set <code>label: ''</code> for compact loaders without text.</td></tr>
        <tr><td><code>delay</code></td><td>number</td><td>Wait before showing to avoid flash on fast requests.</td></tr>
        <tr><td><code>minVisible</code></td><td>number</td><td>Minimum time the loader stays visible once shown.</td></tr>
        <tr><td><code>count</code></td><td>number</td><td>Dot or bar count where the variant supports repetition.</td></tr>
        <tr><td><code>gap</code></td><td>number</td><td>Spacing between parts.</td></tr>
        <tr><td><code>style</code></td><td>Record&lt;string, string | number&gt;</td><td>Last-mile inline overrides.</td></tr>
        <tr><td><code>ariaLive</code></td><td>polite | assertive | off</td><td>Controls how assistive tech announces updates.</td></tr>
      </tbody>
    </table>
  </div>
`;

export const docsPages: DocsPage[] = [
  {
    slug: 'home',
    title: '@stackline/loading',
    eyebrow: 'Premium Loading Toolkit',
    description: 'A modern framework-agnostic loading library for overlays, buttons, cards, dashboards, and polished async UX.',
    body: `
      <section class="hero">
        <div class="hero-copy">
          <span class="badge">TypeScript first</span>
          <h1>Loading states that feel designed, not bolted on.</h1>
          <p>
            <strong>@stackline/loading</strong> is a production-focused toolkit for modern web apps.
            It gives you polished variants, smart delay and minimum visibility behavior, accessible defaults,
            theme tokens, and container-aware mounting APIs without tying you to a framework.
          </p>
          <div class="hero-actions">
            <a class="button-primary" href="#/quick-start">Quick start</a>
            <a class="button-secondary" href="#/playground">Open playground</a>
          </div>
          <div class="hero-points">
            <span>35 polished variants</span>
            <span>Overlay + fullscreen modes</span>
            <span>Delay and anti-flicker controls</span>
            <span>Accessible by default</span>
          </div>
        </div>
        <div class="hero-showcase" data-gallery="featured"></div>
      </section>
      ${section(
        'Why this library exists',
        `
          <p>Most loading packages stop at a spinner. Real products need more than that.</p>
          <div class="feature-grid">
            <article class="feature-card">
              <h3>Real app patterns</h3>
              <p>Overlays, buttons, sections, dashboards, modals, uploads, and route-level loading all need different behavior.</p>
            </article>
            <article class="feature-card">
              <h3>Premium motion</h3>
              <p>Variants are tuned to feel clean, modern, and branded instead of looking like legacy utility widgets.</p>
            </article>
            <article class="feature-card">
              <h3>Smart visibility</h3>
              <p><code>delay</code> and <code>minVisible</code> help you avoid fast-network flashes and jarring flicker.</p>
            </article>
            <article class="feature-card">
              <h3>Framework-agnostic core</h3>
              <p>The API is future-friendly for wrappers, but this package stays focused on a clean DOM-first foundation.</p>
            </article>
          </div>
        `
      )}
      ${section(
        'Choose the right loader',
        `
          <div class="comparison-grid">
            <article class="comparison-card">
              <h3>Spinners</h3>
              <p>Best when you need a familiar “work in progress” signal for cards, modals, and overlays.</p>
            </article>
            <article class="comparison-card">
              <h3>Dots</h3>
              <p>Best for inline UI, chat, buttons, and quieter micro-interactions.</p>
            </article>
            <article class="comparison-card">
              <h3>Bars</h3>
              <p>Best for analytical surfaces, dashboards, and regions that benefit from directional movement.</p>
            </article>
            <article class="comparison-card">
              <h3>Shimmer</h3>
              <p>Best for skeleton-like content loading and layout-preserving placeholders.</p>
            </article>
            <article class="comparison-card">
              <h3>Overlay modes</h3>
              <p>Best when the user should stay anchored to a specific container, modal body, or full screen.</p>
            </article>
          </div>
        `
      )}
    `
  },
  {
    slug: 'installation',
    title: 'Installation',
    eyebrow: 'Get Started',
    description: 'Install the package and understand what ships in the core library.',
    body: `
      ${section(
        'Install the package',
        `
          <p>The package is dependency-light and ships a framework-agnostic DOM runtime.</p>
          ${codeBlock('npm', snippets.install, 'bash')}
          <p>You do not need a CSS framework, component library, or wrapper package. The core package injects its own styles only when a loader is created.</p>
        `
      )}
      ${section(
        'What ships in the package',
        `
          <ul class="content-list">
            <li>A TypeScript-first core API with strong runtime defaults.</li>
            <li>35 polished built-in variants.</li>
            <li>Delay and minimum visible duration controls.</li>
            <li>Overlay, container, fullscreen, and inline modes.</li>
            <li>Theme tokens for light and dark defaults.</li>
          </ul>
        `
      )}
    `
  },
  {
    slug: 'quick-start',
    title: 'Quick Start',
    eyebrow: 'First Loader',
    description: 'Create, mount, show, hide, and destroy your first loader in a few lines.',
    body: `
      ${section(
        'Basic flow',
        `
          <p>Most integrations follow the same lifecycle: create the loader, mount it to a target, show it, then hide and destroy it when work finishes.</p>
          ${codeBlock('core flow', snippets.quickStart)}
        `
      )}
      ${section(
        'Recommended mental model',
        `
          <ol class="content-list ordered">
            <li>Use <code>overlay</code> when a container should remain visible but temporarily busy.</li>
            <li>Use <code>inline</code> for buttons, text rows, and compact controls.</li>
            <li>Use <code>delay</code> and <code>minVisible</code> for network work that can resolve very quickly.</li>
            <li>Use <code>label: ''</code> for ultra-compact loaders, but prefer a meaningful label when the state matters to the user.</li>
          </ol>
        `
      )}
    `
  },
  {
    slug: 'api-reference',
    title: 'API Reference',
    eyebrow: 'Reference',
    description: 'Understand the public API surface and how each option affects runtime behavior.',
    body: `
      ${section(
        'Primary API',
        `
          <div class="api-card-grid">
            <article class="api-card"><h3><code>createLoader(options)</code></h3><p>Create a loader instance and control it manually.</p></article>
            <article class="api-card"><h3><code>mountLoader(target, options)</code></h3><p>Create, mount, and show a loader in one call.</p></article>
            <article class="api-card"><h3><code>showLoader(target, options)</code></h3><p>Sugar for immediate visible mounting.</p></article>
            <article class="api-card"><h3><code>hydrateLoaders(root)</code></h3><p>Activate declarative loaders from <code>data-*</code> attributes.</p></article>
          </div>
        `
      )}
      ${section('Options', apiTable)}
      ${section(
        'Theme helpers',
        `
          <p>The package exports <code>lightTheme</code>, <code>darkTheme</code>, and <code>applyThemeTokens(...)</code> so you can keep library defaults aligned with your product theme.</p>
          ${codeBlock('theme tokens', snippets.theme)}
        `
      )}
    `
  },
  {
    slug: 'variants-gallery',
    title: 'Variants Gallery',
    eyebrow: 'Visual Language',
    description: 'Explore every built-in loader style and understand where each one fits best.',
    body: `
      ${section(
        'All built-in variants',
        `
          <p>Each variant is designed to feel modern, branded, and usable in real product surfaces. The gallery below renders the actual package runtime.</p>
          <div class="variant-gallery" data-gallery="all"></div>
        `
      )}
    `
  },
  {
    slug: 'theming',
    title: 'Theming',
    eyebrow: 'Customization',
    description: 'Use CSS variables and exported tokens to align loaders with your product theme.',
    body: `
      ${section(
        'Theme with tokens',
        `
          <p>Use the exported token helpers to keep the library aligned with your app shell. This is the easiest path when you already switch themes at the document root.</p>
          ${codeBlock('applyThemeTokens', snippets.theme)}
        `
      )}
      ${section(
        'Theme with CSS variables',
        `
          <p>You can also theme the library entirely from CSS:</p>
          ${codeBlock(
            ':root variables',
            `:root {
  --rvl-theme-color: #0f766e;
  --rvl-theme-secondary: rgba(15, 118, 110, 0.18);
  --rvl-theme-surface: rgba(255, 255, 255, 0.92);
  --rvl-theme-overlay: rgba(240, 253, 250, 0.76);
  --rvl-theme-text: #042f2e;
  --rvl-theme-muted: #134e4a;
}`,
            'css'
          )}
          <p>For branded components, override instance-level options with <code>color</code>, <code>secondaryColor</code>, and <code>background</code>.</p>
        `
      )}
    `
  },
  {
    slug: 'accessibility',
    title: 'Accessibility',
    eyebrow: 'A11y',
    description: 'Use labels, live regions, and reduced motion support to make loading states understandable.',
    body: `
      ${section(
        'Accessible defaults',
        `
          <ul class="content-list">
            <li>Loaders use <code>role="status"</code> and <code>aria-live</code> by default.</li>
            <li>The <code>label</code> option becomes both visible helper text and assistive status content.</li>
            <li><code>prefers-reduced-motion</code> is respected automatically.</li>
          </ul>
          ${codeBlock('accessible inline loader', snippets.accessibility)}
        `
      )}
      ${section(
        'Practical guidance',
        `
          <p>Keep labels short and stateful: “Loading chart data”, “Saving profile”, or “Uploading assets”. For very brief operations, pair a delay with a polite live region so users are not interrupted unnecessarily.</p>
        `
      )}
    `
  },
  {
    slug: 'overlay-usage',
    title: 'Overlay Usage',
    eyebrow: 'Patterns',
    description: 'Use overlays for cards, panels, and modal bodies without losing visual context.',
    body: `
      ${section(
        'Container overlays',
        `
          <p>Overlay mode keeps the user anchored to the exact surface that is busy. It is ideal for dashboards, tables, detail panes, and modal bodies.</p>
          ${codeBlock('overlay example', snippets.overlay)}
        `
      )}
      ${section(
        'When overlays work best',
        `
          <ul class="content-list">
            <li>Refreshing a dashboard card without blanking the entire page.</li>
            <li>Loading a tab panel while the rest of the screen stays interactive.</li>
            <li>Blocking just the modal body while header and footer actions remain stable.</li>
          </ul>
        `
      )}
    `
  },
  {
    slug: 'button-loaders',
    title: 'Button Loaders',
    eyebrow: 'Patterns',
    description: 'Keep buttons readable and steady while actions are in flight.',
    body: `
      ${section(
        'Inline button states',
        `
          <p>Button loaders should be compact, quiet, and width-safe. Dots and minimal spinners are especially strong choices here.</p>
          ${codeBlock('button pattern', snippets.button)}
        `
      )}
      ${section(
        'Good button loading UX',
        `
          <ul class="content-list">
            <li>Disable the button while work is pending.</li>
            <li>Keep the label readable so users know what action is being processed.</li>
            <li>Use small sizes and tight gap values.</li>
          </ul>
        `
      )}
    `
  },
  {
    slug: 'fullscreen-loaders',
    title: 'Fullscreen Loaders',
    eyebrow: 'Patterns',
    description: 'Use fullscreen loading for app shell transitions, auth gates, and route-level blocking states.',
    body: `
      ${section(
        'Viewport-level loading',
        `
          <p>Fullscreen mode is intentionally heavy-handed. Reserve it for moments when the entire experience is blocked or being reconfigured.</p>
          ${codeBlock('fullscreen example', snippets.fullscreen)}
        `
      )}
      ${section(
        'Recommended use cases',
        `
          <ul class="content-list">
            <li>Cold app start with critical bootstrapping.</li>
            <li>Authentication or workspace switching.</li>
            <li>Large route transitions where the previous page should not remain interactive.</li>
          </ul>
        `
      )}
    `
  },
  {
    slug: 'container-section-loaders',
    title: 'Container & Section Loaders',
    eyebrow: 'Patterns',
    description: 'Load only the region that is actually busy so the rest of the interface stays calm and useful.',
    body: `
      ${section(
        'Partial-page loading',
        `
          <p>This is one of the library’s strongest use cases. By loading only the affected region, you avoid over-blocking the rest of the application.</p>
          ${codeBlock('section loading', snippets.container)}
        `
      )}
      ${section(
        'Great targets',
        `
          <ul class="content-list">
            <li>Dashboard widgets and chart tiles.</li>
            <li>Tables and side panels.</li>
            <li>Tabs, accordions, and modal content regions.</li>
            <li>Embeds and file upload surfaces.</li>
          </ul>
        `
      )}
    `
  },
  {
    slug: 'delay-min-visible',
    title: 'Delay & Minimum Visible Duration',
    eyebrow: 'Behavior',
    description: 'Avoid loader flash on fast operations while keeping slow operations feeling smooth and deliberate.',
    body: `
      ${section(
        'Anti-flicker behavior',
        `
          <p>Fast requests should often skip a loader entirely. Slow requests should show a loader that stays visible long enough to feel intentional.</p>
          ${codeBlock('delay + minVisible', snippets.delay)}
        `
      )}
      ${section(
        'Recommended defaults',
        `
          <div class="tip-grid">
            <article class="tip-card"><h3>Fast API work</h3><p>Try <code>delay: 120-200</code> to suppress flash.</p></article>
            <article class="tip-card"><h3>Noticeable tasks</h3><p>Use <code>minVisible: 240-400</code> so the animation lands cleanly.</p></article>
            <article class="tip-card"><h3>Heavy transitions</h3><p>Use larger labels and overlays to match the weight of the task.</p></article>
          </div>
        `
      )}
    `
  },
  {
    slug: 'examples',
    title: 'Examples',
    eyebrow: 'Real World',
    description: 'Production-style examples for cards, tables, buttons, charts, modals, uploads, and more.',
    body: `
      ${section(
        'Example gallery',
        `
          <p>These examples are grounded in product surfaces you actually see in dashboards, SaaS apps, and admin tools.</p>
          <div class="examples-grid" data-example-grid></div>
        `
      )}
    `
  },
  {
    slug: 'playground',
    title: 'Playground',
    eyebrow: 'Interactive',
    description: 'Tune variants, size, motion, color, overlays, and behavior in one interactive sandbox.',
    body: `
      ${section(
        'Interactive configuration',
        `
          <p>The playground uses the package runtime directly. Fullscreen mode is simulated inside the preview stage so it stays safe inside the docs shell.</p>
          <div data-playground></div>
        `
      )}
    `
  },
  {
    slug: 'faq',
    title: 'FAQ',
    eyebrow: 'Reference',
    description: 'Common questions about architecture, wrappers, styling, and integration strategy.',
    body: `
      <section class="faq-list">
        <details class="faq-item" open>
          <summary>Is this package framework-agnostic?</summary>
          <p>Yes. This package is intentionally focused on the core DOM and TypeScript implementation. Framework wrappers can sit on top later.</p>
        </details>
        <details class="faq-item">
          <summary>Does it work for buttons and overlays?</summary>
          <p>Yes. Inline mode is tailored for buttons and text rows, while overlay and fullscreen modes handle cards, sections, modals, and page transitions.</p>
        </details>
        <details class="faq-item">
          <summary>Can I theme it globally?</summary>
          <p>Yes. Use CSS variables or the exported theme token helpers to align loader colors, surface tones, and overlay backgrounds with your app.</p>
        </details>
        <details class="faq-item">
          <summary>How do I avoid flashing loaders?</summary>
          <p>Set a small <code>delay</code> so extremely fast requests never render the loader, and a short <code>minVisible</code> duration so slower requests feel smooth once shown.</p>
        </details>
      </section>
    `
  }
];

export const navigation: NavGroup[] = [
  {
    title: 'Start Here',
    items: [
      { slug: 'home', title: 'Home' },
      { slug: 'installation', title: 'Installation' },
      { slug: 'quick-start', title: 'Quick Start' },
      { slug: 'api-reference', title: 'API Reference' }
    ]
  },
  {
    title: 'Customization',
    items: [
      { slug: 'variants-gallery', title: 'Variants Gallery' },
      { slug: 'theming', title: 'Theming' },
      { slug: 'accessibility', title: 'Accessibility' },
      { slug: 'delay-min-visible', title: 'Delay & Minimum Visible' }
    ]
  },
  {
    title: 'Patterns',
    items: [
      { slug: 'overlay-usage', title: 'Overlay Usage' },
      { slug: 'button-loaders', title: 'Button Loaders' },
      { slug: 'fullscreen-loaders', title: 'Fullscreen Loaders' },
      { slug: 'container-section-loaders', title: 'Container & Section Loaders' },
      { slug: 'examples', title: 'Examples' }
    ]
  },
  {
    title: 'Interactive',
    items: [
      { slug: 'faq', title: 'FAQ' }
    ]
  }
];
