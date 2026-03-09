"use client";

import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-8 section-gradient-hero">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium text-[var(--golden-chestnut)] mb-4">
              FAQ
            </span>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight text-foreground mb-6">
              Häufig gestellte Fragen
            </h1>
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}