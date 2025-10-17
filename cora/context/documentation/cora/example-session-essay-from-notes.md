---
kind: documentation
title: Example Session — Essay from Notes (Transcript)
intent: Show an end-to-end agent session with exact paths and prompts
status: active
updated: 2025-10-04
tags: [operation, example, essays]
---

# Example Session — Essay from Notes

Transcript (abbreviated)
- Operator: In terminal at repo root, runs `codex`.
- Operator: “Load CORA.”
- Agent: Confirms load order (Persona, Philosophy, Strategy, Departments, Ontology, Procedures, Methodologies, Index, Projects).
- Operator: “Run the essay_from_notes workflow.”
- Agent: “Open `workflows/writing/essay_from_notes.md:1`. Provide or confirm input under `harvest/essays/in/`.”
- Operator: “Use `harvest/essays/in/TEMPLATE.md:1` as a base; I’ll save notes to `harvest/essays/in/my-note.md`.”
- Agent: “Step 1 — Outline. Using `procedures/writing/outline.md:1`. I’ll return an outline; save to `harvest/essays/out/YYYY-MM-DD/my-note/outline.md`.”
- Operator: “Proceed.”
- Agent: Returns outline. Asks to save to: `harvest/essays/out/2025-10-04/my-note/outline.md`.
- Operator: Saves file.
- Agent: “Step 2 — Draft. Using `procedures/writing/draft_from_outline.md:1`. I’ll return a draft; save to `harvest/essays/out/2025-10-04/my-note/draft.md`.”
- Operator: “Proceed.”
- Agent: Returns draft. Operator saves to path.
- Agent: “Step 3 — Fact check. Using `procedures/writing/fact_check.md:1` (≥3 claims to (F)). Save to `harvest/essays/out/2025-10-04/my-note/claim_table.csv` and update `draft_checked.md`.”
- Operator: “Proceed.”
- Agent: Returns claim table and checked draft. Operator saves to paths.
- Agent: “Step 4 — Refine style. Using `procedures/writing/refine_style.md:1`. Save to `harvest/essays/out/2025-10-04/my-note/refined.md`.”
- Operator: Saves file.
- Agent: “Step 5 — Compile leaf. Using `procedures/writing/compile_leaf.md:1`. Save `final.md` and optionally `final.pdf`.”
- Operator: Saves final files to `harvest/essays/out/2025-10-04/my-note/`.

Notes
- Replace `my-note` with your slug. Keep today’s date in the path.
- If the agent requests specific context (intent, notes), provide only the small, relevant portions.
- If canon-worthy, consider adding a leaf under `coherenceism/leaves/`.
