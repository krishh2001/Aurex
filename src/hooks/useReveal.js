import { useEffect } from "react";

/**
 * Adds .active when elements enter the viewport; unobserves after reveal for less work on scroll.
 */
export function useReveal(selector, rootRef = null) {
  useEffect(() => {
    const root = rootRef?.current ?? document;
    const elements = root.querySelectorAll(selector);
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, rootRef]);
}
