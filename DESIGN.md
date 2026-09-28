---
name: josiahhester.com
description: A calm, documentary academic site — whitespace, real photographs, and one clay-red accent.
colors:
  volcanic-clay: "#b3402f"
  sunset-coral: "#e08a72"
  clay-wash: "#f1e3e0"
  ember-shadow: "#2a221d"
  white: "#ffffff"
  paper: "#f7f6f4"
  ink: "#1a1a1a"
  ink-muted: "#6b6b6b"
  hairline: "#e8e6e2"
  night: "#14130f"
  charcoal-paper: "#1c1b16"
  bone: "#ece9e2"
  bone-muted: "#a39d8f"
  hairline-dark: "#33312a"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "2.4rem"
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "1.7rem"
    fontWeight: 300
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  sm: "8px"
  md: "10px"
  pill: "999px"
  circle: "50%"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  gutter: "28px"
  xl: "40px"
  hero: "56px"
components:
  button-icon:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: "40px"
  button-icon-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.volcanic-clay}"
    rounded: "{rounded.circle}"
    size: "40px"
  button-icon-emph:
    backgroundColor: "{colors.volcanic-clay}"
    textColor: "{colors.white}"
    rounded: "{rounded.circle}"
    size: "40px"
  button-theme-toggle:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "34px"
  nav-link:
    textColor: "{colors.ink}"
    padding: "4px 0"
  nav-link-active:
    textColor: "{colors.volcanic-clay}"
    padding: "4px 0"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "18px 20px 20px"
  card-teaching:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "22px"
  chip-honor:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "8px 16px 8px 10px"
  banner-alert:
    backgroundColor: "{colors.clay-wash}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "14px 18px"
  blurb-news:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "20px 22px"
---

# Design System: josiahhester.com

## Overview

**Creative North Star: "The Field Notebook"**

A scientist's clean, honest record. The site is calm, documentary, and precise: generous whitespace, one warm clay-red accent used the way a pen uses ink, and photographs that are evidence rather than decoration — a keynote stage, a panel at the New Museum, a 3D-printed console, a wetland buoy. Nothing on the page is there to impress; it is there because it happened. That restraint is deliberate. The owner's positioning (Indigenous knowledge systems as a design paradigm for computing, alongside rigorous systems research) lands harder when the surface around it stays composed.

Density is low and rhythm is steady. Content sits in a single 1080px column with 28px gutters; sections are separated by 40px of air and a one-pixel hairline; lists (news, publications, essays) are hairline-ruled rows rather than boxed cards. Headlines are light (weight 300) and large; emphasis comes from size and the accent, never from heavy type. Light and dark themes are both first-class and share every token name — dark mode is a warmer, lower-contrast night version of the same notebook, not a different product.

**Key Characteristics:**
- Whitespace-forward single column; hairline rules do the structural work.
- One accent, Volcanic Clay, used mostly as ink (links, years, kickers) and as a solid fill only on the page's single emphasized action.
- Light, large headlines over a 17px body with a 1.65 line-height.
- Real, self-hosted photography clipped to the same 10px radius as every card.
- Flat surfaces: zero drop shadows; depth comes from Paper-on-White tone and 1px borders.
- Small uppercase kickers (0.78rem, 0.12em tracking) label pages and sidebar blocks.

## Colors

A warm, near-monochrome palette: off-white paper, near-black ink, and a single clay-red accent, with a matching night-time set for dark mode.

### Primary
- **Volcanic Clay** (`#b3402f`): the only accent. Link color, award years, kickers, the active nav underline, the "Impact:" lead-in on research cards, and the solid fill of the emphasized LinkedIn button. Chosen to echo Hawaiʻi's red ʻalaea soil.
- **Sunset Coral** (`#e08a72`): Volcanic Clay's dark-mode partner. Lighter and softer so it stays readable as text on Night; when it becomes a fill, the text on it switches to Night (`--accent-contrast`) rather than white.
- **Clay Wash** (`#f1e3e0`) / **Ember Shadow** (`#2a221d`): the accent's soft tint. Backgrounds for alert banners, placeholder tags, and the honor-chip icon disc.

### Neutral
- **White** (`#ffffff`): page background in light mode, and the text color on Volcanic Clay fills.
- **Unbleached Paper** (`#f7f6f4`): every raised surface — cards, chips, icon buttons, the news blurb, the theme toggle. One step warmer than the page so surfaces read as objects without a shadow.
- **Ink** (`#1a1a1a`): body and heading text.
- **Ink, Muted** (`#6b6b6b`): dates, kickers, venue lines, author lists, titles in the sidebar, footer text.
- **Hairline** (`#e8e6e2`): all borders and rules — section dividers, list rows, card outlines, the sticky header's bottom edge.
- **Night** (`#14130f`), **Charcoal Paper** (`#1c1b16`), **Bone** (`#ece9e2`), **Bone, Muted** (`#a39d8f`), **Hairline, Dark** (`#33312a`): the same five roles in dark mode. Warm rather than blue-black so photographs keep their color.

