"use client";

import { useParams } from "next/navigation";
import { useLocale } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LABELS: Record<(typeof routing.locales)[number], string> = {
  en: "EN",
  pt: "PT",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1 text-sm">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          disabled={loc === locale}
          onClick={() =>
            router.replace(
              // @ts-expect-error -- params come from the current dynamic route
              { pathname, params },
              { locale: loc },
            )
          }
          aria-label={`Switch language to ${LABELS[loc]}`}
          className="rounded-full px-2 py-1 text-foreground/70 transition-colors hover:bg-accent hover:text-foreground disabled:text-foreground disabled:hover:bg-transparent"
        >
          {LABELS[loc]}
        </button>
      ))}
    </div>
  );
}
