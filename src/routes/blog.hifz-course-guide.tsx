import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Calendar, CheckCircle, User } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import hifzImg from "@/assets/hifz-course-guide.jpg";
import { TRIAL_WA_URL } from "@/lib/trial";

const pageUrl = "https://alhudaislamicinstitute.com/blog/hifz-course-guide";
const title = "Online Hifz Course Guide for Quran Memorization | Al Huda";
const description = "Learn how an online Hifz course helps children and adults memorize the Quran with qualified teachers, structured revision, Tajweed, and steady progress.";

export const Route = createFileRoute("/blog/hifz-course-guide")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "online Hifz course, Quran memorization online, Hifz classes for kids, memorize Quran, Hifz teacher, Quran revision plan" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: pageUrl },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Online Hifz Course Guide: How to Memorize the Quran Successfully",
          description,
          datePublished: "2026-09-12",
          dateModified: "2026-09-12",
          author: { "@type": "Organization", name: "Al Huda International Islamic Institute" },
          publisher: {
            "@type": "Organization",
            name: "Al Huda International Islamic Institute",
            logo: { "@type": "ImageObject", url: "https://alhudaislamicinstitute.com/logo-v2.png" },
          },
          url: pageUrl,
          mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
        }),
      },
    ],
  }),
  component: HifzCourseGuidePage,
});

const steps = [
  {
    title: "1. Begin with an Accurate Recitation Assessment",
    body: "Before memorization starts, a teacher should check the student's Quran reading, pronunciation, Tajweed, concentration, and current memorization level. Beginners may need to strengthen Noorani Qaida or Nazra first. This foundation prevents repeated mistakes from becoming part of the memorized lesson.",
  },
  {
    title: "2. Set a Realistic Daily Hifz Target",
    body: "The right target depends on age, fluency, school or work commitments, and memory strength. A young beginner may start with a few lines, while an experienced student may learn half a page or more. A smaller lesson learned accurately is more valuable than a larger lesson that is quickly forgotten.",
  },
  {
    title: "3. Learn New Verses with Proper Tajweed",
    body: "Students should listen carefully to their teacher, repeat each verse in short sections, and join the sections only after reciting them correctly. Memorizing with proper makharij and Tajweed from the beginning reduces correction work later and helps preserve the Quran as it should be recited.",
  },
  {
    title: "4. Follow a Three-Part Revision System",
    body: "A balanced Hifz lesson includes the new portion, recently memorized pages, and older memorization. The new lesson builds progress, recent revision makes the lesson firm, and long-term revision protects earlier Surahs and Juz from becoming weak. All three parts deserve regular time.",
  },
  {
    title: "5. Recite to a Qualified Teacher Regularly",
    body: "Self-study can support memorization, but a trained teacher notices skipped words, similar verses, pronunciation errors, and weak transitions. One-to-one online classes give the student focused listening time, immediate correction, and a clear lesson for the next class.",
  },
  {
    title: "6. Keep a Consistent Study Routine",
    body: "Choose a quiet time when the mind is fresh, such as after Fajr or before other daily responsibilities begin. Using the same Mushaf, studying in the same place, and reviewing at a fixed time can strengthen visual memory and make Hifz a dependable daily habit.",
  },
  {
    title: "7. Track Progress Without Creating Pressure",
    body: "A simple record of new lessons, revision, mistakes, and completed Surahs helps teachers and families see genuine progress. Children benefit from encouragement for effort and consistency. Speed should never come before accuracy, confidence, and a positive relationship with the Quran.",
  },
];

const courseFeatures = [
  "One-to-one live Hifz classes",
  "Qualified male and female Quran teachers",
  "Personal memorization and revision plan",
  "Tajweed and pronunciation correction",
  "Flexible timings for international students",
  "Regular progress guidance for parents",
  "Programs for children and adults",
  "Free trial class before enrollment",
];

