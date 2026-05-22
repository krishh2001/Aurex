import { useEffect } from "react";
import { DEFAULT_PAGE_META } from "../data/company";

/**
 * Sets document title and meta description per route.
 */
export function usePageMeta({ title, description } = {}) {
  useEffect(() => {
    const prevTitle = document.title;
    const meta = document.querySelector('meta[name="description"]');
    const prevDescription = meta?.getAttribute("content") ?? "";

    document.title = title ?? DEFAULT_PAGE_META.title;
    if (meta) {
      meta.setAttribute("content", description ?? DEFAULT_PAGE_META.description);
    }

    return () => {
      document.title = prevTitle;
      if (meta) meta.setAttribute("content", prevDescription);
    };
  }, [title, description]);
}
