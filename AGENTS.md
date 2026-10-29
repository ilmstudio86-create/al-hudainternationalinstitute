# Project rules

- Blog articles use dedicated TanStack leaf routes under `/blog` and are registered in the blog listing and sitemap so navigation and discovery stay aligned.
- Every blog entry must use a distinct featured image; retain the listing uniqueness check to prevent duplicate imagery.
- Replace unavailable draft destinations with relevant existing pages or contact options so article links remain usable.
- Performance budget: all site images are WebP (hero slides additionally serve AVIF via `<picture>`), fonts are self-hosted via @fontsource (no Google Fonts CDN links), and AdSense/GA load from an inline loader after the window `load` event. Keep new images in WebP/AVIF and never reintroduce render-blocking font or third-party requests in the head; hero LCP image stays eager with fetchpriority high and is never lazy-loaded.
