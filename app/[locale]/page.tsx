import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { CursorGlow } from "@/components/motion/cursor-glow";
import { Reveal } from "@/components/motion/reveal";
import { SectionFade } from "@/components/motion/section-fade";
import { StackTerminal } from "@/components/sections/stack-terminal";

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

function underline(chunks: ReactNode) {
  return (
    <span
      style={{
        color: "var(--fg)",
        borderBottom: "1px solid var(--line-strong)",
      }}
    >
      {chunks}
    </span>
  );
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

  const tHero = await getTranslations("hero");
  const tAbout = await getTranslations("about");
  const tExperience = await getTranslations("experience");
  const tStack = await getTranslations("stack");
  const tWriting = await getTranslations("writing");

  const experienceItems = tExperience.raw("items") as ExperienceItem[];
  const posts = tWriting.raw("posts") as Post[];

  return (
    <>
      <CursorGlow />

      <section
        id="top"
        className="relative z-[1] flex min-h-dvh items-center py-0"
      >
        <div
          className="hero-grid mx-auto grid w-full max-w-[960px] items-center gap-8 px-[22px] sm:gap-16 sm:px-10"
          style={{ gridTemplateColumns: "1fr 0.6fr" }}
        >
          <div className="hero-text relative z-[2]">
            <Reveal>
              <h1 className="m-0 font-normal text-[clamp(30px,3.6vw,42px)] leading-[1.24] tracking-[-0.025em]">
                {tHero("greeting")}{" "}
                <span style={{ color: "var(--muted)" }}>{tHero("role")}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.05}>
              <p
                className="mt-[22px] text-[15.5px] leading-[1.8]"
                style={{ color: "var(--muted)" }}
              >
                {tHero.rich("bio", { hl, u: underline })}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href="mailto:developermarsh@gmail.com"
                className="ghost-btn mt-8 inline-flex items-center gap-2.5 rounded-full border px-5 py-[11px] text-sm no-underline transition-colors"
                style={{
                  borderColor: "var(--line-strong)",
                  color: "var(--fg)",
                }}
              >
                {tHero("cta")}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden="true"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </a>
            </Reveal>
          </div>

          <Reveal
            delay={0.15}
            className="hero-photo relative aspect-[3/4] overflow-hidden"
          >
            <Image
              src="/assets/personal/romullo.png"
              alt={tHero("role")}
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

      <div className="wrap relative z-[1] mx-auto max-w-[700px] px-[22px] sm:px-10">
        <SectionFade id="about" style={{ padding: "170px 0 0" }}>
          <Reveal>
            <div className="eyebrow mb-7">{tAbout("eyebrow")}</div>
          </Reveal>
          <Reveal delay={0.05}>
            <p
              className="m-0 mb-[18px] text-[16px] leading-[1.9]"
              style={{ color: "var(--muted)" }}
            >
              {tAbout.rich("paragraph1", { hl })}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="m-0 text-[16px] leading-[1.9]"
              style={{ color: "var(--muted)" }}
            >
              {tAbout.rich("paragraph2", { hl })}
            </p>
          </Reveal>
        </SectionFade>

        <SectionFade id="experience" style={{ padding: "170px 0 160px" }}>
          <Reveal>
            <div className="eyebrow mb-5">{tExperience("eyebrow")}</div>
          </Reveal>
          <div className="row-list flex flex-col">
            {experienceItems.map((item, i) => (
              <Reveal key={item.company} delay={i * 0.05}>
                <div
                  className="row-link exp-grid grid gap-6 border-t py-[26px]"
                  style={{
                    gridTemplateColumns: "150px 1fr",
                    borderColor: "var(--line)",
                  }}
                >
                  <span
                    className="pt-[3px] font-mono text-[12.5px]"
                    style={{ color: "var(--faint)" }}
                  >
                    {item.period}
                  </span>
                  <div className="flex flex-col gap-2">
                    <span className="font-medium text-[17px]">{item.role}</span>
                    <span
                      className="text-[13.5px]"
                      style={{ color: "var(--muted2)" }}
                    >
                      {item.company}
                    </span>
                    <span
                      className="mt-0.5 max-w-[520px] text-[14.5px] leading-[1.75]"
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

        <SectionFade id="stack" style={{ padding: "0 0 160px" }}>
          <Reveal>
            <div className="eyebrow mb-[22px]">{tStack("eyebrow")}</div>
          </Reveal>
          <Reveal delay={0.05}>
            <StackTerminal />
          </Reveal>
        </SectionFade>

        <SectionFade id="writing" style={{ padding: "0 0 160px" }}>
          <Reveal>
            <div className="mb-5 flex items-baseline justify-between gap-4">
              <span className="eyebrow">{tWriting("eyebrow")}</span>
              <span
                className="font-mono text-[11px]"
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
                  className="row-link flex items-center justify-between gap-6 border-t py-[22px] no-underline"
                  style={{ borderColor: "var(--line)", color: "var(--fg)" }}
                >
                  <div className="flex flex-col gap-1.5">
                    <span className="font-medium text-[16.5px]">
                      {post.title}
                    </span>
                    <span
                      className="font-mono text-[11.5px]"
                      style={{ color: "var(--faint)" }}
                    >
                      {post.meta}
                    </span>
                  </div>
                  <span
                    className="row-arrow flex-none text-[14px] transition-transform"
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
