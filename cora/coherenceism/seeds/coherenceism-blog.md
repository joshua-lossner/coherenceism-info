---
kind: content
type: seed
title: Seed — Coherenceism.blog
summary: A writing-forward site for essays, opinion, research briefs, and journals that apply Coherenceism to current issues.
status: draft
updated: 2025-10-04
version: 2025.10
tags: [blog, website, writing, coherenceism]
sites: [info]
spawned_systems: [coherenceism-blog]
seed_stage: idea
canonical_slug: coherenceism-blog
parent: community-and-culture
authors: [Coherence Network]
related: [primer-coherenceism, why-presence-beats-productivity, nested-coherence]
---

# Seed — Coherenceism.blog

A simple, durable publishing surface for written communication that promotes Coherenceism: journals, essays, opinion pieces, research briefs, and explainers responding to current issues.

## Germination Notes
- Audience: readers seeking coherent perspectives on timely topics.
- Tone: reflective, non-performative; clarity over heat.
- Editorial rhythm: small, frequent posts; occasional deeper essays.

## Information Architecture
- Home — latest posts, featured leaf.
- Essays — longer form; often originate from CORA’s essay workflow.
- Journals — shorter reflections and field notes.
- Opinions — argued positions with clear claims and evidence grading.
- Research — briefs, claim tables, and synthesis.
- About — what Coherenceism is and how to engage.

## Content Sources (from CORA)
- Leaves (canon): `coherenceism/leaves/*.md`
- Essays pipeline outputs: `harvest/essays/out/YYYY-MM-DD/<slug>/final.md`
- Context references: `context/philosophy/coherenceism.md:1`, `context/documentation/cora/knowledge-tree.md:1`

## MVP Slice
- Static site that renders posts from CORA (no inline editing).
- One feed page for latest; one detail page template.
- Tag and date filters; links back to CORA sources.

## Guardrails
- CORA remains canonical; blog consumes content read-only.
- Provenance footer on each post: source path(s), authorship, updated date.
- Fact-claims labeled (F/I/U) where applicable; link to sources.

## Success Signals
- Readers can navigate from a post to its CORA source in one click.
- Publishing cadence established without duplicating or drifting canon.

## Next Steps (Downstream)
1) Initialize `coherenceism.blog` repo; include CORA as a read-only submodule.
2) Implement loaders for leaves and essay outputs; render provenance and claim labels.
3) Ship Home, Essays index, and one post detail page.

