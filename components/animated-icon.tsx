"use client";

import React from "react";

// Self-animating SVG icons with CSS animations
// No external dependencies - pure CSS + SVG

interface AnimatedIconProps {
  icon: "users" | "star" | "award" | "location" | "battery" | "brain" | "heart" | "phone" | "mail" | "shield" | "calendar" | "arrowRight" | "flask" | "virus" | "barbell";
  size?: number;
  color?: string;
  className?: string;
  trigger?: "loop" | "hover";
  delay?: number;
}

export function AnimatedIcon({ icon, size = 24, color = "#D1834B", className = "", trigger, delay }: AnimatedIconProps) {
  const iconSize = size;
  const strokeWidth = 2;
  
  const icons: Record<string, React.ReactElement> = {
    users: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path className="animate-draw" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle className="animate-draw delay-100" cx="9" cy="7" r="4" />
        <path className="animate-draw delay-200" d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path className="animate-draw delay-300" d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    star: (
      <svg viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth={strokeWidth}>
        <polygon className="animate-pulse-scale" points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ),
    award: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <circle className="animate-draw" cx="12" cy="8" r="6" />
        <path className="animate-draw delay-100" d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    location: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path className="animate-draw" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle className="animate-draw delay-200" cx="12" cy="10" r="3" />
      </svg>
    ),
    battery: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <rect className="animate-draw" x="1" y="6" width="18" height="12" rx="2" ry="2" />
        <line className="animate-draw delay-100" x1="23" y1="10" x2="23" y2="14" />
        <line className="animate-pulse-opacity delay-200" x1="6" y1="10" x2="6" y2="14" />
        <line className="animate-pulse-opacity delay-300" x1="10" y1="10" x2="10" y2="14" />
        <line className="animate-pulse-opacity delay-400" x1="14" y1="10" x2="14" y2="14" />
      </svg>
    ),
    brain: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path className="animate-draw" d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.54" />
        <path className="animate-draw delay-200" d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.54" />
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path className="animate-pulse-scale" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path className="animate-draw" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    mail: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <rect className="animate-draw" x="2" y="4" width="20" height="16" rx="2" />
        <path className="animate-draw delay-100" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path className="animate-draw" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path className="animate-draw delay-200" d="m9 12 2 2 4-4" />
      </svg>
    ),
    calendar: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <rect className="animate-draw" x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line className="animate-draw delay-100" x1="16" y1="2" x2="16" y2="6" />
        <line className="animate-draw delay-200" x1="8" y1="2" x2="8" y2="6" />
        <line className="animate-draw delay-300" x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    arrowRight: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <line className="animate-draw" x1="5" y1="12" x2="19" y2="12" />
        <polyline className="animate-draw delay-100" points="12 5 19 12 12 19" />
      </svg>
    ),
    flask: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path className="animate-draw" d="M9 3h6" />
        <path className="animate-draw delay-100" d="M10 3v6.5a2 2 0 0 1-.5 1.3L5.4 16.7A2 2 0 0 0 7 20h10a2 2 0 0 0 1.6-3.3l-4.1-5.9a2 2 0 0 1-.5-1.3V3" />
        <circle className="animate-pulse-opacity delay-200" cx="12" cy="16" r="1" />
        <circle className="animate-pulse-opacity delay-300" cx="9" cy="14" r="0.5" />
        <circle className="animate-pulse-opacity delay-400" cx="15" cy="15" r="0.5" />
      </svg>
    ),
    virus: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <circle className="animate-draw" cx="12" cy="12" r="5" />
        <line className="animate-draw delay-100" x1="12" y1="2" x2="12" y2="7" />
        <line className="animate-draw delay-100" x1="12" y1="17" x2="12" y2="22" />
        <line className="animate-draw delay-200" x1="2" y1="12" x2="7" y2="12" />
        <line className="animate-draw delay-200" x1="17" y1="12" x2="22" y2="12" />
        <line className="animate-draw delay-300" x1="4.93" y1="4.93" x2="8.17" y2="8.17" />
        <line className="animate-draw delay-300" x1="15.83" y1="15.83" x2="19.07" y2="19.07" />
        <line className="animate-draw delay-400" x1="4.93" y1="19.07" x2="8.17" y2="15.83" />
        <line className="animate-draw delay-400" x1="15.83" y1="8.17" x2="19.07" y2="4.93" />
        <circle className="animate-pulse-scale delay-500" cx="12" cy="12" r="1.5" fill={color} />
      </svg>
    ),
    barbell: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <line className="animate-draw" x1="6" y1="12" x2="18" y2="12" />
        <rect className="animate-draw delay-100" x="2" y="9" width="3" height="6" rx="0.5" />
        <rect className="animate-draw delay-200" x="19" y="9" width="3" height="6" rx="0.5" />
        <line className="animate-draw delay-300" x1="5" y1="7" x2="5" y2="17" />
        <line className="animate-draw delay-300" x1="19" y1="7" x2="19" y2="17" />
      </svg>
    ),
  };

  return (
    <div 
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: iconSize, height: iconSize }}
    >
      {icons[icon] || icons.users}
    </div>
  );
}