"use client";

import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { ZielgruppenSection } from "@/components/sections/zielgruppen-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { ProcessSection } from "@/components/sections/process-section";
import { MarkusSection } from "@/components/sections/markus-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProblemSection />
      <ZielgruppenSection />
      <SolutionSection />
      <ProcessSection />
      <MarkusSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}