---
kind: project
title: CORA — Trunk Evolution and Operations
status: active
updated: 2025-10-08
tags: [cora, trunk, operations]
---

# CORA — Trunk Evolution and Operations

## Purpose
Evolve the CORA trunk (canon content, rails, roles, and procedures) and keep onboarding/operations coherent and accessible.

## Scope
- Canon content and rails (ontology, philosophy, roles/procedures)
- Onboarding and operator docs
- Forest index shape and seed lineage
- No downstream UI or code (lives in other repos)

## Tasks (Summary)
- [x] context/tasks/cora/establish-branching-strategy.md:1
- [x] context/tasks/cora/roles-procedures-forest.md:1
- [x] context/tasks/cora/track-prs.md:1
- [x] context/tasks/cora/create-suno-prompt-workflow.md:1
- [x] context/tasks/cora/create-suno-prompt-procedures.md:1
- [x] context/tasks/cora/open-session-branch-and-pr.md:1
- [x] context/tasks/cora/suno-procedure-propose-genre-concept.md:1
- [x] context/tasks/cora/suno-procedure-create-lyrics.md:1
- [x] context/tasks/cora/suno-procedure-create-style-prompt.md:1
- [x] context/tasks/cora/suno-procedure-create-persona.md:1
- [x] context/tasks/cora/suno-procedure-create-concept-album.md:1
- [x] context/tasks/cora/suno-procedure-iterate-and-compare.md:1
- [x] context/tasks/cora/backup-strategy.md:1
- [x] context/tasks/cora/session-checkpoint-procedure.md:1

## PRs (Log)
 - 2025-10-08 — feature/task-cleanup — Task cleanup: close obsolete CORA tasks and sync project summary — Status: Merged — PR: https://github.com/joshua-lossner/cora/pull/15
- 2025-10-05 — feature/branches-of-coherence-album — Add “Branches of Coherence” smooth‑jazz album and 9 Suno‑ready songs — Status: Merged — PR: n/a
  - Summary: Adds album overview and links; compiles 9 Suno‑ready track outputs (style prompts + instrumental cues); archives all inputs per workflow. Warm, reflective, late‑night suite with recurring resonance motif.
- 2025-10-04 — feature/roles-procedures-forest — Expand roles, procedures, and forest; onboarding polish — Status: Merged — PR: https://github.com/joshua-lossner/cora/pull/1
  - Summary: Adds a full set of role manifests and supporting procedures; simplifies the forest to a single group manifest; seeds downstream projects; improves README/AGENTS onboarding; and links the validator and example session.
- 2025-10-04 — feature/project-status-report — Add Project Status Report procedure; wire into PM role (terminal-only) — Status: Merged — PR: https://github.com/joshua-lossner/cora/pull/2
  - Summary: Adds a read-only status report procedure to print projects and tasks in terminal; wired into PM role and tracked as a task.
- 2025-10-04 — feature/coherenceism-project-seed — Add coherenceism.project seed (project/task/workflow visualizer) and update forest — Status: Merged — PR: https://github.com/joshua-lossner/cora/pull/3
  - Summary: Adds a seed for a UFC‑aware project viewer app and adds it to the forest group.
- 2025-10-04 — feature/coherenceism-project-projectfile — Add project file for coherenceism.project — Status: Merged — PR: https://github.com/joshua-lossner/cora/pull/4
  - Summary: Adds a project page to track scope, dependencies, and tasks for the downstream UFC project viewer app.
 - 2025-10-04 — feature/coherenceism-project-and-suno-tasks — Add coherenceism.project tasks and CORA Suno prompt tasks — Status: Merged — PR: https://github.com/joshua-lossner/cora/pull/5
  - Summary: Adds project tasks for coherenceism.project (init, UFC adapter, UI scaffold, PR links/a11y) and CORA tasks for Suno prompting (workflow and procedures); updates project summaries.
- 2025-10-04 — feature/update-pr-logging-procedures — Clarify and enforce PR log updates (open/merge) — Status: Merged — PR: https://github.com/joshua-lossner/cora/pull/6
  - Summary: Requires PR log + task updates on open; adds post‑merge logging step; new helper procedure.

- 2025-10-04 — feature/suno-music-procedures — Add Suno workflows, docs, and procedures — Status: Merged — PR: https://github.com/joshua-lossner/cora/pull/10
  - Summary: Adds Suno style prompt and custom lyrics procedures; adds create-song and create-album workflows with content scaffolding; adds Suno guidance docs.

## Notes
- Retired projects: coherenceism-ai, coherenceism-org, and coherenceism-project were removed from CORA tracking on 2025-10-16. Any internal links mentioned in older PR summaries that pointed to their project/task files have been pruned. See context/logs/2025-10-16.md:12 for provenance.

## Next Small Moves
- Open PR for current branch and log it above.
- Run content validator and note any fixes.
- Draft a minimal “Example PR” under `procedures/git/open_pull_request.md:1` if we find gaps.
