import { Metadata } from "next";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { CTASection } from "@/components/sections/cta-section";
import BlogPostClient from "./client";

export const metadata: Metadata = {
  title: "Was ist IHHT? Das Zelltraining wissenschaftlich erklärt",
  description: "Intervall-Hypoxie-Hyperoxie-Training (IHHT) nutzt wechselnde Sauerstoffkonzentrationen, um deine Mitochondrien zu trainieren. Erfahre, wie diese Nobelpreis-gekrönte Methode funktioniert.",
  openGraph: {
    title: "Was ist IHHT? Das Zelltraining wissenschaftlich erklärt",
    description: "Intervall-Hypoxie-Hyperoxie-Training (IHHT) nutzt wechselnde Sauerstoffkonzentrationen, um deine Mitochondrien zu trainieren.",
    type: "article",
  },
};

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <BlogPostClient />
      <CTASection />
      <FooterSection />
    </main>
  );
}