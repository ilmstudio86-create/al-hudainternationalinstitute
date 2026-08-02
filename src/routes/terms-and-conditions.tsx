import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions - Al Huda International Islamic Institute" },
      { name: "description", content: "The terms and conditions for enrolling in online Quran and Islamic classes at Al Huda International Islamic Institute." },
      { property: "og:title", content: "Terms & Conditions - Al Huda International Islamic Institute" },
      { property: "og:description", content: "The terms and conditions for enrolling in online Quran and Islamic classes at Al Huda International Islamic Institute." },
    ],
  }),
  component: TermsAndConditions,
});

const terms = [
  "Welcome to Al Huda International Islamic Institute. By enrolling in our online classes, you agree to the following Terms & Conditions.",
  "Students are expected to attend all scheduled classes on time.",
  "Monthly tuition fees are expected to be paid in advance before the beginning of each month. However, in exceptional circumstances, the institute may allow classes to continue despite a delay in payment at its sole discretion.",
  "If a student is unable to attend a class, prior notice is appreciated.",
  "Classes missed by the student without prior notice will not be rescheduled.",
  "If a class is missed due to the teacher's or the institute's fault, a make-up class will be arranged at no additional cost.",
  "Students are responsible for ensuring they have a stable internet connection and a suitable device for attending online classes.",
  "The institute reserves the right to make reasonable changes to class schedules due to unforeseen circumstances, with prior notice whenever possible.",
  "The institute may update these Terms & Conditions from time to time. Continued use of our services constitutes acceptance of any revised Terms & Conditions.",
  "By enrolling in our courses, you agree to comply with these Terms & Conditions.",
];

function TermsAndConditions() {
  return (
    <Layout>
      <PageHero title="Terms & Conditions" subtitle="Please read these terms carefully before enrolling in our online classes." arabic="الشَّرُوطُ وَالأَحْكَام" />

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <div className="rounded-xl border border-border/70 bg-card p-8">
          <div className="space-y-5">
            {terms.map((t, i) => (
              <div key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-sm font-bold text-primary">{i + 1}</span>
                <p className="text-muted-foreground leading-relaxed pt-1">{t}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-primary p-8 text-center text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 pattern-bg" />
          <div className="relative">
            <h3 className="font-display text-2xl font-bold text-gold mb-2">Ready to begin?</h3>
            <p className="text-primary-foreground/85 mb-5">Book your free trial class today - no commitment required.</p>
            <Link to="/contact" className="inline-flex items-center rounded-md bg-gradient-gold px-6 py-3 font-semibold text-primary shadow-gold hover:scale-[1.02] transition-transform">Start Free Trial</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
