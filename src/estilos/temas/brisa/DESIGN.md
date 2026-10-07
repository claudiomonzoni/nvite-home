---
name: Brisa invitation theme
description: Coastal editorial paper for wedding and XV invitations.
colors:
  primario: "#244d54"
  secundario: "#50655c"
  terciario: "#eee7db"
  acento: "#84613f"
  fondo: "#faf7ef"
  texto: "#29474b"
  gris: "#50655c"
  brisa-sand: "#eee7db"
  brisa-sea: "#244d54"
  brisa-paper: "#f2eee5"
  brisa-white: "#fffdf8"
  brisa-line: "color-mix(in srgb, var(--primario), transparent 78%)"
typography:
  display:
    fontFamily: "'Cormorant Garamond', serif"
    fontSize: "clamp(3.4rem, 5.8vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "'Cormorant Garamond', serif"
    fontSize: "clamp(2.4rem, 5vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.12
  title:
    fontFamily: "'Cormorant Garamond', serif"
    fontSize: "clamp(1.8rem, 3vw, 2.8rem)"
    fontWeight: 400
    lineHeight: 1.12
  body:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: "0.87rem"
    fontWeight: 500
    lineHeight: 1.6
rounded:
  paper: "0"
  photograph: "2px"
  open-button: "2px"
  section-button: "4px"
  seal: "50%"
spacing:
  section: "clamp(4rem, 9vw, 8rem)"
  gutter: "1.25rem"
  paper-inset: "1rem"
  stationery-inset: "0.7rem"
components:
  button-open:
    backgroundColor: "{colors.primario}"
    textColor: "{colors.fondo}"
    rounded: "{rounded.open-button}"
    padding: "0.9rem 1rem"
    width: "100%"
  button-open-hover:
    backgroundColor: "{colors.acento}"
  button-section:
    backgroundColor: "transparent"
    textColor: "{colors.primario}"
    rounded: "{rounded.section-button}"
    padding: "0.8rem 1.4rem"
  paper-card:
    backgroundColor: "{colors.brisa-paper}"
    rounded: "{rounded.paper}"
    padding: "2rem"
---

# Design System: Brisa invitation theme

## Overview

**Creative North Star: Coastal editorial paper.**

Brisa pairs a personal photograph with an ivory invitation sheet, quiet sea-colored typography, sand surfaces, and a generated shoreline image. Fine inset rules, generous space, and a restrained tide-line ornament give the invitation the feel of printed stationery.

This specification applies only to the Brisa wedding and XV invitation theme. It does not define the site's marketing pages or other themes. It records the completed code-led direction; there is no approved external composition. `bodas/` and `quince/` each contain their own `_tokens.scss`, `hero.module.scss`, and `_coastal.scss`; those files remain normative if documentation and code diverge.

Key characteristics: serif names, readable sans-serif details, warm paper, subtle borders, square section surfaces, and a photograph-led responsive hero.

## Colors

The frontmatter records the **base palette defaults**, not forced colors for every invitation. Deep sea `primario` anchors headings and actions; muted green `secundario` and `gris` support the palette; warm brown `acento` marks monograms, ornaments, hover, and focus. Ivory `fondo` is the page and stationery surface, `texto` is reading ink, and sand `terciario` supports the coastal setting. Brisa's named sand/paper tokens furnish photo fallback and tonal section surfaces.

Base values are scoped to `[data-paleta='base']` and `[data-paleta-quince='base']`; seasonal palettes retain their own colors. Preserve Keystatic `theme.colors` overrides: primary → `--primario`, secondary → `--secundario`, accent → `--acento`, background → `--fondo`, text → `--texto`. Components use the effective semantic custom properties rather than hardcoded base hex values. Fine lines mix effective primary with 78% transparency.

## Typography

Cormorant Garamond, serif, carries names and section headings at regular weight. DM Sans, sans-serif, carries detail, dates, actions, and longer reading. Preserve Keystatic `theme.typography.heading` and `.body` overrides and their existing font loading.

Hero names use the display role, balanced wrapping, and a 10ch maximum (12ch for XV). Mobile names use `clamp(3.3rem, 12vw, 5rem)`. Opening-sheet names use `clamp(2.8rem, 5vw, 4.5rem)`. Invitation copy is `0.94rem/1.8` with a 30ch maximum; longer section copy reaches 65ch. Occasion titles are `clamp(1.6rem, 2.5vw, 2.25rem)/1.25`. Avoid introducing a competing display face or italic heading treatment into this theme.

