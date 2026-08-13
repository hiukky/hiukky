"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SOCIAL_LINKS } from "@/lib/social-links";

const SECTIONS = [
  { href: "#about", key: "about" as const },
  { href: "#experience", key: "experience" as const },
  { href: "#stack", key: "stack" as const },
  { href: "#writing", key: "writing" as const },
];

const SOCIAL_ICONS: Record<(typeof SOCIAL_LINKS)[number]["name"], string> = {
  github: "GH",
  linkedin: "IN",
  email: "@",
};

export function Navigation() {
  const t = useTranslations("nav");
  const tSocial = useTranslations("social");
  const tLanguage = useTranslations("language");
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-4 px-[22px] py-[26px] sm:px-16">
      <a
        href="#top"
        className="font-medium text-[17px] tracking-[-0.01em] no-underline"
      >
        hiukky
      </a>
      <Popover open={open} onOpenChange={setOpen}>
        <div
          className="nav-pill flex items-center gap-0.5 rounded-full border p-[5px] text-[13.5px] backdrop-blur-md"
          style={{ background: "var(--panel)", borderColor: "var(--line)" }}
        >
          {SECTIONS.map(({ href, key }) => (
            <a key={href} href={href}>
              {t(key)}
            </a>
          ))}
          <PopoverTrigger
            aria-label={t("more")}
            className={`nav-dots ml-0.5 flex size-[30px] items-center justify-center rounded-full border-none bg-[var(--hover)] text-[13px] text-[var(--muted2)] ${open ? "open" : ""}`}
          >
            •••
          </PopoverTrigger>
        </div>

        <PopoverContent
          align="end"
          sideOffset={10}
          className="w-[196px] gap-0 overflow-hidden rounded-2xl border p-0 text-inherit shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-lg"
          style={{ background: "var(--panel)", borderColor: "var(--line)" }}
        >
          <div className="flex flex-col p-2">
            <div
              className="mobile-links mb-2 flex-col gap-0 border-b pb-2"
              style={{ borderColor: "var(--line)" }}
            >
              {SECTIONS.map(({ href, key }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="menu-item rounded-[9px] px-[11px] py-[9px] text-[13.5px] no-underline"
                  style={{ color: "var(--bright)" }}
                >
                  {t(key)}
                </a>
              ))}
            </div>
            {SOCIAL_LINKS.map(({ name, url }) => (
              <a
                key={name}
                href={url}
                target={name === "email" ? undefined : "_blank"}
                rel={name === "email" ? undefined : "noreferrer"}
                className="menu-item flex items-center gap-[11px] rounded-[9px] px-[11px] py-[9px] text-[13.5px] no-underline"
                style={{ color: "var(--bright)" }}
              >
                <span className="w-4 font-mono text-[11px] text-[var(--faint)]">
                  {SOCIAL_ICONS[name]}
                </span>
                {tSocial(name)}
              </a>
            ))}
          </div>
          <div className="h-px" style={{ background: "var(--line)" }} />
          <div className="flex flex-col gap-2.5 p-3">
            <div className="flex items-center justify-between gap-2">
              <span className="eyebrow">{t("theme")}</span>
              <ThemeToggle />
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="eyebrow">
                {t("language")}{" "}
                <span className="text-[var(--faintest)] normal-case tracking-normal">
                  ({tLanguage("comingSoon")})
                </span>
              </span>
              <LanguageSwitcher />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </nav>
  );
}
