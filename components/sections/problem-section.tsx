"use client";

import { motion } from "framer-motion";
import { Battery, Brain, Heart } from "lucide-react";

const problems = [
  {
    icon: Battery,
    title: "Du ruhst dich aus – und bist trotzdem erschöpft.",
    description: "Du warst beim Arzt – und die Blutwerte sind unauffällig. Du willst dein Leben leben – aber dein Körper macht nicht mehr mit.",
    detail: "Das ist keine Einbildung. Das ist Zellbiologie."
  },
  {
    icon: Brain,
    title: "Konzentration? Fehlanzeige.",
    description: "Dein Arzt hat alles untersucht. Blutbild, Schilddrüse, Herz – alles unauffällig. Trotzdem schaffst du es nicht mehr, einen vollen Tag durchzuarbeiten.",
    detail: "Freude an Dingen, die dir früher wichtig waren? Schon lange nicht mehr gespürt."
  },
  {
    icon: Heart,
    title: "Vielleicht hat man dir gesagt...",
    description: "Es sei Stress. Oder das Alter. Oder du solltest einfach mehr schlafen. Aber du weißt es selbst:",
    detail: "So war das früher nicht."
  }
];

export function ProblemSection() {
  return (
    <section className="section-padding section-gradient-warm">
      <div className="container-premium">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-[var(--golden-chestnut)] mb-4">
            Das Problem verstehen
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-foreground mb-6">
            Kennst du dieses Gefühl?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Du wachst auf – und bist schon müde. Nicht kurz nach dem Aufstehen. 
            Schon vorher.
          </p>
        </motion.div>
        
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="card-premium"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--golden-chestnut)]/10 to-[var(--golden-chestnut)]/5 flex items-center justify-center">
                  <problem.icon className="h-6 w-6 text-[var(--golden-chestnut)]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {problem.description}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {problem.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-block p-8 rounded-2xl bg-white border border-border shadow-sm">
            <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed max-w-2xl">
              Für viele Menschen, die wir betreuen, war das der Wendepunkt:{" "}
              <span className="text-gradient-gold">
                Die Erkenntnis, dass es nicht am Kopf liegt.
              </span>
            </p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}