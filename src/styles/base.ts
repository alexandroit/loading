export const baseStyles = `
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
`;
