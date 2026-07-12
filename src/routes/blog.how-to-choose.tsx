import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, BookOpen, Calendar, User, CheckCircle } from "lucide-react";
import { TRIAL_WA_URL } from "@/lib/trial";
import kidsImg from "@/assets/kids-learning.jpg";

export const Route = createFileRoute("/blog/how-to-choose")({
  head: () => ({
    meta: [
      { title: "How to Choose the Best Online Quran Academy for Your Child — Al Huda" },
      { name: "description", content: "A practical parent's guide to choosing the best online Quran academy for your child — certified teachers, safe classes, Tajweed, Hifz, flexible timings and a free trial with Al Huda International Islamic Institute." },
      { name: "keywords", content: "best online Quran academy, online Quran classes for kids, Quran teacher for children, Noorani Qaida online, Hifz online, Tajweed for kids, Islamic education online, Al Huda International Islamic Institute" },
      { property: "og:title", content: "How to Choose the Best Online Quran Academy for Your Child" },
      { property: "og:description", content: "A practical parent's guide to choosing the right online Quran academy — teachers, curriculum, safety, and free trial classes." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://al-hudainternationalinstitute.lovable.app/blog/how-to-choose" },
      { property: "og:image", content: "https://al-hudainternationalinstitute.lovable.app/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://al-hudainternationalinstitute.lovable.app/blog/how-to-choose" },
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
            logo: { "@type": "ImageObject", url: "https://al-hudainternationalinstitute.lovable.app/logo.png" },
          },
          image: "https://al-hudainternationalinstitute.lovable.app/og-image.jpg",
          url: "https://al-hudainternationalinstitute.lovable.app/blog/how-to-choose",
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://al-hudainternationalinstitute.lovable.app/blog/how-to-choose" },
        }),
      },
    ],
  }),
  component: BlogArticlePage,
});

