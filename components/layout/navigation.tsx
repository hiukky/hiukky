"use client";

import {
  BriefcaseIcon,
  DotsThreeIcon,
  PenNibIcon,
  SparkleIcon,
  StackIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { AI_URL, AiDot } from "@/components/layout/ai-link";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SOCIAL_LINKS } from "@/lib/social-links";

const SECTIONS = [
  { href: "#about", key: "about" as const, icon: UserIcon },
  { href: "#experience", key: "experience" as const, icon: BriefcaseIcon },
  { href: "#stack", key: "stack" as const, icon: StackIcon },
  { href: "#writing", key: "writing" as const, icon: PenNibIcon },
];

const SOCIAL_ICONS: Record<(typeof SOCIAL_LINKS)[number]["name"], string> = {
  github: "GH",
  linkedin: "IN",
  email: "@",
};

function NavMenuContent({
  t,
  tSocial,
}: {
  t: ReturnType<typeof useTranslations>;
  tSocial: ReturnType<typeof useTranslations>;
}) {
  return (
    <>
      <div className="flex flex-col p-2">
        {SOCIAL_LINKS.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            target={name === "email" ? undefined : "_blank"}
            rel={name === "email" ? undefined : "noreferrer"}
            className="menu-item flex items-center gap-2.75 rounded-[9px] px-2.75 py-2.25 text-[0.84375rem] no-underline"
            style={{ color: "var(--bright)" }}
          >
            <span className="w-4 font-mono text-[0.6875rem] text-[var(--faint)]">
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
          <span className="eyebrow">{t("language")}</span>
          <LanguageSwitcher />
        </div>
      </div>
    </>
  );
}

export function Navigation() {
  const t = useTranslations("nav");
  const tSocial = useTranslations("social");
  const [open, setOpen] = useState(false);
  const [dockOpen, setDockOpen] = useState(false);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-4 px-5.5 py-6.5 max-[720px]:hidden sm:px-16">
        <a
          href="#top"
          className="font-brand font-semibold text-lg tracking-tighter no-underline"
        >
          hiukky
        </a>
        <Popover open={open} onOpenChange={setOpen}>
          <div
            className="nav-pill flex items-center gap-0.5 rounded-full border p-1.25 text-[0.84375rem] backdrop-blur-md"
            style={{ background: "var(--panel)", borderColor: "var(--line)" }}
          >
            {SECTIONS.map(({ href, key }) => (
              <a key={href} href={href}>
                {t(key)}
              </a>
            ))}
            <span aria-hidden className="mx-1 h-4 w-px bg-[var(--line)]" />
            <a
              href={AI_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="ai.hiukky.com"
              className="nav-ai inline-flex items-center gap-2"
            >
              <AiDot />
              AI
            </a>
            <PopoverTrigger
              aria-label={t("more")}
              className={`nav-dots ml-0.5 flex size-7.5 items-center justify-center rounded-full border-none bg-[var(--hover)] text-[0.8125rem] text-[var(--muted2)] ${open ? "open" : ""}`}
            >
              •••
            </PopoverTrigger>
          </div>

          <PopoverContent
            align="end"
            sideOffset={16}
            className="w-49 gap-0 overflow-hidden rounded-2xl border p-0 text-inherit shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-lg"
            style={{ background: "var(--panel)", borderColor: "var(--line)" }}
          >
            <NavMenuContent t={t} tSocial={tSocial} />
          </PopoverContent>
        </Popover>
      </nav>

      <div className="fixed inset-x-0 bottom-0 z-50 hidden justify-center px-4 pb-6 max-[720px]:flex">
        <Popover open={dockOpen} onOpenChange={setDockOpen}>
          <div
            className="dock flex items-center gap-1 rounded-full border p-1.5 backdrop-blur-md"
            style={{ background: "var(--panel)", borderColor: "var(--line)" }}
          >
            {SECTIONS.map(({ href, key, icon: Icon }) => (
              <a
                key={href}
                href={href}
                aria-label={t(key)}
                className="dock-item flex size-11 items-center justify-center rounded-full no-underline"
                style={{ color: "var(--muted2)" }}
              >
                <Icon size={20} />
              </a>
            ))}
            <span aria-hidden className="mx-0.5 h-5 w-px bg-[var(--line)]" />
            <a
              href={AI_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="ai.hiukky.com"
              className="dock-item nav-ai relative flex size-11 items-center justify-center rounded-full no-underline"
            >
              <SparkleIcon size={20} />
              <AiDot className="absolute top-2.5 right-2.5" />
            </a>
            <PopoverTrigger
              aria-label={t("more")}
              className={`dock-item flex size-11 items-center justify-center rounded-full border-none bg-transparent ${dockOpen ? "open" : ""}`}
            >
              <DotsThreeIcon size={22} weight="bold" />
            </PopoverTrigger>
          </div>

          <PopoverContent
            side="top"
            sideOffset={16}
            className="w-49 gap-0 overflow-hidden rounded-2xl border p-0 text-inherit shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-lg"
            style={{ background: "var(--panel)", borderColor: "var(--line)" }}
          >
            <NavMenuContent t={t} tSocial={tSocial} />
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
