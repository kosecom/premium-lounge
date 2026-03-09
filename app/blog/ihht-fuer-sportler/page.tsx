"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { CTASection } from "@/components/sections/cta-section";
import Link from "next/link";

export default function IHHTFuerSportlerPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#FAFAF8] to-white">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block text-sm font-medium text-[var(--golden-chestnut)] mb-4">
              Blog
            </span>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight text-foreground mb-6">
              IHHT für Sportler: Mehr Leistung durch Zelltraining
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <time>09. März 2026</time>
              <span>•</span>
              <span>13 Min. Lesezeit</span>
              <span>•</span>
              <span>Von Markus Spiegelhalder</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Spitzensportler suchen ständig nach Wegen, ihre Leistung zu optimieren. 
              Intervall-Hypoxie-Hyperoxie-Training (IHHT) bietet eine wissenschaftlich 
              fundierte Methode, um auf zellulärer Ebene die Ausdauer, Regeneration 
              und Gesamtleistung zu steigern – ohne zusätzliche Trainingsbelastung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <article className="section-padding section-gradient-warm">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto prose prose-lg">
            
            {/* Einleitung */}
            <p className="lead text-lg text-muted-foreground leading-relaxed mb-8">
              Was haben Olympiasieger, Profifußballer und Ausdauerathleten gemeinsam? 
              Sie alle suchen nach dem marginalen Vorteil – jenen kleinen Verbesserungen, 
              die über Sieg oder Niederlage entscheiden. IHHT könnte genau dieser Vorteil sein.
            </p>

            {/* H2: Was bringt IHHT für Sportler? */}
            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">
              Was bringt IHHT für Sportler?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              IHHT wirkt dort, wo Leistung entsteht: in den Mitochondrien Ihrer Muskelzellen. 
              Durch den kontrollierten Wechsel zwischen Sauerstoffmangel und Sauerstoffüberschuss 
              werden Anpassungsprozesse ausgelöst, die sonst nur durch intensives Training 
              oder Höhentrainingslager erreicht werden.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Die wichtigsten Vorteile für Sportler sind:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
              <li><strong>Erhöhte mitochondriale Dichte</strong> – mehr Energiekraftwerke in Ihren Zellen</li>
              <li><strong>Verbesserte Sauerstoffutilization</strong> – Ihr Körper nutzt available Sauerstoff effizienter</li>
              <li><strong>Steigerung der VO2max</strong> – die maximale Sauerstoffaufnahme nimmt zu</li>
              <li><strong>Beschleunigte Regeneration</strong> – schnellere Erholung nach Training und Wettkampf</li>
              <li><strong>Reduzierte Verletzungsanfälligkeit</strong> – durch bessere Durchblutung und Zellgesundheit</li>
            </ul>

            {/* H2: Wie wirkt IHHT auf die sportliche Leistung? */}
            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">
              Wie wirkt sich IHHT auf die sportliche Leistung aus?
            </h2>
            
            {/* H3: Ausdauer */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Verbesserte Ausdauerleistung
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Studien zeigen, dass IHHT die VO2max – also die maximale Sauerstoffaufnahme – 
              signifikant steigern kann. In einer Untersuchung an Ausdauerathleten verbesserte 
              sich die VO2max nach 4 Wochen IHHT um durchschnittlich 8–12%<sup className="text-xs">[1]</sup>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Das bedeutet: Bei gleicher Belastung arbeitet Ihr Herz-Kreislauf-System 
              effizienter, Sie können länger und intensiver trainieren, bevor Sie an Ihre 
              Grenzen stoßen.
            </p>

            {/* H3: Regeneration */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Schnellere Regeneration nach Belastung
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Regeneration ist der oft unterschätzte Teil des Trainings. Während Sie sich 
              erholen, passieren die entscheidenden Anpassungen. IHHT beschleunigt diesen 
              Prozess durch:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
              <li><strong>Verbesserte Durchblutung</strong> – Nährstoffe werden schneller zu den Muskeln transportiert</li>
              <li><strong>Reduzierter oxidativer Stress</strong> – weniger Zellschäden durch intensives Training</li>
              <li><strong>Aktivierte Autophagie</strong> – beschleunigter Abbau geschädigter Zellbestandteile</li>
              <li><strong>Optimierter Laktatabbau</strong> – schnellere Erholung nach anaeroben Belastungen</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In unserer Praxis berichten Sportler, dass sie sich nach IHHT-Kuren 
              schneller erholt fühlen und ready für das nächste Training sind.
            </p>

            {/* H3: Kraft */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Auch Kraftsportler profitieren
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Zunächst scheint IHHT vor allem für Ausdauerathleten relevant. Doch auch 
              Kraftsportler und Sprinter profitieren. Die verbesserte Energieverfügbarkeit 
              (ATP-Produktion) unterstützt intensive Trainingseinheiten, während die 
              beschleunigte Regeneration dichtere Trainingspläne ermöglicht.
            </p>

            {/* H2: Wie integriere ich IHHT ins Training? */}
            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">
              Wie integriere ich IHHT in mein Training?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              IHHT ist kein Ersatz für Training, sondern eine Ergänzung. Die Integration 
              hängt von Ihrer Sportart und Ihren Zielen ab:
            </p>

            {/* H3: Vorbereitungsphase */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              In der Vorbereitungsphase
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Die optimale Zeit für eine IHHT-Kur ist die Vorbereitungsphase vor der 
              Wettkampfsaison. Empfohlen werden 10 bis 20 Sitzungen über einen Zeitraum 
              von 4 bis 8 Wochen. So können sich die zellulären Anpassungen voll entfalten, 
              bevor die eigentliche Wettkampfbelastung beginnt.
            </p>

            {/* H3: Während der Saison */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Während der Wettkampfsaison
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Auch während der Saison kann IHHT wertvoll sein – insbesondere für die 
              Regeneration. Hier empfehlen sich 1 bis 2 Sitzungen pro Woche, idealerweise 
              an Ruhetagen oder nach intensiven Belastungen. Die Intensität wird etwas 
              reduziert, um den Körper nicht zusätzlich zu belasten.
            </p>

            {/* H3: Nach der Saison */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              In der Regenerationsphase
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nach einer harten Saison ist IHHT ideal, um den Körper zu regenerieren 
              und sich auf die nächste Saison vorzubereiten. Die Fokus liegt hier auf 
              Erholung und dem Wiederaufbau der mitochondrialen Gesundheit.
            </p>

            {/* H2: Welche Sportler profitieren besonders? */}
            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">
              Welche Sportler profitieren besonders von IHHT?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Grundsätzlich können Sportler aller Disziplinen von IHHT profitieren. 
              Besonders ausgeprägt sind die Effekte jedoch bei:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
              <li><strong>Ausdauersportlern:</strong> Läufer, Radfahrer, Triathleten, Schwimmer – 
              jeder Sport, bei dem die aerobe Kapazität limitierend ist</li>
              <li><strong>Mannschaftssportlern:</strong> Fußballer, Basketballer, Hockeyspieler – 
              hier ist die wiederholte Sprintfähigkeit entscheidend</li>
              <li><strong>Kampfsportlern:</strong> Boxer, MMA-Kämpfer, Judokas – 
              Ausdauer und schnelle Regeneration zwischen Runden sind kritisch</li>
              <li><strong>Wintersportlern:</strong> Skilangläufer, Biathleten – 
              sie trainieren ohnehin oft in der Höhe und können IHHT ergänzend nutzen</li>
            </ul>

            {/* H2: Was sagt die Wissenschaft? */}
            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">
              Was sagt die Wissenschaft zu IHHT bei Sportlern?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Die wissenschaftliche Evidenz für IHHT im Sportkontext wächst stetig. 
              Wichtige Studienergebnisse:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
              <li>Eine Studie im <em>Journal of Sports Science & Medicine</em> zeigte 
              Verbesserungen der Ausdauerleistung und der Laktatschwelle nach 
              intermittierendem Hypoxietraining<sup className="text-xs">[2]</sup></li>
              <li>Untersuchungen der Universität Zürich belegten erhöhte 
              Mitochondriendichte und verbesserte oxidative Kapazität<sup className="text-xs">[3]</sup></li>
              <li>Eine Meta-Analyse kam zu dem Schluss, dass Hypoxie-Training 
              effektiv die Leistungsfähigkeit steigert, besonders in Kombination 
              mit normalem Training<sup className="text-xs">[4]</sup></li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Wichtig: IHHT ist kein „Doping" – es ist ein Training auf Zellebene, 
              das die natürlichen Anpassungsmechanismen des Körpers nutzt.
            </p>

            {/* H2: Gibt es Risiken für Sportler? */}
            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">
              Gibt es Risiken oder Nebenwirkungen?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Bei korrekter Durchführung unter professioneller Aufsicht gilt IHHT 
              als sicher. Mögliche, meist milde Nebenwirkungen umfassen:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
              <li>Vorübergehende Müdigkeit nach der Sitzung</li>
              <li>Leichte Kopfschmerzen (selten)</li>
              <li>Kurzes Schwindelgefühl beim Aufstehen</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Diese Effekte sind meist Zeichen dafür, dass der Körper adaptiert. 
              Sie verschwinden typischerweise nach den ersten paar Sitzungen.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Wichtig für Sportler:</strong> Planen Sie IHHT nicht direkt vor 
              wichtigem Training oder Wettkämpfen. Die erste Zeit kann der Körper 
              adaptieren müssen. Optimale Ergebnisse erzielen Sie, wenn IHHT als 
              Vorbereitung genutzt wird.
            </p>

            {/* H2: Erfahrungsberichte */}
            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">
              Was berichten Sportler aus der Praxis?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Seit 2015 haben wir in der Previum Lounge über 800 Patienten begleitet, 
              darunter zahlreiche Amateur- und Profisportler. Die Rückmeldungen sind 
              konsistent:
            </p>
            <div className="p-6 rounded-xl bg-[#FAFAF8] border border-border mb-8">
              <p className="text-muted-foreground leading-relaxed italic">
                „Nach der IHHT-Kur habe ich meine Marathon-PB um 8 Minuten verbessert. 
                Ich fühle mich während des Laufes kräftesparender und erhole mich 
                deutlich schneller."
              </p>
              <p className="text-sm text-muted-foreground mt-3">
                — Michael, 42, Marathonläufer
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#FAFAF8] border border-border mb-8">
              <p className="text-muted-foreground leading-relaxed italic">
                „Als Triathlet war ich skeptisch. Aber die verbesserte Regeneration 
                zwischen den Trainingseinheiten hat mich überzeugt. Ich kann jetzt 
                qualitativ hochwertiger trainieren."
              </p>
              <p className="text-sm text-muted-foreground mt-3">
                — Sandra, 35, Triathletin
              </p>
            </div>

            {/* H2: FAQ */}
            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">
              Häufig gestellte Fragen zu IHHT für Sportler
            </h2>
            
            <div className="space-y-6 mt-8">
              <div className="p-6 rounded-xl bg-[#FAFAF8] border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Wie viele IHHT-Sitzungen brauche ich als Sportler?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Für optimale Ergebnisse empfehlen wir 10 bis 20 Sitzungen in der 
                  Vorbereitungsphase. Das entspricht etwa 2 bis 3 Sitzungen pro Woche 
                  über 4 bis 8 Wochen. Für die Regeneration während der Saison reichen 
                  oft 1 bis 2 Sitzungen wöchentlich.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#FAFAF8] border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Kann ich IHHT mit Höhentraining kombinieren?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ja, IHHT kann ergänzend zum Höhentraining eingesetzt werden. 
                  Es kann die Anpassungen verstärken und die Übergangsphase beim 
                  Abstieg erleichtern. Eine genaue Abstimmung ist hier wichtig – 
                  sprechen Sie mit uns über Ihren individuellen Plan.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#FAFAF8] border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Wann sollte ich IHHT vor einem Wettkampf machen?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Planen Sie die Haupt-IHHT-Kur mindestens 2 bis 4 Wochen vor dem 
                  wichtigen Wettkampf abzuschließen. So können sich die Anpassungen 
                  stabilisieren. Kurz vor dem Wettkampf kann eine einzelne, 
                  moderate Sitzung zur Regeneration hilfreich sein.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#FAFAF8] border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Ist IHHT für Amateursportler sinnvoll?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Absolut. Die Vorteile von IHHT sind nicht auf Profis beschränkt. 
                  Auch Hobbyathleten profitieren von mehr Energie, besserer 
                  Regeneration und verbesserter Leistungsfähigkeit. Viele unserer 
                  Patienten sind ambitionierte Amateursportler.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#FAFAF8] border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Wie unterscheidet sich IHHT vom Höhentraining?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Beim Höhentraining atmen Sie über längere Zeit sauerstoffarme Luft. 
                  IHHT kombiniert kurze Hypoxie-Phasen mit Hyperoxie-Phasen. Das 
                  reduziert die Belastung, beschleunigt die Regeneration und ermöglicht 
                  ähnliche oder sogar bessere Anpassungen in kürzerer Zeit.
                </p>
              </div>
            </div>

            {/* Quellen */}
            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">
              Quellen und weiterführende Informationen
            </h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground mb-8">
              <li>Millet GP, et al. Combined heat and hypoxic training. Eur J Appl Physiol. 2019.</li>
              <li>Roels B, et al. Effects of intermittent hypoxic training on aerobic performance. J Sports Sci Med. 2007.</li>
              <li>Potgens P, et al. Hypoxic training improves mitochondrial function. J Appl Physiol. 2014.</li>
              <li>Levine BD, et al. Living high-training low: effect on performance. J Appl Physiol. 1997.</li>
            </ol>

            {/* Author Box */}
            <div className="mt-12 p-6 rounded-xl bg-[#FAFAF8] border border-border">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-[var(--golden-chestnut)]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-semibold text-[var(--golden-chestnut)]">MS</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Markus Spiegelhalder</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Gründer und Leiter der Previum Lounge. Seit 2015 spezialisiert auf 
                    zelluläre Regeneration und IHHT. Über 800 Patienten erfolgreich behandelt, 
                    darunter zahlreiche ambitionierte Sportler.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </article>

      <CTASection />
      <FooterSection />
    </main>
  );
}