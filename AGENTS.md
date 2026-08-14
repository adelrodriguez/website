# adel.do

My personal website: a static Astro site with Tailwind CSS 4, built and run with Bun.

## Commands

- `bun install` — install dependencies
- `bun run dev` — start the dev server
- `bun run build` — build the static site to `dist/`
- `bun run check` — lint and type-check (Adamantite: oxlint + tsgo)
- `bun run format` — format files (oxfmt)
- `bun run analyze` — find unused files, exports, and dependencies (knip)

Always use Bun, never npm/yarn/pnpm or node.

## Structure

- `src/pages/` — routes. English at the root (`/`, `/about`, `/tech`), Spanish under `src/pages/es/`. Route files are thin wrappers around the shared page components.
- `src/components/pages/` — the actual page content (`home.astro`, `about.astro`, `tech.astro`), parameterized by `locale`.
- `src/i18n/` — locale helpers and `translations/{en,es}.json`. Every user-facing string goes through these files; add new strings to both locales.
- `src/layouts/layout.astro` — HTML shell: metadata, Plausible, theme init script, header with theme/locale toggles.
- `src/styles/global.css` — Tailwind theme tokens (`background`, `foreground`, `accent`).

## Conventions

- No UI framework: components are plain `.astro` with vanilla `<script>` tags for interactivity.
- Dark mode is class-based (`.dark` on `<html>`), toggled by `theme-toggle.astro`, persisted in `localStorage("theme")`, defaulting to the system preference. Scripts must survive view-transition navigation (`astro:page-load` / `astro:after-swap` events).
- File names are kebab-case (enforced by lint).

<!-- ADAMANTITE:START -->

## Adamantite

This project uses Adamantite for its managed formatting, linting, type checking, and dependency-analysis setup.

- Prefer the package scripts Adamantite added for this workspace.
- Run `bun run format` after editing files. Direct command: `adamantite format`.
- Run `bun run check` to catch lint and type issues. Direct command: `adamantite check`.
- Run `bun run fix` to apply safe lint fixes. Direct command: `adamantite fix`.
- Run `bun run analyze` after changing dependencies, imports, or exports. Direct command: `adamantite analyze`.
- Use `adamantite doctor` to inspect managed setup and `adamantite doctor --fix` for safe local fixes.

<!-- ADAMANTITE:END -->
