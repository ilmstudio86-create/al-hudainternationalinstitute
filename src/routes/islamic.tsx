import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { SectionDivider } from "@/components/site/SectionDivider";
import { Card } from "@/components/ui/card";
import { BookOpen, Star, Moon, HandCoins, Sunrise, Hand, Sparkles, Sun, Compass, Heart } from "lucide-react";

export const Route = createFileRoute("/islamic")({
  head: () => ({
    meta: [
      { title: "Islamic Knowledge — Prophets, Sahaba & Pillars of Islam | Al Huda" },
      { name: "description", content: "Learn about the Prophets of Allah, the noble Sahaba (companions of Prophet Muhammad ﷺ), and the five Pillars of Islam — Salah, Sawm, Zakat, Hajj and Shahadah." },
      { property: "og:title", content: "Islamic Knowledge — Prophets, Sahaba & Pillars of Islam" },
      { property: "og:description", content: "Stories of the Prophets, the four Rightly Guided Caliphs, and the core pillars of Islam." },
    ],
  }),
  component: IslamicPage,
});

const prophets = [
  {
    name: "Prophet Adam (عليه السلام)",
    arabic: "آدم",
    story:
      "Prophet Adam was the first human being and the first Prophet of Allah. Allah created him from clay, breathed His spirit into him, and taught him the names of all things. The angels were commanded to prostrate to him, and all did except Iblees. Adam and Hawwa (Eve) lived in Jannah until they were tested and sent down to earth, where Adam became the father of mankind and a Prophet calling to Tawheed.",
  },
  {
    name: "Prophet Ibrahim (عليه السلام)",
    arabic: "إبراهيم",
    story:
      "Prophet Ibrahim, known as Khalilullah (the Friend of Allah), broke the idols of his people and was thrown into a great fire which Allah made cool and safe for him. He was tested with leaving his wife Hajar and son Ismail in the desert of Makkah, and later with the command to sacrifice his son — a test he passed with full submission. He raised the foundations of the Ka'bah with Ismail.",
  },
  {
    name: "Prophet Ismail (عليه السلام)",
    arabic: "إسماعيل",
    story:
      "Prophet Ismail was the patient son of Ibrahim. When his father informed him of Allah's command to sacrifice him, he replied, 'O my father, do as you are commanded; you will find me, In sha Allah, of the patient.' Allah replaced him with a great ram. Together with his father, he built the Ka'bah in Makkah, and from his descendants came our beloved Prophet Muhammad ﷺ.",
  },
  {
    name: "Prophet Musa (عليه السلام)",
    arabic: "موسىٰ",
    story:
      "Prophet Musa was sent to Pharaoh and Bani Israel. Allah gave him great miracles — his staff turned into a serpent and his hand shone bright white. He led his people out of Egypt, and Allah split the sea for him. He spoke directly to Allah on Mount Tur and received the Tawrah (Torah). He is one of the five great Messengers (Ulul-Azm).",
  },
  {
    name: "Prophet Isa (عليه السلام)",
    arabic: "عيسىٰ",
    story:
      "Prophet Isa (Jesus) was born miraculously to the pure virgin Maryam without a father. He spoke from the cradle, healed the blind and the lepers, and revived the dead by Allah's permission. He was given the Injeel (Gospel) and called his people to worship Allah alone. Allah raised him to the heavens, and he will return before the Day of Judgement.",
  },
  {
    name: "Prophet Muhammad ﷺ",
    arabic: "مُحَمَّد ﷺ",
    story:
      "Our beloved Prophet Muhammad ﷺ is the final Messenger of Allah, sent as a mercy to all the worlds (Rahmatun lil-'Aalameen). Born in Makkah in 570 CE, he received the first revelation of the Qur'an at age 40. For 23 years he conveyed Islam with patience, mercy and wisdom — perfecting the religion and leaving behind the Qur'an and his Sunnah as guidance for all mankind until the Day of Judgement.",
  },
];

const sahaba = [
  {
    name: "Abu Bakr As-Siddiq (رضي الله عنه)",
    title: "The 1st Caliph · As-Siddiq (The Truthful)",
    story:
      "The closest friend of the Prophet ﷺ and the first adult man to embrace Islam. He freed many slaves including Bilal ibn Rabah. He accompanied the Prophet ﷺ in the Hijrah and was named 'As-Siddiq' for instantly believing in the night journey of Isra & Mi'raj. He became the first Caliph after the Prophet ﷺ and united the Ummah.",
  },
  {
    name: "Umar ibn Al-Khattab (رضي الله عنه)",
    title: "The 2nd Caliph · Al-Farooq (The Distinguisher)",
    story:
      "Known for his strength, justice and fear of Allah. The Prophet ﷺ made dua for him and Islam was strengthened with his acceptance. As the second Caliph, he expanded the Islamic state, established the Islamic calendar, and was famous for personally checking on his people at night. He set the highest standard of justice in Islamic governance.",
  },
  {
    name: "Uthman ibn Affan (رضي الله عنه)",
    title: "The 3rd Caliph · Dhun-Nurayn (Owner of Two Lights)",
    story:
      "Known for his shyness, generosity and love of the Qur'an. He married two daughters of the Prophet ﷺ, earning the title 'Dhun-Nurayn'. He funded the army of Tabuk and bought the well of Rumah for the Muslims. As the third Caliph, his greatest achievement was compiling the Qur'an into one standard mushaf preserved until today.",
  },
  {
    name: "Ali ibn Abi Talib (رضي الله عنه)",
    title: "The 4th Caliph · Asadullah (The Lion of Allah)",
    story:
      "The cousin and son-in-law of the Prophet ﷺ, married to Fatimah (RA). He was the first child to embrace Islam and slept in the Prophet's ﷺ bed during the Hijrah. Known for his courage, deep knowledge and wisdom, the Prophet ﷺ said: 'I am the city of knowledge and Ali is its gate.' He became the fourth Rightly Guided Caliph.",
  },
];

