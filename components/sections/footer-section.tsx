"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Star, Users, Award, FlaskConical } from "lucide-react";

const footerLinks = {
  leistungen: [
    { label: "IHHT Zelltraining", href: "/methode" },
    { label: "Long COVID Behandlung", href: "/long-covid" },
    { label: "Burnout Therapie", href: "/burnout" },
    { label: "Leistungsoptimierung", href: "/leistung" },
  ],
  ueberUns: [
    { label: "Über Markus", href: "/ueber-markus" },
    { label: "Erfahrungen", href: "/erfahrungen" },
    { label: "Praxis München", href: "/kontakt" },
    { label: "Blog", href: "/blog" },
  ],
  service: [
    { label: "FAQ", href: "/faq" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  rechtliches: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" },
  ],
};

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="container-premium py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative h-12 w-12">
                <Image
                  src="/logo.png"
                  alt="Previum® München"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold">Previum®</span>
                <span className="text-xs text-white/60">München</span>
              </div>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed mb-6 max-w-sm">
              Spezialisiert auf Intervall-Hypoxie-Hyperoxie-Training (IHHT) bei Long COVID, 
              Post-COVID-Syndrom, Burnout und chronischer Erschöpfung. Seit 2015.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="tel:08932389988"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-[var(--golden-chestnut)]" />
                089 323 89 988
              </a>
              <a 
                href="mailto:energy@previum.de"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-[var(--golden-chestnut)]" />
                energy@previum.de
              </a>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="h-4 w-4 text-[var(--golden-chestnut)] flex-shrink-0 mt-0.5" />
                <span>Schumannstraße 9<br />81679 München</span>
              </div>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Leistungen</h4>
            <ul className="space-y-3">
              {footerLinks.leistungen.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Über uns */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Über uns</h4>
            <ul className="space-y-3">
              {footerLinks.ueberUns.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Service</h4>
            <ul className="space-y-3">
              {footerLinks.service.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Rechtliches</h4>
            <ul className="space-y-3">
              {footerLinks.rechtliches.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Trust Bar */}
      <div className="border-t border-white/10">
        <div className="container-premium py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-[var(--golden-chestnut)]" />
              <span>5,0 Sterne</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-[var(--golden-chestnut)]" />
              <span>800+ Patienten</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[var(--golden-chestnut)]" />
              <span>Seit 2015 in München</span>
            </div>
            <div className="flex items-center gap-2">
              <FlaskConical className="h-4 w-4 text-[var(--golden-chestnut)]" />
              <span>Wissenschaftlich fundiert</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-premium py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-white/50">
              © {currentYear} Previum® München GmbH. Alle Rechte vorbehalten.
            </p>
            <p className="text-xs text-white/50">
              Schumannstraße 9 · 81679 München
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}