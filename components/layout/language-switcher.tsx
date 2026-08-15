"use client";

import { useParams } from "next/navigation";
import { useLocale } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const ENABLED_LOCALES: (typeof routing.locales)[number][] = ["en", "pt"];

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  return (
    <div className="flex items-center gap-0.75 rounded-full bg-[var(--hover)] p-0.75">
      {routing.locales.map((loc) => {
        const enabled = ENABLED_LOCALES.includes(loc);
        return (
          <button
            key={loc}
            type="button"
            disabled={!enabled}
            onClick={() =>
              enabled &&
              router.replace(
                // @ts-expect-error -- params come from the current dynamic route
                { pathname, params },
                { locale: loc },
              )
            }
            aria-label={`Switch language to ${loc.toUpperCase()}`}
            className={`seg rounded-full border-none bg-transparent px-2.25 py-1 font-mono text-[0.6875rem] ${
              loc === locale ? "active" : ""
            } ${!enabled ? "disabled" : ""}`}
          >
            {loc.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
