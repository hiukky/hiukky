import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations("footer");
  const tSocial = await getTranslations("social");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] pb-20">
      <div className="flex flex-wrap items-center justify-between gap-5 pt-8">
        <span className="font-mono text-[11.5px] text-[var(--faintest)]">
          {t("copyright", { year })}
        </span>
        <div className="flex gap-5 text-[13.5px]">
          <a
            href="https://github.com/hiukky"
            className="text-[var(--muted2)] no-underline transition-colors hover:text-[var(--fg)]"
          >
            {tSocial("github")}
          </a>
          <a
            href="https://www.linkedin.com/in/hiukky/"
            className="text-[var(--muted2)] no-underline transition-colors hover:text-[var(--fg)]"
          >
            {tSocial("linkedin")}
          </a>
        </div>
      </div>
    </footer>
  );
}
