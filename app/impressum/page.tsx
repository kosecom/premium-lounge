import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";

export const metadata = {
  title: 'Impressum',
  description: 'Impressum der Previum® München GmbH - IHHT Zelltraining München',
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 section-gradient-hero">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block text-sm font-medium text-[var(--golden-chestnut)] mb-4">
              Rechtliches
            </span>
            <h1 className="text-4xl font-semibold text-foreground mb-8">Impressum</h1>
          </div>
        </div>
      </section>

      <section className="section-padding section-gradient-warm">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto prose prose-neutral prose-lg">
            
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="p-6 rounded-xl bg-[var(--muted)] border border-border mb-8">
              <p className="text-foreground font-medium mb-2">Previum München GmbH</p>
              <p className="text-muted-foreground">
                Schumannstraße 9<br />
                81679 München<br />
                Deutschland
              </p>
            </div>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Vertreten durch</h2>
            <p className="text-muted-foreground mb-8">
              Markus Spiegelhalder, Geschäftsführer
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Kontakt</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-[var(--muted)] border border-border">
                <p className="text-sm text-muted-foreground mb-1">Telefon</p>
                <p className="text-foreground font-medium">089 323 89 988</p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--muted)] border border-border">
                <p className="text-sm text-muted-foreground mb-1">E-Mail</p>
                <p className="text-foreground font-medium">energy@previum.de</p>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Registereintrag</h2>
            <p className="text-muted-foreground mb-8">
              Eintragung im Handelsregister<br />
              Registergericht: Amtsgericht München<br />
              Registernummer: HRB 283089
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Umsatzsteuer-ID</h2>
            <p className="text-muted-foreground mb-8">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
              DE 369 278 341
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p className="text-muted-foreground mb-8">
              Berufsbezeichnung: IHHT-Trainer / Zelltraining<br />
              Zuständige Kammer: IHK München und Oberbayern
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="text-muted-foreground mb-8">
              Markus Spiegelhalder<br />
              Schumannstraße 9<br />
              81679 München
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">EU-Streitschlichtung</h2>
            <p className="text-muted-foreground mb-8">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr" className="text-[var(--golden-chestnut)] hover:underline" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Haftung für Inhalte</h2>
            <p className="text-muted-foreground mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
              Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen 
              oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="text-muted-foreground mb-8">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. 
              Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Urheberrecht</h2>
            <p className="text-muted-foreground mb-8">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
              Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>

            <div className="p-4 rounded-xl bg-[var(--muted)] border border-border mt-12">
              <p className="text-sm text-muted-foreground">
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