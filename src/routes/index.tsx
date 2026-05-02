import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionDivider } from "@/components/site/SectionDivider";
import { Globe2, GraduationCap, Clock, Users, Star, BookOpen, Sparkles, ShieldCheck, ArrowRight, Quote } from "lucide-react";
import heroImg from "@/assets/hero-mosque.jpg";
import quranImg from "@/assets/quran.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Al-Iqra Global — Online Quran & Islamic Institute" },
      { name: "description", content: "Learn Quran online with certified Hafiz & Qari teachers. Nazra, Hifz, Tajweed, Tafseer, Arabic & Islamic Studies for kids and adults across 30+ countries." },
      { property: "og:title", content: "Al-Iqra Global — Online Quran & Islamic Institute" },
      { property: "og:description", content: "Read. Learn. Grow in Faith. Book your free trial class today." },
    ],
  }),
  component: Home,
});

const features = [
  { icon: Globe2, title: "100% Online", desc: "Learn from anywhere on any device with one-on-one live classes." },
  { icon: GraduationCap, title: "Certified Teachers", desc: "Qualified male & female Hafiz, Qari and Islamic scholars." },
  { icon: Clock, title: "Flexible Timing", desc: "Book classes that fit your schedule across all time zones." },
  { icon: Globe2, title: "30+ Countries", desc: "Serving Muslim families in USA, UK, Canada, Australia, GCC & more." },
];

const courses = [
  { title: "Nazra-e-Quran", desc: "Read the Holy Quran with correct pronunciation.", icon: BookOpen },
  { title: "Hifz ul Quran", desc: "Memorize the Quran step-by-step with revision plans.", icon: Sparkles },
  { title: "Tajweed & Qirat", desc: "Master the rules of recitation in beautiful voice.", icon: Star },
  { title: "Tafseer ul Quran", desc: "Understand the meaning and message of every ayah.", icon: ShieldCheck },
];

const testimonials = [
  { name: "Aisha R.", country: "🇬🇧 United Kingdom", text: "My children memorised 5 Juz in one year. The teachers are patient and truly inspiring." },
  { name: "Mohammed S.", country: "🇨🇦 Canada", text: "Best online Quran academy I've enrolled with. Clear voice, perfect Tajweed." },
  { name: "Fatima H.", country: "🇺🇸 United States", text: "Female teacher for my daughter — professional, kind and very knowledgeable." },
];

const countries = ["🇨🇦 Canada", "🇺🇸 USA", "🇬🇧 UK", "🇮🇪 Ireland", "🇦🇺 Australia", "🇳🇿 New Zealand", "🇸🇦 Saudi Arabia", "🇶🇦 Qatar", "🇦🇪 UAE", "🇲🇾 Malaysia"];

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img src={heroImg} alt="Mosque at golden hour" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 pattern-bg" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 text-center text-primary-foreground">
          <p className="font-arabic text-6xl sm:text-7xl text-gold mb-6 animate-fade-in">اقرأ</p>
          <p className="text-sm uppercase tracking-[0.3em] text-gold/90 mb-4 animate-fade-up">Al-Iqra Global Institute</p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gold mb-6 animate-fade-up">Read. Learn. Grow in Faith.</h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-primary-foreground/90 mb-10 animate-fade-up">
            World-class online Quran &amp; Islamic education for every age — taught by certified Hafiz and Qari scholars in over 30 countries.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 font-semibold text-primary shadow-gold hover:scale-[1.03] transition-transform">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/courses" className="inline-flex items-center gap-2 rounded-md border-2 border-gold/70 px-7 py-3.5 font-semibold text-gold hover:bg-gold hover:text-primary transition-colors">
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: "500+", l: "Students" },
            { n: "30+", l: "Countries" },
            { n: "10+", l: "Teachers" },
            { n: "5★", l: "Rating" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl sm:text-5xl font-bold text-gold">{s.n}</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/80">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="relative">
            <img src={quranImg} alt="Holy Quran on a wooden stand" width={1280} height={960} loading="lazy" className="rounded-xl shadow-elegant" />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-gradient-gold text-primary px-6 py-4 rounded-lg shadow-gold">
              <div className="font-display text-2xl font-bold">Since 2018</div>
              <div className="text-xs uppercase tracking-wider">Trusted Worldwide</div>
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-gold font-semibold mb-3">Welcome</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-5">A Spiritual Journey Through the Quran</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Al-Iqra Global Quran &amp; Islamic Institute is dedicated to providing authentic, structured online Quran education. Our certified male and female teachers — many of whom are Hafiz al-Quran with mastery in Arabic, Tajweed, Tafseer and Islamic Studies — guide students of every age toward a deep, lifelong relationship with the Book of Allah.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From your first letter of Arabic to completing Hifz, we walk with you every step of the way.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 font-semibold text-primary hover:text-gold transition-colors">
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <SectionDivider />
          <h2 className="mt-4 text-center text-3xl sm:text-4xl font-bold text-primary">Why Families Choose Al-Iqra</h2>
          <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">Premium online learning experience trusted by Muslim families across the globe.</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="group rounded-xl bg-card p-6 shadow-sm hover:shadow-elegant transition-all border border-border/60 hover:-translate-y-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary shadow-gold mb-5 ring-1 ring-gold/30">
                  <f.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionDivider />
        <h2 className="mt-4 text-center text-3xl sm:text-4xl font-bold text-primary">Our Courses</h2>
        <p className="mt-3 text-center text-muted-foreground">Structured curricula for every level and age group.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((c) => (
            <div key={c.title} className="rounded-xl border border-border/70 bg-card p-6 hover:border-gold/60 hover:shadow-gold transition-all">
              <c.icon className="h-8 w-8 text-gold mb-4" />
              <h3 className="font-semibold text-primary text-lg mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/courses" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-glow transition-colors">
            View All Courses <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* COUNTRIES */}
      <section className="bg-gradient-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-gold mb-3 font-semibold">Global Reach</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-8">Serving Students In</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {countries.map((c) => (
              <span key={c} className="rounded-full border border-gold/40 bg-primary-foreground/5 px-5 py-2 text-sm font-medium backdrop-blur-sm">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionDivider />
        <h2 className="mt-4 text-center text-3xl sm:text-4xl font-bold text-primary">Words from Our Students</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl bg-card p-7 shadow-sm border border-border/60 relative">
              <Quote className="absolute -top-3 left-6 h-8 w-8 text-gold bg-background p-1.5 rounded-full" />
              <div className="flex gap-1 mb-3 mt-2">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="text-sm text-foreground/90 italic leading-relaxed mb-5">"{t.text}"</p>
              <div>
                <div className="font-semibold text-primary">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.country}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 sm:p-16 text-center text-primary-foreground shadow-elegant">
          <div className="absolute inset-0 pattern-bg" />
          <div className="relative">
            <Users className="h-12 w-12 text-gold mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-4">Begin Your Journey Today</h2>
            <p className="text-primary-foreground/85 max-w-2xl mx-auto mb-8">Book a free trial class with one of our certified teachers — no credit card required.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 font-semibold text-primary shadow-gold hover:scale-[1.03] transition-transform">
              Book Free Trial <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
