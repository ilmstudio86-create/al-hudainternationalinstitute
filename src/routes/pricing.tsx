import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Check, Star, Globe2 } from "lucide-react";
import { useState } from "react";
import { TRIAL_WA_URL } from "@/lib/trial";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing & Plans — Al-Iqra Global" },
      { name: "description", content: "Country-wise affordable monthly Quran class plans — 2, 3 or 5 days a week. Free 3-day trial, no credit card required." },
      { property: "og:title", content: "Pricing — Al-Iqra Global" },
      { property: "og:description", content: "Transparent country-wise monthly pricing for one-on-one Quran classes." },
    ],
  }),
  component: Pricing,
});

type Region = {
  code: string;
  label: string;
  flag: string;
  currency: string;
  prices: { Starter: string; Standard: string; Intensive: string };
};

const regions: Region[] = [
  { code: "US", label: "United States", flag: "🇺🇸", currency: "USD", prices: { Starter: "$40", Standard: "$55", Intensive: "$80" } },
  { code: "CA", label: "Canada", flag: "🇨🇦", currency: "CAD", prices: { Starter: "C$50", Standard: "C$70", Intensive: "C$100" } },
  { code: "UK", label: "United Kingdom", flag: "🇬🇧", currency: "GBP", prices: { Starter: "£30", Standard: "£45", Intensive: "£65" } },
  { code: "IE", label: "Ireland", flag: "🇮🇪", currency: "EUR", prices: { Starter: "€35", Standard: "€50", Intensive: "€75" } },
  { code: "AU", label: "Australia", flag: "🇦🇺", currency: "AUD", prices: { Starter: "A$55", Standard: "A$75", Intensive: "A$110" } },
  { code: "NZ", label: "New Zealand", flag: "🇳🇿", currency: "NZD", prices: { Starter: "NZ$60", Standard: "NZ$80", Intensive: "NZ$115" } },
  { code: "SA", label: "Saudi Arabia", flag: "🇸🇦", currency: "SAR", prices: { Starter: "SAR 150", Standard: "SAR 200", Intensive: "SAR 300" } },
  { code: "QA", label: "Qatar", flag: "🇶🇦", currency: "QAR", prices: { Starter: "QAR 150", Standard: "QAR 200", Intensive: "QAR 300" } },
  { code: "AE", label: "UAE", flag: "🇦🇪", currency: "AED", prices: { Starter: "AED 150", Standard: "AED 200", Intensive: "AED 300" } },
  { code: "MY", label: "Malaysia", flag: "🇲🇾", currency: "MYR", prices: { Starter: "RM 170", Standard: "RM 230", Intensive: "RM 340" } },
  { code: "PK", label: "Pakistan", flag: "🇵🇰", currency: "PKR", prices: { Starter: "Rs 4,000", Standard: "Rs 5,500", Intensive: "Rs 8,000" } },
];

const planMeta = [
  { name: "Starter" as const, days: "2 days / week", classes: "8 classes / month", popular: false, perks: ["30-min one-on-one classes", "Certified teacher", "Progress reports", "Flexible timing"] },
  { name: "Standard" as const, days: "3 days / week", classes: "12 classes / month", popular: true, perks: ["30-min one-on-one classes", "Certified Hafiz / Qari", "Monthly assessment", "Sibling discount", "Free 3-day trial"] },
  { name: "Intensive" as const, days: "5 days / week", classes: "20 classes / month", popular: false, perks: ["45-min one-on-one classes", "Hifz / Tajweed track", "Weekly Sabqi & Manzil", "Parent access portal", "Priority support"] },
];

function Pricing() {
  const [region, setRegion] = useState<Region>(regions[0]);

  return (
    <Layout>
      <PageHero arabic="الأَسْعَارُ" title="Country-Wise Pricing" subtitle="Fees adjusted fairly for every country — Free 3-day trial included." />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        {/* Country selector */}
        <div className="rounded-2xl border border-border/70 bg-card p-5 sm:p-6 mb-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary shadow-gold">
                <Globe2 className="h-5 w-5 text-gold" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Select your country</p>
                <p className="text-sm text-muted-foreground">Pricing automatically updates for your region.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {regions.map((r) => (
                <button
                  key={r.code}
                  onClick={() => setRegion(r)}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
                    region.code === r.code
                      ? "border-gold bg-gradient-gold text-primary shadow-gold"
                      : "border-border bg-background text-foreground/80 hover:border-gold/60 hover:text-primary"
                  }`}
                >
                  <span>{r.flag}</span> {r.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {planMeta.map((p) => (
            <div key={p.name} className={`relative rounded-2xl border bg-card p-8 transition-all ${p.popular ? "border-gold shadow-gold scale-[1.02]" : "border-border/70 hover:shadow-elegant hover:border-gold/40"}`}>
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-gold px-4 py-1 text-xs font-semibold text-primary shadow-gold">
                  <Star className="h-3 w-3 fill-primary" /> Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl font-bold text-primary">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.days} · {p.classes}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="font-display text-5xl font-bold text-primary">{region.prices[p.name]}</span>
                <span className="text-sm text-muted-foreground mb-2">/ month</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{region.flag} {region.label} · {region.currency}</p>
              <ul className="mt-6 space-y-3">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15">
                      <Check className="h-3 w-3 text-gold" strokeWidth={3} />
                    </span>
                    <span className="text-foreground/80">{perk}</span>
                  </li>
                ))}
              </ul>
              <a href={TRIAL_WA_URL} target="_blank" rel="noopener noreferrer" className={`mt-7 inline-flex w-full items-center justify-center rounded-md px-5 py-3 font-semibold transition-all ${p.popular ? "bg-gradient-gold text-primary shadow-gold hover:scale-[1.02]" : "bg-primary text-primary-foreground hover:bg-primary-glow"}`}>
                Start Free Trial
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Pricing varies by country to remain fair and accessible. Discounts available for siblings, families and Hifz students. Need a custom plan? <Link to="/contact" className="text-gold font-semibold hover:underline">Contact us</Link>.
        </p>
      </section>
    </Layout>
  );
}
