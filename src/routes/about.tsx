import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { SectionDivider } from "@/components/site/SectionDivider";
import { Target, Eye, Award, Heart, BookOpen, Globe2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Al Huda International Islamic Institute" },
      { name: "description", content: "Learn about Al Huda International Islamic Institute — our mission, vision and team of certified Hafiz, Qari and Islamic scholars serving 30+ countries." },
      { property: "og:title", content: "About Al Huda International Islamic Institute" },
      { property: "og:description", content: "Authentic Quran education rooted in tradition, delivered with modern technology." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <PageHero arabic="عَنَّا" title="About Al Huda International Islamic Institute" subtitle="A trusted name in online Quran and Islamic education since 2018." />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 text-center">
        <SectionDivider />
        <h2 className="mt-4 text-3xl font-bold text-primary">Who We Are</h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Al Huda International Islamic Institute is an online academy founded with a single mission — to make authentic Quranic and Islamic education accessible to every Muslim, anywhere in the world. Our team of qualified male and female teachers — including Hafiz, Qaris, and Masters in Arabic and Islamic Studies — deliver structured, one-on-one live classes through a secure online platform. Whether your child is starting their first lesson or you wish to deepen your understanding of Tafseer, we walk with you on a journey of faith and knowledge.
        </p>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-card p-8 shadow-sm border border-border/60">
            <Target className="h-10 w-10 text-gold mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">To enable every Muslim — child or adult — to read, understand and live by the Holy Quran through accessible, authentic and affordable online education delivered by qualified scholars.</p>
          </div>
          <div className="rounded-xl bg-card p-8 shadow-sm border border-border/60">
            <Eye className="h-10 w-10 text-gold mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">To be the world's most trusted online Quran &amp; Islamic institute, nurturing a global generation of practising Muslims rooted in the Quran and Sunnah.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionDivider />
        <h2 className="mt-4 text-center text-3xl font-bold text-primary">Why Choose Us</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Award, title: "Certified Scholars", desc: "Hafiz al-Quran, Qari, and Masters in Arabic & Islamic Studies." },
            { icon: Heart, title: "One-on-One Care", desc: "Personalized attention with structured progress reports." },
            { icon: BookOpen, title: "Authentic Curriculum", desc: "Following classical methodology with modern delivery." },
            { icon: Globe2, title: "30+ Countries", desc: "Trusted by families in USA, UK, Canada, Australia, GCC and more." },
            { icon: Target, title: "Flexible Schedule", desc: "Choose your class times — we cover every time zone." },
            { icon: Eye, title: "Male & Female Teachers", desc: "Comfortable, halal learning environment for every student." },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-border/70 bg-card p-6 hover:shadow-elegant transition-shadow">
              <f.icon className="h-8 w-8 text-gold mb-4" />
              <h3 className="font-semibold text-primary text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 text-center">
          <p className="font-arabic text-4xl text-gold mb-4">وَقُل رَّبِّ زِدْنِي عِلْمًا</p>
          <p className="italic text-primary-foreground/85 mb-8">"And say: My Lord, increase me in knowledge." (Quran 20:114)</p>
          <Link to="/teachers" className="inline-flex items-center rounded-md bg-gradient-gold px-7 py-3.5 font-semibold text-primary shadow-gold">Meet Our Teachers</Link>
        </div>
      </section>
    </Layout>
  );
}
