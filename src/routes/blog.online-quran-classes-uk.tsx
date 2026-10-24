import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Calendar, CheckCircle, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/site/Layout";
import ukClassesImg from "@/assets/online-quran-classes-uk.jpg";
import { TRIAL_WA_URL } from "@/lib/trial";

const pageUrl = "https://al-hudainternationalinstitute.lovable.app/blog/online-quran-classes-uk";
const title = "Online Quran Classes for Kids in the UK | Al Huda International Islamic Institute";
const description = "Live one-to-one online Quran classes for kids across the UK. Qualified male and female teachers, flexible timings, and a free trial class. Book with Al Huda.";

const faqs = [
  {
    question: "Are online Quran classes available across the whole UK, not just big cities?",
    answer: "Yes, classes are delivered live over video call, so families in smaller towns without a local madrassah have the same access as those in major cities.",
  },
  {
    question: "Can classes fit around the school day and homework?",
    answer: "Yes, before-school, after-school, evening, and weekend slots are all available, depending on what suits your child's routine.",
  },
  {
    question: "Do teachers understand British Muslim family life?",
    answer: "Yes, teachers are experienced working with British-born Muslim children and understand the balance between school life and Islamic education.",
  },
  {
    question: "Is there a free trial class for UK families?",
    answer: "Yes, Al Huda offers a free trial class so parents can experience a live lesson with a qualified teacher before enrolling.",
  },
];

export const Route = createFileRoute("/blog/online-quran-classes-uk")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "online Quran classes for kids UK, Quran teacher online UK, Quran classes for children, online Tajweed classes, Hifz classes UK" },
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
              headline: "Online Quran Classes for Kids in the UK",
              description,
              datePublished: "2026-10-15",
              dateModified: "2026-10-15",
              author: { "@type": "Organization", name: "Al Huda International Islamic Institute" },
              publisher: {
                "@type": "Organization",
                name: "Al Huda International Islamic Institute",
                logo: { "@type": "ImageObject", url: "https://al-hudainternationalinstitute.lovable.app/logo-v2.png" },
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
  component: OnlineQuranClassesUkPage,
});

const courses = [
  "Noorani Qaida and Arabic letter foundations",
  "Quran reading with correct pronunciation and Tajweed",
  "Structured Hifz-ul-Quran with regular revision",
  "Islamic Studies, Hadith, daily Duas, and manners",
  "Arabic language for better understanding",
  "Tafseer-ul-Quran for older and advanced students",
];

