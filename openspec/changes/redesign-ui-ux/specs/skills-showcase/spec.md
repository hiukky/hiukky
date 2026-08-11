## Purpose

Shows visitors the author's skills organized by category, so the range and shape of their expertise is scannable at a glance instead of buried in an undifferentiated list.

## ADDED Requirements

### Requirement: Skills grouped by category
The system SHALL display the author's skills on the skills page grouped under named categories (for example: Front-end, Back-end & APIs, Testing & Quality, Data, Cloud/DevOps & Observability, Security & Auth, AI Applications, Engineering), rather than as a single flat list.

#### Scenario: Visitor views the skills page
- **WHEN** a visitor loads the skills page
- **THEN** each skill is shown under exactly one category heading, and every category present has at least one skill listed under it
