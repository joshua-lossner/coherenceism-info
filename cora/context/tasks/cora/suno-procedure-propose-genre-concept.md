---
kind: task
title: Author Procedure — Suno Propose Genre/Concept
project: cora
status: done
git_status: merged
branch: feature/suno-music-procedures
pr_url: https://github.com/joshua-lossner/cora/pull/10
updated: 2025-10-08
tags: [procedures, media, prompts, suno]
depends_on: [create-suno-prompt-procedures]
---

# Task — Author Procedure: Suno Propose Genre/Concept

## Purpose
Create a procedure that, given inspiration (text or image alt), proposes 3–5 genre/concept options with mood, energy/BPM, and high‑level reference styles.

## Steps
1) Add procedure file: `procedures/media/suno-propose-genre-concept.md:1`.
2) Include frontmatter per Procedure Schema and sections: Purpose, Inputs, Steps, Expected, Notes, Examples.
3) Inputs: inspiration (text/image_alt), mood adjectives, energy/BPM range, constraints.
4) Output: shortlist with rationale, tags (genre, mood, energy), and example style descriptors (no copying).
5) Add 2–3 worked examples across different genres.
6) Index in `procedures/COHERENCE.md:1` (Media).

## Acceptance
- Procedure exists with schema-compliant frontmatter and clear steps.
- Produces 3–5 option shortlist with tags and rationale; examples included.
- Indexed in procedures index.

## Roles
- Writer/Editor — `context/roles/writer-editor.md:1`
- Media Producer — `context/roles/media-producer.md:1`
- Project Manager — `context/roles/project-manager.md:1`

## Links
- `procedures/COHERENCE.md:1`
- `procedures/writing/prepare_input.md:1`

## Notes
- Keep references high-level (style descriptors), never copy specific compositions.
- Resolution: closed as not needed separately — genre/concept exploration is integrated into `workflows/suno-create-album.md:1` and supported by `procedures/media/suno-create-style-prompt.md:1`.
