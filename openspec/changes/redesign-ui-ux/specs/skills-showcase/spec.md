## Purpose

Shows visitors the author's skills organized by category through an interactive, developer-native browsing experience, so the range and shape of their expertise is explorable rather than buried in an undifferentiated list.

## ADDED Requirements

### Requirement: Skills grouped by category, browsed via a terminal-style component
The system SHALL display the author's skills grouped under named categories (Front-end, Back-end, Dados, Cloud, IA, Ferramentas) inside an interactive terminal-style component in the Stack section, rather than as a single flat list or a static grid. The component SHALL accept these commands: `ls` (list category names), `ls <categoria>` / `cat <categoria>` (list skills in that category), `all` (list every category and its skills), `clear` (clear terminal output), `whoami` (show the author's one-line role summary), and `help` (list available commands). An unrecognized command SHALL produce an error line rather than silently doing nothing.

#### Scenario: Visitor loads the Stack section
- **WHEN** a visitor loads the page and reaches the Stack section
- **THEN** the terminal shows an initial `whoami` output by default, and every skill category present has at least one skill listed under it when browsed

#### Scenario: Visitor lists a category's skills
- **WHEN** a visitor runs `ls <categoria>` or `cat <categoria>` for a category that exists
- **THEN** every skill shown belongs to exactly one category, and it is the one requested

#### Scenario: Visitor requests an unknown category or command
- **WHEN** a visitor runs `ls`/`cat` with a category name that doesn't exist, or any other unrecognized command
- **THEN** the terminal prints an error line naming the unrecognized input, and does not crash or clear existing output

#### Scenario: Visitor without a keyboard-friendly interaction
- **WHEN** a visitor doesn't type a command
- **THEN** a row of suggestion chips (one per available command, including one per category) lets them run any command without typing
