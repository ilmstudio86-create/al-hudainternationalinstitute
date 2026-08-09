import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, BookOpen, Calendar, User, CheckCircle } from "lucide-react";
import { TRIAL_WA_URL } from "@/lib/trial";
import kidsImg from "@/assets/kids-learning.jpg";

export const Route = createFileRoute("/blog/raise-children-islamic-values")({
  head: () => ({
    meta: [
      { title: "How to Raise Children with Strong Islamic Values | Al Huda" },
      { name: "description", content: "Discover practical ways to raise children with strong Islamic values through faith, good character, family habits, and positive Islamic education." },
      { name: "keywords", content: "raising children Islamic values, Islamic parenting, Quran education for kids, Muslim family values, teach kids Islam, Al Huda Islamic Institute" },
      { property: "og:title", content: "How to Raise Children with Strong Islamic Values | Al Huda" },
      { property: "og:description", content: "Discover practical ways to raise children with strong Islamic values through faith, good character, family habits, and positive Islamic education." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://al-hudainternationalinstitute.lovable.app/blog/raise-children-islamic-values" },
      { property: "og:image", content: "https://al-hudainternationalinstitute.lovable.app/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://al-hudainternationalinstitute.lovable.app/blog/raise-children-islamic-values" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "How to Raise Children with Strong Islamic Values",
          datePublished: "2026-08-09",
          author: { "@type": "Organization", name: "Al Huda Islamic Institute" },
          publisher: {
            "@type": "Organization",
            name: "Al Huda International Islamic Institute",
            logo: { "@type": "ImageObject", url: "https://al-hudainternationalinstitute.lovable.app/logo.png" },
          },
          image: "https://al-hudainternationalinstitute.lovable.app/og-image.jpg",
          url: "https://al-hudainternationalinstitute.lovable.app/blog/raise-children-islamic-values",
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://al-hudainternationalinstitute.lovable.app/blog/raise-children-islamic-values" },
        }),
      },
    ],
  }),
  component: BlogArticlePage,
});

