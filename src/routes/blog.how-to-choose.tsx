import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, BookOpen, Calendar, User, CheckCircle } from "lucide-react";
import { TRIAL_WA_URL } from "@/lib/trial";
import kidsImg from "@/assets/kids-learning.jpg";

export const Route = createFileRoute("/blog/how-to-choose")({
  head: () => ({
    meta: [
      { title: "How to Choose the Best Online Quran Academy for Your Child — Al Huda Islamic Institute" },
      { name: "description", content: "A practical parent's guide to choosing the right online Quran academy for kids. Learn what to look for in teachers, curriculum, safety, and trial classes." },
      { name: "keywords", content: "choose online quran academy, quran academy for kids, online quran classes for children, best quran teacher for kids, hifz for kids, tajweed for children" },
      { property: "og:title", content: "How to Choose the Best Online Quran Academy for Your Child" },
      { property: "og:description", content: "A practical parent's guide to choosing the right online Quran academy for kids — teachers, curriculum, safety & trial classes." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://alhudaislamicinstitute.com/blog/how-to-choose" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://alhudaislamicinstitute.com/blog/how-to-choose" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "How to Choose the Best Online Quran Academy for Your Child",
          datePublished: "2026-07-04",
          author: { "@type": "Organization", name: "Al Huda Islamic Institute" },
          publisher: {
            "@type": "Organization",
            name: "Al Huda International Islamic Institute",
            logo: { "@type": "ImageObject", url: "https://alhudaislamicinstitute.com/logo.png" },
          },
          image: "https://alhudaislamicinstitute.com/og-image.jpg",
          url: "https://alhudaislamicinstitute.com/blog/how-to-choose",
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://alhudaislamicinstitute.com/blog/how-to-choose" },
        }),
      },
    ],
  }),
  component: BlogArticlePage,
});

