---
kind: task
title: Author Procedure — Suno Create Style Prompt
project: cora
status: done
git_status: merged
branch: feature/suno-music-procedures
pr_url: https://github.com/joshua-lossner/cora/pull/10
updated: 2025-10-08
tags: [procedures, media, prompts, suno, style]
depends_on: [create-suno-prompt-procedures]
---

# Task — Author Procedure: Suno Create Style Prompt

## Purpose
Create a procedure to craft a concise, production-ready style prompt string for Suno covering genre, mood, tempo/BPM, instrumentation, vocals, structure, mix notes, and negatives.

## Steps
1) Add procedure file: `procedures/media/suno-create-style-prompt.md:1`.
2) Include schema sections: Purpose, Inputs, Steps, Expected, Notes, Examples.
3) Inputs: genre/style, energy/BPM, mood adjectives, instrumentation, vocals(on/off + style), structure, production/mix, negative constraints, references (high‑level).
4) Output format: a single style prompt string with labeled segments or commas; keep under token budget.
5) Provide 2–3 example prompts across genres.
6) Index in `procedures/COHERENCE.md:1` (Media).

## Acceptance
- Procedure exists with clear input schema and examples.
- Output is a compact, copy‑ready style prompt string.
- Indexed in procedures index.

## Roles
- Media Producer — `context/roles/media-producer.md:1`
- Writer/Editor — `context/roles/writer-editor.md:1`
- Project Manager — `context/roles/project-manager.md:1`

## Links
- `procedures/COHERENCE.md:1`

## Notes
- Avoid named artists; describe style via abstract descriptors.
