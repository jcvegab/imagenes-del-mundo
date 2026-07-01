# Repository Instructions

## Setup

- Use npm, not pnpm/yarn; `package-lock.json` is the lockfile.
- Node.js must be `>=22.12.0` (`package.json` engines).
- Copy `.env.example` to `.env` for local API calls; required Vite vars are `VITE_GCSE_API_KEY` and `VITE_GCSE_CX`.

## Commands

- Install: `npm install`.
- Dev server: `npm run dev`.
- Production build: `npm run build`; this runs `vue-tsc --build` and `vite build` via `npm-run-all2`.
- Type-check only: `npm run type-check`.
- Unit tests: `npm run test:unit` (`vitest`, jsdom, setup in `vitest.setup.ts`).
- Single/focused test: `npm run test:unit -- --run src/path/to/file.spec.ts`.
- Coverage: `npm run test:coverage`; thresholds are 80% for lines/functions/branches/statements.
- Lint: `npm run lint`; it runs `oxlint . --fix` then `eslint . --fix --cache`, so it can edit files.
- Format: `npm run format`; Prettier is configured for no semicolons, single quotes, print width 100, and only formats `src/`.

## App Shape

- Vue 3 + Vite SPA entrypoint is `src/main.ts`; it wires Pinia, Vue Router, Unhead, and PrimeVue Material theme.
- Router source of truth is `src/router/index.ts`; route constants live in `src/router/constants.ts` and public nav data in `src/router/public-routes.ts`.
- `@/` aliases to `src/` in both Vite and TS config.
- Image search uses Google Custom Search from `src/constants/urls.ts`; missing env vars create an invalid API URL rather than a mocked fallback.
- Sitemap routes are duplicated in `vite.config.ts`; update `dynamicRoutes` when adding public pages.

## Testing Notes

- Tests live under `src/**/__tests__/*` and use `@vue/test-utils` with jsdom.
- `vitest.setup.ts` globally installs Unhead only; PrimeVue components and router pieces are usually stubbed per test.
- Code coverage excludes `src/main.ts`, `src/constants/**`, `src/types/**`, and `src/router/**`.

## Current Config Gotchas

- README mentions Husky/lint-staged, but this repo currently has no `.husky/` directory or lint-staged config; do not assume commit hooks are active.
