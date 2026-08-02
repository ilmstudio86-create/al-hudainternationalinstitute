import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy - Al Huda International Islamic Institute" },
      { name: "description", content: "Refund and cancellation policy for online Quran and Islamic classes at Al Huda International Islamic Institute." },
      { property: "og:title", content: "Refund Policy - Al Huda International Islamic Institute" },
      { property: "og:description", content: "Refund and cancellation policy for online Quran and Islamic classes at Al Huda International Islamic Institute." },
    ],
  }),
  component: RefundPolicy,
});

function RefundPolicy() {
  return (
    <Layout>
      <PageHero title="Refund Policy" subtitle="Our policy on refunds, cancellations and billing." arabic="سِيَاسَةُ الِاسْتِرْدَاد" />

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <div className="space-y-8">
          <div className="rounded-xl border border-border/70 bg-card p-6">
            <h2 className="font-display text-xl font-bold text-primary mb-3">1. Non-Refundable Fees</h2>
            <p className="text-muted-foreground leading-relaxed">
              As we provide digital educational services, all tuition fees are generally non-refundable once classes have been scheduled or delivered.
            </p>
          </div>

          <div className="rounded-xl border border-border/70 bg-card p-6">
            <h2 className="font-display text-xl font-bold text-primary mb-3">2. Duplicate Payments & Billing Errors</h2>
            <p className="text-muted-foreground leading-relaxed">
              In the case of a duplicate payment or a billing error, the student or parent should contact us within 7 days. Eligible refund requests will be reviewed and processed accordingly.
            </p>
          </div>

          <div className="rounded-xl border border-border/70 bg-card p-6">
            <h2 className="font-display text-xl font-bold text-primary mb-3">3. Cancellation of Classes</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you wish to discontinue classes, please inform us in advance so we can stop scheduling future lessons and avoid any further charges. Any classes already delivered or scheduled prior to notice remain non-refundable.
            </p>
          </div>

          <div className="rounded-xl border border-border/70 bg-card p-6">
            <h2 className="font-display text-xl font-bold text-primary mb-3">4. How to Request a Refund</h2>
            <p className="text-muted-foreground leading-relaxed">
              To request a refund for an eligible duplicate payment or billing error, please contact us via WhatsApp or email with your payment details and a description of the issue. We aim to respond within 3-5 business days.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-primary p-8 text-center text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 pattern-bg" />
          <div className="relative">
            <h3 className="font-display text-2xl font-bold text-gold mb-2">Have a billing question?</h3>
            <p className="text-primary-foreground/85 mb-5">Reach out and we'll help resolve it quickly.</p>
            <Link to="/contact" className="inline-flex items-center rounded-md bg-gradient-gold px-6 py-3 font-semibold text-primary shadow-gold hover:scale-[1.02] transition-transform">Contact Us</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
