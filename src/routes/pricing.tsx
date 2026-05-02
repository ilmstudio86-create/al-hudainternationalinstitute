import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Check, Star } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing & Plans — Al-Iqra Global" },
      { name: "description", content: "Affordable monthly Quran class plans — 2, 3 or 5 days a week. Free 3-day trial, no credit card required." },
      { property: "og:title", content: "Pricing — Al-Iqra Global" },
      { property: "og:description", content: "Transparent monthly pricing for one-on-one Quran classes." },
    ],
  }),
  component: Pricing,
});

const plans = [
  { name: "Starter", days: "2 days / week", classes: "8 classes / month", price: "$40", popular: false, perks: ["30-min one-on-one classes", "Certified teacher", "Progress reports", "Flexible timing"] },
  { name: "Standard", days: "3 days / week", classes: "12 classes / month", price: "$55", popular: true, perks: ["30-min one-on-one classes", "Certified Hafiz / Qari", "Monthly assessment", "Sibling discount", "Free 3-day trial"] },
  { name: "Intensive", days: "5 days / week", classes: "20 classes / month", price: "$80", popular: false, perks: ["45-min one-on-one classes", "Hifz / Tajweed track", "Weekly Sabqi & Manzil", "Parent access portal", "Priority support"] },
];

function Pricing() {
  return (
    <Layout>
      <PageHero arabic="الأَسْعَارُ" title="Simple, Honest Pricing" subtitle="Affordable monthly plans — cancel anytime. 1 week free trial included." />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-7 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-2xl border bg-card p-8 transition-all ${p.popular ? "border-gold shadow-gold scale-[1.02]" : "border-border/70 hover:shadow-elegant hover:border-gold/40"}`}>
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-gold px-4 py-1 text-xs font-semibold text-primary shadow-gold">
                  <Star className="h-3 w-3 fill-primary" /> Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl font-bold text-primary">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.days} · {p.classes}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="font-display text-5xl font-bold text-primary">{p.price}</span>
                <span className="text-sm text-muted-foreground mb-2">/ month</span>
              </div>
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
              <Link to="/contact" className={`mt-7 inline-flex w-full items-center justify-center rounded-md px-5 py-3 font-semibold transition-all ${p.popular ? "bg-gradient-gold text-primary shadow-gold hover:scale-[1.02]" : "bg-primary text-primary-foreground hover:bg-primary-glow"}`}>
                Start Free Trial
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Discounts available for siblings, families and Hifz students. Need a custom plan? <Link to="/contact" className="text-gold font-semibold hover:underline">Contact us</Link>.
        </p>
      </section>
    </Layout>
  );
}
