"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { CTASection } from "@/components/sections/cta-section";

const testimonials = [
  {
    name: "Sandra M.",
    role: "Lehrerin, München",
    age: "42",
    text: "Ich war 14 Monate nach COVID nicht arbeitsfähig. Kein Arzt wusste weiter. Nach 12 Einheiten bei Markus habe ich zum ersten Mal wieder einen vollen Tag gearbeitet.",
    category: "Long COVID"
  },
  {
    name: "Thomas K.",
    role: "Geschäftsführer, Augsburg",
    age: "51",
    text: "Zwei Jahre auf Reserve gelebt. Urlaub hat nicht geholfen, Medikamente nicht. Nach der IHHT-Kur bin ich zum ersten Mal seit langer Zeit wirklich ausgeruht aufgewacht.",
    category: "Burnout"
  },
  {
    name: "Jonas P.",
    role: "Hobby-Triathlet, München",
    age: "38",
    text: "Meine Regenerationsfähigkeit nach dem Sport hat sich messbar verbessert. Ich erhol mich deutlich schneller und mein Energielevel ist stabiler.",
    category: "Leistung"
  },
  {
    name: "Maria L.",
    role: "Ärztin, München",
    age: "45",
    text: "Als Ärztin war ich skeptisch. Aber die wissenschaftliche Basis überzeugte mich. Die Ergebnisse sprechen für sich.",
    category: "Long COVID"
  },
  {
    name: "Stefan W.",
    role: "IT-Berater, Berlin",
    age: "39",
    text: "Ich komme extra aus Berlin nach München. Die Fahrt lohnt sich – nach 10 Einheiten bin ich ein anderer Mensch.",
    category: "Burnout"
  },
  {
    name: "Anna K.",
    role: "Yoga-Lehrerin, München",
    age: "32",
    text: "IHHT hat meine Praxis verändert. Ich habe mehr Energie für meine Schüler und fühle mich ausgeglichener.",
    category: "Leistung"
  }
];

export default function ErfahrungenPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 section-gradient-hero">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-sm font-medium text-[var(--golden-chestnut)] mb-4">
              Erfahrungen
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-foreground mb-6">
              Was Patienten<br /><span className="text-gradient-blue">berichten</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[var(--golden-chestnut)] text-[var(--golden-chestnut)]" />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">5,0 Sterne</span>
              <span className="text-sm text-muted-foreground">· 835+ Bewertungen</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-gradient-warm">
        <div className="container-premium">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--golden-chestnut)] text-[var(--golden-chestnut)]" />
                  ))}
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-[var(--golden-chestnut)]/10 text-xs font-medium text-[var(--golden-chestnut)] mb-4">
                  {testimonial.category}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role} · {testimonial.age} Jahre</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <FooterSection />
    </main>
  );
}