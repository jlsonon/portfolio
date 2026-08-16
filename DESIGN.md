---
name: Jericho Sonon Portfolio Design System
description: Precision Systems & Product Engineering Design System
colors:
  primary: "#f3b728"
  secondary: "#f97316"
  neutral-bg: "#0f0d0a"
  neutral-surface: "#1a1612"
  neutral-border: "#362d24"
  neutral-text: "#ebe8e3"
  neutral-muted: "#938c82"
  success: "#10b981"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2.2rem, 5.2vw, 5rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 1.1
  title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
  caption:
    fontFamily: "Inter, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.4
  micro:
    fontFamily: "Inter, sans-serif"
    fontSize: "10px"
    fontWeight: 600
    lineHeight: 1.2
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.full}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "#f5c44d"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
---

# Design System: Jericho Sonon Portfolio

## Overview

**Creative North Star: "The Master Systems Foundry"**

The visual language of Jericho Sonon's portfolio is built around architectural precision, warm high-contrast darkness, and authoritative clarity. Every interface component communicates the standard of production software built for commercial gym operators, laundromat hub cashiers, EdTech students, and municipal digital governance.

**Key Characteristics:**
- Deep warm dark charcoal canvas (`#0f0d0a`) paired with radiant amber-gold accents (`#f3b728`).
- Strict typography pairing: architectural Space Grotesk for display headlines and crisp Inter for long-form readability.
- Purposeful asymmetry and high-density editorial rhythm instead of repetitive template card boxes.
- Zero decorative fluff: no glowing purple blobs, no custom cursor hijacking, no blocking preloaders.

## Colors

A curated dark palette providing maximum contrast and visual warmth.

### Primary
- **Amber Gold** (`#f3b728` / `hsl(43 96% 58%)`): Used for primary action buttons, headline accents, active state indicators, and key metric counters.

### Secondary
- **Warm Orange** (`#f97316` / `hsl(25 95% 53%)`): Secondary highlight accent for interactive states and badges.

### Neutral
- **Deep Obsidian Ground** (`#0f0d0a` / `hsl(36 20% 5%)`): Main application background canvas.
- **Warm Surface** (`#1a1612` / `hsl(36 15% 10%)`): Card and container backgrounds.
- **Warm Border** (`#362d24` / `hsl(36 15% 20%)`): Structural borders and divider lines.
- **Crisp Text** (`#ebe8e3` / `hsl(40 20% 92%)`): Primary reading text.
- **Muted Text** (`#938c82` / `hsl(40 10% 55%)`): Secondary labels, timestamps, and captions.

### Success
- **Active Emerald** (`#10b981`): Status badge indicating real-time commercial availability.

### Named Rules
**The One Voice Rule.** The amber accent is reserved strictly for interactive triggers, brand focus, and focal metrics. Background surfaces remain dark and calm.

## Typography

**Display Font:** Space Grotesk (`var(--font-anton)`)  
**Body Font:** Inter (`var(--font-inter)`)  

### Hierarchy
- **Display** (700, `clamp(2.2rem, 5.2vw, 5rem)`, 0.95): Hero headlines and major section titles.
- **Headline** (700, `1.75rem – 2.5rem`, 1.1): Project case study titles and subsection headers.
- **Title** (600, `1.125rem – 1.35rem`, 1.3): Component and card titles.
- **Body** (400, `0.95rem – 1.05rem`, 1.6): Case study narrative and bio descriptions.
- **Label** (600, `0.75rem`, `0.1em tracking`, uppercase): Badges, categories, and breadcrumbs.

## Layout

- **Max Container Width:** 1280px (`max-w-7xl`).
- **Vertical Spacing Rhythm:** `clamp(60px, 10vw, 140px)` between major sections.
- **Mobile First:** Vertical collapsible accordion for skills matrix (zero horizontal scroll).

## Elevation & Depth

Surfaces rely on tonal layering and frosted glass backdrop blur rather than heavy drop shadows.

- **Frosted Glass Header:** `backdrop-filter: blur(12px)` over `#0f0d0a` at 90% opacity.
- **Tonal Elevate:** Elevated containers use `bg-background-light/40` (`#1a1612`) with `border-border/40` (`#362d24`).

## Shapes

- **Buttons:** Fully pill-rounded (`rounded-full` / 9999px) for friendly tactile touch targets.
- **Cards & Containers:** Soft geometric corners (`rounded-2xl` / 16px).
- **Badges & Pills:** Compact radius (`rounded-xl` / 12px or `rounded-full`).

## Components

### Buttons
- **Primary:** Amber gold background (`#f3b728`), dark text (`#0f0d0a`), pill radius, bold weight, subtle scale hover.
- **Secondary / Outline:** Translucent background, border `#362d24`, text `#ebe8e3`, hover border `#f3b728`.

### Navigation Header
- Fixed at top (`fixed top-0 left-0 right-0 z-50`), frosted glass blur with border separator, permanent brand identity on scroll.

### Project Case Study Rows
- Minimalist editorial rows with hover image reveal on desktop and direct visual cards on mobile.

## Do's and Don'ts

### Do:
- **Do** use authentic metrics and real deployment facts.
- **Do** maintain native OS cursor behavior and instant page loading.
- **Do** preserve the fixed frosted-glass navigation header across all screen sizes.

### Don't:
- **Don't** add purple/blue gradients or generic glowing canvas particles.
- **Don't** introduce horizontal scrollbars on mobile.
- **Don't** use scaled iframe embeds for project previews.
