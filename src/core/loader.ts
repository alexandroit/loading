import type {
  LoaderInstance,
  LoaderOptions,
  LoaderState,
  LoaderTarget,
  ResolvedLoaderOptions
} from './types';
import { normalizeLoaderOptions } from './options';
import { ensureLoaderStyles } from './styles';
import { getVariantDefinition } from '../variants/definitions';
import { applyStyleObject } from '../utils/css';
import { ensurePositionContext, resolveTarget } from '../utils/dom';
import { canUseDOM } from '../utils/env';
import { createUid } from '../utils/uid';

class DOMLoader implements LoaderInstance {
  public readonly id = createUid();
  public readonly element: HTMLElement;
  public readonly state: LoaderState = {
    mounted: false,
    visible: false,
    destroyed: false,
    pending: null
  };

  private readonly bodyElement: HTMLDivElement;
  private readonly visualElement: HTMLDivElement;
  private readonly labelElement: HTMLSpanElement;
  private readonly srElement: HTMLSpanElement;
  private options: ResolvedLoaderOptions;
  private mountedTarget: HTMLElement | null = null;
  private restorePositionContext: (() => void) | null = null;
  private showTimeoutId: number | null = null;
  private hideTimeoutId: number | null = null;
  private showResolver: (() => void) | null = null;
  private hideResolver: (() => void) | null = null;
  private shownAt = 0;

  constructor(options: LoaderOptions = {}) {
    if (!canUseDOM()) {
      throw new Error('@revivejs/loading requires a browser-like DOM to create loaders.');
    }

    this.options = normalizeLoaderOptions(options);
    ensureLoaderStyles(this.options.variant);

    this.element = document.createElement('div');
    this.element.dataset.rvlLoader = this.id;

    this.bodyElement = document.createElement('div');
    this.bodyElement.className = 'rvl-body';

    this.visualElement = document.createElement('div');
    this.visualElement.className = 'rvl-visual';
    this.visualElement.setAttribute('aria-hidden', 'true');

    this.labelElement = document.createElement('span');
    this.labelElement.className = 'rvl-label';

    this.srElement = document.createElement('span');
    this.srElement.className = 'rvl-sr-only';

    this.bodyElement.append(this.visualElement, this.labelElement, this.srElement);
    this.element.append(this.bodyElement);

    this.render();

    if (this.options.target || this.options.fullscreen) {
      this.mount(this.options.target);
    }

    if (this.options.visible) {
      void this.show();
    } else {
      this.element.hidden = true;
    }
  }

  public getOptions(): Readonly<ResolvedLoaderOptions> {
    return { ...this.options, style: { ...this.options.style } };
  }

  public mount(target?: LoaderTarget): this {
    this.assertAlive();

    const nextTarget = this.resolveMountTarget(target);

    if (this.mountedTarget === nextTarget && this.state.mounted) {
      return this;
    }

    this.unmount();

    if (this.options.overlay && !this.options.fullscreen) {
      this.restorePositionContext = ensurePositionContext(nextTarget);
    }

    nextTarget.append(this.element);
    this.mountedTarget = nextTarget;
    this.state.mounted = true;

    return this;
  }

  public unmount(): this {
    if (this.element.parentElement) {
      this.element.parentElement.removeChild(this.element);
    }

    if (this.restorePositionContext) {
      this.restorePositionContext();
      this.restorePositionContext = null;
    }

    this.mountedTarget = null;
    this.state.mounted = false;

    return this;
  }

  public show(): Promise<void> {
    this.assertAlive();

    if (this.state.visible && this.state.pending !== 'hide') {
      return Promise.resolve();
    }

    this.clearHideTimer(true);
    this.state.pending = 'show';

    if (!this.state.mounted) {
      this.mount(this.options.target);
    }

    return new Promise((resolve) => {
      const commit = () => {
        this.state.pending = null;
        this.state.visible = true;
        this.shownAt = Date.now();
        this.element.hidden = false;
        this.syncVisibility();
        this.showResolver?.();
        this.showResolver = null;
      };

      this.clearShowTimer(true);
      this.showResolver = resolve;

      if (this.options.delay > 0) {
        this.showTimeoutId = window.setTimeout(commit, this.options.delay);
        return;
      }

      commit();
    });
  }

  public hide(): Promise<void> {
    this.assertAlive();

    if (!this.state.visible && this.state.pending !== 'show') {
      this.syncVisibility();
      return Promise.resolve();
    }

    this.clearShowTimer(true);
    this.state.pending = 'hide';

    return new Promise((resolve) => {
      const commit = () => {
        this.state.pending = null;
        this.state.visible = false;
        this.syncVisibility();
        this.hideResolver?.();
        this.hideResolver = null;
      };

      this.clearHideTimer(true);
      this.hideResolver = resolve;

      if (!this.state.visible) {
        commit();
        return;
      }

      const elapsed = this.shownAt ? Date.now() - this.shownAt : 0;
      const remaining = Math.max(0, this.options.minVisible - elapsed);

      if (remaining > 0) {
        this.hideTimeoutId = window.setTimeout(commit, remaining);
        return;
      }

      commit();
    });
  }

