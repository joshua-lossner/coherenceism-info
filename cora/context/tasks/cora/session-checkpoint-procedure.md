---
kind: task
title: Add Session Checkpoint Procedure
project: cora
status: done
updated: 2025-10-07
tags: [hygiene, backups, logs]
depends_on: []
---

# Task — Add Session Checkpoint Procedure

## Purpose
Create a simple manual checkpoint procedure to snapshot today’s state, update logs, and optionally mirror the checkpoint to an iCloud folder.

## Steps
1) Add `procedures/core/session_checkpoint.md:1` with:
   - Steps: update log; make `snapshots/YYYY-MM-DD/HHMM/` directory; copy repo (or selected paths) into it; optionally run `tmutil localsnapshot`; optionally mirror to `$CORA_SYNC_DIR` if set.
   - Operator Prompt and safety notes (no destructive actions; opt-in mirror).
2) Add `.env.example:1` hint: `# CORA_SYNC_DIR=~/Library/Mobile Documents/com~apple~CloudDocs/cora-checkpoints` (commented).
3) Mention the procedure in `AGENTS.md:1` under Conventions (optional, as a recommended step after notable changes).

## Acceptance
- Procedure file exists with clear steps and Operator Prompt.
- `.env.example` includes the optional `CORA_SYNC_DIR` hint (commented).

## Links
- `procedures/core/update_log.md:1`
- `.env.example:1`
