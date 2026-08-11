"use client";

import { Diamond, GithubLogo, House, User } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Link, usePathname } from "@/i18n/navigation";

const ROUTES = [
  { href: "/", icon: House, key: "home" as const },
  { href: "/about", icon: User, key: "about" as const },
  { href: "/skills", icon: Diamond, key: "skills" as const },
  { href: "/open-source", icon: GithubLogo, key: "openSource" as const },
];

export function Navigation() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between gap-4 px-6 py-4 sm:px-10">
      <nav className="flex items-center gap-1">
        {ROUTES.map(({ href, icon: Icon, key }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              aria-label={t(key)}
              aria-current={active ? "page" : undefined}
              className="flex size-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-accent hover:text-foreground aria-[current=page]:text-foreground"
            >
              <Icon className="size-4" weight="duotone" />
            </Link>
          );
        })}
      </nav>
      <div className="flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  );
}
