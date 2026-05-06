import { createFileRoute, Link } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { useEffect, useState } from "react";
import { Layout } from "@/components/site/Layout";
import { SectionDivider } from "@/components/site/SectionDivider";
import { Globe2, GraduationCap, Clock, Users, Star, BookOpen, Sparkles, ShieldCheck, ArrowRight, Quote, PlayCircle, CheckCircle2, Heart, Baby, Mic2, Library, Languages, ScrollText, HandHeart } from "lucide-react";
import heroImg from "@/assets/hero-mosque.jpg";
import quranImg from "@/assets/quran.jpg";
import kidsImg from "@/assets/kids-learning.jpg";
import sisterImg from "@/assets/sister-teacher.jpg";
import brotherImg from "@/assets/brother-teacher.jpg";
import kidBoyLaptop from "@/assets/kid-boy-laptop.jpg";
import kidGirlQuran from "@/assets/kid-girl-quran.jpg";
import kidBoyQuran from "@/assets/kid-boy-quran.jpg";
import kidGirlLaptop from "@/assets/kid-girl-laptop.jpg";
import kidsTogether from "@/assets/kids-quran-together.jpg";
import { CONTACT_WA_URL, TRIAL_WA_URL } from "@/lib/trial";

const heroSlides = [
  { src: kidBoyLaptop, alt: "Muslim boy learning Quran on laptop" },
  { src: kidGirlQuran, alt: "Muslim girl in hijab holding Holy Quran" },
  { src: kidBoyQuran, alt: "Muslim boy reading the Holy Quran" },
  { src: kidGirlLaptop, alt: "Muslim girl studying Quran online on laptop" },
  { src: kidsTogether, alt: "Muslim children reading Quran together" },
];

