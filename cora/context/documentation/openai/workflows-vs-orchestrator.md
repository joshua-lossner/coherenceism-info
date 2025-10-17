---
kind: documentation
title: Agent Workflows vs. Lightweight Orchestrator (CORA‑aligned)
status: active
updated: 2025-10-11
tags: [workflows, orchestration, openai]
---

# Agent Workflows vs. Lightweight Orchestrator

Context
- CORA expresses “what to do” in Markdown (procedures/workflows). The app must decide “how to run it” using provider capabilities. Two options: provider Agent Workflows or an app-driven orchestrator.

Comparison
- Control & Debuggability
  - Workflows: provider-managed plans; convenient, less transparent.
  - Orchestrator: explicit steps; easy to log and replay.
- Portability & Lock‑in
  - Workflows: tighter coupling to one provider.
  - Orchestrator: provider-neutral via small adapters.
- Latency & Parallelism
  - Workflows: built-in parallel tool calls; good for heavy chains.
  - Orchestrator: parallelism is manual but predictable.
- Cost & Limits
  - Workflows: may add orchestration overhead; monitor.
  - Orchestrator: pay-as-used; fewer surprises.
- Observability & Provenance
  - Workflows: inspect via provider tools if available.
  - Orchestrator: own logs; integrate CORA provenance directly.

MVP Decision
- Start with a lightweight orchestrator controlled by the app.
- Keep a seam to adopt Agent Workflows later for specific chains where it clearly reduces complexity or latency.

Adapter Notes
- Define minimal interfaces for chat, tool calls, and voice; keep prompts role-aware and small.
- Encode CORA procedure steps as a simple node graph that the app executes deterministically.

Risks & Mitigations
- Feature gaps: add targeted hooks; don’t over-generalize early.
- Migration: keep prompts and tools provider-agnostic; isolate provider config.

