"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { ContactForm } from "@/components/ui/contact-form";
import { CalendlyEmbed } from "@/components/calendly-embed";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    value: "089 323 89 988",
    description: "Mo–Fr 9–17 Uhr",
    href: "tel:08932389988"
  },
  {
    icon: Mail,
    title: "E-Mail",
    value: "energy@previum.de",
    description: "Antwort innerhalb 24h",
    href: "mailto:energy@previum.de"
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: "Schumannstraße 9",
    description: "81679 München",
    href: "https://maps.google.com/?q=Schumannstraße+9+81679+München"
  },
  {
    icon: Clock,
    title: "Öffnungszeiten",
    value: "Mo–Fr 9–17 Uhr",
    description: "Termine nach Vereinbarung",
    href: null
  }
];

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 section-gradient-hero">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-sm font-medium text-[var(--golden-chestnut)] mb-4">
              Kontakt
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-foreground mb-6">
              Wir sind für dich da
            </h1>
            <p className="text-lg text-muted-foreground">
              Kostenlose Beratung · Persönliche Betreuung · Seit 2015 in München
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Info Grid */}
      <section className="py-12 section-gradient-warm">
        <div className="container-premium">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="block h-full card-premium group"
                  >
                    <item.icon className="h-6 w-6 text-[var(--golden-chestnut)] mb-4" />
                    <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                    <p className="text-base font-semibold text-foreground group-hover:text-[var(--golden-chestnut)] transition-colors">
                      {item.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  </a>
                ) : (
                  <div className="card-premium">
                    <item.icon className="h-6 w-6 text-[var(--golden-chestnut)] mb-4" />
                    <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                    <p className="text-base font-semibold text-foreground">{item.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Calendly Booking Section */}
      <section id="termin" className="section-padding section-gradient-solution">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <span className="inline-block text-sm font-medium text-[var(--golden-chestnut)] mb-4">
              Termin buchen
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Wähle deinen Wunschtermin
            </h2>
            <p className="text-lg text-muted-foreground">
              Direkt online buchen · 15 Minuten kostenloses Erstgespräch
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="card-premium p-6">
              <CalendlyEmbed height="700px" />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="section-padding section-gradient-cool">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 max-w-6xl mx-auto">
            
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-foreground mb-6">
                Kostenlose Beratung anfragen
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Du hast Fragen oder möchtest einen Termin vereinbaren? 
                Schreib uns eine Nachricht – wir melden uns innerhalb von 24 Stunden bei dir.
              </p>
              
              <div className="space-y-4">
                <div className="card-premium">
                  <p className="text-sm font-medium text-foreground mb-1">Kostenloses Erstgespräch</p>
                  <p className="text-xs text-muted-foreground">
                    15–20 Minuten · Unverbindlich · Persönlich
                  </p>
                </div>
                <div className="card-premium">
                  <p className="text-sm font-medium text-foreground mb-1">Vor Ort in München</p>
                  <p className="text-xs text-muted-foreground">
                    Schumannstraße 9 · 81679 München-Schwabing
                  </p>
                </div>
                <div className="card-premium">
                  <p className="text-sm font-medium text-foreground mb-1">DSGVO-konform</p>
                  <p className="text-xs text-muted-foreground">
                    Deine Daten sind sicher · Keine Weitergabe an Dritte
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="card-premium p-8">
                <ContactForm />
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 section-gradient-faq">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              So findest du uns
            </h3>
            <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-border bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.7!2d11.591!3d48.1505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75a4c8f0c8b1%3A0x8f8f8f8f8f8f8f8f!2sSchumannstra%C3%9Fe%209%2C%2081679%20M%C3%BCnchen!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Previum München Standort"
              />
            </div>
          </div>
        </div>
      </section>
      
      <FooterSection />
    </main>
  );
}