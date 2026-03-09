'use client';

import React, { useEffect, useRef, useState, CSSProperties } from 'react';

interface AnimatedIconProps {
  icon: React.ReactNode;
  size?: number;
  color?: string;
  animate?: boolean;
  className?: string;
}

export default function AnimatedIcon({
  icon,
  size = 64,
  color = '#D1834B',
  animate = true,
  className = '',
}: AnimatedIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!animate) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [animate, hasAnimated]);

  return (
    <div
      ref={ref}
      className={`animated-icon ${className}`}
      style={{
        width: size,
        height: size,
        color,
      }}
    >
      {React.cloneElement(icon as React.ReactElement<any>, {
        isVisible,
        color,
      })}
    </div>
  );
}