## Purpose

Lets visitors read the site in their preferred language, so international recruiters and readers can access content in English while pt-BR is available for Portuguese-speaking visitors.

## ADDED Requirements

### Requirement: Site available in multiple languages via URL-prefixed routing
The system SHALL serve every page under a locale-prefixed URL for each supported language (English and pt-BR), with English as the default locale.

#### Scenario: Visitor accesses a locale-prefixed URL
- **WHEN** a visitor navigates to a page URL prefixed with a supported locale (e.g. `/pt/about`)
- **THEN** the page renders in that locale

#### Scenario: Visitor accesses an unprefixed URL
- **WHEN** a visitor navigates to a page URL with no locale prefix (e.g. `/about`)
- **THEN** the system resolves it to the appropriate locale-prefixed URL per the default-locale rules below

### Requirement: Site-wide language switcher
The system SHALL provide a control, available on every page, that lets the user switch the site's language between the supported locales.

#### Scenario: User switches language
- **WHEN** the user selects a different language from the language switcher
- **THEN** the system navigates to the same page under the selected locale's URL prefix

### Requirement: Locale detection and default
The system SHALL determine which locale to serve a visitor with no explicit locale choice (no locale cookie, no locale in the URL) by checking the visitor's browser language preference, falling back to English when the browser's preferred language is not among the supported locales.

#### Scenario: Browser preference matches a supported locale
- **WHEN** a visitor with no prior locale choice loads the site and their browser's preferred language is Portuguese
- **THEN** the site resolves them to the pt-BR (`/pt`) locale

#### Scenario: Browser preference is unsupported
- **WHEN** a visitor with no prior locale choice loads the site and their browser's preferred language is neither English nor Portuguese
- **THEN** the site resolves them to the English (`/en`) locale

#### Scenario: Returning visitor with an explicit locale choice
- **WHEN** a visitor who previously chose a locale (via the language switcher) returns to the site
- **THEN** the site loads in the previously chosen locale, regardless of browser language
