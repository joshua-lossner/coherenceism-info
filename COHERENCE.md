---
kind: documentation
title: COHERENCE — coherenceism.info
intent: Static site generator for Coherenceism philosophy content
status: active
updated: 2025-10-16
tags: [coherenceism, website, downstream]
init:
  files: []
index:
  map:
    - cora/ (symlink to upstream CORA)
    - src/
    - scripts/
    - public/ (generated)
scope: directory
---

# Coherenceism.info — Downstream Site

## Purpose
Render Coherenceism philosophy and content from CORA's harvest/ into a static website.

## Architecture
- **Source of Truth**: CORA repository (linked as symlink/submodule)
- **Content Flow**: CORA harvest/ → sync → src/content/ → build → public/
- **Generator**: Minimal Node.js static site builder (marked + gray-matter)
- **Philosophy**: Coherentist design - minimal dependencies, clear structure

## Commands
```bash
npm install      # Install dependencies
npm run sync     # Pull content from CORA
npm run build    # Generate static site
npm run dev      # Build with watch mode
npm run preview  # Serve the built site
```

## Structure
- `cora/` - Symlink to CORA repository (source of truth)
- `src/content/` - Synced content from CORA (git-ignored)
- `src/templates/` - HTML templates for pages
- `scripts/sync-content.js` - Pulls from CORA harvest/
- `scripts/build.js` - Static site generator
- `public/` - Generated static site (git-ignored)

## Content Sources
Pulls from CORA:
- Philosophy: `context/philosophy/coherenceism.md`
- Essays: `harvest/essays/out/`
- Knowledge Tree: `coherenceism/roots/`, `branches/`, `leaves/`

## Design Principles
1. **Resonance over Complexity** - Simple, clear, minimal noise
2. **Source of Truth** - CORA is canonical, this renders it
3. **Static First** - No runtime complexity, just HTML/CSS
4. **Portable** - Minimal dependencies, standard tools

## Deployment
Build generates static HTML in `public/` - deploy anywhere:
- Netlify: Connect repo, build command: `npm run build`
- Vercel: Same as above
- GitHub Pages: Build and push to gh-pages branch
- Any static host: Upload `public/` contents

## Notes
- Content is synced, not committed (src/content/ is git-ignored)
- Styles follow coherentist principles: clarity, hierarchy, minimal noise
- No tracking, no analytics, no unnecessary JavaScript
- Focus on content, not features