---
kind: documentation
title: Tools — GitHub CLI (gh)
intent: Use GitHub CLI to open/view PRs and streamline review flows
status: active
updated: 2025-10-04
tags: [tools, github, cli]
---

# GitHub CLI (gh)

Purpose
- Create and manage pull requests from the terminal to keep flows fast and consistent with our branching strategy.

Install & Auth
- Install: https://cli.github.com/
- Authenticate: `gh auth login` (choose GitHub.com, HTTPS, and follow prompts). For CI/non-interactive, set `GH_TOKEN`.

Common Commands
- Open PR (from your branch) with template only (recommended):  
  - `gh pr create --base main --title "<title>" --body-file .github/pull_request_template.md`
- Open PR using auto-fill (may include commit messages):  
  - `gh pr create --base main --fill`
- View PR: `gh pr view --web` (opens in browser)
- Check status: `gh pr status`
- Assign reviewers: `gh pr edit --add-reviewer <user>`

Flow (with our procedures)
1) Start branch: `procedures/git/start_feature.md:1`
2) Push branch: `git push -u origin <branch>`
3) Create PR: `gh pr create --base main --title "<title>" --body-file .github/pull_request_template.md` (preferred) or `--fill` (may include commit text)
4) Update project/task per `procedures/git/open_pull_request.md:1`

Notes
- Keep PR language plain for non-technical readers; link repo paths.
- Use `--fill` to auto-populate title/body from the default template.
