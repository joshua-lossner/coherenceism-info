---
kind: documentation
title: Grow From Seed — Start a New Tree
intent: Show how downstream trees consume CORA and grow their own structure
status: active
updated: 2025-09-23
tags: [seed, tree, growth]
---

# Grow From Seed — Start a New Tree

## Purpose
Provide a minimal, repeatable path for creating a new tree that consumes CORA (trunk) as a read‑only submodule and grows its own agents, content, context, procedures, and workflows.

## Principles
- CORA is the trunk: canonical philosophy and content. No UI, no app code.
- Downstream systems are trees: they render, publish, and extend according to their needs.
- Keep the contract stable (frontmatter keys, relationships); let presentation vary downstream.

## Steps (Quick Start)
1) Create a new repo and add CORA as submodule
```
git init
git submodule add https://github.com/joshua-lossner/cora.git cora
cp cora/AGENTS-template.md AGENTS.md
echo "CORA_ROOT=./cora" >> .env
```

2) Create your minimal structure
```
mkdir -p agents content context procedures workflows
mkdir -p coherenceism/forest
# Add a forest index for your tree (index downstream projects seeded from your seeds)
echo "# Forest — Index" > coherenceism/forest/COHERENCE.md
cp cora/workflows/_templates/workflow.md workflows/_example.md 2>/dev/null || true
```

3) Add your tree’s startup notes
- Edit `AGENTS.md` to list your local files and the `cora/` references you rely on.
- Keep your AGENTS short; link into `cora/context/…` for canon.

4) Pull content and render downstream
- Read `context/documentation/cora/knowledge-tree.md` for content types and relationships.
- Select items via frontmatter (e.g., `sites: [info]`) if useful.
- Render in your own site/app; CORA ships no UI.

5) Pin and upgrade intentionally
- Pin your submodule to a tag/commit.
- Update deliberately; review `cora/content` changes and run validation.

## Validation
- Use `procedures/core/validate-context.md` and `procedures/content/validate-content.md` from `cora/` to check structure and frontmatter.

## Notes
- Keep your tree’s local content small and linked; let CORA remain the canonical source.
- If you need a new content type or field, propose it upstream or encapsulate it downstream.
