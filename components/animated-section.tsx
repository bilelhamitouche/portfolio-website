"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Animation = "fade-up" | "fade-left" | "fade-right";

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: Animation;
  delay?: number;
  threshold?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  threshold = 0.2,
  className,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        !isVisible && "opacity-0",
        isVisible && `animate-${animation}`,
        className,
      )}
    >
      {children}
    </div>
  );
}
