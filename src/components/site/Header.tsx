import { Link } from "@tanstack/react-router";
import { Phone, Mail, Globe2, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { TRIAL_WA_URL } from "@/lib/trial";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/teachers", label: "Teachers" },
  { to: "/pricing", label: "Pricing" },
  { to: "/sadaqah", label: "Sadaqah" },
  { to: "/islamic", label: "Islamic" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top utility bar (desktop only) */}
      <div className="hidden md:block bg-primary text-primary-foreground text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-9">
          <div className="flex items-center gap-5 text-primary-foreground/80">
            <a href="tel:+923141766950" className="flex items-center gap-1.5 hover:text-gold transition-colors"><Phone className="h-3.5 w-3.5 text-gold" /> +92 314 1766950</a>
            <a href="mailto:info@alhudaislamicinstitute.com" className="flex items-center gap-1.5 hover:text-gold transition-colors"><Mail className="h-3.5 w-3.5 text-gold" /> info@alhudaislamicinstitute.com</a>
          </div>
          <div className="flex items-center gap-1.5 text-primary-foreground/80">
            <Globe2 className="h-3.5 w-3.5 text-gold" /> Riyadh, Saudi Arabia · Serving 30+ countries · 24/7 support
          </div>
        </div>
      </div>

      <div className="border-b border-border/60 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2.5 sm:px-6 sm:py-3">
          <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2 group shrink-0 min-w-0">
            <img src={logo} alt="Al Huda International Islamic Institute logo" width={48} height={48} className="h-10 w-10 sm:h-12 sm:w-12 object-contain drop-shadow shrink-0" />
            <span className="flex flex-col leading-tight min-w-0">
              <span className="font-display text-sm sm:text-lg font-bold tracking-wide text-primary truncate">AL HUDA</span>
              <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.22em] text-gold font-semibold truncate">International Islamic Institute</span>
            </span>
          </Link>

          <div className="flex items-center gap-2 shrink-0">
            <a href={TRIAL_WA_URL} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center rounded-md bg-gradient-gold px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-primary shadow-gold hover:opacity-95 transition-opacity">
              Free Trial
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md text-primary hover:bg-accent transition-colors"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:block border-t border-border/50 bg-background/95">
          <div className="mx-auto max-w-7xl px-2 sm:px-4">
            <div className="flex items-center gap-1 py-1.5">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md whitespace-nowrap"
                  activeProps={{ className: "px-3 py-2 text-sm font-semibold text-primary rounded-md bg-accent whitespace-nowrap" }}
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile menu drawer */}
      {open && (
        <>
          <div className="lg:hidden fixed inset-0 top-[60px] bg-black/50 backdrop-blur-sm z-30" onClick={() => setOpen(false)} />
          <nav className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 z-40 bg-background border-t border-border/60 overflow-y-auto">
            <div className="px-4 py-4 flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3.5 text-base font-medium text-foreground/85 hover:bg-accent hover:text-primary rounded-lg transition-colors"
                  activeProps={{ className: "block px-4 py-3.5 text-base font-semibold text-primary bg-accent rounded-lg" }}
                >
                  {n.label}
                </Link>
              ))}
              <a href={TRIAL_WA_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="mt-3 inline-flex items-center justify-center rounded-md bg-gradient-gold px-5 py-3.5 text-base font-semibold text-primary shadow-gold">
                Start Free Trial
              </a>
              <a href="tel:+923141766950" className="mt-2 flex items-center justify-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-primary">
                <Phone className="h-4 w-4 text-gold" /> +92 314 1766950
              </a>
              <a href="mailto:info@alhudaislamicinstitute.com" className="flex items-center justify-center gap-2 rounded-md border border-border px-5 py-3 text-xs font-medium text-primary break-all">
                <Mail className="h-4 w-4 text-gold shrink-0" /> info@alhudaislamicinstitute.com
              </a>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
