## Context

See proposal.md - Why. `migrate-stack` left a working, statically-generated, themed, i18n-ready scaffold with 4 routes ported but visually unstyled beyond shadcn's neutral defaults, and a base Framer Motion `Reveal` primitive (`components/motion/reveal.tsx`) with no real parallax behind it yet. A finished design prototype (Claude Design project "Portfolio website redesign", `Portfolio v3.dc.html`) now exists and replaces the earlier open-ended design direction with concrete decisions.

## Goals / Non-Goals

**Goals:**
- Ship the prototype's visual identity and structure faithfully: single-page, anchor-section layout per locale (hero, about, experience, stack, writing), in both themes
- Bring page content (bio, experience, skills) up to date with the author's current profile, in Portuguese
- Keep the site statically prerendered — motion and theming must not force dynamic rendering (see `migrate-stack`'s design.md for why that matters)

**Non-Goals:**
- No routes beyond the existing locale root (`/[locale]`) — `/about`, `/skills`, `/open-source` are **removed**, not restyled in place
- No GitHub-starred-repos showcase — the open-source page and its data fetching are removed in this change
- No blog post page/route — the "Escrita" section is a listing only; the linked post's own page is future work
- No English copy for the new sections — EN stays reachable via URL but is shown as "em breve" (disabled) in the UI; full EN translation is a future change
- No 3D/WebGL — explicitly ruled out during exploration in favor of Framer Motion-driven parallax and scroll-reveal
- No icon set change — Phosphor Icons (duotone) from `migrate-stack` stays as-is where still used

## Decisions

- **Typography: Sora + JetBrains Mono.** Sora (weights 300–600, self-hosted via `next/font/google`) is the single UI typeface for both headings and body copy, varying by weight rather than switching families. JetBrains Mono (400–500) is the utility face: eyebrows/section labels, the terminal output in the Stack section, and small meta text (dates, post meta). This replaces the earlier Space Grotesk (display) + Inter (body) decision — the prototype's own type system is the source of truth now.
- **Palette: concrete, no longer open.** Values taken directly from the prototype (dark-first):
  - Dark: `--bg:#0b0b0c` `--fg:#f4f4f2` `--muted:#9b9ba1` `--muted2:#8b8b92` `--faint:#5e5e66` `--faintest:#4d4d55` `--bright:#c3c3c8` `--line:rgba(255,255,255,.07)` `--line-strong:rgba(255,255,255,.2)` `--panel:rgba(24,24,27,.9)` `--hover:rgba(255,255,255,.06)` `--accent-dir:#7aa2f7`
  - Light: `--bg:#f6f6f3` `--fg:#141419` `--muted:#5a5a63` `--muted2:#6a6a73` `--faint:#8b8b92` `--faintest:#a1a1a8` `--bright:#3a3a42` `--line:rgba(0,0,0,.1)` `--line-strong:rgba(0,0,0,.22)` `--panel:rgba(255,255,255,.88)` `--hover:rgba(0,0,0,.05)` `--accent-dir:#2f6fd0`
  - The blue accent (`--accent-dir`) is used in exactly one place — the Stack terminal's directory-listing color — keeping the rest of the palette disciplined grayscale, matching the minimalist goal.
- **Motion: Framer Motion, scroll-linked and pointer-linked, not basic CSS.** Three techniques, implemented with `framer-motion` (the prototype itself uses raw `requestAnimationFrame` + inline style mutation; we keep the earlier "Framer Motion over hand-rolled JS" decision and reproduce the same visual behavior with it):
  - Scroll-reveal (`Reveal`/`Stagger` primitives) for content entering the viewport, matching the prototype's `[data-reveal]` fade-up-on-view treatment
  - Per-section scroll-linked fade/translate (opacity + translateY driven by a section's distance from the viewport center), via `useScroll`/`useTransform`
  - A pointer-follow ambient glow (radial gradient tracking the cursor), attached only when motion isn't reduced
- **Reduced motion: `useReducedMotion` from `framer-motion`.** Every reveal/scroll-fade/ambient-glow component checks it: reveals render fully visible and static, scroll-fade sections render at rest, and the ambient-glow listener is never attached. Broader than the original decision (which only covered scroll-driven effects) — see `motion-preferences` spec revision.
- **Skills data: unchanged shape, new browsing UX.** `skills.categories` stays `{ name, items: string[] }[]` in `messages/*.json` (Front-end, Back-end, Dados, Cloud, IA, Ferramentas per the prototype's `SKILL_GROUPS`), but the skills-showcase spec is revised: skills are browsed through a terminal-style component (`ls`, `cat <categoria>`, `all`, `clear`, `whoami`, `help`) instead of a static category grid.
- **Structure: single scrolling page per locale.** Floating glass-pill nav (backdrop-blur, anchor links to `#about` `#experience` `#stack` `#writing`) with an overflow menu for mobile nav links, social links, the 3-way theme selector, and the language selector (EN disabled). Sections: Hero → Sobre → Experiência → Stack → Escrita → Footer.
- **Content source: resolved.** Hero/about/experience copy comes directly from the prototype's Portuguese copy (already personal-site-toned, sourced from the author's current profile), reused as `messages/pt.json` content rather than rewritten from scratch. English translation is deferred per the non-goals above.
- **Open Source: removed, not migrated.** `lib/github.ts` and `components/layout/repo-image.tsx` are deleted along with the route. Not replaced by anything in this change.
- **Writing: listing only.** Three entries seeded from the prototype (2 "em breve" placeholders, 1 real title linking to `#` for now). No blog post route/page in this change.

## Risks / Trade-offs

- [Risk] Two web fonts (Sora + JetBrains Mono, several weights) add page weight → [Mitigation] `next/font` subsets and self-hosts only the weights actually used; still lighter than loading a full Google Fonts stylesheet the old site used.
- [Risk] Per-section scroll-fade and the pointer-follow glow implemented carelessly can hurt Core Web Vitals (layout shift, jank) → [Mitigation] transform/opacity-only animations (GPU-friendly, no layout impact); the glow listener updates a single element's transform directly rather than triggering React state/re-renders, matching the prototype's own approach; both are skipped entirely under reduced motion.
- [Risk] Removing the Open Source page drops a previously-shipped capability → [Mitigation] explicit, confirmed decision (not an oversight) — GitHub starred-repos showcase can return as its own change later if wanted.
- [Risk] Terminal-style skills browsing is less scannable at a glance than a grid (has to be discovered/interacted with) → [Mitigation] the terminal renders an initial `whoami` output on load so the page isn't empty, and a suggestion-chip row surfaces the available commands without typing.

## Open Questions

None outstanding — palette, typography, content source, and page structure are all resolved by the prototype. The linked blog post page remains explicitly out of scope (see Non-Goals) with no target date yet.
