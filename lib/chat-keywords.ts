export const keywordTriggers = {
  // Kosten
  kosten: {
    keywords: ["kosten", "preis", "teuer", "wieviel", "wie viel"],
    response: {
      title: "Investition in deine Gesundheit",
      text: "Ein IHHT-Kurs umfasst 10–15 Einheiten. Die genauen Kosten besprechen wir im kostenlosen Erstgespräch.",
      actions: [
        { type: "calendly", label: "Termin vereinbaren" },
        { type: "phone", label: "Anrufen: 089 323 89 988" }
      ]
    }
  },
  
  // Termin
  termin: {
    keywords: ["termin", "buchung", "vereinbaren", "anmeldung"],
    response: {
      title: "Termin buchen",
      text: "Buche direkt online oder ruf uns an.",
      actions: [
        { type: "calendly", label: "Online buchen" },
        { type: "phone", label: "089 323 89 988" }
      ]
    }
  },
  
  // Dauer
  dauer: {
    keywords: ["dauer", "wie lange", "zeit", "minuten", "stunden"],
    response: {
      title: "Behandlungsdauer",
      text: "Eine IHHT-Einheit dauert 40–50 Minuten. Ein kompletter Kurs umfasst 10–15 Einheiten über 4–6 Wochen.",
      actions: []
    }
  },
  
  // Nebenwirkungen
  nebenwirkungen: {
    keywords: ["nebenwirkung", "risiko", "gefahr", "sicher"],
    response: {
      title: "Sicherheit",
      text: "IHHT ist gut verträglich. In klinischen Studien wurden keine relevanten Nebenwirkungen beobachtet. Dein Puls und Sauerstoff werden während jeder Einheit überwacht.",
      actions: []
    }
  },
  
  // IHHT
  ihht: {
    keywords: ["ihht", "hypoxie", "methode", "sauerstoff"],
    response: {
      title: "Was ist IHHT?",
      text: "IHHT nutzt wechselnde Sauerstoffkonzentrationen, um deine Mitochondrien zu trainieren. Basierend auf Nobelpreis-Forschung von 2019.",
      actions: [
        { type: "link", label: "Mehr erfahren", href: "/methode" }
      ]
    }
  },
  
  // Kontakt
  kontakt: {
    keywords: ["kontakt", "telefon", "email", "erreichen"],
    response: {
      title: "Kontakt",
      text: "",
      actions: [
        { type: "phone", label: "089 323 89 988" },
        { type: "email", label: "energy@previum.de" }
      ]
    }
  },
  
  // Long COVID
  longcovid: {
    keywords: ["long covid", "post-covid", "corona", "covid"],
    response: {
      title: "Long COVID Behandlung",
      text: "IHHT unterstützt die zelluläre Regeneration nach COVID-19. Viele Patienten berichten von mehr Energie und weniger Fatigue.",
      actions: [
        { type: "link", label: "Mehr erfahren", href: "/long-covid" }
      ]
    }
  },
  
  // Burnout
  burnout: {
    keywords: ["burnout", "erschöpfung", "müde", "kraftlos"],
    response: {
      title: "Burnout Behandlung",
      text: "Burnout hinterlässt Spuren auf Zellebene. IHHT hilft, die Energiekraftwerke deiner Zellen zu regenerieren.",
      actions: [
        { type: "link", label: "Mehr erfahren", href: "/burnout" }
      ]
    }
  }
};

export function matchKeyword(input: string): KeywordMatch | null {
  const lowerInput = input.toLowerCase();
  
  for (const [key, data] of Object.entries(keywordTriggers)) {
    for (const keyword of data.keywords) {
      if (lowerInput.includes(keyword)) {
        return { key, ...data.response };
      }
    }
  }
  
  return null;
}