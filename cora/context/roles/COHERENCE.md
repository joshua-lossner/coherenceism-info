---
kind: documentation
title: COHERENCE — Roles
intent: Curate session load sets via role manifests (who + what to load)
status: active
updated: 2025-10-16
tags: [roles, sessions]
init:
  files: []
index:
  map: []
scope: directory
---

# Roles — Index

Purpose
- Provide lightweight role manifests that curate exactly which personas, workflows, procedures, and references to load for a session. Roles reduce token load, increase repeatability, and keep focus.

Conventions
- One file per role under `context/roles/`, kebab-case.
- Frontmatter (minimal):
  - `kind: role`
  - `id: <role-id>`
  - `title`, `status`, `updated`, `tags: []`
  - `default_persona: <persona-id>` (e.g., `ivy`)
  - `alternates: []` (e.g., `[s_vektor]`)
- Sections:
  - Load Order — exact paths to open
  - Scope — what this role does (and doesn’t)
  - Capsule Prompt — a short starter prompt for the role
  - Constraints & Eval — role-specific guardrails and checks
  - Handoffs — when and how to switch personas/roles

Roles (current)
- `project-manager.md` — manage projects/tasks; keep work small and linked
- `researcher.md` — extract claims, scan sources, grade evidence, synthesize
- `workflow-designer.md` — design/refactor workflows that chain procedures into outcomes
- `role-architect.md` — create/refactor role manifests; ensure references exist; update roles index
- `writer-editor.md` — outline, draft, refine, and compile leaves; maintain voice and provenance
- `ux-designer.md` — map flows, wireframes, and content-first patterns; run a11y checks
- `brand-visual-designer.md` — design marks/covers/cards aligned with tokens/templates
- `product-lead.md` — define outcomes and MVP slices; align roadmap to forest
- `forest-steward.md` — maintain forest group and lineage; reconcile seeds ↔ members
- `fact-checker.md` — label claims (F/I/U), verify quotes, return checked drafts
- `content-librarian.md` — maintain frontmatter/links/archives; compost drift
- `design-system-steward.md` — evolve tokens/CSS/templates; guide adopters
- `media-producer.md` — produce audio essays/conversations; publish notes
- `frontend-engineer.md` — implement sites that consume CORA; apply design system
- `backend-engineer.md` — expose minimal read-only APIs; preserve canon
- `identity-sso-engineer.md` — implement centralized identity/SSO with clear scopes
- `community-steward.md` — moderate and cultivate participation; apply handbook
- `qa-release-manager.md` — define gates; run checks; ship small
- `devops-sre.md` — deploy/monitor/back up downstream sites; runbooks
- `integrations-engineer.md` — wire external services; document contracts
- `governance-policy-lead.md` — evolve handbook/templates; capture field learning
- `accessibility-lead.md` — audit contrast/keyboard/motion; gate releases
- `localization-lead.md` — coordinate translations/glossaries/attribution
- `commerce-lead.md` — package prompt packs; listings/delivery/refunds
- `legal-privacy.md` — privacy/contract reviews; consent copy checks
- `analytics-insights.md` — define success signals; minimal telemetry and dashboards

Notes
- Roles do not duplicate documents; they link to existing workflows/procedures/references.
- Keep manifests short and up to date; prefer paths with line refs for quick jumps.
