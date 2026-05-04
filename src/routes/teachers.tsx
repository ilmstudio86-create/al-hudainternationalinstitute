import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { GraduationCap, Award, Languages, BookOpen, Star, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { TRIAL_WA_URL } from "@/lib/trial";

export const Route = createFileRoute("/teachers")({
  head: () => ({
    meta: [
      { title: "Our Teachers — Certified Hafiz, Qari & Scholars | Al Huda International Islamic Institute" },
      { name: "description", content: "Meet our certified male & female Quran teachers — Mufti, Hafiz, Qaris and Hafizahs, fluent in English, Arabic and Urdu." },
      { property: "og:title", content: "Meet Our Teachers — Al Huda International Islamic Institute" },
      { property: "og:description", content: "Qualified Mufti, Hafiz, Qari, Hafizah and Islamic scholars dedicated to your Quran journey." },
    ],
  }),
  component: Teachers,
});

type Teacher = {
  name: string;
  qual: string;
  spec: string;
  langs: string;
  exp: string;
  gender: "M" | "F";
};

// Lead scholar — featured alone at the top
const lead: Teacher = {
  name: "Mufti Sheikh Maulana Nisaar Ahmad",
  qual: "Mufti · Master in Islamic & Arabic Studies",
  spec: "Tajweed, Qirat, Tafseer & Translation (English · Arabic · Urdu)",
  langs: "English · Arabic · Urdu",
  exp: "15+ years",
  gender: "M",
};

// 3 senior scholars
const seniors: Teacher[] = [
  {
    name: "Maulana Rashid Taryaq",
    qual: "Specialist in Basic Islamic Studies",
    spec: "Tarjuma, Tafseer & Basic Islamic Studies",
    langs: "Urdu · Hindi",
    exp: "12+ years",
    gender: "M",
  },
  {
    name: "Maulana Riyaz Ahmed",
    qual: "Quran Foundation Instructor",
    spec: "Qaida, Tajweed & Tafseer",
    langs: "Urdu · Arabic",
    exp: "10+ years",
    gender: "M",
  },
  {
    name: "Hafizah Ustadah Rehana Siddiqui",
    qual: "Nazra & Qaida Specialist",
    spec: "Qaida, Tajweed Rules & Nazra Quran",
    langs: "Urdu · English",
    exp: "9+ years",
    gender: "F",
  },
];

// 4 additional teachers — mix of male and female
const additional: Teacher[] = [
  {
    name: "Qari Bilal Hussain",
    qual: "Qari with Sanad in 7 Qiraat",
    spec: "Tajweed & Beautiful Recitation",
    langs: "Arabic · Urdu",
    exp: "11+ years",
    gender: "M",
  },
  {
    name: "Hafizah Aisha Tariq",
    qual: "Hafizah al-Quran",
    spec: "Nazra, Tajweed & Hifz for Sisters",
    langs: "Urdu · English",
    exp: "8+ years",
    gender: "F",
  },
  {
    name: "Hafiz Abdullah Yusuf",
    qual: "Hafiz al-Quran with Ijazah",
    spec: "Hifz & Sabqi Manzil",
    langs: "Arabic · English",
    exp: "8+ years",
    gender: "M",
  },
  {
    name: "Ustadah Maryam Siddiqua",
    qual: "MA Islamic Studies",
    spec: "Tafseer & Islamic Studies for Women",
    langs: "Urdu · English",
    exp: "10+ years",
    gender: "F",
  },
];

function Avatar({ name, gender, large = false }: { name: string; gender: "M" | "F"; large?: boolean }) {
  const initials = name
    .replace(/^(Mufti|Sheikh|Maulana|Hafiz|Hafizah|Qari|Ustadah|Ustadh)\s+/i, "")
    .split(" ")
    .slice(0, 2)
    .map((s) => s[0])
    .join("");
  const size = large ? "h-32 w-32 text-4xl" : "h-20 w-20 text-xl";
  return (
    <div
      className={`flex items-center justify-center rounded-full font-bold ring-4 ring-gold/30 ${size} ${
        gender === "F"
          ? "bg-gradient-to-br from-rose-100 via-amber-50 to-amber-100 text-primary"
          : "bg-gradient-primary text-gold"
      }`}
    >
      {initials}
    </div>
  );
}

const stats = [
  { icon: Users, n: "8", l: "Featured Teachers" },
  { icon: Award, n: "100%", l: "Certified Scholars" },
  { icon: Languages, n: "4+", l: "Languages Spoken" },
  { icon: ShieldCheck, n: "24/7", l: "Time-Zone Coverage" },
];

function TeacherCard({ t }: { t: Teacher }) {
  return (
    <div className="rounded-2xl border border-gold/30 bg-card p-7 text-center hover:shadow-gold hover:border-gold transition-all">
      <div className="flex justify-center mb-5">
        <Avatar name={t.name} gender={t.gender} />
      </div>
      <h3 className="font-bold text-primary text-lg leading-tight">{t.name}</h3>
      <p className="mt-2 text-xs text-gold uppercase tracking-wider font-semibold flex items-center justify-center gap-1">
        <GraduationCap className="h-3.5 w-3.5" /> {t.qual}
      </p>
      <p className="mt-3 text-sm text-muted-foreground">{t.spec}</p>
      <div className="mt-4 pt-4 border-t border-border/60 space-y-1 text-xs text-foreground/70">
        <div className="flex items-center justify-center gap-1.5"><Languages className="h-3 w-3 text-gold" /> {t.langs}</div>
        <div className="flex items-center justify-center gap-1.5"><Award className="h-3 w-3 text-gold" /> {t.exp} experience</div>
      </div>
    </div>
  );
}

function Teachers() {
  return (
    <Layout>
      <PageHero
        arabic="مُعَلِّمُونَا"
        title="Our Certified Teachers"
        subtitle="A handpicked faculty led by our chief Mufti — qualified male and female scholars dedicated to your Quran journey."
      />

      {/* Stats strip */}
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.l} className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-gold ring-1 ring-gold/30">
                <s.icon className="h-5 w-5 text-gold" />
              </span>
              <div>
                <div className="font-display text-2xl font-bold text-primary leading-none">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.l}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lead scholar — alone at top */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-2">Chief Scholar</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">Leading Our Institute</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-3xl border-2 border-gold/40 bg-card p-10 text-center shadow-elegant hover:shadow-gold transition-all">
            <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-bold text-primary uppercase tracking-wider shadow-gold">
              <Star className="h-3 w-3 fill-primary" /> Chief Mufti
            </span>
            <div className="flex justify-center mb-6">
              <Avatar name={lead.name} gender={lead.gender} large />
            </div>
            <h3 className="font-display text-2xl font-bold text-primary">{lead.name}</h3>
            <p className="mt-3 text-xs text-gold uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5">
              <GraduationCap className="h-4 w-4" /> {lead.qual}
            </p>
            <p className="mt-4 text-base text-muted-foreground max-w-lg mx-auto">{lead.spec}</p>
            <div className="mt-6 pt-6 border-t border-border/60 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-foreground/80">
              <span className="flex items-center gap-1.5"><Languages className="h-4 w-4 text-gold" /> {lead.langs}</span>
              <span className="flex items-center gap-1.5"><Award className="h-4 w-4 text-gold" /> {lead.exp} experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 senior teachers */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-2">Senior Faculty</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Our Senior Scholars</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {seniors.map((t) => <TeacherCard key={t.name} t={t} />)}
          </div>
        </div>
      </section>

      {/* 4 additional teachers */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-2">Our Faculty</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">Additional Certified Teachers</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {additional.map((t) => <TeacherCard key={t.name} t={t} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 sm:p-14 text-center text-primary-foreground shadow-elegant">
          <div className="absolute inset-0 pattern-bg" />
          <div className="relative">
            <BookOpen className="h-12 w-12 text-gold mx-auto mb-4" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gold mb-3">Match With Your Perfect Teacher</h2>
            <p className="text-primary-foreground/85 max-w-2xl mx-auto mb-7">
              Tell us your goals, gender preference, language and time zone — we'll pair you with the ideal teacher and start your free 3-day trial today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={TRIAL_WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 font-semibold text-primary shadow-gold hover:scale-[1.03] transition-transform"
              >
                Book Free Trial <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 rounded-md border-2 border-gold/60 bg-primary/30 px-7 py-3.5 font-semibold text-gold hover:bg-gold hover:text-primary transition-colors"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
