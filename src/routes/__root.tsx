import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Al Huda International Islamic Institute" },
      { name: "description", content: "Al Huda International Islamic Institute offers professional online Quran and Islamic education for students worldwide." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Al Huda International Islamic Institute" },
      { property: "og:description", content: "Al Huda International Islamic Institute offers professional online Quran and Islamic education for students worldwide." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Al Huda International Islamic Institute" },
      { name: "twitter:description", content: "Al Huda International Islamic Institute offers professional online Quran and Islamic education for students worldwide." },
      { property: "og:image", content: "https://al-hudainternationalinstitute.lovable.app/logo.png" },
      { property: "og:image:width", content: "1024" },
      { property: "og:image:height", content: "1024" },
      { name: "twitter:image", content: "https://al-hudainternationalinstitute.lovable.app/logo.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://al-hudainternationalinstitute.lovable.app/" },
      { rel: "icon", type: "image/png", href: "/logo.png" },
      { rel: "shortcut icon", type: "image/png", href: "/logo.png" },
      { rel: "apple-touch-icon", href: "/logo.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      { src: "https://www.googletagmanager.com/gtag/js?id=G-5KW34H6113", async: true },
      {
        children: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-5KW34H6113');`,
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Al Huda International Islamic Institute",
          alternateName: "Al Huda Islamic Institute",
          url: "https://al-hudainternationalinstitute.lovable.app",
          logo: "https://al-hudainternationalinstitute.lovable.app/logo.png",
          image: "https://al-hudainternationalinstitute.lovable.app/logo.png",
          email: "alhudaquranedu@gmail.com",
          telephone: "+92-314-1766950",
          foundingDate: "2013",
          address: { "@type": "PostalAddress", addressLocality: "Riyadh", addressCountry: "SA" },
          description: "Online Quran classes for kids and adults — Nazra, Hifz, Tajweed, Tafseer, Arabic and Islamic Studies taught by certified Hafiz, Qari and female scholars.",
          sameAs: [
            "https://www.facebook.com/AlHudaIslamicInstitute",
            "https://www.instagram.com/al.huda.islamicinstitute",
            "https://www.youtube.com/@al.huda.islamicinstitute",
            "https://www.tiktok.com/@al.huda.islamicinstitute",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Al Huda International Islamic Institute",
          url: "https://al-hudainternationalinstitute.lovable.app",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://al-hudainternationalinstitute.lovable.app/?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
