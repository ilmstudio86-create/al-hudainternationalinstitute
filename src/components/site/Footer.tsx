import { Link } from "@tanstack/react-router";
import { Moon, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-gradient-primary text-primary-foreground">
      <div className="absolute inset-0 pattern-bg pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold">
                <Moon className="h-5 w-5 text-primary" />
              </span>
              <span className="font-display text-xl font-bold text-gold">AL HUDA INTERNATIONAL</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/75 leading-relaxed">
              Authentic online Quran &amp; Islamic education for students across 30+ countries — taught by qualified Hafiz, Qaris and Islamic scholars.
            </p>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-gold transition-colors">Courses</Link></li>
              <li><Link to="/teachers" className="hover:text-gold transition-colors">Teachers</Link></li>
              <li><Link to="/pricing" className="hover:text-gold transition-colors">Pricing</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-gold" /> +92 314 1766950</li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-gold" /> info@aliqraglobal.com</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold" /> Serving 30+ countries worldwide</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="https://facebook.com/AlIqraGlobalInstitute" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-primary transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="https://instagram.com/aliqra.global" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-primary transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="https://youtube.com/@AlIqraOfficial" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-primary transition-colors"><Youtube className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Hadith</h4>
            <p className="font-arabic text-2xl text-gold leading-relaxed">طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ</p>
            <p className="mt-2 text-sm italic text-primary-foreground/75">"Seeking knowledge is an obligation upon every Muslim." — Sunan Ibn Mājah</p>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Al Huda International Islamic Institute. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
