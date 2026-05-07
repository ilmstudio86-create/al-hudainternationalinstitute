import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { CheckCircle2, ArrowRight, BookOpen, Calendar, User } from "lucide-react";
import { TRIAL_WA_URL } from "@/lib/trial";
import quranImg from "@/assets/quran.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Al Huda Islamic Institute | Online Quran Learning Articles" },
      { name: "description", content: "Read expert articles on online Quran learning, Hifz, Tajweed, Islamic education for kids and Muslim family guidance from Al Huda Islamic Institute." },
      { name: "keywords", content: "online quran academy, quran blog, islamic education blog, quran for kids, hifz tips, tajweed lessons" },
      { property: "og:title", content: "Blog — Al Huda Islamic Institute" },
      { property: "og:description", content: "Articles on online Quran learning, Hifz, Tajweed and Islamic education for Muslim families worldwide." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: quranImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Al Huda Islamic Institute Blog",
          url: "https://alhudaislamicinstitute.com/blog",
          publisher: {
            "@type": "Organization",
            name: "Al Huda International Islamic Institute",
          },
          blogPost: [
            {
              "@type": "BlogPosting",
              headline: "Best Online Quran Academy for Kids and Adult Muslim Families",
              datePublished: "2026-05-07",
              author: { "@type": "Organization", name: "Al Huda Islamic Institute" },
              image: "https://alhudaislamicinstitute.com/og-image.jpg",
            },
          ],
        }),
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const features = [
    "Certified Hafiz, Qari & female scholars",
    "One-on-one live classes via Zoom",
    "Courses for kids and adults",
    "Nazra, Hifz, Tajweed, Tafseer, Arabic & Islamic Studies",
    "Flexible timings for busy families",
    "Affordable monthly fee",
    "Free trial class available",
  ];

  return (
    <Layout>
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gold mb-3">Al Huda Blog</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-gold mb-4 leading-tight">Islamic Education Insights for Muslim Families</h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-primary-foreground/90 leading-relaxed">
            Guidance, tips, and articles on online Quran learning, Hifz, Tajweed, and raising children in the light of Islam.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-gold" /> May 7, 2026</span>
          <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5 text-gold" /> Al Huda Islamic Institute</span>
          <span className="flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5 text-gold" /> Online Quran Education</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold text-primary leading-tight mb-6">
          Best Online Quran Academy for Kids and Adult Muslim Families
        </h2>

        <img src={quranImg} alt="Holy Quran on a wooden rehal — best online Quran academy for Muslim families" className="rounded-2xl shadow-elegant w-full mb-8" loading="lazy" />

        <div className="prose prose-lg max-w-none text-foreground/85">
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            Finding a trusted <strong>online Quran academy</strong> for your family is very important. Al Huda Islamic Institute has been serving Muslim families across <strong>30+ countries</strong> with authentic Islamic education — combining classical scholarship with modern, convenient online classes that fit the busy schedules of today's families in the USA, UK, Canada, Australia, and beyond.
          </p>

          <h3 className="text-xl sm:text-2xl font-bold text-primary mt-10 mb-4">What Makes Us Different</h3>
          <ul className="space-y-3 mb-8">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-base">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl sm:text-2xl font-bold text-primary mt-10 mb-4">Why Muslim Parents Choose Al Huda</h3>
          <p className="leading-relaxed mb-4">
            Our certified male and female teachers — including Hafiz al-Quran and Islamic scholars — provide a comfortable, professional learning environment where children and adults can grow in faith at their own pace. From a child's very first Qaida letter to a parent's deeper study of Tafseer, every student receives one-on-one attention.
          </p>
          <p className="leading-relaxed mb-8">
            Join thousands of Muslim families who trust <strong>Al Huda Islamic Institute</strong> for their children's Islamic education. Enroll today at <a href="https://alhudaislamicinstitute.com" className="text-primary font-semibold underline">alhudaislamicinstitute.com</a>.
          </p>

          <div className="rounded-2xl bg-gradient-primary text-primary-foreground p-8 text-center mt-10">
            <h4 className="text-xl sm:text-2xl font-bold text-gold mb-3">Ready to Start Learning?</h4>
            <p className="text-primary-foreground/90 mb-6">Book your free trial class today — no credit card required.</p>
            <a href={TRIAL_WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 font-semibold text-primary shadow-gold hover:scale-[1.03] transition-transform">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-16">
        <h3 className="text-2xl font-bold text-primary mb-6">Explore More</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <Link to="/courses" className="rounded-xl border border-border p-5 hover:shadow-elegant transition-shadow">
            <h4 className="font-semibold text-primary mb-1">Our Courses</h4>
            <p className="text-sm text-muted-foreground">Nazra, Hifz, Tajweed, Tafseer & more.</p>
          </Link>
          <Link to="/teachers" className="rounded-xl border border-border p-5 hover:shadow-elegant transition-shadow">
            <h4 className="font-semibold text-primary mb-1">Our Teachers</h4>
            <p className="text-sm text-muted-foreground">Certified Hafiz, Qari & female scholars.</p>
          </Link>
          <Link to="/pricing" className="rounded-xl border border-border p-5 hover:shadow-elegant transition-shadow">
            <h4 className="font-semibold text-primary mb-1">Pricing</h4>
            <p className="text-sm text-muted-foreground">Affordable monthly plans for every family.</p>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
