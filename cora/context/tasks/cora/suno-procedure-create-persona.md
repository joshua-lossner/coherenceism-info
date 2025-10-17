---
kind: task
title: Author Procedure — Suno Create Persona
project: cora
status: done
git_status: merged
branch: feature/suno-music-procedures
pr_url: https://github.com/joshua-lossner/cora/pull/10
updated: 2025-10-08
tags: [procedures, media, prompts, suno, persona]
depends_on: [create-suno-prompt-procedures]
---

# Task — Author Procedure: Suno Create Persona

## Purpose
Create a procedure to define a consistent artist persona (voice and aesthetic) reusable across lyrics and style prompts.

## Steps
1) Add procedure file: `procedures/media/suno-create-persona.md:1`.
2) Include schema sections: Purpose, Inputs, Steps, Expected, Notes, Examples.
3) Inputs: voice traits, influences (abstract), themes, aesthetics, constraints/boundaries.
4) Output: a persona card with short fields; guidance on using persona_id in related procedures.
5) Provide 1–2 example personas.
6) Index in `procedures/COHERENCE.md:1` (Media).

## Acceptance
- Procedure exists with persona card template and examples.
- Shows how persona threads into lyrics and style prompts.
- Indexed in procedures index.

## Roles
- Writer/Editor — `context/roles/writer-editor.md:1`
- Media Producer — `context/roles/media-producer.md:1`
- Project Manager — `context/roles/project-manager.md:1`

## Links
- `procedures/COHERENCE.md:1`

## Notes
- Keep influences high-level, not derivative of specific works.
 - Resolution: closed as not needed as a separate procedure — reuse existing personas under `personas/` and reference via `persona_id` in song/album inputs.