function BlogArticlePage() {
  const tips: { title: string; body: string }[] = [
    { title: "1. Check the Qualifications of the Teachers", body: "The most important factor is who will teach your child. Look for an academy with certified Huffaz and Ijazah-holding scholars trained in Tajweed and Tafseer. Ask about their experience with children — teaching kids requires patience, kindness, and a different skill set than teaching adults." },
    { title: "2. Look for a Structured Curriculum", body: "A good academy offers a clear, age-appropriate path: Noorani Qaida for beginners, Quran reading with Tajweed, and Hifz for those who wish to memorize. Ask to see a sample lesson plan before enrolling so you know exactly what your child will learn each month." },
    { title: "3. Prioritize Interactive and Engaging Lessons", body: "Children learn best when lessons are interactive. Look for visual aids, small rewards and certificates, short focused sessions of 20–30 minutes, and regular parent-teacher feedback that keeps your child excited to attend the next class." },
    { title: "4. Verify Safety and Privacy Measures", body: "Since classes are online, safety is non-negotiable. Choose an academy that background-checks teachers, records sessions for accountability, allows parents to sit in on classes, and uses secure video platforms like Zoom or Google Meet." },
    { title: "5. Take Advantage of a Free Trial Class", body: "Every trusted academy offers a FREE trial. Use it to see how the teacher interacts with your child, whether the pace suits their level, and whether your child feels comfortable. If they're excited to come back, that's the strongest sign of a good fit." },
    { title: "6. Consider Flexibility and Scheduling", body: "Every family has a different routine. Pick an academy that offers flexible timings across time zones, easy rescheduling for missed classes, and one-to-one lessons so your child gets full attention instead of being lost in a group." },
    { title: "7. Read Reviews and Ask for References", body: "Before enrolling, search for honest parent reviews on independent platforms and read testimonials on the academy's website. Don't hesitate to ask the academy to connect you with current students' families for real feedback." },
    { title: "8. Compare Pricing and Value", body: "Cheaper isn't always better, and expensive doesn't guarantee quality. Compare what's included: number of classes per week, class duration, teacher qualifications, and extras like workbooks or monthly progress reports." },
    { title: "9. Ensure Ongoing Progress Tracking", body: "A quality academy shares regular reports on your child's Tajweed, memorization milestones, and areas needing practice. This keeps you informed and involved in your child's spiritual journey." },
    { title: "10. Trust Your Instincts as a Parent", body: "After the trial class, listen to your gut. The right academy will feel like a natural extension of your home — a place where your child learns to love the Quran, not just recite it." },
  ];

  const highlights = [
    "Certified Male & Female Quran Teachers",
    "One-to-One Live Classes on Zoom",
    "Noorani Qaida, Nazra & Hifz Programs",
    "Quran Reading with Proper Tajweed",
    "Islamic Studies & Daily Duas",
    "Flexible Timings Worldwide",
    "Affordable Monthly Fees",
    "Safe, Family-Friendly Environment",
    "Monthly Progress Reports",
    "FREE Trial Class Available",
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
            A practical parent's guide to finding a trusted, safe and effective Quran learning environment for your family.
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
          alt="Muslim children learning Quran online with a certified teacher at Al Huda International Islamic Institute"
          className="rounded-2xl shadow-elegant w-full mb-8"
          loading="lazy"
        />

        <div className="prose prose-lg max-w-none text-foreground/85">
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            Choosing an <strong>online Quran academy</strong> for your child is one of the most important decisions you'll make as a Muslim parent. With so many platforms available today, it can feel overwhelming to pick one that will truly nurture your child's connection with the Holy Quran while keeping them safe, engaged, and motivated. At <Link to="/" className="text-primary font-semibold underline">Al Huda International Islamic Institute</Link>, we've helped thousands of families around the world — and this guide is built from that experience.
          </p>
          <p className="leading-relaxed mb-8">
            Below are the ten most important things to look for before enrolling your child in any <Link to="/courses" className="text-primary font-semibold underline">online Quran class</Link>.
          </p>

          {tips.map((t) => (
            <div key={t.title}>
              <h2 className="text-xl sm:text-2xl font-bold text-primary mt-10 mb-4">{t.title}</h2>
              <p className="leading-relaxed mb-6">{t.body}</p>
            </div>
          ))}

          <h2 className="text-2xl sm:text-3xl font-bold text-primary mt-12 mb-4">Why Choose Al Huda International Islamic Institute?</h2>
          <p className="leading-relaxed mb-6">
            At <Link to="/about" className="text-primary font-semibold underline">Al Huda International Islamic Institute</Link>, we combine classical Islamic scholarship with modern online teaching to give every child a safe, joyful and structured Quran learning journey.
          </p>
          <div className="rounded-2xl bg-muted/50 border border-border p-6 sm:p-8 mb-8">
            <ul className="grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm sm:text-base">
                  <CheckCircle className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-primary mt-10 mb-4">Book Your FREE Trial Class Today</h3>
          <p className="leading-relaxed mb-4">
            The best way to judge any academy is to experience it yourself. Book a <strong>FREE trial class</strong> with Al Huda and let your child meet a certified teacher, try a real lesson, and decide with confidence — no payment, no commitment.
          </p>
          <p className="leading-relaxed mb-8">
            Have a question first? <Link to="/contact" className="text-primary font-semibold underline">Contact us</Link> on WhatsApp anytime and our team will guide you personally.
          </p>

          <div className="rounded-2xl bg-gradient-primary text-primary-foreground p-8 text-center mt-10">
            <h4 className="text-xl sm:text-2xl font-bold text-gold mb-3">Ready to Start Your Child's Quran Journey?</h4>
            <p className="text-primary-foreground/90 mb-6">Book your free trial class today — no credit card required.</p>
            <a href={TRIAL_WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 font-semibold text-primary shadow-gold hover:scale-[1.03] transition-transform">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-16">
        <h3 className="text-2xl font-bold text-primary mb-6">Explore More</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <Link to="/" className="rounded-xl border border-border p-5 hover:shadow-elegant transition-shadow">
            <h4 className="font-semibold text-primary mb-1">Home</h4>
            <p className="text-sm text-muted-foreground">Al Huda Islamic Institute homepage.</p>
          </Link>
          <Link to="/courses" className="rounded-xl border border-border p-5 hover:shadow-elegant transition-shadow">
            <h4 className="font-semibold text-primary mb-1">Our Courses</h4>
            <p className="text-sm text-muted-foreground">Nazra, Hifz, Tajweed, Tafseer & more.</p>
          </Link>
          <Link to="/about" className="rounded-xl border border-border p-5 hover:shadow-elegant transition-shadow">
            <h4 className="font-semibold text-primary mb-1">About Us</h4>
            <p className="text-sm text-muted-foreground">Our mission, vision & scholars.</p>
          </Link>
          <Link to="/contact" className="rounded-xl border border-border p-5 hover:shadow-elegant transition-shadow">
            <h4 className="font-semibold text-primary mb-1">Contact Us</h4>
            <p className="text-sm text-muted-foreground">Reach out on WhatsApp anytime.</p>
          </Link>
          <a href={TRIAL_WA_URL} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-border p-5 hover:shadow-elegant transition-shadow">
            <h4 className="font-semibold text-primary mb-1">Free Trial Class</h4>
            <p className="text-sm text-muted-foreground">Book your no-cost trial today.</p>
          </a>
        </div>
      </section>
    </Layout>
  );
}
