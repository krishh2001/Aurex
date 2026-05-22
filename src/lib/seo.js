import { SITE, DEFAULT_PAGE_META } from "../data/company";

function upsertMetaByName(name, content) {
  if (content == null || content === "") return;
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertMetaByProperty(property, content) {
  if (content == null || content === "") return;
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function buildCanonicalUrl(pathname) {
  const base = SITE.url.replace(/\/$/, "");
  if (!pathname || pathname === "/") return `${base}/`;
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${path}`;
}

/**
 * Apply title, description, canonical, robots, Open Graph & Twitter tags.
 * Returns cleanup to restore previous head state.
 */
export function applyPageSeo(meta = {}) {
  const title = meta.title ?? DEFAULT_PAGE_META.title;
  const description = meta.description ?? DEFAULT_PAGE_META.description;
  const canonical = meta.canonical ?? buildCanonicalUrl(meta.pathname ?? "/");
  const robots = meta.robots ?? "index, follow, max-image-preview:large";
  const ogImage = meta.image ?? SITE.ogImage;
  const ogType = meta.ogType ?? "website";

  const prev = {
    title: document.title,
    description: document.querySelector('meta[name="description"]')?.getAttribute("content") ?? "",
    canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? "",
    robots: document.querySelector('meta[name="robots"]')?.getAttribute("content") ?? "",
  };

  document.title = title;
  upsertMetaByName("description", description);
  upsertMetaByName("robots", robots);
  upsertLink("canonical", canonical);

  upsertMetaByProperty("og:site_name", SITE.name);
  upsertMetaByProperty("og:title", title);
  upsertMetaByProperty("og:description", description);
  upsertMetaByProperty("og:type", ogType);
  upsertMetaByProperty("og:url", canonical);
  upsertMetaByProperty("og:image", ogImage);
  upsertMetaByProperty("og:locale", SITE.locale);

  upsertMetaByName("twitter:card", "summary_large_image");
  if (SITE.twitterHandle) {
    upsertMetaByName("twitter:site", SITE.twitterHandle);
  }
  upsertMetaByName("twitter:title", title);
  upsertMetaByName("twitter:description", description);
  upsertMetaByName("twitter:image", ogImage);

  return () => {
    document.title = prev.title;
    upsertMetaByName("description", prev.description);
    upsertMetaByName("robots", prev.robots);
    upsertLink("canonical", prev.canonical || buildCanonicalUrl("/"));
  };
}

export function upsertJsonLd(id, data) {
  const prev = document.getElementById(id);
  const script = prev ?? document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  if (!prev) document.head.appendChild(script);
  return () => {
    script.remove();
  };
}
