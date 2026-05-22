import { useEffect, useRef } from "react";

/**
 * Runs callback on an interval only while the target element is in the viewport.
 */
export function useIntervalWhenVisible(ref, callback, delayMs) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    const el = ref?.current;
    if (!el || delayMs <= 0) return undefined;

    let intervalId = null;
    let visible = false;

    const start = () => {
      if (intervalId !== null) return;
      intervalId = window.setInterval(() => callbackRef.current(), delayMs);
    };

    const stop = () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      },
      { threshold: 0.05, rootMargin: "40px" }
    );

    observer.observe(el);

    return () => {
      stop();
      observer.disconnect();
    };
  }, [ref, delayMs]);
}
