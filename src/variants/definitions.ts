import type { LoaderOptions, LoaderVariant, VariantDefinition } from '../core/types';
import { clamp } from '../utils/math';

const definitions: Record<LoaderVariant, VariantDefinition> = {
  ring: {
    value: 'ring',
    label: 'Ring',
    category: 'spinner',
    description: 'A refined circular spinner for general loading states.',
    recommendedUse: 'Use for default async states inside cards, panels, and centered sections.',
    defaultCount: 1,
    minCount: 1,
    maxCount: 1
  },
  'dual-ring': {
    value: 'dual-ring',
    label: 'Dual Ring',
    category: 'spinner',
    description: 'Two concentric rings rotating in opposite directions for more visual energy.',
    recommendedUse: 'Use when you want a richer spinner without overwhelming compact layouts.',
    defaultCount: 2,
    minCount: 2,
    maxCount: 2
  },
  'segmented-ring': {
    value: 'segmented-ring',
    label: 'Segmented Ring',
    category: 'spinner',
    description: 'A segmented circular loader with precise ticks and premium motion.',
    recommendedUse: 'Use when you want a polished technical spinner for dashboards, analytics, or admin tools.',
    defaultCount: 10,
    minCount: 6,
    maxCount: 12
  },
  arc: {
    value: 'arc',
    label: 'Arc',
    category: 'spinner',
    description: 'A thick curved sweep with strong motion and excellent legibility.',
    recommendedUse: 'Use on dashboards or surfaces where the loader needs a bold silhouette.',
    defaultCount: 1,
    minCount: 1,
    maxCount: 1
  },
  orbit: {
    value: 'orbit',
    label: 'Orbit',
    category: 'spinner',
    description: 'A premium orbital motion with a stable central anchor.',
    recommendedUse: 'Use in hero states, polished overlays, or brand-forward experiences.',
    defaultCount: 2,
    minCount: 2,
    maxCount: 2
  },
  comet: {
    value: 'comet',
    label: 'Comet',
    category: 'spinner',
    description: 'A luminous point with a trailing comet tail orbiting a soft ring.',
    recommendedUse: 'Use for premium hero states, modal loading, and brand-forward async moments.',
    defaultCount: 2,
    minCount: 2,
    maxCount: 2
  },
  halo: {
    value: 'halo',
    label: 'Halo',
    category: 'spinner',
    description: 'A thin halo with soft glow pulses and minimal visual noise.',
    recommendedUse: 'Use in refined enterprise interfaces where the loading state should stay elegant.',
    defaultCount: 2,
    minCount: 2,
    maxCount: 2
  },
  radar: {
    value: 'radar',
    label: 'Radar',
    category: 'spinner',
    description: 'A scanning beam effect with layered depth.',
    recommendedUse: 'Use for search, sync, telemetry, or data discovery moments.',
    defaultCount: 3,
    minCount: 3,
    maxCount: 3
  },
  astronaut: {
    value: 'astronaut',
    label: 'Astronaut',
    category: 'surface',
    description: 'A floating astronaut illustration with soft starfield motion.',
    recommendedUse: 'Use for onboarding, empty states, playful overlays, and premium loading moments.',
    defaultCount: 3,
    minCount: 3,
    maxCount: 3
  },
  'astronaut-to-mars': {
    value: 'astronaut-to-mars',
    label: 'Astronaut To Mars',
    category: 'surface',
    description: 'A tiny astronaut traveling toward Mars with a cinematic space-route feel.',
    recommendedUse: 'Use for route transitions, splash states, and standout brand-forward loading sequences.',
    defaultCount: 4,
    minCount: 4,
    maxCount: 4
  },
  'baseball-player': {
    value: 'baseball-player',
    label: 'Baseball Player',
    category: 'surface',
    description: 'A batter driving the ball with a clean swing and curved flight path.',
    recommendedUse: 'Use for sports products, onboarding, and illustrative loading states with momentum.',
    defaultCount: 4,
    minCount: 4,
    maxCount: 4
  },
  'football-player': {
    value: 'football-player',
    label: 'Football Player',
    category: 'surface',
    description: 'A footballer striking the ball forward with a smooth kick arc.',
    recommendedUse: 'Use for soccer experiences, score views, and highly expressive loading moments.',
    defaultCount: 4,
    minCount: 4,
    maxCount: 4
  },
  galaxy: {
    value: 'galaxy',
    label: 'Galaxy',
    category: 'surface',
    description: 'A glowing spiral galaxy with a bright core, orbiting stars, and drifting cosmic dust.',
    recommendedUse: 'Use for splash screens, premium hero states, sci-fi interfaces, and high-drama loading moments.',
    defaultCount: 6,
    minCount: 6,
    maxCount: 6
  },
  pulse: {
    value: 'pulse',
    label: 'Pulse',
    category: 'surface',
    description: 'A breathing pulse with soft echo rings.',
    recommendedUse: 'Use for ambient loading and low-noise inline states.',
    defaultCount: 2,
    minCount: 2,
    maxCount: 2
  },
  'wave-dots': {
    value: 'wave-dots',
    label: 'Wave Dots',
    category: 'dots',
    description: 'Dots that ripple upward in sequence.',
    recommendedUse: 'Use for conversational UIs, message streams, and compact inline feedback.',
    defaultCount: 4,
    minCount: 3,
    maxCount: 8
  },
  'bouncing-dots': {
    value: 'bouncing-dots',
    label: 'Bouncing Dots',
    category: 'dots',
    description: 'Classic dot rhythm with a more premium bounce curve.',
    recommendedUse: 'Use for buttons, compact surfaces, and general-purpose text-adjacent loading.',
    defaultCount: 3,
    minCount: 3,
    maxCount: 8
  },
  'typing-dots': {
    value: 'typing-dots',
    label: 'Typing Dots',
    category: 'dots',
    description: 'A staggered fade-and-scale sequence inspired by chat typing indicators.',
    recommendedUse: 'Use in assistants, feeds, or message composer feedback states.',
    defaultCount: 3,
    minCount: 3,
    maxCount: 5
  },
  'grid-pulse': {
    value: 'grid-pulse',
    label: 'Grid Pulse',
    category: 'surface',
    description: 'A 3x3 pulse grid that feels structured, compact, and modern.',
    recommendedUse: 'Use for compact surfaces, icon-scale loading, and data-heavy interface chrome.',
    defaultCount: 9,
    minCount: 9,
    maxCount: 9
  },
  'magnetic-dots': {
    value: 'magnetic-dots',
    label: 'Magnetic Dots',
    category: 'dots',
    description: 'Dots that pull toward the center and relax outward in a magnetic rhythm.',
    recommendedUse: 'Use for inline controls, button states, and compact polished micro-feedback.',
    defaultCount: 4,
    minCount: 3,
    maxCount: 6
  },
  'spiral-dots': {
    value: 'spiral-dots',
    label: 'Spiral Dots',
    category: 'dots',
    description: 'Layered dots arranged in a rotating spiral with subtle depth.',
    recommendedUse: 'Use for premium overlays and loaders that should feel more bespoke than a standard spinner.',
    defaultCount: 6,
    minCount: 5,
    maxCount: 8
  },
  constellation: {
    value: 'constellation',
    label: 'Constellation',
    category: 'dots',
    description: 'Network-like nodes with a soft connected-system feel.',
    recommendedUse: 'Use for AI, search, sync, and graph-oriented product experiences.',
    defaultCount: 6,
    minCount: 5,
    maxCount: 6
  },
  'equalizer-bars': {
    value: 'equalizer-bars',
    label: 'Equalizer Bars',
    category: 'bars',
    description: 'Animated bars with an audio-like rhythm.',
    recommendedUse: 'Use for analytics, media, and lively data surfaces.',
    defaultCount: 5,
    minCount: 3,
    maxCount: 8
  },
  'rising-bars': {
    value: 'rising-bars',
    label: 'Rising Bars',
    category: 'bars',
    description: 'Clean bars that rise from a subtle track.',
    recommendedUse: 'Use in tables, forms, and panels where you want linear motion.',
    defaultCount: 4,
    minCount: 3,
    maxCount: 8
  },
  shimmer: {
    value: 'shimmer',
    label: 'Shimmer',
    category: 'surface',
    description: 'A modern skeleton-like shimmer strip.',
    recommendedUse: 'Use for content placeholders, cards, and container-level loading.',
    defaultCount: 1,
    minCount: 1,
    maxCount: 1
  },
  'scan-line': {
    value: 'scan-line',
    label: 'Scan Line',
    category: 'surface',
    description: 'A scanning line that sweeps across a clean data surface.',
    recommendedUse: 'Use for tables, data panes, security-style scans, and content inspection states.',
    defaultCount: 1,
    minCount: 1,
    maxCount: 1
  },
  'liquid-pill': {
    value: 'liquid-pill',
    label: 'Liquid Pill',
    category: 'surface',
    description: 'A rounded pill loader with fluid motion and soft internal glow.',
    recommendedUse: 'Use for buttons, compact forms, and ambient inline loading with branded motion.',
    defaultCount: 2,
    minCount: 2,
    maxCount: 2
  },
  'ripple-stack': {
    value: 'ripple-stack',
    label: 'Ripple Stack',
    category: 'surface',
    description: 'Concentric ripples that radiate outward with a calm layered cadence.',
    recommendedUse: 'Use for overlays, fullscreen states, and soft-focus loading moments.',
    defaultCount: 3,
    minCount: 3,
    maxCount: 4
  },
  'minimal-spinner': {
    value: 'minimal-spinner',
    label: 'Minimal Spinner',
    category: 'spinner',
    description: 'A thin understated spinner with understated motion.',
    recommendedUse: 'Use where UI chrome should stay quiet and elegant.',
    defaultCount: 1,
    minCount: 1,
    maxCount: 1
  },
  'neon-spinner': {
    value: 'neon-spinner',
    label: 'Neon Spinner',
    category: 'spinner',
    description: 'A glowing spinner with high-contrast accents.',
    recommendedUse: 'Use in dark surfaces, product tours, and expressive brand moments.',
    defaultCount: 2,
    minCount: 2,
    maxCount: 2
  },
  'glass-spinner': {
    value: 'glass-spinner',
    label: 'Glass Spinner',
    category: 'spinner',
    description: 'A frosted, translucent spinner with soft highlights.',
    recommendedUse: 'Use on overlays and premium surface treatments.',
    defaultCount: 2,
    minCount: 2,
    maxCount: 2
  },
  vortex: {
    value: 'vortex',
    label: 'Vortex',
    category: 'spinner',
    description: 'Multiple rotating elements that create a layered vortex effect.',
    recommendedUse: 'Use for major loading transitions, modals, and splash states.',
    defaultCount: 3,
    minCount: 3,
    maxCount: 3
  },
  cube: {
    value: 'cube',
    label: 'Cube',
    category: 'surface',
    description: 'Rotating geometric blocks with a clean enterprise-friendly feel.',
    recommendedUse: 'Use in dashboards, admin tools, and product surfaces with grid structure.',
    defaultCount: 4,
    minCount: 4,
    maxCount: 4
  },
  diamond: {
    value: 'diamond',
    label: 'Diamond',
    category: 'surface',
    description: 'Four angular facets that pulse in a diamond pattern.',
    recommendedUse: 'Use when you want geometric motion that still feels compact.',
    defaultCount: 4,
    minCount: 4,
    maxCount: 4
  },
  prism: {
    value: 'prism',
    label: 'Prism',
    category: 'surface',
    description: 'Glass-like prism shards rotating with translucent layered highlights.',
    recommendedUse: 'Use on premium overlays, polished product shells, and modern dark themes.',
    defaultCount: 3,
    minCount: 3,
    maxCount: 3
  },
  'skeleton-blocks': {
    value: 'skeleton-blocks',
    label: 'Skeleton Blocks',
    category: 'surface',
    description: 'A compact skeleton-style block layout with animated shimmer passes.',
    recommendedUse: 'Use for content placeholders, side panels, cards, and list loading states.',
    defaultCount: 4,
    minCount: 4,
    maxCount: 4
  }
};

export const loaderVariants = Object.values(definitions);

export function getVariantDefinition(variant: LoaderVariant): VariantDefinition {
  return definitions[variant];
}

export function getVariantPartCount(variant: LoaderVariant, options: LoaderOptions): number {
  const definition = getVariantDefinition(variant);
  return clamp(options.count ?? definition.defaultCount, definition.minCount, definition.maxCount);
}
