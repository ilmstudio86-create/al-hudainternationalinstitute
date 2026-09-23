import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Calendar, CheckCircle, Clock, User } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import usaClassesImg from "@/assets/online-quran-classes-usa.jpg";
import { TRIAL_WA_URL } from "@/lib/trial";

const pageUrl = "https://alhudaislamicinstitute.com/blog/online-quran-classes-usa";
const title = "Online Quran Classes for Kids in the USA | Al Huda";
const description = "Live one-to-one online Quran classes for kids across the USA. Qualified male and female teachers, flexible US time zones, and a free trial class.";

const faqs = [
  {
    question: "Are online Quran classes available in every US state?",
    answer: "Yes. Classes are delivered live online, so families can join from every US state, whether they live in a major city, suburb, or smaller town without a nearby Islamic school.",
  },
  {
    question: "How do class times work with different US time zones?",
    answer: "Schedules are arranged individually across Eastern, Central, Mountain, and Pacific time so each family can choose a suitable lesson time.",
  },
  {
    question: "Can my child join after school?",
    answer: "Yes. Most American families choose after-school, evening, or weekend lessons. Morning classes before school may also be available.",
  },
  {
    question: "Is there a free trial class for families in the USA?",
    answer: "Yes. Al Huda offers a free trial so parents and children can experience a live lesson with a qualified teacher before enrolling.",
  },
];

export const Route = createFileRoute("/blog/online-quran-classes-usa")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "online Quran classes for kids USA, Quran teacher online USA, Quran classes for children, online Tajweed classes, Hifz classes USA" },
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
          "@graph": [
            {
              "@type": "BlogPosting",
              headline: "Online Quran Classes for Kids in the USA",
              description,
              datePublished: "2026-09-23",
              dateModified: "2026-09-23",
              author: { "@type": "Organization", name: "Al Huda International Islamic Institute" },
              publisher: {
                "@type": "Organization",
                name: "Al Huda International Islamic Institute",
                logo: { "@type": "ImageObject", url: "https://alhudaislamicinstitute.com/logo-v2.png" },
              },
              url: pageUrl,
              mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: OnlineQuranClassesUsaPage,
});

const courses = [
  "Noorani Qaida and Arabic letter foundations",
  "Quran reading with correct pronunciation and Tajweed",
  "Structured Hifz-ul-Quran with regular revision",
  "Islamic Studies, Hadith, daily Duas, and manners",
  "Arabic language for better understanding",
  "Tafseer-ul-Quran for older and advanced students",
];

