---
kind: task
title: Establish Branching Strategy & Git Procedures
project: cora
status: done
git_status: merged
branch: feature/roles-procedures-forest
pr_url: https://github.com/joshua-lossner/cora/pull/1
updated: 2025-10-04
tags: [git, process]
depends_on: []
---

# Task — Establish Branching Strategy & Git Procedures

## Purpose
Adopt a clear, lightweight branching strategy (main + feature/bugfix + PRs) and document it in procedures for repeatable use.

## Steps
1. Add branching strategy doc and supporting git procedures.
2. Update Project Manager and QA/Release Manager roles to load the new procedures.
3. Create a feature branch for this change and push it.
4. Open a PR and set `git_status: pr_open` with `pr_url` in this task.

## Acceptance
- Procedures exist under `procedures/git/` and roles load them.
- Feature branch created and PR opened.
- This task updated with `git_status: pr_open` and `pr_url`.

## Links
- `procedures/git/branching_strategy.md:1`
- `procedures/git/open_pull_request.md:1`
- `context/roles/project-manager.md:1`
- `context/roles/qa-release-manager.md:1`