const pillars = [
  { icon: Star, name: "Shahadah", arabic: "الشَّهَادَة", desc: "The declaration of faith: 'There is no god but Allah, and Muhammad ﷺ is the Messenger of Allah.' It is the gateway to Islam and the foundation of every Muslim's belief." },
  { icon: Sunrise, name: "Salah (Prayer)", arabic: "الصَّلَاة", desc: "Five daily prayers — Fajr, Dhuhr, Asr, Maghrib and Isha. Salah is the direct connection between the servant and his Lord, and the first deed we will be questioned about on the Day of Judgement." },
  { icon: HandCoins, name: "Zakat (Charity)", arabic: "الزَّكَاة", desc: "An obligatory charity of 2.5% of one's saved wealth, given each year to the poor and needy. It purifies wealth, removes greed and supports the weakest in society." },
  { icon: Moon, name: "Sawm (Fasting)", arabic: "الصَّوْم", desc: "Fasting in the month of Ramadan from dawn to sunset — abstaining from food, drink and sin. It builds taqwa (God-consciousness), patience and gratitude." },
  { icon: Compass, name: "Hajj (Pilgrimage)", arabic: "الحَجّ", desc: "The pilgrimage to the Ka'bah in Makkah, obligatory once in a lifetime upon every Muslim who is able. It unites millions of believers from every nation in worship of Allah alone." },
];

const otherTopics = [
  { icon: BookOpen, name: "The Holy Qur'an", desc: "The final revelation of Allah, preserved word-for-word for over 1400 years. A complete guidance for all of mankind." },
  { icon: Sparkles, name: "Iman (Six Articles of Faith)", desc: "Belief in Allah, His Angels, His Books, His Messengers, the Last Day, and Divine Decree (Qadar) — both good and bad." },
  { icon: Hand, name: "Dua & Dhikr", desc: "Remembering Allah and calling upon Him in every situation. Dua is the weapon of the believer and the essence of worship." },
  { icon: Heart, name: "Akhlaq (Good Character)", desc: "The Prophet ﷺ said: 'I was sent only to perfect noble character.' Honesty, kindness, mercy and respect form the heart of Islam." },
  { icon: Sun, name: "Sunnah of the Prophet ﷺ", desc: "Following the way of Prophet Muhammad ﷺ in worship, manners, family life and dealings — the perfect example for all believers." },
];

function IslamicPage() {
  return (
    <Layout>
      <PageHero
        arabic="بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
        title="Islamic Knowledge"
        subtitle="Stories of the Prophets, the noble Sahaba, and the timeless pillars of Islam"
      />

      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="font-arabic text-3xl text-gold mb-2">الأَنْبِيَاء</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">The Prophets of Allah</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Allah sent thousands of Prophets to guide humanity. Here are the stories of some of the greatest Messengers (peace be upon them all).</p>
            <SectionDivider />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {prophets.map((p) => (
              <Card key={p.name} className="p-6 sm:p-7 border-gold/20 hover:shadow-elegant transition-shadow">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-primary">{p.name}</h3>
                  <span className="font-arabic text-3xl text-gold leading-none shrink-0">{p.arabic}</span>
                </div>
                <p className="text-foreground/80 leading-relaxed">{p.story}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="font-arabic text-3xl text-gold mb-2">الخُلَفَاء الرَّاشِدُون</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">The Rightly Guided Caliphs</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">The four greatest companions of Prophet Muhammad ﷺ who led the Ummah after him with justice and faith.</p>
            <SectionDivider />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {sahaba.map((s) => (
              <Card key={s.name} className="p-6 sm:p-7 bg-card border-gold/20 hover:shadow-elegant transition-shadow">
                <h3 className="text-xl sm:text-2xl font-bold text-primary">{s.name}</h3>
                <p className="text-sm text-gold font-semibold mt-1 mb-3">{s.title}</p>
                <p className="text-foreground/80 leading-relaxed">{s.story}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="font-arabic text-3xl text-gold mb-2">أَرْكَان الإِسْلَام</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">The Five Pillars of Islam</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">The foundational acts of worship upon which the religion of Islam is built.</p>
            <SectionDivider />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <Card key={p.name} className="p-6 border-gold/20 hover:shadow-gold transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-11 w-11 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                    <p.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary leading-tight">{p.name}</h3>
                    <p className="font-arabic text-base text-gold">{p.arabic}</p>
                  </div>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed">{p.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Essentials of Islam</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Other important teachings every Muslim should know and practice in daily life.</p>
            <SectionDivider />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherTopics.map((t) => (
              <Card key={t.name} className="p-6 bg-card border-gold/20 hover:shadow-elegant transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                    <t.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary">{t.name}</h3>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed">{t.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
