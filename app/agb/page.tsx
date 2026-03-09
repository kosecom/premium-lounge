import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";

export const metadata = {
  title: 'AGB | Previum® München',
  description: 'Allgemeine Geschäftsbedingungen der Previum® München GmbH - IHHT Zelltraining & Gesundheitsberatung',
};

export default function AGBPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 section-gradient-hero">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block text-sm font-medium text-[var(--golden-chestnut)] mb-4">
              Rechtliches
            </span>
            <h1 className="text-4xl font-semibold text-foreground mb-4">
              Allgemeine Geschäftsbedingungen
            </h1>
            <p className="text-lg text-muted-foreground">
              Previum® München GmbH – IHHT Zelltraining & Gesundheitsberatung
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding section-gradient-warm">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto prose prose-neutral prose-lg">
            
            {/* §1 Geltungsbereich */}
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              § 1 Geltungsbereich
            </h2>
            <div className="p-6 rounded-xl bg-[var(--muted)] border border-border mb-8">
              <p className="text-foreground mb-4">
                (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der Previum München GmbH, 
                Schumannstraße 9, 81679 München (nachfolgend „Previum®“) und ihren Kunden (nachfolgend „Kunde“) über 
                Beratungsleistungen und IHHT-Behandlungen.
              </p>
              <p className="text-foreground mb-4">
                (2) Die Leistungen von Previum® umfassen insbesondere:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Gesundheitsberatung und individuelles Zelltraining-Coaching</li>
                <li>IHHT-Behandlungen (Intervall-Hypoxie-Hyperoxie-Training)</li>
                <li>Begleitende Leistungen im Rahmen des Zelltrainings</li>
              </ul>
              <p className="text-foreground">
                (3) Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, Previum® stimmt ihrer 
                Geltung ausdrücklich schriftlich zu.
              </p>
            </div>

            {/* §2 Vertragsschluss */}
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              § 2 Vertragsschluss
            </h2>
            
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2.1 Beratung</h3>
            <p className="text-muted-foreground mb-4">
              Ein Beratungsvertrag kommt zustande, wenn der Kunde ein Beratungsangebot von Previum® schriftlich, 
              mündlich oder elektronisch annimmt. Die Buchung über die Website, per E-Mail oder telefonisch 
              stellt ein verbindliches Angebot des Kunden dar. Previum® bestätigt die Buchung in Textform.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2.2 IHHT-Behandlung</h3>
            <p className="text-muted-foreground mb-4">
              Vor jeder IHHT-Behandlung ist eine ärztliche Abklärung erforderlich. Der Vertrag über die 
              IHHT-Behandlung kommt erst nach erfolgreicher Gesundheitsprüfung und Freigabe durch Previum® zustande. 
              Previum® behält sich vor, Behandlungen bei medizinischen Kontraindikationen abzulehnen.
            </p>

            <div className="p-4 rounded-xl bg-[var(--muted)] border border-l-4 border-l-[var(--golden-chestnut)] mb-8">
              <p className="text-sm text-foreground">
                <strong>Hinweis:</strong> Die IHHT-Behandlung ist ein Wellness- und Präventionsangebot und ersetzt 
                keine ärztliche Behandlung oder Diagnose. Bei akuten gesundheitlichen Beschwerden konsultieren Sie 
                bitte Ihren behandelnden Arzt.
              </p>
            </div>

            {/* §3 Leistungen */}
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              § 3 Leistungen
            </h2>
            
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">3.1 IHHT Zelltraining</h3>
            <p className="text-muted-foreground mb-4">
              Das Intervall-Hypoxie-Hyperoxie-Training (IHHT) ist ein trainingswissenschaftliches Verfahren, 
              bei dem durch Wechsel von sauerstoffreduzierter und sauerstoffangereicherter Luft die 
              zelluläre Energieproduktion und Regeneration gefördert wird.
            </p>
            <p className="text-muted-foreground mb-4">
              Der genaue Leistungsumfang ergibt sich aus der jeweiligen Buchung und umfasst typischerweise:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Einweisung und Einrichtung am IHHT-Gerät</li>
              <li>Durchführung der Sitzung unter Aufsicht</li>
              <li>Überwachung der Vitalwerte während der Behandlung</li>
              <li>Nachbesprechung und Empfehlungen</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">3.2 Begleitende Beratung</h3>
            <p className="text-muted-foreground mb-8">
              Im Rahmen der Beratung vermittelt Previum® Wissen über gesundheitsfördernde Lebensstilfaktoren. 
              Diese Beratung basiert auf allgemein anerkannten Erkenntnissen der Ernährungswissenschaft, 
              Sportwissenschaft und Präventionsforschung. Sie ersetzt keine medizinische Diagnostik oder Therapie.
            </p>

            {/* §4 Vergütung und Zahlung */}
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              § 4 Vergütung und Zahlung
            </h2>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">4.1 Selbstzahler-Regelung</h3>
            <div className="p-6 rounded-xl bg-[var(--muted)] border border-border mb-6">
              <p className="text-foreground mb-4">
                Die Leistungen von Previum® sind <strong>Selbstzahlerleistungen</strong>. Eine Abrechnung 
                über die Gesetzliche Krankenversicherung (GKV) oder Private Krankenversicherung (PKV) 
                ist grundsätzlich nicht vorgesehen.
              </p>
              <p className="text-foreground">
                Der Kunde wird gebeten, vorab bei seiner Krankenkasse zu prüfen, ob eine Kostenübernahme 
                oder Bezuschussung im Einzelfall möglich ist. Previum® stellt auf Wunsch entsprechende 
                Belege zur Verfügung.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">4.2 Preise und Zahlungsmodalitäten</h3>
            <p className="text-muted-foreground mb-4">
              Die Preise für die einzelnen Leistungen sind auf der Website, in den Räumlichkeiten oder 
              auf Anfrage ersichtlich. Alle Preise verstehen sich in Euro und enthalten die gesetzliche 
              Umsatzsteuer.
            </p>
            <p className="text-muted-foreground mb-4">
              Zahlungen erfolgen per Überweisung, Barzahlung oder Kartenzahlung vor Ort. Bei 
              Paketbuchungen ist die vollständige Zahlung vor Behandlungsbeginn fällig, sofern 
                nichts anderes vereinbart wurde.
            </p>
            <p className="text-muted-foreground mb-8">
              Gutscheine sind ab Ausstellungsdatum 3 Jahre gültig und nicht übertragbar. Eine 
              Barauszahlung ist ausgeschlossen.
            </p>

            {/* §5 Rücktritt und Stornierung */}
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              § 5 Rücktritt und Stornierung
            </h2>
            
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">5.1 Stornierung durch den Kunden</h3>
            <p className="text-muted-foreground mb-4">
              Terminabsagen oder -verschiebungen sind bis zu 24 Stunden vor dem vereinbarten Termin 
              kostenlos möglich. Bei Absagen weniger als 24 Stunden vor dem Termin werden 50 % der 
              Behandlung berechnet. Bei Nichterscheinen ohne Absage wird der volle Betrag fällig.
            </p>
            
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">5.2 Stornierung durch Previum®</h3>
            <p className="text-muted-foreground mb-4">
              Previum® behält sich vor, Termine aus wichtigem Grund (z. B. Krankheit, technischer 
              Defekt) abzusagen. Bereits gezahlte Beträge werden in diesem Fall vollständig 
              erstattet oder auf einen Ersatztermin angerechnet.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">5.3 Widerrufsrecht bei Fernabsatzverträgen</h3>
            <p className="text-muted-foreground mb-8">
              Bei Buchungen über Fernkommunikationsmittel (Website, Telefon, E-Mail) besteht 
              grundsätzlich ein 14-tägiges Widerrufsrecht. Dieses erlischt jedoch vorzeitig, 
              wenn die Leistung vollständig erbracht wurde und der Kunde dies ausdrücklich 
              gewünscht hat.
            </p>

            {/* §6 Haftung */}
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              § 6 Haftung
            </h2>
            
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">6.1 Medizinische Leistungen</h3>
            <div className="p-4 rounded-xl bg-[var(--muted)] border border-l-4 border-l-[var(--golden-chestnut)] mb-6">
              <p className="text-foreground mb-3">
                <strong>Wichtiger Hinweis:</strong> Previum® bietet keine medizinischen Heilbehandlungen, 
                Diagnosen oder ärztlichen Leistungen an. Die IHHT-Behandlungen sind Wellness- und 
                Präventionsangebote.
              </p>
              <p className="text-foreground">
                Vor der Inanspruchnahme von Leistungen ist eine ärztliche Abklärung erforderlich. 
                Der Kunde versichert, dass keine medizinischen Gründe vorliegen, die gegen eine 
                IHHT-Behandlung sprechen.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">6.2 Haftungsausschluss für medizinische Beratung</h3>
            <p className="text-muted-foreground mb-4">
              Previum® und seine Mitarbeiter erteilen keine medizinischen Ratschläge. Alle 
              Auskünfte zu Gesundheitsthemen basieren auf allgemeinen Informationen und 
              ersetzen keinesfalls eine ärztliche Konsultation. Für gesundheitliche Entscheidungen 
              trägt der Kunde die volle Verantwortung.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">6.3 Haftungsbeschränkung</h3>
            <p className="text-muted-foreground mb-4">
              Previum® haftet bei Vorsatz und grober Fahrlässigkeit nach den gesetzlichen Vorschriften. 
              Bei einfacher Fahrlässigkeit haftet Previum® nur bei Verletzung einer wesentlichen 
              Vertragspflicht. Die Haftung ist auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
            </p>
            <p className="text-muted-foreground mb-4">
              Die Haftung für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit 
              bleibt von den vorstehenden Beschränkungen unberührt.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">6.4 Mitwirkungspflicht des Kunden</h3>
            <p className="text-muted-foreground mb-8">
              Der Kunde ist verpflichtet, vor Behandlungsbeginn alle relevanten gesundheitlichen 
              Umstände offen zu legen, insbesondere bestehende Erkrankungen, Medikamenteneinnahme 
              und bekannte Unverträglichkeiten. Verstöße gegen diese Mitwirkungspflicht können 
              zum Ausschluss oder zur Kürzung von Schadensersatzansprüchen führen.
            </p>

            {/* §7 Datenschutz */}
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              § 7 Datenschutz
            </h2>
            <p className="text-muted-foreground mb-4">
              Die Erhebung und Verarbeitung personenbezogener Daten erfolgt gemäß der 
              Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG). 
              Detaillierte Informationen finden Sie in unserer 
              <a href="/datenschutz" className="text-[var(--golden-chestnut)] hover:underline ml-1">
                Datenschutzerklärung
              </a>.
            </p>
            <p className="text-muted-foreground mb-8">
              Im Rahmen der Gesundheitsberatung und IHHT-Behandlung werden Gesundheitsdaten 
              erhoben. Diese Daten werden vertraulich behandelt und ausschließlich zur 
              Durchführung der Leistungen verarbeitet.
            </p>

            {/* §8 Schlussbestimmungen */}
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              § 8 Schlussbestimmungen
            </h2>
            
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">8.1 Anwendbares Recht</h3>
            <p className="text-muted-foreground mb-4">
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des 
              UN-Kaufrechts (CISG).
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">8.2 Gerichtsstand</h3>
            <p className="text-muted-foreground mb-4">
              Sofern der Kunde Kaufmann ist oder keinen allgemeinen Gerichtsstand in 
              Deutschland hat, ist der Gerichtsstand München.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">8.3 Salvatorische Klausel</h3>
            <p className="text-muted-foreground mb-4">
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, 
              bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Anstelle der 
              unwirksamen Bestimmung gilt die wirksame Regelung, die dem wirtschaftlichen 
              Zweck der unwirksamen Bestimmung am nächsten kommt.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">8.4 Änderungsvorbehalt</h3>
            <p className="text-muted-foreground mb-8">
              Previum® behält sich vor, diese AGB zu ändern. Änderungen werden auf der 
              Website veröffentlicht. Bei laufenden Verträgen gelten die zum Zeitpunkt 
              des Vertragsschlusses maßgeblichen AGB.
            </p>

            {/* Footer */}
            <div className="p-6 rounded-xl bg-[var(--muted)] border border-border mt-12">
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Previum München GmbH</strong><br />
                Schumannstraße 9, 81679 München
              </p>
              <p className="text-sm text-muted-foreground">
                Stand: März 2026
              </p>
            </div>

          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}