---
kind: task
title: Add Project Status Report Procedure
project: cora
status: done
git_status: merged
branch: feature/project-status-report
pr_url: https://github.com/joshua-lossner/cora/pull/2
updated: 2025-10-04
tags: [projects, tasks, report]
depends_on: [establish-branching-strategy]
---

# Task — Add Project Status Report Procedure

## Purpose
Create a read-only procedure that prints a terminal report of all projects and their task statuses (including git fields), to aid daily reviews.

## Steps
1) Add `procedures/project-management/report_status.md:1` with Operator Prompt.
2) Add to Project Manager role shortlist.
3) Validate by running a dry read of `context/projects/*.md` and `context/tasks/*/*.md`.

## Acceptance
- Procedure exists; Project Manager loads it; output shape is human-scannable.

## Links
- `procedures/project-management/report_status.md:1`
- `context/roles/project-manager.md:1`
