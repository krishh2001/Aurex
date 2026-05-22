/** Resize Unsplash (and similar) URLs for faster loads */
export function optimizeImageUrl(url, width = 800) {
  if (!url || typeof url !== "string") return url;
  return url
    .replace(/w=\d+/i, `w=${width}`)
    .replace(/q=\d+/i, "q=75");
}
