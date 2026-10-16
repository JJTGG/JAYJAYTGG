"use client";

import { useEffect, useRef } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  threshold?: number;
};

const MAX_DELAY_MS = 800;

export default function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  threshold = 0.12
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    const safeDelay = Number.isFinite(delayMs)
      ? Math.min(Math.max(delayMs, 0), MAX_DELAY_MS)
      : 0;

    const safeThreshold = Number.isFinite(threshold)
      ? Math.min(Math.max(threshold, 0), 1)
      : 0.12;

    element.style.transitionDelay = `${safeDelay}ms`;
    element.classList.add("is-pending");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        element.classList.remove("is-pending");
        element.classList.add("is-visible");

        observer.unobserve(element);
      },
      {
        threshold: safeThreshold,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      element.classList.remove("is-pending", "is-visible");
      element.style.removeProperty("transition-delay");
    };
  }, [delayMs, threshold]);

  return (
    <div
      ref={elementRef}
      className={`motion-reveal ${className}`.trim()}
    >
      {children}
    </div>
  );
}