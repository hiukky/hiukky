"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const TYPE_MS = 85;
const DELETE_MS = 45;
const HOLD_ALIAS_MS = 1000;

type TypingNameProps = {
  alias: string;
  name: string;
  className?: string;
};

/**
 * Shows alias by default, then animates: hold alias → delete → type name.
 * Keeps `name` as final static content for hydration/SSR match.
 */
export function TypingName({ alias, name, className }: TypingNameProps) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState(alias);
  const [typing, setTyping] = useState(false);
  const [showCursorAtEnd, setShowCursorAtEnd] = useState(false);

  useEffect(() => {
    if (!shouldReduceMotion) setMounted(true);
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (!mounted) return;

    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timeouts.push(setTimeout(resolve, ms));
      });

    async function run() {
      setTyping(true);
      await wait(HOLD_ALIAS_MS);
      for (let i = alias.length; i >= 0; i--) {
        if (cancelled) return;
        setText(alias.slice(0, i));
        await wait(DELETE_MS);
      }
      for (let i = 1; i <= name.length; i++) {
        if (cancelled) return;
        setText(name.slice(0, i));
        await wait(TYPE_MS);
      }
      if (!cancelled) {
        setTyping(false);
        setShowCursorAtEnd(true);
      }
    }

    run();

    return () => {
      cancelled = true;
      for (const id of timeouts) clearTimeout(id);
    };
  }, [mounted, alias, name]);

  return (
    <span className={className} aria-hidden={typing || undefined}>
      {text}
      {(typing || showCursorAtEnd) && <span className="typing-cursor" />}
    </span>
  );
}
