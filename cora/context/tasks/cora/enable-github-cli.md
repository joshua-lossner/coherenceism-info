---
kind: task
title: Enable GitHub CLI PR Flow
project: cora
status: done
git_status: merged
branch: feature/update-pr-logging-procedures
pr_url: https://github.com/joshua-lossner/cora/pull/6
updated: 2025-10-08
tags: [tools, github, pr]
depends_on: [establish-branching-strategy]
---

# Task — Enable GitHub CLI PR Flow

## Purpose
Allow operators/agents to open and manage PRs from the terminal using GitHub CLI (`gh`) with our plain-language template.

## Steps
1) Add tool doc: `context/tools/github-cli.md:1` (install, auth, commands, flow).
2) Add `.github/pull_request_template.md` for auto-filled PR bodies.
3) Update `procedures/git/open_pull_request.md:1` to mention `gh pr create --fill` (optional).
4) Test: open a test PR from a throwaway branch using `gh` and confirm template loads.

## Acceptance
- Tool doc exists; template present; `gh pr create --fill` works locally.
- PRs follow the plain-language structure by default.

## Links
- `context/tools/github-cli.md:1`
- `.github/pull_request_template.md:1`
- `procedures/git/open_pull_request.md:1`
