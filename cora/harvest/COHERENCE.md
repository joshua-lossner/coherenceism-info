---
kind: documentation
title: COHERENCE — Harvest
intent: Centralize the shared harvest of Coherenceism fruit across projects; enable cross-site reuse
status: active
updated: 2025-10-16
tags: [harvest, coherence, publishing]
scope: directory
---

# COHERENCE — Harvest (Trunk)

## Purpose
Maintain a single source of truth for the fruit produced by the Coherenceism network. CORA ships no UI; downstream apps import this repo read‑only and render fruit in their own overlays. The harvest keeps every piece—essays, songs, albums—discoverable no matter which project grew it.

In the orchard metaphor:
- Seeds/branches/leaves describe the living Coherenceism tree (`coherenceism/`).
- Fruit refers to concrete artifacts (essays, songs, albums, media) created by any project.
- `harvest/` is the barn where fruit is cleaned, labeled, and ready for reuse.

See also: `context/documentation/cora/content-contract.md` for the formal harvest contract.

## Structure
- `_templates/content-item.md` — recommended frontmatter + shape for new fruit
- `coherenceism/roots/` — canon and orientation
- `coherenceism/branches/` — stable themes
- `coherenceism/seeds/` — project starters that can spawn downstream trees/systems
 - `coherenceism/leaves/` — atomic knowledge units (claims, definitions, patterns, references, questions)

## Frontmatter Schema (recommended)
- kind: `content`
- type: `root|branch|leaf|seed`
- title: string
- summary: short abstract (optional, use first paragraph if omitted)
- status: `draft|active|archived|deprecated`
- updated: `YYYY-MM-DD`
- version: `YYYY.MM` or semver (optional)
- tags: `[ ... ]`
- sites: `[media, info, ai, blog, social, network, com, tech]`
- canonical_slug: `kebab-case`
- parent: canonical_slug of parent (omit for type: root)
- order: number for sibling ordering (optional)
- authors: `[ ... ]` (optional)
- related: `[canonical_slug, ...]` (optional)
- subtype: `claim|definition|pattern|reference|question` (leaves only; optional)

Note: Patterns are out of scope for the trunk. Use seeds + leaves to capture practices and narratives; downstream repos may define additional types.

## Fruit Types & Selection
- Roots/branches/leaves/seeds continue to model the living tree; files reference fruit via `sites`, `type`, and `canonical_slug`.
- Use `sites` to note where fruit is shipped (blog, media, ai, etc.).

### Querying the Harvest
- Per-site selection: files with `sites` containing the site key within `coherenceism/`.
- Examples:
  - List blog fruit: `rg -l '^sites:.*\bblog\b' coherenceism`
  - List media fruit: `rg -l '^sites:.*\bmedia\b' coherenceism`
  - Show titles + slugs: `rg -n '^(title|canonical_slug):' coherenceism`

### Site Keys
The `sites` array in frontmatter is an optional hint for downstream consumers (e.g., `info`, `blog`, `ai`, `tech`). CORA does not bind these to specific domains.

## Notes
- Prefer canonical fruit here; use per-site overlays to adapt intros/CTAs.
- Keep media binaries outside this repo; store descriptors here, files elsewhere.

## CLI Selection Examples
```bash
# Fruit tagged for "blog"
rg -l '^sites:.*\bblog\b' coherenceism

# Titles and slugs for those pieces
rg -n '^(title|canonical_slug|sites):' $(rg -l '^sites:.*\bblog\b' coherenceism)
```

### Leaf Subtype Queries
Leaves are atomic knowledge units that often omit `sites`. Use `subtype` to filter by kind of knowledge.

```bash
# Files for leaves with subtype "claim"
rg -l '^type:\s*leaf' coherenceism | xargs rg -l '^subtype:\s*claim'

# Titles, slugs, and subtype for those leaves
rg -n '^(title|canonical_slug|subtype):' $(rg -l '^type:\s*leaf' coherenceism | xargs rg -l '^subtype:\s*claim')

# Count leaves by subtype (distribution)
rg -l '^type:\s*leaf' coherenceism \
  | xargs rg -n '^subtype:\s*' \
  | sed -E 's/.*subtype:\s*([^#]+).*/\1/' \
  | awk '{$1=$1};1' \
  | sort | uniq -c | sort -nr
```

Notes
- If you also classify publish-ready fruit with `subtype`, run the same queries in `harvest/` or the whole repo.
- Omit `subtype` on leaves when not helpful; it’s optional and meant for lightweight selection.

## Root Navigation

To render a navigation for the living tree in a downstream site:

- Select branches under the root: items with `type: branch` and `parent: coherenceism-root`.
- Order by the `order` field (fallback to title if missing).

Example — list branch titles under the root
```bash
rg -n "^(type: branch|parent: coherenceism-root|title:)" coherenceism/branches \
  | awk '/^.*type: branch/{t=1} /^.*parent: coherenceism-root/{p=1} /^.*title:/{if(t&&p){print; t=p=0}}'
```
