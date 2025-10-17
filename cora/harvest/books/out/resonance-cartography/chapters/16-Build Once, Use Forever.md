---
kind: chapter
book_slug: resonance-cartography
number: 16
title: Build Once, Use Forever
slug: build-once-use-forever
created: 2025-10-14
pov: 2nd
tense: present
target_words: 4875
themes: [procedures, reuse]
status: draft
updated: 2025-10-14
---

# Chapter
You don’t scale by pushing harder. You scale by keeping what works. “Build once, use forever” means turning repeatable work into procedures, linking procedures into workflows with clear I/O, logging provenance, validating periodically, pruning drift, and sharing across teams so the canon stays small and alive.

From Doing → Procedure
- Smell repeatability: same outcome, similar steps, multiple times
- Write a short procedure (3–7 steps) with success signals and inputs/outputs
- Put it under version control; link receipts; add tags
Procedures are memory; they free bodies for thinking.

From Procedures → Workflow
- Compose procedures with named inputs/outputs; draw the smallest chain that completes an outcome
- Keep boundaries and decision gates visible; add wordcount/quality gates where needed
- Publish a template; link every step to a procedure
Workflows reduce orchestration strain and make results predictable.

Provenance — Logs You Can Trust
- Write a past‑tense line and paths touched; add links
- Batch small edits into one entry; avoid novels
- Keep a daily file with frontmatter and entries
Provenance makes reuse safe; people can trust history.

Validation — Keep Procedures Honest
- Add quick checks: inputs present? outputs produced? receipts linked?
- Schedule periodic reviews; compost procedures that don’t carry
- Use metrics as pointers (counts, not meaning)

Pruning — The Canon Must Stay Small
- Fewer, better procedures; delete duplicates; link instead of copying
- Prefer patterns (templates) where code would rot
- Archive with compost notes; keep “fed” links
Small canon is how new stewards learn without drowning.

Sharing — Steal Like a Steward
- Copy shapes, not stories: headers, decision lines, cards
- Cross‑team “move walls,” “signals pages,” and “evidence packs”
- Publish receipts so neighbors can trust and adopt
Sharing that carries is quiet and contagious.

Templates — Copy/Paste
Procedure (short)
```
---
kind: procedure
title: <short>
intent: <one line>
status: active
updated: <YYYY‑MM‑DD>
tags: [topic]
---

# Procedure — <short>
Inputs: <keys>
Steps: 1) <…> 2) <…> 3) <…>
Expected: <signals>
Links: <receipts>
```

Workflow (short)
```
---
kind: workflow
title: <short>
intent: <one line>
status: active
updated: <YYYY‑MM‑DD>
tags: [topic]
---

# Workflow — <short>
Actors: <roles>
Inputs: <paths>
Outputs: <paths>
Steps: <procedures>
Gates: <quality/wordcount>
Success: <signals>
```

Cases — Quiet Scale
- Editorial: from “good editors” → procedure+workflow (dev→line→copy + style sheet); more books ship, better
- Support: from “helpful people” → triage templates + explain‑why + ledger; fewer escalations
- Engineering: from “heroes” → risk notes + small PRs + rollback; calmer merges

Anti‑Patterns — Reuse That Rots
- 40‑page playbooks no one opens
- Procedures with no receipts or owners
- Workflows that hide decisions instead of linking them
Retune: shrink; add receipts; add gates; delete.

Metrics — Signals of Durable Reuse
- Procedures used/week (with links)
- Workflows run/week (with receipts)
- Duplicates deleted (pruning)
- Time saved (qualitative: sentences of ease)
Measure only what helps you choose; avoid vanity numbers.

Q&A — Practical
- “How do we keep procedures from aging?” Expiry dates; monthly reviews; compost
- “How do we prevent bloat?” Small canon; pruning; receipts; delete duplicates
- “How do we encourage adoption?” Show receipts; demo one past‑tense line; copy shapes

Leader’s Corner — Invest in Memory
- Fund stewards who write procedures and keep them alive
- Reward deletion of rot; praise “fed” links in compost
- Ask for receipts and gates; say no to glossy playbooks

Closing — Build Once, Use Forever (Lightly)
Build rails that carry and keep them light. Reuse patterns, not pride. Let procedures and workflows make room for work worth doing. The field remembers.

