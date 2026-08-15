## Context

See proposal.md - Why. Current state: Next.js 12 (Pages Router), React 17, styled-components, swr, Node via `.nvmrc`, ESLint + Prettier + Babel, husky, and three unmaintained personal packages (`@minily/components`, `@minily/hooks`, `@minily/tools`) used across `src/theme`, `src/layout`, `src/views`, `src/components`. The site is small and static in nature: 4 routes (`index`, `about`, `open-source`, `skills`), no server-side data fetching identified beyond static content.

This change is infrastructure-only: it ports the 4 existing routes onto the new stack with unchanged content/copy, and adds one new user-facing capability (theme switching). The visual redesign and content updates are a separate, later change that builds on top of this one.

## Goals / Non-Goals

**Goals:**
- Replace every piece of runtime, tooling, framework, and styling infrastructure with the chosen modern equivalents (see Decisions)
- Rebuild the 4 existing routes from scratch in a new folder structure, with zero content/copy change
- End this change with a fully functional, clean scaffold — new architecture, i18n and theming wired end-to-end, ready for the redesign change to build the actual visual design on top
- Leave the repo in a state where the redesign change can start immediately, with Tailwind, shadcn/ui, Framer Motion, and the theme provider already wired

**Non-Goals:**
- No visual/UI redesign of any page (deferred to the redesign change)
- No content/copy updates (deferred to the redesign change)
- No new pages or sections
- No complete pt-BR translation of page content — the existing site copy is in English, so the i18n mechanism (routing, switcher, detection) is fully wired and English ships complete (unchanged); pt-BR content is structurally present but placeholder, finished in the redesign change alongside the rest of the content work

## Decisions

- **Bun** as runtime and package manager (replaces Node + npm/yarn). Faster installs and dev startup; native TS execution. Alternative considered: keep npm — rejected, contradicts the explicit goal of a full tooling refresh.
- **mise** for toolchain version pinning (`.mise.toml`, replaces `.nvmrc`). Already the version manager in use on the maintainer's machine. Alternative: asdf — not chosen, no reason to introduce a second tool.
- **Biome** replaces ESLint + Prettier. One binary, one config, faster, less config drift between lint and format rules.
- **Babel removed** outright — its only reason to exist today is `babel-plugin-styled-components`; once styled-components is gone, Next's built-in SWC compiler covers transpilation.
- **lefthook** replaces husky for git hooks. Single YAML config, faster hook execution, no separate shell scripts per hook.
- **commitlint** config revised: keep Conventional Commits types (feat/fix/chore/refactor/docs/style/test/perf/ci/build/revert), add a scope-enum matching the new top-level structure (exact scope list finalized during implementation — see Open Questions).
- **Next.js, current stable release, App Router** (replaces Pages Router). Enables Server Components/layouts and is the baseline shadcn/ui and current Tailwind tooling assume.
- **Tailwind CSS**, with **shadcn/ui** pulled in per-component only where accessible primitives are actually needed (not installed as a full UI kit). Tailwind's CSS-variable-based theming pairs directly with the theme provider's class strategy.
- **Framer Motion** added now as a dependency and wired with a base provider/config, even though the redesign change is what will actually build parallax/motion — this avoids the redesign change having to touch foundation setup.
- **`@wrksz/themes`** (`/next` entrypoint for the `ThemeProvider`, `/client` entrypoint for the `useTheme` hook), class-based strategy (`class` on `<html>`), matching Tailwind's `dark:` variant. Alternative considered: `next-themes` (the more commonly used option) — rejected during implementation after it produced a real React 19 console error ("Encountered a script tag while rendering React component"), a known, unresolved incompatibility since `next-themes` has been unmaintained since March 2025. `@wrksz/themes` is a near-drop-in, actively maintained replacement that avoids the same class of bug by injecting its anti-flash script via Next's `useServerInsertedHTML` instead of rendering a plain `<script>` element in the component tree. Configured with `storage="localStorage"` (not `"cookie"`/`"hybrid"`) specifically to keep pages statically prerenderable — the cookie-reading modes force Next to treat every route as dynamic.
- **`@minily/*` removed with no drop-in replacement.** The packages are unmaintained; any functionality still needed is reimplemented locally on Tailwind/shadcn primitives rather than kept as a dependency on unclear-maintenance personal packages.
- **`swr` removed.** No client-side data fetching was identified in the current 4 static routes; if the redesign change introduces a page that needs it, it can be re-added then.
- **Full rewrite, not an incremental port.** Nothing under the current `src/` (`views`, `layout`, `components`, `theme`) is edited or reused as code — it is read only as a reference for content parity. A new folder structure is designed from scratch for the App Router:
  ```
  app/[locale]/            route segments (layout.tsx, page.tsx per route)
  components/ui/           shadcn primitives, generated on demand
  components/layout/       Navigation, Footer
  components/theme/        ThemeToggle
  components/motion/       Framer Motion base wrappers
  lib/                     utils
  messages/                pt.json, en.json
  i18n/                    next-intl config/routing
  ```
  Old code is deleted early (right after the new scaffold exists), not left in place until final cleanup, to avoid ambiguity between "edit the old file" and "write the new one" during implementation.
