---
kind: documentation
title: COHERENCE — Logs
intent: Markdown‑first provenance of changes to context, harvest, procedures, and workflows
status: active
updated: 2025-10-16
tags: [logs, provenance, coherence]
scope: directory
---

# Logs — Provenance & Policy

Purpose
- Maintain a simple, local, Markdown audit trail of what changed, why, and where.
- Append an entry after every procedure/workflow and any edit/add to `context/` or `harvest/`.

Structure
- Daily files: `context/logs/YYYY-MM-DD.md`
- Each daily file has frontmatter and an `## Entries` section.
- Each entry is a short, human‑readable block under a `###` heading.

Policy
- After completing any procedure/workflow or making changes to context/harvest, append a log entry using `procedures/core/update_log.md:1`.
- Keep log entries concise; link to paths and tasks rather than duplicating detail.

Entry Shape (recommended)
```
### <ISO‑time> — <type> — <short summary>

- Actor: ivy | joshua | other
- Paths: [path, path]
- Procedure/Workflow: <id or path>
- Summary: one‑two lines of what/why
- Outcome: result or status
- Follow‑ups: [optional, tasks or notes]
```

Example
```
### 2025-10-08T19:15:00-07:00 — procedure — add Markdown logging system

- Actor: ivy
- Paths: [context/logs/COHERENCE.md, procedures/core/update_log.md]
- Procedure/Workflow: procedures/core/update_log.md
- Summary: Scaffolds logs policy and template; standardizes updates after changes.
- Outcome: Logging is now a first‑class, Markdown‑driven capability.
- Follow‑ups: Consider a weekly roll‑up view in projects.
```

Notes
- Logs are for provenance; actionable work should live as tasks under `context/tasks/` and be referenced from entries when relevant.
