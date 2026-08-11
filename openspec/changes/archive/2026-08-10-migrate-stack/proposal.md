## Why

The site runs on an outdated stack (Next.js 12 / Pages Router, React 17, styled-components, Node + nvmrc, ESLint + Prettier + Babel, husky) that blocks the planned full visual redesign and adds unnecessary maintenance overhead. Migrating the technical foundation first — before any UI/UX work starts — gives the redesign a clean, modern base to build on instead of layering new design work on old tooling.

## What Changes

- Runtime & package manager: Node → **Bun**
- Toolchain version manager: `.nvmrc` → **mise**
- Lint & format: ESLint + Prettier → **Biome** (single tool)
- Transpilation: **Babel removed** — it was only present for `babel-plugin-styled-components`; Next.js's built-in SWC compiler covers the rest
- Git hooks: husky → **lefthook**
- Commit convention: commitlint config (`.commitlintrc.yaml`) revised/hardened
- Framework: Next.js 12 (Pages Router) → **current Next.js, App Router**
- Styling engine: styled-components → **Tailwind CSS**, with **shadcn/ui** for accessible primitives where needed
- Animation: **Framer Motion** introduced as the site's animation/parallax engine
- Theming: **@wrksz/themes** introduced — adds a dark/light mode toggle (new user-facing capability). Chosen over `next-themes` (the more commonly known option) because `next-themes` is unmaintained and its inline theme script triggers a React 19 console error; `@wrksz/themes` is an actively maintained near-drop-in replacement built for this exact stack, using Next's `useServerInsertedHTML` instead of a plain rendered `<script>`
- Internationalization: URL-prefixed i18n (`/en`, `/pt`) introduced — English is the default, complete locale (it matches the existing site copy, unchanged); pt-BR is wired end-to-end but ships with placeholder copy, full translation is done in the redesign change (new user-facing capability)
- **BREAKING**: `@minily/components`, `@minily/hooks`, `@minily/tools` removed, no direct replacement — anything still needed is reimplemented locally on the new stack
- **BREAKING**: existing pages (`index`, `about`, `open-source`, `skills`) are rebuilt from scratch in a new folder structure — no file under the current `src/` is edited or reused as code, only referenced for content parity. Page content/copy is unchanged in this change (visual redesign and content updates are a separate, later change)

## Capabilities

### New Capabilities
- `theme-switching`: site-wide dark/light mode toggle, persisted across visits, respecting the user's system preference by default
- `i18n`: site available in English and pt-BR via URL-prefixed routing, with a language switcher and browser-preference-based default

### Modified Capabilities
<!-- none: existing pages are ported without behavior or content change; that is deferred to the redesign change -->

## Impact

- `package.json`: full dependency/devDependency swap (Next, React versions bumped; styled-components, ESLint, Prettier, Babel, husky, swr, @minily/* removed; Tailwind, shadcn/ui deps, Framer Motion, @wrksz/themes, Biome, lefthook, @phosphor-icons/react added)
- Removed configs: `.eslintrc*`, `.prettierrc*`, `.babelrc*`, husky setup
- New configs: `biome.json`, `lefthook.yml`, `.mise.toml`, `.commitlintrc.yaml` (Tailwind v4 is CSS-first — no `tailwind.config.*` file, theme lives in `app/globals.css`)
- Routing: `pages/` (Pages Router) migrated to `app/` (App Router)
- `src/theme/*`, `src/layout/*`, `src/views/*`, `src/components/*`: rewritten off styled-components and `@minily/*` onto Tailwind/shadcn primitives
- CI/tooling scripts (`postinstall`, `dev`, `build`, `start`) updated for Bun