function OnlineQuranClassesUsaPage() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 pattern-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold sm:text-sm">Al Huda Blog</p>
          <h1 className="mb-4 text-3xl font-bold leading-tight text-gold sm:text-5xl">Online Quran Classes for Kids in the USA</h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            Live one-to-one Quran education with qualified teachers and flexible schedules for Muslim families across America.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-gold" /> September 23, 2026</span>
          <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5 text-gold" /> Al Huda Islamic Institute</span>
          <span className="flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5 text-gold" /> Quran Classes for Kids</span>
        </div>

        <img
          src={usaClassesImg}
          alt="Muslim girl attending a live online Quran class with a female teacher in the USA"
          width={1200}
          height={800}
          className="mb-8 w-full rounded-2xl shadow-elegant"
        />

        <div className="prose prose-lg max-w-none text-foreground/85">
          <p className="mb-6 text-base leading-relaxed sm:text-lg">
            For Muslim families across the United States, from New York and New Jersey to California, Texas, Illinois, Michigan, and everywhere in between, finding a qualified and patient Quran teacher nearby is not always easy. Long distances between homes and mosques, packed school schedules, and work commutes can make regular in-person classes difficult.
          </p>
          <p className="mb-8 leading-relaxed">
            Al Huda International Islamic Institute brings a live, one-to-one <strong>online Quran academy</strong> directly into American homes, with qualified male and female teachers and timings designed around real family life in the USA.
          </p>

          <h2 className="mb-4 mt-10 text-2xl font-bold text-primary sm:text-3xl">Why American Muslim Families Choose Online Quran Classes</h2>
          <p className="mb-6 leading-relaxed">
            Muslim communities in New York, Chicago, Houston, Los Angeles, Dallas, and Detroit may have several learning options, yet finding a teacher whose schedule matches school, homework, and family commitments can still be challenging. Smaller towns and suburbs often face an even greater gap, with no nearby Quran academy at all.
          </p>
          <p className="mb-6 leading-relaxed">
            Online classes remove that barrier. Instead of travelling after a full school day, your child joins a live lesson from home with a dedicated teacher who focuses entirely on their reading, understanding, and progress.
          </p>

          <h2 className="mb-4 mt-12 text-2xl font-bold text-primary sm:text-3xl">Class Timings Built Around US Time Zones</h2>
          <div className="mb-8 flex gap-4 rounded-2xl border border-border bg-muted/50 p-6 sm:p-8">
            <Clock className="mt-1 h-6 w-6 shrink-0 text-gold" />
            <p className="m-0 leading-relaxed">
              Whether your family follows Eastern, Central, Mountain, or Pacific time, lessons are arranged around your child's routine. Options may include early morning, after-school, evening, and weekend classes. Families across all fifty states can request a time that genuinely fits.
            </p>
          </div>

          <h2 className="mb-4 mt-12 text-2xl font-bold text-primary sm:text-3xl">What Your Child Can Learn</h2>
          <p className="mb-6 leading-relaxed">
            Every child starts from their current level and progresses through a structured learning plan. Our <Link to="/courses" className="font-semibold text-primary underline">online Quran courses</Link> include foundational reading, memorization, Tajweed, and age-appropriate Islamic education.
          </p>
          <div className="mb-8 rounded-2xl border border-border bg-muted/50 p-6 sm:p-8">
            <ul className="grid gap-3 sm:grid-cols-2">
              {courses.map((course) => (
                <li key={course} className="flex items-start gap-2.5 text-sm sm:text-base">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{course}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="mb-4 mt-12 text-2xl font-bold text-primary sm:text-3xl">Teaching Children Raised in America</h2>
          <p className="mb-6 leading-relaxed">
            Many Muslim children growing up in the USA are more comfortable speaking English than Arabic or their parents' first language. Al Huda's teachers work with children from Pakistani, Arab, Indian, Bangladeshi, African, and revert Muslim families. Lessons are adjusted to each child's language comfort and learning pace without losing the authenticity of Quran education.
          </p>

          <h2 className="mb-4 mt-12 text-2xl font-bold text-primary sm:text-3xl">Male and Female Quran Teachers</h2>
          <p className="mb-6 leading-relaxed">
            Parents can request a male or female teacher according to their child's age, comfort, and family preference. Our <Link to="/teachers" className="font-semibold text-primary underline">qualified Quran teachers</Link> are experienced in guiding young learners patiently through individual live lessons.
          </p>

          <h2 className="mb-6 mt-12 text-2xl font-bold text-primary sm:text-3xl">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <section key={faq.question} className="rounded-2xl border border-border p-5 sm:p-6">
                <h3 className="mb-2 text-lg font-bold text-primary">{faq.question}</h3>
                <p className="m-0 leading-relaxed">{faq.answer}</p>
              </section>
            ))}
          </div>

          <h2 className="mb-4 mt-12 text-2xl font-bold text-primary sm:text-3xl">Start Your Child's Quran Journey in the USA</h2>
          <p className="mb-6 leading-relaxed">
            Give your child a structured and consistent foundation in Quran and Islamic education without the daily commute. Al Huda offers live one-to-one classes with flexible scheduling for American families. You can review our <Link to="/pricing" className="font-semibold text-primary underline">affordable class plans</Link> or <Link to="/contact" className="font-semibold text-primary underline">contact us</Link> for help choosing the right course.
          </p>

          <div className="mt-10 rounded-2xl bg-gradient-primary p-8 text-center text-primary-foreground">
            <h3 className="mb-3 text-xl font-bold text-gold sm:text-2xl">Book Your Free Trial Class</h3>
            <p className="mb-6 text-primary-foreground/90">Meet a qualified teacher and experience a live one-to-one Quran lesson before enrolling.</p>
            <a href={TRIAL_WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 font-semibold text-primary shadow-gold transition-transform hover:scale-[1.03]">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <h2 className="mb-6 text-2xl font-bold text-primary">Explore More</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <Link to="/blog" className="rounded-xl border border-border p-5 transition-shadow hover:shadow-elegant">
            <h3 className="mb-1 font-semibold text-primary">Quran Learning Blog</h3>
            <p className="text-sm text-muted-foreground">Read more guidance for Muslim families.</p>
          </Link>
          <Link to="/courses" className="rounded-xl border border-border p-5 transition-shadow hover:shadow-elegant">
            <h3 className="mb-1 font-semibold text-primary">Online Quran Courses</h3>
            <p className="text-sm text-muted-foreground">Explore Qaida, Tajweed, Hifz, and Islamic Studies.</p>
          </Link>
          <Link to="/faq" className="rounded-xl border border-border p-5 transition-shadow hover:shadow-elegant">
            <h3 className="mb-1 font-semibold text-primary">Class Questions</h3>
            <p className="text-sm text-muted-foreground">Learn about lessons, schedules, and enrollment.</p>
          </Link>
        </div>
      </section>
    </Layout>
  );
}