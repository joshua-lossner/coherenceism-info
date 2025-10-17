---
kind: documentation
title: LLM-First Operation (No Code)
intent: Show non-coders how to run CORA workflows using only Markdown prompts and files
status: active
updated: 2025-10-04
tags: [operation, llm, workflow]
---

# LLM-First Operation — No Code Required

This guide shows how to run CORA using only Markdown. The LLM is the operating system: you (or your agent) open workflow and procedure docs, copy prompts, and save the returned artifacts to the listed paths.

## Core Pattern
- Workflows live in `workflows/*.md` and list the sequence of steps.
- Each step points to a Markdown procedure in `procedures/` with an “Operator Prompt”.
- You paste that prompt into your LLM, then save the blocks it returns to the paths shown.

## Where to Start
- Essays: `workflows/writing/essay_from_notes.md`
 - Example Session: `context/documentation/cora/example-session-essay-from-notes.md:1`

## File Locations (Essays)
- Input: `harvest/essays/in/<file>.md` (frontmatter + notes)
- Output: `harvest/essays/out/YYYY-MM-DD/<slug>/` (no separate archive; rely on git history)

## Tips
- Keep your LLM chat grounded: include the relevant files (intent, notes, outline) when running each step.
- Save early artifacts before moving on (outline → draft → check → refine → compile).
- If a step can’t meet a constraint (e.g., thin evidence), return a short request list and continue after resolution.

## Why This Shape
- Vendor-neutral, copy/paste friendly, and readable by anyone.
- Every solved problem becomes a reusable page: captured once, used forever.
