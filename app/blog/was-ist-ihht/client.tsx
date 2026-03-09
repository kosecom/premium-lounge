"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Share2, Bookmark, ArrowRight } from "lucide-react";

const relatedPosts = [
  { slug: "nobelpreis-2019-sauerstoff", title: "Nobelpreis 2019: Warum die Sauerstoff-Forschung dein Leben verändern kann", category: "Wissenschaft" },
  { slug: "mitochondrien-energiekraftwerke", title: "Mitochondrien: Die vergessenen Energiekraftwerke deiner Zellen", category: "Wissen" },
  { slug: "ihht-fuer-sportler", title: "IHHT für Sportler: Mehr Leistung durch Zelltraining", category: "Sport" },
];

export default function BlogPostClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-8 section-gradient-hero">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Zurück zum Blog
              </Link>
            </motion.div>

            {/* Category */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-4"
            >
              <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-[#4B7FD1]">
                Wissenschaft
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-foreground mb-6"
            >
              Was ist IHHT? Das Zelltraining wissenschaftlich erklärt
            </motion.h1>

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="font-medium text-foreground">Markus Spiegelhalder</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 Min Lesezeit</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>1. März 2026</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12 bg-white">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[var(--muted)]">
              <Image
                src="/images/praxis/ihht-geraet.png"
                alt="IHHT Gerät"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 bg-white">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="prose prose-lg prose-neutral max-w-none"
            >
              {/* Introduction */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Vielleicht hast du schon von IHHT gehört – oder der Begriff ist dir neu. In diesem Artikel erkläre ich dir, 
                was Intervall-Hypoxie-Hyperoxie-Training eigentlich ist, wie es funktioniert und warum es auf einer 
                wissenschaftlichen Entdeckung basiert, die 2019 mit dem Nobelpreis ausgezeichnet wurde.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
                Was bedeutet IHHT überhaupt?
              </h2>
              <p>
                IHHT steht für <strong>Intervall-Hypoxie-Hyperoxie-Training</strong>. Das klingt kompliziert, 
                ist aber einfacher als du denkst:
              </p>
              <ul>
                <li><strong>Hypoxie</strong> bedeutet Sauerstoffmangel</li>
                <li><strong>Hyperoxie</strong> bedeutet Sauerstoffüberschuss</li>
                <li><strong>Intervall</strong> heißt, wir wechseln zwischen beides</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
                Wie funktioniert IHHT genau?
              </h2>
              <p>
                Du lehnst dich in einen bequemen Sessel und trägst eine leichte Atemmaske. Das Gerät 
                steuert präzise die Sauerstoffkonzentration, die du einatmest. In Intervallen von wenigen 
                Minuten wechselt es zwischen:
              </p>

              {/* Process Cards */}
              <div className="not-prose grid gap-4 my-8">
                <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--bright-marine)]/10 to-transparent border border-[var(--bright-marine)]/20">
                  <h3 className="font-semibold text-foreground mb-2">1. Hypoxie-Phase (Sauerstoffarm)</h3>
                  <p className="text-sm text-muted-foreground">
                    Simulierte Höhenluft wie in 3.000–4.000 Metern. Dein Körper reagiert mit Anpassungsprozessen.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--golden-chestnut)]/10 to-transparent border border-[var(--golden-chestnut)]/20">
                  <h3 className="font-semibold text-foreground mb-2">2. Hyperoxie-Phase (Sauerstoffreich)</h3>
                  <p className="text-sm text-muted-foreground">
                    Erhöhte Sauerstoffzufuhr zur Regeneration und Unterstützung der Zellfunktion.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
                Was passiert in deinen Zellen?
              </h2>
              <p>
                Der Wechsel zwischen Sauerstoffmangel und -überschuss aktiviert einen speziellen Signalweg 
                in deinen Zellen. Dieser wurde 2019 von den Nobelpreisträgern William Kaelin, Peter Ratcliffe 
                und Gregg Semenza entdeckt.
              </p>

              {/* Quote Box */}
              <div className="not-prose my-8 p-6 rounded-xl bg-[var(--muted)] border-l-4 border-[var(--golden-chestnut)]">
                <p className="text-foreground italic leading-relaxed">
                  „Die Entdeckung, wie Zellen Sauerstoff wahrnehmen und darauf reagieren, hat unser Verständnis 
                  grundlegender biologischer Prozesse revolutioniert."
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  — Nobelpreis-Komitee, 2019
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
                Für wen ist IHHT geeignet?
              </h2>
              <p>
                IHHT wird häufig eingesetzt bei:
              </p>
              <ul>
                <li><strong>Long COVID & Post-COVID:</strong> Zur Unterstützung der zellulären Regeneration</li>
                <li><strong>Burnout & Erschöpfung:</strong> Um die Energieproduktion auf Zellebene zu optimieren</li>
                <li><strong>Sport & Leistung:</strong> Zur Verbesserung der Ausdauer und Regeneration</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
                Wie läuft eine IHHT-Behandlung bei uns ab?
              </h2>
              <p>
                In unserer Praxis in München begleiten wir dich durch den gesamten Prozess:
              </p>
              <ol>
                <li><strong>Kostenloses Erstgespräch:</strong> Wir klären, ob IHHT für dich geeignet ist</li>
                <li><strong>Individueller Plan:</strong> Basierend auf deinem Hypoxie-Test</li>
                <li><strong>Training:</strong> 10–15 Einheiten à 40–50 Minuten</li>
                <li><strong>Nachbesprechung:</strong> Wir besprechen deine Ergebnisse</li>
              </ol>

              {/* Author Box */}
              <div className="not-prose mt-12 p-6 rounded-2xl bg-gradient-to-br from-[var(--muted)] to-white border border-border">
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-[var(--muted)] flex-shrink-0">
                    <Image
                      src="/images/markus/markus-portrait.jpg"
                      alt="Markus Spiegelhalder"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Markus Spiegelhalder</p>
                    <p className="text-sm text-muted-foreground mb-2">Gründer & IHHT-Experte, Previum® München</p>
                    <p className="text-sm text-muted-foreground">
                      Seit 2015 spezialisiert auf Zelltraining. Über 800 Patienten betreut.
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Share Actions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-between pt-8 mt-12 border-t border-border"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Artikel teilen:</span>
                <button className="p-2 rounded-lg hover:bg-[var(--muted)] transition-colors">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
              <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Bookmark className="h-4 w-4" />
                Speichern
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-[var(--muted)]">
        <div className="container-premium">
          <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Das könnte dich auch interessieren
          </h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto auto-rows-fr">
            {relatedPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full p-6 rounded-xl bg-white border border-border hover:shadow-lg transition-shadow"
                >
                  <span className="text-xs font-medium text-[var(--golden-chestnut)]">{post.category}</span>
                  <h3 className="font-semibold text-foreground mt-2 leading-snug group-hover:text-[var(--golden-chestnut)] transition-colors flex-grow">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
                    <span>Mehr lesen</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}