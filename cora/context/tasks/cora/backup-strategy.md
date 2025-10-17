---
kind: task
title: Document Backup and Sync Strategy (Local-First)
project: cora
status: done
updated: 2025-10-07
tags: [backup, sync, privacy]
depends_on: []
---

# Task — Document Backup and Sync Strategy (Local-First)

## Purpose
Write a short guide that formalizes our private, Markdown-first backup/sync approach: Time Machine for versioning and optional mirrored checkpoints to iCloud (no symlinks).

## Steps
1) Add `context/documentation/cora/backup-strategy.md:1` covering:
   - Time Machine usage (including optional `tmutil localsnapshot`), scope, and limits.
   - iCloud setup: move folder vs. mirror snapshots; “Always Keep on This Mac”; Advanced Data Protection; avoid symlinks.
   - Optional: Syncthing as a private alternative; Obsidian File Recovery for edit history.
2) Cross-link from `AGENTS.md:1` (one bullet under Conventions) and `context/logs/COHERENCE.md:1` (Notes).
3) Add a brief note in `context/projects/cora.md:1` under Next Small Moves if relevant.

## Acceptance
- `context/documentation/cora/backup-strategy.md` exists with clear steps and guardrails.
- `AGENTS.md` mentions the doc; logs note aligns.

## Links
- `AGENTS.md:1`
- `context/logs/COHERENCE.md:1`
