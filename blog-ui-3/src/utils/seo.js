import { SITE_SEO } from "../config/seo.config";

function setMeta({ name, property, content }) {
  if (!content) return;

  let selector = name
    ? `meta[name="${name}"]`
    : `meta[property="${property}"]`;

  let tag = document.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    if (name) tag.setAttribute("name", name);
    if (property) tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

export function applySEO({
  title,
  description,
  image,
  url,
  type = "website",
}) {
  document.title = title
    ? `${title} | ${SITE_SEO.siteName}`
    : SITE_SEO.defaultTitle;

  setMeta({ name: "description", content: description || SITE_SEO.defaultDescription });

  // Open Graph
  setMeta({ property: "og:type", content: type });
  setMeta({ property: "og:site_name", content: SITE_SEO.siteName });
  setMeta({ property: "og:title", content: document.title });
  setMeta({ property: "og:description", content: description || SITE_SEO.defaultDescription });
  setMeta({ property: "og:image", content: image || SITE_SEO.defaultImage });
  setMeta({ property: "og:url", content: url || SITE_SEO.siteUrl });

  // Twitter
  setMeta({ name: "twitter:card", content: "summary_large_image" });
  setMeta({ name: "twitter:title", content: document.title });
  setMeta({ name: "twitter:description", content: description || SITE_SEO.defaultDescription });
  setMeta({ name: "twitter:image", content: image || SITE_SEO.defaultImage });

  // Canonical
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = url || SITE_SEO.siteUrl;
}
