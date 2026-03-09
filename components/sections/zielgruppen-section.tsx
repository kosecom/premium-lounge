"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bug, Battery, Dumbbell } from "lucide-react";
import Image from "next/image";

const zielgruppen = [
  {
    id: "long-covid",
    icon: Bug,
    title: "Long COVID & Post-COVID-Syndrom",
    description: "Die Infektion ist überstanden – aber die Erschöpfung bleibt. Fatigue, Brain Fog, Atemnot bei kleinen Anstrengungen, Konzentrationsprobleme.",
    detail: "Dein Immunsystem hat gekämpft. Jetzt kämpfen deine Zellen.",
    href: "/long-covid",
    image: "/images/praxis/ihht-behandlung.jpg"
  },
  {
    id: "burnout",
    icon: Battery,
    title: "Burnout & chronische Erschöpfung",
    description: "Du hast jahrelang alles gegeben – für den Job, die Familie, andere. Jetzt läuft der Akku auf Reserve. Und selbst Urlaub bringt keine echte Erholung mehr.",
    detail: "Das ist kein Burnout im Kopf. Das ist ein Burnout auf Zellebene.",
    href: "/burnout",
    image: "/images/praxis/beratung.png"
  },
  {
    id: "leistung",
    icon: Dumbbell,
    title: "Leistungsabfall & sportliche Performance",
    description: "Deine Kondition lässt nach. Die Regeneration dauert länger als früher. Du merkst: Dein Körper arbeitet nicht mehr auf dem Niveau, das du kennst.",
    detail: "Und das du zurückwillst.",
    href: "/leistung",
    image: "/images/markus/markus-hero.png"
  }
];

export function ZielgruppenSection() {
  return (
    <section id="zielgruppen" className="section-padding section-gradient-cool">
      <div className="container-premium">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-[var(--golden-chestnut)] mb-4">
            Für wen ist IHHT?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-foreground mb-6">
            Drei verschiedene Geschichten.
            <br />
            <span className="text-gradient-blue">Eine gemeinsame Ursache.</span>
          </h2>
        </motion.div>
        
        {/* Zielgruppen Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {zielgruppen.map((gruppe, index) => (
            <motion.div
              key={gruppe.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link 
                href={gruppe.href}
                className="group block h-full card-premium overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                  <Image
                    src={gruppe.image}
                    alt={gruppe.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <gruppe.icon className="h-5 w-5 text-[var(--golden-chestnut)]" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug group-hover:text-[var(--golden-chestnut)] transition-colors">
                    {gruppe.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {gruppe.description}
                  </p>
                  <p className="text-sm font-medium text-foreground mb-4">
                    {gruppe.detail}
                  </p>
                  
                  {/* Learn More */}
                  <div className="flex items-center gap-2 text-sm font-medium text-[var(--golden-chestnut)] group-hover:gap-3 transition-all">
                    Mehr erfahren
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}