---
kind: documentation
title: Writing — Book Metadata Keys
intent: Standardize frontmatter for book and chapter files
status: active
updated: 2025-10-12
tags: [writing, metadata]
---

# Book/Chapter Frontmatter — Keys

Book (book/book_input)
- kind: book|book_input
- title, slug, created, updated, status
- audience, genre, themes[], length_words, chapter_count?, target_words_per_chapter?, tone
- persona_id, references[]

Chapter (chapter/chapter_input)
- kind: chapter|chapter_input
- book_slug, number, title, slug, created, updated, status
- pov, tense, target_words, themes[]

Conventions
- `number` is 1‑based; filename prefixes pad to 2 digits.
- No archive folders; rely on git history.
