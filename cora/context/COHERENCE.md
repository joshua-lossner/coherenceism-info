---
kind: documentation
title: COHERENCE — Context Index
intent: Scope and index for the context/ directory
status: active
updated: 2025-10-16
tags: [context, index]
scope: directory
init:
  files: []
index:
  map:
    - context/philosophy/
    - context/methodologies/
    - context/tools/
    - context/roles/
    - context/strategy/
    - context/projects/
    - context/tasks/
    - context/logs/
    - context/documentation/
    - context/mcp/
---

# Context — Index & Conventions

Purpose
- Provide a focused index for `context/` only: philosophy, methodologies, tools, roles, strategy, and working docs (projects, tasks, logs, documentation, mcp).
- Keep scope local to this directory. Cross‑repo orientation and load order live in `AGENTS.md`.

Conventions
- One folder per topic area under `context/`.
- Keep documents short and link‑rich; prefer living docs over monoliths.
- Use relative paths; avoid cross‑area maps here.

Index (context/)
- `context/philosophy/` — Coherenceism foundation and related texts
- `context/methodologies/` — Step‑by‑step processes
- `context/tools/` — Tool documentation (vendor‑neutral)
- `context/roles/` — Role manifests (curated session load sets)
- `context/strategy/` — Network strategy: challenges, programs, objectives, metrics
- `context/projects/` — In‑progress projects and notes
- `context/tasks/` — Detailed task docs grouped by project slug (optional)
- `context/logs/` — Provenance logs and templates
- `context/documentation/` — Deep‑dive docs for CORA
- `context/mcp/` — MCP server docs (docs only; configs live elsewhere)

Notes
- For ontology (tree→fruit) and rendering rails, see `context/documentation/cora/knowledge-tree.md`.
- For startup behavior and Lean Load, see `AGENTS.md`.
