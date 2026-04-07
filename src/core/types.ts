export type LoaderVariant =
  | 'ring'
  | 'dual-ring'
  | 'segmented-ring'
  | 'arc'
  | 'orbit'
  | 'comet'
  | 'halo'
  | 'radar'
  | 'astronaut'
  | 'astronaut-to-mars'
  | 'baseball-player'
  | 'football-player'
  | 'galaxy'
  | 'pulse'
  | 'wave-dots'
  | 'bouncing-dots'
  | 'typing-dots'
  | 'grid-pulse'
  | 'magnetic-dots'
  | 'spiral-dots'
  | 'constellation'
  | 'equalizer-bars'
  | 'rising-bars'
  | 'shimmer'
  | 'scan-line'
  | 'liquid-pill'
  | 'ripple-stack'
  | 'minimal-spinner'
  | 'neon-spinner'
  | 'glass-spinner'
  | 'vortex'
  | 'cube'
  | 'diamond'
  | 'prism'
  | 'skeleton-blocks';

export type LoaderDirection = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
export type LoaderCategory = 'spinner' | 'dots' | 'bars' | 'surface';
export type LoaderTarget = string | Element | null | undefined;
export type LoaderAriaLive = 'polite' | 'assertive' | 'off';
export type StyleValue = string | number | null | undefined;
export type StyleObject = Record<string, StyleValue>;

export interface LoaderOptions {
  variant?: LoaderVariant;
  size?: number | string;
  color?: string;
  secondaryColor?: string;
  speed?: number;
  thickness?: number;
  opacity?: number;
  background?: string;
  overlay?: boolean;
  blur?: number;
  radius?: number | string;
  gap?: number;
  count?: number;
  direction?: LoaderDirection;
  label?: string;
  inline?: boolean;
  centered?: boolean;
  fullscreen?: boolean;
  visible?: boolean;
  delay?: number;
  minVisible?: number;
  zIndex?: number;
  className?: string;
  style?: StyleObject;
  ariaLive?: LoaderAriaLive;
  target?: LoaderTarget;
}

export interface LoaderState {
  mounted: boolean;
  visible: boolean;
  destroyed: boolean;
  pending: 'show' | 'hide' | null;
}

export interface LoaderInstance {
  readonly id: string;
  readonly element: HTMLElement;
  readonly state: LoaderState;
  getOptions(): Readonly<ResolvedLoaderOptions>;
  mount(target?: LoaderTarget): this;
  unmount(): this;
  show(): Promise<void>;
  hide(): Promise<void>;
  toggle(force?: boolean): Promise<void>;
  update(options: Partial<LoaderOptions>): this;
  destroy(): void;
}

export interface VariantDefinition {
  value: LoaderVariant;
  label: string;
  category: LoaderCategory;
  description: string;
  recommendedUse: string;
  defaultCount: number;
  minCount: number;
  maxCount: number;
}

export interface LoaderThemeTokens {
  color: string;
  secondaryColor: string;
  surface: string;
  overlay: string;
  text: string;
  muted: string;
}

export interface ResolvedLoaderOptions {
  variant: LoaderVariant;
  size: string;
  color: string;
  secondaryColor: string;
  speed: number;
  thickness: number;
  opacity: number;
  background: string;
  overlay: boolean;
  blur: number;
  radius: string;
  gap: number;
  count: number;
  direction: LoaderDirection;
  label: string;
  inline: boolean;
  centered: boolean;
  fullscreen: boolean;
  visible: boolean;
  delay: number;
  minVisible: number;
  zIndex: number;
  className: string;
  style: StyleObject;
  ariaLive: LoaderAriaLive;
  target: LoaderTarget;
}
