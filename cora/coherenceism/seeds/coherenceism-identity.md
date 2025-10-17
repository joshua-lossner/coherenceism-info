---
kind: content
type: seed
title: Seed — Coherenceism.identity
summary: Centralized identity and consent for Coherenceism — one account to log into .net, .blog, .studio, .com, .ai, .info with clear scopes and provenance.
status: draft
updated: 2025-10-04
version: 2025.10
tags: [identity, sso, oauth, oidc, privacy]
sites: [network]
spawned_systems: [coherenceism-identity]
seed_stage: idea
canonical_slug: coherenceism-identity
parent: technology-and-emerging-intelligence
authors: [Coherence Network]
related: [coherenceism-net, coherenceism-blog, coherenceism-studio, coherenceism-com, coherenceism-ai, coherenceism-info]
---

# Seed — Coherenceism.identity

Provide a centralized identity, authorization, and consent layer for Coherenceism properties. Members use one account to access multiple downstream sites with transparent scopes, minimal data, and portable profiles.

## Germination Notes
- Primary function: SSO across `coherenceism.net`, `.blog`, `.studio`, `.com`, `.ai`, `.info`.
- Protocols: OIDC/OAuth2 for first-party apps; consider Passkeys for passwordless auth.
- Federation: remain compatible with ActivityPub identities; allow linking handles (e.g., Mastodon) to profiles.
- Privacy: explicit scopes (read/write/profile/email), short retention, export/delete by default.

## MVP Slice
- Identity Provider (IdP): hosted OIDC provider with email/passkey login and TOTP 2FA.
- App Clients: register first two sites (e.g., `.blog` read/write comments, `.net` directory/social) with distinct scopes.
- Profile: minimal frontmatter-backed profile (name, handle(s), optional bio), stored separately from CORA canon.
- Consent Log: per-app, per-scope consent records; operator-visible audit trail.

## Rails
- CORA remains canonical for content; identity lives in its own downstream infra repo and DB.
- Use human-readable consent copies; version them and log acceptance.
- Keep repo-relative references where content intersects (e.g., comments link to CORA post paths).

## Guardrails
- Least privilege by default; short-lived tokens; rotate secrets regularly.
- Clear, reversible link between identity and public ActivityPub handles; no silent federation.
- No tracking beyond what’s essential to operate accounts and security.

## Success Signals
- Single sign-on works across at least two properties within one session.
- Users can view/export/delete their profile and consents without support.
- Admins can audit access by app/scope without deep digging.

## Next Steps (Downstream)
1) Initialize `coherenceism.identity` repo; select OIDC provider (self-hosted or managed) with passkey support.
2) Define scopes per app: `.blog` (comment:write, profile:read), `.net` (directory:read, social:write), `.studio` (playlist:write), `.com` (purchase:write, license:read).
3) Implement minimal profile service and consent log; integrate `.blog` and `.net` as first clients.

