---
kind: task
title: Open Session Branch and PR
project: cora
status: done
git_status: merged
branch: feature/coherenceism-project-and-suno-tasks
pr_url: https://github.com/joshua-lossner/cora/pull/5
updated: 2025-10-08
tags: [git, pr, session, pm]
depends_on: [establish-branching-strategy]
---

# Task — Open Session Branch and PR

## Purpose
Create a short-lived feature branch for today’s CORA content changes and open a PR. Scope for this session: create `coherenceism.project` and its project tasks; add CORA project tasks for creating a Suno workflow and procedures. Log the PR on the CORA project page and update this task’s git fields for traceability.

## Steps
1) Choose a branch name (example): `feature/coherenceism-project-and-suno-tasks`.
2) Start the branch using `procedures/git/start_feature.md:1`.
3) Stage and commit today’s content changes (new tasks and project updates) with concise messages referencing file paths.
4) Push the branch and open a PR using `procedures/git/open_pull_request.md:1` (or GitHub CLI if configured).
   - Proposed PR title: "Add coherenceism.project tasks and CORA Suno prompt tasks".
   - PR body summary bullets (suggested):
     - Add project tasks for `coherenceism.project` (init, UFC adapter, UI scaffold, PR links/a11y).
     - Add CORA tasks for Suno prompting (workflow + procedures).
     - Update `context/projects/cora.md` task summary.
5) Update `context/projects/cora.md:1` under “PRs (Log)” with date, branch, title, summary, status, and PR link.
6) Update this task frontmatter: set `git_status: pr_open`, fill `branch` and `pr_url`, and refresh `updated`.

## Acceptance
- Feature branch exists and PR is open to `main` with the title reflecting this session’s scope.
- CORA project page shows a PR entry under “PRs (Log)”.
- This task frontmatter updated with `git_status: pr_open`, `branch`, and `pr_url`.

## Roles
- Project Manager — `context/roles/project-manager.md:1`
- QA/Release Manager — `context/roles/qa-release-manager.md:1`

## Links
- `procedures/git/start_feature.md:1`
- `procedures/git/open_pull_request.md:1`
- `context/projects/cora.md:1`

## Notes
- Keep scope to today’s content changes only; if work grows, split into additional branches/PRs.
