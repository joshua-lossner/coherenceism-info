---
kind: methodology
title: Research Methodology (CORA)
intent: Minimal, repeatable method for sourcing, grading, and integrating evidence with F/I/U claim labels
status: draft
updated: 2025-10-02
tags: [methodology, research, evidence, citations]
---

# Research Methodology

## Purpose
Provide a lightweight, reproducible approach to research that pairs with procedures (`outline`, `fact_check`, `refine_style`) and maintains F/I/U claim integrity.

## Inputs
- Question/Objective (one sentence)
- Notes or draft with F/I/U labels (when available)
- Context references (`context.refs[]`) and candidate sources

## Method (Steps)
1. Frame — restate objective; list explicit assumptions (A1..An).
2. Triage — collect candidate sources; prefer primary data/methods over commentary.
3. Extract — enumerate claims; label Fact/Inference/Unknown.
4. Grade — assign evidence grades E1..E4; note gaps and risks.
5. Synthesize — integrate into outline or draft; preserve labels and add citations.
6. Verify — run `fact_check` procedure; resolve mismatches or downgrade claims.

## Procedure Chain (recommended)
- `procedures/writing/outline.md` → structure claims and risks.
- `procedures/writing/fact_check.md` → verify and annotate.
- `procedures/writing/refine_style.md` → tighten prose without losing labels.

## Expected Signals
- Claim table present with F/I/U and E1..E4 grades.
- Sources resolve; quotes/paraphrases match originals.
- Unknowns (U) include an acquisition plan or tests.

## Constraints
- No invented citations; if evidence is lacking, mark assumption or downgrade to (U).
- Keep a one-to-one mapping between in-text claims and references/assumptions.
- Prefer the smallest sufficient model; avoid speculative chains.

## Eval Checks
- Reproducibility: another agent can re-trace sources and reach same grades.
- Coverage: all (F) claims have sources or are downgraded.
- Integrity: labels preserved end-to-end through style refinement.

## Failure Modes (remedies)
- THIN_EVIDENCE → propose 3 discriminating sources or tests; mark interim as (U).
- SOURCE_MISMATCH → correct paraphrase/quote or replace with aligned source.
- LABEL_DROP → restore F/I/U markers before proceeding; block publication if not possible.

## Templates
- Claim table headers: `id,section,type,statement,evidence,risk,grade`

## Usage
- Used by `workflows/writing/essay_from_notes.md` during citation checks and adjacent steps.
- Applicable to any artifact that carries labeled claims and citations.

## Provenance
- Created: 2025-10-02 by Codex (CORA agent)
- Related: ties to `fact_check` and `outline` procedures
- Notes: elevate to `active` after first full-cycle validation
