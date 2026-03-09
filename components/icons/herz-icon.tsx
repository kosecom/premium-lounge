'use client';

import React, { useEffect, useRef, useState } from 'react';

interface IconProps {
  isVisible?: boolean;
  color?: string;
}

export default function HerzIcon({ isVisible = true, color = '#D1834B' }: IconProps) {
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
          .herz-path-0 {
            stroke-dasharray: ${pathLengths[0] || 600};
            stroke-dashoffset: ${isVisible ? 0 : pathLengths[0] || 600};
            transition: stroke-dashoffset 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          }
          .herz-path-1 {
            stroke-dasharray: ${pathLengths[1] || 200};
            stroke-dashoffset: ${isVisible ? 0 : pathLengths[1] || 200};
            transition: stroke-dashoffset 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s;
          }
        `}
      </style>
      {/* Heart shape */}
      <path
        ref={(el) => { pathRefs.current[0] = el; }}
        className="herz-path-0"
        d="M32 56C32 56 8 40 8 24C8 14 16 8 24 8C28 8 32 12 32 16C32 12 36 8 40 8C48 8 56 14 56 24C56 40 32 56 32 56Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Pulse line */}
      <path
        ref={(el) => { pathRefs.current[1] = el; }}
        className="herz-path-1"
        d="M14 32H24L28 26L32 38L36 28L40 32H50"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
}