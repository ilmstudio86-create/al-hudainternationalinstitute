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

type PlanKey = "Weekend" | "TwoDays" | "ThreeDays" | "FiveDays30" | "FiveDays45";

type Region = {
  code: string;
  label: string;
  flag: string;
  currency: string;
  symbol: string;
  rate: number; // multiplier vs USD base
  rounding: number; // round to nearest
};

const regions: Region[] = [
  { code: "US", label: "United States", flag: "🇺🇸", currency: "USD", symbol: "$", rate: 1, rounding: 1 },
  { code: "CA", label: "Canada", flag: "🇨🇦", currency: "CAD", symbol: "C$", rate: 1.35, rounding: 1 },
  { code: "UK", label: "United Kingdom", flag: "🇬🇧", currency: "GBP", symbol: "£", rate: 0.8, rounding: 1 },
  { code: "IE", label: "Ireland", flag: "🇮🇪", currency: "EUR", symbol: "€", rate: 0.92, rounding: 1 },
  { code: "AU", label: "Australia", flag: "🇦🇺", currency: "AUD", symbol: "A$", rate: 1.5, rounding: 1 },
  { code: "NZ", label: "New Zealand", flag: "🇳🇿", currency: "NZD", symbol: "NZ$", rate: 1.65, rounding: 1 },
  { code: "SA", label: "Saudi Arabia", flag: "🇸🇦", currency: "SAR", symbol: "SAR ", rate: 3.75, rounding: 5 },
  { code: "QA", label: "Qatar", flag: "🇶🇦", currency: "QAR", symbol: "QAR ", rate: 3.65, rounding: 5 },
  { code: "AE", label: "UAE", flag: "🇦🇪", currency: "AED", symbol: "AED ", rate: 3.67, rounding: 5 },
  { code: "MY", label: "Malaysia", flag: "🇲🇾", currency: "MYR", symbol: "RM ", rate: 4.7, rounding: 5 },
  { code: "PK", label: "Pakistan", flag: "🇵🇰", currency: "PKR", symbol: "Rs ", rate: 280, rounding: 100 },
];

const basePrices: Record<PlanKey, number> = {
  Weekend: 35,
  TwoDays: 35,
  ThreeDays: 40,
  FiveDays30: 50,
  FiveDays45: 80,
};

function formatPrice(region: Region, usd: number) {
  const raw = usd * region.rate;
  const rounded = Math.round(raw / region.rounding) * region.rounding;
  return `${region.symbol}${rounded.toLocaleString()}`;
}

const planMeta: { key: PlanKey; name: string; days: string; classes: string; popular: boolean; perks: string[] }[] = [
  { key: "Weekend", name: "Weekend", days: "Sat & Sun", classes: "8 classes / month · 30 min", popular: false, perks: ["One-on-one with certified teacher", "Perfect for working parents & kids", "Flexible weekend timing", "Free 3-day trial"] },
  { key: "TwoDays", name: "2 Days / Week", days: "2 days / week", classes: "8 classes / month · 30 min", popular: false, perks: ["30-min one-on-one classes", "Certified Hafiz / Qari", "Progress reports", "Sibling discount"] },
  { key: "ThreeDays", name: "3 Days / Week", days: "3 days / week", classes: "12 classes / month · 30 min", popular: true, perks: ["30-min one-on-one classes", "Certified Hafiz / Qari", "Monthly assessments", "Sibling discount", "Free 3-day trial"] },
  { key: "FiveDays30", name: "5 Days / Week", days: "5 days / week", classes: "20 classes / month · 30 min", popular: false, perks: ["Daily consistency for fast progress", "Tajweed & Nazra focus", "Weekly Sabqi & Manzil", "Parent access portal"] },
  { key: "FiveDays45", name: "Intensive Hifz", days: "5 days / week", classes: "20 classes / month · 45 min", popular: false, perks: ["45-min one-on-one classes", "Hifz / advanced Tajweed track", "Daily Sabaq, Sabqi & Manzil", "Priority support"] },
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

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {planMeta.map((p) => (
            <div key={p.key} className={`relative rounded-2xl border bg-card p-8 transition-all ${p.popular ? "border-gold shadow-gold scale-[1.02]" : "border-border/70 hover:shadow-elegant hover:border-gold/40"}`}>
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-gold px-4 py-1 text-xs font-semibold text-primary shadow-gold">
                  <Star className="h-3 w-3 fill-primary" /> Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl font-bold text-primary">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.days} · {p.classes}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="font-display text-5xl font-bold text-primary">{formatPrice(region, basePrices[p.key])}</span>
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

        <div className="mt-10 rounded-2xl border border-gold/40 bg-gold/5 p-6 text-center">
          <p className="font-semibold text-primary mb-1">👨‍👩‍👧‍👦 Family / Sibling Discount</p>
          <p className="text-sm text-foreground/80">
            Have more than one child? We offer a special concession when multiple siblings join — simply mention it on WhatsApp and we'll arrange a discounted family plan for you, In sha Allah.
          </p>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Pricing varies by country to remain fair and accessible. Need a custom plan? <Link to="/contact" className="text-gold font-semibold hover:underline">Contact us</Link>.
        </p>
      </section>
    </Layout>
  );
}
