"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Battery, 
  BatteryLow, 
  BatteryMedium, 
  AlertTriangle,
  Brain,
  Heart,
  Moon,
  TrendingDown,
  CheckCircle2,
  Quote,
  Star,
  Clock,
  Users,
  Award,
  ExternalLink,
  ChevronRight,
  Zap
} from "lucide-react";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { CTASection } from "@/components/sections/cta-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { AnimatedIcon } from "@/components/animated-icon";

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  return (
    <section className="pt-32 pb-20 section-gradient-hero relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[var(--golden-chestnut)]/5 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[var(--bright-marine)]/5 blur-3xl" />
      </div>
      
      <div className="container-premium relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--golden-chestnut)]/10 text-sm font-medium text-[var(--golden-chestnut)] mb-6"
          >
            <BatteryLow className="h-4 w-4" />
            Chronische Erschöpfung behandeln
          </motion.span>
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] tracking-tight text-foreground mb-8">
            Du hast alles gegeben –<br />
            <span className="text-gradient-gold">jetzt ist dein Akku leer.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            Du bist nicht kaputt. Du bist erschöpft. Burnout hinterlässt Spuren 
            auf Zellebene – aber diese Spuren sind reversibel. Mit der richtigen 
            Methode kannst du deine Energie zurückgewinnen.
          </p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="#kontakt"
              className="btn-primary inline-flex items-center gap-2"
            >
              Kostenloses Erstgespräch
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="#symptome"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Mehr erfahren
            </Link>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-border/50"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4 text-[var(--golden-chestnut)]" />
              <span><strong className="text-foreground">800+</strong> Patienten betreut</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Award className="h-4 w-4 text-[var(--golden-chestnut)]" />
              <span>Seit <strong className="text-foreground">2015</strong> spezialisiert</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="h-4 w-4 text-[var(--golden-chestnut)]" />
              <span><strong className="text-foreground">5,0</strong> Sterne Bewertung</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// SYMPTOME SECTION - Phasen des Burnouts
// ============================================
const burnoutPhases = [
  {
    phase: "Phase 1",
    title: "Überforderung",
    icon: BatteryMedium,
    symptoms: [
      "Ständiges Gefühl, nicht genug zu schaffen",
      "Schwierigkeiten, abzuschalten",
      "Erste Schlafstörungen",
      "Gereiztheit und Ungeduld"
    ],
    color: "var(--golden-chestnut)"
  },
  {
    phase: "Phase 2",
    title: "Erschöpfung",
    icon: BatteryLow,
    symptoms: [
      "Tiefe Müdigkeit trotz Schlaf",
      "Konzentrationsprobleme",
      "Körperliche Beschwerden",
      "Emotionale Distanz zur Arbeit"
    ],
    color: "var(--bright-marine)"
  },
  {
    phase: "Phase 3",
    title: "Depersonalisation",
    icon: Battery,
    symptoms: [
      "Gefühl der Sinnlosigkeit",
      "Sozialer Rückzug",
      "Zynismus",
      "Komplette Energielosigkeit"
    ],
    color: "#5C5C5C"
  }
];

