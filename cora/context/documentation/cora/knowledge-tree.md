---
kind: documentation
title: Knowledge Tree — Fruit Ontology and Rails
intent: Define the Coherenceism tree + fruit model (roots→branches→seeds/leaves→harvest), relationships, frontmatter, and rendering routes for multi-site overlays
status: active
updated: 2025-10-09
tags: [coherence, ontology, harvest, ufc]
---

# Knowledge Tree — Fruit Ontology

## Purpose
Provide a clear, durable model for how Coherenceism fruit is grown and stored: how living knowledge (roots→branches→seeds→leaves) produces artifacts, how those artifacts are harvested, validated, and rendered across multiple sites using the UFC pattern.

## Scope
This is a repository-level ontology and integrity spec (rails). It documents types, relationships, and validation signals. The living tree lives under `coherenceism/`; the fruit it produces is gathered under `harvest/`.

## Model Overview
- Roots — Canon and orientation; anchors the tree (why/how).
- Trunk — System rails: UFC load order, knowledge/fruit graph, UI plumbing.
- Branches — Stable themes that hold tone/scope; parents for seeds/leaves.
- Seeds — Project starters: ideas intended to germinate downstream trees/systems. Track `spawned_systems` linking to `coherenceism/forest/` and capture the promise and scope of the new surface. Not for everyday practices.
- Leaves — Atomic knowledge units that grow from branches (claims, definitions, patterns, references, questions). They are building blocks that feed fruit, not publish-ready artifacts.
- Fruit — Concrete artifacts (essays, songs, albums, media) produced by any project; stored in `harvest/` for reuse.
- Mycelium — Orchestration layer (AI + procedures + tools) that routes attention.
- Compost — Lifecycle path for archiving; endings feed future material.

## Locations (Filesystem)
- Roots: `coherenceism/roots/…`
- Branches: `coherenceism/branches/…`
- Seeds: `coherenceism/seeds/…`
- Leaves: `coherenceism/…` (any subfolder) with `type: leaf`. Leaves may use the same content shape as fruit, but typically omit `sites` to avoid accidental downstream publication.
- Fruit store: `harvest/…` (essays, songs, albums, media) grouped by medium; all projects deposit finished fruit here.
- Forest registry: `coherenceism/forest/…`
- System rails and load order: `context/COHERENCE.md`, `context/architecture/…`
 - Essays workflow I/O: inputs at `harvest/essays/in/` (markdown+frontmatter); outputs at `harvest/essays/out/YYYY-MM-DD/<slug>/` (finals carry `type: leaf`).
- Tools/procedures: `context/tools/…`, `procedures/…`
 - Music (Suno) I/O: song inputs at `harvest/songs/in/` evolve into songs and move to `harvest/songs/out/YYYY-MM-DD/<song-slug>/` (no archive; git history is provenance). Album inputs at `harvest/albums/in/` evolve and move to `harvest/albums/out/<album-slug>/`.

## Forest Registry
Seeds that germinate new systems are catalogued under `coherenceism/forest/` using one of:
- `kind: forest-group` — a lightweight manifest listing member ids (used as the primary index in this repo)
- `kind: forest-tree` — optional per-tree entries documenting purpose, origin seed, repository, and next change
Each approach keeps lineage traceable without embedding implementation back into CORA.

## Frontmatter Requirements
See also: `context/documentation/cora/content-contract.md` for the formal harvest contract.
Shared keys across all types:
- `kind: content`
- `title`, `summary`, `status` (draft|active|archived)
- `updated` (ISO date), `version` (e.g., 2025.09), `tags: []`, `sites: []`
- `canonical_slug` (unique across the tree)
- `authors: []`, `related: []`

Type‑specific keys:
- Root: `type: root`
- Branch: `type: branch`, `parent: coherenceism-root`, `order`
- Seed: `type: seed`, `parent: <branch-slug>`, optional `order`, required `spawned_systems: [tree-slug, ...]` to name downstream trees; recommended `seed_stage: idea|incubating|germinated|retired`
- Leaf: `type: leaf`, `parent: <branch-slug>`, optional `seed_refs: []`, optional `subtype: claim|definition|pattern|reference|question`

## Relationships and Integrity
- Parent rules: root→branch; branch→seed|leaf.
- `canonical_slug` must be unique repository‑wide.
- Every non‑root item must declare `parent` that resolves to an existing node of an allowed type.
- `sites: []` drives multi‑site publication surfaces (e.g., `info`, `blog`, `ai`).

## External Overlays (Rendering)
CORA ships no UI. Downstream sites render this fruit using their own frameworks. Recommended mapping:
- Root: list branches and orientation.
- Branch: render branch leaves/fruit and list its seeds/leaves.
- Seed: render a concise project‑starter card with scope, `seed_stage`, and `spawned_systems`, linking into `coherenceism/forest/<tree>.md`.
- Leaf: render atomic knowledge units linked to their branch (claims, definitions, patterns, references, questions). Downstream UIs may overlay leaves within fruit for context.

Conventions (recommended, not enforced by CORA):
- Keep side nav to branches; highlight active.
- Use branch accent colors in downstream repos as desired.
- Strip duplicate H1s during render.

## Multi-Site Overlay
- Keep CORA as canonical knowledge + harvest only (no UI).
- Each site consumes this repo (submodule) and filters by `sites` frontmatter.
- Site chrome and layout live in downstream repos.

## Lifecycle and Composting
- Status transitions: draft → active → archived.
- Archiving moves items out of navigation while preserving links; archived items remain nutrients (references, summaries feeding future seeds).
- Version and `updated` track changes; major revisions can bump `version` and note consequences.

## Validation (signals to enforce)
- Required keys present (see above) and valid `parent` types.
- `canonical_slug` uniqueness; no collisions.
- Optional: check `seed_refs` in leaves resolve to existing seeds.
- Required (seeds): confirm `spawned_systems` exists and appears in the forest (either in a `forest-group` members list or a `forest-tree` entry); recommended `seed_stage` in allowed set.
Use `procedures/content/validate-content.md:1` as the enforcement scaffold.

## Example — Leaf Frontmatter
```
---
kind: content
type: leaf
title: Why Presence Beats Productivity
summary: A short explainer linking practice to pattern.
status: draft
updated: 2025-09-22
version: 2025.09
tags: [presence, practice]
sites: [info, blog]
canonical_slug: why-presence-beats-productivity
parent: practice-of-presence
authors: [Coherence Network]
related: [one-breath-reset]
subtype: claim
---

# Why Presence Beats Productivity

Body…
```

## Notes for Builders
- Keep template files in `harvest/_templates/` authoritative; copy to create new items.
- Use `harvest/_templates/seed.md` when writing new seeds so planting metadata and notes stay consistent.
- Prefer small, linked docs over long pages; let the tree do the organizing.
