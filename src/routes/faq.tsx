import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Al Huda International Islamic Institute" },
      { name: "description", content: "Frequently asked questions about online Quran classes, fees, teachers, trial classes and more at Al Huda International Islamic Institute." },
      { property: "og:title", content: "FAQ — Al Huda International Islamic Institute" },
      { property: "og:description", content: "Everything you need to know about studying with Al Huda International Islamic Institute." },
    ],
  }),
  component: FAQ,
});

const faqs = [
  { q: "How does the free trial work?", a: "Book your trial through our contact form or WhatsApp. You'll get 3 free days of 30-minute one-on-one live classes with a certified teacher — no credit card or commitment required." },
  { q: "What software do I need for online classes?", a: "Just a phone, tablet or computer with internet. We use Zoom, Google Meet or Skype — whichever you prefer. Our team will guide you through the setup." },
  { q: "Are female teachers available for sisters and girls?", a: "Yes. We have qualified female (Hafiza) teachers dedicated to sisters and young girls, ensuring a comfortable and halal learning environment." },
  { q: "What ages do you teach?", a: "We teach students of all ages — from kids as young as 4 years old to adults and seniors. Curriculum is fully adapted to each student's age and level." },
  { q: "How are the teachers qualified?", a: "All our teachers are Hafiz al-Quran, hold Ijazah in Tajweed/Qirat, or are Masters in Arabic & Islamic Studies — graduates of recognized Islamic institutions." },
  { q: "Which countries do you serve?", a: "We currently serve students in Canada, USA, UK, Ireland, Australia, New Zealand, Saudi Arabia, Qatar, UAE, Malaysia and many more — across all time zones." },
  { q: "What payment methods do you accept?", a: "We accept bank transfer, PayPal, Wise, credit/debit cards and major local payment options. All fees are billed monthly with no hidden charges." },
  { q: "Can I switch teachers or change my schedule?", a: "Absolutely. You can request a teacher change or reschedule classes anytime — your comfort and progress are our priority." },
];

function FAQ() {
  return (
    <Layout>
      <PageHero arabic="الأَسْئِلَةُ الشَّائِعَة" title="Frequently Asked Questions" subtitle="Everything you need to know before joining Al Huda International Islamic Institute." />

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border border-border/70 bg-card px-5 data-[state=open]:border-gold/50 data-[state=open]:shadow-elegant">
              <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline py-5">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 rounded-2xl bg-gradient-primary p-8 text-center text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 pattern-bg" />
          <div className="relative">
            <h3 className="font-display text-2xl font-bold text-gold mb-2">Still have questions?</h3>
            <p className="text-primary-foreground/85 mb-5">Our team replies on WhatsApp within minutes.</p>
            <Link to="/contact" className="inline-flex items-center rounded-md bg-gradient-gold px-6 py-3 font-semibold text-primary shadow-gold hover:scale-[1.02] transition-transform">Contact Us</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
