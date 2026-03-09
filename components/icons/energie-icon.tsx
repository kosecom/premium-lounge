'use client';

import React, { useEffect, useRef, useState, CSSProperties } from 'react';

interface IconProps {
  isVisible?: boolean;
  color?: string;
}

export default function EnergieIcon({ isVisible = true, color = '#D1834B' }: IconProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
    }
  }, []);

  const strokeDasharray = pathLength || 1000;
  const strokeDashoffset = isVisible ? 0 : strokeDasharray;

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
    >
      <style>
        {`
          .energie-path {
            stroke-dasharray: ${strokeDasharray};
            stroke-dashoffset: ${strokeDashoffset};
            transition: stroke-dashoffset 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
        `}
      </style>
      <path
        ref={pathRef}
        className="energie-path"
        d="M36 8L16 36H30L24 56L48 26H34L36 8Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}