## Layout

Desktop hero columns are `minmax(0, 1.08fr) minmax(0, 1fr)`, with minimum height `min(860px, 100svh)` and a photo minimum height of 620px. Weddings place the photo left; XV reverses the visual order so the photo is right. Paper centers its content with fluid padding and a 1rem inset border.

At `max-width: 767px`, both types stack photo before paper. The photo is 55svh, capped at 560px; paper has a 520px minimum height and `3rem 2rem` padding. Main content uses a 72rem central column and minimum 1.25rem side gutters. Section spacing is `--brisa-section`; gift surfaces become one column on mobile. Location content stays within 54rem, and narrow-screen map actions become full width.

## Elevation & Depth

Section surfaces use tonal layering and fine rules with no card shadow or blur. The opening stationery alone uses `--brisa-shadow: 0 18px 55px color-mix(in srgb, var(--primario), transparent 90%)`. Its shoreline backdrop provides atmosphere; the countdown uses the same image under an ivory overlay. Do not add floating glass surfaces to Brisa's sections.

## Shapes

Paper sections are square. Photos and the opening action have 2px corners; section actions have 4px corners. The 3.6rem circular monogram seal is the deliberate exception. Inset stationery borders are decorative and ignore pointer events. The tide ornament is an inline SVG using current accent color.

## Components

**Opening stationery:** A native modal `dialog` uses `showModal()`, focuses the opening button, and locks page scrolling while closed to the invitation. Its sheet is at most 34rem wide. Clicking the action or cancelling with Escape opens the invitation. Opening dispatches `iniciarInvitacion` for the existing invitation/audio flow; after opening, focus moves to the hero title and `hero:ready` dispatches on the next animation frame. Preserve these event names and ordering.

**Actions:** The opening button is full width with a 50px minimum height, primary ink background, ivory text, accent hover, and a 1px active translation. Section buttons have a 44px minimum height. Keyboard focus uses a 2px accent outline with 5px offset. The hero discovery link points to `#brisa-celebracion` with 2rem scroll margin.

**Invitation details:** Wedding initials form the monogram; XV uses `XV`. Dates are calendar dates formatted in UTC, with English or Mexican Spanish labels. XV may show guest name and pass count; preserve guest lookup and supplied initial guest behavior. Personal cover images fall back to `/temas/brisa/orilla.webp`.

**Sections:** Countdown numerals use serif type and tabular figures; map sections have horizontal rules; gifts and lodging use paper surfaces. Content remains readable without decorative pseudo-element imagery. The hero paper reveal is 800ms with `cubic-bezier(0.16, 1, 0.3, 1)` only when reduced motion is not requested. Reduced motion disables smooth scrolling and makes inherited animations/transitions effectively instant.

**Route integration:** Preserve `themeName` propagation through Basic and common wedding components. Real XV flip cards, Cartas, and maps use their coastal theme variants. Empty galleries must not reserve whitespace. Brisa disables legacy scroll hiding so its authored content remains visible and keeps one authored hero rather than adding a second legacy hero.

## Do's and Don'ts

- **Do** preserve seasonal palette and per-invitation color/font overrides.
- **Do** reuse effective CSS custom properties and existing responsive ordering.
- **Do** preserve native dialog focus, keyboard opening, reduced motion, and invitation events.
- **Don't** apply this invitation theme to marketing pages or other theme families.
- **Don't** replace paper surfaces with blur, heavy shadows, or rounded floating cards.
- **Don't** treat the base palette as an override of editor choices.

Review evidence lives in `.impeccable/review/brisa`: isolated wedding and XV screenshots at 320, 375, 414, 768, and 1440px, including opening states. Expanded route evidence includes `real-bodas-1440.png`, `real-bodas-375.png`, `real-quince-1440.png`, and `real-quince-375.png`. `routes-results.json` records all four actual-route samples passing with viewport-matching scroll width, no missing visible images, and no JavaScript errors.

`scripts/brisa-astro.config.mjs` and `.brisa-preview/astro` wrappers render the actual wedding/XV `src/pages` with local MDX and original components while excluding unrelated Stripe collection synchronization. Source Sass/Astro syntax, isolated components, and these real invitation route samples were validated. This does not verify live submissions or every content/version combination. Full project Astro build remains blocked by the existing `qs` failure with `require` undefined; successful sample rendering is not proof of a successful full-site build.