function SymptomeSection() {
  return (
    <section id="symptome" className="section-padding section-gradient-warm">
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
            Die Warnsignale ernst nehmen
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-foreground mb-6">
            Burnout kommt nicht von heute<br />
            <span className="text-[var(--bright-marine)]">auf morgen.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dein Körper sendet Signale – lange bevor du zusammenbrichst. 
            Erkenne die Phasen, bevor es zu spät ist.
          </p>
        </motion.div>
        
        {/* Phases Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {burnoutPhases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connection Line */}
              {index < burnoutPhases.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(50%+80px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-border to-transparent" />
              )}
              
              <div className="card-premium text-center border border-border h-full">
                {/* Phase Badge */}
                <div 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-sm font-semibold"
                  style={{ backgroundColor: phase.color }}
                >
                  {phase.phase}
                </div>
                
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 mt-6"
                  style={{ backgroundColor: `${phase.color}15` }}
                >
                  <phase.icon className="h-8 w-8" style={{ color: phase.color }} />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {phase.title}
                </h3>
                
                {/* Symptoms */}
                <ul className="space-y-3 text-left">
                  {phase.symptoms.map((symptom, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: phase.color }} />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 p-6 rounded-2xl bg-[#FAFAF8] border border-border max-w-2xl mx-auto"
        >
          <p className="text-foreground font-medium mb-2">
            Erkenne dich wieder?
          </p>
          <p className="text-sm text-muted-foreground">
            Je früher du handelst, desto schneller die Erholung. 
            Viele unserer Patienten warten zu lange – das muss nicht sein.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// URSACHEN SECTION - Warum Urlaub nicht hilft
// ============================================
function UrsachenSection() {
  return (
    <section className="section-padding section-gradient-cool">
      <div className="container-premium">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-block text-sm font-medium text-[var(--golden-chestnut)] mb-2">
              Das Problem verstehen
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-foreground">
              Warum Urlaub allein<br />
              <span className="text-[var(--bright-marine)]">nicht hilft.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Du warst drei Wochen weg. Und trotzdem bist du nach zwei Tagen 
              zurück im Büro wieder erschöpft. Das ist kein Zeichen von Faulheit 
              oder Undankbarkeit.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Es ist ein Zeichen dafür, dass dein Problem nicht nur im Kopf liegt. 
              <strong className="text-foreground"> Burnout ist eine körperliche, 
              zelluläre Erkrankung.</strong> Urlaub kann den Geist erfrischen – 
              aber er repariert nicht die Mitochondrien, die deine Energie produzieren.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Urlaub = Pause, nicht Reparatur</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Du stoppst die Belastung, aber du baust keine neue Energie auf.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <Moon className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Schlaf allein reicht nicht</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Dein Energiestoffwechsel ist gestört. Du kannst schlafen wie nie – 
                    und wachst trotzdem nicht erholt auf.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <Brain className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Psychische Ursachen sind nur ein Teil</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Stress beginnt im Kopf – aber er endet in der Zelle. 
                    Nur wer beides behandelt, hilft nachhaltig.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--golden-chestnut)]/10 to-[var(--bright-marine)]/10 p-8">
              {/* Quote */}
              <div className="relative z-10 text-center py-8">
                <Quote className="h-12 w-12 text-[var(--golden-chestnut)]/30 mx-auto mb-6" />
                <p className="text-2xl sm:text-3xl font-semibold text-foreground leading-snug mb-6">
                  „Ich dachte, ich müsse nur<br />
                  mal richtig abschalten."
                </p>
                <p className="text-muted-foreground">
                  – Leiterin, 47, nach 2 Jahren Burnout
                </p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white/50 blur-xl" />
              <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-white/30 blur-xl" />
            </div>
            
            {/* Bottom CTA */}
            <div className="mt-6 p-6 rounded-2xl bg-white border border-border shadow-lg">
              <p className="text-center text-muted-foreground">
                <span className="text-foreground font-medium">Die gute Nachricht:</span> Deine Zellen 
                können sich regenerieren. Mit IHHT trainierst du sie direkt.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// ZELLEBENE SECTION
// ============================================
function ZellebeneSection() {
  return (
    <section className="section-padding section-gradient-solution">
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
            Wissenschaftlich erklärt
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-foreground mb-6">
            Was passiert auf<br />
            <span className="text-gradient-gold">Zellebene?</span>
          </h2>
        </motion.div>
        
        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Left: Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-[#FAFAF8] border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--golden-chestnut)]/10 flex items-center justify-center">
                  <Battery className="h-5 w-5 text-[var(--golden-chestnut)]" />
                </div>
                <h3 className="font-semibold text-foreground">Mitochondrien: Deine Energiekraftwerke</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                In jeder deiner Zellen befinden sich Hunderte bis Tausende Mitochondrien. 
                Sie wandeln Nährstoffe in ATP um – die Energie, die jeden Gedanken, 
                jede Bewegung, jeden Herzschlag antreibt.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-[#FAFAF8] border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                </div>
                <h3 className="font-semibold text-foreground">Bei Burnout: Gestörter Energiestoffwechsel</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Chronischer Stress schädigt die Mitochondrien. Sie arbeiten weniger effizient, 
                produzieren weniger ATP und vermehren sich langsamer. Du fühlst dich 
                permanent erschöpft – weil du auf Zellebene erschöpft bist.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-[var(--golden-chestnut)]/5 border border-[var(--golden-chestnut)]/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--golden-chestnut)]/10 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-[var(--golden-chestnut)]" />
                </div>
                <h3 className="font-semibold text-foreground">Mit IHHT: Regeneration von innen</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Intervall-Hypoxie-Hyperoxie-Training stimuliert die Mitochondrien-Biogenese. 
                Neue, gesunde Mitochondrien entstehen. Geschädigte werden abgebaut. 
                Dein Energiestoffwechsel normalisiert sich – messbar und spürbar.
              </p>
            </div>
          </motion.div>
          
          {/* Right: Visual representation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Cell visualization */}
              <div className="relative rounded-3xl bg-gradient-to-br from-[var(--bright-marine)]/5 to-[var(--golden-chestnut)]/5 p-8 border border-border">
                <div className="text-center mb-8">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Energielevel</p>
                  
                  {/* Before/After bars */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Vor IHHT</p>
                      <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-[30%] bg-gradient-to-r from-red-400 to-red-300 rounded-full" />
                      </div>
                      <p className="text-xs text-red-500 mt-1">~30% Kapazität</p>
                    </div>
                    
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Nach IHHT-Kur</p>
                      <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-[85%] bg-gradient-to-r from-[var(--golden-chestnut)] to-[var(--golden-light)] rounded-full" />
                      </div>
                      <p className="text-xs text-[var(--golden-chestnut)] mt-1">~85% Kapazität</p>
                    </div>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 rounded-xl bg-white border border-border">
                    <p className="text-2xl font-bold text-foreground">↑ 40%</p>
                    <p className="text-xs text-muted-foreground">ATP-Produktion</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-border">
                    <p className="text-2xl font-bold text-foreground">↑ 25%</p>
                    <p className="text-xs text-muted-foreground">Mitochondrien-Dichte</p>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground text-center mt-4 italic">
                  * Durchschnittliche Werte aus klinischen Studien
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// IHHT LÖSUNG SECTION
// ============================================
function IHHTSection() {
  return (
    <section className="section-padding section-gradient-cool">
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
            Die Lösung
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-foreground mb-6">
            IHHT: Regeneration<br />
            <span className="text-gradient-blue">von innen.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Intervall-Hypoxie-Hyperoxie-Training – die Methode, die deine Zellen 
            direkt trainiert und deine Energiekraftwerke wieder aufbaut.
          </p>
        </motion.div>
        
        {/* How it works */}
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mb-16">
          {[
            {
              step: "1",
              title: "Sauerstoffarme Phase",
              desc: "Du atmest Luft mit reduziertem Sauerstoffgehalt – simuliert eine Höhe von 3.000-4.000m. Dein Körper aktiviert Anpassungsmechanismen."
            },
            {
              step: "2",
              title: "Sauerstoffreiche Phase",
              desc: "Danach folgt eine Phase mit erhöhtem Sauerstoff. Deine Zellen nutzen die Gelegenheit zur Regeneration und zum Aufbau."
            },
            {
              step: "3",
              title: "Intervalle wiederholen",
              desc: "Dieser Wechsel trainiert deine Mitochondrien wie ein Fitnessprogramm – nur dass du dabei entspannt liegst."
            }
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--bright-marine)]/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--bright-marine)]">{item.step}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-foreground">
              Was Burnout-Patienten nach einem Kurs berichten:
            </h3>
          </div>
          
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Endlich wieder erholt aufwachen",
              "Klarerer Kopf, bessere Konzentration",
              "Mehr Energie für den Alltag",
              "Stabilere Stimmung, weniger Reizbarkeit",
              "Schnellere Regeneration nach Belastung",
              "Verbesserter Schlaf"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-border"
              >
                <CheckCircle2 className="h-5 w-5 text-[var(--golden-chestnut)] flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// PROZESS SECTION - 3 Schritte
// ============================================
function ProzessSection() {
  const steps = [
    {
      number: "01",
      icon: Clock,
      title: "Kostenloses Erstgespräch",
      duration: "15–20 Minuten",
      description: "Wir analysieren deine Situation: Symptome, Dauer, Belastungsfaktoren. Ehrliche Einschätzung, ob IHHT für dich passt – ohne Druck.",
      highlight: "Keine Verpflichtung."
    },
    {
      number: "02",
      icon: Heart,
      title: "Individueller Trainingsplan",
      duration: "Vor der ersten Einheit",
      description: "Ein Hypoxie-Test ermittelt deine Sauerstoffsensitivität. Darauf basierend erstellen wir deinen maßgeschneiderten Plan.",
      highlight: "100% auf dich zugeschnitten."
    },
    {
      number: "03",
      icon: Battery,
      title: "Dein Zelltraining",
      duration: "10–15 Einheiten à 40–50 Min",
      description: "3× pro Woche entspannst du in unserer Lounge. Wir überwachen Puls und Sauerstoffsättigung. Du liegst einfach nur da – und trainierst.",
      highlight: "Entspannt regenerieren."
    }
  ];

  return (
    <section className="section-padding section-gradient-process">
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
            Dein Weg zu neuer Energie
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-foreground mb-6">
            Drei Schritte zur<br />
            <span className="text-[var(--bright-marine)]">Regeneration.</span>
          </h2>
        </motion.div>
        
        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+60px)] w-[calc(100%-60px)] h-0.5 bg-gradient-to-r from-[var(--golden-chestnut)]/30 to-transparent" />
              )}
              
              <div className="card-premium text-center border border-border h-full">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[var(--golden-chestnut)] text-white text-sm font-semibold">
                  Schritt {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[var(--golden-chestnut)]/10 flex items-center justify-center mx-auto mb-4 mt-4">
                  <step.icon className="h-8 w-8 text-[var(--golden-chestnut)]" />
                </div>
                
                {/* Title & Duration */}
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--golden-chestnut)] font-medium mb-4">
                  {step.duration}
                </p>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {step.description}
                </p>
                
                {/* Highlight */}
                <p className="text-sm font-medium text-foreground flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--golden-chestnut)]" />
                  {step.highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="#kontakt"
            className="btn-primary inline-flex items-center gap-2"
          >
            Jetzt Erstgespräch vereinbaren
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// TESTIMONIALS SECTION
// ============================================
const burnoutTestimonials = [
  {
    id: 1,
    name: "Thomas K.",
    role: "Geschäftsführer",
    location: "Augsburg",
    age: "51",
    rating: 5,
    text: "Zwei Jahre auf Reserve gelebt. Urlaub hat nicht geholfen, Medikamente nicht. Ich dachte, das ist mein neues Normal. Nach der IHHT-Kur bin ich zum ersten Mal seit langer Zeit wirklich ausgeruht aufgewacht. Es geht wieder.",
    category: "Burnout"
  },
  {
    id: 2,
    name: "Martina S.",
    role: "Lehrerin",
    location: "München",
    age: "44",
    rating: 5,
    text: "Ich war kurz vor dem Zusammenbruch. Jeden Morgen mit Bauchschmerzen aufgewacht, jeden Abend völlig erschöpft. Nach 10 Einheiten hatte ich wieder Energie für meine Schüler – und für mich selbst.",
    category: "Burnout"
  },
  {
    id: 3,
    name: "Stefan R.",
    role: "IT-Projektleiter",
    location: "München",
    age: "39",
    rating: 5,
    text: "Ich habe alles versucht: Therapie, Sport, Urlaub, Ernährungsumstellung. Nichts hat nachhaltig geholfen. IHHT war der Wendepunkt. Endlich verstehe ich, warum ich so erschöpft war – und wie ich es ändern kann.",
    category: "Burnout"
  }
];

function TestimonialsSection() {
  return (
    <section className="section-padding section-gradient-markus">
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
            Echte Erfahrungen
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-foreground mb-6">
            Was Burnout-Patienten<br />
            <span className="text-[var(--bright-marine)]">berichten.</span>
          </h2>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[var(--golden-chestnut)] text-[var(--golden-chestnut)]" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">5,0 Sterne</span>
            <span className="text-sm text-muted-foreground">· 800+ Patienten</span>
          </div>
        </motion.div>
        
        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {burnoutTestimonials.map((testimonial, index) => (
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
                  {testimonial.role}, {testimonial.location} · {testimonial.age} Jahre
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* More Reviews Link */}
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
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// FAQ SECTION
// ============================================
const burnoutFAQs = [
  {
    question: "Ist Burnout heilbar oder muss ich damit leben?",
    answer: "Burnout ist behandelbar. Es ist keine dauerhafte Diagnose, sondern ein Zustand extremer Erschöpfung. Mit der richtigen Behandlung – inklusive zellulärer Regeneration durch IHHT – kehren viele Patienten zu ihrem normalen Energieniveau zurück. Wichtig: Je früher du handelst, desto besser die Aussichten."
  },
  {
    question: "Wie unterscheidet sich IHHT von anderen Behandlungen?",
    answer: "Klassische Burnout-Therapien fokussieren auf die Psyche: Gesprächstherapie, Stressmanagement, Verhaltensänderungen. IHHT ergänzt diese Ansätze auf körperlicher Ebene. Es trainiert direkt die Mitochondrien – die Energiekraftwerke deiner Zellen. Viele Patienten kombinieren beides für optimale Ergebnisse."
  },
  {
    question: "Wie viele Sitzungen brauche ich bei Burnout?",
    answer: "Bei Burnout empfehlen wir in der Regel 10–15 Einheiten über 4–6 Wochen. Die genaue Anzahl hängt von der Schwere deiner Erschöpfung und deinem individuellen Ansprechen ab. Im Erstgespräch erstellen wir einen maßgeschneiderten Plan."
  },
  {
    question: "Kann ich IHHT während einer laufenden Therapie machen?",
    answer: "Ja. IHHT lässt sich hervorragend mit psychotherapeutischen Behandlungen kombinieren. Es gibt keine Wechselwirkungen. Viele Therapeuten empfehlen sogar die begleitende Stärkung der körperlichen Energie. Wir kooperieren gerne mit deinem Behandlungsteam."
  },
  {
    question: "Was kostet die Behandlung und übernimmt die Krankenkasse etwas?",
    answer: "IHHT ist eine Selbstzahlerleistung. Die Kosten variieren je nach Anzahl der benötigten Einheiten. Im kostenlosen Erstgespräch besprechen wir alle Details transparent – bevor du dich entscheidest. Manche privaten Krankenkassen übernehmen Teile der Kosten auf Antrag."
  }
];

function FAQSection() {
  return (
    <section className="section-padding section-gradient-faq">
      <div className="container-premium">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span className="inline-block text-sm font-medium text-[var(--golden-chestnut)] mb-4">
            Häufige Fragen
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-foreground mb-6">
            Fragen zur<br />
            <span className="text-[var(--bright-marine)]">Burnout-Behandlung.</span>
          </h2>
        </motion.div>
        
        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <FAQAccordion faqs={burnoutFAQs} />
        </motion.div>
        
        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Noch Fragen? Wir beantworten sie gerne persönlich.
          </p>
          <Link
            href="#kontakt"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--golden-chestnut)] hover:text-[var(--primary)] transition-colors"
          >
            Kontakt aufnehmen <ChevronRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// CTA SECTION (Inline, not imported)
// ============================================
function InlineCTASection() {
  return (
    <section id="kontakt" className="section-padding section-gradient-cta text-white">
      <div className="container-premium relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6">
              Du hast genug<br />
              <span className="text-[var(--golden-chestnut)]">auf Reserve gelebt.</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Zeit, deinen Akku wieder aufzuladen. Ein kostenloses Erstgespräch 
              ist der erste Schritt zurück zu deiner Energie.
            </p>
          </motion.div>
        </div>
        
        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid gap-4 md:grid-cols-2 max-w-2xl mx-auto mb-12"
        >
          <a
            href="tel:08932389988"
            className="group flex items-center gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
          >
            <AnimatedIcon icon="phone" size={32} />
            <div>
              <p className="font-semibold text-white">Anrufen</p>
              <p className="text-sm text-white/70">Mo–Fr 9–17 Uhr · 089 323 89 988</p>
            </div>
          </a>
          <a
            href="mailto:energy@previum.de"
            className="group flex items-center gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
          >
            <AnimatedIcon icon="mail" size={32} />
            <div>
              <p className="font-semibold text-white">E-Mail</p>
              <p className="text-sm text-white/70">Antwort innerhalb 24h · energy@previum.de</p>
            </div>
          </a>
        </motion.div>
        
        {/* Trust */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-sm text-white/50"
        >
          <AnimatedIcon icon="shield" size={18} color="rgba(255,255,255,0.5)" />
          <span>
            Deine Daten werden vertraulich behandelt. DSGVO-konform.
          </span>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function BurnoutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <HeroSection />
      <SymptomeSection />
      <UrsachenSection />
      <ZellebeneSection />
      <IHHTSection />
      <ProzessSection />
      <TestimonialsSection />
      <FAQSection />
      <InlineCTASection />
      
      <FooterSection />
    </main>
  );
}