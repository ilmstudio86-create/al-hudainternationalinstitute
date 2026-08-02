import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Al Huda International Islamic Institute" },
      { name: "description", content: "How Al Huda International Islamic Institute collects, uses and protects your personal information." },
      { property: "og:title", content: "Privacy Policy — Al Huda International Islamic Institute" },
      { property: "og:description", content: "How Al Huda International Islamic Institute collects, uses and protects your personal information." },
    ],
  }),
  component: PrivacyPolicy,
});

const sections = [
  {
    title: "Information We Collect",
    body: "We collect only the information necessary to provide our online Quran and Islamic education services, including your name, email address, phone number, and payment details.",
  },
  {
    title: "How We Use Your Information",
    body: "Your information is used solely to schedule classes, process payments, communicate with you about your lessons, and improve our educational services. We do not use your data for unrelated marketing purposes.",
  },
  {
    title: "Information Security",
    body: "Your personal information is kept secure and is never sold or shared with third parties except where required for payment processing or by law. We use industry-standard safeguards to protect your data.",
  },
  {
    title: "Third-Party Services",
    body: "We use trusted platforms such as Zoom and Google Meet for conducting classes, and reputable payment processors for handling fees. These providers have their own privacy policies governing your data.",
  },
  {
    title: "Cookies & Analytics",
    body: "We use cookies and basic analytics to understand how visitors use our website so we can improve the experience. You can disable cookies in your browser settings at any time.",
  },
  {
    title: "Children's Privacy",
    body: "Many of our students are children. We collect their information only through a parent or guardian who enrolls them. We do not knowingly collect personal information directly from children under 13.",
  },
  {
    title: "Your Rights",
    body: "You may request access to, correction of, or deletion of your personal information at any time by contacting us. We will respond to your request within a reasonable timeframe.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Continued use of our services constitutes acceptance of any revised policy.",
  },
  {
    title: "Consent",
    body: "By using our services, you agree to this Privacy Policy.",
  },
];

function PrivacyPolicy() {
  return (
    <Layout>
      <PageHero title="Privacy Policy" subtitle="Your privacy matters to us at Al Huda International Islamic Institute." arabic="سِيَاسَةُ الْخَصُوصِيَّة" />

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          At Al Huda International Islamic Institute, we value your privacy and are committed to protecting your personal information. This policy explains what we collect and how we use it.
        </p>

        <div className="space-y-8">
          {sections.map((s, i) => (
            <div key={i} className="rounded-xl border border-border/70 bg-card p-6">
              <h2 className="font-display text-xl font-bold text-primary mb-3">{`${i + 1}. ${s.title}`}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-primary p-8 text-center text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 pattern-bg" />
          <div className="relative">
            <h3 className="font-display text-2xl font-bold text-gold mb-2">Questions about your privacy?</h3>
            <p className="text-primary-foreground/85 mb-5">We're happy to answer any questions about how we handle your data.</p>
            <Link to="/contact" className="inline-flex items-center rounded-md bg-gradient-gold px-6 py-3 font-semibold text-primary shadow-gold hover:scale-[1.02] transition-transform">Contact Us</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
