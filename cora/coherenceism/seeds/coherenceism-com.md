---
kind: content
type: seed
title: Seed — Coherenceism.com
summary: A commerce site for coherent prompt packs: clear, reusable prompts aligned to CORA procedures, roles, and workflows.
status: draft
updated: 2025-10-04
version: 2025.10
tags: [commerce, prompts, marketplace]
sites: [info]
spawned_systems: [coherenceism-com]
seed_stage: idea
canonical_slug: coherenceism-com
parent: community-and-culture
authors: [Coherence Network]
related: [procedures/COHERENCE.md, context/roles/COHERENCE.md]
---

# Seed — Coherenceism.com

Offer coherent prompt packs that actually reduce noise: small, well-documented prompts tied directly to CORA procedures, roles, and workflows. Each pack ships with examples, expected outputs, and provenance.

## Product Shape
- Prompt Packs: themed sets (e.g., Essay Pipeline, Project Manager Today Plan, Research Claims & Evidence) with Operator Prompts, short examples, and save-path conventions.
- Formats: Markdown-first; printable PDF companion optional.
- Provenance: frontmatter with authorship, updated date, version, related CORA paths.
- License: permissive for personal and internal team use; no resale.

## MVP Slice
- 1 pack: “Essay from Notes” prompts — outline, draft, fact-check, refine, compile; includes file path map and a tiny walkthrough.
- Storefront: minimal product page with pack contents, sample pages, and purchase link.
- Delivery: zip of Markdown + PDF; changelog file with version history.

## Rails
- CORA remains canonical; packs mirror procedures and roles without drifting.
- Versioned packs; updates highlight changes and impact.
- Vendor-neutral; prompts work across agent UIs.

## Guardrails
- Clarity over hype; no inflated claims.
- Privacy-forward checkout; minimal data collection.
- Refund policy: if it doesn’t reduce noise, refund.

## Success Signals
- Buyers can run a workflow end-to-end using only the pack and CORA paths.
- Support requests trend to “extension ideas,” not confusion on basics.

## Next Steps (Downstream)
1) Initialize `coherenceism.com` repo or site; include CORA as read-only submodule for references.
2) Define product schema (frontmatter for packs) and a simple listing template.
3) Ship the first pack; integrate a lightweight checkout (e.g., vendor-neutral store or external provider) and automated delivery.

