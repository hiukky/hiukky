## 1. Typography & palette foundation

- [x] 1.1 Load Sora (weights 300–600) and JetBrains Mono via `next/font/google` in `app/[locale]/layout.tsx`, replacing Space Grotesk/Inter
- [x] 1.2 Replace `app/globals.css` palette CSS variables with the concrete dark/light tokens (bg/fg/muted/muted2/faint/faintest/bright/line/line-strong/panel/hover/accent-dir)
- [x] 1.3 Update `app/globals.css` typography scale for the Sora-based system (single UI face varying by weight + JetBrains Mono utility face)

## 2. Motion primitives

- [x] 2.1 Add a reduced-motion-aware per-section scroll fade/translate primitive (Framer Motion `useScroll`/`useTransform`) in `components/motion/`
- [x] 2.2 Add a reduced-motion-aware pointer-follow ambient glow component in `components/motion/`
- [x] 2.3 Confirm `components/motion/reveal.tsx` covers the prototype's `[data-reveal]` fade-up-on-view treatment
- [x] 2.4 Verify `specs/motion-preferences/spec.md` scenarios: scroll fade, reveal, and ambient glow all disabled/static under `prefers-reduced-motion: reduce`; all play normally otherwise

## 3. Skills showcase (terminal)

- [x] 3.1 Add `skills.categories` to `messages/pt.json` per the prototype's `SKILL_GROUPS` (Front-end, Back-end, Dados, Cloud, IA, Ferramentas)
- [x] 3.2 Build the interactive terminal client component: command input, `ls` / `ls <categoria>` / `cat <categoria>` / `all` / `clear` / `whoami` / `help`, initial `whoami` output on load, suggestion-chip row
- [x] 3.3 Verify `specs/skills-showcase/spec.md` scenarios: every skill under exactly one category, unknown command/category produces an error line, suggestion chips cover every command
- [x] 3.4 Render each skill's real brand glyph (via `simple-icons`) in the terminal's file listing where available, falling back to the generic glyph otherwise

## 4. Page restructure

- [x] 4.1 Rebuild `app/[locale]/page.tsx` as the single scrolling page: hero, Sobre, Experiência, Stack, Escrita sections with in-page anchors (`#about`, `#experience`, `#stack`, `#writing`)
- [x] 4.2 Delete `app/[locale]/about/page.tsx`, `app/[locale]/skills/page.tsx`, `app/[locale]/open-source/page.tsx`
- [x] 4.3 Delete `lib/github.ts` and `components/layout/repo-image.tsx`
- [x] 4.4 Rebuild `components/layout/navigation.tsx`: floating glass-pill nav with anchor links, overflow "•••" menu (mobile nav links, social links, theme selector, language selector)
- [x] 4.5 Rebuild `components/theme/theme-toggle.tsx` as a 3-way segmented control (Escuro/Sistema/Claro) inside the nav overflow menu
- [x] 4.6 Update `components/layout/language-switcher.tsx`: EN option shown disabled / "em breve"
- [x] 4.7 Rebuild `components/layout/footer.tsx`: copyright + Github/LinkedIn links only

## 5. Content

- [x] 5.1 Write `messages/pt.json` content for nav/hero/about/experience/stack/writing/footer, sourced from the prototype's Portuguese copy
- [x] 5.2 Keep `messages/en.json` structurally in sync (same keys); EN content stays deferred/unreachable via the disabled toggle — no new English copy required in this change

## 6. Verification

- [x] 6.1 `bun run build` completes with no errors, `/[locale]` stays statically prerendered
- [x] 6.2 Page renders correctly in dark, system, and light themes, both locales
- [x] 6.3 Reduced-motion behavior verified (scroll fade, ambient glow, reveal all disabled/static) — fixed a hydration mismatch and a scroll-tracking staleness bug found during this check
- [x] 6.4 Terminal commands verified: `ls`, `ls <categoria>`, `cat <categoria>`, `all`, `clear`, `whoami`, `help`, and an unknown command
- [x] 6.5 EN locale toggle shows disabled state; `/en` route still resolves (not linked, not broken)
- [x] 6.6 No dead links anywhere in the app to the removed `/about`, `/skills`, `/open-source` routes
- [x] 6.7 Mobile layout verified (hero reorder, single-column experience/terminal/writing, nav overflow menu, no horizontal overflow)
- [x] 6.8 Nav overflow menu closes on outside click (rebuilt on `components/ui/popover.tsx`, Base UI-backed)
- [x] 6.9 Favicon generated (`app/icon.tsx`) and unused legacy assets removed (`public/assets/personal/{banner,brand,lol}`, `public/assets/open-source`, `public/assets/others`, old `favicon.ico`)
