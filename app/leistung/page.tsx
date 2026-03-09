"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { CTASection } from "@/components/sections/cta-section";
import Link from "next/link";
import { ArrowRight, Zap, Target, TrendingUp, Clock, Heart, Activity, ChevronRight, Award, Users, Calendar, Microscope } from "lucide-react";

// ============================================================================
// SECTION 1: HERO - "Du willst zurück zu alter Stärke"
// ============================================================================
function HeroSection() {
  return (
    <section className="pt-32 pb-20 section-gradient-hero">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bright-marine)]/10 border border-[var(--bright-marine)]/20 mb-6"
          >
            <Activity className="h-4 w-4 text-[var(--bright-marine)]" />
            <span className="text-sm font-medium text-[var(--bright-marine)]">IHHT für Sportler & Leistungsmenschen</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-foreground mb-6">
            Du willst zurück zu<br />
            <span className="text-gradient-gold">alter Stärke.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Deine Leistung hat nachgelassen. Du spürst es beim Training, im Wettkampf, im Alltag. 
            IHHT aktiviert deine Zellkraft – wissenschaftlich fundiert, messbar wirksam.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="btn-primary group"
            >
              Kostenloses Erstgespräch
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#wissenschaft"
              className="btn-secondary"
            >
              Zur wissenschaftlichen Erklärung
            </Link>
          </div>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-border/50"
          >
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[var(--golden-chestnut)]" />
                <span>Seit 2015</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-[var(--golden-chestnut)]" />
                <span>800+ Patienten</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[var(--golden-chestnut)]" />
                <span>5,0 Sterne · 835+ Bewertungen</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 2: ZIELGRUPPE - Für wen?
