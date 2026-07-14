import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, Calendar, User } from "lucide-react";
import quranImg from "@/assets/quran.jpg";
import kidsImg from "@/assets/kids-learning.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Al Huda Islamic Institute | Online Quran Learning Articles" },
      { name: "description", content: "Read expert articles on online Quran learning, Hifz, Tajweed, Islamic education for kids and Muslim family guidance from Al Huda Islamic Institute." },
      { name: "keywords", content: "online quran academy, quran blog, islamic education blog, quran for kids, hifz tips, tajweed lessons" },
      { property: "og:title", content: "Blog — Al Huda Islamic Institute" },
      { property: "og:description", content: "Articles on online Quran learning, Hifz, Tajweed and Islamic education for Muslim families worldwide." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://al-hudainternationalinstitute.lovable.app/blog" },
      { property: "og:image", content: "https://al-hudainternationalinstitute.lovable.app/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://al-hudainternationalinstitute.lovable.app/blog" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Al Huda Islamic Institute Blog",
          url: "https://al-hudainternationalinstitute.lovable.app/blog",
          publisher: { "@type": "Organization", name: "Al Huda International Islamic Institute" },
        }),
      },
    ],
  }),
  component: BlogPage,
});

type Post = {
  slug: "/blog/best-online-quran-academy" | "/blog/benefits-of-learning-quran-online" | "/blog/how-to-choose";
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
};

const posts: Post[] = [
  {
    slug: "/blog/best-online-quran-academy",
    title: "Best Online Quran Academy for Kids and Adult Muslim Families",
    excerpt: "Why Al Huda is trusted by Muslim families in 30+ countries — certified teachers, one-to-one classes, and a free trial for kids and adults.",
    date: "May 7, 2026",
    category: "Online Quran Education",
    image: quranImg,
  },
  {
    slug: "/blog/benefits-of-learning-quran-online",
    title: "Why Learn Quran Online? 10 Powerful Benefits for Kids and Adults",
    excerpt: "Discover the top 10 benefits of learning the Holy Quran online with certified male & female teachers at Al Huda International Islamic Institute.",
    date: "July 12, 2026",
    category: "Online Quran Learning",
    image: quranImg,
  },
  {
    slug: "/blog/how-to-choose",
    title: "How to Choose the Best Online Quran Academy for Your Child",
    excerpt: "A practical parent's guide to picking a safe, trusted Quran academy — teachers, curriculum, safety, pricing, and free trial classes.",
    date: "July 4, 2026",
    category: "Parent's Guide",
    image: kidsImg,
  },
];

function BlogPage() {
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

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8">Latest Articles</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} to={p.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-elegant transition-shadow">
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-gold" /> {p.date}</span>
                  <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5 text-gold" /> Al Huda</span>
                </div>
                <span className="mb-2 inline-block w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">{p.category}</span>
                <h3 className="text-lg sm:text-xl font-bold text-primary leading-snug mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-gold transition-colors">
                  Read Article <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

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
