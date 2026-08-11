import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TelegramLogo,
  XLogo,
} from "@phosphor-icons/react/ssr";
import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Reveal } from "@/components/motion/reveal";
import { SOCIAL_LINKS } from "@/lib/social-links";

const SOCIAL_ICONS = {
  telegram: TelegramLogo,
  github: GithubLogo,
  linkedin: LinkedinLogo,
  instagram: InstagramLogo,
  twitter: XLogo,
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return { title: t("pageTitle") };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");

  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-16 text-center sm:px-10">
      <Reveal>
        <Image
          src="/assets/personal/lol.svg"
          alt="hiukky"
          width={160}
          height={160}
          priority
        />
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="text-4xl font-semibold tracking-tight">{t("name")}</h1>
        <p className="mt-2 text-lg text-foreground/70">{t("subtitle")}</p>
      </Reveal>
      <Reveal delay={0.2} className="flex items-center gap-3">
        {SOCIAL_LINKS.map(({ name, url }) => {
          const Icon = SOCIAL_ICONS[name];
          return (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={name}
              className="flex size-10 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-accent hover:text-foreground"
            >
              <Icon className="size-4" weight="duotone" />
            </a>
          );
        })}
      </Reveal>
    </section>
  );
}
