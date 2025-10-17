---
kind: documentation
title: COHERENCE — Tasks
intent: Conventions and index for detailed task documents grouped by project slug
status: active
updated: 2025-10-16
tags: [projects, tasks]
scope: directory
---

# Tasks — Conventions

Purpose
- Keep substantial task documentation out of the project page when tasks need more space. Group tasks under `context/tasks/<project-slug>/`.

Schema (frontmatter)
- kind: `task`
- title: string
- project: `<project-slug>` (matches file in `context/projects/`)
- status: `todo|doing|blocked|done`
- updated: `YYYY-MM-DD`
- tags: `[]` (optional)
- depends_on: `[task-slug, ...]` (optional)
 - git_status: `none|in_branch|pr_open|merged` (optional)
 - branch: `feature/<slug>` or `bugfix/<slug>` (optional)
 - pr_url: `https://…` (optional)

Body Sections (recommended)
- Purpose — why this task exists
- Steps — short, verifiable actions
- Acceptance — success criteria/signals
- Links — artifact paths (workflows, content in/out, leaves)
- Notes — anything that aids execution

Usage
- Keep a short checklist on the project page; link to these task pages for detail.
- Update `status` and `updated` in the task frontmatter as you work.
 - When opening a PR for a task, set `git_status: pr_open`, add `pr_url`, and keep `branch` populated for easy tracking.
