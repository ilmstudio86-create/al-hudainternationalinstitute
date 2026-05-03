import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { GraduationCap } from "lucide-react";

export const Route = createFileRoute("/teachers")({
  head: () => ({
    meta: [
      { title: "Our Teachers — Al Huda International Islamic Institute" },
      { name: "description", content: "Meet our certified male and female Quran teachers — Hafiz, Qaris and Masters in Arabic & Islamic Studies." },
      { property: "og:title", content: "Meet Our Teachers — Al Huda International Islamic Institute" },
      { property: "og:description", content: "Qualified Hafiz, Qari and Islamic scholars dedicated to your Quran journey." },
    ],
  }),
  component: Teachers,
});

const teachers = [
  {
    name: "Sheikh Maulana Nisaar Ahmad",
    qual: "Master in Islamic & Arabic Studies",
    spec: "Tajweed, Qirat, Tafseer & Translation in English, Arabic and Urdu",
    gender: "M",
  },
  {
    name: "Maulana Rashid Taryaq",
    qual: "Specialist in Basic Islamic Studies",
    spec: "Tarjuma, Tafseer & Basic Islamic Studies in Urdu",
    gender: "M",
  },
  {
    name: "Maulana Riyaz Ahmed",
    qual: "Quran Foundation Instructor",
    spec: "Qaida, Tajweed & Tafseer",
    gender: "M",
  },
  {
    name: "Hafizah Ustadah Rehana Siddiqui",
    qual: "Nazra & Qaida Teacher",
    spec: "Qaida, Tajweed Rules & Nazra Quran",
    gender: "F",
  },
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
