"use client";

import { motion } from "framer-motion";
import { MessageCircle, ClipboardList, Heart, Check, Zap, Brain, Moon, Activity } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Kostenloses Erstgespräch",
    duration: "15–20 Minuten",
    description: "Wir schauen uns deine Situation gemeinsam an. Deine Symptome, deine Geschichte, deine Ziele. Wir sagen dir ehrlich, ob IHHT für dich das Richtige ist – auch wenn die Antwort mal Nein sein sollte.",
    highlight: "Kein Druck, keine Verpflichtung."
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Individueller Trainingsplan",
    duration: "Vor der ersten Einheit",
    description: "Vor der ersten Einheit führen wir einen Hypoxie-Test durch. So stellen wir das Training exakt auf deine Sauerstoffsensitivität, dein Alter und deinen Ausgangszustand ein.",
    highlight: "Maßgeschneidert für dich."
  },
  {
    number: "03",
    icon: Heart,
    title: "Dein Zelltraining",
    duration: "10–15 Einheiten à 40–50 Min",
    description: "3× pro Woche, je 40–50 Minuten. Du entspannst dich. Wir überwachen Puls und Sauerstoffsättigung während jeder Einheit. Kein Sport, keine Anstrengung – und trotzdem trainierst du deine Zellen.",
    highlight: "Entspannt im Liegen trainieren."
  }
];

const benefits = [
  { icon: Zap, text: "Messbar mehr Energie im Alltag" },
  { icon: Activity, text: "Weniger Fatigue – auch bei Long COVID und ME/CFS" },
  { icon: Brain, text: "Klarerer Kopf, bessere Konzentration" },
  { icon: Moon, text: "Besserer Schlaf und schnellere Regeneration" },
  { icon: Activity, text: "Gesteigerte körperliche Belastbarkeit" }
];

export function ProcessSection() {
  return (
    <section className="section-padding section-gradient-process">
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
            Dein Weg zu mehr Energie
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-foreground mb-6">
            So läuft deine<br />
            <span className="text-[var(--bright-marine)]">Behandlung ab</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Kein kompliziertes Prozedere. Drei Schritte.
          </p>
        </motion.div>
        
        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connection Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+60px)] w-[calc(100%-60px)] h-0.5 bg-gradient-to-r from-[var(--golden-chestnut)]/30 to-transparent" />
              )}
              
              <div className="card-premium text-center border border-border h-full">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[var(--golden-chestnut)] text-white text-sm font-semibold">
                  Schritt {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[var(--golden-chestnut)]/10 flex items-center justify-center mx-auto mb-4 mt-4">
                  <step.icon className="h-8 w-8 text-[var(--golden-chestnut)]" />
                </div>
                
                {/* Title & Duration */}
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--golden-chestnut)] font-medium mb-4">
                  {step.duration}
                </p>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {step.description}
                </p>
                
                {/* Highlight */}
                <p className="text-sm font-medium text-foreground">
                  ✓ {step.highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-foreground">
              Was Patienten nach einem Kurs (10–15 Einheiten) berichten:
            </h3>
          </div>
          
          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-border"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--golden-chestnut)]/10 flex items-center justify-center">
                  <benefit.icon className="h-5 w-5 text-[var(--golden-chestnut)]" />
                </span>
                <span className="text-sm font-medium text-foreground">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}