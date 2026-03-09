'use client';

import React, { useEffect, useRef, useState } from 'react';

interface IconProps {
  isVisible?: boolean;
  color?: string;
}

export default function AtmungIcon({ isVisible = true, color = '#D1834B' }: IconProps) {
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
          .atmung-path-0 {
            stroke-dasharray: ${pathLengths[0] || 400};
            stroke-dashoffset: ${isVisible ? 0 : pathLengths[0] || 400};
            transition: stroke-dashoffset 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          }
          .atmung-path-1 {
            stroke-dasharray: ${pathLengths[1] || 300};
            stroke-dashoffset: ${isVisible ? 0 : pathLengths[1] || 300};
            transition: stroke-dashoffset 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.15s;
          }
          .atmung-path-2 {
            stroke-dasharray: ${pathLengths[2] || 300};
            stroke-dashoffset: ${isVisible ? 0 : pathLengths[2] || 300};
            transition: stroke-dashoffset 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s;
          }
          .atmung-path-3 {
            stroke-dasharray: ${pathLengths[3] || 400};
            stroke-dashoffset: ${isVisible ? 0 : pathLengths[3] || 400};
            transition: stroke-dashoffset 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.45s;
          }
        `}
      </style>
      {/* Trachea */}
      <path
        ref={(el) => { pathRefs.current[0] = el; }}
        className="atmung-path-0"
        d="M32 8L32 24"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Left bronchus + lung outline */}
      <path
        ref={(el) => { pathRefs.current[1] = el; }}
        className="atmung-path-1"
        d="M32 24C28 26 20 28 14 36C10 44 14 52 24 54C28 55 30 52 32 48"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Right bronchus + lung outline */}
      <path
        ref={(el) => { pathRefs.current[2] = el; }}
        className="atmung-path-2"
        d="M32 24C36 26 44 28 50 36C54 44 50 52 40 54C36 55 34 52 32 48"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Air flow lines */}
      <path
        ref={(el) => { pathRefs.current[3] = el; }}
        className="atmung-path-3"
        d="M24 38C26 40 28 42 26 44M40 38C38 40 36 42 38 44"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}