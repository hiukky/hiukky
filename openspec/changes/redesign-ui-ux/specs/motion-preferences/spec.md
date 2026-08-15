## Purpose

Keeps the site's motion — scroll-driven and pointer-driven — from harming visitors who have asked their system to minimize animation, so the redesign's parallax, scroll-reveal, per-section fade, and ambient cursor glow don't come at the cost of accessibility.

## ADDED Requirements

### Requirement: Motion respects reduced-motion preference
The system SHALL disable or substantially reduce motion effects — scroll-driven (parallax, scroll-reveal, per-section fade/translate) and pointer-driven (the ambient cursor-follow glow) — for visitors whose system has `prefers-reduced-motion: reduce` set, while still showing all content.

#### Scenario: Visitor with reduced motion enabled
- **WHEN** a visitor with `prefers-reduced-motion: reduce` set loads a page with scroll-driven and pointer-driven motion
- **THEN** the page's content is fully visible without relying on any motion effect to reveal it, no parallax or per-section fade movement is applied, and the ambient cursor-follow glow is not attached

#### Scenario: Visitor without reduced motion set
- **WHEN** a visitor with no reduced-motion preference loads a page with scroll-driven and pointer-driven motion
- **THEN** the page's parallax, scroll-reveal, per-section fade, and ambient cursor glow all play normally
