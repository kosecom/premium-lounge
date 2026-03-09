"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { CTASection } from "@/components/sections/cta-section";
import Link from "next/link";

export default function IHHTAblaufErfahrungPage() {
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
              IHHT Ablauf: Was du bei einer Behandlung erlebst
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <time>09. März 2026</time>
              <span>•</span>
              <span>11 Min. Lesezeit</span>
              <span>•</span>
              <span>Von Markus Spiegelhalder</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Du überlegst, IHHT auszuprobieren, möchtest aber genau wissen, was dich erwartet? 
              In diesem Artikel nehme ich dich mit durch eine komplette IHHT-Sitzung – 
              von der Ankunft bis zum Abschluss. So kannst du entspannt und gut informiert 
              deinen Termin wahrnehmen.
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
              Vielleicht hast du schon von IHHT gehört und fragst dich: Wie fühlt sich das an? 
              Ist es unangenehm? Muss ich etwas tun? Die kurze Antwort: Du liegst entspannt 
              in einem Sessel, atmest durch eine leichte Maske und lässt das Zelltraining 
              für dich arbeiten. Hier ist der detaillierte Ablauf.
            </p>

            {/* H2: Was passiert vor der ersten IHHT-Sitzung? */}
            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">
              Was passiert vor der ersten IHHT-Sitzung?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Bevor es losgeht, führen wir ein ausführliches Vorgespräch durch. Das ist 
              wichtig, um IHHT sicher und effektiv für dich einzusetzen.
            </p>

            {/* H3: Anamnese */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Das Erstgespräch und die Anamnese
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In einem persönlichen Gespräch lernen wir dich und deine Ziele kennen:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
              <li><strong>Deine Gesundheitsgeschichte:</strong> Aktuelle Beschwerden, Vorerkrankungen, 
              Medikamente</li>
              <li><strong>Deine Ziele:</strong> Mehr Energie, bessere Regeneration, Unterstützung 
              bei einer bestimmten Erkrankung?</li>
              <li><strong>Deine Lebenssituation:</strong> Stresslevel, Schlaf, Ernährung, 
              körperliche Aktivität</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Wir prüfen auch, ob Kontraindikationen vorliegen – also Gründe, die gegen 
              IHHT sprechen. Dazu gehören akute Infekte, bestimmte Herz-Kreislauf-Erkrankungen 
              oder eine Schwangerschaft.
            </p>

            {/* H3: Vitalparameter */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Messung der Vitalparameter
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Zur Sicherheit erfassen wir Basisparameter: Blutdruck, Puls, Sauerstoffsättigung. 
              Bei Bedarf ergänzen wir weitere diagnostische Maßnahmen, um deinen 
              Ausgangszustand genau zu verstehen.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Dieses Erstgespräch dauert etwa 30 bis 45 Minuten. Es ist die Grundlage 
              für einen individuell angepassten Behandlungsplan.
            </p>

            {/* H2: Wie läuft eine IHHT-Sitzung ab? */}
            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">
              Wie läuft eine typische IHHT-Sitzung ab?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Eine IHHT-Sitzung dauert in der Regel 40 bis 50 Minuten. So sieht der 
              Ablauf Schritt für Schritt aus:
            </p>

            {/* H3: Ankunft */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Ankunft und Vorbereitung
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Du kommst in die Praxis, wirst begrüßt und in den Behandlungsraum geführt. 
              Dort wartet ein bequemer Liegesessel auf dich. Nach einem kurzen Check 
              deiner Vitalparameter (Puls, Sauerstoffsättigung) bekommst du die 
              Atemmaske – eine leichte, transparente Maske, die über Nase und Mund 
              sitzt.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ein Pulsoximeter am Finger überwacht kontinuierlich deine Sauerstoffsättigung 
              und Herzfrequenz. So können wir jederzeit sehen, wie dein Körper reagiert.
            </p>

            {/* H3: Hypoxie */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Die Hypoxie-Phase: Sauerstoffmangel als Stimulus
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Jetzt beginnt das eigentliche Training. Du atmest Luft mit reduziertem 
              Sauerstoffgehalt – typischerweise 9 bis 14% Sauerstoff statt der normalen 
              21%. Das entspricht einem Aufenthalt in 3.000 bis 4.500 Metern Höhe.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Was du spürst:</strong> In den ersten Minuten merkst du vielleicht 
              einen leichten Unterschied – etwas wie „dünnere" Luft. Die meisten Menschen 
              gewöhnen sich schnell daran. Dein Körper reagiert mit einer leichten 
              Erhöhung von Puls und Atemfrequenz, was völlig normal ist.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Eine Hypoxie-Phase dauert typischerweise 3 bis 7 Minuten. Während dieser 
              Zeit werden in deinen Zellen die gewünschten Signale ausgelöst – 
              insbesondere die Aktivierung von HIF-1α, dem „Hypoxie-induzierten Faktor", 
              der die Mitochondrienbildung anregt.
            </p>

            {/* H3: Hyperoxie */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Die Hyperoxie-Phase: Regeneration mit Sauerstoff
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nach der Hypoxie-Phase schaltet das Gerät auf Hyperoxie – Luft mit 
              erhöhtem Sauerstoffgehalt (30 bis 35%). Jetzt bekommst du reichlich 
              Sauerstoff, und dein Körper kann regenerieren.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Was du spürst:</strong> Viele Patienten beschreiben diese Phase 
              als angenehm, fast „erfrischend". Der Atem wird tiefer und ruhiger, 
              du entspannst dich. Es ist wie ein „Sauerstoff-Dusche" für deine Zellen.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Die Hyperoxie-Phase dauert ebenfalls einige Minuten und dient der 
              Regeneration, bevor der nächste Zyklus beginnt.
            </p>

            {/* H3: Wechsel */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Der Wechsel: Intervall-Training für deine Zellen
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Das Herzstück von IHHT ist der wiederholte Wechsel zwischen Hypoxie 
              und Hyperoxie. In einer typischen 40-50-minütigen Sitzung durchläufst 
              du 6 bis 10 solcher Zyklen. Die genaue Anzahl und Dauer wird individuell 
              an deine Toleranz und deine Ziele angepasst.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Während der gesamten Zeit liegst du entspannt im Sessel. Du kannst:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
              <li>Lesen oder ein Magazin durchblättern</li>
              <li>Musik über Kopfhörer hören</li>
              <li>Meditieren oder einfach die Ruhe genießen</li>
              <li>Sogar einschlafen – manche Patienten tun das</li>
            </ul>

            {/* H3: Nach der Sitzung */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Nach der Sitzung: Wie fühlt man sich?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nach etwa 40 bis 50 Minuten endet die Sitzung. Die Maske wird abgenommen, 
              und wir checken noch einmal deine Vitalparameter.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Wie du dich fühlst:</strong> Die meisten Patienten berichten von 
              unterschiedlichen Empfindungen nach der Sitzung:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
              <li><strong>Sofortige Effekte:</strong> Manche fühlen sich direkt erfrischt, 
              klarer im Kopf und energiegeladen – wie nach einem Power-Nap.</li>
              <li><strong>Entspannung:</strong> Andere empfinden eine tiefe Entspannung 
              und Müdigkeit, die sich gut anfühlt – wie nach einem Saunagang.</li>
              <li><strong>Keine spürbaren Effekte:</strong> Bei manchen gibt es keine 
              sofortige Veränderung – das ist normal. Die Wirkung entfaltet sich oft 
              erst über die Serie der Behandlungen.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Es gibt in der Regel keine „Ausfallzeit". Du kannst direkt danach wieder 
              arbeiten, Auto fahren oder deinen normalen Aktivitäten nachgehen.
            </p>

            {/* H2: Wie viele Sitzungen sind nötig? */}
            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">
              Wie viele IHHT-Sitzungen sind nötig?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Eine einzelne IHHT-Sitzung kann angenehm sein, aber die eigentlichen 
              Vorteile zeigen sich über eine Serie von Behandlungen. Typische Empfehlungen:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
              <li><strong>Bei Erschöpfungszuständen:</strong> 15 bis 20 Sitzungen, 
              2 bis 3 Mal pro Woche</li>
              <li><strong>Zur Leistungsoptimierung:</strong> 10 bis 15 Sitzungen 
              als Vorbereitung</li>
              <li><strong>Für Regeneration:</strong> 10 Sitzungen, auch verteilt über 
              mehrere Wochen</li>
              <li><strong>Als „Tune-up":</strong> 5 bis 10 Sitzungen jährlich zur 
              Gesunderhaltung</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In unserer Praxis begleiten wir dich durch den gesamten Prozess und 
              passen den Plan bei Bedarf an. Seit 2015 haben wir über 800 Patienten 
              betreut und wissen, dass Geduld und Konsistenz die Schlüssel zum Erfolg sind.
            </p>

            {/* H2: Was sollte man vor/nach IHHT beachten? */}
            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">
              Was sollte man vor und nach einer IHHT-Sitzung beachten?
            </h2>
            
            {/* H3: Vorher */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Vor der Sitzung
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
              <li><strong>Nicht mit vollem Magen:</strong> Iss etwa 2 Stunden vor der 
              Sitzung nichts Schweres. Ein leichter Snack ist okay.</li>
              <li><strong>Hydriert sein:</strong> Trinke ausreichend Wasser am Tag der 
              Behandlung.</li>
              <li><strong>Kein Alkohol:</strong> Vermeide Alkohol am Tag der Behandlung.</li>
              <li><strong>Bequeme Kleidung:</strong> Zieh dich entspannt an – du wirst 
              50 Minuten im Sessel verbringen.</li>
            </ul>

            {/* H3: Nachher */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Nach der Sitzung
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
              <li><strong>Weiter trinken:</strong> Unterstütze deinen Körper mit 
              ausreichend Flüssigkeit.</li>
              <li><strong>Intensives Training vermeiden:</strong> Am Tag der Behandlung 
              solltest du kein Hochintensivtraining machen. Leichte Bewegung ist okay.</li>
              <li><strong>Auf den Körper hören:</strong> Wenn du müde bist, ruh dich aus. 
              Wenn du Energie hast, nutze sie.</li>
            </ul>

            {/* H2: Was passiert bei Folge-Sitzungen? */}
            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">
              Was passiert bei den Folge-Sitzungen?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ab der zweiten Sitzung kennen wir deinen Ausgangszustand und können 
              die Parameter optimieren. Bei jeder Sitzung dokumentieren wir:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
              <li>Deine Vitalparameter und wie sie sich entwickeln</li>
              <li>Die individuelle Toleranz der Hypoxie-Intensität</li>
              <li>Dein subjektives Empfinden und eventuelle Veränderungen</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Viele Patienten berichten, dass sie sich nach einigen Sitzungen an 
              die Hypoxie gewöhnen und die Phasen als angenehmer empfinden. Gleichzeitig 
              kann die Intensität schrittweise erhöht werden, um die Effekte zu steigern.
            </p>

            {/* H2: Wann merkt man Ergebnisse? */}
            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">
              Wann merkt man erste Ergebnisse?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Die Antwort variiert von Person zu Person. Typische Erfahrungen:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
              <li><strong>Nach 3 bis 5 Sitzungen:</strong> Manche Patienten berichten von 
              ersten spürbaren Effekten – mehr Energie, besserer Schlaf, klareres Denken.</li>
              <li><strong>Nach 10 Sitzungen:</strong> Die meisten Patienten bemerken 
              Verbesserungen in ihrem Energielevel und Wohlbefinden.</li>
              <li><strong>Nach 15 bis 20 Sitzungen:</strong> Die vollen Effekte stellen 
              sich ein und können bei gesunder Lebensweise langfristig anhalten.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Wichtig: IHHT ist kein Wundermittel, sondern ein Training. Wie beim 
              Sport braucht der Zeit, um zu adaptieren. Geduld zahlt sich aus.
            </p>

            {/* H2: FAQ */}
            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">
              Häufig gestellte Fragen zum IHHT-Ablauf
            </h2>
            
            <div className="space-y-6 mt-8">
              <div className="p-6 rounded-xl bg-[#FAFAF8] border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Ist IHHT unangenehm oder schmerzhaft?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Nein, IHHT ist nicht schmerzhaft. Du liegst entspannt in einem Sessel 
                  und atmest durch eine Maske. Die Hypoxie-Phase kann sich am Anfang 
                  ungewohnt anfühlen – wie dünnere Luft –, aber die meisten Menschen 
                  gewöhnen sich schnell daran. Es ist eher wie ein entspannter Aufenthalt 
                  in einer Berghütte als wie ein medizinischer Eingriff.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#FAFAF8] border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Kann ich während der IHHT-Sitzung einschlafen?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ja, das ist absolut in Ordnung. Viele Patienten nutzen die 50 Minuten 
                  für ein kurzes Schläfchen. Die Maske bleibt dabei sicher sitzen, 
                  und die Überwachung funktioniert weiter. Manche sagen sogar, dass 
                  sie die entspannende Wirkung von IHHT besonders gut wahrnehmen, 
                  wenn sie in einen leichten Dämmerzustand gleiten.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#FAFAF8] border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Wie lange dauert eine IHHT-Sitzung inklusive Vorbereitung?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Plane etwa 60 bis 75 Minuten insgesamt ein. Das Erstgespräch dauert 
                  30 bis 45 Minuten. Für Folge-Sitzungen brauchst du etwa 60 Minuten: 
                  kurze Vitalparameter-Check, 40-50 Minuten Behandlung, kurzer Abschluss. 
                  Die meisten Patienten kommen 2 bis 3 Mal pro Woche.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#FAFAF8] border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Darf ich direkt nach der IHHT Auto fahren?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ja, in der Regel kannst du direkt nach der Sitzung Auto fahren. 
                  Es gibt keine Einschränkungen wie bei Sedierungen oder bestimmten 
                  Medikamenten. Falls du dich ungewöhnlich müde fühlst – was selten 
                  vorkommt – nimm dir kurz Zeit, bevor du losfährst.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#FAFAF8] border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Was passiert, wenn ich eine Sitzung versäume?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Nichts Schlimmes. IHHT ist flexibel. Eine versäumte Sitzung reduziert 
                  nicht den Gesamteffekt, solange du die Serie fortsetzt. Wir finden 
                  einfach einen neuen Termin. Kontinuität hilft, aber ein gelegentliches 
                  Verschieben ist kein Problem.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#FAFAF8] border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Kann ich während der Behandlung Musik hören oder lesen?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Absolut! Du kannst Musik über Kopfhörer hören, Hörbücher oder 
                  Podcasts konsumieren, lesen oder einfach die Ruhe genießen. 
                  Viele Patienten nutzen die Zeit bewusst als Auszeit vom Alltag. 
                  Die einzige Einschränkung: Keine kopflastigen Tätigkeiten während 
                  der ersten Sitzungen, bis du dich an das Gefühl gewöhnt hast.
                </p>
              </div>
            </div>

            {/* Quellen */}
            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">
              Quellen und weiterführende Informationen
            </h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground mb-8">
              <li>Burtscher J, et al. Effects of intermittent hypoxia on mitochondrial function. Int J Mol Sci. 2020.</li>
              <li>Wegewitz U, et al. Intermittent hypoxia-hyperoxia training in chronic fatigue. J Transl Med. 2019.</li>
              <li>Semenza GL. Hypoxia-inducible factor 1 (HIF-1) pathway. Cold Spring Harb Perspect Med. 2014.</li>
              <li>Millet GP, et al. Combined heat and hypoxic training. Eur J Appl Physiol. 2019.</li>
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
                    zelluläre Regeneration und IHHT. Über 800 Patienten erfolgreich durch 
                    IHHT-Behandlungen begleitet.
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