import { useEffect, useState } from "react";
import { useScrollParallax } from "./useScrollParallax";

/**
 * Shared page background effects.
 * Keeps original bg-large-text parallax + fade on all inner pages.
 */
export function usePageEffects(parallaxSelector = null) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useScrollParallax(parallaxSelector, {
    factor: reducedMotion ? 0 : 0.15,
    fadeFactor: reducedMotion ? 0 : 0.001,
  });
}
