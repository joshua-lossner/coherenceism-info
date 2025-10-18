# AGENTS — coherenceism-info

Use this guide when operating agents inside this repository. Scope: this file applies to the entire directory tree rooted here.

## Operator Quick Start
- In a terminal: `cd .` (project root) and run `codex`.
- Greet: “Good evening, Ivy …” (or any greeting).
- The agent uses Lean Load below and confirms readiness.

## Load Order (Lean, local)
1) Persona: `cora/personas/ivy.md`
2) Philosophy: `cora/context/philosophy/coherenceism.md`
3) COHERENCE sweep: read `COHERENCE.md` here; load only files listed under its `init.files`.
4) Optional role: pick from `cora/context/roles/` if curating context.

Notes
- This project includes `cora/` (symlink/submodule) pointing to your CORA system. Prefer relative paths.
- Treat items not listed in `init.files` as index-only; don’t scan whole folders at startup.

## Minimal Init Files (for this repo)
Load only these on initial read to understand purpose and architecture:
- `README.md:1`
- `package.json:1`
- `scripts/build.js:1`
- `scripts/sync-content.js:1`
- `src/templates/default.html:1`
- `src/templates/home.html:1`
- `src/templates/styles.css:1`

Open other files just-in-time (e.g., content under `src/content/`).

## Project Overview
- Purpose: Public info site for Coherenceism — branches, leaves, seeds, forest; static and fast.
- Architecture: Node.js static generator (`scripts/build.js`) emitting `public/` from `src/content` + `src/templates`.
- Content source: Synced from CORA via `scripts/sync-content.js`; CORA remains canonical.
- Hosting: Static (Vercel, Netlify, Pages). No runtime framework.

## Key Paths
- Generator: `scripts/build.js`, `scripts/sync-content.js`
- Templates: `src/templates/` (`default.html`, `home.html`, `styles.css`)
- Content: `src/content/`
- Output: `public/` (committed for hosting)
- Deploy config: `vercel.json`

## Development
- Install: `npm install`
- Sync: `npm run sync`
- Build: `npm run build`
- Dev (watch): `npm run dev`
- Preview: `npm run preview`

## Conventions
- Keep it static and framework-free.
- Preserve output contract: generator writes to `public/`; avoid long-lived hand edits in `public/`.
- Use relative paths; avoid absolute/local-only references in committed code.
- Accessibility + clarity first; mobile-friendly typography.
- For CORA provenance logs: when editing inside `cora/`, append entries via `cora/procedures/core/update_log.md:1`.

## Behavioral Hooks (doc-only)
- Startup: single-line greeting: “This is Ivy — Ready when you are.” Then run Lean Load.
- SessionStart: if a role is selected, run `cora/procedures/core/mcp-health-check.md:1` and include one-line tools readiness.
- UserPromptSubmit: extract intent; propose a small next move; no writes yet.
- Stop: if writes occurred, summarize changed paths.

## Safety & Policy
- Avoid destructive edits; prefer minimal, reversible changes.
- No network calls beyond what’s documented in scripts.
- Escalate changes that impact build/deploy contracts (`scripts/`, `src/templates/`, `public/`).

\n## Optional Preflight\n- Run a doc-only downstream check: `cora/procedures/site/downstream-check.md:1`\n
