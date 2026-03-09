"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, Calendar, User, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { CTASection } from "@/components/sections/cta-section";

const allPosts = [
  {
    slug: "was-ist-ihht",
    title: "Was ist IHHT? Das Zelltraining wissenschaftlich erklärt",
    excerpt: "Intervall-Hypoxie-Hyperoxie-Training nutzt wechselnde Sauerstoffkonzentrationen, um deine Mitochondrien zu trainieren. Erfahre, wie diese Methode auf Nobelpreis-gekrönter Forschung basiert.",
    category: "Wissenschaft",
    readTime: "8 Min",
    date: "1. März 2026",
    featured: true,
    image: "/images/praxis/ihht-geraet.png"
  },
  {
    slug: "long-covid-natürlich-behandeln",
    title: "Long COVID natürlich behandeln: Was wirklich hilft",
    excerpt: "Chronische Erschöpfung nach COVID-19 ist real und messbar. Erfahre, warum herkömmliche Methoden oft nicht helfen und wie IHHT auf Zellebene wirkt.",
    category: "Long COVID",
    readTime: "10 Min",
    date: "3. März 2026",
    featured: false,
    image: "/images/praxis/ihht-behandlung.jpg"
  },
  {
    slug: "mitochondrien-energiekraftwerke",
    title: "Mitochondrien: Die vergessenen Energiekraftwerke deiner Zellen",
    excerpt: "Dein Körper hat über 70 Billionen Zellen – und in jeder sitzen hunderte Mitochondrien. Wenn diese Kraftwerke streiken, fühlen wir uns erschöpft.",
    category: "Wissen",
    readTime: "9 Min",
    date: "5. März 2026",
    featured: false,
    image: "/images/praxis/beratung.png"
  },
  {
    slug: "nobelpreis-2019-sauerstoff",
    title: "Nobelpreis 2019: Warum die Sauerstoff-Forschung dein Leben verändern kann",
    excerpt: "Drei Wissenschaftler erhielten den Nobelpreis für die Entdeckung, wie Zellen auf Sauerstoff reagieren. Diese Erkenntnis ist die Basis von IHHT.",
    category: "Wissenschaft",
    readTime: "7 Min",
    date: "7. März 2026",
    featured: false,
    image: "/images/markus/markus-hero.png"
  },
  {
    slug: "ihht-fuer-sportler",
    title: "IHHT für Sportler: Mehr Leistung durch Zelltraining",
    excerpt: "Ambitionierte Sportler nutzen IHHT zur Leistungssteigerung und schnelleren Regeneration. Erfahre, wie Profis von diesem Training profitieren.",
    category: "Sport",
    readTime: "9 Min",
    date: "8. März 2026",
    featured: false,
    image: "/images/praxis/ihht-behandlung.jpg"
  },
  {
    slug: "ihht-ablauf-erfahrung",
    title: "IHHT Ablauf: Was du bei einer Behandlung erlebst",
    excerpt: "Vom Erstgespräch bis zur letzten Einheit: Erfahre Schritt für Schritt, was dich bei einem IHHT-Kurs erwartet und wie sich die Behandlung anfühlt.",
    category: "Erfahrungen",
    readTime: "10 Min",
    date: "9. März 2026",
    featured: false,
    image: "/images/praxis/beratung-nah.png"
  },
];

const categories = ["Alle Themen", "Wissenschaft", "Long COVID", "Wissen", "Sport", "Erfahrungen"];

const categoryColors: Record<string, string> = {
  "Wissenschaft": "#4B7FD1",
  "Long COVID": "#D1834B",
  "Wissen": "#10B981",
  "Sport": "#F59E0B",
  "Erfahrungen": "#EC4899",
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Alle Themen");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredPosts = useMemo(() => {
    if (activeCategory === "Alle Themen") return allPosts;
    return allPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  const featuredPost = filteredPosts.find((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured).slice(0, visibleCount - (featuredPost ? 1 : 0));
  const hasMore = regularPosts.length < filteredPosts.filter((p) => !p.featured).length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden section-gradient-hero">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--golden-chestnut)]/5 rounded-full blur-3xl" />
        
        <div className="container-premium relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-sm mb-8"
            >
              <span className="w-2 h-2 bg-[var(--golden-chestnut)] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">Aktuelles aus der Zellforschung</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-foreground mb-6"
            >
              Wissen, das dir <span className="text-gradient-gold">wirklich hilft</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto"
            >
              Wissenschaftlich fundierte Artikel zu IHHT, Mitochondrien und deiner Gesundheit
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category Filter - Funktionierend */}
      <section className="py-8 bg-white border-b border-border sticky top-16 z-30 backdrop-blur-xl bg-white/95">
        <div className="container-premium">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(6);
                }}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[var(--golden-chestnut)] text-white shadow-lg shadow-[var(--golden-chestnut)]/20"
                    : "bg-[var(--muted)] text-muted-foreground hover:bg-[var(--border)] hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 section-gradient-warm">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group block relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--muted)] to-white border border-border hover:shadow-xl transition-shadow"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                        style={{ backgroundColor: categoryColors[featuredPost.category] }}
                      >
                        {featuredPost.category}
                      </span>
                      <span className="text-xs font-medium text-[var(--golden-chestnut)]">Empfohlen</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-tight group-hover:text-[var(--golden-chestnut)] transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed mb-6">{featuredPost.excerpt}</p>

                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>Markus Spiegelhalder</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime} Lesezeit</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[var(--golden-chestnut)] font-medium group-hover:gap-3 transition-all">
                      Artikel lesen <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--muted)]">
                    <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="section-padding section-gradient-warm">
        <div className="container-premium">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">Keine Beiträge in dieser Kategorie.</p>
            </div>
          ) : (
            <>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {regularPosts.map((post, index) => (
                    <motion.article
                      key={post.slug}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link href={`/blog/${post.slug}`} className="group block h-full">
                        <div className="card-premium overflow-hidden">
                          <div className="relative aspect-[16/10] -mx-6 -mt-6 mb-5 overflow-hidden bg-[var(--muted)]">
                            <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                            <div className="absolute top-4 left-4">
                              <span
                                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white backdrop-blur-sm"
                                style={{ backgroundColor: categoryColors[post.category] }}
                              >
                                {post.category}
                              </span>
                            </div>
                          </div>

                          <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3 leading-snug group-hover:text-[var(--golden-chestnut)] transition-colors line-clamp-2">
                              {post.title}
                            </h2>

                            <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>

                            <div className="flex items-center justify-between pt-4 border-t border-border">
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <div className="flex items-center gap-1.5">
                                  <Clock className="h-3.5 w-3.5" />
                                  <span>{post.readTime}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <Calendar className="h-3.5 w-3.5" />
                                  <span>{post.date}</span>
                                </div>
                              </div>
                              <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-[var(--golden-chestnut)] group-hover:translate-x-1 transition-all" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>

              {hasMore && (
                <div className="text-center mt-12">
                  <button onClick={loadMore} className="btn-secondary px-8 py-3">
                    Mehr Beiträge laden
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <CTASection />
      <FooterSection />
    </main>
  );
}