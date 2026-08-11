"use client";

import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "@wrksz/themes/client";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="size-9" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="flex size-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-accent hover:text-foreground"
    >
      {isDark ? (
        <Sun className="size-4" weight="duotone" />
      ) : (
        <Moon className="size-4" weight="duotone" />
      )}
    </button>
  );
}
