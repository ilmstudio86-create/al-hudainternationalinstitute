import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Heart, Gift, Plane, HandHeart, MessageCircle, CheckCircle2, Building2, Sparkles, Utensils } from "lucide-react";
import sadaqahImg from "@/assets/sadaqah.jpg";

export const Route = createFileRoute("/sadaqah")({
  head: () => ({
    meta: [
      { title: "Sadaqah, Qurbani & Umrah Sponsorship — Al-Iqra Global" },
      { name: "description", content: "Donate Sadaqah, perform Qurbani, or sponsor Umrah for a deserving Muslim through Al-Iqra Global. Trusted, transparent, and rewarded by Allah ﷻ." },
      { property: "og:title", content: "Sadaqah, Qurbani & Umrah — Al-Iqra Global" },
      { property: "og:description", content: "Send your Sadaqah, Qurbani or sponsor an Umrah with us — earn the best ajar, In sha Allah." },
      { property: "og:image", content: "/src/assets/sadaqah.jpg" },
    ],
  }),
  component: Sadaqah,
});

const services = [
  {
    icon: HandHeart,
    title: "Sadaqah & Sadaqah Jariyah",
    desc: "Give regular or one-time Sadaqah for the needy, orphans, widows and Quran students. Every rupee is delivered transparently to those who need it most.",
    bullets: ["Daily food & ration packs", "Orphan & widow support", "Quran printing & distribution", "Madrasah student sponsorship"],
  },
  {
    icon: Gift,
    title: "Qurbani / Udhiyah",
    desc: "Perform your Qurbani through Al-Iqra Global — we arrange healthy animals as per Sunnah and distribute the meat to deserving families across Pakistan.",
    bullets: ["Goat, sheep, cow share & full cow", "Slaughter as per Sunnah", "Photo / video confirmation", "Meat reaches needy families"],
  },
  {
    icon: Plane,
    title: "Sponsor an Umrah",
    desc: "Send a deserving Muslim brother or sister for Umrah on your behalf — or sponsor your parents, relatives, or anyone you wish to honour with this ibadah.",
    bullets: ["Full Umrah package sponsorship", "Visa, flights & accommodation", "Trusted travel partners", "Updates & duas from the pilgrim"],
  },
  {
    icon: Building2,
    title: "Masjid Construction & Contribution",
    desc: "Want to build a Masjid or contribute your share to one being built? Through Al-Iqra Global you can participate in this Sadaqah Jariyah — every brick a reward that continues for you, In sha Allah.",
    bullets: ["Build a new Masjid in your name", "Contribute a share to ongoing projects", "Wudu khana, prayer mats & Qurans", "Photo & progress updates shared with you"],
  },
  {
    icon: Utensils,
    title: "Feed the Hungry & Oppressed Muslims",
    desc: "Give your Sadaqah to feed the poor, orphans, widows and oppressed Muslims around the world — including Gaza, Syria, Yemen, Kashmir, Rohingya and other afflicted regions. Your contribution provides hot meals, ration packs, clean water and basic living essentials for families struggling to survive.",
    bullets: [
      "Hot meals & ration packs for the needy",
      "Emergency food aid for oppressed Muslims",
      "Clean water & basic living essentials",
      "Special focus on Gaza, Syria, Yemen, Kashmir & more",
    ],
  },
  {
    icon: Sparkles,
    title: "New Muslims (Reverts) Support",
    desc: "Help our brothers and sisters who have newly embraced Islam. Your contribution supports their Deen learning, basic needs, Quran lessons and a warm welcome into the Ummah.",
    bullets: ["Free Quran & Islamic books", "One-on-one Deen mentorship", "Basic living & ration support", "Community connection & guidance"],
  },
];

const SADAQAH_WA = `https://wa.me/923141766950?text=${encodeURIComponent(
  "Assalamu Alaikum! Main Al-Iqra Global ke zariye Sadaqah / Qurbani / Umrah sponsorship ke baare mein maloomat lena chahta/chahti hun."
)}`;

function Sadaqah() {
  return (
    <Layout>
      <PageHero
        arabic="صَدَقَةٌ جَارِيَةٌ"
        title="Sadaqah, Qurbani & Umrah"
        subtitle="Give for the sake of Allah ﷻ — and earn rewards that never end, In sha Allah."
      />

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative overflow-hidden rounded-3xl shadow-elegant order-last lg:order-first">
            <img
              src={sadaqahImg}
              alt="Hands holding dates with the Holy Kaaba in the background"
              width={1280}
              height={800}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
          <div>
            <p className="font-arabic text-3xl text-gold mb-3">
              مَّن ذَا ٱلَّذِى يُقْرِضُ ٱللَّهَ قَرْضًا حَسَنًا
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Give. Help. Earn the best ajar.
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Al-Iqra Global is not just a Quran institute — we are a trusted hand for our Muslim ummah around the world.
              If you wish to give Sadaqah for your children, perform Qurbani on Eid-ul-Adha, or sponsor an Umrah for a deserving Muslim
              on behalf of yourself or your loved ones, we will arrange it for you with full transparency and care.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              In sha Allah, Allah ﷻ will grant you the best reward (ajar) for every good deed done through us.
            </p>
            <a
              href={SADAQAH_WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 font-semibold text-primary shadow-gold hover:scale-[1.03] transition-transform"
            >
              <MessageCircle className="h-5 w-5" /> Discuss on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-2">Our Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Three ways to earn endless reward</h2>
          </div>
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="flex flex-col rounded-2xl border border-border/70 bg-card p-7 hover:border-gold/60 hover:shadow-elegant transition-all"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary shadow-gold mb-5 ring-1 ring-gold/30">
                  <s.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={SADAQAH_WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-5 py-2.5 font-semibold text-primary shadow-gold hover:scale-[1.02] transition-transform"
                >
                  Get Details
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Hadith CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 sm:p-16 text-center text-primary-foreground shadow-elegant">
          <div className="absolute inset-0 pattern-bg" />
          <div className="relative">
            <Heart className="h-12 w-12 text-gold mx-auto mb-4" />
            <p className="font-arabic text-2xl sm:text-3xl text-gold mb-4">
              مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ
            </p>
            <p className="text-primary-foreground/85 italic mb-8 max-w-2xl mx-auto">
              "Charity does not decrease wealth." — Prophet Muhammad ﷺ (Sahih Muslim)
            </p>
            <a
              href={SADAQAH_WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 font-semibold text-primary shadow-gold hover:scale-[1.03] transition-transform"
            >
              <MessageCircle className="h-5 w-5" /> Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
