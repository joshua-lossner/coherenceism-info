---
kind: task
title: Author Procedures — Suno Prompt Recipes
project: cora
status: done
git_status: merged
branch: feature/suno-music-procedures
pr_url: https://github.com/joshua-lossner/cora/pull/10
updated: 2025-10-08
tags: [procedures, prompts, media, suno]
depends_on: [create-suno-prompt-workflow]
---

# Task — Author Procedures: Suno Prompt Recipes

## Purpose
Add concrete procedures that operators can run to compose, iterate, and refine Suno prompts. Keep them vendor-neutral and reusable.

## Steps
1) Create Quickstart procedure at `procedures/media/suno_prompt_quickstart.md:1` with a minimal prompt template and a short run-through.
2) Create Detailed Recipe at `procedures/media/suno_prompt_recipe.md:1` covering: genre/style, BPM/energy, mood adjectives, instrumentation, vocals, structure, production/mix notes, optional references (style-level), negative constraints; include examples.
3) Create Iteration Loop at `procedures/media/suno_prompt_iteration.md:1` (vary seeds/settings, compare outputs, keep best-of, note deltas).
4) Update `procedures/COHERENCE.md:1` to index the above under Media.
5) (Optional) Add tool note at `context/tools/suno.md:1` (capabilities, safe use, dos/don’ts).

## Acceptance
- Three procedures exist (Quickstart, Recipe, Iteration) with CORA procedure frontmatter and clear steps.
- Indexed in `procedures/COHERENCE.md` with short summaries.
- Examples included; language is vendor-neutral and policy-safe.

## Roles
- Writer/Editor — `context/roles/writer-editor.md:1`
- Media Producer — `context/roles/media-producer.md:1`
- Content Librarian — `context/roles/content-librarian.md:1`
- Project Manager — `context/roles/project-manager.md:1`

## Links
- `procedures/COHERENCE.md:1`
- `procedures/media/produce_audio_essay.md:1`

## Notes
- Avoid copyrighted lyrics and direct song replication; keep prompts descriptive at the style/mood level.
- Resolution: closed as completed via `procedures/media/suno-create-style-prompt.md:1` and `procedures/media/suno-create-custom-lyrics.md:1`; iteration guidance lives inside workflows and docs.
