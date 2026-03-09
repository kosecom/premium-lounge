"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Shield, Settings } from "lucide-react";

// Extend Window interface for dataLayer
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if consent already given
    const consent = localStorage.getItem("previum-consent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    const consent = {
      google_tag_manager: true,
      google_analytics: true,
      calendly: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("previum-consent", JSON.stringify(consent));
    setShowBanner(false);
    
    // Initialize analytics after consent
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'cookie_consent_given' });
    }
  };

  const acceptEssential = () => {
    const consent = {
      google_tag_manager: false,
      google_analytics: false,
      calendly: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("previum-consent", JSON.stringify(consent));
    setShowBanner(false);
  };

  const openSettings = () => {
    // Open Klaro settings modal if available
    if (typeof window !== 'undefined' && (window as any).klaro) {
      (window as any).klaro.show();
    }
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-border p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--golden-chestnut)]/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-[var(--golden-chestnut)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Cookie-Einstellungen
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Wir nutzen Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. 
                  Einige sind technisch notwendig, andere helfen uns, die Website zu optimieren. 
                  Mehr Informationen finden Sie in unserer{" "}
                  <Link href="/datenschutz" className="text-[var(--golden-chestnut)] hover:underline">
                    Datenschutzerklärung
                  </Link>.
                </p>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <button
                  onClick={acceptEssential}
                  className="px-5 py-2.5 text-sm font-medium text-foreground border border-border rounded-xl hover:bg-muted transition-colors"
                >
                  Nur notwendige
                </button>
                <button
                  onClick={openSettings}
                  className="px-5 py-2.5 text-sm font-medium text-muted-foreground rounded-xl hover:bg-muted transition-colors flex items-center gap-2"
                >
                  <Settings className="h-4 w-4" />
                  Einstellungen
                </button>
                <button
                  onClick={acceptAll}
                  className="btn-primary text-sm"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}