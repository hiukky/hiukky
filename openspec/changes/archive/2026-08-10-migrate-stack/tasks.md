## 1. Toolchain & runtime

- [x] 1.1 Add `.mise.toml` pinning the Node/Bun versions for the project
- [x] 1.2 Switch package manager to Bun; remove old lockfile, generate `bun.lock`
- [x] 1.3 Update `package.json` scripts (`dev`, `build`, `start`, `postinstall`) to run via Bun

## 2. Lint, format & git hooks

- [x] 2.1 Add `biome.json`, remove `.eslintrc*` and `.prettierrc*`
- [x] 2.2 Remove Babel config and `babel-plugin-styled-components` dependency
- [x] 2.3 Add `lefthook.yml`, remove husky setup (`.husky/`, `postinstall` husky call)
- [x] 2.4 Revise commitlint config (`.commitlintrc.yaml`): confirm Conventional Commits types and finalize the scope-enum against the new `app/` structure (see design.md Open Questions)

## 3. New scaffold

- [x] 3.1 Upgrade Next.js and React to current stable versions
- [x] 3.2 Create the new folder structure from scratch: `app/`, `components/ui`, `components/layout`, `components/theme`, `components/motion`, `lib/`, `messages/`, `i18n/`
- [x] 3.3 Add root layout (`app/[locale]/layout.tsx` — the effective root layout, since all routes live under `[locale]`) and Tailwind CSS config/base stylesheet
- [x] 3.4 Add shadcn/ui base setup (CLI config, `components.json`), without pre-installing components not yet needed
- [x] 3.5 Verify `bun run dev` boots the new scaffold

## 4. Remove old code

- [x] 4.1 Delete `pages/` directory
- [x] 4.2 Delete `src/` entirely (`views`, `layout`, `components`, `theme`, `hooks`) — nothing from it is reused as code
- [x] 4.3 Remove `styled-components`, `@minily/components`, `@minily/hooks`, `@minily/tools`, and `swr` from `package.json`
- [x] 4.4 Remove any now-unused types/config referencing the removed packages

## 5. Theming foundation

- [x] 5.1 Add `@wrksz/themes`, wire `ThemeProvider` (`/next` entrypoint) in the root layout with class-based strategy — switched from `next-themes` mid-implementation after it produced a React 19 console error ("script tag while rendering React component"); `next-themes` is unmaintained, `@wrksz/themes` is an actively maintained drop-in fix (see design.md)
- [x] 5.2 Implement `components/theme/theme-toggle` per `specs/theme-switching/spec.md`
- [x] 5.3 Verify default-to-system-preference and no-flash-on-load behavior
- [x] 5.4 Add Framer Motion dependency and a base `components/motion` config/provider for the redesign change to build on

## 6. Internationalization

- [x] 6.1 Add `next-intl`, configure supported locales (`en`, `pt`) with `en` as default
- [x] 6.2 Move routes under `app/[locale]/`; add proxy (Next.js 16's replacement for middleware) for locale-prefixed routing, browser-preference detection, and English fallback
- [x] 6.3 Set up `messages/en.json` and `messages/pt.json`; populate `en` completely for the 4 routes being built (matches the existing, unchanged site copy), `pt` as structural placeholders (full translation deferred to the redesign change)
- [x] 6.4 Add the site-wide language switcher control per `specs/i18n/spec.md`

## 7. Build routes from scratch

- [x] 7.1 Build `index` route in `app/[locale]/`, new code only, content unchanged from the old site, sourced from `messages/en.json`
- [x] 7.2 Build `about` route in `app/[locale]/`, new code only, content unchanged from the old site, sourced from `messages/en.json`
- [x] 7.3 Build `open-source` route in `app/[locale]/`, new code only, content unchanged from the old site, sourced from `messages/en.json`
- [x] 7.4 Build `skills` route in `app/[locale]/`, new code only, content unchanged from the old site, sourced from `messages/en.json`
- [x] 7.5 Build shared `components/layout/navigation` and `footer`; no `Spinner`/`Orb`/`Tag` equivalent since no route needs one

## 8. Verification

- [x] 8.1 `bun run build` completes with no errors
- [x] 8.2 All 4 routes render with unchanged English content at their locale-prefixed URLs
- [x] 8.3 Theme toggle works end-to-end: manual switch, persistence across reload, system-preference default, no flash
- [x] 8.4 Language switcher, browser-based locale detection, and English fallback all work as specified
- [x] 8.5 Biome, lefthook, and commitlint run correctly on a sample commit
- [x] 8.6 No file from the old `src/`/`pages/` structure remains in the repo

## 9. Follow-up (next pass, not blocking this change)

- [x] 9.1 Swap the icon set to Phosphor Icons (duotone weight, phosphoricons.com) — replaced lucide-react and `@icons-pack/react-simple-icons` entirely; UI icons use `@phosphor-icons/react` (client components), social/brand icons on the Server Component pages use the `@phosphor-icons/react/ssr` subpath (context-free, safe in RSC); shadcn's `components.json` `iconLibrary` updated to `phosphor`
