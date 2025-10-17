---
kind: task
title: Expand Roles/Procedures and Reshape Forest Index
project: cora
status: done
git_status: merged
branch: feature/roles-procedures-forest
pr_url: https://github.com/joshua-lossner/cora/pull/1
updated: 2025-10-04
tags: [roles, procedures, forest]
depends_on: [establish-branching-strategy]
---

# Task — Expand Roles/Procedures and Reshape Forest Index

## Purpose
Add comprehensive roles and supporting procedures so agents can operate end-to-end; simplify forest index to a single group manifest with an index doc.

## Steps
1. Add role manifests under `context/roles/*` and update the roles index.
2. Add supporting procedures under `procedures/*` (git, validation, design, media, api, devops, integrations, a11y, localization, commerce, legal, analytics, policy).
3. Simplify forest registry to `coherenceism-forest.md` + index; migrate seed references.
4. Update onboarding docs and link example session and validator.
5. Open PR; update this task with `git_status: pr_open` and `pr_url`.

## Acceptance
- Roles/procedures added; forest index simplified; onboarding polished.
- PR opened and linked here; project PRs log updated.

## Links
- `context/roles/COHERENCE.md:1`
- `coherenceism/forest/COHERENCE.md:1`
- `coherenceism/forest/coherenceism-forest.md:1`
- `README.md:1`, `AGENTS.md:1`
