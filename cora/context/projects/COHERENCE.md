---
kind: documentation
title: COHERENCE — Projects
intent: Index and conventions for tracking in‑progress projects (one file per project)
status: active
updated: 2025-10-16
tags: [projects, working]
init:
  files: []
index:
  map: []
scope: directory
---

# Projects — Index

Purpose
- Keep track of in‑progress projects that span multiple sessions. Each project is a single Markdown file in this folder.

Conventions
- One file per project, kebab‑case, with frontmatter `kind: project`, `title`, `status`, `updated`, and optional `tags`.
- Keep entries short; link to artifacts by path (workflows, content in/out, coherenceism leaves/seeds).
- Include a "Tasks" section with checkboxes to track work; prefer small, verifiable items.
- Prefer a “Next small move” under each project to maintain momentum.

Contents
- `cora.md` — Trunk evolution and operations (roles, procedures, rails)
 

Notes
- Archive by renaming `status: archived` when a project completes; keep the file for provenance.
