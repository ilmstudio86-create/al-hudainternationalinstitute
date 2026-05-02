import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { GraduationCap } from "lucide-react";

export const Route = createFileRoute("/teachers")({
  head: () => ({
    meta: [
      { title: "Our Teachers — Al-Iqra Global Quran Institute" },
      { name: "description", content: "Meet our certified male and female Quran teachers — Hafiz, Qaris and Masters in Arabic & Islamic Studies." },
      { property: "og:title", content: "Meet Our Teachers — Al-Iqra Global" },
      { property: "og:description", content: "Qualified Hafiz, Qari and Islamic scholars dedicated to your Quran journey." },
    ],
  }),
  component: Teachers,
});

const teachers = [
  { name: "Qari Muhammad Javed", qual: "Hifz Master, Ijazah in Qirat", spec: "Hifz, Tajweed & Qirat", gender: "M" },
  { name: "Ustadh Ashrafi", qual: "Master in Arabic & Islamic Studies", spec: "Tarjuma, Tafseer & Arabic", gender: "M" },
  { name: "Sheikh Abdullah Rahman", qual: "Hafiz, MA Islamic Studies", spec: "Tafseer ul Quran", gender: "M" },
  { name: "Ustadha Maryam Siddiqui", qual: "Hafiza, Diploma in Tajweed", spec: "Kids Quran & Nazra", gender: "F" },
  { name: "Ustadha Ayesha Noor", qual: "MA Islamic Studies", spec: "Islamic Studies for Sisters", gender: "F" },
  { name: "Qari Bilal Ahmad", qual: "Ijazah with Sanad", spec: "Hifz & Sabqi", gender: "M" },
  { name: "Ustadha Khadija Imran", qual: "Hafiza, Arabic Specialist", spec: "Arabic Language", gender: "F" },
  { name: "Sheikh Yusuf Anwar", qual: "Alim Course Graduate", spec: "Fiqh & Aqeedah", gender: "M" },
];

function Avatar({ name, gender }: { name: string; gender: "M" | "F" }) {
  const initials = name.split(" ").slice(-2).map((s) => s[0]).join("");
  return (
    <div className={`flex h-24 w-24 items-center justify-center rounded-full text-2xl font-bold ring-4 ring-gold/30 ${gender === "F" ? "bg-gradient-to-br from-rose-100 to-amber-100 text-primary" : "bg-gradient-primary text-gold"}`}>
      {initials}
    </div>
  );
}

function Teachers() {
  return (
    <Layout>
      <PageHero arabic="مُعَلِّمُونَا" title="Our Teachers" subtitle="Certified male and female scholars guiding you with knowledge and care." />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border/70 bg-card p-6 text-center hover:shadow-elegant hover:border-gold/50 transition-all">
              <div className="flex justify-center mb-5"><Avatar name={t.name} gender={t.gender as "M" | "F"} /></div>
              <h3 className="font-bold text-primary text-lg">{t.name}</h3>
              <p className="mt-2 text-xs text-gold uppercase tracking-wider font-semibold flex items-center justify-center gap-1">
                <GraduationCap className="h-3.5 w-3.5" /> {t.qual}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{t.spec}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