function BlogArticlePage() {
  const tips = [
    "Certified Huffaz or Ijazah-holding scholars",
    "Structured curriculum from Qaida to Hifz",
    "Interactive lessons with visual aids & rewards",
    "Background-checked, recorded sessions",
    "Free trial class to evaluate fit",
    "Flexible scheduling across time zones",
    "Genuine parent reviews & references",
    "Transparent pricing with clear inclusions",
    "Regular progress tracking & reports",
  ];

  return (
    <Layout>
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gold mb-3">Al Huda Blog</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-gold mb-4 leading-tight">
            How to Choose the Best Online Quran Academy for Your Child
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-primary-foreground/90 leading-relaxed">
            A practical parent's guide to finding a trusted, safe, and effective Quran learning environment for your family.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-gold" /> July 4, 2026</span>
          <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5 text-gold" /> Al Huda Islamic Institute</span>
          <span className="flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5 text-gold" /> Parent's Guide</span>
        </div>

        <img
          src={kidsImg}
          alt="Muslim children learning Quran online with a certified teacher"
          className="rounded-2xl shadow-elegant w-full mb-8"
          loading="lazy"
        />

        <div className="prose prose-lg max-w-none text-foreground/85">
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            Choosing an online Quran academy for your child is one of the most important decisions you'll make as a parent. With so many platforms available today, it can feel overwhelming to know which one will truly nurture your child's connection with the Quran while keeping them engaged, safe, and motivated to learn. Here's a practical guide to help you make the right choice.
          </p>

          <h3 className="text-xl sm:text-2xl font-bold text-primary mt-10 mb-4">1. Check the Qualifications of the Teachers</h3>
          <p className="leading-relaxed mb-6">
            The single most important factor is who will be teaching your child. Look for academies that employ certified Huffaz (Quran memorizers) or Ijazah-holding scholars with proper training in Tajweed and Tafseer. Ask about the teacher's educational background, years of experience, and whether they specialize in teaching children specifically — teaching kids requires a different skill set than teaching adults.
          </p>

          <h3 className="text-xl sm:text-2xl font-bold text-primary mt-10 mb-4">2. Look for a Structured Curriculum</h3>
          <p className="leading-relaxed mb-6">
            A good academy should offer a clear, age-appropriate curriculum that progresses logically: starting with Noorani Qaida for beginners, moving to Quran reading with Tajweed rules, and eventually memorization (Hifz) for those who wish to pursue it. Ask to see a sample lesson plan or syllabus before enrolling.
          </p>

          <h3 className="text-xl sm:text-2xl font-bold text-primary mt-10 mb-4">3. Prioritize Interactive and Engaging Teaching Methods</h3>
          <p className="leading-relaxed mb-4">
            Children learn best when lessons are interactive rather than passive. Look for academies that use:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Visual aids and colorful learning tools</li>
            <li>Rewards, certificates, or progress tracking systems</li>
            <li>Short, focused sessions (20–30 minutes) suited to children's attention spans</li>
            <li>Regular parent-teacher feedback</li>
          </ul>

          <h3 className="text-xl sm:text-2xl font-bold text-primary mt-10 mb-4">4. Verify Safety and Privacy Measures</h3>
          <p className="leading-relaxed mb-4">
            Since your child will be interacting with a teacher online, safety should never be compromised. Choose academies that:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Conduct background checks on their teachers</li>
            <li>Record sessions for accountability</li>
            <li>Allow parents to monitor or sit in on classes</li>
            <li>Use secure, reputable video conferencing platforms</li>
          </ul>

          <h3 className="text-xl sm:text-2xl font-bold text-primary mt-10 mb-4">5. Take Advantage of a Free Trial Class</h3>
          <p className="leading-relaxed mb-6">
            Almost every reputable academy offers a free trial class. Use this opportunity to observe how the teacher interacts with your child, whether the pace suits their learning level, and whether your child feels comfortable and engaged. Trust your child's reaction — if they're excited to come back, that's a good sign.
          </p>

          <h3 className="text-xl sm:text-2xl font-bold text-primary mt-10 mb-4">6. Consider Flexibility and Scheduling</h3>
          <p className="leading-relaxed mb-6">
            Every family has a different routine. Choose an academy that offers flexible class timings across different time zones, the option to reschedule missed classes, and one-on-one classes if your child needs individual attention rather than a group setting.
          </p>

          <h3 className="text-xl sm:text-2xl font-bold text-primary mt-10 mb-4">7. Read Reviews and Ask for References</h3>
          <p className="leading-relaxed mb-6">
            Before committing, search for genuine reviews from other parents. Look at ratings on independent platforms, testimonials on the academy's website, and don't hesitate to ask the academy to connect you with current students' families for honest feedback.
          </p>

          <h3 className="text-xl sm:text-2xl font-bold text-primary mt-10 mb-4">8. Compare Pricing and Value</h3>
          <p className="leading-relaxed mb-6">
            Cheaper isn't always better, and expensive doesn't guarantee quality. Compare what's included in the fee: number of classes per week, class duration, teacher qualifications, and any additional resources like workbooks or progress reports.
          </p>

          <h3 className="text-xl sm:text-2xl font-bold text-primary mt-10 mb-4">9. Ensure Ongoing Progress Tracking</h3>
          <p className="leading-relaxed mb-8">
            A quality academy will provide regular reports on your child's progress, including Tajweed improvement, memorization milestones, and areas needing more practice. This keeps you informed and involved in your child's learning journey.
          </p>

          <div className="rounded-2xl bg-muted/50 border border-border p-8 mt-10">
            <h4 className="text-lg sm:text-xl font-bold text-primary mb-4">Quick Checklist for Parents</h4>
            <ul className="grid gap-3 sm:grid-cols-2">
              {tips.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm sm:text-base">
                  <CheckCircle className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-primary mt-10 mb-4">Final Thoughts</h3>
          <p className="leading-relaxed mb-8">
            Selecting the right online Quran academy is an investment in your child's spiritual and moral development. Take your time, ask questions, attend trial classes, and trust your instincts. The right academy will feel like a natural extension of your home — one where your child learns to love the Quran, not just memorize it.
          </p>

          <div className="rounded-2xl bg-gradient-primary text-primary-foreground p-8 text-center mt-10">
            <h4 className="text-xl sm:text-2xl font-bold text-gold mb-3">Ready to Start Your Child's Quran Journey?</h4>
            <p className="text-primary-foreground/90 mb-6">Book a free trial class at Al Huda Islamic Institute — no credit card required.</p>
            <a href={TRIAL_WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 font-semibold text-primary shadow-gold hover:scale-[1.03] transition-transform">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-16">
        <h3 className="text-2xl font-bold text-primary mb-6">Explore More</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <Link to="/blog" className="rounded-xl border border-border p-5 hover:shadow-elegant transition-shadow">
            <h4 className="font-semibold text-primary mb-1">Blog</h4>
            <p className="text-sm text-muted-foreground">More articles on Quran learning and Islamic education.</p>
          </Link>
          <Link to="/courses" className="rounded-xl border border-border p-5 hover:shadow-elegant transition-shadow">
            <h4 className="font-semibold text-primary mb-1">Our Courses</h4>
            <p className="text-sm text-muted-foreground">Nazra, Hifz, Tajweed, Tafseer & more.</p>
          </Link>
          <Link to="/contact" className="rounded-xl border border-border p-5 hover:shadow-elegant transition-shadow">
            <h4 className="font-semibold text-primary mb-1">Contact Us</h4>
            <p className="text-sm text-muted-foreground">Have questions? Reach out anytime.</p>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