function BlogArticlePage() {
  const tips: { title: string; body: string }[] = [
    { title: "1. Be a Good Example for Your Children", body: "Children learn a great deal by observing their parents. They notice how parents speak to others, respond to difficult situations, treat family members, and practice their faith. If parents regularly pray, speak honestly, show kindness, and make time for the Quran, children are more likely to see these actions as a normal and meaningful part of life. Instead of simply telling children what they should do, parents can demonstrate those values through their own actions." },
    { title: "2. Teach Children About Allah with Love", body: "Children should learn about Allah in a way that develops love, gratitude, and trust. Parents can talk about Allah's blessings in everyday life - the food we eat, our families, nature, health, and the opportunities we have to learn and grow. Simple conversations can help children understand that Allah is always aware of them and that Islam provides guidance for their everyday lives." },
    { title: "3. Make Salah a Positive Family Habit", body: "Salah is an important part of a Muslim's daily life. Parents can gradually introduce children to prayer by allowing them to observe, participate according to their age, and understand why Muslims pray. Creating a calm and positive environment around Salah can help children associate prayer with peace and connection to Allah rather than simply seeing it as a task. As children grow, parents can gently encourage greater consistency and responsibility." },
    { title: "4. Teach Good Character", body: "Islam places great importance on good character. Children can learn Islamic values through simple everyday habits such as speaking politely, telling the truth, respecting parents and elders, being kind to younger children, sharing with others, keeping promises, saying thank you, and helping people who need support. These small actions can have a lasting impact on a child's personality." },
    { title: "5. Teach Children the Quran Beyond Recitation", body: "Learning to recite the Quran correctly is important, but children can also benefit from learning about its meanings and lessons. Parents can discuss age-appropriate Quranic teachings and explain how they relate to everyday situations. For example, when discussing honesty, parents can connect the conversation to Islamic teachings about truthfulness. When discussing kindness, they can explain how Islam encourages Muslims to treat others with compassion. This helps children understand that the Quran is not simply a book they read - it is guidance for life." },
    { title: "6. Encourage Children to Ask Questions", body: "Children naturally have questions about Allah, Islam, prayer, the Quran, and the world around them. Parents should create an environment where children feel comfortable asking questions. Rather than discouraging curiosity, parents can listen carefully and provide simple, age-appropriate answers. When a question requires more detailed knowledge, seeking guidance from a qualified Islamic teacher can be helpful." },
    { title: "7. Make Islamic Learning Engaging", body: "Children learn best when they are interested and involved. Islamic education does not always have to feel like a formal lesson. Parents can use stories, discussions, activities, age-appropriate books, and real-life examples to introduce Islamic concepts. Learning about the lives of the Prophets, Islamic manners, important duas, and lessons from the Quran can become an enjoyable part of family life." },
    { title: "8. Teach Respect and Kindness at Home", body: "A child's first school is often their home. The way family members communicate with one another can strongly influence a child's behavior. Parents can encourage children to listen when others are speaking, use respectful language, help around the home, and consider other people's feelings. When children experience kindness and respect at home, they are more likely to extend those qualities to teachers, friends, relatives, and others." },
    { title: "9. Help Children Understand Responsibility", body: "Islamic values also include responsibility and trustworthiness. Children can gradually be given age-appropriate responsibilities at home. Simple tasks such as organizing their belongings, helping with household activities, or remembering certain daily routines can teach them accountability. Parents can explain that being responsible is part of becoming a trustworthy and dependable Muslim." },
    { title: "10. Build an Islamic Environment at Home", body: "The home environment has a powerful influence on children. Families can create an Islamic atmosphere through regular Quran recitation, Salah, duas, beneficial conversations, Islamic books, and discussions about good character. This does not mean that every moment needs to be a formal religious lesson. Even small and consistent habits can help children grow up with Islam naturally present in their daily lives." },
    { title: "11. Teach Through Encouragement and Patience", body: "Children are still learning. They will make mistakes, forget things, and sometimes struggle to follow instructions. Parents can correct mistakes while remaining patient and encouraging. Constant criticism can make children associate Islamic learning with pressure, while balanced guidance can help them develop a positive relationship with their faith. Praise genuine effort, explain mistakes calmly, and give children opportunities to improve." },
    { title: "12. Make Dua for Your Children", body: "Alongside teaching and guidance, parents should never underestimate the importance of making dua for their children. Ask Allah to guide them, protect them, give them good character, strengthen their faith, and make them among those who love and follow what is good. Parenting requires patience, consistency, and trust in Allah." },
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
            How to Raise Children with Strong Islamic Values
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-primary-foreground/90 leading-relaxed">
            Practical guidance for Muslim parents on building faith, character, and daily Islamic habits in children.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-gold" /> August 9, 2026</span>
          <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5 text-gold" /> Al Huda Islamic Institute</span>
          <span className="flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5 text-gold" /> Islamic Parenting</span>
        </div>

        <img
          src={kidsImg}
          alt="Muslim children learning Islamic values and Quran with family at home"
          className="rounded-2xl shadow-elegant w-full mb-8"
          loading="lazy"
        />

        <div className="prose prose-lg max-w-none text-foreground/85">
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            Raising children is one of the greatest responsibilities and blessings for parents. Every parent wants their child to grow into a kind, respectful, confident, and responsible person. For Muslim families, this journey also includes helping children develop a strong connection with Allah and understand the beautiful values taught by Islam.
          </p>
          <p className="leading-relaxed mb-8">
            Islamic values are not only about learning religious information. They are reflected in the way children speak, behave, treat others, make decisions, and respond to challenges. When these values are introduced from an early age through love and good example, they can become a natural part of a child's character. Here are some practical ways parents can help raise children with strong Islamic values.
          </p>

          {tips.map((t) => (
            <div key={t.title}>
              <h2 className="text-xl sm:text-2xl font-bold text-primary mt-10 mb-4">{t.title}</h2>
              <p className="leading-relaxed mb-6">{t.body}</p>
            </div>
          ))}

          <h2 className="text-2xl sm:text-3xl font-bold text-primary mt-12 mb-4">Conclusion</h2>
          <p className="leading-relaxed mb-6">
            Raising children with strong Islamic values is a journey rather than a one-time lesson. It begins with the example parents set at home and continues through daily habits, conversations, Quran learning, Salah, good manners, and positive Islamic education. The goal is not simply to teach children what Islam says, but to help them understand its beauty and gradually reflect its values in their everyday lives.
          </p>
          <p className="leading-relaxed mb-6">
            With love, patience, consistency, and the right guidance, parents can help their children grow into individuals who carry their Islamic values with confidence and kindness wherever they go.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-primary mt-12 mb-4">Why Choose Al Huda International Islamic Institute?</h2>
          <p className="leading-relaxed mb-6">
            At <Link to="/about" className="text-primary font-semibold underline">Al Huda International Islamic Institute</Link>, we aim to support Muslim families by providing a positive environment where children and adults can learn the Quran and Islamic teachings with qualified teachers and structured guidance.
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
            Give your child the gift of Quran learning and Islamic education from a trusted academy. Book a <strong>FREE trial class</strong> with Al Huda and let your child meet a certified teacher, try a real lesson, and begin a meaningful journey with the Quran - no payment, no commitment.
          </p>
          <p className="leading-relaxed mb-8">
            Have a question first? <Link to="/contact" className="text-primary font-semibold underline">Contact us</Link> on WhatsApp anytime and our team will guide you personally.
          </p>

          <div className="rounded-2xl bg-gradient-primary text-primary-foreground p-8 text-center mt-10">
            <h4 className="text-xl sm:text-2xl font-bold text-gold mb-3">Ready to Start Your Child's Quran Journey?</h4>
            <p className="text-primary-foreground/90 mb-6">Book your free trial class today - no credit card required.</p>
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
