"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { CTASection } from "@/components/sections/cta-section";

export default function UeberMarkusPage() {
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
              Dein Experte
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-foreground mb-6">
              Markus<br /><span className="text-gradient-gold">Spiegelhalder</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Seit 2015 spezialisiert auf IHHT Zelltraining
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-gradient-warm">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/markus/markus-hero.png"
                alt="Markus Spiegelhalder"
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold text-foreground">
                Über Markus
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Markus Spiegelhalder ist seit 2015 auf zelluläres Training und IHHT spezialisiert. 
                Er hat mehr als 200 Patienten auf ihrem Weg zurück zu Energie und Lebensqualität begleitet.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Menschen, die vorher viele Arzttermine hatten – ohne eine befriedigende Antwort.
              </p>
              
              <div className="p-6 rounded-2xl bg-[#FAFAF8] border border-border">
                <p className="text-foreground italic leading-relaxed">
                  Ich sehe jeden Tag Menschen, die aufgehört haben zu glauben, dass sich etwas ändern kann. 
                  Meine Aufgabe ist es, ihnen zu zeigen, wo die Energie wirklich steckt – und wie wir sie gemeinsam reaktivieren.
                </p>
                <p className="text-sm text-[var(--golden-chestnut)] mt-4 font-medium">
                  — Markus Spiegelhalder
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-white border border-border text-center">
                  <p className="text-2xl font-bold text-[var(--golden-chestnut)]">800+</p>
                  <p className="text-sm text-muted-foreground">Patienten</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-border text-center">
                  <p className="text-2xl font-bold text-[var(--golden-chestnut)]">2015</p>
                  <p className="text-sm text-muted-foreground">Seit</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
      <FooterSection />
    </main>
  );
}