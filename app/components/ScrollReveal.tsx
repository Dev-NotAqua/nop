'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div 
      ref={ref}
      className={`scroll-reveal glass-card ${isVisible ? 'visible' : ''}`}
      tabIndex={0}
      aria-live="polite"
    >
      {children}
    </div>
  );
} 