function ProgramImageRotator({ images, title, delay = 0 }: { images: string[]; title: string; delay?: number }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const start = setTimeout(() => {
      setIdx((i) => (i + 1) % images.length);
    }, delay);
    const id = setInterval(() => setIdx((i) => (i + 1) % images.length), 3500);
    return () => { clearTimeout(start); clearInterval(id); };
  }, [images.length, delay]);
  return (
    <>
      {images.map((src, i) => (
        <img
          key={src + i}
          src={src}
          alt={title}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </>
  );
}

// Each program gets 3 rotating images
const programImageSets: string[][] = [
  [kidBoyQuran, quranImg, kidGirlQuran],
  [kidBoyLaptop, kidsTogether, kidGirlLaptop],
  [brotherImg, kidBoyQuran, sisterImg],
  [quranImg, kidGirlQuran, kidBoyLaptop],
  [sisterImg, kidGirlLaptop, kidBoyLaptop],
  [kidsImg, kidsTogether, quranImg],
  [kidBoyLaptop, kidGirlLaptop, kidsTogether],
  [brotherImg, sisterImg, kidsTogether],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Al Huda International Islamic Institute — Online Quran Classes" },
      { name: "description", content: "Learn Quran online with certified Hafiz & Qari teachers. Nazra, Hifz, Tajweed, Tafseer, Arabic & Islamic Studies for kids and adults across 30+ countries." },
      { property: "og:title", content: "Al Huda International Islamic Institute — Online Quran Classes" },
      { property: "og:description", content: "Read. Learn. Grow in Faith. Book your free trial class today." },
      { property: "og:image", content: "/src/assets/hero-mosque.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const features = [
  { icon: Globe2, title: "100% Online", desc: "Live one-on-one classes from anywhere — phone, tablet or computer." },
  { icon: GraduationCap, title: "Certified Scholars", desc: "Qualified Hafiz, Qari & Masters in Arabic and Islamic Studies." },
  { icon: Clock, title: "Flexible Timing", desc: "Class slots that fit your schedule, across every time zone." },
  { icon: ShieldCheck, title: "Safe & Trusted", desc: "Secure platform, verified teachers, parent monitoring access." },
];

const programs = [
  { title: "Nazra-e-Quran", desc: "Read the Quran fluently with correct pronunciation, starting from Qaida.", icon: BookOpen, level: "Beginner" },
  { title: "Hifz ul Quran", desc: "Complete memorization with Sabaq, Sabqi and Manzil under expert Hifz Masters.", icon: Sparkles, level: "All ages" },
  { title: "Tajweed & Qirat", desc: "Master Makharij and beautiful recitation in classical styles.", icon: Mic2, level: "Intermediate" },
  { title: "Tafseer ul Quran", desc: "Word-by-word meaning and classical Tafseer of every Surah.", icon: ScrollText, level: "Advanced" },
  { title: "Arabic Language", desc: "Conversational and Quranic Arabic taught by language specialists.", icon: Languages, level: "All levels" },
  { title: "Islamic Studies", desc: "Aqeedah, Fiqh, Seerah, Hadith and Akhlaq — a complete grounding in Deen.", icon: Library, level: "All levels" },
  { title: "Kids Quran Program", desc: "Engaging, age-appropriate Quran learning designed for children 4–12.", icon: Baby, level: "Kids" },
  { title: "Male & Female Teachers", desc: "Highly qualified male and female scholars available — providing the best learning experience for your children in a comfortable, professional environment.", icon: Heart, level: "All students" },
];

const steps = [
  { n: "01", title: "Book a Free Trial", desc: "Tell us your goals and preferred time. No card needed." },
  { n: "02", title: "Meet Your Teacher", desc: "Take a 30-minute one-on-one trial class with a certified scholar." },
  { n: "03", title: "Choose Your Plan", desc: "Pick a 2, 3 or 5 days/week schedule that fits your routine." },
  { n: "04", title: "Start Your Journey", desc: "Begin learning, track progress, and grow in faith — In sha Allah." },
];

const testimonials = [
  { name: "Aisha R.", country: "🇬🇧 United Kingdom", text: "My children memorised 5 Juz in one year. The teachers are patient and truly inspiring." },
  { name: "Mohammed S.", country: "🇨🇦 Canada", text: "Best online Quran academy I've enrolled with. Crystal clear voice, perfect Tajweed and very organised." },
  { name: "Fatima H.", country: "🇺🇸 United States", text: "Female teacher for my daughter — professional, kind, knowledgeable. Highly recommend." },
  { name: "Yusuf A.", country: "🇦🇺 Australia", text: "I started Hifz at 35 thinking it was too late. Alhamdulillah I'm on Juz 12 thanks to Al Huda." },
  { name: "Sumayya K.", country: "🇸🇦 Saudi Arabia", text: "The Tafseer course changed how I connect with the Quran. May Allah reward this team." },
  { name: "Ibrahim M.", country: "🇲🇾 Malaysia", text: "Affordable, professional and authentic. My whole family enrolled in different programs." },
  { name: "Khadija N.", country: "🇶🇦 Qatar", text: "The female Ustadha is gentle, qualified and my daughters love their classes. Truly a blessing." },
  { name: "Abdullah T.", country: "🇦🇪 UAE", text: "I improved my Tajweed in just 3 months. The Qari sahab is a master of his craft." },
  { name: "Hafsa I.", country: "🇮🇪 Ireland", text: "Booked a free trial — within minutes I was sure. The teachers are world-class, mashaAllah." },
  { name: "Bilal K.", country: "🇳🇿 New Zealand", text: "Living far from any masjid, this academy brought authentic Islamic knowledge to my home." },
  { name: "Maryam Z.", country: "🇿🇦 South Africa", text: "My 6-year-old finished Qaida in 4 months. The kids program is genuinely engaging." },
  { name: "Omar F.", country: "🇩🇪 Germany", text: "Flexible timings even for my late-night work shifts. Sheikh is extremely knowledgeable." },
  { name: "Zainab A.", country: "🇫🇷 France", text: "After years of looking, I finally found teachers who teach Tafseer with depth and clarity." },
  { name: "Saad R.", country: "🇸🇪 Sweden", text: "Mufti sahab answered all my fiqh questions with proof. May Allah preserve him." },
  { name: "Ruqayya M.", country: "🇰🇼 Kuwait", text: "Beautiful experience. My Arabic has improved more in 6 months than 2 years of college." },
  { name: "Tariq H.", country: "🇮🇳 India", text: "Honest, sincere teachers. They truly care about each student's progress, not just fees." },
  { name: "Nusayba B.", country: "🇧🇭 Bahrain", text: "The female-only sister classes are a safe, beautiful environment for women to learn." },
  { name: "Imran S.", country: "🇵🇰 Pakistan", text: "Even living in Pakistan, I chose Al Huda for the international standard of teaching." },
  { name: "Layla J.", country: "🇪🇸 Spain", text: "From zero Arabic to reading Quran in 5 months — alhamdulillah, I cried in my first khatam." },
  { name: "Hamza Q.", country: "🇹🇷 Turkey", text: "Professional dashboard, on-time classes, kind teachers. Exactly what a busy parent needs." },
  { name: "Safiya L.", country: "🇳🇱 Netherlands", text: "My son was scared of Arabic letters. His teacher made him love them. SubhanAllah." },
  { name: "Junaid W.", country: "🇧🇪 Belgium", text: "Sponsored my mother for Tafseer classes — best gift I ever gave her. JazakAllah khair." },
  { name: "Asma D.", country: "🇳🇴 Norway", text: "Trial was free and there was zero pressure. The teaching itself convinced me to enroll." },
  { name: "Faisal G.", country: "🇪🇬 Egypt", text: "Even native Arabs benefit — the Tajweed precision and Qirat styles taught here are exceptional." },
  { name: "Hina V.", country: "🇲🇦 Morocco", text: "My daughter is now memorising Surah Mulk. The patience of her teacher is unmatched." },
  { name: "Adnan P.", country: "🇯🇴 Jordan", text: "Highly recommended for converts. They explain everything from the absolute basics with respect." },
];

const countries = ["🇨🇦 Canada", "🇺🇸 USA", "🇬🇧 UK", "🇮🇪 Ireland", "🇦🇺 Australia", "🇳🇿 New Zealand", "🇸🇦 Saudi Arabia", "🇶🇦 Qatar", "🇦🇪 UAE", "🇲🇾 Malaysia"];

function Home() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {heroSlides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            width={1920}
            height={1280}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 pattern-bg" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 text-center text-primary-foreground">
          <p className="font-arabic text-6xl sm:text-8xl text-gold mb-6 animate-fade-in drop-shadow-[0_4px_20px_rgba(212,168,32,0.3)]">اقرأ</p>
          <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-gold/90 mb-4 animate-fade-up">Al Huda International Islamic Institute</p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gold mb-6 animate-fade-up leading-tight">Read. Learn. <span className="block sm:inline">Grow in Faith.</span></h1>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-primary-foreground/90 mb-8 animate-fade-up leading-relaxed">
            Discover a transformative journey through the Holy Qur'an and the timeless beauty of Islam. At Al Huda International Islamic Institute, certified Hafiz, Qari and female scholars deliver authentic, one-on-one live classes — Nazra, Hifz, Tajweed, Tafseer, Arabic and Islamic Studies — for every age and every level. From a child's very first letter to a parent's deepest reflection on the Word of Allah, we guide families across 30+ countries with patience, sincerity and the highest standard of teaching, In sha Allah — so that every heart may read, learn and grow in faith.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up">
            <a href={TRIAL_WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 font-semibold text-primary shadow-gold hover:scale-[1.03] transition-transform">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/courses" className="inline-flex items-center gap-2 rounded-md border-2 border-gold/70 bg-primary/30 backdrop-blur-sm px-7 py-3.5 font-semibold text-gold hover:bg-gold hover:text-primary transition-colors">
              <PlayCircle className="h-5 w-5" /> Explore Courses
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs sm:text-sm text-primary-foreground/80 animate-fade-up">
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Free 3-day trial</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> No credit card required</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Certified teachers only</span>
          </div>
        </div>
      </section>

      {/* TRUST BAR moved below Teacher Showcase */}

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="relative">
            <img src={quranImg} alt="Holy Quran on a wooden rehal stand" width={1280} height={960} loading="lazy" className="rounded-2xl shadow-elegant w-full" />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-gradient-gold text-primary px-6 py-4 rounded-xl shadow-gold">
              <div className="font-display text-2xl font-bold">Since 2013</div>
              <div className="text-xs uppercase tracking-wider">Trusted Worldwide</div>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-3">Welcome to Al Huda</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-5 leading-tight">A Spiritual Journey Through the Holy Quran</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Al Huda International Islamic Institute is a Riyadh, Saudi Arabia based online academy delivering authentic, structured Quran &amp; Islamic education to students worldwide since 2013. Our certified male and female teachers — including Hafiz al-Quran with mastery in Arabic, Tajweed, Tafseer and Islamic Studies — teach in English, Urdu, Arabic and more, guiding students of every age toward a deep, lifelong relationship with the Book of Allah.
            </p>
            <ul className="space-y-2.5 mb-7">
              {["One-on-one live classes with certified scholars", "Teachers available in English, Urdu, Arabic & more languages", "Structured curriculum from Qaida to Hifz & Tafseer", "Dedicated female teachers for sisters and girls", "Monthly progress reports for parents"].map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-foreground/85">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" /> {p}
                </li>
              ))}
            </ul>
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
          <h2 className="mt-4 text-center text-3xl sm:text-4xl font-bold text-primary">Why Families Choose Al Huda</h2>
          <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">A premium online learning experience trusted by Muslim families across the globe.</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="group rounded-2xl bg-card p-7 shadow-sm hover:shadow-elegant transition-all border border-border/60 hover:-translate-y-1 hover:border-gold/40">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary shadow-gold mb-5 ring-1 ring-gold/30">
                  <f.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionDivider />
        <h2 className="mt-4 text-center text-3xl sm:text-4xl font-bold text-primary">Our Programs</h2>
        <p className="mt-3 text-center text-muted-foreground">Structured curricula for every level — from your first letter to complete Hifz.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((c, i) => (
            <div key={c.title} className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card hover:border-gold/60 hover:shadow-gold transition-all">
              <div className="relative aspect-[4/3] overflow-hidden">
                <ProgramImageRotator images={programImageSets[i % programImageSets.length]} title={c.title} delay={i * 600} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-gold shadow-gold z-10">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-semibold text-primary text-lg mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{c.desc}</p>
                <span className="inline-block w-fit rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">{c.level}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/courses" className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3 font-semibold text-primary-foreground hover:bg-primary-glow transition-colors">
            View All Courses <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* TEACHER SHOWCASE */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <SectionDivider />
          <h2 className="mt-4 text-center text-3xl sm:text-4xl font-bold text-primary">Meet Our Certified Teachers</h2>
          <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">Qualified Hafiz, Qaris and female Ustadhas — handpicked for knowledge, patience and care.</p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-3xl shadow-elegant">
              <img src={brotherImg} alt="Male Hafiz Quran teacher teaching online" width={1280} height={960} loading="lazy" className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-primary-foreground">
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">For Brothers &amp; Children</p>
                <h3 className="font-display text-2xl font-bold text-gold mb-2">Male Hafiz &amp; Qari Scholars</h3>
                <p className="text-sm text-primary-foreground/85">Hifz Masters with Ijazah, certified in Tajweed, Qirat and Islamic Studies.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl shadow-elegant">
              <img src={sisterImg} alt="Female hijabi Quran teacher teaching online" width={1280} height={960} loading="lazy" className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-primary-foreground">
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Qualified Female Scholars</p>
                <h3 className="font-display text-2xl font-bold text-gold mb-2">Female Hafiza &amp; Ustadha Teachers</h3>
                <p className="text-sm text-primary-foreground/85">Highly qualified female teachers providing a comfortable, professional and halal learning environment for students of every age.</p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link to="/teachers" className="inline-flex items-center gap-2 font-semibold text-primary hover:text-gold transition-colors">Meet all our teachers <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionDivider />
        <h2 className="mt-4 text-center text-3xl sm:text-4xl font-bold text-primary">How It Works</h2>
        <p className="mt-3 text-center text-muted-foreground">Get started in 4 simple steps.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-border/70 bg-card p-7 hover:shadow-elegant transition-shadow">
              <div className="font-display text-5xl font-bold text-gradient-gold mb-3">{s.n}</div>
              <h3 className="font-semibold text-primary text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KIDS BANNER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-0 md:grid-cols-2 rounded-3xl overflow-hidden shadow-elegant bg-gradient-primary text-primary-foreground">
          <div className="p-10 sm:p-14 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 pattern-bg" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3 font-semibold">For Kids 4–12</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gold mb-4 leading-tight">A Joyful Quran Journey For Your Child</h2>
              <p className="text-primary-foreground/85 leading-relaxed mb-6">Engaging, age-appropriate lessons with patient teachers — your child will love their classes and grow in love for the Quran.</p>
              <ul className="space-y-2 mb-7 text-sm text-primary-foreground/90">
                {["Fun, interactive Qaida & Nazra", "Daily duas, surahs and Islamic stories", "Reward charts & progress badges", "Parent updates after every class"].map((i) => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> {i}</li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 self-start rounded-md bg-gradient-gold px-6 py-3 font-semibold text-primary shadow-gold hover:scale-[1.03] transition-transform">
                Enroll Your Child <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative min-h-[280px] md:min-h-[460px]">
            <img src={kidsImg} alt="Muslim child happily learning Quran online" width={1280} height={960} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* COUNTRIES */}
      <section className="bg-gradient-primary text-primary-foreground relative overflow-hidden mt-20">
        <div className="absolute inset-0 pattern-bg" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3 font-semibold">Global Reach</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gold mb-3">Serving Students Worldwide</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10">Trusted by Muslim families across continents.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {countries.map((c) => (
              <span key={c} className="rounded-full border border-gold/40 bg-primary-foreground/5 px-5 py-2.5 text-sm font-medium backdrop-blur-sm hover:bg-gold/15 transition-colors">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR / STATS */}
      <section className="bg-primary text-primary-foreground border-y border-gold/20">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: "500+", l: "Active Students" },
            { n: "30+", l: "Countries Served" },
            { n: "40+", l: "Certified Teachers" },
            { n: "4.9★", l: "Average Rating" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl sm:text-5xl font-bold text-gold">{s.n}</div>
              <div className="mt-2 text-xs sm:text-sm uppercase tracking-wider text-primary-foreground/80">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionDivider />
          <h2 className="mt-4 text-center text-3xl sm:text-4xl font-bold text-primary">Words from Our Students</h2>
          <p className="mt-3 text-center text-muted-foreground">Real stories from families around the world — sliding past, one heart at a time.</p>
        </div>
        <div className="mt-12 marquee-pause mask-fade-x">
          <div className="flex w-max gap-6 animate-marquee">
            {[...testimonials, ...testimonials].map((t, i) => (
              <article key={`${t.name}-${i}`} className="w-[320px] sm:w-[360px] shrink-0 rounded-2xl bg-card p-7 shadow-sm border border-border/60 relative">
                <Quote className="absolute -top-3 left-6 h-8 w-8 text-gold bg-background p-1.5 rounded-full" />
                <div className="flex gap-1 mb-3 mt-2">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
                <p className="text-sm text-foreground/90 italic leading-relaxed mb-5 line-clamp-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-gold font-bold text-sm ring-1 ring-gold/30">
                    {t.name.split(" ").map((s) => s[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-primary text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.country}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DONATION */}
      <section className="mx-auto max-w-7xl px-4 pt-4 pb-16 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border-2 border-gold/40 bg-card p-10 sm:p-14 shadow-elegant">
          <div className="grid gap-8 lg:grid-cols-[auto_1fr] items-center">
            <div className="flex justify-center">
              <span className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-primary shadow-gold ring-4 ring-gold/30">
                <HandHeart className="h-12 w-12 text-gold" />
              </span>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-2">Donate Now</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 leading-tight">Support Our Welfare Projects</h2>
              <p className="text-foreground/80 leading-relaxed mb-6 max-w-3xl">
                Al-Huda International Islamic Institute runs many welfare projects. We provide financial and other support to poor people and orphans. If you want to be part of this noble cause, please donate now. <span className="font-semibold text-primary">Zakat is also accepted.</span>
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <Link to="/sadaqah" className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 font-semibold text-primary shadow-gold hover:scale-[1.03] transition-transform">
                  <Heart className="h-5 w-5" /> Donate Now
                </Link>
                <a href={CONTACT_WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border-2 border-primary/30 bg-secondary px-7 py-3.5 font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                  <WhatsAppIcon className="h-5 w-5" /> Discuss on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 sm:p-16 text-center text-primary-foreground shadow-elegant">
          <div className="absolute inset-0 pattern-bg" />
          <div className="relative">
            <p className="font-arabic text-3xl sm:text-4xl text-gold mb-4">طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ</p>
            <Users className="h-12 w-12 text-gold mx-auto mb-4" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gold mb-4">Begin Your Quran Journey Today</h2>
            <p className="text-primary-foreground/85 max-w-2xl mx-auto mb-8">Book a free trial class with one of our certified teachers — no credit card required, In sha Allah.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={TRIAL_WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 font-semibold text-primary shadow-gold hover:scale-[1.03] transition-transform">
                Book Free Trial <ArrowRight className="h-4 w-4" />
              </a>
              <a href={CONTACT_WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-3.5 font-semibold text-white hover:opacity-95 transition-opacity">
                <WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
