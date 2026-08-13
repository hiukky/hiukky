"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Ambient radial glow that tracks the pointer, matching the design
 * prototype's cursor-follow effect. Renders nothing on server and first
 * client paint (avoids a hydration mismatch — see reveal.tsx) and only
 * mounts the glow — and attaches the listener — after mount, when motion
 * isn't reduced.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!shouldReduceMotion) setEnabled(true);
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (event: PointerEvent) => {
      el.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-0 size-[420px] rounded-full blur-[20px] will-change-transform"
      style={{
        background: "radial-gradient(circle, var(--glow), transparent 65%)",
      }}
    />
  );
}
