---
kind: documentation
title: COHERENCE — Forest
intent: Index and conventions for downstream projects (the Coherenceism forest)
status: active
updated: 2025-10-16
tags: [forest, registry]
init:
  files: []
index:
  map: []
scope: directory
---

# Forest — Index

Purpose
- Provide a simple index for downstream projects that grow from the Coherenceism trunk (CORA), and document how we group and reference them.

Conventions
- This repo catalogs forest members via a single group manifest (`coherenceism-forest.md`) rather than per-tree files.
- CORA is the trunk, not a forest-tree entry; the group manifest may still list CORA for orientation.
- Downstream code projects live as sibling repositories to `cora/` (e.g., `~/Projects/coherenceism-ai/`). Do not nest downstream repos inside CORA; reference CORA via submodule.
- Downstream repos include CORA as a read-only submodule.

Shapes (lightweight)
- `kind: forest-group` — a list of member ids with short notes; acts as the index.
- (Optional, not used here) `kind: forest-tree` — per-tree entries with origin seed and repo info.

Index
- `coherenceism/forest/coherenceism-forest.md:1` — The Coherenceism Forest (members and notes)
