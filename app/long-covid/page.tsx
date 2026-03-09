"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { CTASection } from "@/components/sections/cta-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { AnimatedIcon } from "@/components/animated-icon";
import Link from "next/link";
import { ArrowRight, Star, Quote, ExternalLink, Award, ChevronRight } from "lucide-react";

// ============================================================================
// HERO SECTION
// ============================================================================

const trustBadges = [
  { icon: "users" as const, value: "800+", label: "Patienten betreut" },
  { icon: "star" as const, value: "5,0", label: "Sterne Bewertung" },
  { icon: "award" as const, value: "Seit 2015", label: "Spezialisiert" },
  { icon: "location" as const, value: "München", label: "Schumannstraße 9" },
];

function LongCovidHeroSection() {
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
              <AnimatedIcon icon="shield" size={18} color="#4B7FD1" />
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
            Die Infektion ist vorbei.<br />
            <span className="text-gradient-gold">Die Erschöpfung</span>{" "}
            <span className="text-foreground/90">bleibt.</span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground text-center leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Long COVID hat dein Energielevel auf Null gesetzt. Wir trainieren deine Zellen, 
            die Kraft zurückzugewinnen –{" "}
            <span className="font-medium text-foreground">wissenschaftlich belegt, seit 2015 in München</span>.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/kontakt" className="btn-primary text-base px-8 py-4">
              Kostenloses Erstgespräch sichern
              <AnimatedIcon icon="arrowRight" size={20} color="#FFFFFF" />
            </Link>
            <Link
              href="#symptome"
              className="btn-secondary text-base px-8 py-4"
            >
              Mehr über Long COVID
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

// ============================================================================
// SYMPTOME SECTION
// ============================================================================

const symptoms = [
  {
    icon: "battery" as const,
    title: "Chronische Erschöpfung",
    description: "Du wachst müde auf und bist den ganzen Tag auf Reserve. Selbst kleine Aufgaben fühlen sich an wie ein Marathon.",
    detail: "Fatigue ist das häufigste Long-COVID-Symptom"
  },
  {
    icon: "brain" as const,
    title: "Brain Fog",
    description: "Worte kommen dir nicht mehr so leicht. Konzentration fällt schwer. Dein Denken fühlt sich vernebelt an.",
    detail: "Kognitive Einschränkungen nach COVID-19"
  },
  {
    icon: "heart" as const,
    title: "Herzrasen & Atemnot",
    description: "Schon beim Treppensteigen gerätst du außer Atem. Dein Herz klopft plötzlich unregelmäßig – ohne erkennbaren Grund.",
    detail: "Kreislauf- und Herzprobleme"
  },
  {
    icon: "shield" as const,
    title: "Schlafstörungen",
    description: "Du liegst wach, kannst nicht einschlafen – oder wachst nachts immer wieder auf. Ausgeruht fühlst du dich trotzdem nie.",
    detail: "Gestörter Schlaf-Wach-Rhythmus"
  },
  {
    icon: "battery" as const,
    title: "POTS & Schwindel",
    description: "Beim Aufstehen wird dir schwindelig, dein Puls schießt hoch. Dein Kreislauf reagiert überempfindlich auf Belastung.",
    detail: "Autonome Dysfunktion"
  },
  {
    icon: "heart" as const,
    title: "Muskelschmerzen",
    description: "Gliederschmerzen ohne erkennbaren Grund. Dein Körper schmerzt, als hättest du Grippe – nur dass du keine hast.",
    detail: "Muskuläre Beschwerden"
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
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-[var(--golden-chestnut)] mb-4">
            Die Warnsignale
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-foreground mb-6">
            Long COVID zeigt sich<br />
            <span className="text-[var(--bright-marine)]">in vielen Gesichtern</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Diese Symptome kennst du vielleicht. Du bist nicht allein – und es ist nicht deine Schuld.
          </p>
        </motion.div>
        
        {/* Symptoms Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {symptoms.map((symptom, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="card-premium group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--golden-chestnut)]/10 to-[var(--golden-chestnut)]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <AnimatedIcon 
                    icon={symptom.icon} 
                    size={28} 
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                    {symptom.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {symptom.description}
                  </p>
                  <span className="inline-block text-xs font-medium text-[var(--golden-chestnut)] bg-[var(--golden-chestnut)]/10 px-2 py-1 rounded">
                    {symptom.detail}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Recognition Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-block p-8 rounded-2xl bg-white border border-border shadow-sm max-w-3xl">
            <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
              Wenn du dich in diesen Beschreibungen wiedererkennst –{" "}
              <span className="text-gradient-gold">
                dann ist das kein Zufall.
              </span>{" "}
              Long COVID ist eine reale Erkrankung mit realen Ursachen.
            </p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}

// ============================================================================
// URSACHEN SECTION
// ============================================================================

function UrsachenSection() {
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
            Warum du nicht zur Ruhe kommst
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-foreground mb-6">
            Long COVID ist<br />
            <span className="text-[var(--bright-marine)]">ein Zellproblem</span>
          </h2>
        </motion.div>
        
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          
          {/* Left: Explanation */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Block 1 */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Die Kraftwerke deiner Zellen sind beschädigt
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Dein Körper besteht aus etwa{" "}
                <strong className="text-foreground">70 Billionen Zellen</strong>. In jeder einzelnen davon 
                arbeiten Hunderte bis Tausende Mitochondrien – winzige Kraftwerke, die die Energie produzieren, 
                die du brauchst, um zu leben.
              </p>
            </div>
            
            {/* Block 2 */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                COVID-19 hinterlässt Spuren
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Nach einer COVID-Infektion sind viele dieser Kraftwerke beschädigt oder funktionieren nur noch 
                auf Sparflamme. Sie produzieren weniger Energie – und das spürst du in jedem Moment des Tages. 
                <strong className="text-foreground"> Ausruhen allein hilft hier nicht</strong>, 
                weil das Problem nicht im „Kopf" liegt.
              </p>
            </div>
            
            {/* Block 3 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--golden-chestnut)]/5 to-[var(--bright-marine)]/5 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Warum normale Tests oft unauffällig sind
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Blutwerte, EKG, MRT – oft alles „normal". Weil Standarduntersuchungen nicht auf zellulärer 
                Ebene schauen. Deine Mitochondrien aber schon. Das ist der Grund, warum viele Betroffene 
                sich unverstanden fühlen.
              </p>
            </div>
          </motion.div>
          
          {/* Right: Visual Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Stat Card 1 */}
            <div className="p-6 rounded-2xl bg-[#FAFAF8] border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-[var(--golden-chestnut)]/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[var(--golden-chestnut)]">~80%</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">der Long-COVID-Patienten</p>
                  <p className="text-sm text-muted-foreground">leiden unter Fatigue</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Chronische Erschöpfung ist das häufigste Symptom – und das am schwierigsten zu behandelnde 
                mit herkömmlichen Methoden.
              </p>
            </div>
            
            {/* Stat Card 2 */}
            <div className="p-6 rounded-2xl bg-[#FAFAF8] border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-[var(--bright-marine)]/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[var(--bright-marine)]">Monate</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">bis Jahre</p>
                  <p className="text-sm text-muted-foreground">dauert Long COVID</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ohne gezielte Intervention können die Symptome langfristig bestehen bleiben – 
                und deine Lebensqualität massiv einschränken.
              </p>
            </div>
            
            {/* Stat Card 3 */}
            <div className="p-6 rounded-2xl bg-[#FAFAF8] border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-[var(--golden-chestnut)]/10 flex items-center justify-center">
                  <AnimatedIcon icon="flask" size={28} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Mitochondriale Dysfunktion</p>
                  <p className="text-sm text-muted-foreground">ist der Schlüssel</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Wissenschaftliche Studien zeigen: Long COVID geht mit einer Störung der 
                mitochondrialen Funktion einher – genau dort setzt IHHT an.
              </p>
            </div>
          </motion.div>
          
        </div>
        
      </div>
    </section>
  );
}

// ============================================================================
// IHHT LÖSUNG SECTION
// ============================================================================

const ihhtBenefits = [
  {
    icon: "battery" as const,
    title: "Neue Energie aus deinen Zellen",
    description: "IHHT trainiert deine Mitochondrien direkt. Alte, ineffiziente Kraftwerke werden abgebaut – neue, leistungsfähige entstehen."
  },
  {
    icon: "shield" as const,
    title: "Wissenschaftlich fundiert",
    description: "Der Mechanismus hinter IHHT wurde 2019 mit dem Nobelpreis für Medizin ausgezeichnet. Keine Wunderheilung – sondern Zellbiologie."
  },
  {
    icon: "heart" as const,
    title: "Schonend & nebenwirkungsfrei",
    description: "Du liegst entspannt in unserer Lounge. Keine Belastung, kein Sport. Gerade für erschöpfte Menschen die ideale Methode."
  },
  {
    icon: "brain" as const,
    title: "Messbare Ergebnisse",
    description: "Dein Puls und deine Sauerstoffsättigung werden während jeder Einheit überwacht. Du siehst, wie dein Körper reagiert."
  }
];

function IHHTSection() {
  return (
    <section id="ihht" className="section-padding section-gradient-process">
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
            IHHT – Training für deine<br />
            <span className="text-[var(--bright-marine)]">Zellkraftwerke</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Intervall-Hypoxie-Hyperoxie-Training. Ein wissenschaftlich fundierter Ansatz, 
            der genau dort wirkt, wo Long COVID zuschlägt: auf zellulärer Ebene.
          </p>
        </motion.div>
        
        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="p-8 md:p-12 rounded-2xl bg-white border border-border shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              So funktioniert IHHT
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--bright-marine)]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[var(--bright-marine)]">1</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Hypoxie-Phase</h4>
                <p className="text-sm text-muted-foreground">
                  Du atmest Luft mit reduziertem Sauerstoffgehalt. Dein Körper reagiert mit Anpassungsprozessen.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--golden-chestnut)]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[var(--golden-chestnut)]">2</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Hyperoxie-Phase</h4>
                <p className="text-sm text-muted-foreground">
                  Es folgt sauerstoffreiche Luft. Dieser Wechsel aktiviert die Mitochondrien-Neubildung.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--bright-marine)]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[var(--bright-marine)]">3</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Regeneration</h4>
                <p className="text-sm text-muted-foreground">
                  Deine Zellen bauen neue, effizientere Mitochondrien auf – und damit deine Energie zurück.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {ihhtBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white border border-border shadow-sm group hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--golden-chestnut)]/10 to-[var(--bright-marine)]/10 flex items-center justify-center">
                  <AnimatedIcon 
                    icon={benefit.icon} 
                    size={28} 
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Nobel Prize Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-[var(--golden-chestnut)]/5 to-[var(--bright-marine)]/5 border border-border">
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-sm">
              <Award className="h-7 w-7 text-[var(--golden-chestnut)]" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Nobelpreis für Physiologie oder Medizin 2019</p>
              <p className="text-sm text-muted-foreground">
                Für die Entdeckung, wie Zellen auf Sauerstoffveränderungen reagieren
              </p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}

