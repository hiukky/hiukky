import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Reveal } from "@/components/motion/reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "skills" });

  return { title: t("pageTitle") };
}

export default async function SkillsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("skills");
  const list = t.raw("list") as string[];

  return (
    <section className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16 sm:px-10">
      <Reveal>
        <h1 className="text-3xl font-semibold tracking-tight">
          {t("heading")}
        </h1>
      </Reveal>
      <Reveal delay={0.1} className="flex flex-col gap-4 text-foreground/80">
        <p>{t("paragraph1")}</p>
        <p>{t("paragraph2")}</p>
      </Reveal>
      <Reveal delay={0.2}>
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {list.map((skill) => (
            <li
              key={skill}
              className="rounded-lg border border-border px-3 py-2 text-center text-sm text-foreground/80"
            >
              {skill}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