### Named Rules
**The Accent-as-Ink Rule.** Volcanic Clay is written, not painted. It colors text, underlines, and years; it fills exactly one control per page (the emphasized icon button). Large clay areas are not part of this system.

**The Paired Token Rule.** Every color exists as a light/dark pair under one variable name (`--bg`, `--surface`, `--text`, `--text-muted`, `--border`, `--accent`, `--accent-soft`, `--accent-contrast`). New colors join as pairs or not at all.

## Typography

**Display Font:** Inter (with -apple-system, Segoe UI, Helvetica, Arial fallbacks)
**Body Font:** Inter (same stack)
**Label Font:** Inter, uppercase and tracked

**Character:** One humanist sans at two very different weights. Headlines are thin and roomy (300), body is regular (400), and the few bold moments (600–700) are reserved for names, titles, and the brand mark. The contrast between light headlines and bold titles carries the hierarchy so color rarely has to.

### Hierarchy
- **Display** (300, 2.4rem, tight −0.01em): page titles inside the hero block. The About page's "About Me" runs one step larger at 2.6rem; both drop to 2rem under 720px.
- **Headline** (300, 1.7rem, −0.01em): section titles — "Ongoing Research Projects", "Conference Papers", "Georgia Tech · 2022–Present". A muted, regular-weight span carries the date range.
- **Title** (600, 1.15rem): card and entry titles. Density-dependent: research cards use 1.15rem, essay entries 1.08rem, teaching cards 1.05rem, publication titles 1rem. The sidebar name is the one heavy moment at 1.8rem/600.
- **Body** (400, 17px, 1.65 line-height): all running text. Secondary lines step down to 0.92–0.98rem (cards, project list) and 0.85–0.88rem (dates, authors, venues, chips, footer).
- **Label** (600, 0.78rem, 0.12em tracking, uppercase): page kickers ("Public Scholarship") and the sidebar's "Awards & Honors". Entry kinds on the Writing page use a lighter variant (0.72rem, 0.08em, muted).

### Named Rules
**The Light Headline Rule.** Headings are weight 300. If something needs more emphasis, make it larger or give it the accent; never make it bolder.

**The Tabular Date Rule.** Dates in list rows use `font-variant-numeric: tabular-nums` and sit in a fixed 110px column so years align down the page.

## Layout

A single centered column, 1080px max-width, with 28px side gutters at every size. Vertical rhythm is built from 40px section padding, 56px hero top padding, and 14–16px row padding inside lists; adjacent sections are separated by a 1px hairline.

The About page is the one two-column layout: a 1.6fr / 1fr grid with a 56px gap, the sidebar (headshot, name, icon row, titles, awards) sticky at 90px from the top. Below 900px the grid collapses to one column and the sidebar becomes static at 360px max-width. Research cards sit in a two-column grid (24px gap) that also collapses at 900px; teaching cards use `repeat(auto-fit, minmax(280px, 1fr))` with an 18px gap. Essay entries with a photo use a flex split (text ≈55%, image ≈40%, 28px gap) that stacks at 640px.

The header is sticky with a translucent, blurred background. At 720px and below the horizontal nav is replaced by a hamburger toggle that opens a full-width dropdown; news rows drop their date column and stack.

## Elevation & Depth

This system is flat. There are no box-shadows anywhere in the stylesheet. Depth is conveyed three ways: surface tone (Unbleached Paper objects on a White page, Charcoal Paper on Night), 1px Hairline borders on anything that is a container, and a single 1px `translateY(-1px)` lift on icon-button hover. The one material effect is the sticky header, which sits on `color-mix(in srgb, var(--bg) 88%, transparent)` with `backdrop-filter: saturate(180%) blur(10px)` so content ghosts through as you scroll.

### Named Rules
**The Hairline Rule.** If it needs an edge, it gets a 1px border in the Hairline color — never a shadow, never a thicker line. Dotted hairlines separate award rows; a dashed hairline separates a card's impact line from its summary.

## Shapes

Softly rounded rectangles at one radius (10px) for cards, images, banners, the news blurb, and the headshot. Two other silhouettes appear on purpose: full pills (999px) for chips, the theme toggle, and text buttons; and perfect circles (50%) for the 40px icon buttons and the 28px chip icon disc. The mobile nav toggle uses a slightly tighter 8px. Photographs are always clipped to the 10px radius and wrapped in a Hairline border so they read as notebook plates.

