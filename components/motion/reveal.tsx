"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

type RevealProps = {
  children: ReactNode;
  delay?: number;
  variants?: Variants;
  className?: string;
};

/**
 * Base scroll-reveal primitive. The redesign change composes on top of this
 * (and Framer Motion directly) for the actual parallax/motion design.
 */
export function Reveal({
  children,
  delay = 0,
  variants = defaultVariants,
  className,
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
