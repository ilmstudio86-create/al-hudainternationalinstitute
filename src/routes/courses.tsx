import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { BookOpen, Sparkles, Mic2, Library, Languages, ScrollText, Baby, ArrowRight } from "lucide-react";
import { Breadcrumbs, SeoSection, SeoH2, SeoH3, SeoP, SeoList, breadcrumbSchema } from "@/components/site/SeoContent";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Online Quran Courses for Kids & Adults | Al Huda Institute" },
      { name: "description", content: "Explore our online Quran courses: Nazra, Hifz, Tajweed and Qirat, Tafseer, Arabic language, Islamic Studies and a dedicated Kids Quran Program for ages 4-12." },
      { property: "og:title", content: "Online Quran Courses for Kids & Adults | Al Huda Institute" },
      { property: "og:description", content: "Structured curricula for every age and level. Book a free trial today." },
      { property: "og:url", content: "https://alhudaislamicinstitute.com/courses" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://alhudaislamicinstitute.com/courses" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: "https://alhudaislamicinstitute.com/" },
        { name: "Courses", url: "https://alhudaislamicinstitute.com/courses" },
      ])),
    }],
  }),
  component: Courses,
});

const courses = [
  { icon: BookOpen, title: "Nazra-e-Quran", desc: "Learn to read the Holy Quran fluently with correct pronunciation, starting from Qaida.", duration: "3-6 months", level: "Beginner" },
  { icon: Sparkles, title: "Hifz ul Quran", desc: "Complete memorization program with daily Sabaq, Sabqi and Manzil under expert Hifz Masters.", duration: "2-4 years", level: "All ages" },
  { icon: Mic2, title: "Tajweed & Qirat", desc: "Master the rules of recitation, Makharij and beautiful Qirat in classical styles.", duration: "6-12 months", level: "Intermediate" },
  { icon: Library, title: "Islamic Studies", desc: "Aqeedah, Fiqh, Seerah, Hadith and Akhlaq - a complete grounding in Deen.", duration: "Ongoing", level: "All levels" },
  { icon: Languages, title: "Arabic Language", desc: "Conversational and Quranic Arabic - taught by Masters in Arabic Language.", duration: "12 months", level: "Beginner-Advanced" },
  { icon: ScrollText, title: "Tafseer ul Quran", desc: "Word-by-word meaning, classical Tafseer and contextual understanding of every Surah.", duration: "Ongoing", level: "Intermediate+" },
  { icon: Baby, title: "Kids Quran Program", desc: "Engaging, age-appropriate Quran &amp; Islamic learning designed for children 4-12.", duration: "Flexible", level: "Kids" },
];

function Courses() {
  return (
    <Layout>
      <PageHero arabic="دُورَاتُنَا" title="Online Quran Courses for Kids & Adults" subtitle="Comprehensive Quran and Islamic education tailored for every learner." />

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

      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Courses" }]} />

      <SeoSection>
        <div>
          <SeoH2>Online Quran Courses for Different Learning Levels</SeoH2>
          <SeoP>
            Every learner starts from a different place. Our online Quran courses are arranged in clear stages, from
            recognising Arabic letters in Qaida to fluent Nazra recitation, full Hifz, advanced Tajweed and Tafseer.
            Each student is placed at the right level after a short assessment in the free trial class.
          </SeoP>
          <SeoH3>Quran Reading Courses (Qaida and Nazra)</SeoH3>
          <SeoP>
            Beginners of any age learn Arabic letters, harakat, joining rules and fluent reading of the Holy Quran with
            correct pronunciation, supported by daily practice and revision.
          </SeoP>
          <SeoH3>Hifz and Tajweed Courses</SeoH3>
          <SeoP>
            Memorisation students follow a structured Sabaq, Sabqi and Manzil routine with a dedicated Hafiz teacher,
            while Tajweed and Qirat students focus on Makharij, rules of recitation and beautiful classical styles.
          </SeoP>
          <SeoH3>Tafseer, Arabic and Islamic Studies</SeoH3>
          <SeoP>
            Older students and adults can study word-by-word meaning, classical Tafseer, conversational and Quranic
            Arabic, plus Aqeedah, Fiqh, Seerah, Hadith and Akhlaq.
          </SeoP>
        </div>

        <div>
          <SeoH2>Which Online Quran Course Is Right for You?</SeoH2>
          <SeoList
            items={[
              "Complete beginner or young child: start with Qaida and Nazra-e-Quran",
              "Can read but wants accuracy: choose Tajweed and Qirat",
              "Aiming to memorise the Quran: enrol in the Hifz ul Quran program",
              "Wants to understand meaning: take Tafseer or Arabic Language",
              "Children aged 4 to 12: the Kids Quran Program is designed for them",
              "Adults returning to study: flexible evening and weekend slots",
            ]}
          />
          <SeoP>
            Not sure where to begin? See our <Link to="/pricing" className="text-gold font-semibold hover:underline">class fees and plans</Link>,
            meet the <Link to="/teachers" className="text-gold font-semibold hover:underline">qualified Quran teachers</Link> who will guide you,
            or <Link to="/contact" className="text-gold font-semibold hover:underline">contact us</Link> to book a free trial class.
          </SeoP>
        </div>
      </SeoSection>

    </Layout>
  );
}