## Components

Quiet and tactile. Everything is a hairline-bordered Paper object with soft corners; interaction is a color shift to Volcanic Clay and, on icon buttons, a one-pixel lift.

### Buttons
- **Shape:** perfect circles (50%) for icon buttons at 40px; pills (999px) for the 34px theme toggle and any text button.
- **Icon button (default):** Paper fill, Hairline border, Ink glyph (18px inline SVG, 1.8px stroke).
- **Hover:** border and glyph turn Volcanic Clay; `transform: translateY(-1px)`; 0.15s ease on border, color, background, and transform.
- **Emphasized (one per page):** solid Volcanic Clay fill and border with White text; in dark mode the fill is Sunset Coral and the text switches to Night via `--accent-contrast`. Hover dims to 88% opacity. Used only for the LinkedIn button today.
- **Theme toggle:** 34px pill, Paper fill, Hairline border, a single ☾ glyph.

### Chips
- **Honor chip:** Paper pill with Hairline border, 8px 16px 8px 10px padding, 0.88rem text; a 28px Clay Wash disc on the left holds an emoji or glyph in Volcanic Clay. Bold name, muted sub-line.
- **Placeholder tag:** Clay Wash background, Volcanic Clay uppercase text at 0.72rem/0.06em, 2px 8px padding, 5px corners. Scaffolding only; remove when the real content lands.

### Cards / Containers
- **Research card:** Paper, 10px corners, Hairline border, `overflow: hidden`; a 190px `object-fit: cover` image on top; body padding 18px 20px 20px; a dashed hairline above the muted 0.86rem impact line whose "Impact:" lead-in is Volcanic Clay; a 0.88rem bold link at the bottom. Cards are flex columns so the impact line pins to the base.
- **Teaching card:** Paper, 10px, Hairline border, 22px padding; a 1.6rem emoji icon, 1.05rem bold title, 0.92rem body at 1.6 line-height. No links by choice.
- **Alert banner:** Clay Wash fill, a border mixed 35% toward the accent, 10px corners, 14px 18px padding, 0.94rem text with bold links.
- **News blurb:** Paper, Hairline border, 10px, 20px 22px padding, 0.98rem.

### Lists (signature pattern)
- **Hairline rows:** news items, publication entries, essay entries, and the ongoing-projects list are not cards. Each row has 14–16px vertical padding and a 1px Hairline top border (first row has none). News rows are a `110px 1fr` grid with a muted tabular date; publication rows stack title (600, 1rem), authors (muted, 0.88rem), venue (0.86rem) with award badges in bold Volcanic Clay.
- **Awards list:** 0.86rem rows with dotted hairlines; the year is bold Volcanic Clay with 6px right margin.
- **Media in rows:** a YouTube iframe, Instagram oEmbed, or image sits in a 560px-max block with 10px corners, 10px below the text.

### Navigation
- **Desktop:** brand mark in 700/1.5rem Ink at left; links at 0.95rem Ink with a transparent 2px bottom border that turns Volcanic Clay on hover and for the active page; the theme toggle sits last.
- **Mobile (≤720px):** hamburger toggle (8px corners, Paper fill); the nav becomes an absolute full-width column with 16px 28px padding and 14px gaps, page background, Hairline bottom edge.
- **Footer:** hairline top, 32px/48px padding, muted 0.88rem text with links that turn Volcanic Clay on hover.

## Do's and Don'ts

### Do:
- **Do** keep every color as a light/dark pair under the existing variable names; add `--accent-contrast`-style helpers rather than hardcoding white or black on fills.
- **Do** use the 10px radius, a 1px Hairline border, and Paper fill for any new container; use pills only for chips and toggles, circles only for icon buttons.
- **Do** set headings at weight 300 and reach for size or Volcanic Clay before weight.
- **Do** keep kickers at 0.78rem, 600, uppercase, 0.12em tracking, above the page title in the hero block.
- **Do** self-host images in `img/`, wrap them in the 10px/Hairline treatment, and write descriptive alt text; embed third-party media only through official iframes or oEmbed, never hotlinked CDN files.
- **Do** keep list content as hairline rows (news, publications, essays) rather than converting them to cards.
- **Do** verify both themes: dark mode uses Sunset Coral as text and Night as text-on-fill, and must hold 4.5:1 contrast.
- **Do** preserve Hawaiian orthography (ʻokina, kahakō) in any rendered text and alt attributes.

### Don't:
- **Don't** add prohibitions here without the owner's confirmation — none have been established yet. The Do list above is the guardrail; if a proposed change conflicts with the incumbent system, ask before treating it as a rule.
