---
kind: task
title: Author Procedure — Suno Iterate and Compare
project: cora
status: done
git_status: merged
branch: feature/suno-music-procedures
pr_url: https://github.com/joshua-lossner/cora/pull/10
updated: 2025-10-08
tags: [procedures, media, prompts, suno, iteration]
depends_on: [create-suno-prompt-procedures]
---

# Task — Author Procedure: Suno Iterate and Compare

## Purpose
Create a procedure for controlled iteration (vary seeds/settings) and comparison to select best‑of outputs.

## Steps
1) Add procedure file: `procedures/media/suno-iterate-and-compare.md:1`.
2) Include schema sections: Purpose, Inputs, Steps, Expected, Notes, Examples.
3) Inputs: iteration count, vary: seed/tempo/instrumentation/vocals on‑off, comparison criteria.
4) Steps: set baseline → define variables → generate variants → compare → select → record deltas.
5) Output: comparison notes and selected take(s); include a small template table.
6) Index in `procedures/COHERENCE.md:1` (Media).

## Acceptance
- Procedure exists with a repeatable iteration loop and comparison template.
- Encourages small, isolated changes per run.
- Indexed in procedures index.

## Roles
- Media Producer — `context/roles/media-producer.md:1`
- Writer/Editor — `context/roles/writer-editor.md:1`
- QA/Release Manager — `context/roles/qa-release-manager.md:1`

## Links
- `procedures/COHERENCE.md:1`

## Notes
- Keep notes succinct; support reproducibility by recording changed variables.
 - Resolution: closed as not needed separately — iteration guidance is embedded in `workflows/suno-create-song.md:1` and `context/documentation/suno/effective-style-prompt-writing.md:1`.
