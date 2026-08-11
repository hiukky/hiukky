import { Star } from "@phosphor-icons/react/ssr";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { RepoImage } from "@/components/layout/repo-image";
import { Reveal } from "@/components/motion/reveal";
import { getStarredRepositories } from "@/lib/github";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "openSource" });

  return { title: t("pageTitle") };
}

export default async function OpenSourcePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("openSource");
  const repositories = await getStarredRepositories("hiukky");

  return (
    <section className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16 sm:px-10">
      <Reveal>
        <h1 className="text-3xl font-semibold tracking-tight">
          {t("heading")}
        </h1>
        <p className="mt-4 text-foreground/80">{t("paragraph1")}</p>
      </Reveal>
      <Reveal delay={0.1}>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {repositories.map((repo) => (
            <li
              key={repo.node_id}
              className="flex flex-col gap-3 rounded-lg border border-border p-4"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-medium">{repo.name}</span>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm text-foreground/70 hover:text-foreground"
                >
                  {repo.stargazers_count}
                  <Star className="size-3.5" weight="duotone" />
                </a>
              </div>
              <p className="text-sm text-foreground/70">
                {repo.description
                  ? repo.description.replace(/[^a-zA-Z0-9 .,!?-]+/g, " ")
                  : t("noDescription")}
              </p>
              <RepoImage
                src={`/assets/open-source/${repo.name}_${repo.node_id}.svg`}
                alt={repo.name}
              />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
