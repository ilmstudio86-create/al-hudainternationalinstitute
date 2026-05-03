import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { GraduationCap, Award, Languages, BookOpen, Star, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { TRIAL_WA_URL } from "@/lib/trial";

export const Route = createFileRoute("/teachers")({
  head: () => ({
    meta: [
      { title: "Our Teachers — 40+ Certified Hafiz, Qari & Scholars | Al Huda International Islamic Institute" },
      { name: "description", content: "Meet 40+ certified male & female Quran teachers — Hafiz, Qaris, Mufti and Masters in Arabic & Islamic Studies, fluent in English, Arabic and Urdu." },
      { property: "og:title", content: "Meet Our Teachers — Al Huda International Islamic Institute" },
      { property: "og:description", content: "40+ qualified Hafiz, Qari, Hafizah and Islamic scholars dedicated to your Quran journey." },
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

const featured: Teacher[] = [
  {
    name: "Sheikh Maulana Nisaar Ahmad",
    qual: "Master in Islamic & Arabic Studies",
    spec: "Tajweed, Qirat, Tafseer & Translation",
    langs: "English · Arabic · Urdu",
    exp: "15+ years",
    gender: "M",
  },
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

// Wider faculty roster — 36 additional certified teachers
const roster: Teacher[] = [
  { name: "Hafiz Abdullah Yusuf", qual: "Hafiz al-Quran with Ijazah", spec: "Hifz & Sabqi Manzil", langs: "Arabic · English", exp: "8+ yrs", gender: "M" },
  { name: "Qari Bilal Hussain", qual: "Qari with Sanad in 7 Qiraat", spec: "Tajweed & Qirat", langs: "Arabic · Urdu", exp: "11+ yrs", gender: "M" },
  { name: "Mufti Imran Khalid", qual: "Mufti, Jamia Darul Uloom", spec: "Fiqh & Islamic Rulings", langs: "Urdu · English · Arabic", exp: "13+ yrs", gender: "M" },
  { name: "Sheikh Abdul Rahman", qual: "Master in Tafseer", spec: "Tafseer ul Quran (Advanced)", langs: "Arabic · English", exp: "14+ yrs", gender: "M" },
  { name: "Hafiz Saad Iqbal", qual: "Hafiz with Tajweed Ijazah", spec: "Hifz & Daur ul Quran", langs: "Urdu · English", exp: "7+ yrs", gender: "M" },
  { name: "Maulana Tariq Mahmood", qual: "Aalim Course Graduate", spec: "Hadith, Seerah & Aqeedah", langs: "Urdu · English", exp: "10+ yrs", gender: "M" },
  { name: "Qari Yasir Ahmad", qual: "Ijazah in Hafs an Asim", spec: "Tajweed & Recitation", langs: "Arabic · Urdu", exp: "9+ yrs", gender: "M" },
  { name: "Sheikh Omar Faruq", qual: "BA Islamic Studies, Madinah", spec: "Arabic Language (Quranic)", langs: "Arabic · English", exp: "8+ yrs", gender: "M" },
  { name: "Hafiz Zubair Ali", qual: "Hafiz al-Quran", spec: "Nazra & Junior Hifz", langs: "Urdu · English", exp: "6+ yrs", gender: "M" },
  { name: "Maulana Adnan Sheikh", qual: "Specialist in Tarjuma", spec: "Word-by-word Quran Translation", langs: "Urdu · English", exp: "9+ yrs", gender: "M" },
  { name: "Qari Hamza Iqbal", qual: "Qari, Sanad in Qirat", spec: "Beautiful Qirat & Lahjat", langs: "Arabic · Urdu", exp: "7+ yrs", gender: "M" },
  { name: "Sheikh Mustafa Karim", qual: "MA Arabic, Al-Azhar", spec: "Arabic Grammar & Conversation", langs: "Arabic · English", exp: "12+ yrs", gender: "M" },
  { name: "Hafiz Usman Tariq", qual: "Hafiz al-Quran", spec: "Kids Hifz Program", langs: "Urdu · English", exp: "5+ yrs", gender: "M" },
  { name: "Maulana Faisal Aziz", qual: "Aalim & Mufti Specialist", spec: "Fiqh, Hadith & Aqeedah", langs: "Urdu · Arabic", exp: "11+ yrs", gender: "M" },
  { name: "Qari Junaid Akhtar", qual: "Tajweed Master", spec: "Makharij & Sifaat", langs: "Arabic · Urdu", exp: "8+ yrs", gender: "M" },
  { name: "Sheikh Ibrahim Noor", qual: "Bachelors in Quran & Sunnah", spec: "Tafseer & Seerah", langs: "Arabic · English", exp: "10+ yrs", gender: "M" },
  { name: "Hafiz Mohsin Raza", qual: "Hafiz with Ijazah", spec: "Hifz Revision (Daur)", langs: "Urdu · English", exp: "7+ yrs", gender: "M" },
  { name: "Maulana Kamran Ali", qual: "Aalim Course", spec: "Basic Islamic Studies for Adults", langs: "Urdu · English", exp: "9+ yrs", gender: "M" },

  { name: "Hafizah Aisha Tariq", qual: "Hafizah al-Quran", spec: "Nazra, Tajweed & Hifz for Sisters", langs: "Urdu · English", exp: "8+ yrs", gender: "F" },
  { name: "Ustadah Maryam Siddiqua", qual: "MA Islamic Studies", spec: "Tafseer & Islamic Studies for Women", langs: "Urdu · English", exp: "10+ yrs", gender: "F" },
  { name: "Hafizah Sumayya Khan", qual: "Hafizah with Tajweed Ijazah", spec: "Tajweed & Beautiful Recitation", langs: "Urdu · Arabic", exp: "7+ yrs", gender: "F" },
  { name: "Ustadah Khadija Nawaz", qual: "Aalimah Course Graduate", spec: "Aqeedah, Fiqh & Seerah for Sisters", langs: "Urdu · English", exp: "9+ yrs", gender: "F" },
  { name: "Hafizah Zainab Ahmed", qual: "Hafizah al-Quran", spec: "Kids Quran (Girls)", langs: "Urdu · English", exp: "6+ yrs", gender: "F" },
  { name: "Ustadah Fatima Rizvi", qual: "BA Arabic & Islamic Studies", spec: "Quranic Arabic for Women", langs: "Arabic · Urdu · English", exp: "8+ yrs", gender: "F" },
  { name: "Hafizah Ruqayya Iqbal", qual: "Hafizah with Sanad", spec: "Hifz Program for Girls", langs: "Urdu · English", exp: "7+ yrs", gender: "F" },
  { name: "Ustadah Hafsa Imran", qual: "MA Tafseer Studies", spec: "Tafseer for Sisters (Weekly)", langs: "Urdu · English", exp: "9+ yrs", gender: "F" },
  { name: "Hafizah Safiya Yusuf", qual: "Hafizah al-Quran", spec: "Qaida & Nazra (Beginners)", langs: "Urdu · English", exp: "5+ yrs", gender: "F" },
  { name: "Ustadah Asma Bilal", qual: "Aalimah Specialist", spec: "Basic Islamic Studies for Girls", langs: "Urdu · English", exp: "7+ yrs", gender: "F" },
  { name: "Hafizah Layla Mahmood", qual: "Hafizah with Ijazah", spec: "Tajweed Rules & Recitation", langs: "Urdu · Arabic", exp: "8+ yrs", gender: "F" },
  { name: "Ustadah Bushra Ahmad", qual: "MA Islamic Studies", spec: "Hadith & Akhlaq for Women", langs: "Urdu · English", exp: "10+ yrs", gender: "F" },
  { name: "Hafizah Amina Tahir", qual: "Hafizah al-Quran", spec: "Daur ul Quran (Sisters)", langs: "Urdu · English", exp: "6+ yrs", gender: "F" },
  { name: "Ustadah Nusayba Khan", qual: "BA Quran & Sunnah", spec: "Seerah & Stories of Sahabah", langs: "Urdu · English", exp: "8+ yrs", gender: "F" },
  { name: "Hafizah Iman Saeed", qual: "Hafizah with Tajweed Cert.", spec: "Kids Tajweed & Surah Memorization", langs: "Urdu · English", exp: "5+ yrs", gender: "F" },
  { name: "Ustadah Salma Idris", qual: "Diploma in Quranic Arabic", spec: "Arabic Reading & Translation", langs: "Arabic · English", exp: "7+ yrs", gender: "F" },
  { name: "Hafizah Hina Akram", qual: "Hafizah al-Quran", spec: "Junior Hifz & Manzil", langs: "Urdu · English", exp: "6+ yrs", gender: "F" },
  { name: "Ustadah Rabia Younus", qual: "Aalimah & Murabbiyah", spec: "Spiritual Tarbiyah & Adhkar", langs: "Urdu · English", exp: "9+ yrs", gender: "F" },
  { name: "Hafizah Mariam Saleem", qual: "Hafizah with Ijazah", spec: "Advanced Tajweed for Sisters", langs: "Urdu · Arabic", exp: "8+ yrs", gender: "F" },
];

function Avatar({ name, gender, large = false }: { name: string; gender: "M" | "F"; large?: boolean }) {
  const initials = name
    .replace(/^(Sheikh|Maulana|Mufti|Hafiz|Hafizah|Qari|Ustadah|Ustadh)\s+/i, "")
    .split(" ")
    .slice(0, 2)
    .map((s) => s[0])
    .join("");
  const size = large ? "h-28 w-28 text-3xl" : "h-20 w-20 text-xl";
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
  { icon: Users, n: "40+", l: "Certified Teachers" },
  { icon: Award, n: "100%", l: "Hafiz / Qari / Aalim" },
  { icon: Languages, n: "5+", l: "Languages Spoken" },
  { icon: ShieldCheck, n: "24/7", l: "Time-Zone Coverage" },
];

function Teachers() {
  const males = roster.filter((t) => t.gender === "M").length + featured.filter((t) => t.gender === "M").length;
  const females = roster.filter((t) => t.gender === "F").length + featured.filter((t) => t.gender === "F").length;
  const total = males + females;

  return (
    <Layout>
      <PageHero
        arabic="مُعَلِّمُونَا"
        title="Our Certified Teachers"
        subtitle={`A faculty of ${total}+ qualified male and female scholars — Hafiz, Qaris, Mufti and Masters in Arabic & Islamic Studies.`}
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

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-2">Featured Faculty</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">Senior Scholars Leading Our Institute</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-gold/30 bg-card p-7 text-center hover:shadow-gold hover:border-gold transition-all relative"
            >
              <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-gradient-gold px-2.5 py-0.5 text-[10px] font-bold text-primary uppercase tracking-wider shadow-gold">
                <Star className="h-3 w-3 fill-primary" /> Senior
              </span>
              <div className="flex justify-center mb-5">
                <Avatar name={t.name} gender={t.gender} large />
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
          ))}
        </div>
      </section>

      {/* Full faculty */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-2">Our Faculty</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Meet the Full Team</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-sm">
              {males} male & {females} female teachers — every one verified, certified and dedicated to your Quran journey.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {roster.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-border/70 bg-card p-5 hover:shadow-elegant hover:border-gold/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <Avatar name={t.name} gender={t.gender} />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-primary text-sm leading-tight">{t.name}</h3>
                    <p className="mt-1 text-[11px] text-gold uppercase tracking-wider font-semibold flex items-center gap-1">
                      <GraduationCap className="h-3 w-3" /> {t.qual}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground leading-snug">{t.spec}</p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-primary">
                        <Languages className="h-2.5 w-2.5" /> {t.langs}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full border border-gold/40 px-2 py-0.5 text-[10px] font-medium text-gold">
                        {t.exp}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
