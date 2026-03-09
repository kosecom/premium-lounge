'use client';

import React, { useEffect, useRef, useState } from 'react';

interface IconProps {
  isVisible?: boolean;
  color?: string;
}

export default function ZelleIcon({ isVisible = true, color = '#D1834B' }: IconProps) {
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
          .zelle-path-0 {
            stroke-dasharray: ${pathLengths[0] || 500};
            stroke-dashoffset: ${isVisible ? 0 : pathLengths[0] || 500};
            transition: stroke-dashoffset 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          }
          .zelle-path-1 {
            stroke-dasharray: ${pathLengths[1] || 400};
            stroke-dashoffset: ${isVisible ? 0 : pathLengths[1] || 400};
            transition: stroke-dashoffset 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
          }
          .zelle-path-2 {
            stroke-dasharray: ${pathLengths[2] || 300};
            stroke-dashoffset: ${isVisible ? 0 : pathLengths[2] || 300};
            transition: stroke-dashoffset 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
          }
        `}
      </style>
      {/* Outer membrane */}
      <path
        ref={(el) => { pathRefs.current[0] = el; }}
        className="zelle-path-0"
        d="M32 8C44.5 8 54 17.5 54 30C54 42.5 44.5 52 32 52C19.5 52 10 42.5 10 30C10 17.5 19.5 8 32 8Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Inner fold (cristae) */}
      <path
        ref={(el) => { pathRefs.current[1] = el; }}
        className="zelle-path-1"
        d="M22 20C26 24 26 36 22 40"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        ref={(el) => { pathRefs.current[2] = el; }}
        className="zelle-path-2"
        d="M42 20C38 24 38 36 42 40"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}