import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Reveal } from "@/components/motion/reveal";

const BIRTH_YEAR = 1997;

function externalLink(href: string) {
  return (chunks: React.ReactNode) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="underline underline-offset-4"
    >
      {chunks}
    </a>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return { title: t("pageTitle") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("about");
  const age = new Date().getFullYear() - BIRTH_YEAR;

  return (
    <section className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16 sm:px-10">
      <Reveal>
        <Image
          src="/assets/personal/hiukky.png"
          alt="Hiukky"
          width={160}
          height={160}
          className="rounded-full"
        />
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="text-3xl font-semibold tracking-tight">
          {t("heading")}
        </h1>
      </Reveal>
      <Reveal delay={0.2} className="flex flex-col gap-4 text-foreground/80">
        <p>
          {t.rich("paragraph1", {
            age,
            softplan: externalLink("https://www.softplan.com.br/"),
          })}
        </p>
        <p>{t("paragraph2")}</p>
        <p>
          {t.rich("paragraph3", {
            github: externalLink("https://github.com/hiukky"),
            animes: externalLink("https://myanimelist.net/profile/hiukky"),
          })}
        </p>
      </Reveal>
    </section>
  );
}
