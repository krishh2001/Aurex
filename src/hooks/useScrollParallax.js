import { useEffect } from "react";

/**
 * Batches parallax updates in requestAnimationFrame (passive scroll).
 * @param {string|import('react').RefObject} target - CSS selector or ref to the bg text element
 */
export function useScrollParallax(target, options = {}) {
  const { factor = 0.15, fadeFactor = 0, enabled = true } = options;

  useEffect(() => {
    if (!enabled || !target) return undefined;

    const resolveEl = () => {
      if (typeof target === "string") return document.querySelector(target);
      return target.current ?? null;
    };

    let el = resolveEl();
    if (!el) return undefined;

    let ticking = false;
    let rafId = null;

    const update = () => {
      el = resolveEl() || el;
      if (!el) return;
      const scrollY = window.scrollY;
      el.style.transform = `translate3d(-50%, ${scrollY * factor}px, 0)`;
      if (fadeFactor > 0) {
        el.style.opacity = String(Math.max(0, Math.min(1, 1 - scrollY * fadeFactor)));
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafId = requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
      if (el) {
        el.style.transform = "translate3d(-50%, 0, 0)";
        el.style.opacity = fadeFactor > 0 ? "1" : "";
      }
    };
  }, [target, factor, fadeFactor, enabled]);
}
