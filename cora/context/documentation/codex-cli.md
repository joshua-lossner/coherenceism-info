---
kind: documentation
title: Codex CLI — Using CORA (MCP notes)
intent: Explain MCP load errors with Codex CLI and how to operate CORA safely
status: active
updated: 2025-10-05
tags: [codex, mcp, tooling]
---

# Codex CLI — Using CORA (MCP Notes)

Purpose
- Help operators run `codex` in this repo without vendor lock‑in or crashes.

Key Point
- CORA trunk intentionally ships no vendor or MCP setup. If your Codex CLI has global MCP servers configured, it may try to boot them on startup. If those servers aren’t installed on your machine, you may see an error like “MCP client failed to load.” This is a client‑side configuration issue, not a problem in CORA.

Operate Safely
- Keep MCP disabled for CORA, or ensure your configured MCP servers are installed and runnable.

Recommended (Repo‑local, untracked)
- Create a local Codex config for this repo that does not attempt to load MCP. The repo ignores `.codex/` so your settings won’t be committed.
  - Make a folder: `.codex/`
  - Add your Codex CLI’s local config there (see your Codex version’s docs for exact filename/keys) with MCP disabled or with an empty MCP server list.
  - Example intent: “no MCP for this repo.”

Alternative (Fix your global MCP config)
- If you want MCP, ensure each server referenced by your global Codex config is installed and resolvable on PATH (Node/Python/uvx/etc.). Typical issues:
  - Missing runtime (e.g., Node >= 18, Python 3.10+)
  - Wrong binary path or command name
  - Virtualenv tools not available in interactive shells

Troubleshooting Checklist
- Confirm CLI version: `codex --version`
- Print or locate config (varies by version): check common paths
  - macOS/Linux: `~/.config/codex/` or `~/.codex/`
  - macOS (App Support): `~/Library/Application Support/Codex/`
- Verify each referenced MCP server runs from your shell:
  - Example: `node -v`, `python3 -V`, `uvx --version`
  - Then the server command itself, if specified by name

Notes
- This trunk stays vendor‑neutral; downstream projects may add MCP/tooling.

