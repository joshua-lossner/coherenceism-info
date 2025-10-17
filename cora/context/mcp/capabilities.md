---
kind: documentation
title: MCP — Capabilities Contract
intent: Define stable tool verbs, IO, side‑effects, transports, and fallbacks
status: active
updated: 2025-10-10
tags: [mcp, capabilities, tools]
---

# MCP — Capabilities Contract

Purpose
- Provide a concise, vendor‑neutral contract for tool capabilities used by agents and procedures. Capabilities are expressed as verbs with stable IDs, inputs/outputs, side‑effects, a preferred transport (MCP or procedure), and a clear fallback plan.

Principles
- Short, stable verb list. Add new verbs deliberately; prefer extending inputs over proliferating verbs.
- Explicit side‑effects. Every capability declares `none|read|write|network`.
- Interchangeable transports. Prefer `mcp:<server-id>` when available; degrade to `procedure:<path>` when missing.
- Role‑scoped packs. Roles select which verbs/servers are considered in‑scope for a session.

Capability Shape
- id: `<namespace.action>`
- purpose: one‑line description
- inputs: keys only (types implied by docs)
- outputs: keys only
- transport: `mcp:<server-id>` | `procedure:<path>`
- side_effects: `none|read|write|network`
- fallback: `none|procedure:<path>|note`

Baseline Verbs
- browse.page
  - purpose: fetch a web page and return HTML/text/console
  - inputs: url, wait_until?
  - outputs: html, text, console[]
  - transport: mcp:web
  - side_effects: network
  - fallback: none (offline: skip or request cached artifact)

- web.screenshot
  - purpose: capture a screenshot of a URL or selector
  - inputs: url, selector?, full_page?
  - outputs: screenshot_path
  - transport: mcp:web
  - side_effects: network, write (to workspace)
  - fallback: none

- fs.read
  - purpose: read a text file within workspace
  - inputs: path
  - outputs: text
  - transport: procedure:procedures/core/fs_read.md (conceptual)
  - side_effects: read
  - fallback: none

- fs.write
  - purpose: write a text file within workspace (guarded)
  - inputs: path, text, mode? (create|append|overwrite)
  - outputs: path
  - transport: procedure:procedures/core/fs_write.md (conceptual)
  - side_effects: write
  - fallback: none

- git.status
  - purpose: show working tree status succinctly
  - inputs: none
  - outputs: summary
  - transport: procedure:procedures/git/status.md (conceptual)
  - side_effects: none
  - fallback: none

- git.diff
  - purpose: show diff for staged/unstaged changes
  - inputs: path?, staged?
  - outputs: patch
  - transport: procedure:procedures/git/diff.md (conceptual)
  - side_effects: none
  - fallback: none

- parse.pdf
  - purpose: extract text from a PDF to Markdown
  - inputs: path, strategy? (text|ocr)
  - outputs: markdown, meta
  - transport: procedure:procedures/parse/pdf_to_md.md (conceptual)
  - side_effects: read
  - fallback: none

- extract.table
  - purpose: extract tabular data from HTML/PDF/Markdown
  - inputs: source (html|pdf|md), path|html, selector?
  - outputs: rows[] (json), markdown_table
  - transport: procedure:procedures/parse/extract_table.md (conceptual)
  - side_effects: read
  - fallback: none

Router Guidance
- Prefer the transport listed for each verb; if an `mcp:` server is unavailable, consult `fallback`. If `fallback` is `none`, announce unavailability and propose a next small move (e.g., request a cached artifact or proceed sans browse).

Role Packs
- Roles may declare a subset of verbs and required servers. During SessionStart, run an MCP health check and mark unavailable verbs accordingly.

Notes
- This contract is docs‑only. Downstream repos may implement the conceptual procedures listed here.

