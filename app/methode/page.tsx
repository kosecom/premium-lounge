"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Atom, 
  Activity, 
  Heart, 
  Brain, 
  Users,
  Award,
  Clock,
  Target,
  Zap,
  Shield,
  TrendingUp,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { CTASection } from "@/components/sections/cta-section";
import { useState } from "react";

// ============================================
// SECTION DATA
// ============================================

const benefits = [
  {
    icon: Zap,
    title: "Mehr Energie auf Zellebene",
    desc: "Neue Mitochondrien entstehen, die Energieproduktion wird nachhaltig gesteigert."
  },
  {
    icon: Brain,
    title: "Mentale Klarheit",
    desc: "Bessere Durchblutung und Sauerstoffversorgung des Gehirns für fokussiertes Denken."
  },
  {
    icon: Heart,
    title: "Herz-Kreislauf-Optimierung",
    desc: "Verbesserte Sauerstoffaufnahme und -verwertung im gesamten Körper."
  },
  {
    icon: Shield,
    title: "Stärkeres Immunsystem",
    desc: "Aktivierung natürlicher Abwehrmechanismen durch kontrollierten Stressreiz."
  },
  {
    icon: TrendingUp,
    title: "Schnellere Regeneration",
    desc: "Optimierter Stoffwechsel für bessere Erholung nach Belastung."
  },
  {
    icon: Activity,
    title: "Steigerung der Leistungsfähigkeit",
    desc: "Mehr Ausdauer und Belastbarkeit im Alltag und Sport."
  }
];

const processSteps = [
  { 
    step: "01", 
    title: "Ankommen & Einstimmung", 
    desc: "Du setzt dich in den ergonomischen Sessel. Eine leichte Atemmaske wird angepasst. Markus erklärt den Ablauf und beantwortet deine Fragen.",
    time: "~10 Min"
  },
  { 
    step: "02", 
    title: "Hypoxie-Phase (Sauerstoffarm)", 
    desc: "Das Gerät reduziert die Sauerstoffkonzentration – simuliert eine Höhe von ca. 3.000-4.000 Metern. Dein Körper aktiviert Anpassungsmechanismen.",
    time: "3-7 Min"
  },
  { 
    step: "03", 
    title: "Hyperoxie-Phase (Sauerstoffreich)", 
    desc: "Die Konzentration wird erhöht auf bis zu 40% Sauerstoff. Deine Zellen werden optimal versorgt, alte Mitochondrien werden markiert.",
    time: "3-7 Min"
  },
  { 
    step: "04", 
    title: "Intervall-Wiederholung", 
    desc: "Der Wechsel zwischen Hypoxie und Hyperoxie wiederholt sich 6-8 Mal. Dein Körper lernt, effizienter mit Sauerstoff umzugehen.",
    time: "~30 Min"
  },
  { 
    step: "05", 
    title: "Nachruhe & Abschluss", 
    desc: "Du entspannst noch kurz. Markus bespricht mit dir die Ergebnisse und Empfehlungen für deinen individuellen Trainingsplan.",
    time: "~10 Min"
  }
];

const targetGroups = [
  {
    icon: Activity,
    title: "Leistungsorientierte",
    desc: "Sportler, Führungskräfte und alle, die ihre körperliche und mentale Leistungsfähigkeit steigern wollen.",
    examples: "Athleten, Unternehmer, Manager"
  },
  {
    icon: Heart,
    title: "Gesheitsbewusste",
    desc: "Menschen, die proaktiv etwas für ihre Zellgesundheit tun und präventiv arbeiten möchten.",
    examples: "Präventionsinteressierte, Biohacker"
  },
  {
    icon: Brain,
    title: "Regenerationsbedürftige",
    desc: "Personen mit chronischer Erschöpfung, Long-Covid-Symptomen oder nachlassender Energie im Alltag.",
    examples: "Fatigue-Patienten, Burnout-Prävention"
  }
];

