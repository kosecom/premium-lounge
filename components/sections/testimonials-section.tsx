"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sandra M.",
    role: "Lehrerin, München",
    age: "42",
    rating: 5,
    text: "Ich war 14 Monate nach COVID nicht arbeitsfähig. Kein Arzt wusste weiter. Nach 12 Einheiten bei Markus habe ich zum ersten Mal wieder einen vollen Tag gearbeitet. Ich hatte nicht mehr damit gerechnet.",
    category: "Long COVID"
  },
  {
    id: 2,
    name: "Thomas K.",
    role: "Geschäftsführer, Augsburg",
    age: "51",
    rating: 5,
    text: "Zwei Jahre auf Reserve gelebt. Urlaub hat nicht geholfen, Medikamente nicht. Nach der IHHT-Kur bin ich zum ersten Mal seit langer Zeit wirklich ausgeruht aufgewacht.",
    category: "Burnout"
  },
  {
    id: 3,
    name: "Jonas P.",
    role: "Hobby-Triathlet, München",
    age: "38",
    rating: 5,
    text: "Meine Regenerationsfähigkeit nach dem Sport hat sich messbar verbessert. Ich erhol mich deutlich schneller und mein Energielevel ist stabiler.",
    category: "Leistung"
  }
];

export function TestimonialsSection() {
  return (
    <section className="section-padding section-gradient-testimonials">
      <div className="container-premium">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-[var(--golden-chestnut)] mb-4">
            Was Patienten berichten
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-foreground mb-6">
            Echte Erfahrungen.<br />
            <span className="text-[var(--bright-marine)]">Echte Ergebnisse.</span>
          </h2>
          
          {/* Rating Summary */}
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
        
        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative card-premium border border-border group"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 h-8 w-8 text-[var(--golden-chestnut)]/10 group-hover:text-[var(--golden-chestnut)]/20 transition-colors" />
              
              {/* Category Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-[var(--golden-chestnut)]/10 text-xs font-medium text-[var(--golden-chestnut)] mb-4">
                {testimonial.category}
              </div>
              
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[var(--golden-chestnut)] text-[var(--golden-chestnut)]" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                „{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} · {testimonial.age} Jahre
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Google Reviews Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://maps.app.goo.gl/oXBEqJZ1QuJ17Dnu8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--golden-chestnut)] hover:text-[var(--primary)] transition-colors"
          >
            Alle Bewertungen auf Google ansehen
            <span className="text-lg">→</span>
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}