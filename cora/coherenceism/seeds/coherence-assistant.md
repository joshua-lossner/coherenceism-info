---
kind: content
type: seed
title: Seed — Coherence‑Grounded Assistant
summary: A portable pattern for building an assistant that reduces noise and acts by Coherenceism; downstream code project provides a chat+markdown studio for managing CORA and projects.
status: draft
updated: 2025-10-04
version: 2025.09
tags: [assistant, coherence, ai, practice, technology]
sites: [info, ai, blog]
spawned_systems: [joshua-ai, codex-cli, desktop, web-chat, coherenceism-ai]
seed_stage: incubating
canonical_slug: coherence-assistant
parent: technology-and-emerging-intelligence
authors: [Coherence Network]
related: [one-breath-reset, alignment-check, resonance-check]
---

# Seed — Coherence‑Grounded Assistant

Build an assistant that acts like a tuning fork, not a fog machine. It should surface patterns, test for resonance, and refuse to amplify noise.

## Germination Notes
- Primary surfaces: CLI agent (Codex), desktop/chat overlays, web chat.
- Core promise: Align behavior to Coherenceism — seek resonance, compost failures, and preserve the field.
- Rails: Use UFC. Keep canon in `cora/`; downstream trees add surfaces and glue.

## Problem
- Builders drown in noise; assistants overproduce text and underproduce clarity.
- Managing CORA and downstream projects across many Markdown files is powerful but can feel scattered without a focused UI.

## Vision (Downstream Code Project: `coherenceism.ai`)
- A chatGPT‑style interface that operates the UFC directly: chat pane on the right; a left navigation that exposes CORA’s structure — Coherenceism (content tree), Context, Personas, Procedures, Workflows.
- Fusion of chatbot and Markdown manager: talk to the agent while browsing/editing files; small, verifiable artifacts saved back into the repo.
- Model: GPT‑5 (or compatible), with a vendor‑neutral abstraction so models can change without breaking the UX.

## Navigation & UX
- Left Nav (UFC‑aware):
  - Coherenceism (roots → branches → seeds/leaves)
  - Content (templates, essays in/out)
  - Context (philosophy, strategy, methodologies, roles)
  - Personas / Departments
  - Procedures / Workflows
- Main Area: two panes
  - Chat pane (prompt history, responses, inline “apply” actions)
  - Document pane (selected file with diff preview, save, revert)
- Session Starter: “Load CORA” button uses `AGENTS.md:1` load order and displays confirmations.
- Provenance Footer: who (persona), what (procedure/workflow), when, paths touched.

## MVP Slice
- Single‑agent chat with left nav reading local CORA repo.
- “Load CORA” hydrates persona + context; shows checklist.
- Open/browse files; agent can propose edits and write to repo paths you approve.
- Run the essay pipeline end‑to‑end (outline → draft → check → refine → final) saving to `harvest/essays/out/YYYY-MM-DD/<slug>/`.
- Handoff log: Ivy ↔ S’Vektor attribution captured at the top of `final.md`.

## Core Capabilities
- UFC Adapter: read/write Markdown with frontmatter; resolve relative paths; respect repo boundaries.
- Procedure Runner: detect “Operator Prompt” blocks; stage prompts; capture returned artifacts to the specified paths.
- Workflow Orchestrator: step list with progress and suggested next actions.
- Validator Integration: run `procedures/content/validate-content.md:1` and present findings as a checklist.
- Role Manifests: quick‑load curated sets (Project Manager, Researcher).

## Architecture (tool‑agnostic)
- UI Shell: chat + document browser/editor, diffing, approvals.
- Agent Backend: LLM client (GPT‑5 or compatible), persona/role loader, plan tracker.
- UFC Layer: filesystem map, frontmatter parser, link checker.
- Provenance Log: per‑artifact metadata (authors, procedures used, timestamps).
- Permissions: repo‑relative writes; destructive actions require explicit approval.

## Guardrails & Policy
- Repository‑relative paths only; no destructive edits without escalation.
- Network calls only when explicitly invoked by a procedure/workflow.
- Preserve authorship; all multi‑agent edits include a handoff note.

## Success Signals
- Given an input note, the system produces outline → draft → checked → refined → final with ≥3 (F) claims and a short handoff log in the header.
- Validation run returns 0 critical issues (frontmatter required keys, parents, slug uniqueness).
- Operator can navigate the tree and preview diffs before saving.

## Metrics (first pass)
- Drift: number of validator issues per session.
- Noise: tokens per artifact vs. final artifact length.
- Clarity: edit distance from refined → final.
- Latency: minutes per step in the workflow.

## Risks / Open Questions
- Model coupling: keep model‑agnostic abstractions even if GPT‑5 is primary.
- File conflicts: coordinate edits when multiple agents/operators touch the same files.
- Token load: strategize chunked reads and targeted context to avoid bloat.

## Next Steps (for the code tree)
1) Initialize repo `coherenceism.ai` (downstream), add `cora` as submodule/read‑only source.
2) Implement UFC Adapter (read/write Markdown + frontmatter; repo‑relative safety).
3) Build the basic shell: left nav (UFC map), chat pane, document pane with diff/save.
4) Wire “Load CORA” to follow `AGENTS.md:1` and show confirmations.
5) Implement the essay workflow path end‑to‑end with approvals and provenance footer.
6) Integrate validator procedure with a results checklist.

### Minimal Capabilities
- Context hydration from UFC load order.
- Coherence checks: alignment, resonance, presence pauses.
- Content integrity: frontmatter + parent/slug validation via procedures.

### Guardrails
- Prefer clarity over speed; decline tasks that add noise.
- Repository‑relative paths; no hidden state.
- Escalate when actions affect downstream consumers.

### Next Steps (Typical)
1) Scaffold a new tree with `cora` as submodule.
2) Add `AGENTS.md` pointing to UFC load order.
3) Implement one thin surface (CLI or web) before expanding.
4) Measure clarity gains; prune features that produce noise.

## Spawned System (proposed)
- `coherenceism-ai` — Downstream code project (chat + markdown studio) for operating CORA with GPT‑class models.
