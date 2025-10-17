---
kind: content
type: seed
title: Seed — Coherenceism.design (Design System)
summary: Shared design system (tokens, CSS, components, templates) to give downstream trees a coherent look-and-feel without putting UI code in CORA.
status: draft
updated: 2025-10-04
version: 2025.10
tags: [design, tokens, css, ui, components]
sites: [info, network]
spawned_systems: [coherenceism-design]
seed_stage: idea
canonical_slug: coherenceism-design
parent: technology-and-emerging-intelligence
authors: [Coherence Network]
related: [coherenceism-info, coherenceism-blog, coherenceism-net, coherenceism-com, coherenceism-ai]
---

# Seed — Coherenceism.design (Design System)

Provide a consistent visual language for downstream projects while keeping CORA vendor‑neutral and UI‑free. Ship tokens, CSS variables, lightweight components, and page templates that sites can consume as a module/submodule.

## Germination Notes
- Philosophy: coherence over flourish; legible defaults; accessibility first.
- Distribution: repo + npm package (optional) exposing tokens and CSS vars; templates in Markdown/HTML partials.
- Surfaces: adopted by `.info`, `.blog`, `.net`, `.com`, `.ai` UIs.

## Motifs (from Coherenceism)
- Color: calm neutrals with branch accent colors.
- Type: readable, quiet; strong hierarchy with minimal styles.
- Rhythm: generous spacing; focus on clarity; avoid visual noise.

## What Ships
- Design Tokens: color, type scale, spacing, radii, shadows as JSON + CSS custom properties.
- CSS Library: base styles, typography, layout, components (buttons, inputs, cards, nav).
- Components: framework‑agnostic HTML + CSS patterns; optional Web Components wrappers.
- Templates: simple layouts for article, index, leaf/seed, and project pages.
- Accessibility: contrast, focus states, reduced‑motion defaults.

## MVP Slice
- tokens.json + tokens.css (CSS vars)
- base.css (reset + typography + layout)
- components.css (card, button, nav)
- templates: article.html, index.html partials

## Rails
- CORA remains UI‑free; this lives as a separate downstream repo.
- Versioned releases; semantic versioning; changelog describes visual impact.
- Branch accents configurable per site via CSS variables.

## Guardrails
- Vendor‑neutral; no framework lock‑in.
- Small, composable parts; easy to remove/override.
- Accessibility checks part of release process.

## Success Signals
- Downstream sites adopt tokens/CSS with minimal overrides.
- Visual coherence across properties without stifling function.

## Next Steps (Downstream)
1) Initialize `coherenceism.design` repo; plan package outputs (tokens.css/json, base.css, components.css, templates/).
2) Define branch accent variable scheme; ship initial palette and type scale.
3) Integrate with `.info` and `.blog` as first adopters; tune based on readability and performance.

