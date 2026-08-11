## Context

See proposal.md - Why. `migrate-stack` left a working, statically-generated, themed, i18n-ready scaffold with 4 routes ported but visually unstyled beyond shadcn's neutral defaults, and a base Framer Motion `Reveal` primitive (`components/motion/reveal.tsx`) with no real parallax behind it yet. This change is the first one that actually touches visual identity and page copy.

## Goals / Non-Goals

**Goals:**
- Ship a minimalist, motion-driven visual identity across all 4 pages, in both locales, in both themes
- Bring page content (bio, skills) up to date with the author's current profile
- Keep the site statically prerendered — motion and theming must not force dynamic rendering (see `migrate-stack`'s design.md for why that matters)

**Non-Goals:**
- No new pages or routes (still `/`, `/about`, `/skills`, `/open-source`)
- No 3D/WebGL — explicitly ruled out during exploration in favor of Framer Motion-driven parallax and scroll-reveal
- No icon set change — Phosphor Icons (duotone) from `migrate-stack` stays as-is

## Decisions

- **Typography: two families.** A bold display face for headings and a lighter face for body copy, loaded via `next/font/google` (self-hosted, no external request, same pattern as the current Inter placeholder). Concrete pick: **Space Grotesk** (display/headings) + **Inter** (body) — both free, both have the weight range needed (Space Grotesk goes bold/geometric for headings, Inter has the light weights needed for long-form body text). This is a reasonable default, not a hard constraint: swappable in `app/[locale]/layout.tsx` without touching any other file if it doesn't land right once seen in the browser.
- **Palette: left open.** The user is still gathering visual references. Rather than block this proposal on that, the palette is an implementation decision made at apply time, using CSS variables in `app/globals.css` (already the mechanism shadcn/Tailwind v4 use) so it stays a one-file change regardless of what's chosen. Direction going in: minimalist, generous negative space, not a return to the old neon-on-dark identity.
- **Motion: Framer Motion, scroll-linked, not basic CSS.** Two techniques, both already available via the installed `framer-motion` dependency:
  - Scroll-reveal (extending the existing `Reveal` primitive) for content entering the viewport
  - Parallax via `useScroll` + `useTransform` for layered depth on scroll, applied selectively (hero-level moments, not every element) to keep the minimalist goal intact
  Alternative considered: CSS-only scroll-driven animations (`animation-timeline: scroll()`) — rejected, weaker browser support today and the user explicitly asked for Framer Motion over "basic CSS".
- **Reduced motion: `useReducedMotion` from `framer-motion`.** Every parallax/reveal component checks it and falls back to static, fully-visible content — satisfies `motion-preferences` without a separate mechanism per component.
- **Skills data: categorized structure in `messages/*.json`.** `skills.categories` becomes an array of `{ name, skills: string[] }` (replacing the current flat `skills.list`) so the categorization lives in the same i18n-aware message files as everything else, no separate data file.
- **Content source:** the author's CV/career-inventory content (already reviewed during exploration) is the reference for updated bio and skill categories — used as source material to rewrite `messages/en.json`, not copied verbatim (site copy stays personal-site tone, not CV tone).

## Risks / Trade-offs

- [Risk] Two web fonts (plus the two weight ranges) add page weight → [Mitigation] `next/font` subsets and self-hosts only the weights actually used; still lighter than loading a full Google Fonts stylesheet the old site used.
- [Risk] Parallax implemented carelessly can hurt Core Web Vitals (layout shift, jank) → [Mitigation] Use transform/opacity-only animations (GPU-friendly, no layout impact), scope parallax to a few deliberate moments rather than every section.
- [Risk] Palette left open could stall implementation if references never arrive → [Mitigation] A sensible neutral default (current shadcn tokens) stays in place until replaced; apply can proceed on structure/motion/content and swap the palette last without blocking on it.

## Open Questions

- Exact color palette (light + dark) — pending references the user is gathering. Does not change the specs, the chosen approach, or the task breakdown: it is a CSS-variable swap in `app/globals.css` regardless of the values chosen.
