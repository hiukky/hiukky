"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type SectionFadeProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
};

/**
 * Per-section fade/translate as the section moves away from the viewport
 * center, matching the design prototype's distance-from-center treatment.
 *
 * Always renders the same `motion.section` node (never swaps to a plain
 * `<section>`) — useScroll's target tracking goes stale if the element it's
 * bound to gets unmounted and replaced. The scroll-linked style is only
 * applied once mounted and motion isn't reduced; before that (server, first
 * client paint) it renders with no style override, avoiding a hydration
 * mismatch (see components/motion/reveal.tsx for the same reasoning).
 */
export function SectionFade({
  children,
  className,
  id,
  style,
}: SectionFadeProps) {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [animated, setAnimated] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 1, 0.15]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [26, 0, -26]);

  useEffect(() => {
    if (!shouldReduceMotion) setAnimated(true);
  }, [shouldReduceMotion]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      style={animated ? { ...style, opacity, y } : style}
    >
      {children}
    </motion.section>
  );
}
