import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Mail, Phone, MapPin, Send, MessageCircle, Facebook, Instagram, Youtube } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { CONTACT_WA_URL } from "@/lib/trial";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Free Trial — Al Huda International Islamic Institute" },
      { name: "description", content: "Book your free trial Quran class. Reach Al Huda International Islamic Institute by WhatsApp, email or phone." },
      { property: "og:title", content: "Contact Al Huda International Islamic Institute" },
      { property: "og:description", content: "Book a free trial class today — taught by certified Hafiz & Qari." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  email: z.string().trim().email("Valid email required").max(160),
  phone: z.string().trim().min(6, "Phone is required").max(30),
  course: z.string().trim().max(80).optional(),
  message: z.string().trim().min(5, "Message is required").max(800),
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      setStatus("error");
      return;
    }
    const text = `Assalamu Alaikum, I'd like to book a free trial.\n\nName: ${parsed.data.name}\nEmail: ${parsed.data.email}\nPhone: ${parsed.data.phone}\nCourse: ${parsed.data.course || "—"}\n\n${parsed.data.message}`;
    window.open(`https://wa.me/923141766950?text=${encodeURIComponent(text)}`, "_blank");
    setStatus("ok");
    setError(null);
    e.currentTarget.reset();
  };

  return (
    <Layout>
      <PageHero arabic="تَوَاصَلْ مَعَنَا" title="Get In Touch" subtitle="Book your free trial class — we reply within hours, In sha Allah." />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Info */}
          <div className="space-y-5">
            <div className="rounded-xl bg-gradient-primary p-7 text-primary-foreground relative overflow-hidden">
              <div className="absolute inset-0 pattern-bg" />
              <div className="relative space-y-5">
                <h3 className="text-xl font-bold text-gold">Contact Info</h3>
                <a href={CONTACT_WA_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-gold transition-colors">
                  <MessageCircle className="h-5 w-5 text-gold mt-0.5" />
                  <div><div className="text-xs uppercase tracking-wider text-primary-foreground/70">WhatsApp</div><div className="font-medium">+92 314 1766950</div></div>
                </a>
                <div className="flex items-start gap-3"><Phone className="h-5 w-5 text-gold mt-0.5" /><div><div className="text-xs uppercase tracking-wider text-primary-foreground/70">Phone</div><div className="font-medium">+92 314 1766950</div></div></div>
                <div className="flex items-start gap-3"><Mail className="h-5 w-5 text-gold mt-0.5" /><div><div className="text-xs uppercase tracking-wider text-primary-foreground/70">Email</div><div className="font-medium">info@aliqraglobal.com</div></div></div>
                <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-gold mt-0.5" /><div><div className="text-xs uppercase tracking-wider text-primary-foreground/70">Reach</div><div className="font-medium">Worldwide — 30+ countries</div></div></div>
                <div className="pt-4 flex gap-3 border-t border-primary-foreground/20">
                  <a href="https://facebook.com/AlIqraGlobalInstitute" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-primary transition-colors"><Facebook className="h-4 w-4" /></a>
                  <a href="https://instagram.com/aliqra.global" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-primary transition-colors"><Instagram className="h-4 w-4" /></a>
                  <a href="https://youtube.com/@AlIqraOfficial" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-primary transition-colors"><Youtube className="h-4 w-4" /></a>
                </div>
              </div>
            </div>
            <a href={CONTACT_WA_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 font-semibold text-white shadow-elegant hover:opacity-95 transition-opacity">
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="lg:col-span-2 rounded-xl bg-card p-7 sm:p-10 shadow-sm border border-border/60">
            <h3 className="text-2xl font-bold text-primary mb-2">Book Your Free Trial Class</h3>
            <p className="text-sm text-muted-foreground mb-6">Fill out the form and we'll connect you with the right teacher.</p>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              <Field label="Phone / WhatsApp" name="phone" placeholder="+1 555 000 0000" />
              <div>
                <label className="text-sm font-medium text-primary mb-1.5 block">Course Interest</label>
                <select name="course" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/60">
                  <option>Nazra-e-Quran</option>
                  <option>Hifz ul Quran</option>
                  <option>Tajweed &amp; Qirat</option>
                  <option>Tafseer ul Quran</option>
                  <option>Arabic Language</option>
                  <option>Islamic Studies</option>
                  <option>Kids Quran Program</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <label className="text-sm font-medium text-primary mb-1.5 block">Message</label>
              <textarea name="message" rows={5} placeholder="Tell us about your goals, preferred time, etc." className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/60" />
            </div>
            {status === "error" && error && <p className="mt-3 text-sm text-destructive">{error}</p>}
            {status === "ok" && <p className="mt-3 text-sm text-primary font-medium">Jazak Allah Khair! Opening WhatsApp to confirm…</p>}
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3 font-semibold text-primary shadow-gold hover:scale-[1.02] transition-transform">
              <Send className="h-4 w-4" /> Send & Book Trial
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-sm font-medium text-primary mb-1.5 block">{label}</label>
      <input name={name} type={type} placeholder={placeholder} className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/60" />
    </div>
  );
}
