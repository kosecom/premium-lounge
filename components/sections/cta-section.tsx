"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Shield } from "lucide-react";
import { CalendlyEmbed } from "@/components/calendly-embed";

export function CTASection() {
  return (
    <section className="section-padding section-gradient-cta text-white">
      <div className="container-premium relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6">
              Dein erstes Gespräch kostet dich<br />
              <span className="text-[var(--golden-chestnut)]">15 Minuten.</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Du hast lange genug auf Besserung gewartet. Gib deinen Zellen eine Chance.
            </p>
          </motion.div>
        </div>
        
        {/* Calendly Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-white rounded-2xl p-4 shadow-xl">
            <CalendlyEmbed height="650px" />
          </div>
        </motion.div>
        
        {/* Contact Methods with Lucide Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid gap-4 md:grid-cols-2 max-w-2xl mx-auto mb-12"
        >
          <a
            href="tel:08932389988"
            className="group flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[var(--golden-chestnut)]/20 flex items-center justify-center">
              <Phone className="h-6 w-6 text-[var(--golden-chestnut)]" />
            </div>
            <div>
              <p className="font-semibold text-white">Anrufen</p>
              <p className="text-sm text-white/70">Mo–Fr 9–17 Uhr · 089 323 89 988</p>
            </div>
          </a>
          <a
            href="mailto:energy@previum.de"
            className="group flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[var(--golden-chestnut)]/20 flex items-center justify-center">
              <Mail className="h-6 w-6 text-[var(--golden-chestnut)]" />
            </div>
            <div>
              <p className="font-semibold text-white">E-Mail</p>
              <p className="text-sm text-white/70">Antwort innerhalb 24h · energy@previum.de</p>
            </div>
          </a>
        </motion.div>
        
        {/* Privacy Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-sm text-white/50"
        >
          <Shield className="h-4 w-4" />
          <span>
            Deine Daten werden vertraulich behandelt. DSGVO-konform.
          </span>
        </motion.div>
        
      </div>
    </section>
  );
}