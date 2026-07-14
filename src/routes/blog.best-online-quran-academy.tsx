import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, BookOpen, Calendar, User, CheckCircle } from "lucide-react";
import { TRIAL_WA_URL } from "@/lib/trial";
import quranImg from "@/assets/quran.jpg";

export const Route = createFileRoute("/blog/best-online-quran-academy")({
  head: () => ({
    meta: [
      { title: "Best Online Quran Academy for Kids & Adult Muslim Families — Al Huda" },
      { name: "description", content: "Discover why Al Huda International Islamic Institute is the best online Quran academy for kids and adult Muslim families — certified male & female teachers, Tajweed, Hifz, one-to-one classes and a free trial." },
      { name: "keywords", content: "best online Quran academy, online Quran classes, Quran for kids, Quran for adults, Muslim family, Hifz online, Tajweed online, Al Huda International Islamic Institute" },
      { property: "og:title", content: "Best Online Quran Academy for Kids & Adult Muslim Families" },
      { property: "og:description", content: "Trusted online Quran academy for Muslim families worldwide — certified teachers, Tajweed, Hifz, and a free trial class." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://al-hudainternationalinstitute.lovable.app/blog/best-online-quran-academy" },
      { property: "og:image", content: "https://al-hudainternationalinstitute.lovable.app/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://al-hudainternationalinstitute.lovable.app/blog/best-online-quran-academy" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Best Online Quran Academy for Kids and Adult Muslim Families",
          datePublished: "2026-05-07",
          author: { "@type": "Organization", name: "Al Huda Islamic Institute" },
          publisher: {
            "@type": "Organization",
            name: "Al Huda International Islamic Institute",
            logo: { "@type": "ImageObject", url: "https://al-hudainternationalinstitute.lovable.app/logo.png" },
          },
          image: "https://al-hudainternationalinstitute.lovable.app/og-image.jpg",
          url: "https://al-hudainternationalinstitute.lovable.app/blog/best-online-quran-academy",
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://al-hudainternationalinstitute.lovable.app/blog/best-online-quran-academy" },
        }),
      },
    ],
  }),
  component: BlogArticlePage,
});

function BlogArticlePage() {
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
          <h1 className="text-3xl sm:text-5xl font-bold text-gold mb-4 leading-tight">
            Best Online Quran Academy for Kids and Adult Muslim Families
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-primary-foreground/90 leading-relaxed">
            Trusted by thousands of Muslim families in 30+ countries — authentic Islamic education, delivered online.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-gold" /> May 7, 2026</span>
          <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5 text-gold" /> Al Huda Islamic Institute</span>
          <span className="flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5 text-gold" /> Online Quran Education</span>
        </div>

        <img
          src={quranImg}
          alt="Holy Quran on a wooden rehal — best online Quran academy for Muslim families"
          className="rounded-2xl shadow-elegant w-full mb-8"
          loading="lazy"
        />

        <div className="prose prose-lg max-w-none text-foreground/85">
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            Finding a trusted <strong>online Quran academy</strong> for your family is one of the most important decisions you'll make as a Muslim parent or adult learner. <Link to="/" className="text-primary font-semibold underline">Al Huda International Islamic Institute</Link> has been serving Muslim families across <strong>30+ countries</strong> with authentic Islamic education — combining classical scholarship with modern, convenient online classes that fit the busy schedules of today's families in the USA, UK, Canada, Australia, and beyond.
          </p>
          <p className="leading-relaxed mb-8">
            Whether your child is starting with Noorani Qaida or you're an adult looking to strengthen your Tajweed, our academy offers a warm, structured, and flexible environment to learn the Quran from home.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-primary mt-10 mb-4">What Makes Al Huda Different</h2>
          <p className="leading-relaxed mb-6">
            We are more than an online academy — we are a global family of teachers and students united by the love of the Holy Quran. Every course is built on classical scholarship and delivered with modern tools that make learning easy for children and adults alike.
          </p>
          <div className="rounded-2xl bg-muted/50 border border-border p-6 sm:p-8 mb-8">
            <ul className="grid gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm sm:text-base">
                  <CheckCircle className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-primary mt-10 mb-4">Why Muslim Parents Choose Al Huda</h2>
          <p className="leading-relaxed mb-4">
            Our certified male and female teachers — including Hafiz al-Quran and Islamic scholars — provide a comfortable, professional learning environment where children and adults can grow in faith at their own pace. From a child's very first Qaida letter to a parent's deeper study of Tafseer, every student receives one-on-one attention.
          </p>
          <p className="leading-relaxed mb-8">
            Join thousands of Muslim families who trust <strong>Al Huda Islamic Institute</strong> for their children's Islamic education. Explore our <Link to="/courses" className="text-primary font-semibold underline">courses</Link> or <Link to="/contact" className="text-primary font-semibold underline">contact us</Link> anytime.
          </p>

          <h3 className="text-xl sm:text-2xl font-bold text-primary mt-10 mb-4">Book Your FREE Trial Class Today</h3>
          <p className="leading-relaxed mb-8">
            Meet one of our certified teachers, experience a real lesson, and see the Al Huda difference for yourself — no payment, no commitment.
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
