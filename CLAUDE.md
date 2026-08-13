@AGENTS.md

# hiukky.com

Personal portfolio — single scrolling page per locale (`/pt`, `/en`), built
with Next.js 16 (App Router, Turbopack), React 19, Tailwind v4, `next-intl`,
Framer Motion, and Biome. Package manager is **Bun**, not npm/pnpm/yarn.

## Commands

```bash
bun run dev      # dev server (port 3000, or next free port)
bun run build    # production build
bun run lint     # biome check (lint + format check)
bun run format   # biome format --write
bunx tsc --noEmit  # typecheck
```

## Architecture

- `app/[locale]/page.tsx` — the entire site. One page per locale with
  anchor-linked sections (`#about`, `#experience`, `#stack`, `#writing`),
  not separate routes.
- `app/[locale]/layout.tsx` — fonts (Sora + JetBrains Mono), theme
  provider, nav, skip link, SEO metadata.
- `i18n/routing.ts` — locales are `pt` (default) and `en`. **PT is the only
  real content right now** — `messages/en.json` is a literal copy of
  `messages/pt.json` (see Gotchas), and the language switcher shows EN as
  disabled/"em breve".
- `components/motion/` — reduced-motion-safe Framer Motion primitives
  (`Reveal`, `SectionFade`, `CursorGlow`). See Gotchas before touching these.
- `components/sections/stack-terminal.tsx` — the interactive terminal in
  the Stack section; skill icons come from `lib/tech-icons.ts`.
- `components/ui/` — shadcn/Base UI-generated primitives (`popover.tsx`).
- `app/globals.css` — the whole palette/typography system as CSS custom
  properties (`--bg`, `--fg`, `--muted`, `--faint`, `--accent-dir`, etc.),
  light values in `:root`, dark overrides in `.dark`.

## Gotchas

- **`useReducedMotion()` + SSR**: it can already return the real value on
  the client's first render while SSR always returns the default, causing
  a hydration mismatch. Every motion component gates on a `mounted` state
  that starts `false` on both server and first client paint, only
  upgrading to the animated version in a `useEffect`. Follow the existing
  pattern in `components/motion/` rather than branching on
  `useReducedMotion()` directly in the render output.
- **`useScroll({ target: ref })` goes stale** if the DOM node behind `ref`
  gets unmounted and replaced (e.g. swapping between a plain `<section>`
  and a `<motion.section>`). Always render the same element type; toggle
  behavior via props/state instead.
- **`messages/en.json` mirrors `messages/pt.json`** (`cp messages/pt.json
  messages/en.json`) — EN content is intentionally deferred, not a bug.
- **Tailwind v4 directives in `globals.css`** (`@theme`, `@apply`,
  `@custom-variant`) get flagged as "unknown at-rule" by VS Code's built-in
  CSS validator; `.vscode/settings.json` sets
  `"css.lint.unknownAtRules": "ignore"` to silence the false positives.
- **`simple-icons` doesn't have AWS or Playwright** (removed for trademark
  reasons) — `lib/tech-icons.ts` deliberately falls back to generic
  Phosphor icons for those two; it's not a coverage gap to "fix" by sourcing
  the mark elsewhere.
- **Dev server**: Next 16 uses `.next/dev` (separate from the `.next` build
  cache) and refuses a second concurrent `next dev`. If the dev server
  seems stuck on stale content, check for a stray process before assuming
  a code bug.

# OpenSpec neste projeto

## O que é

CLI de spec-driven development. Cada mudança vira um **change** com artefatos
(proposal, specs delta, design, tasks) antes de qualquer código ser escrito.
Depois de implementado, o change é **arquivado** e a spec delta é fundida em
`openspec/specs/`, que passa a ser a documentação viva do que o sistema faz.

## Estrutura no projeto

```
openspec/
├── config.yaml       # schema, context (stack/convenções), rules, operations
├── specs/            # specs "principais" — vazio até o 1º archive
└── changes/
    ├── <change-em-andamento>/
    └── archive/       # changes já concluídos
```

`openspec/config.yaml` não tem opção para renomear a pasta raiz — o nome
`openspec/` é fixo no CLI (constante `OPENSPEC_ROOT_DIR`), sem override por
env var ou config.

## Comandos (slash commands em `.claude/commands/opsx/`)

| Comando | Quando usar | Mexe em código? |
|---|---|---|
| `/opsx:explore` | Pensar antes de decidir — stack, design, escopo. Sem estrutura fixa, é conversa livre e grounded no código. | Não |
| `/opsx:propose <nome ou descrição>` | Já sabe o que construir — gera change com proposal.md + `specs/<capability>/spec.md` (delta) + design.md + tasks.md de uma vez. | Não (só planejamento) |
| `/opsx:update` | Revisa artefatos de um change existente, mantém coerência entre eles. | Não |
| `/opsx:apply` | Implementa as tasks.md de um change já proposto. | **Sim** |
| `/opsx:archive` | Funde a spec delta em `openspec/specs/`, marca change como concluído, move pra `changes/archive/`. | Não |
| `/opsx:sync` | Funde specs delta nas specs principais sem arquivar o change (uso raro). | Não |

## Fluxo padrão

```
/opsx:explore  →  decidir stack/design/escopo (conversa livre)
      │
      ▼
/opsx:propose "nome-do-change"   →  gera proposal/specs/design/tasks
      │
      ▼
      (revisar; /opsx:update se precisar ajustar)
      │
      ▼
/opsx:apply    →  implementa o código
      │
      ▼
/opsx:archive  →  funde spec, marca como concluído
      │
      ▼
   repete pro próximo change
```

## Regra de ouro: changes pequenos, não um "reescrever tudo"

OpenSpec funciona melhor como fatias pequenas e independentes — cada uma
proposta → implementada → arquivada por si só. Para uma reescrita grande,
dividir por *capability* em vez de um change gigante.

## Quando usar (decisão do agente)

**Usar OpenSpec** (`/opsx:propose` → `/opsx:apply` → `/opsx:archive`) quando o
pedido for:
- Uma feature nova, redesign ou mudança estrutural que vale a pena revisar
  como plano antes de virar código (ex.: a migração de stack e o redesign de
  UI deste projeto — ambos passaram por change).
- Algo com escopo ambíguo o suficiente para que valha a pena travar
  decisões (proposal/design) antes de implementar, especialmente se toca
  várias páginas/componentes ou muda uma capability existente.
- Um pedido do usuário que já referencia explicitamente "change",
  "proposal" ou pede pra planejar antes de mexer no código.

**Pular OpenSpec e implementar direto** quando o pedido for:
- Correção pontual, ajuste de lint/acessibilidade/SEO, polish visual,
  atualização de dependência, ou qualquer coisa de escopo pequeno e óbvio
  o suficiente pra não precisar de proposal/design formal.
- Iteração rápida sobre algo que acabou de ser implementado na própria
  conversa (ex.: "corrige esse warning", "ajusta essa cor").

Na dúvida entre os dois, pergunte ao usuário — não assuma um change grande
silenciosamente, nem burocratize um ajuste pequeno.
