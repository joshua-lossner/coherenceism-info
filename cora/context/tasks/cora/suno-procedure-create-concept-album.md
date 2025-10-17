---
kind: task
title: Author Procedure — Suno Create Concept Album
project: cora
status: done
git_status: merged
branch: feature/suno-music-procedures
pr_url: https://github.com/joshua-lossner/cora/pull/10
updated: 2025-10-08
tags: [procedures, media, prompts, suno, album]
depends_on: [create-suno-prompt-procedures]
---

# Task — Author Procedure: Suno Create Concept Album

## Purpose
Create a procedure to define a concept album arc and track list with per‑track themes and prompt seeds.

## Steps
1) Add procedure file: `procedures/media/suno-create-concept-album.md:1`.
2) Include schema sections: Purpose, Inputs, Steps, Expected, Notes, Examples.
3) Inputs: album concept, track count, per‑track themes/moods, ordering, persona_id (optional).
4) Output: track list with brief per‑track notes usable by lyrics/style procedures.
5) Provide 1 worked example (5–7 tracks).
6) Index in `procedures/COHERENCE.md:1` (Media).

## Acceptance
- Procedure exists with clear per‑track structure and one example.
- Integrates with lyrics and style prompt procedures.
- Indexed in procedures index.

## Roles
- Media Producer — `context/roles/media-producer.md:1`
- Writer/Editor — `context/roles/writer-editor.md:1`
- Project Manager — `context/roles/project-manager.md:1`

## Links
- `procedures/COHERENCE.md:1`

## Notes
- Keep per‑track seeds concise to enable focused generation.
 - Resolution: closed as completed via `workflows/suno-create-album.md:1` and `procedures/media/evolve_and_move_album.md:1`.
