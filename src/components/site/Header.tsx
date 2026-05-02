import { Link } from "@tanstack/react-router";
import { Moon, Menu, X, Phone, Mail, Globe2 } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/teachers", label: "Teachers" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top utility bar */}
      <div className="hidden md:block bg-primary text-primary-foreground text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-9">
          <div className="flex items-center gap-5 text-primary-foreground/80">
            <a href="tel:+923141766950" className="flex items-center gap-1.5 hover:text-gold transition-colors"><Phone className="h-3.5 w-3.5 text-gold" /> +92 314 1766950</a>
            <a href="mailto:info@aliqraglobal.com" className="flex items-center gap-1.5 hover:text-gold transition-colors"><Mail className="h-3.5 w-3.5 text-gold" /> info@aliqraglobal.com</a>
          </div>
          <div className="flex items-center gap-1.5 text-primary-foreground/80">
            <Globe2 className="h-3.5 w-3.5 text-gold" /> Serving 30+ countries · 24/7 support
          </div>
        </div>
      </div>

      <div className="border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-primary shadow-gold ring-1 ring-gold/40">
              <Moon className="h-5 w-5 text-gold" strokeWidth={2.2} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-bold tracking-wide text-primary">AL-IQRA GLOBAL</span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-gold font-semibold">Quran &amp; Islamic Institute</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-3.5 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md"
                activeProps={{ className: "px-3.5 py-2 text-sm font-semibold text-primary rounded-md bg-accent" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link to="/contact" className="inline-flex items-center rounded-md bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-primary shadow-gold hover:opacity-95 transition-opacity">
              Free Trial
            </Link>
          </div>

          <button aria-label="Toggle menu" className="lg:hidden p-2 text-primary" onClick={() => setOpen((v) => !v)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent" activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-primary bg-accent" }}>
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-md bg-gradient-gold px-4 py-2.5 text-sm font-semibold text-primary">
              Book Free Trial
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