function OnlineQuranClassesUkPage() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 pattern-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <p className="mb-3 text-xs uppercase tracking-normal text-gold sm:text-sm">Al Huda Blog</p>
          <h1 className="mb-4 text-3xl font-bold leading-tight text-gold sm:text-5xl">Online Quran Classes for Kids in the UK</h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            Live one-to-one Quran education with qualified teachers and flexible schedules for Muslim families across the United Kingdom.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-gold" /> October 15, 2026</span>
          <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5 text-gold" /> Al Huda Islamic Institute</span>
          <span className="flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5 text-gold" /> Quran Classes for Kids</span>
        </div>

        <img
          src={ukClassesImg}
          alt="British Muslim boy reading the Quran during a live online lesson with a male teacher"
          width={1200}
          height={800}
          className="mb-8 w-full rounded-lg shadow-elegant"
        />

        <div className="prose prose-lg max-w-none text-foreground/85">
          <p className="mb-6 text-base leading-relaxed sm:text-lg">
            Muslim families across the United Kingdom, in London, Birmingham, Manchester, Bradford, Leeds, Leicester, Glasgow, and towns and cities throughout England, Scotland, Wales, and Northern Ireland, often face the same challenge: busy school days, long commutes to a local mosque or madrassah, and limited evening hours to fit everything in.
          </p>
          <p className="mb-8 leading-relaxed">
            Al Huda International Islamic Institute offers a live, one-to-one <strong>online Quran academy</strong> that brings a qualified teacher into British homes, on a schedule that actually fits UK family life.
          </p>

          <h2 className="mb-4 mt-10 text-2xl font-bold text-primary sm:text-3xl">Why UK Muslim Families Choose Online Quran Classes</h2>
          <p className="mb-6 leading-relaxed">
            For many families, even in cities with a strong local Muslim community, getting a child to a fixed-time Quran class after a full school day is genuinely difficult, and families in smaller towns may have no nearby madrassah at all.
          </p>
          <p className="mb-6 leading-relaxed">
            Online Quran classes solve this directly: your child learns from home, with a dedicated teacher, at a time chosen around your family's actual routine rather than a fixed class timetable.
          </p>

          <h2 className="mb-4 mt-12 text-2xl font-bold text-primary sm:text-3xl">Class Timings Built Around the UK School Day</h2>
          <div className="mb-8 flex gap-4 rounded-lg border border-border bg-muted/50 p-6 sm:p-8">
            <Clock className="mt-1 h-6 w-6 shrink-0 text-gold" />
            <p className="m-0 leading-relaxed">
              Lessons can be arranged before school, straight after school, in the evening once homework is finished, or on weekends, fitting naturally around term-time schedules across England, Scotland, Wales, and Northern Ireland. Families don't need to rearrange their week around a class; the class is arranged around them.
            </p>
          </div>

          <h2 className="mb-4 mt-12 text-2xl font-bold text-primary sm:text-3xl">What Your Child Can Learn</h2>
          <p className="mb-6 leading-relaxed">
            Every child starts from their current level and progresses through a structured learning plan. Our <Link to="/courses" className="font-semibold text-primary underline">online Quran courses</Link> include foundational reading, memorization, Tajweed, and age-appropriate Islamic education.
          </p>
          <p className="mb-6 leading-relaxed">
            Children can start with <strong>Noorani Qaida</strong>, learning Arabic letters and foundational rules before independent Quran reading. Lessons then progress into <strong>Quran reading with Tajweed</strong>, focusing on correct pronunciation and articulation. A structured <strong>Hifz-ul-Quran</strong> program includes regular revision. <strong>Islamic Studies</strong> covers core beliefs, the life of the Prophet, Hadith, and daily Islamic manners. The <strong>Arabic language</strong> helps children understand what they recite, while older students can progress to <strong>Tafseer-ul-Quran</strong> for deeper study of meaning and context.
          </p>
          <div className="mb-8 rounded-lg border border-border bg-muted/50 p-6 sm:p-8">
            <ul className="grid gap-3 sm:grid-cols-2">
              {courses.map((course) => (
                <li key={course} className="flex items-start gap-2.5 text-sm sm:text-base">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{course}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="mb-4 mt-12 text-2xl font-bold text-primary sm:text-3xl">Teaching British Muslim Children</h2>
          <p className="mb-6 leading-relaxed">
            Many Muslim children growing up in the UK, particularly second and third-generation British Muslims, are more fluent in English than Arabic or Urdu. Al Huda's teachers are experienced working with children from Pakistani, Bangladeshi, Arab, Somali, and convert Muslim families across the UK, and adapt their teaching approach to each child's language comfort and learning pace, while keeping the teaching itself authentic and structured.
          </p>

          <h2 className="mb-4 mt-12 text-2xl font-bold text-primary sm:text-3xl">Male and Female Quran Teachers</h2>
          <p className="mb-6 leading-relaxed">
            Parents across the UK can choose a male or female teacher for their child, based on age, comfort, or family preference. Our <Link to="/teachers" className="font-semibold text-primary underline">qualified Quran teachers</Link> are trained specifically in working with young learners.
          </p>

          <h2 className="mb-6 mt-12 text-2xl font-bold text-primary sm:text-3xl">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <section key={faq.question} className="rounded-lg border border-border p-5 sm:p-6">
                <h3 className="mb-2 text-lg font-bold text-primary">{faq.question}</h3>
                <p className="m-0 leading-relaxed">{faq.answer}</p>
              </section>
            ))}
          </div>

          <h2 className="mb-4 mt-12 text-2xl font-bold text-primary sm:text-3xl">Start Your Child's Quran Journey in the UK</h2>
          <p className="mb-6 leading-relaxed">
            Give your child in the UK a structured, consistent foundation in Quran and Islamic education, without the weekly commute to a mosque or madrassah. Al Huda International Islamic Institute offers live, one-to-one online Quran classes for kids with qualified male and female teachers and flexible scheduling built for UK families. You can review our <Link to="/pricing" className="font-semibold text-primary underline">affordable class plans</Link> or <Link to="/contact" className="font-semibold text-primary underline">contact us</Link> for help choosing the right course.
          </p>

          <div className="mt-10 border-y border-border py-8 text-center">
            <h3 className="mb-3 text-xl font-bold text-gold sm:text-2xl">Book Your Free Trial Class</h3>
            <p className="mb-6 text-muted-foreground">Meet a qualified teacher and experience a live one-to-one Quran lesson before enrolling.</p>
            <Button asChild size="lg" className="h-auto bg-gradient-gold px-7 py-3.5 font-semibold text-primary shadow-gold"><a href={TRIAL_WA_URL} target="_blank" rel="noopener noreferrer" >
              Book Your Free Trial Class Now <ArrowRight className="h-4 w-4" />
            </a></Button>
          </div>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            Looking for classes in another country? Explore our <Link to="/blog/online-quran-classes-usa" className="font-semibold text-primary underline">online Quran classes for kids in the USA</Link>, or <Link to="/blog/online-quran-classes-australia" className="font-semibold text-primary underline">online Quran classes for kids in Australia</Link>.
          </p>
        </div>
      </article>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <h2 className="mb-6 text-2xl font-bold text-primary">Explore More</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <Link to="/blog" className="rounded-lg border border-border p-5 transition-shadow hover:shadow-elegant">
            <h3 className="mb-1 font-semibold text-primary">Quran Learning Blog</h3>
            <p className="text-sm text-muted-foreground">Read more guidance for Muslim families.</p>
          </Link>
          <Link to="/courses" className="rounded-lg border border-border p-5 transition-shadow hover:shadow-elegant">
            <h3 className="mb-1 font-semibold text-primary">Online Quran Courses</h3>
            <p className="text-sm text-muted-foreground">Explore Qaida, Tajweed, Hifz, and Islamic Studies.</p>
          </Link>
          <Link to="/faq" className="rounded-lg border border-border p-5 transition-shadow hover:shadow-elegant">
            <h3 className="mb-1 font-semibold text-primary">Class Questions</h3>
            <p className="text-sm text-muted-foreground">Learn about lessons, schedules, and enrollment.</p>
          </Link>
        </div>
      </section>
    </Layout>
  );
}