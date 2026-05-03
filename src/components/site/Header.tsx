import { Link } from "@tanstack/react-router";
import { Moon, Phone, Mail, Globe2 } from "lucide-react";
import { TRIAL_WA_URL } from "@/lib/trial";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/teachers", label: "Teachers" },
  { to: "/pricing", label: "Pricing" },
  { to: "/sadaqah", label: "Sadaqah" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
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
            <Globe2 className="h-3.5 w-3.5 text-gold" /> Auckland, New Zealand · Serving 30+ countries · 24/7 support
          </div>
        </div>
      </div>

      <div className="border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-primary shadow-gold ring-1 ring-gold/40">
              <Moon className="h-5 w-5 text-gold" strokeWidth={2.2} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base sm:text-lg font-bold tracking-wide text-primary">AL HUDA</span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-gold font-semibold">International Islamic Institute</span>
            </span>
          </Link>

          <a href={TRIAL_WA_URL} target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center rounded-md bg-gradient-gold px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-primary shadow-gold hover:opacity-95 transition-opacity">
            Free Trial
          </a>
        </div>

        {/* Always-visible nav (horizontally scrollable on mobile, no hamburger) */}
        <nav className="border-t border-border/50 bg-background/95">
          <div className="mx-auto max-w-7xl px-2 sm:px-4">
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1.5">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="shrink-0 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md whitespace-nowrap"
                  activeProps={{ className: "shrink-0 px-3 py-2 text-sm font-semibold text-primary rounded-md bg-accent whitespace-nowrap" }}
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
