import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { BookOpen, Sparkles, Mic2, Library, Languages, ScrollText, Baby, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Al-Iqra Global Quran Institute" },
      { name: "description", content: "Online Quran courses: Nazra, Hifz, Tajweed & Qirat, Tafseer, Arabic, Islamic Studies and a dedicated Kids Quran Program." },
      { property: "og:title", content: "Online Quran Courses — Al-Iqra Global" },
      { property: "og:description", content: "Structured curricula for every age and level. Book a free trial today." },
    ],
  }),
  component: Courses,
});

const courses = [
  { icon: BookOpen, title: "Nazra-e-Quran", desc: "Learn to read the Holy Quran fluently with correct pronunciation, starting from Qaida.", duration: "3–6 months", level: "Beginner" },
  { icon: Sparkles, title: "Hifz ul Quran", desc: "Complete memorization program with daily Sabaq, Sabqi and Manzil under expert Hifz Masters.", duration: "2–4 years", level: "All ages" },
  { icon: Mic2, title: "Tajweed & Qirat", desc: "Master the rules of recitation, Makharij and beautiful Qirat in classical styles.", duration: "6–12 months", level: "Intermediate" },
  { icon: Library, title: "Islamic Studies", desc: "Aqeedah, Fiqh, Seerah, Hadith and Akhlaq — a complete grounding in Deen.", duration: "Ongoing", level: "All levels" },
  { icon: Languages, title: "Arabic Language", desc: "Conversational and Quranic Arabic — taught by Masters in Arabic Language.", duration: "12 months", level: "Beginner–Advanced" },
  { icon: ScrollText, title: "Tafseer ul Quran", desc: "Word-by-word meaning, classical Tafseer and contextual understanding of every Surah.", duration: "Ongoing", level: "Intermediate+" },
  { icon: Baby, title: "Kids Quran Program", desc: "Engaging, age-appropriate Quran &amp; Islamic learning designed for children 4–12.", duration: "Flexible", level: "Kids" },
];

function Courses() {
  return (
    <Layout>
      <PageHero arabic="دُورَاتُنَا" title="Our Courses" subtitle="Comprehensive Quran and Islamic education tailored for every learner." />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <article key={c.title} className="group flex flex-col rounded-2xl border border-border/70 bg-card p-7 hover:border-gold/60 hover:shadow-elegant transition-all">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary shadow-gold mb-5 ring-1 ring-gold/30">
                <c.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{c.desc}</p>
              <div className="mt-5 flex items-center gap-3 text-xs">
                <span className="rounded-full bg-secondary px-3 py-1 font-medium text-primary">{c.duration}</span>
                <span className="rounded-full border border-gold/40 px-3 py-1 font-medium text-gold">{c.level}</span>
              </div>
              <Link to="/contact" className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-5 py-2.5 font-semibold text-primary shadow-gold hover:scale-[1.02] transition-transform">
                Enroll Now <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
