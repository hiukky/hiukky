"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode, useEffect, useState } from "react";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

type RevealProps = {
  children: ReactNode;
  delay?: number;
  variants?: Variants;
  className?: string;
};

/**
 * Fade-up-on-view primitive, matching the design prototype's [data-reveal]
 * treatment. Starts static/fully-visible on server and first client paint
 * (avoids a hydration mismatch, since framer-motion's useReducedMotion can
 * already read the real value on the client's first render while SSR
 * cannot) and only upgrades to the animated version after mount, when
 * motion isn't reduced.
 */
export function Reveal({
  children,
  delay = 0,
  variants = defaultVariants,
  className,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!shouldReduceMotion) setAnimated(true);
  }, [shouldReduceMotion]);

  if (!animated) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
