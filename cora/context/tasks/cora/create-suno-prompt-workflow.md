---
kind: task
title: Create Workflow — Suno Prompting
project: cora
status: done
git_status: merged
branch: feature/suno-music-procedures
pr_url: https://github.com/joshua-lossner/cora/pull/10
updated: 2025-10-08
tags: [workflow, prompts, media, suno]
depends_on: []
---

# Task — Create Workflow: Suno Prompting

## Purpose
Define a reusable workflow for crafting effective prompts for Suno (AI music), including inputs, steps, iteration loop, and examples — vendor-neutral and adaptable.

## Steps
1) Draft workflow doc at `workflows/suno_prompts.md:1` following CORA workflow conventions (frontmatter, Purpose, Inputs, Steps, Expected, Operator Prompt).
2) Include a compact "Operator Prompt" that guides an agent through: goal/brief, style/genre, tempo/BPM, mood adjectives, instrumentation, vocals (on/off, style), structure (intro/verse/chorus/bridge/outro), references (optional, style-level only), production/mix notes, negative constraints.
3) Provide 2–3 example prompts (different genres) and note how to iterate and compare outputs.
4) Link the workflow in `workflows/COHERENCE.md:1` under an appropriate section.
5) Save changes and update this task status and `updated` when complete.

## Acceptance
- `workflows/suno_prompts.md` exists with frontmatter and an Operator Prompt.
- Includes clear inputs, steps, iteration loop, and at least 2 example prompts.
- Indexed in `workflows/COHERENCE.md`.

## Roles
- Writer/Editor — `context/roles/writer-editor.md:1`
- Media Producer — `context/roles/media-producer.md:1`
- Project Manager — `context/roles/project-manager.md:1`

## Links
- `workflows/COHERENCE.md:1`
- `procedures/writing/prepare_input.md:1`

## Notes
- Keep prompts original; avoid copyrighted lyrics. Reference styles at a high level; do not copy specific compositions.
 - Resolution: closed as completed via `workflows/suno-create-song.md:1` and `workflows/suno-create-album.md:1` which supersede a single generic workflow.
