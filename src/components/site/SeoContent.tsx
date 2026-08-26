import { Link } from "@tanstack/react-router";

/**
 * Presentational helpers for SEO copy blocks.
 * These add content only - they never replace existing sections.
 */

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.to ? (
              <Link to={item.to} className="hover:text-gold transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground/80 font-medium" aria-current="page">
                {item.label}
              </span>
            )}
            {i < items.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function SeoSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`mx-auto max-w-4xl px-4 py-14 sm:px-6 ${className}`}>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

export function SeoH2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl sm:text-3xl font-bold text-primary leading-tight">{children}</h2>;
}

export function SeoH3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg sm:text-xl font-semibold text-primary mt-6">{children}</h3>;
}

export function SeoP({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">{children}</p>;
}

export function SeoList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-2 text-[15px] text-foreground/80">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
