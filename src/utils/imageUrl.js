/** Resize Unsplash (and similar) URLs for faster loads */
export function optimizeImageUrl(url, width = 800) {
  if (!url || typeof url !== "string") return url;
  const quality = width >= 1000 ? "85" : "75";
  return url
    .replace(/w=\d+/i, `w=${width}`)
    .replace(/h=\d+/i, (match) => (width >= 1000 ? match : ""))
    .replace(/q=\d+/i, `q=${quality}`);
}
