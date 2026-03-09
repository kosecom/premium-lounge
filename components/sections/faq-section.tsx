"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";

const faqs = [
  {
    question: "Ist IHHT wissenschaftlich belegt?",
    answer: "Ja. IHHT ist seit Jahrzehnten in der Sportwissenschaft und Medizin etabliert. Eine kontrollierte klinische Pilotstudie aus 2024 zeigt signifikante Verbesserungen bei Long-COVID-Patienten hinsichtlich Belastbarkeit, Symptomlast und Lebensqualität. Der zugrunde liegende Mechanismus – wie Zellen auf Sauerstoffveränderungen reagieren – wurde 2019 mit dem Nobelpreis für Physiologie oder Medizin ausgezeichnet."
  },
  {
    question: "Für wen ist die Behandlung geeignet?",
    answer: "Für Menschen mit anhaltender Erschöpfung, unabhängig von Fitnesslevel oder Alter. Wir betreuen Patienten zwischen 18 und 78 Jahren. Im Erstgespräch klären wir gemeinsam, ob IHHT für deine konkrete Situation passt."
  },
  {
    question: "Wie schnell spüre ich erste Verbesserungen?",
    answer: "Die meisten Patienten berichten erste Veränderungen nach 4–6 Einheiten. Messbare Ergebnisse zeigen sich erfahrungsgemäß nach einem vollständigen Kurs über 4–6 Wochen."
  },
  {
    question: "Was kostet die Behandlung?",
    answer: "IHHT ist eine Selbstzahlerleistung. Im kostenlosen Erstgespräch besprechen wir transparent alle Kosten – bevor du dich für irgendetwas entscheidest. Kein Druck, keine versteckten Posten."
  },
  {
    question: "Gibt es Nebenwirkungen?",
    answer: "IHHT ist gut verträglich. In klinischen Studien wurden keine relevanten Nebenwirkungen beobachtet. Dein Puls und deine Sauerstoffsättigung werden während jeder Einheit durchgehend überwacht."
  },
  {
    question: "Muss ich körperlich fit sein?",
    answer: "Nein – das ist einer der größten Vorteile von IHHT. Das Training findet im Liegen oder Sitzen statt. Gerade für Menschen, die körperlich nicht in der Lage sind, Sport zu treiben, ist IHHT oft die erste wirksame Option."
  },
  {
    question: "Wie lange dauert eine Sitzung?",
    answer: "Eine typische Sitzung in unserer Sauerstofflounge dauert zwischen 35 und 50 Minuten, abhängig von der spezifischen Behandlung und deinen individuellen Bedürfnissen."
  },
  {
    question: "Wie viele Sitzungen sind nötig?",
    answer: "Die Anzahl der benötigten Sitzungen variiert je nach individuellen Bedürfnissen und Zielen. In der Regel empfehlen wir 10–15 Einheiten über einen Zeitraum von 4–6 Wochen für optimale Ergebnisse."
  }
];

export function FAQSection() {
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
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--golden-chestnut)]/10 flex items-center justify-center">
              <HelpCircle className="h-6 w-6 text-[var(--golden-chestnut)]" />
            </div>
          </div>
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
          <FAQAccordion faqs={faqs} />
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
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--golden-chestnut)] hover:text-[var(--primary)] transition-colors"
          >
            Kontakt aufnehmen →
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}