function HifzCourseGuidePage() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 pattern-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold sm:text-sm">Al Huda Blog</p>
          <h1 className="mb-4 text-3xl font-bold leading-tight text-gold sm:text-5xl">
            Online Hifz Course Guide: How to Memorize the Quran Successfully
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            A practical guide to building accurate memorization, strong revision habits, and a lifelong connection with the Quran.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-gold" /> September 12, 2026</span>
          <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5 text-gold" /> Al Huda Islamic Institute</span>
          <span className="flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5 text-gold" /> Hifz and Quran Memorization</span>
        </div>

        <img
          src={hifzImg}
          alt="Young student memorizing the Quran with a notebook during an online Hifz course"
          width={1200}
          height={800}
          className="mb-8 w-full rounded-2xl shadow-elegant"
        />

        <div className="prose prose-lg max-w-none text-foreground/85">
          <p className="mb-6 text-base leading-relaxed sm:text-lg">
            Memorizing the Holy Quran is a blessed journey that requires sincerity, patience, correct recitation, and consistent revision. An <strong>online Hifz course</strong> makes qualified guidance available to students wherever they live while allowing lessons to fit around school, work, and family responsibilities.
          </p>
          <p className="mb-8 leading-relaxed">
            A successful Hifz program is not based on speed alone. It gives every student a manageable plan, careful correction from an experienced teacher, and enough revision to keep earlier memorization strong. This guide explains the essential parts of that process for children and adults.
          </p>

          <h2 className="mb-4 mt-10 text-2xl font-bold text-primary sm:text-3xl">What Is an Online Hifz Course?</h2>
          <p className="mb-6 leading-relaxed">
            An online Hifz course provides live Quran memorization lessons through a phone, tablet, or computer. A teacher listens to the student's lesson, corrects mistakes, tests previous portions, and sets the next target. At Al Huda, students receive personal attention through one-to-one classes rather than following a single pace in a large group.
          </p>

          <h2 className="mb-5 mt-12 text-2xl font-bold text-primary sm:text-3xl">A Step-by-Step Quran Memorization Plan</h2>
          {steps.map((step) => (
            <section key={step.title}>
              <h3 className="mb-4 mt-9 text-xl font-bold text-primary sm:text-2xl">{step.title}</h3>
              <p className="mb-6 leading-relaxed">{step.body}</p>
            </section>
          ))}

          <h2 className="mb-4 mt-12 text-2xl font-bold text-primary sm:text-3xl">How Long Does It Take to Complete Hifz?</h2>
          <p className="mb-6 leading-relaxed">
            There is no single completion time for every student. Age, reading fluency, lesson frequency, daily practice, revision quality, and personal circumstances all affect progress. Some students complete memorization in a few years, while others need longer. A good teacher adjusts the plan when the student needs more consolidation and keeps the goal achievable without weakening accuracy.
          </p>

          <h2 className="mb-4 mt-12 text-2xl font-bold text-primary sm:text-3xl">How Parents Can Support a Child's Hifz</h2>
          <p className="mb-6 leading-relaxed">
            Parents can provide a quiet study space, help maintain the class routine, listen to revision when possible, and stay in contact with the teacher. Gentle encouragement is especially important. Comparing a child with other students or focusing only on completion can create unnecessary pressure. Celebrate consistency, improved recitation, and each Surah completed with confidence.
          </p>

          <h2 className="mb-4 mt-12 text-2xl font-bold text-primary sm:text-3xl">What Al Huda's Online Hifz Program Includes</h2>
          <div className="mb-8 rounded-2xl border border-border bg-muted/50 p-6 sm:p-8">
            <ul className="grid gap-3 sm:grid-cols-2">
              {courseFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm sm:text-base">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="mb-4 mt-12 text-2xl font-bold text-primary sm:text-3xl">Choose the Right Hifz Teacher and Schedule</h2>
          <p className="mb-6 leading-relaxed">
            A patient teacher, a realistic timetable, and a clear revision method can make the memorization journey more stable and rewarding. Explore our <Link to="/courses" className="font-semibold text-primary underline">online Quran courses</Link>, meet our <Link to="/teachers" className="font-semibold text-primary underline">qualified teachers</Link>, and compare <Link to="/pricing" className="font-semibold text-primary underline">class plans and fees</Link> before choosing the best routine for your family.
          </p>

          <h3 className="mb-4 mt-10 text-xl font-bold text-primary sm:text-2xl">Start Your Hifz Journey with a Free Trial</h3>
          <p className="mb-8 leading-relaxed">
            A trial class allows the teacher to assess the student's reading and recommend a suitable starting point. If you have questions about lesson length, revision, or teacher availability, <Link to="/contact" className="font-semibold text-primary underline">contact Al Huda</Link> for personal guidance.
          </p>

          <div className="mt-10 rounded-2xl bg-gradient-primary p-8 text-center text-primary-foreground">
            <h4 className="mb-3 text-xl font-bold text-gold sm:text-2xl">Ready to Begin Memorizing the Quran?</h4>
            <p className="mb-6 text-primary-foreground/90">Book a free one-to-one trial and receive a Hifz plan suited to the student's current level.</p>
            <a href={TRIAL_WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 font-semibold text-primary shadow-gold transition-transform hover:scale-[1.03]">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <h3 className="mb-6 text-2xl font-bold text-primary">Explore More</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <Link to="/blog" className="rounded-xl border border-border p-5 transition-shadow hover:shadow-elegant">
            <h4 className="mb-1 font-semibold text-primary">Quran Learning Blog</h4>
            <p className="text-sm text-muted-foreground">Read more guidance for students and families.</p>
          </Link>
          <Link to="/courses" className="rounded-xl border border-border p-5 transition-shadow hover:shadow-elegant">
            <h4 className="mb-1 font-semibold text-primary">Hifz and Quran Courses</h4>
            <p className="text-sm text-muted-foreground">Find a suitable learning program and schedule.</p>
          </Link>
          <Link to="/teachers" className="rounded-xl border border-border p-5 transition-shadow hover:shadow-elegant">
            <h4 className="mb-1 font-semibold text-primary">Meet Our Teachers</h4>
            <p className="text-sm text-muted-foreground">Learn with qualified male and female teachers.</p>
          </Link>
        </div>
      </section>
    </Layout>
  );
}