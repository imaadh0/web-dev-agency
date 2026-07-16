# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # install dependencies (Node >=22.13.0 required)
npm run dev       # start dev server at http://localhost:3000
npm run build     # production build
npm start         # run production build
npm run lint      # eslint (flat config, eslint-config-next core-web-vitals + typescript)
```

There is no test suite/runner in this repo. There is no `tsc` script; type checking happens implicitly via `next build` (`noEmit: true` in tsconfig). Deployment target is Netlify (`netlify.toml`: `npm run build`, publish `.next`, Node 22).

## Architecture

Forty Pixels is a marketing site for a design/dev agency, built on Next.js App Router (Next 16, React 19). It has no database, no API routes, no CMS, and no backend — every page is a static server component reading from inline data.

### Routing (`app/`)

- `/` (`app/page.tsx`), `/about`, `/services`, `/contact`, `/pricing`, `/portfolio`, `/portfolio/[slug]` (case studies, statically generated via `generateStaticParams`).
- **`CONTENT_INDEX.md` at the repo root is stale** — it documents an older route set (`/work`, `/enterprise`) from before the "rename work to portfolio, remove enterprise" commit. Don't trust it for current routes/copy; treat `app/` as the source of truth.

### Shared shell — `app/components/SiteFrame.tsx`

This one client-component file (`"use client"`) drives nearly all cross-page behavior:
- **`SiteFrame`** wraps every page (mounted from `app/layout.tsx`) and owns: Lenis smooth scrolling wired to GSAP `ScrollTrigger`, a preloader shown once per session (`sessionStorage` key `fp-preloader`), and page-load reveal animations driven by data attributes (see below).
- **Client-side route transitions**: `TransitionLink`/the internal `go()` function intercept plain `<a>` clicks, play a full-bleed curtain animation, then do a real `window.location.assign(href)` (a hard navigation, not client-side SPA routing) once the curtain covers the screen. Any new internal link should use `TransitionLink` (re-exported from `app/components/Sections.tsx`) instead of `next/link`, or the curtain effect won't fire.
- **`Navigation`** and **`Footer`** are defined here too. Nav theme (light/dark/lime/hero) is driven by `data-nav-theme` attributes on page sections and swapped via `ScrollTrigger` as sections cross the viewport.
- **Declarative animation hooks** — sections opt into motion purely via data attributes, wired up in `SiteFrame`'s effect:
  - `data-reveal` — fade/slide up on scroll into view
  - `data-words` (paired with the `<Words>` helper in `Sections.tsx`) — per-word reveal/mask animation
  - `data-fill` — scrub-based text fill/highlight tied to scroll position
  - `data-parallax` — scroll-scrubbed parallax offset (used on background videos)
  - `data-count` — animated count-up (reads target from `data-count` value)
  - `.offer-demo` sections (`data-demo="launch"|"commerce"|"systems"`) — bespoke looping GSAP timelines (`launchDemo`, `commerceDemo`, `systemsDemo`) that build once and replay in a `ScrollTrigger`-gated loop
  - All motion respects `prefers-reduced-motion` (checked once via `matchMedia` in the effect, and via a global CSS media query).

### Shared content/UI — `app/components/Sections.tsx`

- `projectData` is the single source of truth for portfolio/case-study content (per-project name, tag, url, logo, tone, summary, challenge, solution, metrics). Both `app/portfolio/page.tsx`'s cards and `app/portfolio/[slug]/page.tsx`'s case study pull from this object — add new projects here, not by hand-rolling a new page.
- `ProjectCard`, `VideoHero`, `ContactBand`, `Arrow`, `Words` are the reusable building blocks pages compose into. Most pages follow the same shape: a `VideoHero`, then a stack of `<section data-nav-theme="...">` blocks, ending in `<ContactBand>`.
- `Eyebrow` is currently a no-op that renders `null` (section eyebrow/index labels were removed but the call sites and prop shape were kept) — don't assume passing `index`/`label` renders anything.

### Styling

All CSS lives in one file: `app/globals.css`. It's organized as a sequence of per-section blocks (nav, hero, editorial intro, offer preview, services, work/portfolio, about, contact, case studies, footer) followed by a long tail of responsive breakpoints at the bottom (`900px`, `560px`, `1800px+`, `1200px`, `720px`, `480px`, `340px`, landscape/hover media queries). When touching a section's look, search for its existing block rather than adding a parallel one, and check the breakpoint tail for existing overrides of the same class.

Design tokens are CSS custom properties on `:root` in `globals.css` (`--lime`, `--ink`, `--dark`, `--paper`, `--white`, `--line`, `--pad`, `--nav`). Fonts are self-hosted Geist Sans/Mono via `next/font/local` (`app/layout.tsx`), exposed as `--font-sans`/`--font-mono`.

### Code style in this repo

Existing source files (components, pages, `globals.css`) are written extremely dense — minimal whitespace, many statements per line, no line-per-declaration formatting. This is the established style; match it when editing these files rather than reformatting to a more conventional spread-out style.
