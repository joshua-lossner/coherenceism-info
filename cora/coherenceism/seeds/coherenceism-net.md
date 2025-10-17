---
kind: content
type: seed
title: Seed — Coherenceism.net
summary: A networking surface for people interested in Coherenceism — directory + social (own network or federated via Mastodon).
status: draft
updated: 2025-10-04
version: 2025.10
tags: [networking, community, social, federation]
sites: [network]
spawned_systems: [coherenceism-net]
seed_stage: idea
canonical_slug: coherenceism-net
parent: community-and-culture
authors: [Coherence Network]
related: []
---

# Seed — Coherenceism.net

Build a simple, humane networking layer for the Coherenceism community: a people/projects directory, plus a social surface — either a small Mastodon instance (federated) or a lightweight, homegrown network with clear guardrails.

## Germination Notes
- Audience: practitioners, readers, and collaborators who want to connect.
- Shape: directory-first (people, projects, local circles); optional social stream.
- Federation: prefer ActivityPub (Mastodon) for portability; keep identity ownership clear.
- Privacy: opt-in profiles; minimal data; explicit scopes and retention.

## MVP Slice
- Directory: static profiles pulled from CORA-style frontmatter (people/projects groups) or a small JSON store.
- Social: invite-only Mastodon instance with basic moderation and clear community guidelines.
- Cohesion: link profiles and posts back to CORA artifacts (leaves, seeds, projects) when relevant.

## Rails
- CORA remains canonical for philosophy and content; this surface is for connection and signal amplification.
- Downstream repo hosts infra/config (e.g., Mastodon) separate from CORA content.

## Guardrails
- Privacy-first defaults; no tracking, no ad tech.
- Moderation with transparent rules; coherence over virality.
- Clear off-ramps: easy export/deletion; no dark patterns.

## Success Signals
- People can find aligned collaborators within two clicks.
- Signal stays high: low spam, low flame, high relevance.
- Participation is portable (federated) and non-sticky (no lock-in).

## Next Steps (Downstream)
1) Initialize `coherenceism.net` repo; decide between Mastodon instance or minimal custom feed.
2) Draft community guidelines aligned to Coherenceism (presence, alignment, compost cycles).
3) Ship directory (static) + invite-only social; iterate moderation tools.

