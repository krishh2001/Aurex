import { useEffect } from "react";

/**
 * Injects lightweight floating particles once per mount; cleans up on unmount.
 */
export function useParticles(containerId = "particles", options = {}) {
  const { enabled = true, maxCount } = options;

  useEffect(() => {
    if (!enabled) return undefined;

    const container = document.getElementById(containerId);
    if (!container) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const narrow = window.matchMedia("(max-width: 768px)").matches;
    const defaultCount = narrow ? 12 : 18;
    const count = reducedMotion ? 0 : (maxCount ?? defaultCount);

    if (count === 0 || container.childElementCount > 0) return undefined;

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < count; i += 1) {
      const span = document.createElement("span");
      span.className = "particle";
      const size = Math.random() * 3 + 1;
      span.style.width = `${size}px`;
      span.style.height = `${size}px`;
      span.style.left = `${Math.random() * 100}%`;
      span.style.top = `${Math.random() * 100}%`;
      span.style.animationDuration = `${Math.random() * 10 + 8}s`;
      span.style.animationDelay = `${Math.random() * 5}s`;
      span.style.opacity = String(Math.random() * 0.4 + 0.1);
      fragment.appendChild(span);
    }
    container.appendChild(fragment);

    return () => {
      container.replaceChildren();
    };
  }, [containerId, enabled, maxCount]);
}
