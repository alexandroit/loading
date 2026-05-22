"use strict";var StacklineLoading=(()=>{var P=Object.defineProperty;var vr=Object.getOwnPropertyDescriptor;var dr=Object.getOwnPropertyNames;var pr=Object.prototype.hasOwnProperty;var hr=(e,r,a)=>r in e?P(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a;var ur=(e,r)=>{for(var a in r)P(e,a,{get:r[a],enumerable:!0})},mr=(e,r,a,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of dr(r))!pr.call(e,i)&&i!==a&&P(e,i,{get:()=>r[i],enumerable:!(t=vr(r,i))||t.enumerable});return e};var gr=e=>mr(P({},"__esModule",{value:!0}),e);var o=(e,r,a)=>hr(e,typeof r!="symbol"?r+"":r,a);var Lr={};ur(Lr,{applyThemeTokens:()=>cr,createLoader:()=>x,darkTheme:()=>sr,defaultLoaderOptions:()=>F,getLoaderStyles:()=>D,getVariantDefinition:()=>y,getVariantStyles:()=>A,hideLoader:()=>lr,hydrateLoaders:()=>nr,lightTheme:()=>or,loaderBaseStyles:()=>M,loaderStyles:()=>Z,loaderVariants:()=>B,mountLoader:()=>H,showLoader:()=>ir});function h(e,r,a){return Math.min(Math.max(e,r),a)}function b(e,r){return typeof e!="number"||Number.isNaN(e)?r:Math.max(0,e)}var j={ring:{value:"ring",label:"Ring",category:"spinner",description:"A refined circular spinner for general loading states.",recommendedUse:"Use for default async states inside cards, panels, and centered sections.",defaultCount:1,minCount:1,maxCount:1},"dual-ring":{value:"dual-ring",label:"Dual Ring",category:"spinner",description:"Two concentric rings rotating in opposite directions for more visual energy.",recommendedUse:"Use when you want a richer spinner without overwhelming compact layouts.",defaultCount:2,minCount:2,maxCount:2},"segmented-ring":{value:"segmented-ring",label:"Segmented Ring",category:"spinner",description:"A segmented circular loader with precise ticks and premium motion.",recommendedUse:"Use when you want a polished technical spinner for dashboards, analytics, or admin tools.",defaultCount:10,minCount:6,maxCount:12},arc:{value:"arc",label:"Arc",category:"spinner",description:"A thick curved sweep with strong motion and excellent legibility.",recommendedUse:"Use on dashboards or surfaces where the loader needs a bold silhouette.",defaultCount:1,minCount:1,maxCount:1},orbit:{value:"orbit",label:"Orbit",category:"spinner",description:"A premium orbital motion with a stable central anchor.",recommendedUse:"Use in hero states, polished overlays, or brand-forward experiences.",defaultCount:2,minCount:2,maxCount:2},comet:{value:"comet",label:"Comet",category:"spinner",description:"A luminous point with a trailing comet tail orbiting a soft ring.",recommendedUse:"Use for premium hero states, modal loading, and brand-forward async moments.",defaultCount:2,minCount:2,maxCount:2},halo:{value:"halo",label:"Halo",category:"spinner",description:"A thin halo with soft glow pulses and minimal visual noise.",recommendedUse:"Use in refined enterprise interfaces where the loading state should stay elegant.",defaultCount:2,minCount:2,maxCount:2},radar:{value:"radar",label:"Radar",category:"spinner",description:"A scanning beam effect with layered depth.",recommendedUse:"Use for search, sync, telemetry, or data discovery moments.",defaultCount:3,minCount:3,maxCount:3},astronaut:{value:"astronaut",label:"Astronaut",category:"surface",description:"A floating astronaut illustration with soft starfield motion.",recommendedUse:"Use for onboarding, empty states, playful overlays, and premium loading moments.",defaultCount:3,minCount:3,maxCount:3},"astronaut-to-mars":{value:"astronaut-to-mars",label:"Astronaut To Mars",category:"surface",description:"A tiny astronaut traveling toward Mars with a cinematic space-route feel.",recommendedUse:"Use for route transitions, splash states, and standout brand-forward loading sequences.",defaultCount:4,minCount:4,maxCount:4},"baseball-player":{value:"baseball-player",label:"Baseball Player",category:"surface",description:"A batter driving the ball with a clean swing and curved flight path.",recommendedUse:"Use for sports products, onboarding, and illustrative loading states with momentum.",defaultCount:4,minCount:4,maxCount:4},"football-player":{value:"football-player",label:"Football Player",category:"surface",description:"A footballer striking the ball forward with a smooth kick arc.",recommendedUse:"Use for soccer experiences, score views, and highly expressive loading moments.",defaultCount:4,minCount:4,maxCount:4},galaxy:{value:"galaxy",label:"Galaxy",category:"surface",description:"A glowing spiral galaxy with a bright core, orbiting stars, and drifting cosmic dust.",recommendedUse:"Use for splash screens, premium hero states, sci-fi interfaces, and high-drama loading moments.",defaultCount:6,minCount:6,maxCount:6},pulse:{value:"pulse",label:"Pulse",category:"surface",description:"A breathing pulse with soft echo rings.",recommendedUse:"Use for ambient loading and low-noise inline states.",defaultCount:2,minCount:2,maxCount:2},"wave-dots":{value:"wave-dots",label:"Wave Dots",category:"dots",description:"Dots that ripple upward in sequence.",recommendedUse:"Use for conversational UIs, message streams, and compact inline feedback.",defaultCount:4,minCount:3,maxCount:8},"bouncing-dots":{value:"bouncing-dots",label:"Bouncing Dots",category:"dots",description:"Classic dot rhythm with a more premium bounce curve.",recommendedUse:"Use for buttons, compact surfaces, and general-purpose text-adjacent loading.",defaultCount:3,minCount:3,maxCount:8},"typing-dots":{value:"typing-dots",label:"Typing Dots",category:"dots",description:"A staggered fade-and-scale sequence inspired by chat typing indicators.",recommendedUse:"Use in assistants, feeds, or message composer feedback states.",defaultCount:3,minCount:3,maxCount:5},"grid-pulse":{value:"grid-pulse",label:"Grid Pulse",category:"surface",description:"A 3x3 pulse grid that feels structured, compact, and modern.",recommendedUse:"Use for compact surfaces, icon-scale loading, and data-heavy interface chrome.",defaultCount:9,minCount:9,maxCount:9},"magnetic-dots":{value:"magnetic-dots",label:"Magnetic Dots",category:"dots",description:"Dots that pull toward the center and relax outward in a magnetic rhythm.",recommendedUse:"Use for inline controls, button states, and compact polished micro-feedback.",defaultCount:4,minCount:3,maxCount:6},"spiral-dots":{value:"spiral-dots",label:"Spiral Dots",category:"dots",description:"Layered dots arranged in a rotating spiral with subtle depth.",recommendedUse:"Use for premium overlays and loaders that should feel more bespoke than a standard spinner.",defaultCount:6,minCount:5,maxCount:8},constellation:{value:"constellation",label:"Constellation",category:"dots",description:"Network-like nodes with a soft connected-system feel.",recommendedUse:"Use for AI, search, sync, and graph-oriented product experiences.",defaultCount:6,minCount:5,maxCount:6},"equalizer-bars":{value:"equalizer-bars",label:"Equalizer Bars",category:"bars",description:"Animated bars with an audio-like rhythm.",recommendedUse:"Use for analytics, media, and lively data surfaces.",defaultCount:5,minCount:3,maxCount:8},"rising-bars":{value:"rising-bars",label:"Rising Bars",category:"bars",description:"Clean bars that rise from a subtle track.",recommendedUse:"Use in tables, forms, and panels where you want linear motion.",defaultCount:4,minCount:3,maxCount:8},shimmer:{value:"shimmer",label:"Shimmer",category:"surface",description:"A modern skeleton-like shimmer strip.",recommendedUse:"Use for content placeholders, cards, and container-level loading.",defaultCount:1,minCount:1,maxCount:1},"scan-line":{value:"scan-line",label:"Scan Line",category:"surface",description:"A scanning line that sweeps across a clean data surface.",recommendedUse:"Use for tables, data panes, security-style scans, and content inspection states.",defaultCount:1,minCount:1,maxCount:1},"liquid-pill":{value:"liquid-pill",label:"Liquid Pill",category:"surface",description:"A rounded pill loader with fluid motion and soft internal glow.",recommendedUse:"Use for buttons, compact forms, and ambient inline loading with branded motion.",defaultCount:2,minCount:2,maxCount:2},"ripple-stack":{value:"ripple-stack",label:"Ripple Stack",category:"surface",description:"Concentric ripples that radiate outward with a calm layered cadence.",recommendedUse:"Use for overlays, fullscreen states, and soft-focus loading moments.",defaultCount:3,minCount:3,maxCount:4},"minimal-spinner":{value:"minimal-spinner",label:"Minimal Spinner",category:"spinner",description:"A thin understated spinner with understated motion.",recommendedUse:"Use where UI chrome should stay quiet and elegant.",defaultCount:1,minCount:1,maxCount:1},"neon-spinner":{value:"neon-spinner",label:"Neon Spinner",category:"spinner",description:"A glowing spinner with high-contrast accents.",recommendedUse:"Use in dark surfaces, product tours, and expressive brand moments.",defaultCount:2,minCount:2,maxCount:2},"glass-spinner":{value:"glass-spinner",label:"Glass Spinner",category:"spinner",description:"A frosted, translucent spinner with soft highlights.",recommendedUse:"Use on overlays and premium surface treatments.",defaultCount:2,minCount:2,maxCount:2},vortex:{value:"vortex",label:"Vortex",category:"spinner",description:"Multiple rotating elements that create a layered vortex effect.",recommendedUse:"Use for major loading transitions, modals, and splash states.",defaultCount:3,minCount:3,maxCount:3},cube:{value:"cube",label:"Cube",category:"surface",description:"Rotating geometric blocks with a clean enterprise-friendly feel.",recommendedUse:"Use in dashboards, admin tools, and product surfaces with grid structure.",defaultCount:4,minCount:4,maxCount:4},diamond:{value:"diamond",label:"Diamond",category:"surface",description:"Four angular facets that pulse in a diamond pattern.",recommendedUse:"Use when you want geometric motion that still feels compact.",defaultCount:4,minCount:4,maxCount:4},prism:{value:"prism",label:"Prism",category:"surface",description:"Glass-like prism shards rotating with translucent layered highlights.",recommendedUse:"Use on premium overlays, polished product shells, and modern dark themes.",defaultCount:3,minCount:3,maxCount:3},"skeleton-blocks":{value:"skeleton-blocks",label:"Skeleton Blocks",category:"surface",description:"A compact skeleton-style block layout with animated shimmer passes.",recommendedUse:"Use for content placeholders, side panels, cards, and list loading states.",defaultCount:4,minCount:4,maxCount:4}},B=Object.values(j);function y(e){return j[e]}function X(e,r){var t;let a=y(e);return h((t=r.count)!=null?t:a.defaultCount,a.minCount,a.maxCount)}function I(e,r){let a=e!=null?e:r;return typeof a=="number"?`${a}px`:a}function br(e){return e.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`)}function _(e,r){Object.entries(r).forEach(([a,t])=>{let i=a.startsWith("--")?a:br(a);if(t==null){e.style.removeProperty(i);return}e.style.setProperty(i,fr(t))})}function fr(e){return typeof e=="number"?String(e):e!=null?e:""}function yr(e,r){let a=e.replace("#","").trim(),t=a.length===3?a.split("").map(s=>`${s}${s}`).join(""):a.length===4?a.split("").map(s=>`${s}${s}`).join(""):a;if(t.length!==6&&t.length!==8)return`color-mix(in srgb, ${e} ${Math.round(r*100)}%, transparent)`;let i=parseInt(t.slice(0,2),16),v=parseInt(t.slice(2,4),16),n=parseInt(t.slice(4,6),16),m=t.length===8?parseInt(t.slice(6,8),16)/255:1;return`rgba(${i}, ${v}, ${n}, ${Math.max(0,Math.min(1,m*r))})`}function xr(e,r){let a=e.replace(/rgba?\(/,"").replace(")","").split(",").map(t=>t.trim());return a.length<3?`color-mix(in srgb, ${e} ${Math.round(r*100)}%, transparent)`:`rgba(${a[0]}, ${a[1]}, ${a[2]}, ${r})`}function G(e,r){let a=Math.max(0,Math.min(1,r));return e.startsWith("#")?yr(e,a):e.startsWith("rgb")?xr(e,a):`color-mix(in srgb, ${e} ${Math.round(a*100)}%, transparent)`}var l={variant:"ring",size:"40px",color:"var(--rvl-theme-color)",secondaryColor:"var(--rvl-theme-secondary)",speed:900,thickness:3,opacity:1,background:"var(--rvl-theme-overlay)",overlay:!1,blur:12,radius:"18px",gap:8,direction:"normal",label:"",inline:!1,centered:!1,fullscreen:!1,visible:!1,delay:0,minVisible:240,zIndex:1600,className:"",style:{},ariaLive:"polite",target:null};function $(e={}){var m,s,g,f,d,w,z,k,C,L,T,U,S,E,p,Y;let r=(m=e.variant)!=null?m:l.variant,a=y(r),t=(s=e.color)!=null?s:l.color,i=(g=e.secondaryColor)!=null?g:G(t,.2),v=Object.prototype.hasOwnProperty.call(e,"label"),n={variant:r,size:I(e.size,l.size),color:t,secondaryColor:i,speed:h(b(e.speed,l.speed),200,8e3),thickness:h(b(e.thickness,l.thickness),1,16),opacity:h(typeof e.opacity=="number"?e.opacity:l.opacity,.12,1),background:(f=e.background)!=null?f:l.background,overlay:(d=e.overlay)!=null?d:l.overlay,blur:h(b(e.blur,l.blur),0,32),radius:I(e.radius,l.radius),gap:h(b(e.gap,l.gap),0,48),count:X(r,e),direction:(w=e.direction)!=null?w:l.direction,label:v?(z=e.label)!=null?z:"":l.label,inline:(k=e.inline)!=null?k:l.inline,centered:(C=e.centered)!=null?C:l.centered,fullscreen:(L=e.fullscreen)!=null?L:l.fullscreen,visible:(T=e.visible)!=null?T:l.visible,delay:h(b(e.delay,l.delay),0,3e4),minVisible:h(b(e.minVisible,l.minVisible),0,6e4),zIndex:h(b(e.zIndex,l.zIndex),1,2147483647),className:(S=(U=e.className)==null?void 0:U.trim())!=null?S:l.className,style:(E=e.style)!=null?E:{},ariaLive:(p=e.ariaLive)!=null?p:l.ariaLive,target:(Y=e.target)!=null?Y:l.target};return n.fullscreen&&(n.overlay=!0,n.inline=!1,n.centered=!0),n.inline&&(n.overlay=!1,n.fullscreen=!1),!v&&!n.label&&(n.label=`Loading with ${a.label.toLowerCase()}`),n}function F(){return{...l,size:40,radius:18,target:null}}var O=`
:root {
  --rvl-theme-color: #2563eb;
  --rvl-theme-secondary: rgba(37, 99, 235, 0.18);
  --rvl-theme-surface: rgba(255, 255, 255, 0.92);
  --rvl-theme-overlay: rgba(255, 255, 255, 0.72);
  --rvl-theme-text: #0f172a;
  --rvl-theme-muted: #475569;
}

.rvl-loader {
  --rvl-size: 40px;
  --rvl-color: var(--rvl-theme-color);
  --rvl-secondary-color: var(--rvl-theme-secondary);
  --rvl-speed: 900ms;
  --rvl-thickness: 3px;
  --rvl-opacity: 1;
  --rvl-background: var(--rvl-theme-overlay);
  --rvl-blur: 12px;
  --rvl-radius: 18px;
  --rvl-gap: 8px;
  --rvl-z-index: 1600;
  position: relative;
  box-sizing: border-box;
  color: var(--rvl-color);
  opacity: var(--rvl-opacity);
  isolation: isolate;
}

.rvl-loader,
.rvl-loader * {
  box-sizing: border-box;
}

.rvl-loader[hidden] {
  display: none !important;
}

.rvl-loader.is-inline {
  display: inline-flex;
  vertical-align: middle;
}

.rvl-loader.is-block {
  display: flex;
}

.rvl-loader.is-centered:not(.is-overlay):not(.is-fullscreen) {
  width: 100%;
  min-height: calc(var(--rvl-size) * 1.9);
  justify-content: center;
}

.rvl-loader.is-overlay,
.rvl-loader.is-fullscreen {
  position: absolute;
  inset: 0;
  width: auto;
  min-height: 100%;
  display: grid;
  place-items: center;
  padding: 20px;
  background: var(--rvl-background);
  backdrop-filter: blur(var(--rvl-blur));
  border-radius: inherit;
  z-index: var(--rvl-z-index);
}

.rvl-loader.is-fullscreen {
  position: fixed;
  border-radius: 0;
}

.rvl-body {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: calc(var(--rvl-gap) * 0.7);
  min-width: max-content;
  padding: 0;
}

.rvl-loader.is-overlay .rvl-body,
.rvl-loader.is-fullscreen .rvl-body {
  padding: clamp(14px, 2vw, 22px);
  border-radius: var(--rvl-radius);
  background: color-mix(in srgb, var(--rvl-theme-surface) 86%, transparent);
  box-shadow: 0 18px 48px rgba(15, 23, 42, 0.14);
}

.rvl-visual {
  position: relative;
  display: inline-grid;
  place-items: center;
  width: var(--rvl-size);
  height: var(--rvl-size);
  flex: 0 0 auto;
}

.rvl-part {
  position: absolute;
  display: block;
}

.rvl-label {
  display: none;
  color: var(--rvl-theme-text);
  font: 600 0.92rem/1.3 "Inter", "Segoe UI", sans-serif;
  letter-spacing: -0.02em;
  white-space: nowrap;
}

.rvl-loader.has-label .rvl-label {
  display: inline-block;
}

.rvl-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@keyframes rvl-rotate {
  to {
    transform: rotate(360deg);
  }
}

@keyframes rvl-rotate-reverse {
  to {
    transform: rotate(-360deg);
  }
}

@keyframes rvl-pulse {
  0%, 100% {
    transform: scale(0.92);
    opacity: 0.55;
  }
  50% {
    transform: scale(1.08);
    opacity: 1;
  }
}

@keyframes rvl-wave {
  0%, 100% {
    transform: translateY(18%);
    opacity: 0.5;
  }
  50% {
    transform: translateY(-18%);
    opacity: 1;
  }
}

@keyframes rvl-bounce {
  0%, 80%, 100% {
    transform: translateY(0) scale(0.82);
    opacity: 0.45;
  }
  40% {
    transform: translateY(-28%) scale(1);
    opacity: 1;
  }
}

@keyframes rvl-bars {
  0%, 100% {
    transform: scaleY(0.35);
    opacity: 0.42;
  }
  50% {
    transform: scaleY(1);
    opacity: 1;
  }
}

@keyframes rvl-shimmer {
  0% {
    transform: translateX(-120%);
  }
  100% {
    transform: translateX(120%);
  }
}

@keyframes rvl-glow {
  0%, 100% {
    opacity: 0.45;
    transform: scale(0.94);
  }
  50% {
    opacity: 1;
    transform: scale(1.06);
  }
}

@keyframes rvl-scan {
  0% {
    transform: translateY(-115%);
  }
  100% {
    transform: translateY(220%);
  }
}

@keyframes rvl-liquid {
  0%, 100% {
    transform: translateX(-18%) scale(0.9);
  }
  50% {
    transform: translateX(18%) scale(1.06);
  }
}

@keyframes rvl-ripple {
  0% {
    transform: scale(0.28);
    opacity: 0;
  }
  35% {
    opacity: 0.85;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

@keyframes rvl-prism {
  0%, 100% {
    transform: rotate(0deg) translateY(0) scale(0.96);
    opacity: 0.7;
  }
  50% {
    transform: rotate(180deg) translateY(-6%) scale(1.04);
    opacity: 1;
  }
}

@keyframes rvl-magnetic {
  0%, 100% {
    transform: translateX(var(--magnet-offset, 0)) scale(0.82);
    opacity: 0.48;
  }
  50% {
    transform: translateX(0) scale(1.08);
    opacity: 1;
  }
}

@keyframes rvl-float {
  0%, 100% {
    transform: translateY(0);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-10%);
    opacity: 1;
  }
}

@keyframes rvl-space-float {
  0%, 100% {
    transform: translateY(4%) rotate(-5deg);
  }
  50% {
    transform: translateY(-4%) rotate(3deg);
  }
}

@keyframes rvl-star-twinkle {
  0%, 100% {
    opacity: 0.35;
    transform: scale(0.82);
  }
  50% {
    opacity: 1;
    transform: scale(1.06);
  }
}

@keyframes rvl-planet-bob {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3%);
  }
}

@keyframes rvl-mars-trip {
  0% {
    transform: translate(0, 0) rotate(-10deg) scale(0.92);
  }
  45% {
    transform: translate(calc(var(--rvl-size) * 0.44), calc(var(--rvl-size) * -0.16)) rotate(-2deg) scale(1);
  }
  100% {
    transform: translate(calc(var(--rvl-size) * 0.82), calc(var(--rvl-size) * -0.04)) rotate(8deg) scale(0.92);
  }
}

@keyframes rvl-athlete-sway {
  0%, 100% {
    transform: translateY(2%) rotate(-6deg);
  }
  50% {
    transform: translateY(-2%) rotate(4deg);
  }
}

@keyframes rvl-baseball-flight {
  0% {
    transform: translate(0, 0) scale(0.9);
  }
  50% {
    transform: translate(calc(var(--rvl-size) * 0.68), calc(var(--rvl-size) * -0.32)) scale(1);
  }
  100% {
    transform: translate(calc(var(--rvl-size) * 1.04), calc(var(--rvl-size) * -0.12)) scale(0.88);
  }
}

@keyframes rvl-football-flight {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(0.9);
  }
  45% {
    transform: translate(calc(var(--rvl-size) * 0.58), calc(var(--rvl-size) * -0.22)) rotate(180deg) scale(1);
  }
  100% {
    transform: translate(calc(var(--rvl-size) * 0.96), calc(var(--rvl-size) * -0.04)) rotate(360deg) scale(0.88);
  }
}

@keyframes rvl-galaxy-core {
  0%, 100% {
    transform: translate(-50%, -50%) scale(0.92);
    box-shadow:
      0 0 calc(var(--rvl-size) * 0.2) rgba(125, 211, 252, 0.26),
      0 0 calc(var(--rvl-size) * 0.44) rgba(129, 140, 248, 0.16);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.06);
    box-shadow:
      0 0 calc(var(--rvl-size) * 0.28) rgba(125, 211, 252, 0.34),
      0 0 calc(var(--rvl-size) * 0.58) rgba(129, 140, 248, 0.22);
  }
}

