'use client';

import React, { useEffect, useRef, useState } from 'react';

interface IconProps {
  isVisible?: boolean;
  color?: string;
}

export default function RegenerationIcon({ isVisible = true, color = '#D1834B' }: IconProps) {
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const [pathLengths, setPathLengths] = useState<number[]>([]);

  useEffect(() => {
    const lengths: number[] = [];
    pathRefs.current.forEach((ref) => {
      if (ref) {
        lengths.push(ref.getTotalLength());
      }
    });
    setPathLengths(lengths);
  }, []);

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
    >
      <style>
        {`
          .regen-path-0 {
            stroke-dasharray: ${pathLengths[0] || 800};
            stroke-dashoffset: ${isVisible ? 0 : pathLengths[0] || 800};
            transition: stroke-dashoffset 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          }
          .regen-path-1 {
            stroke-dasharray: ${pathLengths[1] || 400};
            stroke-dashoffset: ${isVisible ? 0 : pathLengths[1] || 400};
            transition: stroke-dashoffset 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
          }
          .regen-path-2 {
            stroke-dasharray: ${pathLengths[2] || 100};
            stroke-dashoffset: ${isVisible ? 0 : pathLengths[2] || 100};
            transition: stroke-dashoffset 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
          }
        `}
      </style>
      {/* Spiral - main regeneration symbol */}
      <path
        ref={(el) => { pathRefs.current[0] = el; }}
        className="regen-path-0"
        d="M32 56C32 56 54 44 54 28C54 16 44 8 32 8C20 8 10 18 10 30C10 38 16 44 24 44C30 44 34 40 34 34C34 28 30 24 24 24"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Inner spiral detail */}
      <path
        ref={(el) => { pathRefs.current[1] = el; }}
        className="regen-path-1"
        d="M32 48C32 48 46 40 46 28C46 20 40 14 32 14C24 14 18 20 18 28C18 34 22 38 28 38C32 38 34 36 34 32"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
      />
      {/* Center dot */}
      <path
        ref={(el) => { pathRefs.current[2] = el; }}
        className="regen-path-2"
        d="M24 24C24 24 24 24 24 24"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}