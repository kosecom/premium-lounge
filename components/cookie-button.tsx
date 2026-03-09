"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieButton() {
  const [isOpen, setIsOpen] = useState(false);

  const openSettings = () => {
    // Open cookie settings modal
    setIsOpen(true);
    
    // Also trigger Klaro if available
    if (typeof window !== 'undefined' && (window as any).klaro) {
      (window as any).klaro.show();
    }
  };

  const acceptAll = () => {
    const consent = {
      google_tag_manager: true,
      google_analytics: true,
      calendly: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("previum-consent", JSON.stringify(consent));
    setIsOpen(false);
  };

  const acceptEssential = () => {
    const consent = {
      google_tag_manager: false,
      google_analytics: false,
      calendly: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("previum-consent", JSON.stringify(consent));
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Cookie Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        onClick={openSettings}
        className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-[var(--golden-chestnut)] text-white shadow-lg hover:shadow-xl hover:bg-[var(--golden-light)] transition-all duration-300 flex items-center justify-center group"
        aria-label="Cookie-Einstellungen öffnen"
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="group-hover:scale-110 transition-transform"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="8" cy="9" r="1" fill="currentColor" />
          <circle cx="15" cy="8" r="1" fill="currentColor" />
          <circle cx="10" cy="14" r="1" fill="currentColor" />
          <circle cx="16" cy="13" r="1" fill="currentColor" />
        </svg>
      </motion.button>

      {/* Cookie Settings Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--golden-chestnut)]/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--golden-chestnut)" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="8" cy="9" r="1" fill="var(--golden-chestnut)" />
                      <circle cx="15" cy="8" r="1" fill="var(--golden-chestnut)" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Cookie-Einstellungen
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <p className="text-sm text-muted-foreground">
                  Wir nutzen Cookies, um Ihre Erfahrung zu verbessern. Wählen Sie, welche Sie zulassen möchten.
                </p>

                {/* Cookie Categories */}
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-[var(--muted)] border border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">Notwendige Cookies</p>
                        <p className="text-xs text-muted-foreground">Immer aktiv</p>
                      </div>
                      <div className="w-10 h-6 rounded-full bg-[var(--golden-chestnut)] flex items-center justify-end px-1">
                        <div className="w-4 h-4 rounded-full bg-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">Analyse-Cookies</p>
                        <p className="text-xs text-muted-foreground">Google Analytics</p>
                      </div>
                      <div className="w-10 h-6 rounded-full bg-gray-200 flex items-center px-1">
                        <div className="w-4 h-4 rounded-full bg-white shadow" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">Marketing-Cookies</p>
                        <p className="text-xs text-muted-foreground">Google Tag Manager</p>
                      </div>
                      <div className="w-10 h-6 rounded-full bg-gray-200 flex items-center px-1">
                        <div className="w-4 h-4 rounded-full bg-white shadow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-border bg-[var(--muted)]">
                <div className="flex gap-3">
                  <button
                    onClick={acceptEssential}
                    className="flex-1 px-4 py-2.5 text-sm font-medium text-foreground border border-border rounded-xl hover:bg-white transition-colors"
                  >
                    Nur notwendige
                  </button>
                  <button
                    onClick={acceptAll}
                    className="flex-1 btn-primary text-sm"
                  >
                    Alle akzeptieren
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}