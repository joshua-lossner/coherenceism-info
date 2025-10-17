---
kind: strategy
title: COHERENCE Strategy
intent: Orientation and guardrails to steer CORA toward coherent, reusable systems
status: draft
updated: 2025-10-16
tags: [coherence, strategy, cora]
init:
  files: []
index:
  map: []
scope: directory
---

# COHERENCE Strategy

## Overview
Anchor all work to coherence-first principles. Keep the Universal File-based Context (UFC) as the canonical source, compose capabilities via procedures, and orchestrate personas through the COHERENCE department.

## Goals
- Reduce distortion in artifacts and decisions; privilege clarity over scope.
- Keep UFC canonical; downstream sites render, never redefine content.
- Build once, reuse forever via procedures and methodologies.
- Preserve authorship and agent handoffs; maintain provenance.

## Focus Areas
- Now: solidify content ontology, seed methodologies, create forest registry, establish active focus.
- Next: add validation procedures and procedure chains; exercise `essay_from_notes` end-to-end.
- Later: support multi-site overlays, external-tree registration, and change impact notes.

## Constraints
- No destructive edits to canonical content without explicit escalation.
- Vendor-neutral; avoid lock-in and tool-specific assumptions.
- Network calls only when a doc/procedure declares them.
- Preserve distinct personas; use explicit handoffs and attribution.
- Relative paths only; respect repo structure and load order.

## Eval Checks
- Hygiene: all new docs include frontmatter, purpose, and provenance.
- Links: referenced paths resolve; no orphaned parents/children in the knowledge tree.
- Reuse: where a procedure exists, work chains through it (not ad-hoc).
- Handoffs: agent authorship and transitions are explicit where multiple agents contribute.

## Failure Modes (and remedies)
- DRIFT: content diverges from ontology → run content validation; refactor to templates.
- OVERBUILD: excessive scope in seeds → cut to minimal viable pattern; defer to later.
- HIDDEN_COUPLING: undocumented dependencies → surface in docs; add constraints and checks.

## Operating Rhythm
- Ship small diffs; prefer incremental, linked updates.
- Compost endings: archive with summaries feeding future seeds.
- Regular coherence checks across structure, metadata, and links.

## References
- `context/philosophy/coherenceism.md`
- `context/documentation/cora/knowledge-tree.md`
- `personas/COHERENCE.md`

## Provenance
- Created: 2025-10-02 by Codex (CORA agent)
- Related: strategy seed to guide near-term build-out
- Notes: Update status to `active` after first validation pass is in use
