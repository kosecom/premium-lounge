"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Battery, Brain, Sparkles, Award } from "lucide-react";

export function SolutionSection() {
  return (
    <section id="methode" className="section-padding section-gradient-solution">
      <div className="container-premium">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-[var(--golden-chestnut)] mb-4">
            Die Wissenschaft dahinter
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-foreground mb-6">
            Was in deinen Zellen<br />
            <span className="text-[var(--bright-marine)]">wirklich passiert</span>
          </h2>
        </motion.div>
        
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
              <Image
                src="/images/praxis/ihht-geraet.png"
                alt="IHHT Gerät mit Nobelpreis 2019 Auszeichnung"
                fill
                className="object-cover"
              />
              {/* Badge Overlay */}
              <div className="absolute top-4 left-4 px-4 py-2 rounded-lg bg-white/95 backdrop-blur-sm shadow-lg">
                <span className="text-xs font-medium text-muted-foreground">Auszeichnung</span>
                <p className="text-sm font-semibold text-foreground">Medizin-Nobelpreis 2019</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Block 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--golden-chestnut)]/10 flex items-center justify-center">
                <Battery className="h-6 w-6 text-[var(--golden-chestnut)]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Das unterschätzte Kraftwerk
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Stell dir vor, dein Körper wäre ein Hochhaus mit <strong className="text-foreground">70 Billionen Wohnungen</strong>. 
                  In jeder Wohnung gibt es ein kleines Kraftwerk – die Mitochondrien. 
                  Sie produzieren die Energie, die du brauchst, um zu denken, zu arbeiten, zu lachen, zu regenerieren.
                </p>
              </div>
            </div>
            
            {/* Block 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--bright-marine)]/10 flex items-center justify-center">
                <Brain className="h-6 w-6 text-[var(--bright-marine)]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Warum herkömmliche Therapien oft nicht ausreichen
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nach einer schweren Erkrankung wie COVID-19, nach monatelangem Burnout oder chronischem Stress 
                  werden diese Kraftwerke <strong className="text-foreground">beschädigt</strong>. Sie verlieren ihre Effizienz. 
                  Die Energieproduktion bricht ein – obwohl du dich ausruhst.
                </p>
              </div>
            </div>
            
            {/* Block 3 */}
            <div className="flex gap-4 p-6 rounded-xl bg-gradient-to-br from-[var(--golden-chestnut)]/5 to-[var(--bright-marine)]/5 border border-border">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--golden-chestnut)]/10 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-[var(--golden-chestnut)]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Der Mechanismus, der deinen Körper verändert
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deine Mitochondrien reagieren auf einen spezifischen Reiz: <strong className="text-foreground">wechselnde Sauerstoffkonzentrationen</strong>. 
                  Genau das nutzt das IHHT-Training. Dein Körper reagiert auf kontrollierte Sauerstoffwechsel, 
                  indem er alte, ineffiziente Mitochondrien abbaut und neue, leistungsfähige bildet.
                </p>
              </div>
            </div>
            
            {/* Nobel Prize Reference */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--bright-marine)]/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-[var(--bright-marine)]" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Der zugrunde liegende Mechanismus – wie Zellen auf Sauerstoffveränderungen reagieren – 
                  wurde <strong className="text-foreground">2019 mit dem Nobelpreis für Physiologie oder Medizin ausgezeichnet</strong>.
                </p>
              </div>
            </div>
            
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}