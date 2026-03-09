import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";

export const metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der Previum® München GmbH - Informationen zum Schutz Ihrer personenbezogenen Daten.',
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 section-gradient-hero">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block text-sm font-medium text-[var(--golden-chestnut)] mb-4">
              Rechtliches
            </span>
            <h1 className="text-4xl font-semibold text-foreground mb-8">Datenschutzerklärung</h1>
          </div>
        </div>
      </section>

      <section className="section-padding section-gradient-warm">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto prose prose-neutral prose-lg">
            
            {/* Einleitung */}
            <div className="p-6 rounded-xl bg-[var(--muted)] border border-border mb-8">
              <h2 className="text-xl font-semibold text-foreground mt-0 mb-4">Einleitung</h2>
              <p className="text-muted-foreground mb-0">
                Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. 
                In dieser Datenschutzerklärung informieren wir Sie über die Verarbeitung Ihrer personenbezogenen Daten 
                im Rahmen der Nutzung unserer Website und unserer Leistungen. 
                Wir verarbeiten Ihre Daten ausschließlich auf der Grundlage der Datenschutz-Grundverordnung (DSGVO) 
                und dem Bundesdatenschutzgesetz (BDSG).
              </p>
            </div>

            {/* Verantwortlicher */}
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Verantwortlicher</h2>
            <p className="text-muted-foreground mb-4">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="p-6 rounded-xl bg-[var(--muted)] border border-border mb-8">
              <p className="text-foreground font-medium mb-2">Previum München GmbH</p>
              <p className="text-muted-foreground mb-4">
                Schumannstraße 9<br />
                81679 München<br />
                Deutschland
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Telefon</p>
                  <p className="text-foreground font-medium">089 323 89 988</p>
                </div>
                <div className="p-4 rounded-lg bg-white border border-border">
                  <p className="text-sm text-muted-foreground mb-1">E-Mail</p>
                  <p className="text-foreground font-medium">energy@previum.de</p>
                </div>
              </div>
            </div>

            {/* Erfassung personenbezogener Daten */}
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Erfassung personenbezogener Daten</h2>
            
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2.1 Beim Besuch dieser Website</h3>
            <p className="text-muted-foreground mb-4">
              Beim Aufrufen dieser Website werden automatisch Informationen an den Server unserer Website gesendet. 
              Diese Informationen werden temporär in einem sog. Logfile gespeichert. Folgende Informationen werden dabei 
              ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem</li>
              <li>Name des Access-Providers</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              Die Verarbeitung dieser Daten erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten 
              Interesses an der Sicherheit und dem reibungslosen Betrieb unserer Website.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2.2 Bei Nutzung unseres Kontaktformulars</h3>
            <p className="text-muted-foreground mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
              von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="text-muted-foreground mb-6">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher 
              Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung Ihrer Anfrage).
            </p>

            {/* Cookies */}
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden 
              und die Ihr Browser speichert. Sie dienen dazu, unsere Website nutzerfreundlicher, effektiver und sicherer zu machen.
            </p>
            <p className="text-muted-foreground mb-6">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies 
              nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie 
              das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">3.1 Technisch notwendige Cookies</h3>
            <p className="text-muted-foreground mb-6">
              Diese Cookies sind für den Betrieb unserer Website zwingend erforderlich und können in unseren Systemen 
              nicht deaktiviert werden. Sie werden normalerweise nur als Reaktion auf von Ihnen getätigte Aktionen gesetzt, 
              die einer Dienstanfrage entsprechen (z.B. Einstellung Ihrer Datenschutzeinstellungen, Anmeldung).
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">3.2 Google Analytics</h3>
            <p className="text-muted-foreground mb-4">
              Diese Website nutzt den Webanalysedienst Google Analytics der Google Ireland Limited, Gordon House, 
              Barrow Street, Dublin 4, Irland („Google“). Google Analytics verwendet Cookies, um die Nutzung der Website 
              zu analysieren und Berichte über die Websiteaktivitäten zusammenzustellen.
            </p>
            <p className="text-muted-foreground mb-4">
              Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an 
              einen Server von Google in den USA übertragen und dort gespeichert. Wir haben auf dieser Website die 
              IP-Anonymisierung aktiviert, sodass Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen 
              Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum gekürzt wird.
            </p>
            <p className="text-muted-foreground mb-6">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO mit Ihrer Einwilligung. 
              Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">3.3 Calendly</h3>
            <p className="text-muted-foreground mb-4">
              Für die Online-Terminbuchung nutzen wir den Dienst Calendly der Calendly, LLC, 3343 Peachtree Road NE, 
              Suite 1100, Atlanta, GA 30326, USA. Wenn Sie einen Termin über Calendly buchen, werden Ihre eingegebenen 
              Daten (Name, E-Mail-Adresse, ggf. Telefonnummer und Terminangaben) an Calendly übermittelt und dort verarbeitet.
            </p>
            <p className="text-muted-foreground mb-6">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur Durchführung des 
              Terminbuchungsprozesses sowie Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses 
              an einer reibungslosen Terminvereinbarung.
            </p>

            {/* Ihre Rechte */}
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Ihre Rechte</h2>
            <p className="text-muted-foreground mb-4">
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
            </p>
            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-[var(--muted)] border border-border">
                <h4 className="font-medium text-foreground mb-2">Recht auf Auskunft (Art. 15 DSGVO)</h4>
                <p className="text-muted-foreground text-sm">
                  Sie haben das Recht, von uns eine Bestätigung darüber zu verlangen, ob Sie betreffende personenbezogene 
                  Daten verarbeitet werden, und wenn ja, welche Daten dies sind.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--muted)] border border-border">
                <h4 className="font-medium text-foreground mb-2">Recht auf Berichtigung (Art. 16 DSGVO)</h4>
                <p className="text-muted-foreground text-sm">
                  Sie haben das Recht, unverzüglich die Berichtigung Sie betreffender unrichtiger personenbezogener Daten 
                  zu verlangen und ggf. die Vervollständigung unvollständiger Daten zu fordern.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--muted)] border border-border">
                <h4 className="font-medium text-foreground mb-2">Recht auf Löschung (Art. 17 DSGVO)</h4>
                <p className="text-muted-foreground text-sm">
                  Sie haben das Recht, von uns die Löschung Ihrer personenbezogenen Daten zu verlangen, 
                  soweit nicht die gesetzlichen Gründe für die Speicherung überwiegen.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--muted)] border border-border">
                <h4 className="font-medium text-foreground mb-2">Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</h4>
                <p className="text-muted-foreground text-sm">
                  Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--muted)] border border-border">
                <h4 className="font-medium text-foreground mb-2">Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</h4>
                <p className="text-muted-foreground text-sm">
                  Sie haben das Recht, Ihre personenbezogenen Daten in einem strukturierten, gängigen und 
                  maschinenlesbaren Format zu erhalten und an einen anderen Verantwortlichen zu übermitteln.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--muted)] border border-border">
                <h4 className="font-medium text-foreground mb-2">Recht auf Widerspruch (Art. 21 DSGVO)</h4>
                <p className="text-muted-foreground text-sm">
                  Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, 
                  gegen die Verarbeitung Sie betreffender personenbezogener Daten Widerspruch einzulegen.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Zudem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung 
              Ihrer personenbezogenen Daten durch uns zu beschweren.
            </p>

            {/* Speicherdauer */}
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Speicherdauer</h2>
            <p className="text-muted-foreground mb-4">
              Wir speichern Ihre personenbezogenen Daten nur so lange, wie dies für die Erfüllung der Zwecke 
              erforderlich ist, für die sie erhoben wurden, oder sofern dies gesetzlich vorgesehen ist.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-6">
              <li>Server-Logfiles: Automatische Löschung nach 7 Tagen</li>
              <li>Kontaktformular-Daten: Löschung nach 6 Monaten, sofern keine Geschäftsbeziehung zustande kommt</li>
              <li>Vertragsdaten: 10 Jahre nach Abschluss gemäß steuer- und handelsrechtlichen Aufbewahrungspflichten</li>
              <li>Cookie-Daten: Je nach Cookie-Typ bis zu 2 Jahre (siehe Cookie-Einstellungen)</li>
            </ul>

            {/* Kontakt für Datenschutz */}
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Kontakt für Datenschutz</h2>
            <p className="text-muted-foreground mb-4">
              Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, 
              bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:
            </p>
            <div className="p-6 rounded-xl bg-[var(--muted)] border border-border mb-8">
              <p className="text-foreground font-medium mb-2">Previum München GmbH</p>
              <p className="text-muted-foreground mb-2">
                Datenschutzbeauftragter<br />
                Schumannstraße 9<br />
                81679 München
              </p>
              <p className="text-muted-foreground">
                E-Mail: <a href="mailto:energy@previum.de" className="text-[var(--golden-chestnut)] hover:underline">energy@previum.de</a>
              </p>
            </div>

            {/* Stand */}
            <div className="p-4 rounded-xl bg-[var(--muted)] border border-border mt-12">
              <p className="text-sm text-muted-foreground">
                Stand: März {new Date().getFullYear()}<br />
                © {new Date().getFullYear()} Previum München GmbH. Alle Rechte vorbehalten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}