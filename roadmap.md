# UK Quran Classes Blog

- [x] Add uploaded UK article with a unique featured image and working internal links.
- [x] Add blog listing entry, route metadata, structured data, and sitemap entry.
- [x] Verify article navigation and desktop/mobile presentation.

# PageSpeed Mobile Optimization

- [x] Audit codebase and measure baseline (Lighthouse mobile on published site: score 50, FCP 4.7s, LCP 6.6s, 1988 KB).
- [x] Convert all images to WebP, hero slides to AVIF via `<picture>`, optimize favicon/logos/pattern tile.
- [x] Self-host Amiri + Inter fonts via @fontsource; remove render-blocking Google Fonts links.
- [x] Hero LCP image: eager, fetchpriority high, preload; defer non-visible carousel/rotator images.
- [x] Defer AdSense and GA to the window `load` event via inline loader in __root.
- [x] Verify production build + desktop/mobile rendering; measured after-state (same throttling): score 54, FCP 2.2s, LCP 5.2s, TBT 1110ms.
