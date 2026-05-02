import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export function PageHero({ title, subtitle, arabic }: { title: string; subtitle?: string; arabic?: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-primary text-primary-foreground">
      <div className="absolute inset-0 pattern-bg" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 text-center">
        {arabic && <p className="font-arabic text-4xl text-gold mb-3">{arabic}</p>}
        <h1 className="text-4xl sm:text-5xl font-bold text-gold animate-fade-up">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/85 animate-fade-up">{subtitle}</p>}
      </div>
    </section>
  );
}
