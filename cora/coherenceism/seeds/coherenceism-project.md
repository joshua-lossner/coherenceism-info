---
kind: content
type: seed
title: Seed — Coherenceism.project
summary: A project/task/workflow visualizer that reads CORA and helps you and your agents (Ivy, S’Vektor) stay in sync — think Jira, but UFC‑native and markdown‑first.
status: draft
updated: 2025-10-04
version: 2025.10
tags: [projects, tasks, workflows, ui, app]
sites: [network]
spawned_systems: [coherenceism-project]
seed_stage: idea
canonical_slug: coherenceism-project
parent: technology-and-emerging-intelligence
authors: [Coherence Network]
related: [context/roles/COHERENCE.md, procedures/git/branching_strategy.md]
---

# Seed — Coherenceism.project

A UFC‑aware application to visualize CORA projects, tasks, workflows, and procedures. Use it to stay in sync with Ivy and S’Vektor, review status, and (optionally) trigger common flows.

## Germination Notes
- Shape: desktop/web app that reads the repo read‑only (first), then optionally proposes edits as PRs.
- Sources: `context/projects/*.md`, `context/tasks/<project>/*.md`, `context/roles/*.md`, `procedures/**/*.md`, `workflows/*.md`.
- Identity: integrate with `coherenceism.identity` when ready; keep local viewer usable without auth.

## MVP Slice
- Read‑only dashboards:
  - Projects list with status/updated and “PRs (Log)”.
  - Tasks grouped by project with `status`, `updated`, and git fields (`git_status`, `branch`, `pr_url`).
  - Quick links into roles, procedures, and workflows referenced by tasks.
- Filters: by status (todo/doing/blocked/done) and git_status (none/in_branch/pr_open/merged).

## Rails
- CORA remains canonical; app reads from a submodule (`cora/`) and never mutates canon directly.
- All writes (later) flow through branches + PRs using our git procedures.
- Design system: adopt `coherenceism.design` tokens/CSS for visual coherence.

## UX
- Left: projects and filters; Right: detail pane (tasks, PRs log, links).
- Terse, legible lists; copyable repo paths for chat operations.

## Integrations (later)
- GitHub: show open PRs and basic status; open PR in browser.
- Identity/SSO: optional sign‑in via `coherenceism.identity` for team usage.

## Guardrails
- Read‑only first; any edits become PRs with clear diffs and provenance.
- Vendor‑neutral frontend; avoid deep framework lock‑in.

## Success Signals
- Operators can answer “What’s active?” and “What’s next?” in under 30 seconds.
- Tasks/PRs stay consistent with repo state; zero drift introduced by the app.

## Next Steps (Downstream)
1) Initialize `coherenceism.project` repo; add CORA as read‑only submodule.
2) Parse project/task frontmatter; render MVP dashboards and filters.
3) Adopt `coherenceism.design` tokens; test a11y checklist.
4) Add “Open in GitHub” for PR links; consider gh integration next.
