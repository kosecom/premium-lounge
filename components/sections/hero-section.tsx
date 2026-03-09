"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedIcon } from "@/components/animated-icon";

const trustBadges = [
  { icon: "users" as const, value: "800+", label: "Patienten betreut" },
  { icon: "star" as const, value: "5,0", label: "Sterne Bewertung" },
  { icon: "award" as const, value: "Seit 2015", label: "Spezialisiert" },
  { icon: "location" as const, value: "München", label: "Schumannstraße 9" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[var(--golden-chestnut)]/8 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[var(--bright-marine)]/6 to-transparent rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" />
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px',
        }} />
      </div>
      
      <div className="container-premium relative z-10 pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="max-w-4xl mx-auto">
          
          {/* Trust Badge Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-border/50 shadow-sm">
              <AnimatedIcon icon="shield" size={18} color="#4B7FD1" trigger="loop" />
              <span className="text-sm font-medium text-foreground">
                Medizin-Nobelpreis 2019 ausgezeichnete Methode
              </span>
            </div>
          </motion.div>
          
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-center text-foreground mb-8"
          >
            Dein Körper hat die{" "}
            <span className="text-gradient-gold">Energie.</span>
            <br />
            <span className="text-foreground/90">Er hat nur vergessen, wie er sie</span>{" "}
            <span className="text-gradient-blue">produziert.</span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground text-center leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            IHHT-Zelltraining bei Long COVID, Burnout und chronischer Erschöpfung – 
            wissenschaftlich belegt, seit 2015 in der Praxis{" "}
            <span className="font-medium text-foreground">Previum®</span> in München.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/kontakt" className="btn-primary text-base px-8 py-4">
              Kostenlose Beratung sichern
              <AnimatedIcon icon="arrowRight" size={20} color="#FFFFFF" trigger="hover" />
            </Link>
            <Link
              href="#methode"
              className="btn-secondary text-base px-8 py-4"
            >
              Wie funktioniert IHHT?
            </Link>
          </motion.div>
          
          {/* Trust Badges with Animated Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-2xl mx-auto"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="trust-badge"
              >
                <AnimatedIcon 
                  icon={badge.icon} 
                  size={32} 
                  trigger="loop" 
                  delay={index * 200}
                />
                <span className="trust-badge-value">{badge.value}</span>
                <span className="trust-badge-label">{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs font-medium">Mehr erfahren</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-border flex items-start justify-center p-1.5"
          >
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 rounded-full bg-[var(--golden-chestnut)]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}