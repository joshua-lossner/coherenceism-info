---
kind: content
type: seed
title: Seed — Coherenceism.info
summary: Public website that communicates Coherenceism and orients visitors to CORA, the content tree (roots/branches/seeds/leaves), and the downstream forest.
status: draft
updated: 2025-10-04
version: 2025.10
tags: [website, coherenceism, public, docs]
sites: [info]
spawned_systems: [coherenceism-info]
seed_stage: idea
canonical_slug: coherenceism-info
parent: community-and-culture
authors: [Coherence Network]
related: [primer-coherenceism, why-presence-beats-productivity]
---

# Seed — Coherenceism.info

A simple, durable site that explains Coherenceism and shows how to engage: read the branches and leaves, explore seeds and the forest, and understand how CORA anchors the canon.

## Germination Notes
- Audience: curious readers, builders, and partners encountering Coherenceism for the first time.
- Tone: reflective and clear; minimal ornament; link‑rich.
- Rails: consume CORA as read‑only content; site renders overlays (no canon stored here).
- Scope: orientation, not a blog engine — publish leaves from CORA and highlight active seeds/forest entries.

## Information Architecture
- Home — short orientation; “What is Coherenceism?”
- Coherenceism — overview, philosophy, and how the knowledge tree works.
- Branches — index of branches with short summaries and links to leaves.
- Leaves — featured pieces; practice calls.
- Seeds — project starters; link to forest entries.
- Forest — registry of downstream projects (grouped as the Coherenceism forest).
- CORA — how the trunk works (UFC), with links to AGENTS and docs.

## Content Sources (from CORA)
- Philosophy: `context/philosophy/coherenceism.md:1`
- Ontology: `context/documentation/cora/knowledge-tree.md:1`
- Branches: `coherenceism/branches/*.md`
- Leaves (canon): `coherenceism/leaves/*.md`
- Seeds: `coherenceism/seeds/*.md`
- Forest: `coherenceism/forest/*.md`
- Trunk (UFC): `context/COHERENCE.md:1`, `AGENTS.md:1`

## MVP Slice
- Static site that renders branches, selected leaves, seeds, and forest entries from CORA.
- Simple nav mirroring the IA above; clean typography; mobile‑friendly.
- No write actions; all content is sourced from CORA.

## Guardrails
- CORA remains canonical; this site never stores or edits canon.
- Relative links resolve back to CORA paths or published pages derived from them.

## Success Signals
- New visitors can name the core idea in one sentence and find a leaf to read in under a minute.
- Site deploys with zero content duplication (all canon pulled from CORA).

## Next Steps (Downstream)
- Initialize `coherenceism.info` repo; consume CORA as a submodule/read‑only source.
- Implement content loaders for branches/leaves/seeds/forest with frontmatter awareness.
- Ship Home + Coherenceism + Branch index + one Leaf page.