@keyframes rvl-galaxy-drift {
  0%, 100% {
    transform: rotate(0deg) scale(0.96);
  }
  50% {
    transform: rotate(180deg) scale(1.04);
  }
}

@media (prefers-reduced-motion: reduce) {
  .rvl-loader,
  .rvl-loader * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;var c=`
.rvl-variant--ring .rvl-part:nth-child(1) {
  inset: 0;
  border: var(--rvl-thickness) solid var(--rvl-secondary-color);
  border-top-color: var(--rvl-color);
  border-radius: 999px;
  animation: rvl-rotate var(--rvl-speed) linear infinite;
}

.rvl-variant--dual-ring .rvl-part:nth-child(1),
.rvl-variant--dual-ring .rvl-part:nth-child(2) {
  border-radius: 999px;
  border-style: solid;
}

.rvl-variant--dual-ring .rvl-part:nth-child(1) {
  inset: 0;
  border-width: var(--rvl-thickness);
  border-color: var(--rvl-color) transparent var(--rvl-secondary-color) transparent;
  animation: rvl-rotate var(--rvl-speed) linear infinite;
}

.rvl-variant--dual-ring .rvl-part:nth-child(2) {
  inset: calc(var(--rvl-size) * 0.18);
  border-width: calc(var(--rvl-thickness) * 0.85);
  border-color: transparent var(--rvl-color) transparent var(--rvl-secondary-color);
  animation: rvl-rotate-reverse calc(var(--rvl-speed) * 1.35) linear infinite;
}

.rvl-variant--segmented-ring .rvl-visual {
  animation: rvl-rotate calc(var(--rvl-speed) * 1.4) linear infinite;
}

.rvl-variant--segmented-ring .rvl-part {
  top: 6%;
  left: 50%;
  width: calc(var(--rvl-thickness) * 0.9);
  height: calc(var(--rvl-size) * 0.18);
  margin-left: calc(var(--rvl-thickness) * -0.45);
  border-radius: 999px;
  background: var(--rvl-color);
  transform-origin: 50% calc((var(--rvl-size) * 0.44));
}

.rvl-variant--segmented-ring .rvl-part:nth-child(1) { transform: rotate(0deg); opacity: 0.28; }
.rvl-variant--segmented-ring .rvl-part:nth-child(2) { transform: rotate(30deg); opacity: 0.34; }
.rvl-variant--segmented-ring .rvl-part:nth-child(3) { transform: rotate(60deg); opacity: 0.4; }
.rvl-variant--segmented-ring .rvl-part:nth-child(4) { transform: rotate(90deg); opacity: 0.46; }
.rvl-variant--segmented-ring .rvl-part:nth-child(5) { transform: rotate(120deg); opacity: 0.52; }
.rvl-variant--segmented-ring .rvl-part:nth-child(6) { transform: rotate(150deg); opacity: 0.58; }
.rvl-variant--segmented-ring .rvl-part:nth-child(7) { transform: rotate(180deg); opacity: 0.66; }
.rvl-variant--segmented-ring .rvl-part:nth-child(8) { transform: rotate(210deg); opacity: 0.74; }
.rvl-variant--segmented-ring .rvl-part:nth-child(9) { transform: rotate(240deg); opacity: 0.82; }
.rvl-variant--segmented-ring .rvl-part:nth-child(10) { transform: rotate(270deg); opacity: 0.9; }
.rvl-variant--segmented-ring .rvl-part:nth-child(11) { transform: rotate(300deg); opacity: 0.96; }
.rvl-variant--segmented-ring .rvl-part:nth-child(12) { transform: rotate(330deg); opacity: 1; }

.rvl-variant--arc .rvl-part:nth-child(1) {
  inset: 0;
  border-radius: 999px;
  border: var(--rvl-thickness) solid transparent;
  border-top-color: var(--rvl-color);
  border-right-color: var(--rvl-color);
  box-shadow: inset 0 0 0 calc(var(--rvl-thickness) * 0.15) var(--rvl-secondary-color);
  animation: rvl-rotate var(--rvl-speed) cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
}

.rvl-variant--orbit .rvl-part:nth-child(1) {
  inset: calc(var(--rvl-size) * 0.29);
  width: calc(var(--rvl-size) * 0.18);
  height: calc(var(--rvl-size) * 0.18);
  background: var(--rvl-color);
  border-radius: 999px;
  box-shadow: 0 0 0 calc(var(--rvl-size) * 0.12) var(--rvl-secondary-color);
}

.rvl-variant--orbit .rvl-part:nth-child(2) {
  inset: 0;
  border-radius: 999px;
  border: calc(var(--rvl-thickness) * 0.75) solid transparent;
  border-top-color: var(--rvl-color);
  animation: rvl-rotate calc(var(--rvl-speed) * 1.1) linear infinite;
}

.rvl-variant--orbit .rvl-visual::after {
  content: "";
  position: absolute;
  top: calc(var(--rvl-size) * 0.1);
  left: 50%;
  width: calc(var(--rvl-size) * 0.16);
  height: calc(var(--rvl-size) * 0.16);
  background: var(--rvl-color);
  border-radius: 999px;
  transform-origin: 50% calc((var(--rvl-size) * 0.4));
  animation: rvl-rotate calc(var(--rvl-speed) * 1.1) linear infinite;
}

.rvl-variant--comet .rvl-part:nth-child(1) {
  inset: 0;
  border-radius: 999px;
  border: calc(var(--rvl-thickness) * 0.7) solid color-mix(in srgb, var(--rvl-color) 20%, transparent);
}

.rvl-variant--comet .rvl-part:nth-child(2) {
  top: calc(var(--rvl-size) * 0.06);
  left: 50%;
  width: calc(var(--rvl-size) * 0.14);
  height: calc(var(--rvl-size) * 0.14);
  margin-left: calc(var(--rvl-size) * -0.07);
  background: var(--rvl-color);
  border-radius: 999px;
  box-shadow:
    0 0 0 calc(var(--rvl-size) * 0.08) color-mix(in srgb, var(--rvl-color) 16%, transparent),
    0 calc(var(--rvl-size) * 0.12) calc(var(--rvl-size) * 0.16) color-mix(in srgb, var(--rvl-color) 20%, transparent);
  transform-origin: 50% calc((var(--rvl-size) * 0.44));
  animation: rvl-rotate calc(var(--rvl-speed) * 1.08) linear infinite;
}

.rvl-variant--halo .rvl-part:nth-child(1),
.rvl-variant--halo .rvl-part:nth-child(2) {
  inset: 0;
  border-radius: 999px;
}

.rvl-variant--halo .rvl-part:nth-child(1) {
  border: calc(var(--rvl-thickness) * 0.75) solid color-mix(in srgb, var(--rvl-color) 34%, transparent);
  box-shadow:
    0 0 18px color-mix(in srgb, var(--rvl-color) 22%, transparent),
    inset 0 0 14px color-mix(in srgb, var(--rvl-color) 12%, transparent);
  animation: rvl-glow calc(var(--rvl-speed) * 1.4) ease-in-out infinite;
}

.rvl-variant--halo .rvl-part:nth-child(2) {
  inset: calc(var(--rvl-size) * 0.18);
  border: calc(var(--rvl-thickness) * 0.55) solid transparent;
  border-top-color: var(--rvl-color);
  animation: rvl-rotate calc(var(--rvl-speed) * 1.2) linear infinite;
}

.rvl-variant--radar .rvl-part:nth-child(1),
.rvl-variant--radar .rvl-part:nth-child(2) {
  border: 1px solid color-mix(in srgb, var(--rvl-color) 30%, transparent);
  border-radius: 999px;
}

.rvl-variant--radar .rvl-part:nth-child(1) {
  inset: 0;
}

.rvl-variant--radar .rvl-part:nth-child(2) {
  inset: calc(var(--rvl-size) * 0.18);
}

.rvl-variant--radar .rvl-part:nth-child(3) {
  width: 52%;
  height: 52%;
  top: 24%;
  left: 24%;
  background:
    linear-gradient(120deg, transparent 0%, color-mix(in srgb, var(--rvl-color) 56%, transparent) 55%, transparent 100%);
  clip-path: polygon(50% 50%, 100% 0%, 100% 100%);
  transform-origin: 50% 50%;
  animation: rvl-rotate calc(var(--rvl-speed) * 1.2) linear infinite;
}

.rvl-variant--astronaut .rvl-visual {
  width: calc(var(--rvl-size) * 1.18);
  height: calc(var(--rvl-size) * 1.18);
  animation: rvl-space-float calc(var(--rvl-speed) * 1.8) ease-in-out infinite;
}

.rvl-variant--astronaut .rvl-part:nth-child(1) {
  top: 13%;
  left: 37%;
  width: 30%;
  height: 30%;
  border-radius: 999px;
  background:
    radial-gradient(circle at 42% 34%, rgba(255, 255, 255, 0.98) 0 42%, #dbeafe 43% 62%, #bfdbfe 63% 100%);
  box-shadow:
    inset 0 -2px 0 rgba(96, 165, 250, 0.22),
    0 8px 18px color-mix(in srgb, var(--rvl-color) 14%, transparent);
}

.rvl-variant--astronaut .rvl-part:nth-child(1)::before {
  content: "";
  position: absolute;
  inset: 22% 18% 26% 18%;
  border-radius: 999px 999px 52% 52%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.88), color-mix(in srgb, var(--rvl-color) 72%, #0f172a));
}

.rvl-variant--astronaut .rvl-part:nth-child(1)::after {
  content: "";
  position: absolute;
  top: 28%;
  left: 28%;
  width: 18%;
  height: 18%;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.78);
}

.rvl-variant--astronaut .rvl-part:nth-child(2) {
  top: 42%;
  left: 34%;
  width: 32%;
  height: 34%;
  border-radius: 46% 46% 34% 34%;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), #dbeafe 70%, #bfdbfe 100%);
  box-shadow:
    inset 0 -2px 0 rgba(96, 165, 250, 0.16),
    0 10px 24px color-mix(in srgb, var(--rvl-color) 10%, transparent);
}

.rvl-variant--astronaut .rvl-part:nth-child(2)::before {
  content: "";
  position: absolute;
  left: -16%;
  top: 16%;
  width: 24%;
  height: 44%;
  border-radius: 10px;
  background: #c7d2fe;
  box-shadow: calc(var(--rvl-size) * 0.24) 0 0 #eff6ff;
}

.rvl-variant--astronaut .rvl-part:nth-child(2)::after {
  content: "";
  position: absolute;
  left: 21%;
  bottom: -18%;
  width: 16%;
  height: 26%;
  border-radius: 999px;
  background: #dbeafe;
  box-shadow:
    calc(var(--rvl-size) * 0.14) 0 0 #dbeafe,
    calc(var(--rvl-size) * -0.14) calc(var(--rvl-size) * -0.1) 0 #eff6ff,
    calc(var(--rvl-size) * 0.18) calc(var(--rvl-size) * -0.1) 0 #eff6ff;
}

.rvl-variant--astronaut .rvl-part:nth-child(3) {
  top: 16%;
  left: 18%;
  width: 4px;
  height: 4px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow:
    calc(var(--rvl-size) * 0.18) calc(var(--rvl-size) * 0.14) 0 rgba(255, 255, 255, 0.7),
    calc(var(--rvl-size) * 0.54) calc(var(--rvl-size) * 0.08) 0 rgba(255, 255, 255, 0.95),
    calc(var(--rvl-size) * 0.64) calc(var(--rvl-size) * 0.42) 0 rgba(255, 255, 255, 0.7),
    calc(var(--rvl-size) * 0.08) calc(var(--rvl-size) * 0.56) 0 rgba(255, 255, 255, 0.82);
  animation: rvl-star-twinkle calc(var(--rvl-speed) * 1.6) ease-in-out infinite;
}

.rvl-variant--astronaut-to-mars .rvl-visual {
  width: calc(var(--rvl-size) * 1.82);
  height: calc(var(--rvl-size) * 1.16);
}

.rvl-variant--astronaut-to-mars .rvl-part:nth-child(1) {
  top: 16%;
  right: 6%;
  width: 34%;
  height: 54%;
  border-radius: 999px;
  background:
    radial-gradient(circle at 34% 32%, rgba(254, 202, 202, 0.72) 0 10%, transparent 11%),
    radial-gradient(circle at 68% 60%, rgba(248, 113, 113, 0.64) 0 10%, transparent 11%),
    radial-gradient(circle at 52% 44%, #fb7185 0 16%, #ef4444 17% 60%, #991b1b 100%);
  box-shadow:
    0 0 0 calc(var(--rvl-size) * 0.06) rgba(248, 113, 113, 0.12),
    0 16px 28px rgba(127, 29, 29, 0.18);
  animation: rvl-planet-bob calc(var(--rvl-speed) * 1.8) ease-in-out infinite;
}

.rvl-variant--astronaut-to-mars .rvl-part:nth-child(2) {
  top: 26%;
  left: 14%;
  width: 58%;
  height: 34%;
  border-top: calc(var(--rvl-thickness) * 0.68) dashed color-mix(in srgb, var(--rvl-color) 26%, transparent);
  border-radius: 999px;
  opacity: 0.9;
  transform: rotate(8deg);
}

.rvl-variant--astronaut-to-mars .rvl-part:nth-child(3) {
  top: 44%;
  left: 6%;
  width: 10%;
  height: 18%;
  border-radius: 44% 44% 34% 34%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), #dbeafe 72%, #bfdbfe 100%);
  box-shadow: 0 8px 18px color-mix(in srgb, var(--rvl-color) 10%, transparent);
  animation: rvl-mars-trip calc(var(--rvl-speed) * 2.1) ease-in-out infinite;
}

.rvl-variant--astronaut-to-mars .rvl-part:nth-child(3)::before {
  content: "";
  position: absolute;
  top: -56%;
  left: 16%;
  width: 68%;
  height: 68%;
  border-radius: 999px;
  background:
    radial-gradient(circle at 42% 34%, rgba(255, 255, 255, 0.98) 0 42%, #dbeafe 43% 62%, #bfdbfe 63% 100%);
  box-shadow: inset 0 -1px 0 rgba(96, 165, 250, 0.18);
}

.rvl-variant--astronaut-to-mars .rvl-part:nth-child(3)::after {
  content: "";
  position: absolute;
  left: -120%;
  top: 46%;
  width: 120%;
  height: 2px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--rvl-color) 32%, transparent), transparent);
  opacity: 0.72;
}

.rvl-variant--astronaut-to-mars .rvl-part:nth-child(4) {
  top: 12%;
  left: 10%;
  width: 4px;
  height: 4px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow:
    calc(var(--rvl-size) * 0.34) calc(var(--rvl-size) * 0.12) 0 rgba(255, 255, 255, 0.7),
    calc(var(--rvl-size) * 0.88) calc(var(--rvl-size) * 0.04) 0 rgba(255, 255, 255, 0.9),
    calc(var(--rvl-size) * 1.08) calc(var(--rvl-size) * 0.44) 0 rgba(255, 255, 255, 0.74),
    calc(var(--rvl-size) * 0.42) calc(var(--rvl-size) * 0.56) 0 rgba(255, 255, 255, 0.86);
  animation: rvl-star-twinkle calc(var(--rvl-speed) * 1.7) ease-in-out infinite;
}

.rvl-variant--baseball-player .rvl-visual,
.rvl-variant--football-player .rvl-visual {
  width: calc(var(--rvl-size) * 1.76);
  height: calc(var(--rvl-size) * 1.12);
}

.rvl-variant--baseball-player .rvl-part:nth-child(1),
.rvl-variant--football-player .rvl-part:nth-child(1) {
  top: 28%;
  left: 14%;
  width: 18%;
  height: 42%;
  border-radius: 18px 18px 14px 14px;
  background: linear-gradient(180deg, color-mix(in srgb, var(--rvl-color) 78%, white), var(--rvl-color));
  clip-path: polygon(36% 0%, 70% 0%, 100% 22%, 80% 56%, 78% 100%, 54% 100%, 48% 72%, 34% 100%, 12% 100%, 18% 56%, 0% 22%);
  transform-origin: 50% 76%;
  animation: rvl-athlete-sway calc(var(--rvl-speed) * 1.45) ease-in-out infinite;
}

.rvl-variant--baseball-player .rvl-part:nth-child(1)::before,
.rvl-variant--football-player .rvl-part:nth-child(1)::before {
  content: "";
  position: absolute;
  top: -26%;
  left: 26%;
  width: 46%;
  height: 30%;
  border-radius: 999px;
  background: color-mix(in srgb, white 72%, var(--rvl-color));
}

.rvl-variant--baseball-player .rvl-part:nth-child(1)::after,
.rvl-variant--football-player .rvl-part:nth-child(1)::after {
  content: "";
  position: absolute;
  left: 92%;
  top: 32%;
  width: 92%;
  height: 6%;
  border-radius: 999px;
  background: color-mix(in srgb, var(--rvl-color) 32%, transparent);
  transform-origin: left center;
}

.rvl-variant--baseball-player .rvl-part:nth-child(1)::after {
  width: 116%;
  top: 12%;
  transform: rotate(-28deg);
  background: linear-gradient(90deg, color-mix(in srgb, #f59e0b 84%, white), color-mix(in srgb, #b45309 82%, white));
}

.rvl-variant--football-player .rvl-part:nth-child(1)::after {
  width: 82%;
  top: 52%;
  transform: rotate(-34deg);
  background: color-mix(in srgb, var(--rvl-color) 18%, transparent);
}

.rvl-variant--baseball-player .rvl-part:nth-child(3),
.rvl-variant--football-player .rvl-part:nth-child(3) {
  left: 8%;
  right: 8%;
  bottom: 12%;
  height: 2px;
  border-radius: 999px;
}

.rvl-variant--baseball-player .rvl-part:nth-child(2) {
  left: 34%;
  top: 42%;
  width: calc(var(--rvl-size) * 0.12);
  height: calc(var(--rvl-size) * 0.12);
  border-radius: 999px;
  background:
    radial-gradient(circle at 40% 40%, white 0 38%, #f8fafc 39% 100%);
  box-shadow:
    inset -1px -1px 0 rgba(239, 68, 68, 0.22),
    0 0 0 1px rgba(255, 255, 255, 0.5);
  animation: rvl-baseball-flight calc(var(--rvl-speed) * 1.42) ease-in-out infinite;
}

.rvl-variant--baseball-player .rvl-part:nth-child(3) {
  left: 24%;
  top: 18%;
  width: 54%;
  height: 54%;
  border-top: calc(var(--rvl-thickness) * 0.5) solid color-mix(in srgb, var(--rvl-color) 16%, transparent);
  border-radius: 999px;
  background: none;
}

.rvl-variant--baseball-player .rvl-part:nth-child(4) {
  left: 8%;
  right: 8%;
  bottom: 14%;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, #94a3b8 44%, transparent), transparent);
}

.rvl-variant--football-player .rvl-part:nth-child(2) {
  left: 34%;
  top: 60%;
  width: calc(var(--rvl-size) * 0.16);
  height: calc(var(--rvl-size) * 0.1);
  border-radius: 999px;
  background:
    radial-gradient(circle at 36% 50%, white 0 20%, transparent 21%),
    radial-gradient(circle at 64% 50%, white 0 20%, transparent 21%),
    linear-gradient(90deg, white 0 16%, #111827 17% 26%, white 27% 42%, #111827 43% 58%, white 59% 74%, #111827 75% 84%, white 85% 100%);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2);
  animation: rvl-football-flight calc(var(--rvl-speed) * 1.36) ease-in-out infinite;
}

.rvl-variant--football-player .rvl-part:nth-child(3) {
  background: linear-gradient(90deg, transparent, rgba(74, 222, 128, 0.5), transparent);
}

.rvl-variant--football-player .rvl-part:nth-child(4) {
  left: 36%;
  top: 56%;
  width: calc(var(--rvl-size) * 0.28);
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, color-mix(in srgb, white 58%, transparent), transparent);
  opacity: 0.68;
  animation: rvl-football-flight calc(var(--rvl-speed) * 1.36) ease-in-out infinite;
}

.rvl-variant--galaxy .rvl-visual {
  width: calc(var(--rvl-size) * 1.76);
  height: calc(var(--rvl-size) * 1.76);
  animation: rvl-galaxy-drift calc(var(--rvl-speed) * 2.6) linear infinite;
}

.rvl-variant--galaxy .rvl-visual::before {
  content: "";
  position: absolute;
  inset: 14%;
  border-radius: 999px;
  background:
    radial-gradient(circle at center, transparent 0 28%, color-mix(in srgb, var(--rvl-color) 18%, transparent) 28.8% 29.8%, transparent 30.8%),
    radial-gradient(circle at center, transparent 0 40%, color-mix(in srgb, #a78bfa 18%, transparent) 40.8% 41.8%, transparent 42.8%),
    linear-gradient(35deg, transparent 22%, color-mix(in srgb, var(--rvl-color) 24%, transparent) 42%, transparent 58%),
    linear-gradient(145deg, transparent 24%, color-mix(in srgb, #818cf8 22%, transparent) 44%, transparent 60%);
  filter: blur(1px);
  opacity: 0.95;
}

.rvl-variant--galaxy .rvl-visual::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(var(--rvl-size) * 0.22);
  height: calc(var(--rvl-size) * 0.22);
  border-radius: 999px;
  background:
    radial-gradient(circle at center, #f8fafc 0 22%, #bfdbfe 23% 54%, #818cf8 55% 100%);
  transform: translate(-50%, -50%);
  animation: rvl-galaxy-core calc(var(--rvl-speed) * 1.8) ease-in-out infinite;
}

.rvl-variant--galaxy .rvl-part {
  border-radius: 999px;
}

.rvl-variant--galaxy .rvl-part:nth-child(1),
.rvl-variant--galaxy .rvl-part:nth-child(2) {
  top: 50%;
  left: 50%;
  width: calc(var(--rvl-size) * 1.08);
  height: calc(var(--rvl-size) * 0.38);
  margin-left: calc(var(--rvl-size) * -0.54);
  margin-top: calc(var(--rvl-size) * -0.19);
  border-radius: 999px;
  background:
    radial-gradient(circle at 18% 50%, rgba(255, 255, 255, 0.88) 0 3%, transparent 4%),
    radial-gradient(circle at 36% 38%, rgba(196, 181, 253, 0.88) 0 3%, transparent 4%),
    radial-gradient(circle at 62% 62%, rgba(125, 211, 252, 0.88) 0 3.2%, transparent 4.2%),
    radial-gradient(circle at 82% 44%, rgba(255, 255, 255, 0.74) 0 2.8%, transparent 3.8%),
    linear-gradient(
      90deg,
      transparent 0%,
      color-mix(in srgb, #a78bfa 24%, transparent) 18%,
      color-mix(in srgb, var(--rvl-color) 28%, transparent) 50%,
      color-mix(in srgb, #7dd3fc 24%, transparent) 82%,
      transparent 100%
    );
  filter: blur(2px);
}

.rvl-variant--galaxy .rvl-part:nth-child(1) {
  transform: rotate(28deg);
}

.rvl-variant--galaxy .rvl-part:nth-child(2) {
  transform: rotate(-24deg);
}

.rvl-variant--galaxy .rvl-part:nth-child(3),
.rvl-variant--galaxy .rvl-part:nth-child(4),
.rvl-variant--galaxy .rvl-part:nth-child(5),
.rvl-variant--galaxy .rvl-part:nth-child(6) {
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
  animation: rvl-rotate linear infinite;
}

.rvl-variant--galaxy .rvl-part:nth-child(3) {
  width: calc(var(--rvl-size) * 0.64);
  height: calc(var(--rvl-size) * 0.64);
  margin-left: calc(var(--rvl-size) * -0.32);
  margin-top: calc(var(--rvl-size) * -0.32);
  animation-duration: calc(var(--rvl-speed) * 1.8);
}

.rvl-variant--galaxy .rvl-part:nth-child(3)::before {
  content: "";
  position: absolute;
  width: calc(var(--rvl-size) * 0.07);
  height: calc(var(--rvl-size) * 0.07);
  transform: translateX(calc(var(--rvl-size) * 0.32));
  border-radius: 999px;
  background: #f8fafc;
}

.rvl-variant--galaxy .rvl-part:nth-child(4) {
  width: calc(var(--rvl-size) * 0.88);
  height: calc(var(--rvl-size) * 0.88);
  margin-left: calc(var(--rvl-size) * -0.44);
  margin-top: calc(var(--rvl-size) * -0.44);
  animation-duration: calc(var(--rvl-speed) * 2.4);
}

.rvl-variant--galaxy .rvl-part:nth-child(4)::before {
  content: "";
  position: absolute;
  width: calc(var(--rvl-size) * 0.06);
  height: calc(var(--rvl-size) * 0.06);
  transform: translateX(calc(var(--rvl-size) * 0.44));
  border-radius: 999px;
  background: #a78bfa;
}

.rvl-variant--galaxy .rvl-part:nth-child(5) {
  width: calc(var(--rvl-size) * 1.08);
  height: calc(var(--rvl-size) * 1.08);
  margin-left: calc(var(--rvl-size) * -0.54);
  margin-top: calc(var(--rvl-size) * -0.54);
  animation-duration: calc(var(--rvl-speed) * 3.1);
}

.rvl-variant--galaxy .rvl-part:nth-child(5)::before {
  content: "";
  position: absolute;
  width: calc(var(--rvl-size) * 0.052);
  height: calc(var(--rvl-size) * 0.052);
  transform: translateX(calc(var(--rvl-size) * 0.54));
  border-radius: 999px;
  background: #7dd3fc;
}

.rvl-variant--galaxy .rvl-part:nth-child(6) {
  top: 18%;
  left: 20%;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow:
    calc(var(--rvl-size) * 0.18) calc(var(--rvl-size) * 0.12) 0 rgba(255, 255, 255, 0.76),
    calc(var(--rvl-size) * 0.68) calc(var(--rvl-size) * 0.06) 0 rgba(196, 181, 253, 0.92),
    calc(var(--rvl-size) * 0.88) calc(var(--rvl-size) * 0.46) 0 rgba(125, 211, 252, 0.86),
    calc(var(--rvl-size) * 0.22) calc(var(--rvl-size) * 0.86) 0 rgba(255, 255, 255, 0.78);
  animation: rvl-star-twinkle calc(var(--rvl-speed) * 1.8) ease-in-out infinite;
}

.rvl-variant--pulse .rvl-part:nth-child(1),
.rvl-variant--pulse .rvl-part:nth-child(2) {
  inset: 0;
  border-radius: 999px;
}

.rvl-variant--pulse .rvl-part:nth-child(1) {
  background: var(--rvl-color);
  transform: scale(0.34);
}

.rvl-variant--pulse .rvl-part:nth-child(2) {
  border: calc(var(--rvl-thickness) * 0.8) solid var(--rvl-color);
  animation: rvl-pulse calc(var(--rvl-speed) * 1.5) ease-in-out infinite;
}

.rvl-variant--wave-dots .rvl-part,
.rvl-variant--bouncing-dots .rvl-part,
.rvl-variant--typing-dots .rvl-part,
.rvl-variant--magnetic-dots .rvl-part {
  position: static;
  width: calc(var(--rvl-size) / 5.5);
  height: calc(var(--rvl-size) / 5.5);
  border-radius: 999px;
  background: var(--rvl-color);
}

.rvl-variant--wave-dots .rvl-visual,
.rvl-variant--bouncing-dots .rvl-visual,
.rvl-variant--typing-dots .rvl-visual,
.rvl-variant--magnetic-dots .rvl-visual {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: calc(var(--rvl-gap) * 0.5);
  width: auto;
}

.rvl-variant--wave-dots .rvl-part {
  animation: rvl-wave calc(var(--rvl-speed) * 1.1) ease-in-out infinite;
}

.rvl-variant--bouncing-dots .rvl-part {
  animation: rvl-bounce var(--rvl-speed) ease-in-out infinite;
}

.rvl-variant--typing-dots .rvl-part {
  animation: rvl-pulse calc(var(--rvl-speed) * 1.2) ease-in-out infinite;
}

.rvl-variant--magnetic-dots .rvl-part {
  animation: rvl-magnetic calc(var(--rvl-speed) * 1.15) ease-in-out infinite;
}

.rvl-variant--magnetic-dots .rvl-part:nth-child(1) { --magnet-offset: -32%; }
.rvl-variant--magnetic-dots .rvl-part:nth-child(2) { --magnet-offset: -14%; }
.rvl-variant--magnetic-dots .rvl-part:nth-child(3) { --magnet-offset: 14%; }
.rvl-variant--magnetic-dots .rvl-part:nth-child(4) { --magnet-offset: 32%; }
.rvl-variant--magnetic-dots .rvl-part:nth-child(5) { --magnet-offset: 44%; }
.rvl-variant--magnetic-dots .rvl-part:nth-child(6) { --magnet-offset: -44%; }

.rvl-variant--grid-pulse .rvl-visual {
  display: grid;
  width: calc(var(--rvl-size) * 0.98);
  height: calc(var(--rvl-size) * 0.98);
  grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--rvl-gap) * 0.24);
}

.rvl-variant--grid-pulse .rvl-part {
  position: static;
  width: calc(var(--rvl-size) * 0.22);
  height: calc(var(--rvl-size) * 0.22);
  border-radius: calc(var(--rvl-radius) * 0.14);
  background: linear-gradient(180deg, color-mix(in srgb, var(--rvl-color) 84%, white), var(--rvl-color));
  animation: rvl-pulse calc(var(--rvl-speed) * 1.1) ease-in-out infinite;
}

.rvl-variant--spiral-dots .rvl-visual {
  animation: rvl-rotate calc(var(--rvl-speed) * 1.4) linear infinite;
}

.rvl-variant--spiral-dots .rvl-part,
.rvl-variant--constellation .rvl-part {
  width: calc(var(--rvl-size) * 0.12);
  height: calc(var(--rvl-size) * 0.12);
  border-radius: 999px;
  background: var(--rvl-color);
}

.rvl-variant--spiral-dots .rvl-part {
  box-shadow: 0 0 0 calc(var(--rvl-size) * 0.05) color-mix(in srgb, var(--rvl-color) 10%, transparent);
  animation: rvl-pulse calc(var(--rvl-speed) * 1.1) ease-in-out infinite;
}

.rvl-variant--spiral-dots .rvl-part:nth-child(1) { top: 50%; left: 50%; margin: calc(var(--rvl-size) * -0.06); }
.rvl-variant--spiral-dots .rvl-part:nth-child(2) { top: 30%; left: 50%; margin: calc(var(--rvl-size) * -0.06); }
.rvl-variant--spiral-dots .rvl-part:nth-child(3) { top: 28%; left: 67%; margin: calc(var(--rvl-size) * -0.06); }
.rvl-variant--spiral-dots .rvl-part:nth-child(4) { top: 48%; left: 78%; margin: calc(var(--rvl-size) * -0.06); }
.rvl-variant--spiral-dots .rvl-part:nth-child(5) { top: 68%; left: 66%; margin: calc(var(--rvl-size) * -0.06); }
.rvl-variant--spiral-dots .rvl-part:nth-child(6) { top: 74%; left: 42%; margin: calc(var(--rvl-size) * -0.06); }
.rvl-variant--spiral-dots .rvl-part:nth-child(7) { top: 58%; left: 22%; margin: calc(var(--rvl-size) * -0.06); }
.rvl-variant--spiral-dots .rvl-part:nth-child(8) { top: 24%; left: 24%; margin: calc(var(--rvl-size) * -0.06); }

.rvl-variant--wave-dots .rvl-part,
.rvl-variant--bouncing-dots .rvl-part,
.rvl-variant--typing-dots .rvl-part,
.rvl-variant--magnetic-dots .rvl-part,
.rvl-variant--grid-pulse .rvl-part,
.rvl-variant--spiral-dots .rvl-part,
.rvl-variant--equalizer-bars .rvl-part,
.rvl-variant--rising-bars .rvl-part {
  animation-delay: calc(var(--part-index, 0) * 90ms);
}

.rvl-variant--constellation .rvl-visual::before {
  content: "";
  position: absolute;
  inset: calc(var(--rvl-size) * 0.14);
  background:
    linear-gradient(28deg, transparent 47%, color-mix(in srgb, var(--rvl-color) 22%, transparent) 49%, color-mix(in srgb, var(--rvl-color) 22%, transparent) 51%, transparent 53%),
    linear-gradient(152deg, transparent 47%, color-mix(in srgb, var(--rvl-color) 22%, transparent) 49%, color-mix(in srgb, var(--rvl-color) 22%, transparent) 51%, transparent 53%);
  opacity: 0.9;
}

.rvl-variant--constellation .rvl-part {
  animation: rvl-float calc(var(--rvl-speed) * 1.5) ease-in-out infinite;
  box-shadow: 0 0 0 calc(var(--rvl-size) * 0.05) color-mix(in srgb, var(--rvl-color) 12%, transparent);
}

.rvl-variant--constellation .rvl-part:nth-child(1) { top: 18%; left: 28%; }
.rvl-variant--constellation .rvl-part:nth-child(2) { top: 34%; left: 62%; }
.rvl-variant--constellation .rvl-part:nth-child(3) { top: 58%; left: 74%; }
.rvl-variant--constellation .rvl-part:nth-child(4) { top: 74%; left: 42%; }
.rvl-variant--constellation .rvl-part:nth-child(5) { top: 52%; left: 16%; }
.rvl-variant--constellation .rvl-part:nth-child(6) { top: 24%; left: 78%; }

.rvl-variant--equalizer-bars .rvl-visual,
.rvl-variant--rising-bars .rvl-visual {
  display: inline-flex;
  align-items: end;
  justify-content: center;
  gap: calc(var(--rvl-gap) * 0.35);
  width: auto;
}

.rvl-variant--equalizer-bars .rvl-part,
.rvl-variant--rising-bars .rvl-part {
  position: static;
  width: calc(var(--rvl-size) / 9);
  min-width: 4px;
  border-radius: 999px;
  background: linear-gradient(180deg, var(--rvl-color), color-mix(in srgb, var(--rvl-color) 36%, white));
  transform-origin: bottom center;
}

.rvl-variant--equalizer-bars .rvl-part {
  height: calc(var(--rvl-size) * 0.72);
  animation: rvl-bars calc(var(--rvl-speed) * 1.1) ease-in-out infinite;
}

.rvl-variant--rising-bars .rvl-part {
  height: calc(var(--rvl-size) * 0.74);
  animation: rvl-bars calc(var(--rvl-speed) * 1.35) cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
}

.rvl-variant--shimmer .rvl-visual {
  width: calc(var(--rvl-size) * 2.6);
  height: calc(var(--rvl-size) * 0.42);
  overflow: hidden;
  border-radius: calc(var(--rvl-radius) * 0.8);
  background: color-mix(in srgb, var(--rvl-color) 12%, transparent);
}

.rvl-variant--shimmer .rvl-part:nth-child(1) {
  inset: 0;
  background:
    linear-gradient(
      90deg,
      transparent 0%,
      color-mix(in srgb, white 78%, var(--rvl-color)) 45%,
      transparent 100%
    );
  transform: translateX(-120%);
  animation: rvl-shimmer calc(var(--rvl-speed) * 1.35) linear infinite;
}

.rvl-variant--scan-line .rvl-visual,
.rvl-variant--skeleton-blocks .rvl-visual {
  width: calc(var(--rvl-size) * 2.85);
  overflow: hidden;
  border-radius: calc(var(--rvl-radius) * 0.85);
}

.rvl-variant--scan-line .rvl-visual {
  height: calc(var(--rvl-size) * 1.55);
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--rvl-color) 5%, transparent), transparent 40%),
    color-mix(in srgb, var(--rvl-color) 9%, transparent);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--rvl-color) 12%, transparent);
}

.rvl-variant--scan-line .rvl-part:nth-child(1) {
  top: 0;
  left: 0;
  right: 0;
  height: calc(var(--rvl-thickness) * 1.6);
  background: linear-gradient(90deg, transparent, var(--rvl-color), transparent);
  box-shadow: 0 0 20px color-mix(in srgb, var(--rvl-color) 24%, transparent);
  animation: rvl-scan calc(var(--rvl-speed) * 1.5) ease-in-out infinite;
}

.rvl-variant--liquid-pill .rvl-visual {
  width: calc(var(--rvl-size) * 2.4);
  height: calc(var(--rvl-size) * 0.66);
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, var(--rvl-color) 12%, transparent);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--rvl-color) 10%, transparent);
}

.rvl-variant--liquid-pill .rvl-part:nth-child(1),
.rvl-variant--liquid-pill .rvl-part:nth-child(2) {
  top: 12%;
  bottom: 12%;
  border-radius: 999px;
}

.rvl-variant--liquid-pill .rvl-part:nth-child(1) {
  left: 10%;
  width: 44%;
  background: linear-gradient(90deg, color-mix(in srgb, var(--rvl-color) 84%, white), var(--rvl-color));
  filter: blur(0.4px);
  animation: rvl-liquid calc(var(--rvl-speed) * 1.1) ease-in-out infinite;
}

.rvl-variant--liquid-pill .rvl-part:nth-child(2) {
  left: 22%;
  width: 32%;
  background: color-mix(in srgb, white 68%, var(--rvl-color));
  opacity: 0.56;
  animation: rvl-liquid calc(var(--rvl-speed) * 1.1) ease-in-out infinite reverse;
}

.rvl-variant--ripple-stack .rvl-part {
  inset: 0;
  border-radius: 999px;
  border: calc(var(--rvl-thickness) * 0.72) solid var(--rvl-color);
  opacity: 0;
  animation: rvl-ripple calc(var(--rvl-speed) * 1.65) ease-out infinite;
}

.rvl-variant--ripple-stack .rvl-part:nth-child(2) {
  animation-delay: calc(var(--rvl-speed) * 0.22);
}

.rvl-variant--ripple-stack .rvl-part:nth-child(3) {
  animation-delay: calc(var(--rvl-speed) * 0.44);
}

.rvl-variant--ripple-stack .rvl-part:nth-child(4) {
  animation-delay: calc(var(--rvl-speed) * 0.66);
}

.rvl-variant--minimal-spinner .rvl-part:nth-child(1) {
  inset: 0;
  border-radius: 999px;
  border: calc(var(--rvl-thickness) * 0.72) solid transparent;
  border-top-color: var(--rvl-color);
  animation: rvl-rotate calc(var(--rvl-speed) * 0.85) linear infinite;
}

.rvl-variant--neon-spinner .rvl-part:nth-child(1),
.rvl-variant--neon-spinner .rvl-part:nth-child(2),
.rvl-variant--glass-spinner .rvl-part:nth-child(1),
.rvl-variant--glass-spinner .rvl-part:nth-child(2) {
  inset: 0;
  border-radius: 999px;
}

.rvl-variant--neon-spinner .rvl-part:nth-child(1) {
  border: var(--rvl-thickness) solid color-mix(in srgb, var(--rvl-color) 24%, transparent);
  box-shadow:
    0 0 16px color-mix(in srgb, var(--rvl-color) 35%, transparent),
    inset 0 0 12px color-mix(in srgb, var(--rvl-color) 20%, transparent);
}

.rvl-variant--neon-spinner .rvl-part:nth-child(2) {
  border: var(--rvl-thickness) solid transparent;
  border-top-color: var(--rvl-color);
  border-right-color: color-mix(in srgb, var(--rvl-color) 66%, white);
  animation: rvl-rotate var(--rvl-speed) linear infinite;
}

.rvl-variant--glass-spinner .rvl-part:nth-child(1) {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.42), rgba(255, 255, 255, 0.08));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.44),
    0 14px 28px rgba(15, 23, 42, 0.12);
}

.rvl-variant--glass-spinner .rvl-part:nth-child(2) {
  inset: calc(var(--rvl-size) * 0.06);
  border: calc(var(--rvl-thickness) * 0.8) solid transparent;
  border-top-color: var(--rvl-color);
  animation: rvl-rotate calc(var(--rvl-speed) * 1.1) linear infinite;
}

.rvl-variant--vortex .rvl-part {
  border-radius: 999px;
  border-style: solid;
}

.rvl-variant--vortex .rvl-part:nth-child(1) {
  inset: 0;
  border-width: calc(var(--rvl-thickness) * 0.55);
  border-color: color-mix(in srgb, var(--rvl-color) 24%, transparent);
}

.rvl-variant--vortex .rvl-part:nth-child(2) {
  inset: calc(var(--rvl-size) * 0.12);
  border-width: calc(var(--rvl-thickness) * 0.75);
  border-color: var(--rvl-color) transparent transparent transparent;
  animation: rvl-rotate calc(var(--rvl-speed) * 0.95) linear infinite;
}

.rvl-variant--vortex .rvl-part:nth-child(3) {
  inset: calc(var(--rvl-size) * 0.28);
  border-width: calc(var(--rvl-thickness) * 0.85);
  border-color: transparent transparent var(--rvl-color) transparent;
  animation: rvl-rotate-reverse calc(var(--rvl-speed) * 1.25) linear infinite;
}

.rvl-variant--cube .rvl-visual,
.rvl-variant--diamond .rvl-visual {
  display: grid;
  place-items: center;
  width: calc(var(--rvl-size) * 0.92);
  height: calc(var(--rvl-size) * 0.92);
  grid-template-columns: repeat(2, 1fr);
  gap: calc(var(--rvl-gap) * 0.35);
}

.rvl-variant--cube .rvl-part,
.rvl-variant--diamond .rvl-part {
  position: static;
  width: calc(var(--rvl-size) * 0.34);
  height: calc(var(--rvl-size) * 0.34);
  background: linear-gradient(180deg, color-mix(in srgb, var(--rvl-color) 82%, white), var(--rvl-color));
  border-radius: calc(var(--rvl-radius) * 0.28);
  animation: rvl-pulse calc(var(--rvl-speed) * 1.12) ease-in-out infinite;
}

.rvl-variant--diamond .rvl-part {
  transform: rotate(45deg);
  border-radius: calc(var(--rvl-radius) * 0.18);
}

.rvl-variant--prism .rvl-visual {
  width: calc(var(--rvl-size) * 1.02);
  height: calc(var(--rvl-size) * 1.02);
}

.rvl-variant--prism .rvl-part {
  width: calc(var(--rvl-size) * 0.4);
  height: calc(var(--rvl-size) * 0.4);
  border-radius: calc(var(--rvl-radius) * 0.2);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.34), color-mix(in srgb, var(--rvl-color) 78%, transparent));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.38),
    0 10px 24px color-mix(in srgb, var(--rvl-color) 12%, transparent);
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  animation: rvl-prism calc(var(--rvl-speed) * 1.45) ease-in-out infinite;
}

.rvl-variant--prism .rvl-part:nth-child(1) { top: 10%; left: 31%; }
.rvl-variant--prism .rvl-part:nth-child(2) { top: 41%; left: 7%; animation-delay: 120ms; }
.rvl-variant--prism .rvl-part:nth-child(3) { top: 41%; right: 7%; animation-delay: 240ms; }

.rvl-variant--skeleton-blocks .rvl-visual {
  height: calc(var(--rvl-size) * 1.78);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: start;
  gap: calc(var(--rvl-gap) * 0.45);
  padding: calc(var(--rvl-gap) * 0.35);
  background: color-mix(in srgb, var(--rvl-color) 6%, transparent);
}

.rvl-variant--skeleton-blocks .rvl-part {
  position: static;
  width: 100%;
  height: calc(var(--rvl-size) * 0.38);
  border-radius: calc(var(--rvl-radius) * 0.5);
  background: color-mix(in srgb, var(--rvl-color) 12%, transparent);
  overflow: hidden;
}

.rvl-variant--skeleton-blocks .rvl-part::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(
      90deg,
      transparent 0%,
      color-mix(in srgb, white 80%, var(--rvl-color)) 48%,
      transparent 100%
    );
  transform: translateX(-120%);
  animation: rvl-shimmer calc(var(--rvl-speed) * 1.4) linear infinite;
}

.rvl-variant--skeleton-blocks .rvl-part:nth-child(3) {
  grid-column: span 2;
  height: calc(var(--rvl-size) * 0.48);
}

.rvl-variant--skeleton-blocks .rvl-part:nth-child(4) {
  grid-column: span 2;
  height: calc(var(--rvl-size) * 0.28);
  width: 62%;
}
`;var W=".rvl-variant--",K=new Map;function wr(e){var i;let r=`${W}${e}`,a=[],t=0;for(;t<c.length;){for(;t<c.length&&/\s/.test((i=c[t])!=null?i:"");)t+=1;if(t>=c.length)break;let v=t;for(;t<c.length&&c[t]!=="{";)t+=1;if(t>=c.length)break;let n=c.slice(v,t).trim();t+=1;let m=t,s=1;for(;t<c.length&&s>0;){let d=c[t];d==="{"?s+=1:d==="}"&&(s-=1),t+=1}if(!n.includes(W))continue;let g=n.split(",").map(d=>d.trim()).filter(Boolean).filter(d=>d.includes(r));if(!g.length)continue;let f=c.slice(m,t-1).trimEnd();a.push(`${g.join(`,
`)} {
${f}
}`)}return a.join(`

`)}function A(e){let r=K.get(e);if(r)return r;let a=wr(e);return K.set(e,a),a}function D(e){return e?`${O}
${A(e)}`:`${O}
${c}`}var M=O,Z=D();function R(){return typeof window!="undefined"&&typeof document!="undefined"}var J="data-rvl-loading-base",Q="data-rvl-loading-variant";function zr(e){if(e.head.querySelector(`[${J}]`))return;let r=e.createElement("style");r.setAttribute(J,"true"),r.textContent=M,e.head.append(r)}function kr(e,r){if(r.head.querySelector(`[${Q}="${e}"]`))return;let a=A(e);if(!a.trim())return;let t=r.createElement("style");t.setAttribute(Q,e),t.textContent=a,r.head.append(t)}function N(e,r=document){R()&&(zr(r),kr(e,r))}function rr(e,r=document){if(typeof e=="string"){let a=r.querySelector(e);if(!a)throw new Error(`@stackline/loading could not find target "${e}".`);return a}return e instanceof HTMLElement?e:r.body}function er(e){if(e===document.body||e===document.documentElement)return()=>{};let r=window.getComputedStyle(e).position;if(r&&r!=="static")return()=>{};let a=e.style.position;return e.style.position="relative",()=>{if(a){e.style.position=a;return}e.style.removeProperty("position")}}var ar=0;function tr(e="rvl"){return ar+=1,`${e}-${ar}`}var q=class{constructor(r={}){o(this,"id",tr());o(this,"element");o(this,"state",{mounted:!1,visible:!1,destroyed:!1,pending:null});o(this,"bodyElement");o(this,"visualElement");o(this,"labelElement");o(this,"srElement");o(this,"options");o(this,"mountedTarget",null);o(this,"restorePositionContext",null);o(this,"showTimeoutId",null);o(this,"hideTimeoutId",null);o(this,"showResolver",null);o(this,"hideResolver",null);o(this,"shownAt",0);if(!R())throw new Error("@stackline/loading requires a browser-like DOM to create loaders.");this.options=$(r),N(this.options.variant),this.element=document.createElement("div"),this.element.dataset.rvlLoader=this.id,this.bodyElement=document.createElement("div"),this.bodyElement.className="rvl-body",this.visualElement=document.createElement("div"),this.visualElement.className="rvl-visual",this.visualElement.setAttribute("aria-hidden","true"),this.labelElement=document.createElement("span"),this.labelElement.className="rvl-label",this.srElement=document.createElement("span"),this.srElement.className="rvl-sr-only",this.bodyElement.append(this.visualElement,this.labelElement,this.srElement),this.element.append(this.bodyElement),this.render(),(this.options.target||this.options.fullscreen)&&this.mount(this.options.target),this.options.visible?this.show():this.element.hidden=!0}getOptions(){return{...this.options,style:{...this.options.style}}}mount(r){this.assertAlive();let a=this.resolveMountTarget(r);return this.mountedTarget===a&&this.state.mounted?this:(this.unmount(),this.options.overlay&&!this.options.fullscreen&&(this.restorePositionContext=er(a)),a.append(this.element),this.mountedTarget=a,this.state.mounted=!0,this)}unmount(){return this.element.parentElement&&this.element.parentElement.removeChild(this.element),this.restorePositionContext&&(this.restorePositionContext(),this.restorePositionContext=null),this.mountedTarget=null,this.state.mounted=!1,this}show(){return this.assertAlive(),this.state.visible&&this.state.pending!=="hide"?Promise.resolve():(this.clearHideTimer(!0),this.state.pending="show",this.state.mounted||this.mount(this.options.target),new Promise(r=>{let a=()=>{var t;this.state.pending=null,this.state.visible=!0,this.shownAt=Date.now(),this.element.hidden=!1,this.syncVisibility(),(t=this.showResolver)==null||t.call(this),this.showResolver=null};if(this.clearShowTimer(!0),this.showResolver=r,this.options.delay>0){this.showTimeoutId=window.setTimeout(a,this.options.delay);return}a()}))}hide(){return this.assertAlive(),!this.state.visible&&this.state.pending!=="show"?(this.syncVisibility(),Promise.resolve()):(this.clearShowTimer(!0),this.state.pending="hide",new Promise(r=>{let a=()=>{var v;this.state.pending=null,this.state.visible=!1,this.syncVisibility(),(v=this.hideResolver)==null||v.call(this),this.hideResolver=null};if(this.clearHideTimer(!0),this.hideResolver=r,!this.state.visible){a();return}let t=this.shownAt?Date.now()-this.shownAt:0,i=Math.max(0,this.options.minVisible-t);if(i>0){this.hideTimeoutId=window.setTimeout(a,i);return}a()}))}toggle(r){return(typeof r=="boolean"?r:!this.state.visible)?this.show():this.hide()}update(r){var i;this.assertAlive();let a=this.resolveMountTarget();this.options=$({...this.options,...r,style:{...this.options.style,...(i=r.style)!=null?i:{}}}),N(this.options.variant),this.render();let t=this.resolveMountTarget();return a!==t&&this.state.mounted&&this.mount(t),this}destroy(){this.state.destroyed||(this.clearShowTimer(!0),this.clearHideTimer(!0),this.unmount(),this.state.destroyed=!0)}render(){let r=y(this.options.variant);this.element.className=["rvl-loader",`rvl-variant--${this.options.variant}`,this.options.inline?"is-inline":"is-block",this.options.overlay?"is-overlay":"",this.options.fullscreen?"is-fullscreen":"",this.options.centered?"is-centered":"",this.options.label?"has-label":"",this.options.className].filter(Boolean).join(" "),this.element.setAttribute("role","status"),this.element.setAttribute("aria-live",this.options.ariaLive),this.element.setAttribute("aria-atomic","true"),this.element.setAttribute("aria-busy",this.state.visible?"true":"false"),this.element.dataset.variant=this.options.variant,this.element.style.cssText="",this.element.style.setProperty("--rvl-size",this.options.size),this.element.style.setProperty("--rvl-color",this.options.color),this.element.style.setProperty("--rvl-secondary-color",this.options.secondaryColor),this.element.style.setProperty("--rvl-speed",`${this.options.speed}ms`),this.element.style.setProperty("--rvl-thickness",`${this.options.thickness}px`),this.element.style.setProperty("--rvl-opacity",`${this.options.opacity}`),this.element.style.setProperty("--rvl-background",this.options.background),this.element.style.setProperty("--rvl-blur",`${this.options.blur}px`),this.element.style.setProperty("--rvl-radius",this.options.radius),this.element.style.setProperty("--rvl-gap",`${this.options.gap}px`),this.element.style.setProperty("--rvl-z-index",`${this.options.zIndex}`),this.element.style.setProperty("animation-direction",this.options.direction),_(this.element,this.options.style),this.labelElement.textContent=this.options.label,this.srElement.textContent=this.options.label,this.options.label?this.element.setAttribute("aria-label",this.options.label):this.element.removeAttribute("aria-label"),this.element.title=r.label,this.visualElement.replaceChildren();for(let a=0;a<this.options.count;a+=1){let t=document.createElement("span");t.className="rvl-part",t.style.setProperty("--part-index",String(a)),this.visualElement.append(t)}this.syncVisibility()}syncVisibility(){this.element.hidden=!this.state.visible,this.element.setAttribute("aria-busy",this.state.visible?"true":"false"),this.element.setAttribute("aria-hidden",this.state.visible?"false":"true")}resolveMountTarget(r){return this.options.fullscreen?document.body:rr(r!=null?r:this.options.target)}clearShowTimer(r=!1){this.showTimeoutId!=null&&(window.clearTimeout(this.showTimeoutId),this.showTimeoutId=null),r&&this.showResolver&&(this.showResolver(),this.showResolver=null)}clearHideTimer(r=!1){this.hideTimeoutId!=null&&(window.clearTimeout(this.hideTimeoutId),this.hideTimeoutId=null),r&&this.hideResolver&&(this.hideResolver(),this.hideResolver=null)}assertAlive(){if(this.state.destroyed)throw new Error("@stackline/loading cannot operate on a destroyed loader.")}};function x(e={}){return new q(e)}function H(e,r={}){var t,i;let a=x({...r,target:e,visible:(t=r.visible)!=null?t:!0});return a.mount(e),((i=r.visible)==null||i)&&a.show(),a}function ir(e,r={}){return H(e,{...r,visible:!0})}async function lr(e){await e.hide()}function V(e){if(e!=null)return e==="true"||e===""}function u(e){if(e==null||e==="")return;let r=Number(e);return Number.isNaN(r)?void 0:r}function Cr(e){var S,E;let{dataset:r}=e,a={},t=(S=u(r.loaderSize))!=null?S:r.loaderSize,i=(E=u(r.loaderRadius))!=null?E:r.loaderRadius,v=V(r.loaderOverlay),n=V(r.loaderInline),m=V(r.loaderCentered),s=V(r.loaderFullscreen),g=V(r.loaderVisible),f=u(r.loaderSpeed),d=u(r.loaderThickness),w=u(r.loaderOpacity),z=u(r.loaderBlur),k=u(r.loaderGap),C=u(r.loaderCount),L=u(r.loaderDelay),T=u(r.loaderMinVisible),U=u(r.loaderZIndex);if(r.loaderVariant){let p=r.loaderVariant;p&&(a.variant=p)}if(t!=null&&(a.size=t),r.loaderColor&&(a.color=r.loaderColor),r.loaderSecondaryColor&&(a.secondaryColor=r.loaderSecondaryColor),f!=null&&(a.speed=f),d!=null&&(a.thickness=d),w!=null&&(a.opacity=w),r.loaderBackground&&(a.background=r.loaderBackground),v!=null&&(a.overlay=v),z!=null&&(a.blur=z),i!=null&&(a.radius=i),k!=null&&(a.gap=k),C!=null&&(a.count=C),r.loaderDirection){let p=r.loaderDirection;p&&(a.direction=p)}if(r.loaderLabel&&(a.label=r.loaderLabel),n!=null&&(a.inline=n),m!=null&&(a.centered=m),s!=null&&(a.fullscreen=s),g!=null&&(a.visible=g),L!=null&&(a.delay=L),T!=null&&(a.minVisible=T),U!=null&&(a.zIndex=U),r.loaderClassName&&(a.className=r.loaderClassName),r.loaderAriaLive){let p=r.loaderAriaLive;p&&(a.ariaLive=p)}return a}function nr(e=document){return Array.from(e.querySelectorAll("[data-stackline-loading]")).map(a=>{let t=x({...Cr(a),target:a,visible:!0});return t.mount(a),t.show(),t})}var or={color:"#2563eb",secondaryColor:"rgba(37, 99, 235, 0.18)",surface:"rgba(255, 255, 255, 0.92)",overlay:"rgba(255, 255, 255, 0.72)",text:"#0f172a",muted:"#475569"},sr={color:"#60a5fa",secondaryColor:"rgba(96, 165, 250, 0.24)",surface:"rgba(15, 23, 42, 0.78)",overlay:"rgba(2, 6, 23, 0.7)",text:"#e2e8f0",muted:"#94a3b8"};function cr(e=document.documentElement,r){return r.color&&e.style.setProperty("--rvl-theme-color",r.color),r.secondaryColor&&e.style.setProperty("--rvl-theme-secondary",r.secondaryColor),r.surface&&e.style.setProperty("--rvl-theme-surface",r.surface),r.overlay&&e.style.setProperty("--rvl-theme-overlay",r.overlay),r.text&&e.style.setProperty("--rvl-theme-text",r.text),r.muted&&e.style.setProperty("--rvl-theme-muted",r.muted),e}return gr(Lr);})();
