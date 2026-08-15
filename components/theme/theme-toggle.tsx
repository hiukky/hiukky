"use client";

import { useTheme } from "@wrksz/themes/client";
import { useTranslations } from "next-intl";

const OPTIONS = [
  { key: "dark" as const, icon: "☾" },
  { key: "system" as const, icon: "▢" },
  { key: "light" as const, icon: "☀" },
];

export function ThemeToggle() {
  const t = useTranslations("theme");
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-0.75 rounded-full bg-[var(--hover)] p-0.75">
      {OPTIONS.map(({ key, icon }) => (
        <button
          key={key}
          type="button"
          aria-label={t(key)}
          onClick={() => setTheme(key)}
          className={`seg flex h-6 w-6.5 items-center justify-center rounded-full border-none bg-transparent text-xs ${
            theme === key ? "active" : ""
          }`}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}
