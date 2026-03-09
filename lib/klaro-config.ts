import type { KlaroConfig } from 'klaro';

export const klaroConfig: KlaroConfig = {
  // Element ID für das Klaro UI
  elementID: 'klaro',
  
  // Speichermethode
  storageMethod: 'localStorage',
  
  // Cookie Name für Consent
  cookieName: 'previum-consent',
  
  // Expires nach 30 Tagen
  cookieExpiresAfterDays: 30,
  
  // Privacy Policy Link
  privacyPolicy: '/datenschutz',
  
  // Standard-Sprache
  lang: 'de',
  
  // Übersetzungen
  translations: {
    de: {
      consentModal: {
        title: 'Cookie-Einstellungen',
        description: 'Wir nutzen Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Einige sind technisch notwendig, andere helfen uns, die Website zu optimieren.',
      },
      consentNotice: {
        title: 'Cookie-Einstellungen',
        description: 'Wir nutzen Cookies, um Ihre Erfahrung zu verbessern.',
        learnMore: 'Mehr erfahren',
      },
      purposes: {
        analytics: 'Analyse',
        marketing: 'Marketing',
        functional: 'Funktional',
      },
    },
  },
  
  // Services / Apps
  services: [
    {
      name: 'google-tag-manager',
      title: 'Google Tag Manager',
      purposes: ['analytics', 'marketing'],
      cookies: [/^_ga/, /^_gid/, /^_gat/, /^_gcl_/],
      required: false,
      default: false,
    },
    {
      name: 'google-analytics',
      title: 'Google Analytics',
      purposes: ['analytics'],
      cookies: [/^_ga/, /^_gid/, /^_gat/],
      required: false,
      default: false,
    },
    {
      name: 'calendly',
      title: 'Calendly',
      purposes: ['functional'],
      required: false,
      default: true,
    },
  ],
  
  // Zwecke
  purposes: [
    {
      name: 'functional',
      title: 'Funktionale Cookies',
      description: 'Diese Cookies sind für die Funktionalität der Website erforderlich.',
    },
    {
      name: 'analytics',
      title: 'Analyse-Cookies',
      description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.',
    },
    {
      name: 'marketing',
      title: 'Marketing-Cookies',
      description: 'Diese Cookies werden verwendet, um Werbung relevanter zu gestalten.',
    },
  ],
  
  // UI Styling
  styling: {
    theme: ['light', 'top', 'wide'],
  },
};