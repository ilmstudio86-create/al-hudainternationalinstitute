import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/service-policy")({
  head: () => ({
    meta: [
      { title: "Service Policy - Al Huda International Islamic Institute" },
      { name: "description", content: "Description of the online educational services provided by Al Huda International Islamic Institute." },
      { property: "og:title", content: "Service Policy - Al Huda International Islamic Institute" },
      { property: "og:description", content: "Description of the online educational services provided by Al Huda International Islamic Institute." },
    ],
  }),
  component: ServicePolicy,
});

const services = [
  { name: "Quran Reading (Nazra)", desc: "Learn to read the Quran with correct pronunciation from the basics, suitable for all ages." },
  { name: "Tajweed", desc: "Master the rules of Tajweed to recite the Quran beautifully and accurately." },
  { name: "Hifz (Memorization)", desc: "Structured memorization programs with revision plans tailored to each student's pace." },
  { name: "Arabic Language", desc: "Learn to read, write and understand classical and modern Arabic." },
  { name: "Islamic Studies", desc: "Comprehensive lessons on Islamic beliefs, history, etiquette and daily practices." },
  { name: "Tafseer", desc: "Understand the meanings and context of the Quran through guided Tafseer classes." },
];

function ServicePolicy() {
  return (
    <Layout>
      <PageHero title="Service Policy" subtitle="What we offer and how our classes are delivered." arabic="سِيَاسَةُ الْخِدْمَة" />

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <div className="rounded-xl border border-border/70 bg-card p-8 mb-10">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Al Huda International Islamic Institute provides online Quran Reading, Tajweed, Hifz, Arabic Language, Islamic Studies, Tafseer, and other Islamic education courses for children and adults worldwide.
          </p>
        </div>

        <h2 className="font-display text-2xl font-bold text-primary mb-6">Our Courses</h2>
        <div className="grid gap-4 sm:grid-cols-2 mb-12">
          {services.map((s, i) => (
            <div key={i} className="rounded-xl border border-border/70 bg-card p-6">
              <h3 className="font-semibold text-primary mb-2">{s.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <div className="rounded-xl border border-border/70 bg-card p-6">
            <h2 className="font-display text-xl font-bold text-primary mb-3">Class Delivery</h2>
            <p className="text-muted-foreground leading-relaxed">
              All classes are conducted online through platforms such as Zoom or Google Meet. We do not sell or deliver any physical products; therefore, no shipping is required.
            </p>
          </div>

          <div className="rounded-xl border border-border/70 bg-card p-6">
            <h2 className="font-display text-xl font-bold text-primary mb-3">Availability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are available to students worldwide according to the selected class schedule and package. Classes are offered across all time zones to accommodate students in 30+ countries.
            </p>
          </div>

          <div className="rounded-xl border border-border/70 bg-card p-6">
            <h2 className="font-display text-xl font-bold text-primary mb-3">Languages</h2>
            <p className="text-muted-foreground leading-relaxed">
              Classes are available in English, Urdu, Arabic and other languages to ensure every student learns in the language they are most comfortable with.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-primary p-8 text-center text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 pattern-bg" />
          <div className="relative">
            <h3 className="font-display text-2xl font-bold text-gold mb-2">Explore our courses</h3>
            <p className="text-primary-foreground/85 mb-5">Find the right program for you or your child.</p>
            <Link to="/courses" className="inline-flex items-center rounded-md bg-gradient-gold px-6 py-3 font-semibold text-primary shadow-gold hover:scale-[1.02] transition-transform">View Courses</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