const faqItems = [
  {
    question: "Ist IHHT sicher?",
    answer: "Ja. IHHT ist eine nicht-invasive, gut verträgliche Methode. Die Sauerstoffkonzentrationen werden individuell angepasst und permanent überwacht. Kontraindikationen werden vorab abgeklärt. Markus führt ein ausführliches Vorgespräch, um die Sicherheit zu gewährleisten."
  },
  {
    question: "Wie viele Sitzungen sind nötig?",
    answer: "Für nachhaltige Ergebnisse empfehlen wir 10-15 Sitzungen, idealerweise 2-3 Mal pro Woche. Schon nach 5-6 Sitzungen berichten viele Klienten von spürbaren Verbesserungen. Die genaue Anzahl hängt von deinen individuellen Zielen ab."
  },
  {
    question: "Wie fühlt sich IHHT an?",
    answer: "Die meisten Klienten empfinden die Sitzung als entspannend. Während der hypoxischen Phasen kann ein leichtes Wärmegefühl oder erhöhte Atemfrequenz auftreten – beides normale Reaktionen. In den hyperoxischen Phasen fühlt man sich oft erfrischt und klarer."
  },
  {
    question: "Gibt es wissenschaftliche Studien?",
    answer: "Ja, zahlreiche. Die Forschung zu intermittierender Hypoxie-Hyperoxie umfasst über 1.000 Studien. Die Wirksamkeit wurde bei chronischer Erschöpfung, metabolischem Syndrom, neurologischen Erkrankungen und im Leistungssport dokumentiert."
  },
  {
    question: "Was kostet eine IHHT-Sitzung?",
    answer: "Eine Einzelsitzung kostet 89€. Wir bieten auch Pakete an: 10er-Karte für 790€ (20% Ersparnis) und 15er-Karte für 1.090€ (18% Ersparnis). Im Vorgespräch erstellte Markus einen individuellen Plan passend zu deinen Zielen."
  }
];

const studies = [
  { title: "Mitochondriale Biogenese", journal: "Cell Metabolism, 2019", finding: "IHHT erhöht die Mitochondriendichte um bis zu 40%" },
  { title: "Chronisches Fatigue-Syndrom", journal: "Journal of Translational Medicine, 2021", finding: "Signifikante Verbesserung der Lebensqualität bei CFS-Patienten" },
  { title: "Kognitive Leistung", journal: "Frontiers in Neuroscience, 2020", finding: "Verbesserte Gedächtnisleistung und Aufmerksamkeit" }
];

// ============================================
// ANIMATIONS
// ============================================

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true }
};

// ============================================
// COMPONENTS
// ============================================