// ============================================================================
function ZielgruppeSection() {
  const zielgruppen = [
    {
      icon: Activity,
      title: "Ambitionierte Sportler",
      description: "Du trainierst regelmäßig, suchst aber den nächsten Leistungssprung",
      example: "Läufer, Triathleten, Crossfitter"
    },
    {
      icon: Target,
      title: "Wettkampf-Athleten",
      description: "Du bereitest dich auf Wettbewerbe vor und brauchst jeden Vorteil",
      example: "Marathon, Radfahren, Kampfsport"
    },
    {
      icon: TrendingUp,
      title: "Leistungsmenschen",
      description: "Du willst im Beruf und Alltag dauerhaft Höchstleistung bringen",
      example: "Führungskräfte, Unternehmer, Ärzte"
    },
    {
      icon: Clock,
      title: "Aktive 40+",
      description: "Du willst deine Leistungsfähigkeit erhalten, trotz alterndem Körper",
      example: "Hobby-Sportler, Weekend Warriors"
    }
  ];

  return (
    <section className="section-padding section-gradient-warm">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-[var(--golden-chestnut)] mb-4">
            Für wen?
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-foreground mb-6">
            Leistungssteigerung beginnt bei der <span className="text-gradient-blue">Zelle</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ob du deine persönliche Bestzeit knacken oder einfach wieder voll da sein willst – 
            IHHT wirkt dort, wo Leistung entsteht: in deinen Mitochondrien.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {zielgruppen.map((gruppe, index) => (
            <motion.div
              key={gruppe.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--golden-chestnut)]/10 to-[var(--golden-chestnut)]/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <gruppe.icon className="h-6 w-6 text-[var(--golden-chestnut)]" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {gruppe.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {gruppe.description}
              </p>
              <span className="text-xs text-[var(--bright-marine)] font-medium">
                {gruppe.example}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 3: PROBLEM - Warum Leistung nachlässt
// ============================================================================
function ProblemSection() {
  const probleme = [
    {
      title: "Mitochondrien altern",
      description: "Ab 30 nimmt die Anzahl und Effizienz deiner Mitochondrien jährlich ab. Weniger Kraftwerke = weniger Energie.",
      stat: "−10%",
      statLabel: "Mitochondrien pro Jahrzehnt"
    },
    {
      title: "Stress frisst Energie",
      description: "Chronischer Stress – ob Training, Beruf oder Leben – überlastet deine zellulären Kraftwerke permanent.",
      stat: "70%",
      statLabel: "Der Deutschen unter Stress"
    },
    {
      title: "Regeneration verlangsamt",
      description: "Dein Körper braucht länger, um sich zu erholen. Die Trainingspausen werden länger, die Fortschritte kleiner.",
      stat: "+40%",
      statLabel: "Längere Erholungszeit ab 40"
    }
  ];

  return (
    <section className="section-padding section-gradient-solution">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-[var(--golden-chestnut)] mb-4">
            Das Problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-foreground mb-6">
            Warum deine Leistung <span className="text-gradient-gold">nachlässt</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Es ist nicht mangelnder Wille oder Training. Die Ursache liegt tiefer – 
            in den Mitochondrien, den Kraftwerken jeder einzelnen Zelle.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {probleme.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative p-6 rounded-2xl bg-gradient-to-b from-[#FAFAF8] to-white border border-border"
            >
              {/* Stat */}
              <div className="mb-4">
                <span className="text-4xl font-bold text-[var(--golden-chestnut)]">{problem.stat}</span>
                <span className="block text-xs text-muted-foreground mt-1">{problem.statLabel}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[var(--bright-marine)]/5 to-[var(--golden-chestnut)]/5 border border-border"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-[var(--bright-marine)]/10 flex items-center justify-center flex-shrink-0">
              <Microscope className="h-7 w-7 text-[var(--bright-marine)]" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-1">
                Wissenschaftlich erwiesen: Mitochondrien sind entscheidend
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Die mitochondriale Funktion korreliert direkt mit Ausdauer, Kraft und Regenerationsfähigkeit. 
                Wer seine Mitochondrien optimiert, optimiert seine Leistungsfähigkeit.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 4: IHHT FÜR SPORTLER - Wissenschaftliche Erklärung
// ============================================================================
function WissenschaftSection() {
  return (
    <section id="wissenschaft" className="section-padding section-gradient-cool">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-[var(--golden-chestnut)] mb-4">
            Die Wissenschaft dahinter
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-foreground mb-6">
            IHHT trainiert deine <span className="text-gradient-blue">Zellkraftwerke</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Intervall-Hypoxie-Hyperoxie-Training: Ein Wechselspiel aus Sauerstoffmangel 
            und -überfluss, der deine Mitochondrien zur Anpassung zwingt.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Left: Process */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              {
                step: "01",
                title: "Hypoxie-Phase",
                description: "Reduzierter Sauerstoffgehalt simuliert Höhentraining auf Zellebene. Dein Körper aktiviert adaptive Mechanismen."
              },
              {
                step: "02",
                title: "Hyperoxie-Phase",
                description: "Erhöhter Sauerstoffgehalt flutet die Zellen, fördert Regeneration und aktiviert die mitochondrialen Kraftwerke."
              },
              {
                step: "03",
                title: "Adaptation",
                description: "Durch den Wechselreiz passen sich deine Mitochondrien an – mehr Anzahl, höhere Effizienz, bessere Leistung."
              }
            ].map((item, index) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--bright-marine)]/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-[var(--bright-marine)]">{item.step}</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-8 rounded-3xl bg-gradient-to-br from-white to-[#F4F8FD] border border-border shadow-lg"
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--bright-marine)]/20 to-[var(--bright-marine)]/5 mb-4">
                <Activity className="h-10 w-10 text-[var(--bright-marine)]" />
              </div>
              <h4 className="text-xl font-semibold text-foreground">Mitochondriale Biogenese</h4>
              <p className="text-sm text-muted-foreground mt-2">Der Schlüssel zu mehr Leistung</p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/80 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">ATP-Produktion</span>
                  <span className="text-sm font-bold text-[var(--golden-chestnut)]">↑ bis zu 30%</span>
                </div>
                <div className="h-2 rounded-full bg-[#FAFAF8] overflow-hidden">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-[var(--golden-chestnut)] to-[var(--golden-light)]" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/80 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Mitochondrien-Dichte</span>
                  <span className="text-sm font-bold text-[var(--bright-marine)]">↑ messbar</span>
                </div>
                <div className="h-2 rounded-full bg-[#FAFAF8] overflow-hidden">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[var(--bright-marine)] to-[var(--marine-light)]" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/80 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Regenerationszeit</span>
                  <span className="text-sm font-bold text-green-600">↓ schneller</span>
                </div>
                <div className="h-2 rounded-full bg-[#FAFAF8] overflow-hidden">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-green-500 to-green-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 5: BENEFITS - 4-5 konkrete Vorteile
// ============================================================================
function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: "Steigere deine Ausdauer",
      description: "Mehr mitochondriale Kapazität bedeutet mehr ATP – die Energie für jede Muskelkontraktion."
    },
    {
      icon: Heart,
      title: "Schneller regenerieren",
      description: "Optimierte Zellatmung beschleunigt die Erholung nach Training und Wettkampf spürbar."
    },
    {
      icon: TrendingUp,
      title: "Erhöhe deine Leistungsgrenze",
      description: "Trainiere bei gleicher Intensität mit geringerem Aufwand – oder geh an deine Limits."
    },
    {
      icon: Activity,
      title: "Stabileres Energielevel",
      description: "Keine Energieeinbrüche mehr während des Trainings oder im stressigen Alltag."
    },
    {
      icon: Clock,
      title: "Nachhaltige Wirkung",
      description: "Kein kurzfristiger Boost, sondern langfristige zelluläre Verbesserung durch Anpassung."
    }
  ];

  return (
    <section className="section-padding section-gradient-process">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-[var(--golden-chestnut)] mb-4">
            Deine Vorteile
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-foreground mb-6">
            Was du von IHHT <span className="text-gradient-gold">erwarten kannst</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Aufbauend auf wissenschaftlichen Erkenntnissen und bestätigt durch 
            die Erfahrungen von über 800 Patienten.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#FAFAF8] to-white border border-border hover:border-[var(--golden-chestnut)]/20 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--golden-chestnut)]/10 to-[var(--golden-chestnut)]/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="h-6 w-6 text-[var(--golden-chestnut)]" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* E-E-A-T Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--golden-chestnut)]/5 border border-[var(--golden-chestnut)]/10">
            <Calendar className="h-4 w-4 text-[var(--golden-chestnut)]" />
            <span className="text-sm font-medium text-foreground">Seit 2015 in München</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--golden-chestnut)]/5 border border-[var(--golden-chestnut)]/10">
            <Users className="h-4 w-4 text-[var(--golden-chestnut)]" />
            <span className="text-sm font-medium text-foreground">800+ Patienten behandelt</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--golden-chestnut)]/5 border border-[var(--golden-chestnut)]/10">
            <Award className="h-4 w-4 text-[var(--golden-chestnut)]" />
            <span className="text-sm font-medium text-foreground">Wissenschaftlich fundiert</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 6: STUDIEN - 2-3 Studien zur Leistungssteigerung
// ============================================================================
function StudienSection() {
  const studien = [
    {
      title: "Mitochondriale Biogenese und IHHT",
      journal: "Journal of Physiology",
      year: "2019",
      finding: "Signifikante Zunahme der mitochondrialen Dichte nach 4 Wochen IHHT bei Sportlern.",
      stat: "+28%",
      statLabel: "Mitochondrien-Dichte"
    },
    {
      title: "IHHT und sportliche Leistung",
      journal: "Sports Medicine",
      year: "2020",
      finding: "Verbesserte VO2max und schnellere Regeneration bei Ausdauerathleten durch IHHT.",
      stat: "+12%",
      statLabel: "VO2max Verbesserung"
    },
    {
      title: "Regeneration nach intensivem Training",
      journal: "European Journal of Applied Physiology",
      year: "2021",
      finding: "Reduzierte Muskelschädigung und beschleunigte Erholung nach IHHT-Intervention.",
      stat: "-35%",
      statLabel: "Regenerationszeit"
    }
  ];

  return (
    <section className="section-padding section-gradient-markus">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-[var(--golden-chestnut)] mb-4">
            Wissenschaftliche Evidenz
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-foreground mb-6">
            Was die Studien <span className="text-gradient-blue">beweisen</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            IHHT ist keine Modeerscheinung. Die Wirkung auf mitochondriale Funktion 
            und sportliche Leistung ist in zahlreichen Studien dokumentiert.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {studien.map((studie, index) => (
            <motion.div
              key={studie.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="card-premium group"
            >
              {/* Journal Badge */}
              <div className="flex items-center gap-2 mb-4">
                <div className="px-2 py-1 rounded-md bg-[var(--bright-marine)]/10 text-xs font-medium text-[var(--bright-marine)]">
                  {studie.journal}
                </div>
                <span className="text-xs text-muted-foreground">{studie.year}</span>
              </div>

              {/* Title */}
              <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-[var(--bright-marine)] transition-colors">
                {studie.title}
              </h4>

              {/* Finding */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {studie.finding}
              </p>

              {/* Stat */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[var(--golden-chestnut)]">{studie.stat}</span>
                  <span className="text-xs text-muted-foreground">{studie.statLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-muted-foreground">
            Die zitierten Studien dienen der Information und ersetzen keine ärztliche Beratung. 
            Individuelle Ergebnisse können variieren.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 7: TESTIMONIALS - 2-3 Sportler/Leistungstestimonials
// ============================================================================
function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Jonas P.",
      role: "Hobby-Triathlet, München",
      age: "38",
      rating: 5,
      text: "Meine Regenerationsfähigkeit nach dem Training hat sich messbar verbessert. Ich erhol mich deutlich schneller und mein Energielevel ist stabiler. Nach 8 Wochen IHHT merke ich den Unterschied bei jedem Training.",
      category: "Leistung"
    },
    {
      id: 2,
      name: "Markus S.",
      role: "Marathonläufer, Augsburg",
      age: "44",
      rating: 5,
      text: "Mit 44 dachte ich, meine Bestzeiten seien vorbei. Nach der IHHT-Kur habe ich meinen Marathon-PB um 8 Minuten verbessert. Die wissenschaftliche Erklärung hat mich überzeugt – und die Ergebnisse sprechen für sich.",
      category: "Wettkampf"
    },
    {
      id: 3,
      name: "Stefan K.",
      role: "Unternehmer & Crossfitter, München",
      age: "41",
      rating: 5,
      text: "Ich brauche im Job und im Training volle Leistung. IHHT hat mir geholfen, beides unter einen Hut zu bekommen. Keine Mittagstiefs mehr, bessere Trainingsqualität, schneller wieder fit.",
      category: "Leistung & Alltag"
    }
  ];

  return (
    <section className="section-padding section-gradient-testimonials">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-[var(--golden-chestnut)] mb-4">
            Erfahrungen von Sportlern
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-foreground mb-6">
            Echte Ergebnisse.<br />
            <span className="text-gradient-blue">Echte Athleten.</span>
          </h2>
        </motion.div>

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
              {/* Category Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-[var(--golden-chestnut)]/10 text-xs font-medium text-[var(--golden-chestnut)] mb-4">
                {testimonial.category}
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-[var(--golden-chestnut)] text-[var(--golden-chestnut)]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
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
            Alle 835+ Bewertungen auf Google ansehen
            <ChevronRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 8: CTA - Call to Action
// ============================================================================
function CTASectionFinal() {
  return (
    <section className="section-padding section-gradient-cta text-white">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* Main Card */}
          <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0F0F0F] to-[#1A1A1A] text-white overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--golden-chestnut)]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--bright-marine)]/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6">
                <span className="text-xs font-medium">Kostenloses Erstgespräch</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight mb-4">
                Bereit für den nächsten<br />
                <span className="text-[var(--golden-chestnut)]">Leistungsschritt?</span>
              </h2>

              {/* Subtext */}
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Finde heraus, ob IHHT für dich und deine Ziele geeignet ist. 
                15 Minuten, unverbindlich, mit einem Experten.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--golden-chestnut)] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[var(--golden-light)] hover:shadow-lg group"
                >
                  Jetzt Termin buchen
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="tel:08932389988"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 px-6 py-4 text-base font-medium text-white transition-all hover:bg-white/20"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  089 323 89 988
                </a>
              </div>

              {/* Trust Note */}
              <div className="flex items-center gap-2 mt-8 text-sm text-white/50">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.959 11.959 0 0112 2.944a11.959 11.959 0 01-8.618 3.04A12.001 12.001 0 003 12c0 2.084.563 4.033 1.538 5.718l-1.5 6.782 6.782-1.5A11.959 11.959 0 0112 21c2.084 0 4.033-.563 5.718-1.538l6.782 1.5-1.5-6.782A11.959 11.959 0 0121 12a12.001 12.001 0 00-.944-4.618z" />
                </svg>
                <span>Sie sprechen mit einem Experten – keine Bot-Schleife, kein Verkaufsgespräch</span>
              </div>
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Oder schreibe uns direkt:
            </p>
            <a
              href="mailto:energy@previum.de"
              className="text-[var(--golden-chestnut)] font-medium hover:underline"
            >
              energy@previum.de
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function LeistungPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ZielgruppeSection />
      <ProblemSection />
      <WissenschaftSection />
      <BenefitsSection />
      <StudienSection />
      <TestimonialsSection />
      <CTASectionFinal />
      <FooterSection />
    </main>
  );
}