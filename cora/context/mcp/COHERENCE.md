---
kind: documentation
title: COHERENCE — MCP Servers (Docs)
intent: Document recommended MCP servers and how to manage them without vendor lock‑in
status: active
updated: 2025-10-16
tags: [mcp, tooling]
init:
  files: []
index:
  map: []
scope: directory
---

# MCP Servers — Index (Docs Only)

Policy
- The CORA trunk ships no vendor code or MCP setup. This directory documents MCPs for operators.
- Install MCPs globally (or per‑repo via untracked `.codex/`) as needed. Downstream projects may include code.

How to Manage (Global)
- List: `codex mcp list`
- Add: `codex mcp add <name> -- <command> [args...]`
- Remove: `codex mcp remove <name>`

Recommended MCPs
- Web/browser: `context/mcp/web-browser.md:1`
 - Capabilities contract (verbs, IO, fallbacks): `context/mcp/capabilities.md:1`
 - Health check procedure: `procedures/core/mcp-health-check.md:1`
- Example local config: `context/mcp/codex-config.example.json:1` (copy to `.codex/config.json` locally; `.codex/` is git‑ignored)

Notes
- Keep commands resilient (use `uvx --from <pkg> <tool>` or similar) to avoid path drift.
- Validate with a quick health check before relying on an MCP in workflows.
 - CORA trunk is vendor‑neutral: docs only. Place actual configs under `.codex/` locally.
