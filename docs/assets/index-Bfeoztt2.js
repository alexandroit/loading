var _=Object.defineProperty;var Q=(e,r,a)=>r in e?_(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a;var c=(e,r,a)=>Q(e,typeof r!="symbol"?r+"":r,a);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function a(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(i){if(i.ep)return;i.ep=!0;const l=a(i);fetch(i.href,l)}})();function b(e,r,a){return Math.min(Math.max(e,r),a)}function y(e,r){return typeof e!="number"||Number.isNaN(e)?r:Math.max(0,e)}const j={ring:{value:"ring",label:"Ring",category:"spinner",description:"A refined circular spinner for general loading states.",recommendedUse:"Use for default async states inside cards, panels, and centered sections.",defaultCount:1,minCount:1,maxCount:1},"dual-ring":{value:"dual-ring",label:"Dual Ring",category:"spinner",description:"Two concentric rings rotating in opposite directions for more visual energy.",recommendedUse:"Use when you want a richer spinner without overwhelming compact layouts.",defaultCount:2,minCount:2,maxCount:2},"segmented-ring":{value:"segmented-ring",label:"Segmented Ring",category:"spinner",description:"A segmented circular loader with precise ticks and premium motion.",recommendedUse:"Use when you want a polished technical spinner for dashboards, analytics, or admin tools.",defaultCount:10,minCount:6,maxCount:12},arc:{value:"arc",label:"Arc",category:"spinner",description:"A thick curved sweep with strong motion and excellent legibility.",recommendedUse:"Use on dashboards or surfaces where the loader needs a bold silhouette.",defaultCount:1,minCount:1,maxCount:1},orbit:{value:"orbit",label:"Orbit",category:"spinner",description:"A premium orbital motion with a stable central anchor.",recommendedUse:"Use in hero states, polished overlays, or brand-forward experiences.",defaultCount:2,minCount:2,maxCount:2},comet:{value:"comet",label:"Comet",category:"spinner",description:"A luminous point with a trailing comet tail orbiting a soft ring.",recommendedUse:"Use for premium hero states, modal loading, and brand-forward async moments.",defaultCount:2,minCount:2,maxCount:2},halo:{value:"halo",label:"Halo",category:"spinner",description:"A thin halo with soft glow pulses and minimal visual noise.",recommendedUse:"Use in refined enterprise interfaces where the loading state should stay elegant.",defaultCount:2,minCount:2,maxCount:2},radar:{value:"radar",label:"Radar",category:"spinner",description:"A scanning beam effect with layered depth.",recommendedUse:"Use for search, sync, telemetry, or data discovery moments.",defaultCount:3,minCount:3,maxCount:3},astronaut:{value:"astronaut",label:"Astronaut",category:"surface",description:"A floating astronaut illustration with soft starfield motion.",recommendedUse:"Use for onboarding, empty states, playful overlays, and premium loading moments.",defaultCount:3,minCount:3,maxCount:3},"astronaut-to-mars":{value:"astronaut-to-mars",label:"Astronaut To Mars",category:"surface",description:"A tiny astronaut traveling toward Mars with a cinematic space-route feel.",recommendedUse:"Use for route transitions, splash states, and standout brand-forward loading sequences.",defaultCount:4,minCount:4,maxCount:4},"baseball-player":{value:"baseball-player",label:"Baseball Player",category:"surface",description:"A batter driving the ball with a clean swing and curved flight path.",recommendedUse:"Use for sports products, onboarding, and illustrative loading states with momentum.",defaultCount:4,minCount:4,maxCount:4},"football-player":{value:"football-player",label:"Football Player",category:"surface",description:"A footballer striking the ball forward with a smooth kick arc.",recommendedUse:"Use for soccer experiences, score views, and highly expressive loading moments.",defaultCount:4,minCount:4,maxCount:4},galaxy:{value:"galaxy",label:"Galaxy",category:"surface",description:"A glowing spiral galaxy with a bright core, orbiting stars, and drifting cosmic dust.",recommendedUse:"Use for splash screens, premium hero states, sci-fi interfaces, and high-drama loading moments.",defaultCount:6,minCount:6,maxCount:6},pulse:{value:"pulse",label:"Pulse",category:"surface",description:"A breathing pulse with soft echo rings.",recommendedUse:"Use for ambient loading and low-noise inline states.",defaultCount:2,minCount:2,maxCount:2},"wave-dots":{value:"wave-dots",label:"Wave Dots",category:"dots",description:"Dots that ripple upward in sequence.",recommendedUse:"Use for conversational UIs, message streams, and compact inline feedback.",defaultCount:4,minCount:3,maxCount:8},"bouncing-dots":{value:"bouncing-dots",label:"Bouncing Dots",category:"dots",description:"Classic dot rhythm with a more premium bounce curve.",recommendedUse:"Use for buttons, compact surfaces, and general-purpose text-adjacent loading.",defaultCount:3,minCount:3,maxCount:8},"typing-dots":{value:"typing-dots",label:"Typing Dots",category:"dots",description:"A staggered fade-and-scale sequence inspired by chat typing indicators.",recommendedUse:"Use in assistants, feeds, or message composer feedback states.",defaultCount:3,minCount:3,maxCount:5},"grid-pulse":{value:"grid-pulse",label:"Grid Pulse",category:"surface",description:"A 3x3 pulse grid that feels structured, compact, and modern.",recommendedUse:"Use for compact surfaces, icon-scale loading, and data-heavy interface chrome.",defaultCount:9,minCount:9,maxCount:9},"magnetic-dots":{value:"magnetic-dots",label:"Magnetic Dots",category:"dots",description:"Dots that pull toward the center and relax outward in a magnetic rhythm.",recommendedUse:"Use for inline controls, button states, and compact polished micro-feedback.",defaultCount:4,minCount:3,maxCount:6},"spiral-dots":{value:"spiral-dots",label:"Spiral Dots",category:"dots",description:"Layered dots arranged in a rotating spiral with subtle depth.",recommendedUse:"Use for premium overlays and loaders that should feel more bespoke than a standard spinner.",defaultCount:6,minCount:5,maxCount:8},constellation:{value:"constellation",label:"Constellation",category:"dots",description:"Network-like nodes with a soft connected-system feel.",recommendedUse:"Use for AI, search, sync, and graph-oriented product experiences.",defaultCount:6,minCount:5,maxCount:6},"equalizer-bars":{value:"equalizer-bars",label:"Equalizer Bars",category:"bars",description:"Animated bars with an audio-like rhythm.",recommendedUse:"Use for analytics, media, and lively data surfaces.",defaultCount:5,minCount:3,maxCount:8},"rising-bars":{value:"rising-bars",label:"Rising Bars",category:"bars",description:"Clean bars that rise from a subtle track.",recommendedUse:"Use in tables, forms, and panels where you want linear motion.",defaultCount:4,minCount:3,maxCount:8},shimmer:{value:"shimmer",label:"Shimmer",category:"surface",description:"A modern skeleton-like shimmer strip.",recommendedUse:"Use for content placeholders, cards, and container-level loading.",defaultCount:1,minCount:1,maxCount:1},"scan-line":{value:"scan-line",label:"Scan Line",category:"surface",description:"A scanning line that sweeps across a clean data surface.",recommendedUse:"Use for tables, data panes, security-style scans, and content inspection states.",defaultCount:1,minCount:1,maxCount:1},"liquid-pill":{value:"liquid-pill",label:"Liquid Pill",category:"surface",description:"A rounded pill loader with fluid motion and soft internal glow.",recommendedUse:"Use for buttons, compact forms, and ambient inline loading with branded motion.",defaultCount:2,minCount:2,maxCount:2},"ripple-stack":{value:"ripple-stack",label:"Ripple Stack",category:"surface",description:"Concentric ripples that radiate outward with a calm layered cadence.",recommendedUse:"Use for overlays, fullscreen states, and soft-focus loading moments.",defaultCount:3,minCount:3,maxCount:4},"minimal-spinner":{value:"minimal-spinner",label:"Minimal Spinner",category:"spinner",description:"A thin understated spinner with understated motion.",recommendedUse:"Use where UI chrome should stay quiet and elegant.",defaultCount:1,minCount:1,maxCount:1},"neon-spinner":{value:"neon-spinner",label:"Neon Spinner",category:"spinner",description:"A glowing spinner with high-contrast accents.",recommendedUse:"Use in dark surfaces, product tours, and expressive brand moments.",defaultCount:2,minCount:2,maxCount:2},"glass-spinner":{value:"glass-spinner",label:"Glass Spinner",category:"spinner",description:"A frosted, translucent spinner with soft highlights.",recommendedUse:"Use on overlays and premium surface treatments.",defaultCount:2,minCount:2,maxCount:2},vortex:{value:"vortex",label:"Vortex",category:"spinner",description:"Multiple rotating elements that create a layered vortex effect.",recommendedUse:"Use for major loading transitions, modals, and splash states.",defaultCount:3,minCount:3,maxCount:3},cube:{value:"cube",label:"Cube",category:"surface",description:"Rotating geometric blocks with a clean enterprise-friendly feel.",recommendedUse:"Use in dashboards, admin tools, and product surfaces with grid structure.",defaultCount:4,minCount:4,maxCount:4},diamond:{value:"diamond",label:"Diamond",category:"surface",description:"Four angular facets that pulse in a diamond pattern.",recommendedUse:"Use when you want geometric motion that still feels compact.",defaultCount:4,minCount:4,maxCount:4},prism:{value:"prism",label:"Prism",category:"surface",description:"Glass-like prism shards rotating with translucent layered highlights.",recommendedUse:"Use on premium overlays, polished product shells, and modern dark themes.",defaultCount:3,minCount:3,maxCount:3},"skeleton-blocks":{value:"skeleton-blocks",label:"Skeleton Blocks",category:"surface",description:"A compact skeleton-style block layout with animated shimmer passes.",recommendedUse:"Use for content placeholders, side panels, cards, and list loading states.",defaultCount:4,minCount:4,maxCount:4}},H=Object.values(j);function k(e){return j[e]}function Z(e,r){const a=k(e);return b(r.count??a.defaultCount,a.minCount,a.maxCount)}function E(e,r){const a=e??r;return typeof a=="number"?`${a}px`:a}function J(e){return e.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`)}function ee(e,r){Object.entries(r).forEach(([a,t])=>{const i=a.startsWith("--")?a:J(a);if(t==null){e.style.removeProperty(i);return}e.style.setProperty(i,re(t))})}function re(e){return typeof e=="number"?String(e):e??""}function ae(e,r){const a=e.replace("#","").trim(),t=a.length===3?a.split("").map(u=>`${u}${u}`).join(""):a.length===4?a.split("").map(u=>`${u}${u}`).join(""):a;if(t.length!==6&&t.length!==8)return`color-mix(in srgb, ${e} ${Math.round(r*100)}%, transparent)`;const i=parseInt(t.slice(0,2),16),l=parseInt(t.slice(2,4),16),n=parseInt(t.slice(4,6),16),p=t.length===8?parseInt(t.slice(6,8),16)/255:1;return`rgba(${i}, ${l}, ${n}, ${Math.max(0,Math.min(1,p*r))})`}function te(e,r){const a=e.replace(/rgba?\(/,"").replace(")","").split(",").map(t=>t.trim());return a.length<3?`color-mix(in srgb, ${e} ${Math.round(r*100)}%, transparent)`:`rgba(${a[0]}, ${a[1]}, ${a[2]}, ${r})`}function ie(e,r){const a=Math.max(0,Math.min(1,r));return e.startsWith("#")?ae(e,a):e.startsWith("rgb")?te(e,a):`color-mix(in srgb, ${e} ${Math.round(a*100)}%, transparent)`}const s={variant:"ring",size:"40px",color:"var(--rvl-theme-color)",speed:900,thickness:3,opacity:1,background:"var(--rvl-theme-overlay)",overlay:!1,blur:12,radius:"18px",gap:8,direction:"normal",label:"",inline:!1,centered:!1,fullscreen:!1,visible:!1,delay:0,minVisible:240,zIndex:1600,className:"",ariaLive:"polite",target:null};function P(e={}){var p;const r=e.variant??s.variant,a=k(r),t=e.color??s.color,i=e.secondaryColor??ie(t,.2),l=Object.prototype.hasOwnProperty.call(e,"label"),n={variant:r,size:E(e.size,s.size),color:t,secondaryColor:i,speed:b(y(e.speed,s.speed),200,8e3),thickness:b(y(e.thickness,s.thickness),1,16),opacity:b(typeof e.opacity=="number"?e.opacity:s.opacity,.12,1),background:e.background??s.background,overlay:e.overlay??s.overlay,blur:b(y(e.blur,s.blur),0,32),radius:E(e.radius,s.radius),gap:b(y(e.gap,s.gap),0,48),count:Z(r,e),direction:e.direction??s.direction,label:l?e.label??"":s.label,inline:e.inline??s.inline,centered:e.centered??s.centered,fullscreen:e.fullscreen??s.fullscreen,visible:e.visible??s.visible,delay:b(y(e.delay,s.delay),0,3e4),minVisible:b(y(e.minVisible,s.minVisible),0,6e4),zIndex:b(y(e.zIndex,s.zIndex),1,2147483647),className:((p=e.className)==null?void 0:p.trim())??s.className,style:e.style??{},ariaLive:e.ariaLive??s.ariaLive,target:e.target??s.target};return n.fullscreen&&(n.overlay=!0,n.inline=!1,n.centered=!0),n.inline&&(n.overlay=!1,n.fullscreen=!1),!l&&!n.label&&(n.label=`Loading with ${a.label.toLowerCase()}`),n}const le=`
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
`,h=`
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
`,q=".rvl-variant--",I=new Map;function ne(e){const r=`${q}${e}`,a=[];let t=0;for(;t<h.length;){for(;t<h.length&&/\s/.test(h[t]??"");)t+=1;if(t>=h.length)break;const i=t;for(;t<h.length&&h[t]!=="{";)t+=1;if(t>=h.length)break;const l=h.slice(i,t).trim();t+=1;const n=t;let p=1;for(;t<h.length&&p>0;){const v=h[t];v==="{"?p+=1:v==="}"&&(p-=1),t+=1}if(!l.includes(q))continue;const u=l.split(",").map(v=>v.trim()).filter(Boolean).filter(v=>v.includes(r));if(!u.length)continue;const x=h.slice(n,t-1).trimEnd();a.push(`${u.join(`,
`)} {
${x}
}`)}return a.join(`

`)}function oe(e){const r=I.get(e);if(r)return r;const a=ne(e);return I.set(e,a),a}const se=le;function N(){return typeof window<"u"&&typeof document<"u"}const V="data-rvl-loading-base",M="data-rvl-loading-variant";function de(e){if(e.head.querySelector(`[${V}]`))return;const r=e.createElement("style");r.setAttribute(V,"true"),r.textContent=se,e.head.append(r)}function ce(e,r){if(r.head.querySelector(`[${M}="${e}"]`))return;const a=oe(e);if(!a.trim())return;const t=r.createElement("style");t.setAttribute(M,e),t.textContent=a,r.head.append(t)}function R(e,r=document){N()&&(de(r),ce(e,r))}function ve(e,r=document){if(typeof e=="string"){const a=r.querySelector(e);if(!a)throw new Error(`@stackline/loading could not find target "${e}".`);return a}return e instanceof HTMLElement?e:r.body}function pe(e){if(e===document.body||e===document.documentElement)return()=>{};const r=window.getComputedStyle(e).position;if(r&&r!=="static")return()=>{};const a=e.style.position;return e.style.position="relative",()=>{if(a){e.style.position=a;return}e.style.removeProperty("position")}}let D=0;function ue(e="rvl"){return D+=1,`${e}-${D}`}class he{constructor(r={}){c(this,"id",ue());c(this,"element");c(this,"state",{mounted:!1,visible:!1,destroyed:!1,pending:null});c(this,"bodyElement");c(this,"visualElement");c(this,"labelElement");c(this,"srElement");c(this,"options");c(this,"mountedTarget",null);c(this,"restorePositionContext",null);c(this,"showTimeoutId",null);c(this,"hideTimeoutId",null);c(this,"showResolver",null);c(this,"hideResolver",null);c(this,"shownAt",0);if(!N())throw new Error("@stackline/loading requires a browser-like DOM to create loaders.");this.options=P(r),R(this.options.variant),this.element=document.createElement("div"),this.element.dataset.rvlLoader=this.id,this.bodyElement=document.createElement("div"),this.bodyElement.className="rvl-body",this.visualElement=document.createElement("div"),this.visualElement.className="rvl-visual",this.visualElement.setAttribute("aria-hidden","true"),this.labelElement=document.createElement("span"),this.labelElement.className="rvl-label",this.srElement=document.createElement("span"),this.srElement.className="rvl-sr-only",this.bodyElement.append(this.visualElement,this.labelElement,this.srElement),this.element.append(this.bodyElement),this.render(),(this.options.target||this.options.fullscreen)&&this.mount(this.options.target),this.options.visible?this.show():this.element.hidden=!0}getOptions(){return{...this.options,style:{...this.options.style}}}mount(r){this.assertAlive();const a=this.resolveMountTarget(r);return this.mountedTarget===a&&this.state.mounted?this:(this.unmount(),this.options.overlay&&!this.options.fullscreen&&(this.restorePositionContext=pe(a)),a.append(this.element),this.mountedTarget=a,this.state.mounted=!0,this)}unmount(){return this.element.parentElement&&this.element.parentElement.removeChild(this.element),this.restorePositionContext&&(this.restorePositionContext(),this.restorePositionContext=null),this.mountedTarget=null,this.state.mounted=!1,this}show(){return this.assertAlive(),this.state.visible&&this.state.pending!=="hide"?Promise.resolve():(this.clearHideTimer(!0),this.state.pending="show",this.state.mounted||this.mount(this.options.target),new Promise(r=>{const a=()=>{var t;this.state.pending=null,this.state.visible=!0,this.shownAt=Date.now(),this.element.hidden=!1,this.syncVisibility(),(t=this.showResolver)==null||t.call(this),this.showResolver=null};if(this.clearShowTimer(!0),this.showResolver=r,this.options.delay>0){this.showTimeoutId=window.setTimeout(a,this.options.delay);return}a()}))}hide(){return this.assertAlive(),!this.state.visible&&this.state.pending!=="show"?(this.syncVisibility(),Promise.resolve()):(this.clearShowTimer(!0),this.state.pending="hide",new Promise(r=>{const a=()=>{var l;this.state.pending=null,this.state.visible=!1,this.syncVisibility(),(l=this.hideResolver)==null||l.call(this),this.hideResolver=null};if(this.clearHideTimer(!0),this.hideResolver=r,!this.state.visible){a();return}const t=this.shownAt?Date.now()-this.shownAt:0,i=Math.max(0,this.options.minVisible-t);if(i>0){this.hideTimeoutId=window.setTimeout(a,i);return}a()}))}toggle(r){return(typeof r=="boolean"?r:!this.state.visible)?this.show():this.hide()}update(r){this.assertAlive();const a=this.resolveMountTarget();this.options=P({...this.options,...r,style:{...this.options.style,...r.style??{}}}),R(this.options.variant),this.render();const t=this.resolveMountTarget();return a!==t&&this.state.mounted&&this.mount(t),this}destroy(){this.state.destroyed||(this.clearShowTimer(!0),this.clearHideTimer(!0),this.unmount(),this.state.destroyed=!0)}render(){const r=k(this.options.variant);this.element.className=["rvl-loader",`rvl-variant--${this.options.variant}`,this.options.inline?"is-inline":"is-block",this.options.overlay?"is-overlay":"",this.options.fullscreen?"is-fullscreen":"",this.options.centered?"is-centered":"",this.options.label?"has-label":"",this.options.className].filter(Boolean).join(" "),this.element.setAttribute("role","status"),this.element.setAttribute("aria-live",this.options.ariaLive),this.element.setAttribute("aria-atomic","true"),this.element.setAttribute("aria-busy",this.state.visible?"true":"false"),this.element.dataset.variant=this.options.variant,this.element.style.cssText="",this.element.style.setProperty("--rvl-size",this.options.size),this.element.style.setProperty("--rvl-color",this.options.color),this.element.style.setProperty("--rvl-secondary-color",this.options.secondaryColor),this.element.style.setProperty("--rvl-speed",`${this.options.speed}ms`),this.element.style.setProperty("--rvl-thickness",`${this.options.thickness}px`),this.element.style.setProperty("--rvl-opacity",`${this.options.opacity}`),this.element.style.setProperty("--rvl-background",this.options.background),this.element.style.setProperty("--rvl-blur",`${this.options.blur}px`),this.element.style.setProperty("--rvl-radius",this.options.radius),this.element.style.setProperty("--rvl-gap",`${this.options.gap}px`),this.element.style.setProperty("--rvl-z-index",`${this.options.zIndex}`),this.element.style.setProperty("animation-direction",this.options.direction),ee(this.element,this.options.style),this.labelElement.textContent=this.options.label,this.srElement.textContent=this.options.label,this.options.label?this.element.setAttribute("aria-label",this.options.label):this.element.removeAttribute("aria-label"),this.element.title=r.label,this.visualElement.replaceChildren();for(let a=0;a<this.options.count;a+=1){const t=document.createElement("span");t.className="rvl-part",t.style.setProperty("--part-index",String(a)),this.visualElement.append(t)}this.syncVisibility()}syncVisibility(){this.element.hidden=!this.state.visible,this.element.setAttribute("aria-busy",this.state.visible?"true":"false"),this.element.setAttribute("aria-hidden",this.state.visible?"false":"true")}resolveMountTarget(r){return this.options.fullscreen?document.body:ve(r??this.options.target)}clearShowTimer(r=!1){this.showTimeoutId!=null&&(window.clearTimeout(this.showTimeoutId),this.showTimeoutId=null),r&&this.showResolver&&(this.showResolver(),this.showResolver=null)}clearHideTimer(r=!1){this.hideTimeoutId!=null&&(window.clearTimeout(this.hideTimeoutId),this.hideTimeoutId=null),r&&this.hideResolver&&(this.hideResolver(),this.hideResolver=null)}assertAlive(){if(this.state.destroyed)throw new Error("@stackline/loading cannot operate on a destroyed loader.")}}function L(e={}){return new he(e)}const me={color:"#2563eb",secondaryColor:"rgba(37, 99, 235, 0.18)",surface:"rgba(255, 255, 255, 0.92)",overlay:"rgba(255, 255, 255, 0.72)",text:"#0f172a",muted:"#475569"},ge={color:"#60a5fa",secondaryColor:"rgba(96, 165, 250, 0.24)",surface:"rgba(15, 23, 42, 0.78)",overlay:"rgba(2, 6, 23, 0.7)",text:"#e2e8f0",muted:"#94a3b8"};function be(e=document.documentElement,r){return r.color&&e.style.setProperty("--rvl-theme-color",r.color),r.secondaryColor&&e.style.setProperty("--rvl-theme-secondary",r.secondaryColor),r.surface&&e.style.setProperty("--rvl-theme-surface",r.surface),r.overlay&&e.style.setProperty("--rvl-theme-overlay",r.overlay),r.text&&e.style.setProperty("--rvl-theme-text",r.text),r.muted&&e.style.setProperty("--rvl-theme-muted",r.muted),e}const f={variant:"orbit",size:60,speed:900,color:"#2563eb",secondaryColor:"rgba(37, 99, 235, 0.18)",overlay:!1,fullscreen:!1,centered:!0,label:"Loading preview",delay:0,minVisible:240,reducedMotion:!1};function fe(e){const r=[];return r.push(`  variant: '${e.variant}',`),r.push(`  size: ${e.size},`),r.push(`  speed: ${e.speed},`),r.push(`  color: '${e.color}',`),r.push(`  secondaryColor: '${e.secondaryColor}',`),(e.overlay||e.fullscreen)&&r.push(`  overlay: ${e.overlay||e.fullscreen},`),e.fullscreen&&r.push("  fullscreen: true,"),e.centered&&!e.fullscreen&&r.push("  centered: true,"),e.label&&r.push(`  label: '${e.label}',`),e.delay>0&&r.push(`  delay: ${e.delay},`),e.minVisible!==f.minVisible&&r.push(`  minVisible: ${e.minVisible},`),`const loader = createLoader({
${r.join(`
`)}
});

loader.mount(target);
loader.show();`}function ye(e){return{variant:e.variant,size:e.size,speed:e.speed,color:e.color,secondaryColor:e.secondaryColor,overlay:e.overlay||e.fullscreen,centered:e.centered||e.overlay||e.fullscreen,fullscreen:!1,label:e.label,delay:e.delay,minVisible:e.minVisible}}function we(e,r){const a=r?"is-fullscreen-simulated":"";return e==="table"?`
      <div class="playground-surface playground-surface--table ${a}" data-surface>
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
    `:`
    <div class="playground-surface playground-surface--clean ${a}" data-surface></div>
  `}function xe(e){let r=null;const a={...f};let t="default";e.innerHTML=`
    <div class="playground-shell">
      <form class="playground-controls">
        <div class="field">
          <label for="variant">Variant</label>
          <select id="variant" name="variant">
            ${H.map(d=>`<option value="${d.value}">${d.label}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label for="size">Size <span data-size-value>${a.size}px</span></label>
          <input id="size" name="size" type="range" min="18" max="96" value="${a.size}" />
        </div>
        <div class="field">
          <label for="speed">Speed <span data-speed-value>${a.speed}ms</span></label>
          <input id="speed" name="speed" type="range" min="300" max="2200" step="50" value="${a.speed}" />
        </div>
        <div class="field two-up">
          <div>
            <label for="color">Primary</label>
            <input id="color" name="color" type="color" value="${a.color}" />
          </div>
          <div>
            <label for="secondaryColor">Secondary</label>
            <input id="secondaryColor" name="secondaryColor" type="color" value="#c7d2fe" />
          </div>
        </div>
        <div class="field">
          <label for="label">Label</label>
          <input id="label" name="label" type="text" value="${a.label}" />
        </div>
        <div class="field two-up">
          <div>
            <label for="delay">Delay</label>
            <input id="delay" name="delay" type="number" min="0" step="50" value="${a.delay}" />
          </div>
          <div>
            <label for="minVisible">Min visible</label>
            <input id="minVisible" name="minVisible" type="number" min="0" step="50" value="${a.minVisible}" />
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
  `;const i=e.querySelector(".playground-controls"),l=e.querySelector("[data-playground-host]"),n=e.querySelector("[data-playground-code]"),p=e.querySelector("[data-size-value]"),u=e.querySelector("[data-speed-value]"),x=e.querySelector("[data-replay]"),v=e.querySelector("[data-copy-playground]"),z=e.querySelector(".playground-stage"),A=Array.from(e.querySelectorAll("[data-preview-tab]"));if(!i||!l||!n||!p||!u||!x||!v||!z)return()=>{};const C=()=>{r==null||r.destroy(),r=null,l.innerHTML=we(t,a.fullscreen),z.classList.toggle("is-reduced-motion",a.reducedMotion),z.dataset.previewTab=t;const d=l.querySelector("[data-surface]")??l;r=L({...ye(a),target:d}),r.mount(d),r.show(),n.textContent=fe(a),p.textContent=`${a.size}px`,u.textContent=`${a.speed}ms`},W=()=>{const d=new FormData(i);a.variant=d.get("variant")??f.variant,a.size=Number(d.get("size")??f.size),a.speed=Number(d.get("speed")??f.speed),a.color=String(d.get("color")??f.color),a.secondaryColor=a.color==="#2563eb"?f.secondaryColor:`color-mix(in srgb, ${a.color} 20%, transparent)`,a.label=String(d.get("label")??""),a.delay=Number(d.get("delay")??0),a.minVisible=Number(d.get("minVisible")??f.minVisible),a.overlay=d.get("overlay")==="on",a.fullscreen=d.get("fullscreen")==="on",a.centered=d.get("centered")==="on",a.reducedMotion=d.get("reducedMotion")==="on",C()};return i.addEventListener("input",W),x.addEventListener("click",()=>{r&&r.hide().then(()=>r==null?void 0:r.show())}),v.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(n.textContent??""),v.textContent="Copied",window.setTimeout(()=>{v.textContent="Copy code"},1200)}catch{v.textContent="Copy failed"}}),A.forEach(d=>{d.addEventListener("click",()=>{const S=d.dataset.previewTab;!S||S===t||(t=S,A.forEach($=>{const U=$===d;$.classList.toggle("is-active",U),$.setAttribute("aria-selected",U?"true":"false")}),C())})}),C(),()=>{r==null||r.destroy()}}const ke=["galaxy","astronaut-to-mars","baseball-player","football-player"],g={install:"npm install @stackline/loading",quickStart:`import { createLoader } from '@stackline/loading';

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
  .finally(() => loader.destroy());`,theme:`import { applyThemeTokens, darkTheme } from '@stackline/loading';

applyThemeTokens(document.documentElement, {
  ...darkTheme,
  color: '#22c55e',
  secondaryColor: 'rgba(34, 197, 94, 0.18)'
});`,delay:`const loader = createLoader({
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
}`,accessibility:`const loader = createLoader({
  variant: 'typing-dots',
  label: 'Loading chart data',
  ariaLive: 'polite',
  inline: true
});

loader.mount(statusRow);
loader.show();`,overlay:`const loader = createLoader({
  variant: 'glass-spinner',
  overlay: true,
  centered: true,
  blur: 16,
  background: 'rgba(255, 255, 255, 0.62)',
  label: 'Preparing your workspace'
});

loader.mount(panel);
loader.show();`,button:`const button = document.querySelector('[data-save-button]');

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
}`,fullscreen:`const loader = createLoader({
  variant: 'vortex',
  size: 72,
  fullscreen: true,
  background: 'rgba(15, 23, 42, 0.54)',
  label: 'Loading application shell'
});

loader.show();`,container:`const loader = createLoader({
  variant: 'shimmer',
  overlay: true,
  centered: true,
  radius: 20,
  label: 'Loading table rows'
});

loader.mount(tableSection);
loader.show();`},O=[{id:"dashboard-card",title:"Dashboard card",description:"A polished card overlay keeps the layout stable while a metric tile refreshes.",variant:"orbit",options:{variant:"orbit",size:44,overlay:!0,centered:!0,label:"Refreshing KPI"},previewHtml:`
      <div class="demo-surface surface-card" data-demo-host>
        <div class="surface-eyebrow">Revenue</div>
        <div class="surface-metric">$142.4k</div>
        <div class="surface-trend">+18.4% vs last month</div>
      </div>
    `,targetSelector:"[data-demo-host]",code:`const loader = createLoader({
  variant: 'orbit',
  overlay: true,
  centered: true,
  label: 'Refreshing KPI'
});

loader.mount(card);
loader.show();`},{id:"table-section",title:"Table section",description:"Container overlays work well when a page is partially interactive and only one region is loading.",variant:"shimmer",options:{variant:"shimmer",size:54,overlay:!0,centered:!0,radius:20,label:"Loading rows"},previewHtml:`
      <div class="demo-surface surface-table" data-demo-host>
        <div class="table-row table-head"></div>
        <div class="table-row"></div>
        <div class="table-row"></div>
        <div class="table-row"></div>
      </div>
    `,targetSelector:"[data-demo-host]",code:`const loader = createLoader({
  variant: 'shimmer',
  overlay: true,
  centered: true,
  label: 'Loading rows'
});

loader.mount(tableSection);
loader.show();`},{id:"submit-button",title:"Submit button",description:"Inline loaders keep button width stable and make async feedback feel intentional.",variant:"bouncing-dots",options:{variant:"bouncing-dots",inline:!0,size:18,gap:4,label:""},previewHtml:`
      <button class="surface-button" type="button" data-demo-host>
        <span>Saving changes</span>
      </button>
    `,targetSelector:"[data-demo-host]",code:`const loader = createLoader({
  variant: 'bouncing-dots',
  inline: true,
  size: 18,
  gap: 4,
  label: ''
});

loader.mount(button);
loader.show();`},{id:"full-page",title:"Entire page",description:"Fullscreen loaders are best for route-level transitions, auth gates, or cold starts.",variant:"vortex",options:{variant:"vortex",size:68,fullscreen:!0,background:"rgba(15, 23, 42, 0.54)",label:"Loading workspace"},previewOptions:{variant:"vortex",size:68,overlay:!0,centered:!0,background:"rgba(15, 23, 42, 0.54)",label:"Loading workspace"},previewHtml:`
      <div class="demo-surface surface-page" data-demo-host>
        <div class="page-topbar"></div>
        <div class="page-grid">
          <div class="page-tile"></div>
          <div class="page-tile"></div>
          <div class="page-tile"></div>
          <div class="page-tile"></div>
        </div>
      </div>
    `,targetSelector:"[data-demo-host]",code:`const loader = createLoader({
  variant: 'vortex',
  size: 68,
  fullscreen: true,
  background: 'rgba(15, 23, 42, 0.54)',
  label: 'Loading workspace'
});

loader.show();`},{id:"modal-body",title:"Modal body",description:"Loading only the body keeps the modal frame and actions stable.",variant:"glass-spinner",options:{variant:"glass-spinner",size:42,overlay:!0,centered:!0,blur:14,label:"Loading customer record"},previewHtml:`
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
    `,targetSelector:"[data-demo-host]",code:`const loader = createLoader({
  variant: 'glass-spinner',
  overlay: true,
  centered: true,
  label: 'Loading customer record'
});

loader.mount(modalBody);
loader.show();`},{id:"chart",title:"Chart data",description:"Equalizer and radar styles feel great on analytical surfaces while data streams in.",variant:"equalizer-bars",options:{variant:"equalizer-bars",size:38,count:5,overlay:!0,centered:!0,label:"Loading chart data"},previewHtml:`
      <div class="demo-surface surface-chart" data-demo-host>
        <div class="chart-bar" style="height: 28%"></div>
        <div class="chart-bar" style="height: 46%"></div>
        <div class="chart-bar" style="height: 60%"></div>
        <div class="chart-bar" style="height: 38%"></div>
        <div class="chart-bar" style="height: 72%"></div>
        <div class="chart-bar" style="height: 55%"></div>
      </div>
    `,targetSelector:"[data-demo-host]",code:`const loader = createLoader({
  variant: 'equalizer-bars',
  overlay: true,
  centered: true,
  count: 5,
  label: 'Loading chart data'
});

loader.mount(chartPanel);
loader.show();`},{id:"upload",title:"File upload zone",description:"A centered loader inside the drop zone keeps the task grounded in the user’s current context.",variant:"diamond",options:{variant:"diamond",size:40,overlay:!0,centered:!0,label:"Uploading assets"},previewHtml:`
      <div class="demo-surface surface-upload" data-demo-host>
        <div class="upload-icon"></div>
        <div class="upload-title">Drop files here</div>
        <div class="upload-caption">PNG, SVG, PDF up to 25 MB</div>
      </div>
    `,targetSelector:"[data-demo-host]",code:`const loader = createLoader({
  variant: 'diamond',
  overlay: true,
  centered: true,
  label: 'Uploading assets'
});

loader.mount(uploadZone);
loader.show();`},{id:"artificial-delay",title:"Artificial delay",description:"Delay and minimum visibility are the key to removing loader flash on fast network calls.",variant:"ring",options:{variant:"ring",size:36,overlay:!0,centered:!0,delay:250,minVisible:320,label:"Checking availability"},previewHtml:`
      <div class="demo-surface surface-card" data-demo-host>
        <div class="surface-eyebrow">Availability</div>
        <div class="surface-metric">Checking...</div>
        <div class="surface-trend">Delay avoids flash on fast responses.</div>
      </div>
    `,targetSelector:"[data-demo-host]",code:`const loader = createLoader({
  variant: 'ring',
  overlay: true,
  centered: true,
  delay: 250,
  minVisible: 320,
  label: 'Checking availability'
});`}];function ze(e){return e.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;").split("'").join("&#39;")}function m(e,r,a="ts"){return`
    <div class="code-block">
      <div class="code-block-head">
        <span>${e}</span>
        <button class="copy-button" type="button">Copy</button>
      </div>
      <pre><code class="language-${a}">${ze(r)}</code></pre>
    </div>
  `}function o(e,r){return`
    <section class="page-section">
      <h2>${e}</h2>
      ${r}
    </section>
  `}const Ce=`
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
`,T=[{slug:"home",title:"@stackline/loading",eyebrow:"Premium Loading Toolkit",description:"A modern framework-agnostic loading library for overlays, buttons, cards, dashboards, and polished async UX.",body:`
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
      ${o("Why this library exists",`
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
        `)}
      ${o("Choose the right loader",`
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
        `)}
    `},{slug:"installation",title:"Installation",eyebrow:"Get Started",description:"Install the package and understand what ships in the core library.",body:`
      ${o("Install the package",`
          <p>The package is dependency-light and ships a framework-agnostic DOM runtime.</p>
          ${m("npm",g.install,"bash")}
          <p>You do not need a CSS framework, component library, or wrapper package. The core package injects its own styles only when a loader is created.</p>
        `)}
      ${o("What ships in the package",`
          <ul class="content-list">
            <li>A TypeScript-first core API with strong runtime defaults.</li>
            <li>35 polished built-in variants.</li>
            <li>Delay and minimum visible duration controls.</li>
            <li>Overlay, container, fullscreen, and inline modes.</li>
            <li>Theme tokens for light and dark defaults.</li>
          </ul>
        `)}
    `},{slug:"quick-start",title:"Quick Start",eyebrow:"First Loader",description:"Create, mount, show, hide, and destroy your first loader in a few lines.",body:`
      ${o("Basic flow",`
          <p>Most integrations follow the same lifecycle: create the loader, mount it to a target, show it, then hide and destroy it when work finishes.</p>
          ${m("core flow",g.quickStart)}
        `)}
      ${o("Recommended mental model",`
          <ol class="content-list ordered">
            <li>Use <code>overlay</code> when a container should remain visible but temporarily busy.</li>
            <li>Use <code>inline</code> for buttons, text rows, and compact controls.</li>
            <li>Use <code>delay</code> and <code>minVisible</code> for network work that can resolve very quickly.</li>
            <li>Use <code>label: ''</code> for ultra-compact loaders, but prefer a meaningful label when the state matters to the user.</li>
          </ol>
        `)}
    `},{slug:"api-reference",title:"API Reference",eyebrow:"Reference",description:"Understand the public API surface and how each option affects runtime behavior.",body:`
      ${o("Primary API",`
          <div class="api-card-grid">
            <article class="api-card"><h3><code>createLoader(options)</code></h3><p>Create a loader instance and control it manually.</p></article>
            <article class="api-card"><h3><code>mountLoader(target, options)</code></h3><p>Create, mount, and show a loader in one call.</p></article>
            <article class="api-card"><h3><code>showLoader(target, options)</code></h3><p>Sugar for immediate visible mounting.</p></article>
            <article class="api-card"><h3><code>hydrateLoaders(root)</code></h3><p>Activate declarative loaders from <code>data-*</code> attributes.</p></article>
          </div>
        `)}
      ${o("Options",Ce)}
      ${o("Theme helpers",`
          <p>The package exports <code>lightTheme</code>, <code>darkTheme</code>, and <code>applyThemeTokens(...)</code> so you can keep library defaults aligned with your product theme.</p>
          ${m("theme tokens",g.theme)}
        `)}
    `},{slug:"variants-gallery",title:"Variants Gallery",eyebrow:"Visual Language",description:"Explore every built-in loader style and understand where each one fits best.",body:`
      ${o("All built-in variants",`
          <p>Each variant is designed to feel modern, branded, and usable in real product surfaces. The gallery below renders the actual package runtime.</p>
          <div class="variant-gallery" data-gallery="all"></div>
        `)}
    `},{slug:"theming",title:"Theming",eyebrow:"Customization",description:"Use CSS variables and exported tokens to align loaders with your product theme.",body:`
      ${o("Theme with tokens",`
          <p>Use the exported token helpers to keep the library aligned with your app shell. This is the easiest path when you already switch themes at the document root.</p>
          ${m("applyThemeTokens",g.theme)}
        `)}
      ${o("Theme with CSS variables",`
          <p>You can also theme the library entirely from CSS:</p>
          ${m(":root variables",`:root {
  --rvl-theme-color: #0f766e;
  --rvl-theme-secondary: rgba(15, 118, 110, 0.18);
  --rvl-theme-surface: rgba(255, 255, 255, 0.92);
  --rvl-theme-overlay: rgba(240, 253, 250, 0.76);
  --rvl-theme-text: #042f2e;
  --rvl-theme-muted: #134e4a;
}`,"css")}
          <p>For branded components, override instance-level options with <code>color</code>, <code>secondaryColor</code>, and <code>background</code>.</p>
        `)}
    `},{slug:"accessibility",title:"Accessibility",eyebrow:"A11y",description:"Use labels, live regions, and reduced motion support to make loading states understandable.",body:`
      ${o("Accessible defaults",`
          <ul class="content-list">
            <li>Loaders use <code>role="status"</code> and <code>aria-live</code> by default.</li>
            <li>The <code>label</code> option becomes both visible helper text and assistive status content.</li>
            <li><code>prefers-reduced-motion</code> is respected automatically.</li>
          </ul>
          ${m("accessible inline loader",g.accessibility)}
        `)}
      ${o("Practical guidance",`
          <p>Keep labels short and stateful: “Loading chart data”, “Saving profile”, or “Uploading assets”. For very brief operations, pair a delay with a polite live region so users are not interrupted unnecessarily.</p>
        `)}
    `},{slug:"overlay-usage",title:"Overlay Usage",eyebrow:"Patterns",description:"Use overlays for cards, panels, and modal bodies without losing visual context.",body:`
      ${o("Container overlays",`
          <p>Overlay mode keeps the user anchored to the exact surface that is busy. It is ideal for dashboards, tables, detail panes, and modal bodies.</p>
          ${m("overlay example",g.overlay)}
        `)}
      ${o("When overlays work best",`
          <ul class="content-list">
            <li>Refreshing a dashboard card without blanking the entire page.</li>
            <li>Loading a tab panel while the rest of the screen stays interactive.</li>
            <li>Blocking just the modal body while header and footer actions remain stable.</li>
          </ul>
        `)}
    `},{slug:"button-loaders",title:"Button Loaders",eyebrow:"Patterns",description:"Keep buttons readable and steady while actions are in flight.",body:`
      ${o("Inline button states",`
          <p>Button loaders should be compact, quiet, and width-safe. Dots and minimal spinners are especially strong choices here.</p>
          ${m("button pattern",g.button)}
        `)}
      ${o("Good button loading UX",`
          <ul class="content-list">
            <li>Disable the button while work is pending.</li>
            <li>Keep the label readable so users know what action is being processed.</li>
            <li>Use small sizes and tight gap values.</li>
          </ul>
        `)}
    `},{slug:"fullscreen-loaders",title:"Fullscreen Loaders",eyebrow:"Patterns",description:"Use fullscreen loading for app shell transitions, auth gates, and route-level blocking states.",body:`
      ${o("Viewport-level loading",`
          <p>Fullscreen mode is intentionally heavy-handed. Reserve it for moments when the entire experience is blocked or being reconfigured.</p>
          ${m("fullscreen example",g.fullscreen)}
        `)}
      ${o("Recommended use cases",`
          <ul class="content-list">
            <li>Cold app start with critical bootstrapping.</li>
            <li>Authentication or workspace switching.</li>
            <li>Large route transitions where the previous page should not remain interactive.</li>
          </ul>
        `)}
    `},{slug:"container-section-loaders",title:"Container & Section Loaders",eyebrow:"Patterns",description:"Load only the region that is actually busy so the rest of the interface stays calm and useful.",body:`
      ${o("Partial-page loading",`
          <p>This is one of the library’s strongest use cases. By loading only the affected region, you avoid over-blocking the rest of the application.</p>
          ${m("section loading",g.container)}
        `)}
      ${o("Great targets",`
          <ul class="content-list">
            <li>Dashboard widgets and chart tiles.</li>
            <li>Tables and side panels.</li>
            <li>Tabs, accordions, and modal content regions.</li>
            <li>Embeds and file upload surfaces.</li>
          </ul>
        `)}
    `},{slug:"delay-min-visible",title:"Delay & Minimum Visible Duration",eyebrow:"Behavior",description:"Avoid loader flash on fast operations while keeping slow operations feeling smooth and deliberate.",body:`
      ${o("Anti-flicker behavior",`
          <p>Fast requests should often skip a loader entirely. Slow requests should show a loader that stays visible long enough to feel intentional.</p>
          ${m("delay + minVisible",g.delay)}
        `)}
      ${o("Recommended defaults",`
          <div class="tip-grid">
            <article class="tip-card"><h3>Fast API work</h3><p>Try <code>delay: 120-200</code> to suppress flash.</p></article>
            <article class="tip-card"><h3>Noticeable tasks</h3><p>Use <code>minVisible: 240-400</code> so the animation lands cleanly.</p></article>
            <article class="tip-card"><h3>Heavy transitions</h3><p>Use larger labels and overlays to match the weight of the task.</p></article>
          </div>
        `)}
    `},{slug:"examples",title:"Examples",eyebrow:"Real World",description:"Production-style examples for cards, tables, buttons, charts, modals, uploads, and more.",body:`
      ${o("Example gallery",`
          <p>These examples are grounded in product surfaces you actually see in dashboards, SaaS apps, and admin tools.</p>
          <div class="examples-grid" data-example-grid></div>
        `)}
    `},{slug:"playground",title:"Playground",eyebrow:"Interactive",description:"Tune variants, size, motion, color, overlays, and behavior in one interactive sandbox.",body:`
      ${o("Interactive configuration",`
          <p>The playground uses the package runtime directly. Fullscreen mode is simulated inside the preview stage so it stays safe inside the docs shell.</p>
          <div data-playground></div>
        `)}
    `},{slug:"faq",title:"FAQ",eyebrow:"Reference",description:"Common questions about architecture, wrappers, styling, and integration strategy.",body:`
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
    `}],Se=[{title:"Start Here",items:[{slug:"home",title:"Home"},{slug:"installation",title:"Installation"},{slug:"quick-start",title:"Quick Start"},{slug:"api-reference",title:"API Reference"}]},{title:"Customization",items:[{slug:"variants-gallery",title:"Variants Gallery"},{slug:"theming",title:"Theming"},{slug:"accessibility",title:"Accessibility"},{slug:"delay-min-visible",title:"Delay & Minimum Visible"}]},{title:"Patterns",items:[{slug:"overlay-usage",title:"Overlay Usage"},{slug:"button-loaders",title:"Button Loaders"},{slug:"fullscreen-loaders",title:"Fullscreen Loaders"},{slug:"container-section-loaders",title:"Container & Section Loaders"},{slug:"examples",title:"Examples"}]},{title:"Interactive",items:[{slug:"faq",title:"FAQ"}]}],B=document.querySelector("#app"),w=new Set,Y="stackline-loading-docs-theme";function $e(){return window.location.hash.replace(/^#\/?/,"").trim()||"playground"}function Te(e){return T.find(r=>r.slug===e)??T.find(r=>r.slug==="playground")??T[0]}function Le(e){return`
    <aside class="site-sidebar">
      <div class="sidebar-meta">
        <a class="brand-mark" href="#/playground">
          <span class="brand-badge"></span>
          <span class="brand-title">@stackline/loading</span>
        </a>
        <button class="sidebar-theme" type="button" data-theme-toggle>Theme</button>
      </div>
      <nav>
        ${Se.map(r=>`
              <section class="nav-group">
                <div class="nav-group-title">${r.title}</div>
                ${r.items.map(a=>`
                      <a class="nav-link ${a.slug===e?"is-active":""}" href="#/${a.slug}">
                        ${a.title}
                      </a>
                    `).join("")}
              </section>
            `).join("")}
      </nav>
    </aside>
  `}function Ae(){return`
    <header class="site-header">
      <button class="mobile-nav-toggle" type="button" data-nav-toggle>Menu</button>
      <button class="sidebar-theme" type="button" data-theme-toggle>Theme</button>
    </header>
  `}function F(){if(!B)return;w.forEach(r=>r()),w.clear();const e=Te($e());B.innerHTML=`
    <div class="site-shell">
      ${Le(e.slug)}
      <main class="site-main">
        ${Ae()}
        <div class="page-shell">
          <header class="page-header">
            <span class="page-eyebrow">${e.eyebrow}</span>
            <h1>${e.title}</h1>
            <p>${e.description}</p>
          </header>
          <article>${e.body}</article>
        </div>
      </main>
    </div>
  `,window.scrollTo({top:0,behavior:"instant"}),G(),Pe(),X()}function G(){var e;document.querySelectorAll("[data-theme-toggle]").forEach(r=>{r.addEventListener("click",Ie)}),(e=document.querySelector("[data-nav-toggle]"))==null||e.addEventListener("click",()=>{document.body.classList.toggle("is-nav-open")}),document.querySelectorAll(".copy-button").forEach(r=>{r.addEventListener("click",async()=>{var t,i;const a=((i=(t=r.closest(".code-block"))==null?void 0:t.querySelector("code"))==null?void 0:i.textContent)??"";try{await navigator.clipboard.writeText(a),r.textContent="Copied",window.setTimeout(()=>{r.textContent="Copy"},1200)}catch{r.textContent="Copy failed"}})}),document.querySelectorAll(".nav-link").forEach(r=>{r.addEventListener("click",()=>{document.body.classList.remove("is-nav-open")})})}function Ue(e,r){e.innerHTML=r.map(a=>{const t=k(a);return`
        <article class="gallery-card">
          <div class="gallery-preview">
            <div class="preview-host" data-variant-host="${a}"></div>
          </div>
          <h3>${t.label}</h3>
          <p>${t.description}</p>
          <p class="meta"><strong>Best for:</strong> ${t.recommendedUse}</p>
        </article>
      `}).join(""),e.querySelectorAll("[data-variant-host]").forEach(a=>{const t=a.dataset.variantHost,i={variant:t,size:t==="shimmer"?56:44,centered:!0,label:"",target:a,visible:!0},l=t.includes("dots")?4:t.includes("bars")?5:null,n=L(l==null?i:{...i,count:l});n.mount(a),n.show(),w.add(()=>n.destroy())})}function Ee(e){e.innerHTML=O.map(r=>`
        <article class="example-card">
          <div class="example-preview">
            <div class="preview-host" data-example-id="${r.id}">
              ${r.previewHtml}
            </div>
          </div>
          <h3>${r.title}</h3>
          <p>${r.description}</p>
          <div class="code-block">
            <div class="code-block-head">
              <span>Example snippet</span>
              <button class="copy-button" type="button">Copy</button>
            </div>
            <pre><code>${r.code.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;")}</code></pre>
          </div>
        </article>
      `).join(""),e.querySelectorAll("[data-example-id]").forEach(r=>{const a=r.dataset.exampleId,t=O.find(n=>n.id===a);if(!t)return;const i=r.querySelector(t.targetSelector)??r,l=L({...t.previewOptions??t.options,target:i});l.mount(i),l.show(),w.add(()=>l.destroy())}),G()}function Pe(){document.querySelectorAll("[data-gallery]").forEach(e=>{const a=e.dataset.gallery==="featured"?ke:H.map(t=>t.value);Ue(e,a)}),document.querySelectorAll("[data-example-grid]").forEach(e=>{Ee(e)}),document.querySelectorAll("[data-playground]").forEach(e=>{const r=xe(e);w.add(r)})}function qe(e){return e==="light"?"Dark mode":"Light mode"}function X(){const e=document.documentElement.dataset.docsTheme==="dark"?"dark":"light",r=qe(e);document.querySelectorAll("[data-theme-toggle]").forEach(a=>{a.textContent=r,a.setAttribute("aria-label",`Switch to ${r.toLowerCase()}`),a.setAttribute("title",`Switch to ${r.toLowerCase()}`),a.setAttribute("aria-pressed",e==="dark"?"true":"false")})}function K(e){var r;document.documentElement.dataset.docsTheme=e,be(document.documentElement,e==="light"?me:ge),window.localStorage.setItem(Y,e),(r=document.querySelector('meta[name="theme-color"]'))==null||r.setAttribute("content",e==="light"?"#f7fafc":"#08111f"),X()}function Ie(){const e=document.documentElement.dataset.docsTheme==="light"?"dark":"light";K(e)}function Ve(){const e=window.localStorage.getItem(Y);K(e==="dark"?"dark":"light")}Ve();window.addEventListener("hashchange",F);F();
