## Why

`migrate-stack` rebuilt the technical foundation but deliberately shipped the 4 existing pages with unchanged content and no visual redesign (Tailwind defaults, no palette, no typography direction). The site still reads like the old neon-on-dark portfolio in substance even though none of that code remains, and the copy (experience, skills) is out of date. This change delivers the actual visual identity and content refresh the rebuild was for: a minimalist, motion-driven redesign with current, accurate content.

## What Changes

- Full visual redesign: minimalist layout with generous white space, two-family typography (a bold display face for headings, a lighter body face for text)
- New light/dark color palette replacing the current shadcn neutral defaults (exact palette finalized during implementation — see design.md)
- Scroll-driven Framer Motion treatment (parallax layers, scroll-reveal) across all pages, replacing the current static/no-motion layout
- New capability: motion respects the visitor's `prefers-reduced-motion` setting
- Skills page redesigned around a categorized grid (Front-end, Back-end & APIs, Testing & Quality, Data, Cloud/DevOps/Observability, Security & Auth, AI Applications, Engineering), replacing the current flat 30-item list
- Content refresh across `messages/en.json`: updated bio (About), current skill set and categories (sourced from the author's current profile), replacing outdated copy (e.g. "5 years", the old flat skill list)
- `messages/pt.json` gets real Portuguese content, replacing the `[PT]` placeholders shipped by `migrate-stack`
- Home, About, and Open Source pages restyled to the new visual language (no content change beyond what's listed above)

## Capabilities

### New Capabilities
- `skills-showcase`: the skills page displays the author's skills grouped by category, not as a flat list
- `motion-preferences`: scroll-driven motion across the site respects the visitor's reduced-motion preference

### Modified Capabilities
<!-- none: theme-switching and i18n requirements are unchanged by this redesign -->

## Impact

- `app/[locale]/**/page.tsx`: restyled with the new visual language
- `app/globals.css`: palette and typography tokens replaced
- `app/[locale]/layout.tsx`: font loading updated for the two chosen families
- `components/motion/*`: expanded beyond the base `Reveal` primitive for parallax and reduced-motion handling
- `components/layout/navigation.tsx`, `components/layout/footer.tsx`: restyled
- New component(s) for the categorized skills grid
- `messages/en.json`, `messages/pt.json`: content updated (en refreshed to current, pt translated from placeholder to real copy)