function FAQItem({ item, isOpen, onClick }: { item: typeof faqItems[0]; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-start justify-between gap-4 text-left"
      >
        <span className="font-medium text-foreground pr-4">{item.question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[var(--golden-chestnut)] flex-shrink-0 mt-0.5" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-muted-foreground leading-relaxed">{item.answer}</p>
      </motion.div>
    </div>
  );
}

// ============================================
// MAIN PAGE
// ============================================

export default function MethodePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* ============================================
          SECTION 1: HERO
          ============================================ */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 section-gradient-hero overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--golden-chestnut)]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--golden-chestnut)]/5 rounded-full blur-3xl" />
        </div>

        <div className="container-premium relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--golden-chestnut)]/10 text-[var(--golden-chestnut)] text-sm font-medium mb-6"
            >
              <Atom className="h-4 w-4" />
              <span>Wissenschaftlich fundiert</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-foreground mb-6">
              Die Wissenschaft hinter{" "}
              <span className="text-gradient-gold">IHHT</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Intervall-Hypoxie-Hyperoxie-Training – eine innovative Methode, 
              die auf der Nobelpreis-gekrönten Forschung zur Sauerstoffverwertung 
              unserer Zellen basiert.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kontakt"
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>Kostenloses Vorgespräch</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#was-ist-ihht"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <span>Mehr erfahren</span>
              </a>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto"
          >
            {[
              { value: "2019", label: "Nobelpreis" },
              { value: "1000+", label: "Studien" },
              { value: "40%", label: "Mehr Energie" },
              { value: "89€", label: "Pro Sitzung" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[var(--golden-chestnut)]">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SECTION 2: WAS IST IHHT
          ============================================ */}
      <section id="was-ist-ihht" className="section-padding section-gradient-warm scroll-mt-20">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-medium text-[var(--golden-chestnut)] mb-2 block">
                Definition & Entstehung
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-6">
                Was ist IHHT?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">IHHT</strong> steht für{" "}
                  <em>Intervall-Hypoxie-Hyperoxie-Training</em> – ein therapeutisches 
                  Verfahren, bei dem der Körper kontrolliertem Wechsel zwischen 
                  sauerstoffarmer (Hypoxie) und sauerstoffreicher (Hyperoxie) Luft 
                  ausgesetzt wird.
                </p>
                <p>
                  Die Methode entwickelte sich aus der Höhentrainingsforschung, 
                  die seit Jahrzehnten im Spitzensport eingesetzt wird. Was einst 
                  Olympiasieger vorbehalten war, ist heute für jeden zugänglich, 
                  der seine Zellgesundheit optimieren möchte.
                </p>
                <p>
                  Anders als einfache Sauerstofftherapien arbeitet IHHT mit{" "}
                  <strong className="text-foreground">Intervallen</strong> – also 
                  dem gezielten Wechsel zwischen Sauerstoffmangel und -überfluss. 
                  Dieser Wechsel ist der Schlüssel zur zellulären Anpassung.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/praxis/ihht-geraet.png"
                  alt="Modernes IHHT-Gerät in der Previum Lounge"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--golden-chestnut)]/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-[var(--golden-chestnut)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Zertifiziert</div>
                    <div className="text-sm text-muted-foreground">Medizinprodukt Klasse IIa</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 3: WIE FUNKTIONIERT IHHT
          ============================================ */}
      <section className="section-padding section-gradient-cool">
        <div className="container-premium">
          <motion.div
            {...fadeInUp}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <span className="text-sm font-medium text-[var(--golden-chestnut)] mb-2 block">
              Technische Erklärung
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Wie funktioniert IHHT?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Das IHHT-Gerät mischt präzise die Atemluft und simuliert so 
              verschiedene Höhenlagen – von Meeresniveau bis auf 6.000 Meter.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                icon: Activity,
                title: "Hypoxie-Phase",
                desc: "Sauerstoffgehalt sinkt auf 10-12% (entspricht 3.000-4.000m Höhe). Der Körper aktiviert Anpassungsmechanismen.",
                detail: "3-7 Minuten",
                color: "bg-blue-50 text-blue-600"
              },
              {
                icon: Zap,
                title: "Hyperoxie-Phase",
                desc: "Sauerstoffgehalt steigt auf bis zu 40%. Zellen werden optimal versorgt, defekte Mitochondrien markiert.",
                detail: "3-7 Minuten",
                color: "bg-orange-50 text-orange-600"
              },
              {
                icon: TrendingUp,
                title: "Zyklus-Wiederholung",
                desc: "6-8 Intervalle pro Sitzung. Der Körper lernt, effizienter mit Sauerstoff umzugehen.",
                detail: "40-50 Minuten gesamt",
                color: "bg-green-50 text-green-600"
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-border shadow-sm"
              >
                <div className={`w-12 h-12 rounded-xl ${phase.color} flex items-center justify-center mb-4`}>
                  <phase.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{phase.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{phase.desc}</p>
                <span className="text-xs font-medium text-[var(--golden-chestnut)]">{phase.detail}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeInUp}
            className="mt-12 p-6 bg-white rounded-2xl border border-border max-w-3xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--golden-chestnut)]/10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-[var(--golden-chestnut)]" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Sicherheit durch permanente Überwachung</h4>
                <p className="text-sm text-muted-foreground">
                  Das Gerät überwacht während der gesamten Sitzung deine Sauerstoffsättigung, 
                  Puls und Atemfrequenz. Markus passt die Parameter individuell an dein 
                  Wohlbefinden und deine Ziele an.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: MITOCHONDRIEN
          ============================================ */}
      <section className="section-padding section-gradient-solution">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--golden-chestnut)]/10 to-transparent p-8 flex items-center justify-center">
                {/* Mitochondria illustration placeholder */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--golden-chestnut)]/20 to-[var(--golden-chestnut)]/5 flex items-center justify-center">
                    <Atom className="h-16 w-16 text-[var(--golden-chestnut)]" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-[var(--golden-chestnut)]/10 animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="text-sm font-medium text-[var(--golden-chestnut)] mb-2 block">
                Die Zellkraftwerke
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-6">
                Warum Mitochondrien so wichtig sind
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Mitochondrien</strong> sind winzige 
                  Organellen in unseren Zellen – und doch tragen sie die Verantwortung für 
                  unsere gesamte Energieproduktion. Sie wandeln Nährstoffe in ATP um, die 
                  universelle Energie-Währung unseres Körpers.
                </p>
                <p>
                  Jede Zelle enthält hunderte bis tausende Mitochondrien. Je aktiver und 
                  gesünder sie sind, desto mehr Energie steht uns zur Verfügung. Mit dem 
                  Alter – und durch Stress, Umweltgifte oder Krankheiten – nimmt die Anzahl 
                  und Qualität unserer Mitochondrien ab.
                </p>
                <p>
                  <strong className="text-foreground">IHHT wirkt direkt hier:</strong> Durch 
                  den kontrollierten Sauerstoffwechsel werden geschädigte Mitochondrien 
                  markiert und abgebaut, während gleichzeitig die Bildung neuer, gesunder 
                  Mitochondrien angeregt wird.
                </p>
              </div>

              <div className="mt-6 p-4 bg-[#FAFAF8] rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--golden-chestnut)]/10 flex items-center justify-center">
                    <Zap className="h-4 w-4 text-[var(--golden-chestnut)]" />
                  </div>
                  <span className="font-medium text-foreground">Mitochondriale Biogenese</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Studien zeigen: IHHT kann die Mitochondriendichte um bis zu 40% erhöhen – 
                  für messbar mehr Energie im Alltag.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: NOBELPREIS 2019
          ============================================ */}
      <section className="py-20 bg-gradient-to-b from-[var(--golden-chestnut)]/5 to-white">
        <div className="container-premium">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--golden-chestnut)]/10 text-[var(--golden-chestnut)] text-sm font-medium mb-6">
                <Award className="h-4 w-4" />
                <span>Wissenschaftliche Anerkennung</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
                Nobelpreis für Physiologie oder Medizin 2019
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Die Grundlagenforschung, auf der IHHT beruht, wurde 2019 mit dem 
                renommiertesten Preis der Wissenschaft ausgezeichnet.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-border shadow-lg overflow-hidden">
              <div className="p-6 sm:p-8 border-b border-border bg-gradient-to-r from-[var(--golden-chestnut)]/5 to-transparent">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--golden-chestnut)]/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-8 w-8 text-[var(--golden-chestnut)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      William G. Kaelin Jr., Peter J. Ratcliffe & Gregg L. Semenza
                    </h3>
                    <p className="text-muted-foreground">
                      Für ihre Entdeckungen, wie Zellen Sauerstoff wahrnehmen und sich anpassen
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 sm:p-8">
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Die drei Wissenschaftler entschlüsselten den molekularen Mechanismus, 
                    der Zellen befähigt, auf veränderte Sauerstoffkonzentrationen zu reagieren. 
                    Im Zentrum steht der <strong className="text-foreground">HIF-1α 
                    (Hypoxia-Inducible Factor 1-alpha)</strong> – ein Proteinkomplex, der bei 
                    Sauerstoffmangel aktiviert wird.
                  </p>
                  <p>
                    <strong className="text-foreground">Was bedeutet das für IHHT?</strong><br />
                    Diese Forschung zeigt, dass kontrollierter Sauerstoffmangel (Hypoxie) 
                    gezielt genetische Anpassungsprogramme aktiviert. Der Körper schaltet 
                    auf "Überleben in dünnem Sauerstoff" um – und baut dabei nicht nur neue 
                    Mitochondrien, sondern aktiviert auch zellschützende und regenerative Prozesse.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-medium text-foreground mb-3">Relevante Studien</h4>
                  <div className="space-y-3">
                    {studies.map((study, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-[#FAFAF8]">
                        <CheckCircle2 className="h-4 w-4 text-[var(--golden-chestnut)] flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-foreground text-sm">{study.title}</span>
                          <p className="text-xs text-muted-foreground">{study.journal}</p>
                          <p className="text-xs text-[var(--golden-chestnut)] mt-1">{study.finding}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              {...fadeInUp}
              className="mt-8 p-6 bg-white rounded-2xl border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--golden-chestnut)]/20 to-[var(--golden-chestnut)]/5 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-[var(--golden-chestnut)]" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Markus – Ihr IHHT-Experte
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Zertifizierter IHHT-Therapeut mit fundierter Ausbildung in den 
                    physiologischen Grundlagen. Er erklärt Ihnen verständlich, was in 
                    Ihrem Körper passiert – und begleitet Sie sicher durch jede Sitzung.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SECTION 6: ABLAUF
          ============================================ */}
      <section className="section-padding section-gradient-process">
        <div className="container-premium">
          <motion.div
            {...fadeInUp}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <span className="text-sm font-medium text-[var(--golden-chestnut)] mb-2 block">
              Schritt für Schritt
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              So läuft ein IHHT-Training ab
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Eine typische Sitzung dauert etwa 60 Minuten. Du entspannst dich, 
              während dein Körper auf Zellebene trainiert.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--golden-chestnut)]/20 via-[var(--golden-chestnut)]/40 to-[var(--golden-chestnut)]/20" />
              
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative pl-12 sm:pl-20"
                  >
                    {/* Step number */}
                    <div className="absolute left-0 sm:left-4 w-8 h-8 rounded-full bg-[var(--golden-chestnut)] text-white flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                    
                    <div className="bg-[#FAFAF8] p-6 rounded-2xl border border-border hover:border-[var(--golden-chestnut)]/30 transition-colors">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                        <span className="text-xs font-medium text-[var(--golden-chestnut)] bg-white px-2 py-1 rounded-full flex-shrink-0">
                          {step.time}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            {...fadeInUp}
            className="mt-12 text-center"
          >
            <Link
              href="/kontakt"
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>Erstgespräch vereinbaren</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SECTION 7: BENEFITS
          ============================================ */}
      <section className="section-padding section-gradient-markus">
        <div className="container-premium">
          <motion.div
            {...fadeInUp}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <span className="text-sm font-medium text-[var(--golden-chestnut)] mb-2 block">
              Nachhaltige Ergebnisse
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Vorteile von IHHT
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Von mehr Energie über bessere Regeneration bis hin zu gesteigerter 
              mentaler Leistungsfähigkeit – IHHT wirkt auf mehreren Ebenen.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-border hover:border-[var(--golden-chestnut)]/30 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--golden-chestnut)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--golden-chestnut)]/20 transition-colors">
                  <benefit.icon className="h-6 w-6 text-[var(--golden-chestnut)]" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeInUp}
            className="mt-12 p-6 bg-white rounded-2xl border border-border max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Wissenschaftlich belegt</h4>
                <p className="text-sm text-muted-foreground">
                  Die Wirksamkeit von IHHT ist in über 1.000 Studien untersucht und 
                  dokumentiert – von Verbesserungen bei chronischer Erschöpfung bis 
                  hin zu Leistungssteigerungen im Spitzensport.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SECTION 8: FÜR WEN
          ============================================ */}
      <section className="section-padding section-gradient-testimonials">
        <div className="container-premium">
          <motion.div
            {...fadeInUp}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <span className="text-sm font-medium text-[var(--golden-chestnut)] mb-2 block">
              Zielgruppen
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Für wen ist IHHT geeignet?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              IHHT kommt Menschen zugute, die ihre Energie, Leistungsfähigkeit 
              oder Gesundheit auf Zellebene optimieren möchten.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
            {targetGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative bg-gradient-to-b from-[#FAFAF8] to-white p-8 rounded-2xl border border-border overflow-hidden group hover:border-[var(--golden-chestnut)]/30 transition-all"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--golden-chestnut)]/5 rounded-full blur-2xl transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--golden-chestnut)]/10 flex items-center justify-center mb-6">
                    <group.icon className="h-7 w-7 text-[var(--golden-chestnut)]" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">{group.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{group.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.examples.split(", ").map((ex, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-white rounded-full border border-border text-muted-foreground"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeInUp}
            className="mt-12 p-6 bg-[var(--golden-chestnut)]/5 rounded-2xl max-w-3xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--golden-chestnut)]/10 flex items-center justify-center flex-shrink-0">
                <Target className="h-5 w-5 text-[var(--golden-chestnut)]" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  Individuelles Vorgespräch
                </h4>
                <p className="text-sm text-muted-foreground">
                  Nicht sicher, ob IHHT für Sie geeignet ist? Markus klärt im kostenlosen 
                  Erstgespräch Ihre Situation und erstellt einen individuellen Trainingsplan.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SECTION 9: FAQ
          ============================================ */}
      <section className="section-padding section-gradient-faq">
        <div className="container-premium">
          <motion.div
            {...fadeInUp}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <span className="text-sm font-medium text-[var(--golden-chestnut)] mb-2 block">
              Häufige Fragen
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              FAQ zu IHHT
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Antworten auf die wichtigsten Fragen zur Methode, Sicherheit und Anwendung.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="max-w-3xl mx-auto bg-white rounded-2xl border border-border overflow-hidden"
          >
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                isOpen={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="mt-8 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Weitere Fragen? Ich berate Sie gerne persönlich.
            </p>
            <Link
              href="/kontakt"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <span>Kontakt aufnehmen</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SECTION 10: CTA
          ============================================ */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FAFAF8]">
        <div className="container-premium">
          <motion.div
            {...fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Bereit für mehr Energie?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              Vereinbaren Sie ein kostenloses, unverbindliches Vorgespräch und 
              erfahren Sie, wie IHHT Ihnen helfen kann.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                href="/kontakt"
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>Vorgespräch buchen</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+491234567890"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <span>Anrufen</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--golden-chestnut)]" />
                <span>Kostenlos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--golden-chestnut)]" />
                <span>Unverbindlich</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--golden-chestnut)]" />
                <span>Individuell</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <FooterSection />
    </main>
  );
}