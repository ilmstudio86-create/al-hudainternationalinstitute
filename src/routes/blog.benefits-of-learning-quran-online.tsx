import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, BookOpen, Calendar, User, CheckCircle } from "lucide-react";
import { TRIAL_WA_URL } from "@/lib/trial";
import quranImg from "@/assets/quran.jpg";

export const Route = createFileRoute("/blog/benefits-of-learning-quran-online")({
  head: () => ({
    meta: [
      { title: "Why Learn Quran Online? 10 Powerful Benefits for Kids & Adults — Al Huda" },
      { name: "description", content: "Discover 10 powerful benefits of learning Quran online with Al Huda International Islamic Institute — one-to-one classes, certified male & female teachers, Tajweed, Hifz, and a free trial." },
      { name: "keywords", content: "Online Quran Academy, Learn Quran Online, Online Quran Classes, Quran Classes for Kids, Quran Classes for Adults, Quran with Tajweed, Online Islamic Institute, Hifz Quran Online, Noorani Qaida Online, Al Huda International Islamic Institute" },
      { property: "og:title", content: "Why Learn Quran Online? 10 Powerful Benefits for Kids & Adults" },
      { property: "og:description", content: "10 powerful benefits of learning Quran online with certified teachers at Al Huda International Islamic Institute." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://al-hudainternationalinstitute.lovable.app/blog/benefits-of-learning-quran-online" },
      { property: "og:image", content: "https://al-hudainternationalinstitute.lovable.app/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://al-hudainternationalinstitute.lovable.app/blog/benefits-of-learning-quran-online" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Why Learn Quran Online? 10 Powerful Benefits for Kids and Adults",
          datePublished: "2026-07-12",
          author: { "@type": "Organization", name: "Al Huda Islamic Institute" },
          publisher: {
            "@type": "Organization",
            name: "Al Huda International Islamic Institute",
            logo: { "@type": "ImageObject", url: "https://al-hudainternationalinstitute.lovable.app/logo.png" },
          },
          image: "https://al-hudainternationalinstitute.lovable.app/og-image.jpg",
          url: "https://al-hudainternationalinstitute.lovable.app/blog/benefits-of-learning-quran-online",
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://al-hudainternationalinstitute.lovable.app/blog/benefits-of-learning-quran-online" },
        }),
      },
    ],
  }),
  component: BlogArticlePage,
});

function BlogArticlePage() {
  const benefits: { title: string; body: string }[] = [
    { title: "1. Learn from Anywhere in the World", body: "With online Quran classes, you can learn from home whether you live in the USA, UK, Canada, Australia, New Zealand, Europe, or the Middle East. All you need is an internet connection and a mobile phone, tablet, or computer." },
    { title: "2. One-to-One Quran Classes", body: "At Al Huda International Islamic Institute, every student receives individual attention. One-to-one classes help students learn faster, ask questions confidently, and improve their Quran recitation." },
    { title: "3. Qualified Male and Female Teachers", body: "We provide experienced male and female Quran teachers who teach with patience, kindness, and proper Tajweed. Parents can choose a teacher according to their preference." },
    { title: "4. Learn Quran with Tajweed", body: "Reading the Quran correctly is essential. Our Tajweed courses help students pronounce every Arabic letter accurately and beautifully." },
    { title: "5. Flexible Class Timings", body: "Busy schedule? No problem. Our academy offers flexible timings that fit different countries and time zones, making it easier for students and working parents." },
    { title: "6. Quran Classes for Kids and Adults", body: "We welcome students of all ages. Whether your child is starting Noorani Qaida or you want to improve your Quran reading as an adult, we have suitable courses for everyone." },
    { title: "7. Islamic Studies Along with the Quran", body: "Students also learn daily Duas, Salah, Islamic manners, and basic Islamic knowledge that helps them practice Islam in everyday life." },
    { title: "8. Affordable Monthly Fees", body: "We believe every Muslim family should have access to quality Quran education. Our courses are offered at affordable monthly fees without compromising on teaching quality." },
    { title: "9. Free Trial Class", body: "We offer a FREE Trial Class so parents and students can meet the teacher, experience our teaching style, and choose with confidence." },
    { title: "10. A Strong Connection with the Quran", body: "Our goal is not only to teach Quran reading but also to help students develop a lifelong love for the Holy Quran and Islamic values." },
  ];

  const highlights = [
    "Online Quran Classes for Kids & Adults",
    "Noorani Qaida",
    "Quran Reading with Tajweed",
    "Hifz-ul-Quran",
    "Islamic Studies",
    "Arabic Basics",
    "Certified Male & Female Teachers",
    "One-to-One Live Classes",
    "Flexible Timings",
    "FREE Trial Class",
  ];

  return (
    <Layout>
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gold mb-3">Al Huda Blog</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-gold mb-4 leading-tight">
            Why Learn Quran Online? 10 Powerful Benefits for Kids and Adults
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-primary-foreground/90 leading-relaxed">
            Discover the Benefits of Online Quran Learning with Al Huda International Islamic Institute.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-gold" /> July 12, 2026</span>
          <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5 text-gold" /> Al Huda Islamic Institute</span>
          <span className="flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5 text-gold" /> Online Quran Learning</span>
        </div>

        <img
          src={quranImg}
          alt="Holy Quran on a wooden rehal — learn Quran online with Al Huda International Islamic Institute"
          className="rounded-2xl shadow-elegant w-full mb-8"
          loading="lazy"
        />

        <div className="prose prose-lg max-w-none text-foreground/85">
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            Learning the Holy Quran is one of the greatest blessings for every Muslim. Today, thanks to technology, Muslims around the world can learn the Quran from the comfort of their homes. <strong>Al Huda International Islamic Institute</strong> provides professional <Link to="/courses" className="text-primary font-semibold underline">online Quran classes</Link> for children and adults with qualified male and female teachers.
          </p>
          <p className="leading-relaxed mb-8">
            Whether you are a beginner or want to improve your Tajweed, online Quran learning offers flexibility, personal attention, and high-quality Islamic education.
          </p>

          {benefits.map((b) => (
            <div key={b.title}>
              <h2 className="text-xl sm:text-2xl font-bold text-primary mt-10 mb-4">{b.title}</h2>
              <p className="leading-relaxed mb-6">{b.body}</p>
            </div>
          ))}

          <h2 className="text-2xl sm:text-3xl font-bold text-primary mt-12 mb-4">Why Choose Al Huda International Islamic Institute?</h2>
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

          <h3 className="text-xl sm:text-2xl font-bold text-primary mt-10 mb-4">Start Your Quran Learning Journey Today</h3>
          <p className="leading-relaxed mb-4">
            If you are looking for the best online Quran academy, online Quran classes, Quran teachers online, or online Islamic institute, <Link to="/" className="text-primary font-semibold underline">Al Huda International Islamic Institute</Link> is here to help.
          </p>
          <p className="leading-relaxed mb-8">
            Book your <strong>FREE Trial Class</strong> today and begin your journey of learning the Holy Quran with experienced teachers in a friendly and professional environment. Have a question? <Link to="/contact" className="text-primary font-semibold underline">Contact us</Link> anytime.
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
