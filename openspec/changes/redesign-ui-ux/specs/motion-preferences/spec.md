## Purpose

Keeps the site's scroll-driven motion from harming visitors who have asked their system to minimize animation, so the redesign's parallax and reveal effects don't come at the cost of accessibility.

## ADDED Requirements

### Requirement: Motion respects reduced-motion preference
The system SHALL disable or substantially reduce scroll-driven motion effects (parallax, scroll-reveal animations) for visitors whose system has `prefers-reduced-motion: reduce` set, while still showing all content.

#### Scenario: Visitor with reduced motion enabled
- **WHEN** a visitor with `prefers-reduced-motion: reduce` set loads a page with scroll-driven motion
- **THEN** the page's content is fully visible without relying on the motion effect to reveal it, and no parallax movement is applied

#### Scenario: Visitor without reduced motion set
- **WHEN** a visitor with no reduced-motion preference loads a page with scroll-driven motion
- **THEN** the page's parallax and scroll-reveal effects play normally