  public toggle(force?: boolean): Promise<void> {
    const nextVisible = typeof force === 'boolean' ? force : !this.state.visible;
    return nextVisible ? this.show() : this.hide();
  }

  public update(options: Partial<LoaderOptions>): this {
    this.assertAlive();

    const previousTarget = this.resolveMountTarget();
    this.options = normalizeLoaderOptions({
      ...this.options,
      ...options,
      style: {
        ...this.options.style,
        ...(options.style ?? {})
      }
    });

    ensureLoaderStyles(this.options.variant);
    this.render();

    const nextTarget = this.resolveMountTarget();
    if (previousTarget !== nextTarget && this.state.mounted) {
      this.mount(nextTarget);
    }

    return this;
  }

  public destroy(): void {
    if (this.state.destroyed) {
      return;
    }

    this.clearShowTimer(true);
    this.clearHideTimer(true);
    this.unmount();
    this.state.destroyed = true;
  }

  private render(): void {
    const variant = getVariantDefinition(this.options.variant);
    this.element.className = [
      'rvl-loader',
      `rvl-variant--${this.options.variant}`,
      this.options.inline ? 'is-inline' : 'is-block',
      this.options.overlay ? 'is-overlay' : '',
      this.options.fullscreen ? 'is-fullscreen' : '',
      this.options.centered ? 'is-centered' : '',
      this.options.label ? 'has-label' : '',
      this.options.className
    ].filter(Boolean).join(' ');

    this.element.setAttribute('role', 'status');
    this.element.setAttribute('aria-live', this.options.ariaLive);
    this.element.setAttribute('aria-atomic', 'true');
    this.element.setAttribute('aria-busy', this.state.visible ? 'true' : 'false');
    this.element.dataset.variant = this.options.variant;
    this.element.style.cssText = '';
    this.element.style.setProperty('--rvl-size', this.options.size);
    this.element.style.setProperty('--rvl-color', this.options.color);
    this.element.style.setProperty('--rvl-secondary-color', this.options.secondaryColor);
    this.element.style.setProperty('--rvl-speed', `${this.options.speed}ms`);
    this.element.style.setProperty('--rvl-thickness', `${this.options.thickness}px`);
    this.element.style.setProperty('--rvl-opacity', `${this.options.opacity}`);
    this.element.style.setProperty('--rvl-background', this.options.background);
    this.element.style.setProperty('--rvl-blur', `${this.options.blur}px`);
    this.element.style.setProperty('--rvl-radius', this.options.radius);
    this.element.style.setProperty('--rvl-gap', `${this.options.gap}px`);
    this.element.style.setProperty('--rvl-z-index', `${this.options.zIndex}`);
    this.element.style.setProperty('animation-direction', this.options.direction);
    applyStyleObject(this.element, this.options.style);

    this.labelElement.textContent = this.options.label;
    this.srElement.textContent = this.options.label;

    if (this.options.label) {
      this.element.setAttribute('aria-label', this.options.label);
    } else {
      this.element.removeAttribute('aria-label');
    }

    this.element.title = variant.label;

    this.visualElement.replaceChildren();
    for (let index = 0; index < this.options.count; index += 1) {
      const part = document.createElement('span');
      part.className = 'rvl-part';
      part.style.setProperty('--part-index', String(index));
      this.visualElement.append(part);
    }

    this.syncVisibility();
  }

  private syncVisibility(): void {
    this.element.hidden = !this.state.visible;
    this.element.setAttribute('aria-busy', this.state.visible ? 'true' : 'false');
    this.element.setAttribute('aria-hidden', this.state.visible ? 'false' : 'true');
  }

  private resolveMountTarget(target?: LoaderTarget): HTMLElement {
    if (this.options.fullscreen) {
      return document.body;
    }

    return resolveTarget(target ?? this.options.target);
  }

  private clearShowTimer(finalize = false): void {
    if (this.showTimeoutId != null) {
      window.clearTimeout(this.showTimeoutId);
      this.showTimeoutId = null;
    }

    if (finalize && this.showResolver) {
      this.showResolver();
      this.showResolver = null;
    }
  }

  private clearHideTimer(finalize = false): void {
    if (this.hideTimeoutId != null) {
      window.clearTimeout(this.hideTimeoutId);
      this.hideTimeoutId = null;
    }

    if (finalize && this.hideResolver) {
      this.hideResolver();
      this.hideResolver = null;
    }
  }

  private assertAlive(): void {
    if (this.state.destroyed) {
      throw new Error('@revivejs/loading cannot operate on a destroyed loader.');
    }
  }
}

export function createLoader(options: LoaderOptions = {}): LoaderInstance {
  return new DOMLoader(options);
}