- Routing: each existing URL is rebuilt from scratch under `app/[locale]/...` as a Server Component by default, only switching to a Client Component where interactivity (e.g., the theme toggle) requires it. URLs are preserved, nested under the `[locale]` segment for i18n (see below) — `/about` becomes `/en/about` (default) and `/pt/about`.
- **i18n via `next-intl`** with URL-prefixed locales (`/en`, `/pt`), English as the default and only complete locale in this change — the existing site copy is English, so this is what "content unchanged" actually maps to. Alternative considered: cookie/no-prefix switching — rejected, worse for SEO and unshareable per-language links, both valuable for a portfolio site aimed at international recruiters. Alternative considered: Next.js's legacy built-in i18n routing — rejected, it targets the Pages Router; `next-intl` is the current App Router-first standard. Locale detection falls back to the browser's `Accept-Language` when no explicit choice (URL/cookie) is present, defaulting to English when the browser language isn't supported.

## Risks / Trade-offs

- [Risk] A full stack swap in one change produces a large diff → [Mitigation] Scope strictly to infra + verbatim page porting (no visual changes bundled in), broken into the granular steps in tasks.md.
- [Risk] Bun has occasional compatibility gaps with Node-oriented tooling → [Mitigation] Validate `bun install`, `bun run dev`, and `bun run build` early in the task sequence; fall back to invoking a specific tool via `bunx` if needed.
- [Risk] Removing `swr` could block a page that turns out to need client data fetching → [Mitigation] None of the 4 current routes fetch client-side data today; re-introduce only if a concrete need appears later.
- [Risk] The theme provider's default light/dark tokens may not match the palette the redesign change wants → [Mitigation] This change only wires the mechanism (toggle, persistence, system default); actual color tokens are owned and set by the redesign change.
- [Risk] pt-BR locale ships with placeholder copy, not real translations → [Mitigation] Explicitly scoped as a non-goal here; routing, switcher, and detection are fully functional and tested, only the pt-BR strings themselves are stand-ins until the redesign change fills them in.

## Migration Plan

1. Add `.mise.toml`, switch local/dev tooling to Bun, regenerate the lockfile.
2. Add `biome.json`, `lefthook.yml`, revised `.commitlintrc.yaml`; remove ESLint/Prettier/Babel configs and husky setup.
3. Scaffold current Next.js with App Router (`app/` directory, root layout), Tailwind config, shadcn/ui base setup, `@wrksz/themes` provider, Framer Motion dependency.
4. Port the 4 existing routes into `app/` with unchanged content, removing styled-components and `@minily/*` usage as each is ported.
5. Delete `pages/`, old `src/theme` styled-components setup, and `@minily/*` dependencies once nothing references them.
6. Verify `bun run build` succeeds and the site renders the same content as before, with the new theme toggle working (system default, manual switch, persistence, no flash).

Rollback: this is a personal site with no production deploy gate in scope here — rollback is a plain `git revert` of the change's commit range if the migration turns out to block further work.

## Open Questions

- Exact commitlint scope-enum list (which top-level folder/domain names to allow as scopes) — finalize once the final `app/` structure from step 3 above exists; does not affect the specs, the chosen tools, or the task breakdown.
