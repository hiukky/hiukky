## Why

`migrate-stack` rebuilt the technical foundation but deliberately shipped the 4 existing pages with unchanged content and no visual redesign (Tailwind defaults, no palette, no typography direction). The site still read like the old neon-on-dark portfolio in substance even though none of that code remained, and the copy (experience, skills) was out of date. A concrete design prototype (Claude Design project "Portfolio website redesign", `Portfolio v3.dc.html`) now exists with a finished visual identity, real copy sourced from the author's current profile, and a different information architecture than the original plan assumed. This revision replaces the earlier open-ended redesign plan with that prototype as the build target.

## What Changes

- Site becomes a **single scrolling page per locale** (hero, Sobre, Experiência, Stack, Escrita, footer) with an in-page anchor nav, replacing the previous 4 separate routes (`/`, `/about`, `/skills`, `/open-source`)
- New typography: **Sora** (weights 300–600) for all UI text, **JetBrains Mono** (400–500) for eyebrows/labels/terminal output/meta text
- New concrete light/dark palette: near-black `#0b0b0c` / off-white `#f6f6f3` grayscale ramp, with a single blue accent (`#7aa2f7` dark / `#2f6fd0` light) reserved for the Stack terminal's directory listings — no other use of color
- Floating glass-pill navigation with anchor links to in-page sections, an overflow "•••" menu (mobile nav links, social links, 3-way theme selector: Escuro/Sistema/Claro, language selector with EN shown as "em breve")
- Scroll-driven motion: per-section fade/translate based on distance from viewport center, staggered reveal-on-scroll for content blocks, and a pointer-follow ambient glow — all respecting `prefers-reduced-motion`
- Skills shown via an **interactive terminal-styled "Stack" component** (`ls`, `cat <categoria>`, `all`, `clear`, `whoami`, `help`) browsing categorized skill groups (Front-end, Back-end, Dados, Cloud, IA, Ferramentas) — replaces both the old flat list and the earlier categorized-grid plan
- New **"Experiência" section**: chronological work history (period / role / company / description)
- New **"Escrita" section**: post listing (title / meta / link), seeded with 3 entries (2 marked "em breve", 1 linking out) — the linked post's own page is out of scope for this change
- Content refresh: hero, about, and experience copy rewritten in Portuguese, sourced from the prototype (already personal-site-toned, not CV-toned). English content is **deferred** — the locale toggle shows EN as "em breve" (disabled); existing next-intl `/en`, `/pt` routing stays in place for future EN work
- **Open Source page removed**: the `/open-source` route, `lib/github.ts`, and the `RepoImage` component are deleted — no GitHub-starred-repos showcase in this change

## Capabilities

### New Capabilities
<!-- none: Experience and Writing are static content sections with no scenario-worthy behavior of their own -->

### Modified Capabilities
- `skills-showcase`: skills are now browsed through an interactive terminal-style component (commands), not a static categorized grid
- `motion-preferences`: reduced-motion handling now also covers the pointer-follow ambient glow, not only scroll-driven parallax/reveal

## Impact

- `app/[locale]/page.tsx`: rebuilt as the single-page layout (hero, about, experience, stack, writing)
- `app/[locale]/about/page.tsx`, `app/[locale]/skills/page.tsx`, `app/[locale]/open-source/page.tsx`: **deleted** (content merged into `page.tsx` sections, except open-source which is dropped entirely)
- `lib/github.ts`, `components/layout/repo-image.tsx`: **deleted** (only used by the removed open-source page)
- `app/globals.css`: palette and typography tokens replaced with the prototype's concrete values
- `app/[locale]/layout.tsx`: font loading switched to Sora + JetBrains Mono; outer chrome simplified (no more persistent multi-page nav/footer wrapper)
- `components/layout/navigation.tsx`: rebuilt as the floating anchor-link pill nav with overflow menu
- `components/layout/footer.tsx`: simplified to copyright + Github/LinkedIn links
- `components/layout/language-switcher.tsx`: EN option shown disabled / "em breve"
- `components/theme/theme-toggle.tsx`: becomes a 3-way segmented control (dark/system/light) inside the nav overflow menu
- New component(s): interactive skills terminal (Stack section), ambient cursor-glow element, per-section scroll-fade primitive
- `messages/en.json`, `messages/pt.json`: restructured around the new sections; `pt.json` gets full real content, `en.json` stays as-is/deferred since EN remains unreachable via the disabled toggle
