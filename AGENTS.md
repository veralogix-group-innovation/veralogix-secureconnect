# AGENTS.md

## Cursor Cloud specific instructions

This is a frontend-only single-page app: Vite + React + TypeScript + shadcn-ui + Tailwind (a Lovable.dev project). There is no backend/database; the contact form and dashboards are client-side only (form submission is simulated).

Standard commands are defined in `package.json` scripts — use those rather than duplicating here:
- Dev server: `npm run dev` (Vite, serves at `http://127.0.0.1:8080/`; host/port are pinned in `vite.config.ts`).
- Lint: `npm run lint`
- Tests: `npm test` (Vitest + jsdom, setup in `src/test/setup.ts`)
- Build: `npm run build` (output to `dist/`)

Non-obvious notes:
- Use `npm` (a `package-lock.json` is checked in). A `bun.lockb` also exists but `bun` is not installed; prefer npm to match the README.
- Known pre-existing failures (not caused by environment setup): `npm run lint` reports a handful of errors/warnings in `src/components/ui/*` and `tailwind.config.ts`, and one Vitest test in `src/components/__tests__/CardFX.test.tsx` is timing-sensitive and fails consistently. Treat these as repo baseline, not setup breakage.
- The contact form (`/contact`) shows a "Message Sent!" success state on submit, then intentionally resets the form back to placeholders after ~3 seconds (`setTimeout` in `src/pages/Contact.tsx`). The reset is expected behavior, not a bug.
- A full-screen intro loading video plays on first visit per session (tracked via `sessionStorage` key `introVideoShown`); wait for it to finish before interacting.
