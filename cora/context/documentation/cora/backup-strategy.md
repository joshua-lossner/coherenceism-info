---
kind: documentation
title: Backup & Sync — Local‑First, Markdown‑Only
intent: Define a private, simple backup and sync approach for CORA without hosted git
status: active
updated: 2025-10-07
tags: [backup, sync, privacy, local-first]
---

# Backup & Sync — Local‑First, Markdown‑Only

## Purpose
Keep CORA private and resilient using macOS‑native backups and optional private sync, without relying on hosted git or line‑by‑line diffs.

## Principles
- Local‑first: work from a folder on disk; keep files resident (no placeholders).
- Markdown provenance: narrative of changes lives in `context/logs/`.
- Simple checkpoints: snapshot folders when it matters; avoid complex tooling.

## Recommended Setup
1) Time Machine (automatic versioning)
   - Ensure Time Machine targets a healthy disk. It backs up files actually present on disk.
   - Optional: create on‑demand snapshots before/after a session: `tmutil localsnapshot`.
2) iCloud Drive (optional offsite sync)
   - Move the entire `cora/` folder into iCloud Drive OR mirror checkpoints into a dedicated iCloud folder — avoid symlinks (iCloud syncs the link file, not the target).
   - Right‑click `cora/` in Finder → “Always Keep on This Mac” to keep local copies for TM.
   - Consider enabling iCloud Advanced Data Protection for end‑to‑end encryption.
   - Avoid “Optimize Mac Storage” for this folder to prevent eviction.
3) Manual Checkpoints (optional layer)
   - Create `snapshots/YYYY-MM-DD/HHMM/` and copy the repo (or key subfolders) into it.
   - Optionally mirror that snapshot to an iCloud directory (see `CORA_SYNC_DIR`).
   - Log the checkpoint in `context/logs/YYYY-MM-DD.md`.

## Do/Don’t
- Do: keep `cora/` local or mirrored; use logs for why/what changed; take snapshots at meaningful boundaries.
- Don’t: rely on symlinks for iCloud syncing; don’t store only placeholders (not backed up by TM).

## Optional Tools
- Syncthing: private device‑to‑device sync (no central server). Keep CORA as a shared folder.
- Obsidian “File Recovery”: rolling local snapshots for Markdown edits (works fine alongside TM).

## Operator Notes
- “Move vs. Mirror”: Moving `cora/` entirely into iCloud is simplest; mirroring checkpoints keeps day‑to‑day writes local and copies only stable snapshots upstream.
- “What if I need diffs?”: Use the human log and snapshots. When needed, compare files/folders with a diff tool; we are deliberately not optimizing for fine‑grained code diffs.

## Related
- `procedures/core/update_log.md:1`
- `AGENTS.md:1` (Conventions & Automation Defaults)
