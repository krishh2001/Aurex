import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_PAGE_META } from "../data/company";
import { applyPageSeo } from "../lib/seo";

/**
 * Sets per-route SEO: title, description, canonical, robots, Open Graph & Twitter.
 */
export function usePageMeta(meta = {}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const merged = {
      ...DEFAULT_PAGE_META,
      ...meta,
      pathname,
    };
    return applyPageSeo(merged);
  }, [
    pathname,
    meta.title,
    meta.description,
    meta.canonical,
    meta.robots,
    meta.image,
    meta.ogType,
  ]);
}
