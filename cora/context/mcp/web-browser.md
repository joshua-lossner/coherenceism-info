---
kind: documentation
title: MCP — Web Browser (stdio)
intent: Provide browsing, screenshots, and console capture via MCP
status: recommended
updated: 2025-10-05
tags: [mcp, web, browser]
---

# MCP — Web Browser (stdio)

Purpose
- Add web browsing and screenshot capabilities to agent sessions through an MCP server.

Recommended Command (Global)
- `codex mcp add web -- uvx --from mcp-browser mcp-browser mcp`

Runtime Requirements
- `uvx` available on PATH (from `uv`)
- Python 3.10+
- Playwright runtime (install browsers on first use if prompted):
  - `uvx --from playwright playwright install chromium`

Health Check
- Command available: `uvx --from mcp-browser mcp-browser --version`
- Listed in Codex: `codex mcp list` (shows `web   uvx  --from mcp-browser mcp-browser mcp`)

Removal
- `codex mcp remove web`

Notes
- This is a docs-only manifest; CORA trunk does not vendor MCP code.
- Prefer global install unless a downstream project needs pinned, repo-scoped config.

