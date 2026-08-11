## 1. Typography & palette foundation

- [ ] 1.1 Load Space Grotesk (display) and Inter (body) via `next/font/google` in `app/[locale]/layout.tsx`, replace the single-Inter placeholder
- [ ] 1.2 Update `app/globals.css` typography scale (headings use display font, body uses body font)
- [ ] 1.3 Replace shadcn's default palette CSS variables in `app/globals.css` with the chosen light/dark palette

## 2. Motion primitives

- [ ] 2.1 Add `useReducedMotion`-aware fallback to `components/motion/reveal.tsx`
- [ ] 2.2 Add a parallax primitive (`useScroll` + `useTransform`) in `components/motion/`, reduced-motion aware
- [ ] 2.3 Verify `specs/motion-preferences/spec.md` scenarios: motion plays normally by default, is disabled/reduced with `prefers-reduced-motion: reduce`, content stays fully visible either way

## 3. Skills showcase

- [ ] 3.1 Update `messages/en.json`: replace `skills.list` with `skills.categories` (grouped structure per design.md)
- [ ] 3.2 Update `messages/pt.json` accordingly (still placeholder content, matching the new structure)
- [ ] 3.3 Build the categorized grid UI in `app/[locale]/skills/page.tsx`
- [ ] 3.4 Verify `specs/skills-showcase/spec.md` scenario: every skill appears under exactly one category

## 4. Content refresh (English)

- [ ] 4.1 Rewrite `messages/en.json` `about` copy using the author's current profile as source material (personal-site tone, not CV tone)
- [ ] 4.2 Rewrite `messages/en.json` `skills` category copy/intro paragraphs
- [ ] 4.3 Review `home` and `openSource` copy for anything else outdated; update if needed

## 5. Portuguese translation

- [ ] 5.1 Translate the refreshed `messages/en.json` content into real `messages/pt.json` content, replacing all `[PT]` placeholders

## 6. Page redesign

- [ ] 6.1 Redesign `app/[locale]/page.tsx` (home) with the new typography, palette, and motion
- [ ] 6.2 Redesign `app/[locale]/about/page.tsx` with the new typography, palette, and motion
- [ ] 6.3 Redesign `app/[locale]/open-source/page.tsx` with the new typography, palette, and motion
- [ ] 6.4 Redesign `components/layout/navigation.tsx` and `components/layout/footer.tsx`

## 7. Verification

- [ ] 7.1 `bun run build` completes with no errors, all routes stay statically prerendered
- [ ] 7.2 All 4 pages render correctly in both themes and both locales
- [ ] 7.3 Reduced-motion behavior verified (OS-level setting or browser devtools emulation)
- [ ] 7.4 Skills page shows categorized groups, not a flat list
- [ ] 7.5 No `[PT]` placeholder strings remain in `messages/pt.json`
