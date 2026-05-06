import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { SectionDivider } from "@/components/site/SectionDivider";
import { Card } from "@/components/ui/card";
import { BookOpen, Star, Moon, HandCoins, Sunrise, Hand, Sparkles, Sun, Compass, Heart, Calendar, Scroll, Landmark, Coins, Users, ScrollText } from "lucide-react";

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
    name: "Prophet Idris (عليه السلام)",
    arabic: "إدريس",
    story:
      "Prophet Idris was one of the earliest Prophets after Adam (AS). He is described in the Qur'an as truthful and a Prophet of high status — Allah raised him to a lofty place. He is traditionally credited with knowledge of writing, astronomy and the use of the pen, and called his people back to Tawheed and righteousness.",
  },
  {
    name: "Prophet Hud (عليه السلام)",
    arabic: "هود",
    story:
      "Prophet Hud was sent to the powerful tribe of 'Aad in southern Arabia. They were tall, mighty builders who became arrogant and worshipped idols. Hud (AS) called them to worship Allah alone, but they mocked him. Allah destroyed them with a furious, screaming wind for seven nights and eight days, while Hud and the believers were saved.",
  },
  {
    name: "Prophet Salih (عليه السلام)",
    arabic: "صالح",
    story:
      "Prophet Salih was sent to the tribe of Thamud, who carved their homes in mountains. As a sign, Allah brought a magnificent she-camel out of a rock with strict orders not to harm her. They hamstrung her in defiance — and were destroyed by a thunderous blast. Salih (AS) and the believers were saved by Allah's mercy.",
  },
  {
    name: "Prophet Lut (عليه السلام)",
    arabic: "لُوط",
    story:
      "Prophet Lut, the nephew of Ibrahim (AS), was sent to the people of Sodom who openly committed shameless deeds never before known among mankind. He warned them tirelessly. When they persisted, Allah sent angels in the form of guests, saved Lut and his believing family, and overturned the cities upon the wrongdoers, raining stones of baked clay.",
  },
  {
    name: "Prophet Ishaq (عليه السلام)",
    arabic: "إسحاق",
    story:
      "Prophet Ishaq (Isaac) was the son of Ibrahim (AS) and Sarah, given to them in their old age as glad tidings from Allah. He was a righteous Prophet who continued his father's mission of calling people to Tawheed. From his lineage came Prophet Yaqub and many of the Prophets sent to Bani Israel.",
  },
  {
    name: "Prophet Yaqub (عليه السلام)",
    arabic: "يَعْقُوب",
    story:
      "Prophet Yaqub (Jacob), also known as Israel, was the son of Ishaq (AS) and the father of Yusuf (AS) and his brothers. He was patient through great trials — losing Yusuf for many years and weeping until he lost his sight, yet never losing hope in Allah's mercy. Allah eventually reunited him with his beloved son, restoring his sight.",
  },
  {
    name: "Prophet Shuaib (عليه السلام)",
    arabic: "شُعَيْب",
    story:
      "Prophet Shuaib was sent to the people of Madyan who cheated in trade — short-changing in weights and measures. Known as the 'Orator of the Prophets' for his eloquence, he called them to honest dealings and worship of Allah alone. When they refused, they were destroyed by a mighty earthquake and a shout. Prophet Musa later spent ten years working for him.",
  },
  {
    name: "Prophet Ayyub (عليه السلام)",
    arabic: "أَيُّوب",
    story:
      "Prophet Ayyub (Job) was tested with severe illness, the loss of his wealth and the loss of his children. For many long years he endured with patience, never complaining, only saying: 'Indeed, adversity has touched me, and You are the Most Merciful of the merciful.' Allah cured him, restored everything to him and made him a timeless example of sabr.",
  },
  {
    name: "Prophet Dhul-Kifl (عليه السلام)",
    arabic: "ذُو الكِفْل",
    story:
      "Prophet Dhul-Kifl is mentioned in the Qur'an among the patient and righteous. The scholars say his name means 'the one who guaranteed' — he took on a great responsibility of judging justly between people, fasting by day and standing in prayer by night. Allah praised him among the chosen, the excellent.",
  },
  {
    name: "Prophet Harun (عليه السلام)",
    arabic: "هَارُون",
    story:
      "Prophet Harun (Aaron) was the elder brother of Musa (AS), gifted with eloquence and beautiful speech. When Musa was sent to Pharaoh, he asked Allah to make Harun his helper and supporter. Together they confronted Pharaoh and led Bani Israel — Harun guarding the people whenever Musa went to converse with his Lord.",
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

      {/* ISLAMIC HISTORY */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="font-arabic text-3xl text-gold mb-2">التَّارِيخ الإِسْلَامِي</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary flex items-center justify-center gap-3"><Landmark className="h-8 w-8 text-gold" /> Islamic History</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">The Khulafa-e-Rashideen and the noble Sahaba — the golden generation that carried Islam to the world.</p>
            <SectionDivider />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { name: "The Era of Khulafa-e-Rashideen", desc: "After the Prophet ﷺ, four Rightly Guided Caliphs led the Ummah for ~30 years — Abu Bakr, Umar, Uthman and Ali (RA). They preserved the Qur'an, expanded the Islamic state with justice, and lived by the Sunnah in every affair." },
              { name: "The Sahaba (RA) — The Companions", desc: "The blessed generation who saw the Prophet ﷺ, believed in him and supported him. Allah praised them in the Qur'an. From Bilal (RA) the first muezzin to Khadijah (RA) the first believer — every Sahabi is a star to follow." },
              { name: "Conquest of Makkah", desc: "After 8 years of Hijrah, the Prophet ﷺ entered Makkah peacefully with 10,000 companions. He forgave his bitterest enemies and cleansed the Ka'bah of idols — the greatest victory of mercy in human history." },
              { name: "The Mothers of the Believers", desc: "The pure wives of the Prophet ﷺ — including Khadijah, Aisha, Hafsa and Umm Salamah (RA) — taught the women of the Ummah, narrated thousands of Hadith and remain timeless examples of faith and dignity." },
            ].map((h) => (
              <Card key={h.name} className="p-6 sm:p-7 border-gold/20 hover:shadow-elegant transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-2">{h.name}</h3>
                <p className="text-foreground/80 leading-relaxed">{h.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RAMADAN GUIDE */}
      <section className="py-16 sm:py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="font-arabic text-3xl text-gold mb-2">رَمَضَان</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary flex items-center justify-center gap-3"><Moon className="h-8 w-8 text-gold" /> Ramadan Guide</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">The blessed month — Roza, Taraweeh, Laylatul Qadr and the doors of mercy thrown wide open.</p>
            <SectionDivider />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Roza (Fasting)", desc: "From Suhoor (pre-dawn) to Iftar (sunset), Muslims abstain from food, drink and sin — building taqwa and gratitude. Every breath of the fasting person is praise of Allah." },
              { name: "Taraweeh Prayers", desc: "The beloved night prayers of Ramadan, prayed in congregation after Isha. The entire Qur'an is typically recited over the 30 nights — a unique gift of this month." },
              { name: "Laylatul Qadr", desc: "The Night of Decree — better than 1,000 months. Worship on this single night equals over 83 years of devotion. Sought in the odd nights of the last 10 of Ramadan." },
              { name: "Sadaqah & Zakat al-Fitr", desc: "Charity in Ramadan is multiplied many times over. Zakat al-Fitr is given before Eid prayer to purify the fast and feed the needy." },
              { name: "I'tikaf", desc: "Spiritual retreat in the masjid during the last 10 days — a beloved Sunnah of the Prophet ﷺ to seek Laylatul Qadr and draw closer to Allah." },
              { name: "Eid al-Fitr", desc: "The joyful celebration after Ramadan — Eid prayer, new clothes, family gatherings and gratitude for completing the month of fasting." },
            ].map((r) => (
              <Card key={r.name} className="p-6 bg-card border-gold/20 hover:shadow-gold transition-shadow">
                <h3 className="text-lg font-bold text-primary mb-2">{r.name}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">{r.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HAJJ & UMRAH */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="font-arabic text-3xl text-gold mb-2">الحَجّ وَالعُمْرَة</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary flex items-center justify-center gap-3"><Compass className="h-8 w-8 text-gold" /> Hajj &amp; Umrah Guide</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">The fifth pillar and the lifelong dream of every believer — step by step.</p>
            <SectionDivider />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "1. Ihram", desc: "Enter the state of Ihram at the Miqat — wear the two white sheets (men), make the intention and recite Talbiyah: 'Labbayk Allahumma Labbayk.'" },
              { name: "2. Tawaf", desc: "Circle the Ka'bah seven times anti-clockwise, beginning at the Black Stone — the heart of the pilgrimage, in remembrance of Allah." },
              { name: "3. Sa'ee", desc: "Walk seven times between the hills of Safa and Marwa — re-living the search of Hajar (RA) for water for her son Ismail (AS)." },
              { name: "4. Day of Arafah", desc: "Stand on the plain of Arafah on 9th Dhul-Hijjah — the greatest day of Hajj. The Prophet ﷺ said: 'Hajj is Arafah.'" },
              { name: "5. Muzdalifah & Mina", desc: "Spend the night at Muzdalifah, collect pebbles, then proceed to Mina to stone the Jamarat — re-enacting Ibrahim's (AS) rejection of Shaytan." },
              { name: "6. Qurbani & Tawaf al-Ifadah", desc: "Sacrifice an animal, shave or trim the hair, and perform the final Tawaf — completing the rites and earning, In sha Allah, forgiveness like the day of birth." },
            ].map((h) => (
              <Card key={h.name} className="p-6 border-gold/20 hover:shadow-elegant transition-shadow">
                <h3 className="text-lg font-bold text-primary mb-2">{h.name}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">{h.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ISLAMIC CALENDAR */}
      <section className="py-16 sm:py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="font-arabic text-3xl text-gold mb-2">التَّقْوِيم الهِجْرِي</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary flex items-center justify-center gap-3"><Calendar className="h-8 w-8 text-gold" /> Islamic Calendar</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">The lunar Hijri calendar and its blessed months and dates.</p>
            <SectionDivider />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Muharram & 10th of Ashura", desc: "The first month of the Hijri year. The 10th of Muharram (Ashura) commemorates Allah saving Musa (AS) — fasting it expiates the sins of the previous year." },
              { name: "Rabi al-Awwal", desc: "The month in which our beloved Prophet Muhammad ﷺ was born and in which he passed away — a month for studying his blessed life (Seerah)." },
              { name: "Rajab", desc: "One of the four sacred months. The night of Isra & Mi'raj — when Salah was made obligatory — took place during Rajab." },
              { name: "Sha'ban", desc: "The month before Ramadan, in which the Prophet ﷺ would fast frequently. A time to prepare the heart for Ramadan." },
              { name: "Ramadan", desc: "The greatest month — the Qur'an was revealed in it, the gates of Jannah are opened, and Laylatul Qadr is hidden in its last ten nights." },
              { name: "Dhul-Hijjah & Eid al-Adha", desc: "The month of Hajj. The first 10 days are the most beloved to Allah. Eid al-Adha on the 10th honours Ibrahim's (AS) great sacrifice." },
            ].map((c) => (
              <Card key={c.name} className="p-6 bg-card border-gold/20 hover:shadow-gold transition-shadow">
                <h3 className="text-lg font-bold text-primary mb-2">{c.name}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">{c.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* QURAN TAFSEER */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="font-arabic text-3xl text-gold mb-2">تَفْسِير القُرْآن</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary flex items-center justify-center gap-3"><ScrollText className="h-8 w-8 text-gold" /> Quran Tafseer — Popular Surahs</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">The meaning and message of the most beloved chapters of the Qur'an.</p>
            <SectionDivider />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { name: "Surah Al-Fatiha (The Opening)", desc: "The 7-verse opening of the Qur'an, recited in every prayer. It is praise of Allah, declaration of His Lordship, and a beautiful supplication for guidance to the straight path." },
              { name: "Surah Al-Ikhlas (Sincerity)", desc: "Four short verses that affirm the absolute oneness of Allah — He is One, eternal, neither begets nor is born, and nothing is comparable to Him. Equal to one-third of the Qur'an in reward." },
              { name: "Surah Al-Mulk (The Sovereignty)", desc: "Whoever recites it every night, it intercedes for them on the Day of Judgement and saves them from the punishment of the grave (Hadith)." },
              { name: "Surah Yaseen (The Heart of the Qur'an)", desc: "Called 'the heart of the Qur'an'. It speaks of resurrection, the truth of the Messengers, and the absolute power of Allah over creation." },
              { name: "Surah Ar-Rahman (The Most Merciful)", desc: "A breathtaking surah listing the favours of Allah upon mankind and jinn, with the recurring question: 'Then which of the favours of your Lord will you deny?'" },
              { name: "Surah Al-Kahf (The Cave)", desc: "Reciting it on Friday gives a light between the two Fridays. It contains four powerful stories — the youth of the cave, the two gardens, Musa & Khidr, and Dhul-Qarnayn." },
            ].map((s) => (
              <Card key={s.name} className="p-6 sm:p-7 border-gold/20 hover:shadow-elegant transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-2">{s.name}</h3>
                <p className="text-foreground/80 leading-relaxed">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HADITH COLLECTION */}
      <section className="py-16 sm:py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="font-arabic text-3xl text-gold mb-2">الأَحَادِيث</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary flex items-center justify-center gap-3"><Scroll className="h-8 w-8 text-gold" /> Hadith Collection — Famous Ahadith</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Timeless words of Prophet Muhammad ﷺ — light for every heart.</p>
            <SectionDivider />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { name: "Intentions", desc: "'Verily actions are by intentions, and every person will have only what they intended.' — (Bukhari & Muslim)" },
              { name: "Mercy", desc: "'The merciful are shown mercy by Ar-Rahman. Be merciful to those on the earth, and the One above the heavens will be merciful to you.' — (Tirmidhi)" },
              { name: "Best Among You", desc: "'The best among you are those who learn the Qur'an and teach it.' — (Bukhari)" },
              { name: "Smile", desc: "'Smiling at your brother is charity.' — (Tirmidhi)" },
              { name: "Speech", desc: "'Whoever believes in Allah and the Last Day, let him speak good or remain silent.' — (Bukhari & Muslim)" },
              { name: "Love for Brother", desc: "'None of you truly believes until he loves for his brother what he loves for himself.' — (Bukhari & Muslim)" },
            ].map((h) => (
              <Card key={h.name} className="p-6 bg-card border-gold/20 hover:shadow-gold transition-shadow">
                <h3 className="text-lg font-bold text-primary mb-2">{h.name}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">{h.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ISLAMIC FINANCE */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="font-arabic text-3xl text-gold mb-2">المَال فِي الإِسْلَام</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary flex items-center justify-center gap-3"><Coins className="h-8 w-8 text-gold" /> Islamic Finance — Halal &amp; Haram</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Earning, spending and saving the way Allah loves.</p>
            <SectionDivider />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Halal Earnings", desc: "Honest trade, lawful work and ethical business — the Prophet ﷺ said the truthful trader will be with the Prophets, the truthful and the martyrs." },
              { name: "Riba (Interest) is Haram", desc: "Interest is one of the gravest major sins in Islam — Allah and His Messenger declared war on those who deal in riba. Avoid it in loans, mortgages and credit." },
              { name: "Zakat", desc: "2.5% of saved wealth held for one lunar year — given to the poor, needy, debtors and other categories defined in the Qur'an." },
              { name: "Sadaqah", desc: "Voluntary charity — extinguishes sins as water extinguishes fire, and protects from calamity. Even a smile is sadaqah." },
              { name: "Avoid Gambling & Cheating", desc: "Gambling, lottery and any deceptive transaction are haram. Wealth must come from honest, transparent means." },
              { name: "Inheritance (Mirath)", desc: "Allah Himself decreed the shares of inheritance in the Qur'an — a complete, just system that protects every heir, especially women and children." },
            ].map((f) => (
              <Card key={f.name} className="p-6 border-gold/20 hover:shadow-elegant transition-shadow">
                <h3 className="text-lg font-bold text-primary mb-2">{f.name}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MUSLIM FAMILY LIFE */}
      <section className="py-16 sm:py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="font-arabic text-3xl text-gold mb-2">الأُسْرَة المُسْلِمَة</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary flex items-center justify-center gap-3"><Users className="h-8 w-8 text-gold" /> Muslim Family Life</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Nikah, parenting and the beauty of an Islamic home.</p>
            <SectionDivider />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Nikah (Marriage)", desc: "Marriage is half of the deen. The Prophet ﷺ encouraged it and made it simple — a Wali, two witnesses, mahr and the consent of both spouses." },
              { name: "Rights of the Spouse", desc: "Husbands and wives have rights and duties to one another. The best of you is the one who is best to his family — said the Prophet ﷺ." },
              { name: "Parenting in Islam", desc: "Teach children love of Allah, the Qur'an and Salah from the earliest age. The greatest gift a parent gives is good character (akhlaq)." },
              { name: "Honouring Parents", desc: "After Tawheed, kindness to parents is the most beloved deed. 'Paradise lies under the feet of mothers' — (Hadith)." },
              { name: "Maintaining Family Ties", desc: "The Prophet ﷺ said: 'Whoever wishes that his provision be increased and his life extended — let him keep good ties with his relatives.'" },
              { name: "An Islamic Home", desc: "A home filled with Qur'an recitation, Salah in congregation, modesty, and remembrance of Allah — that is the home the angels visit." },
            ].map((f) => (
              <Card key={f.name} className="p-6 bg-card border-gold/20 hover:shadow-gold transition-shadow">
                <h3 className="text-lg font-bold text-primary mb-2">{f.name}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