// ============================================================================
// STUDIEN SECTION
// ============================================================================

const studies = [
  {
    title: "IHHT bei Long COVID",
    journal: "Frontiers in Medicine, 2024",
    finding: "Signifikante Verbesserung der Fatigue-Symptome und Lebensqualität nach 15 IHHT-Sitzungen bei Long-COVID-Patienten.",
    participants: "Kontrollierte klinische Pilotstudie"
  },
  {
    title: "Mitochondriale Funktion nach COVID-19",
    journal: "Cell Metabolism, 2021",
    finding: "COVID-19 führt zu nachweisbaren Veränderungen in der mitochondrialen Funktion und Energieproduktion.",
    participants: "Peer-reviewed Forschung"
  },
  {
    title: "Hypoxie-Training und Mitochondrien",
    journal: "Journal of Physiology, 2019",
    finding: "Wechselnde Sauerstoffkonzentrationen stimulieren die Mitochondrien-Biogenese und verbessern die zelluläre Energieproduktion.",
    participants: "Wissenschaftliche Grundlagenstudie"
  }
];

function StudienSection() {
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
            Wissenschaftliche Belege
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-foreground mb-6">
            Nicht glauben –<br />
            <span className="text-[var(--bright-marine)]">verstehen.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            IHHT ist keine Wundermethode. Die Wirksamkeit ist wissenschaftlich dokumentiert.
          </p>
        </motion.div>
        
        {/* Studies Grid */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-6 rounded-2xl bg-[#FAFAF8] border border-border group hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--bright-marine)]/10 text-xs font-medium text-[var(--bright-marine)]">
                  {study.participants}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {study.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {study.journal}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {study.finding}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">
            Seit <strong className="text-foreground">2015</strong> wenden wir IHHT in der Praxis an – 
            mit über <strong className="text-foreground">800 betreuten Patienten</strong>.
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--golden-chestnut)] hover:text-[var(--primary)] transition-colors"
          >
            <span>Alle Studien im Detail</span>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
}

// ============================================================================
// TESTIMONIAL SECTION
// ============================================================================

const longCovidTestimonials = [
  {
    id: 1,
    name: "Sandra M.",
    role: "Lehrerin, München",
    age: "42",
    rating: 5,
    text: "14 Monate nach COVID nicht arbeitsfähig. Kein Arzt wusste weiter. Nach 12 Einheiten bei Markus habe ich zum ersten Mal wieder einen vollen Tag gearbeitet. Ich hatte nicht mehr damit gerechnet.",
    category: "Long COVID",
    highlight: "Endlich wieder arbeiten"
  },
  {
    id: 2,
    name: "Michael K.",
    role: "IT-Entwickler, Augsburg",
    age: "38",
    rating: 5,
    text: "Brain Fog war mein ständiger Begleiter. Konzentration für mehr als 2 Stunden? Unmöglich. Nach dem IHHT-Kurs kann ich wieder ganze Tage fokussiert arbeiten. Das hat mein Leben zurückgegeben.",
    category: "Long COVID",
    highlight: "Klarheit zurückgewonnen"
  },
  {
    id: 3,
    name: "Petra H.",
    role: "Ärztin, Starnberg",
    age: "51",
    rating: 5,
    text: "Als Medizinerin war ich skeptisch. Aber die Studienlage ist überzeugend und die Ergebnisse sprechen für sich. Meine Fatigue hat sich nach 15 Einheiten massiv verbessert.",
    category: "Long COVID",
    highlight: "Skeptisch, dann überzeugt"
  }
];

function LongCovidTestimonialsSection() {
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
            Patienten mit Long COVID
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-foreground mb-6">
            „Ich hatte nicht mehr<br />
            <span className="text-[var(--bright-marine)]">damit gerechnet."</span>
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
          {longCovidTestimonials.map((testimonial, index) => (
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
              <div className="inline-block px-3 py-1 rounded-full bg-[var(--golden-chestnut)]/10 text-xs font-medium text-[var(--golden-chestnut)] mb-3">
                {testimonial.category}
              </div>
              
              {/* Highlight */}
              <p className="text-sm font-medium text-[var(--bright-marine)] mb-3">
                {testimonial.highlight}
              </p>
              
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
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}

// ============================================================================
// FAQ SECTION
// ============================================================================

const longCovidFaqs = [
  {
    question: "Ist IHHT bei Long COVID wissenschaftlich belegt?",
    answer: "Ja. Eine kontrollierte klinische Pilotstudie aus 2024 zeigt signifikante Verbesserungen bei Long-COVID-Patienten hinsichtlich Fatigue, Belastbarkeit und Lebensqualität. Der zugrunde liegende Mechanismus – wie Zellen auf Sauerstoffveränderungen reagieren – wurde 2019 mit dem Nobelpreis für Physiologie oder Medizin ausgezeichnet. Seit 2015 wenden wir IHHT in unserer Praxis an."
  },
  {
    question: "Wie viele Sitzungen brauche ich bei Long COVID?",
    answer: "Die meisten Patienten mit Long COVID erleben erste Verbesserungen nach 6–8 Sitzungen. Ein vollständiger Kurs umfasst in der Regel 10–15 Einheiten über 4–6 Wochen. Im kostenlosen Erstgespräch besprechen wir deine individuelle Situation und erstellen einen maßgeschneiderten Plan."
  },
  {
    question: "Bin ich zu erschöpft für eine Behandlung?",
    answer: "Gerade das ist einer der größten Vorteile von IHHT: Du musst nicht fit sein, um davon zu profitieren. Das Training findet im Liegen statt – ohne körperliche Anstrengung. Viele Long-COVID-Patienten berichten, dass sie sich während der Behandlung entspannen und sogar entspannter aufwachen als davor."
  },
  {
    question: "Was kostet eine IHHT-Behandlung?",
    answer: "IHHT ist eine Selbstzahlerleistung. Die Kosten richten sich nach der Anzahl der benötigten Sitzungen. Im kostenlosen Erstgespräch klären wir transparent alle Kosten – bevor du dich entscheidest. Kein Druck, keine versteckten Posten. Viele Patienten investieren lieber in ihre Gesundheit als weitere Monate der Erschöpfung."
  },
  {
    question: "Gibt es Nebenwirkungen?",
    answer: "IHHT ist sehr gut verträglich. In klinischen Studien wurden keine relevanten Nebenwirkungen beobachtet. Während jeder Einheit werden dein Puls und deine Sauerstoffsättigung durchgehend überwacht. Du befindest dich die gesamte Zeit in einer professionellen Umgebung mit qualifizierter Betreuung."
  }
];

function LongCovidFAQSection() {
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
            Häufige Fragen zu Long COVID
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-foreground mb-6">
            Deine Fragen –<br />
            <span className="text-[var(--bright-marine)]">ehrlich beantwortet</span>
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
          <FAQAccordion faqs={longCovidFaqs} />
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
            href="/kontakt"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--golden-chestnut)] hover:text-[var(--primary)] transition-colors"
          >
            Kontakt aufnehmen <ChevronRight className="h-4 w-4" />
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function LongCovidPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* 1. Hero Section */}
      <LongCovidHeroSection />
      
      {/* 2. Symptome Section */}
      <SymptomeSection />
      
      {/* 3. Ursachen Section */}
      <UrsachenSection />
      
      {/* 4. IHHT Lösung Section */}
      <IHHTSection />
      
      {/* 5. Studien Section */}
      <StudienSection />
      
      {/* 6. Testimonial Section */}
      <LongCovidTestimonialsSection />
      
      {/* 7. FAQ Section */}
      <LongCovidFAQSection />
      
      {/* 8. CTA Section */}
      <CTASection />
      
      <FooterSection />
    </main>
  );
}