"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Award, Users, Calendar, MapPin } from "lucide-react";

export function MarkusSection() {
  return (
    <section className="section-padding section-gradient-markus">
      <div className="container-premium">
        
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
              <Image
                src="/images/markus/markus-hero.png"
                alt="Markus Spiegelhalder - IHHT Experte bei Previum® München"
                fill
                className="object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/95 backdrop-blur-sm shadow-lg">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--golden-chestnut)]/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-[var(--golden-chestnut)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Seit 2015 spezialisiert</p>
                    <p className="text-xs text-muted-foreground">auf IHHT Zelltraining</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <span className="inline-block text-sm font-medium text-[var(--golden-chestnut)] mb-3">
                Dein Spezialist
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-foreground mb-2">
                Markus Spiegelhalder
              </h2>
              <p className="text-lg text-muted-foreground">
                Gründer & Experte für Zelltraining
              </p>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--golden-chestnut)]/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-[var(--golden-chestnut)]" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">800+</p>
                  <p className="text-xs text-muted-foreground">Patienten begleitet</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--bright-marine)]/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-[var(--bright-marine)]" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">Seit 2015</p>
                  <p className="text-xs text-muted-foreground">in München</p>
                </div>
              </div>
            </div>
            
            {/* Bio */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Markus Spiegelhalder ist seit 2015 auf zelluläres Training und IHHT spezialisiert. 
                Er hat mehr als 800 Patienten auf ihrem Weg zurück zu Energie und Lebensqualität begleitet. 
                Menschen, die vorher viele Arzttermine hatten – ohne eine befriedigende Antwort.
              </p>
            </div>
            
            {/* Quote */}
            <div className="relative p-6 rounded-xl bg-gradient-to-br from-[var(--golden-chestnut)]/5 to-[var(--bright-marine)]/5 border border-border">
              <Quote className="absolute top-4 left-4 h-8 w-8 text-[var(--golden-chestnut)]/20" />
              <blockquote className="relative z-10 pl-8">
                <p className="text-base text-foreground leading-relaxed italic">
                  „Ich sehe jeden Tag Menschen, die aufgehört haben zu glauben, dass sich etwas ändern kann. 
                  Meine Aufgabe ist es, ihnen zu zeigen, wo die Energie wirklich steckt – 
                  und wie wir sie gemeinsam reaktivieren."
                </p>
                <footer className="mt-4 text-sm font-medium text-[var(--golden-chestnut)]">
                  — Markus Spiegelhalder, Previum® München
                </footer>
              </blockquote>
            </div>
            
            {/* Location */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-muted">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--golden-chestnut)]/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-[var(--golden-chestnut)]" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Praxis Previum® München</p>
                <p className="text-xs text-muted-foreground">Schumannstraße 9, 81679 München</p>
              </div>
            </div>
            
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}