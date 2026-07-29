"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealDirection = "up" | "left" | "right" | "scale";

export default function ScrollReveal({ children, delay = 0, direction = "up", className = "" }: { children: ReactNode; delay?: number; direction?: RevealDirection; className?: string }) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={elementRef} className={`scroll-reveal reveal-${direction} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}
