"use client";

import { useEffect, useState } from "react";

interface CalendlyEmbedProps {
  url?: string;
  height?: string;
}

export function CalendlyEmbed({
  url = "https://calendly.com/energy-previum/ihht",
  height = "650px",
}: CalendlyEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  
  // Build URL with parameters
  const embedUrl = `${url}?embed_domain=1&embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1`;

  return (
    <div 
      className="calendly-inline-widget"
      style={{ minWidth: "320px", height, position: "relative" }}
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-xl">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-[var(--golden-chestnut)] border-t-transparent rounded-full animate-spin mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Calendly wird geladen...</p>
          </div>
        </div>
      )}
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        onLoad={() => setLoaded(true)}
        style={{ 
          border: "none",
          borderRadius: "8px",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.3s ease"
        }}
        title="Calendly Termin buchen"
      />
    </div>
  );
}