# Repository Guidelines

## Project Structure & Module Organization

This is the Forty Pixels agency website built with Next.js App Router. Source lives in `app/`, with route folders such as `app/about`, `app/services`, `app/pricing`, `app/contact`, and `app/portfolio/[slug]`. Shared UI and animation logic lives in `app/components/`, global styles are in `app/globals.css`, and local font files are in `app/fonts/`. Static assets are under `public/`, including `public/brand`, `public/logos`, `public/videos`, favicon files, and `og.png`. Deployment settings are in `netlify.toml`.

## Build, Test, and Development Commands

- `npm install` installs dependencies from `package-lock.json`. Use Node.js `>=22.13.0`.
- `npm run dev` starts the local Next.js development server, usually at `http://localhost:3000`.
- `npm run build` creates a production build and validates the Next.js app.
- `npm start` serves the production build after `npm run build`.
- `npm run lint` runs ESLint across the repo while ignoring `.next`.

## Coding Style & Naming Conventions

Use TypeScript and React functional components. Keep route files named with App Router conventions: `page.tsx`, `layout.tsx`, and colocated client components when needed. Component filenames use PascalCase, for example `SiteFrame.tsx` and `FaqAccordion.tsx`. Prefer the existing compact TSX style and double-quoted imports. Use the `@/*` path alias from `tsconfig.json` when it improves readability. Global visual styling is centralized in `app/globals.css`; keep assets referenced from `public/` with absolute paths such as `/videos/home-work.mp4`.

## Testing Guidelines

No dedicated test framework is currently configured. For every change, run `npm run lint` and `npm run build` before handing off. If adding tests, introduce the test runner and scripts in the same change, place tests near the feature or in a clear `tests/` folder, and document the command in `README.md`.

## Commit & Pull Request Guidelines

Recent history uses short imperative subjects, sometimes Conventional Commit prefixes such as `refactor:`. Examples: `Refine portfolio presentation and CTA motion` and `refactor: update footer UI...`. Keep subjects specific and under roughly 72 characters. Pull requests should include a brief summary, verification commands run, linked issue or task when available, and screenshots or video for visual changes.

## Security & Configuration Tips

Do not commit generated `.next/` output or local environment files. Keep large media intentional and stored under `public/videos` only when required by the site experience.
