import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { CursorGlow } from "@/components/motion/cursor-glow";
import { Reveal } from "@/components/motion/reveal";
import { SectionFade } from "@/components/motion/section-fade";
import { TypingName } from "@/components/motion/typing-name";
import { StackTerminal } from "@/components/sections/stack-terminal";
import { COMPANY_LINKS } from "@/lib/company-links";
import { SITE_URL } from "@/lib/site-config";
import { SOCIAL_LINKS } from "@/lib/social-links";

type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  description: string;
};

type Post = { title: string; meta: string; href: string };

function hl(chunks: ReactNode) {
  return <span className="hl">{chunks}</span>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return { title: t("title") };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tMeta = await getTranslations("meta");
  const tHero = await getTranslations("hero");
  const tAbout = await getTranslations("about");
  const tExperience = await getTranslations("experience");
  const tStack = await getTranslations("stack");
  const tWriting = await getTranslations("writing");

  const experienceItems = tExperience.raw("items") as ExperienceItem[];
  const posts = tWriting.raw("posts") as Post[];

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Romullo Sousa",
    alternateName: "hiukky",
    jobTitle: tHero("role"),
    description: tMeta("description"),
    url: `${SITE_URL}/${locale}`,
    image: `${SITE_URL}/assets/personal/romullo.png`,
    sameAs: SOCIAL_LINKS.filter((link) => link.name !== "email").map(
      (link) => link.url,
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static server-generated JSON-LD, no user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <CursorGlow />

      <section
        id="top"
        className="relative z-1 flex min-h-dvh items-center py-0"
      >
        <div className="hero-grid mx-auto grid w-full max-w-260 grid-cols-[1fr_0.6fr] items-center gap-16 px-10 max-[720px]:grid-cols-1 max-[720px]:gap-4 max-[720px]:px-5.5">
          <a
            href="#top"
            className="hidden font-brand font-semibold text-lg tracking-tighter no-underline max-[720px]:order-first max-[720px]:block"
          >
            hiukky
          </a>
          <div className="hero-text relative z-2">
            <Reveal>
              <h1 className="m-0 font-normal text-[clamp(1.875rem,3.6vw,2.625rem)] leading-[1.24] tracking-tight">
                {tHero("greeting")} <TypingName alias="hiukky" name="Romullo" />
              </h1>
            </Reveal>
            <Reveal delay={0.05}>
              <p
                className="m-0 mt-2 font-normal text-[clamp(1.625rem,3.2vw,2.25rem)] leading-[1.24] tracking-tight"
                style={{ color: "var(--muted)" }}
              >
                {tHero("role")}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p
                className="m-0 mt-5.5 mb-4.5 text-[0.96875rem] leading-[1.8] max-[720px]:mt-4 max-[720px]:mb-2 max-[720px]:text-[0.9375rem] max-[720px]:leading-normal"
                style={{ color: "var(--muted)" }}
              >
                {tHero("bio1")}
              </p>
            </Reveal>
            <Reveal delay={0.075}>
              <p
                className="m-0 text-[0.96875rem] leading-[1.8] max-[720px]:text-[0.9375rem] max-[720px]:leading-normal"
                style={{ color: "var(--muted)" }}
              >
                {tHero.rich("bio2", { hl })}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href="mailto:developermarsh@gmail.com"
                className="cta-btn mt-8 inline-flex items-center gap-2.5 rounded-full px-6 py-3 font-medium text-sm no-underline transition-opacity hover:opacity-85 max-[720px]:mt-4.5"
                style={{ background: "var(--fg)", color: "var(--bg)" }}
              >
                <span
                  className="font-mono text-[0.9375rem]"
                  style={{ color: "var(--accent-dir)" }}
                  aria-hidden
                >
                  ❯
                </span>
                {tHero("cta")}
                <span className="cta-cursor" aria-hidden />
              </a>
            </Reveal>
          </div>

          <Reveal
            delay={0.15}
            className="hero-photo relative aspect-3/4 overflow-hidden max-[720px]:order-first max-[720px]:w-38"
          >
            <Image
              src="/assets/personal/romullo.png"
              alt={tHero("photoAlt")}
              fill
              priority
              sizes="(min-width: 640px) 320px, 240px"
              className="object-cover object-[center_18%] grayscale contrast-[1.08]"
            />
            <div
              className="photo-fade absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 78% 82% at 50% 42%, transparent 45%, var(--bg) 100%)",
              }}
            />
            <div
              className="photo-fade absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, var(--bg) 0%, transparent 38%)",
              }}
            />
          </Reveal>
        </div>
      </section>

      <div className="wrap relative z-1 mx-auto max-w-200 px-10 max-[720px]:px-5.5">
        <SectionFade
          id="about"
          className="pt-42.5 pb-0 max-[720px]:pt-22.5 max-[720px]:pb-22.5"
        >
          <Reveal>
            <h2 className="eyebrow m-0 mb-7">{tAbout("eyebrow")}</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p
              className="m-0 mb-4.5 max-w-[65ch] text-base leading-[1.9]"
              style={{ color: "var(--muted)" }}
            >
              {tAbout.rich("paragraph1", { hl })}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="m-0 mb-4.5 max-w-[65ch] text-base leading-[1.9]"
              style={{ color: "var(--muted)" }}
            >
              {tAbout.rich("paragraph2", { hl })}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p
              className="m-0 mb-4.5 max-w-[65ch] text-base leading-[1.9]"
              style={{ color: "var(--muted)" }}
            >
              {tAbout.rich("paragraph3", { hl })}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="m-0 mb-4.5 max-w-[65ch] text-base leading-[1.9]"
              style={{ color: "var(--muted)" }}
            >
              {tAbout.rich("paragraph4", { hl })}
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p
              className="m-0 max-w-[65ch] text-base leading-[1.9]"
              style={{ color: "var(--muted)" }}
            >
              {tAbout.rich("paragraph5", { hl })}
            </p>
          </Reveal>
        </SectionFade>

        <SectionFade
          id="experience"
          className="pt-42.5 pb-40 max-[720px]:pt-22.5 max-[720px]:pb-22.5"
        >
          <Reveal>
            <h2 className="eyebrow m-0 mb-5">{tExperience("eyebrow")}</h2>
          </Reveal>
          <div className="row-list flex flex-col">
            {experienceItems.map((item, i) => (
              <Reveal key={item.company} delay={i * 0.05}>
                <div className="exp-grid grid grid-cols-[150px_1fr] gap-6 border-t border-[var(--line)] py-6.5 max-[720px]:grid-cols-1 max-[720px]:gap-1.5">
                  <span
                    className="pt-0.75 font-mono text-[0.78125rem]"
                    style={{ color: "var(--faint)" }}
                  >
                    {item.period}
                  </span>
                  <div className="flex flex-col gap-2">
                    <span className="font-medium text-[1.0625rem]">
                      {item.role}
                    </span>
                    {COMPANY_LINKS[item.company] ? (
                      <a
                        href={COMPANY_LINKS[item.company]}
                        target="_blank"
                        rel="noreferrer"
                        className="row-link inline-flex w-fit items-center gap-1.5 text-[0.84375rem] no-underline"
                        style={{ color: "var(--muted2)" }}
                      >
                        {item.company}
                        <span
                          className="row-arrow flex-none text-[0.6875rem] transition-transform"
                          style={{ color: "var(--faint)", opacity: 0.7 }}
                        >
                          ↗
                        </span>
                      </a>
                    ) : (
                      <span
                        className="text-[0.84375rem]"
                        style={{ color: "var(--muted2)" }}
                      >
                        {item.company}
                      </span>
                    )}
                    <span
                      className="mt-0.5 max-w-130 text-[0.90625rem] leading-[1.75]"
                      style={{ color: "var(--muted2)" }}
                    >
                      {item.description}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </SectionFade>

        <SectionFade
          id="stack"
          className="pt-0 pb-40 max-[720px]:pt-22.5 max-[720px]:pb-22.5"
        >
          <Reveal>
            <h2 className="eyebrow m-0 mb-5.5">{tStack("eyebrow")}</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <StackTerminal />
          </Reveal>
        </SectionFade>

        <SectionFade
          id="writing"
          className="pt-0 pb-40 max-[720px]:pt-22.5 max-[720px]:pb-22.5"
        >
          <Reveal>
            <div className="mb-5 flex items-baseline justify-between gap-4">
              <h2 className="eyebrow m-0">{tWriting("eyebrow")}</h2>
              <span
                className="font-mono text-[0.6875rem]"
                style={{ color: "var(--faintest)" }}
              >
                {tWriting("comingSoon")}
              </span>
            </div>
          </Reveal>
          <div className="row-list flex flex-col">
            {posts.map((post, i) => (
              <Reveal key={post.title} delay={i * 0.05}>
                <a
                  href={post.href}
                  className="row-link flex items-center justify-between gap-6 border-t py-5.5 no-underline"
                  style={{ borderColor: "var(--line)", color: "var(--fg)" }}
                >
                  <div className="flex flex-col gap-1.5">
                    <span className="font-medium text-[1.03125rem]">
                      {post.title}
                    </span>
                    <span
                      className="font-mono text-[0.71875rem]"
                      style={{ color: "var(--faint)" }}
                    >
                      {post.meta}
                    </span>
                  </div>
                  <span
                    className="row-arrow flex-none text-sm transition-transform"
                    style={{ color: "var(--faint)", opacity: 0.7 }}
                  >
                    ↗
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </SectionFade>

        <Footer />
      </div>
    </>
  );
}
