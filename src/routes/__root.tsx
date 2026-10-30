import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import amiriArabicWoff2 from "@fontsource/amiri/files/amiri-arabic-400-normal.woff2?url";
import amiriLatin700Woff2 from "@fontsource/amiri/files/amiri-latin-700-normal.woff2?url";
import interLatinWoff2 from "@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url";


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
      { title: "Online Quran Classes for Kids & Adults  Al Huda Islamic Institute" },
      { name: "description", content: "Best online Quran classes for kids and adults in USA, UK, Canada & Australia. Learn Nazra, Hifz, Tajweed, Tafseer, Arabic & Islamic Studies from certified Hafiz & Qari teachers. Free trial available." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Online Quran Classes for Kids & Adults  Al Huda Islamic Institute" },
      { property: "og:description", content: "Best online Quran classes for kids and adults in USA, UK, Canada & Australia. Learn Nazra, Hifz, Tajweed, Tafseer, Arabic & Islamic Studies from certified Hafiz & Qari teachers. Free trial available." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Online Quran Classes for Kids & Adults  Al Huda Islamic Institute" },
      { name: "twitter:description", content: "Best online Quran classes for kids and adults in USA, UK, Canada & Australia. Learn Nazra, Hifz, Tajweed, Tafseer, Arabic & Islamic Studies from certified Hafiz & Qari teachers. Free trial available." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },

      { rel: "icon", type: "image/png", href: "/logo-v2.png" },
      { rel: "shortcut icon", type: "image/png", href: "/logo-v2.png" },
      { rel: "apple-touch-icon", href: "/logo-v2.png" },
      // Above-the-fold text needs these three faces; preload them so headings
      // and body copy paint in the real fonts instead of a swapped fallback.
      { rel: "preload", as: "font", type: "font/woff2", href: interLatinWoff2, crossOrigin: "anonymous" },
      { rel: "preload", as: "font", type: "font/woff2", href: amiriLatin700Woff2, crossOrigin: "anonymous" },
      { rel: "preload", as: "font", type: "font/woff2", href: amiriArabicWoff2, crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://i.ytimg.com" },
      { rel: "preconnect", href: "https://www.youtube.com" },
    ],

    scripts: [
      {
        // Analytics and ads are completely non-essential on first paint. They are
        // only injected on the visitor's first interaction (scroll, tap, key) so
        // they never compete with the hero image, fonts or hydration for bandwidth
        // or main-thread time.
        children: `(function(){var d=document;window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-5KW34H6113');var evs=['scroll','pointerdown','keydown','touchstart','wheel'];var loaded=false;var go=function(){if(loaded)return;loaded=true;for(var i=0;i<evs.length;i++){window.removeEventListener(evs[i],go);}var add=function(src,attrs){var s=d.createElement('script');s.src=src;s.async=true;for(var k in attrs){s.setAttribute(k,attrs[k]);}d.head.appendChild(s);};add('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9656880021275971',{crossorigin:'anonymous'});add('https://www.googletagmanager.com/gtag/js?id=G-5KW34H6113',{});};for(var j=0;j<evs.length;j++){window.addEventListener(evs[j],go,{passive:true});}})();`,
      },

      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Al Huda International Islamic Institute",
          alternateName: "Al Huda Islamic Institute",
          url: "https://alhudaislamicinstitute.com",
          logo: "https://alhudaislamicinstitute.com/logo-v2.png",
          image: "https://alhudaislamicinstitute.com/logo-v2.png",
          email: "alhudaquranedu@gmail.com",
          telephone: "+92-314-1766950",
          foundingDate: "2013",
          address: { "@type": "PostalAddress", addressLocality: "Multan", addressCountry: "PK" },
          description: "Online Quran classes for kids and adults - Nazra, Hifz, Tajweed, Tafseer, Arabic and Islamic Studies taught by certified Hafiz, Qari and female scholars.",
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
          url: "https://alhudaislamicinstitute.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://alhudaislamicinstitute.com/?q={search_term_string}",
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
