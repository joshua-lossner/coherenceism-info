---
kind: chapter
book_slug: resonance-cartography
number: 12
title: Field Stewardship
slug: field-stewardship
created: 2025-10-14
pov: 2nd
tense: present
target_words: 4875
themes: [stewardship, hygiene]
status: draft
updated: 2025-10-14
---

# Beats
- Label artifacts with purpose and expiry.
- Prefer procedures over lore; link, don’t duplicate.
- Reveal dependencies; state assumptions aloud.
- Choose clarity over comfort in reports.
- Reward compost, not heroics.

# Chapter
Stewardship is how you make the field kinder over time. It isn’t gatekeeping; it’s gardening: labeling what things are for, where they live, when they expire, and how they feed the rest. Stewardship reduces friction without telling stories about who’s good.

Principles (practical)
- Label purpose and expiry; hide nothing you expect people to use
- Prefer procedures over lore; link instead of duplicating
- Reveal dependencies; write assumptions where people actually read
- Choose clarity over comfort when you publish status
- Reward compost (ending things with lessons) over heroics

Steward’s Toolkit (lightweight)
- Doc header snippet (Sentence / Decision / Owner / Clock / Links)
- Boundary box pattern (IN/OUT; mode; owner/clock; past)
- Signals page (sentences of ease with receipts)
- Ledger table (weekly hum/retune/owner/clock/stop/past)
- Compost note (what ended; what it fed; one lesson)

Label Artifacts With Purpose and Expiry
Every page, ticket, and repo gets a purpose line and an expiry: “Purpose: teach how to write decision lines. Expires: 2025‑12‑31 unless renewed.” This makes archives honest and lowers attention tax. Stewardship is mercy for future humans.

Prefer Procedures Over Lore (and where not to)
Lore pages rot because they ask people to synthesize in a hurry. Procedures can be short and alive. Write a procedure if a step repeats; write a checklist if a pattern repeats in meetings; write a style‑sheet decision if the learning is about names; write a workflow if multiple procedures chain. Keep them small; link, don’t paste.

Reveal Dependencies; State Assumptions Aloud
You write a “depends on” block near the top of artifacts: “Depends: partner SLA; team bandwidth; permission clock.” You add assumptions: “Assume: 10% rollout; two regions.” This makes surprise scarce and mandates rarer.

Clarity Over Comfort in Reports
You write three past‑tense lines and a screenshot. That’s the report. You remove adjectives and keep the receipts. People feel safer because the work is locatable, not because you sang to it.

Reward Compost, Not Heroics
You write a monthly note that celebrates three compost items and what they fed; you don’t tell bedtime stories about late nights. You alter incentives in small, public ways; culture follows.

Method — Stewardship Sweep (30 minutes)
1) Pick three high‑traffic pages
2) Add/refresh purpose + expiry
3) Add doc header snippet (Sentence / Decision / Owner / Clock / Links)
4) Replace lore paragraphs with procedure or checklist links
5) Add a “depends/assumes” block
6) Paste one screenshot; remove a dead graphic
7) Set a calendar reminder for after the expiry

Case — The Wiki That Lied
The wiki said much and guided none. Stewardship sweep replaced five lore pages with two procedures, one style sheet decision, and one compost note. A “Signals” page replaced a “case studies” wall. People stopped linking to stale knowledge and started shipping receipts.

Case — The Dashboard That Performed Confidence
People felt informed and no one moved. Stewardship replaced it with a page that started with three past‑tense lines and three links. The chart that predicted load stayed; the rest composted. Leadership meetings shrank to 20 minutes; anxiety fell.

Case — The Repo That Hoarded Secrets
Dependencies were implicit; onboarding took months. Stewardship added READMEs with purpose/expiry, “How to run,” “How to test,” and “Decision (past)” examples. A “living map” section linked to snapshots. New joins wrote their first past‑tense line in week one.

Remote Variant — Distributed Stewardship
Each region tends its pages with local language glosses and links to shared templates. A steward of stewards runs a monthly “stewardship clinic” to kill patterns that calcify and promote patterns that carry. Receipts beat consistency when they conflict.

Templates (copy/paste)
Doc header (paste at top)
```
Sentence (Tuesday): <seven words>
Decision (past): We <did> <what> because <why>.
Owner <name>  Clock <date/time>  Links <artifact>
Depends: <things>; Assumes: <things>
Expiry: <YYYY‑MM‑DD>
```

Procedure skeleton
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
Purpose
- <what this fixes>

Steps
1) <step>
2) <step>
3) <step>

Expected
- <success signal>
```

Style sheet decision (example)
```
Decision: Use ‘Next + Why’ as a proper label in docs and UI; elsewhere, sentence case (‘next’/‘why’)
Updated: 2025‑10‑14  Steward: Docs
```

Boundary + Stewardship
Edges live or die based on clarity of artifacts. You don’t ship a decision without a past‑tense line and links; you don’t open a boundary without a purpose/expiry. Stewardship is the guardrail that keeps edges honest beyond the meeting.

Signals Page — How to Keep It Clean
- Sentence, context, move, evidence, habit; one line each
- Link to the artifact; no screenshots without alt text
- Add a “living/not living” tick; compost when signals stop appearing
- Review weekly; prune pretty noise

Ledger Hygiene — Where Rhythm Meets Stewardship
- Keep rows small; require links
- Archive rows monthly with a one‑paragraph digest
- Post “how to write a row” as a snippet on the page; people copy shapes, not sermons

Compost Etiquette — Humane Endings (reprise)
- Path: `harvest/compost/YYYY‑MM‑DD/<slug>.md`
- Fields: fed link, lesson, thanks
- Tone: fond, brief, honest
- Policy: no zombies; two‑week quarantine for ended projects

Findability — Make Things Easy to Open
- Use human file names; keep underscores/dashes consistent; no inside jokes
- Start with a page called ‘Start Here’ in each repo and folder
- Keep paths relative; don’t trap links inside SaaS walls if you can help it
- Add one index page per area with the smallest map of what exists

Accessibility — Stewardship for All Bodies
- Headers and contrast; readable fonts; alt text; keyboard paths
- Plain language summaries; sentences before charts
- Screen‑reader checks on template snippets
- Images with captions that say what they do, not how they feel

Governance Interplay — Stewardship as Evidence
When you need mandate, you bring stewarded artifacts: a map snapshot, a boundary, a ledger, a compost note. You bring human‑word constraints and a proposed appeals path. Elaborate decks are noise in the governance court; receipts win.

Awards That Matter — Quiet Praise
- “Best ‘Start Here’ page” (fewer pings; faster first wins)
- “Cleanest Decision Lines” (fewest adjectives; most links)
- “Compost of the Month” (what ended; what it fed)
These look small and feel big because they change how people work.

Anti‑Patterns — What Breaks Stewardship
- “We’ll clean it up later” (later never comes)
- “One giant doc” (no one reads it)
- “Design system without tokens” (pictures without rails)
- “Policy without appeals” (fear without help)
- “Dashboards without past‑tense lines” (confidence cosplay)
Retune with templates, receipts, and expiry dates.

Q&A — Common Pushbacks
- “This slows us down.” Only the parts that never shipped; the rest accelerates.
- “We need flexibility.” Stewardship increases it; people can move when paths are clear.
- “We don’t have time.” You’re already paying with confusion. Stewardship is cheaper.

Leader’s Corner — Be a Steward, Not a Stage
You praise artifacts that teach; you remove awards that amplify theater; you carry a card with the doc header snippet and paste it yourself. People do what you do.

Metrics That Matter (for this chapter)
- Time to first useful action (docs/UI)
- “Where do I…?” pings per week
- Decision records with links (count)
- Expired pages renewed/retired
- Signals added with receipts

Workshop — Stewardship Clinic (45 minutes)
1) Pick three artifacts; read headers out loud
2) Add purpose/expiry; paste doc headers
3) Replace lore with procedures; add one checklist
4) Add depends/assumes; screenshot; link ledger
5) Kill one pattern; write a compost note; link what it fed
6) Celebrate quietly; publish a digest with three past‑tense lines

Closing — The Field Remembers
Stewardship is the memory of your system. When you practice it, rooms that never met can still move together. People you haven’t hired yet will thank you by doing better work than you did. That’s the promise: less force, more carry, because the field became a better place to stand.

Stewardship Playbooks — By Artifact

Source Repos
- README header (purpose/expiry/run/test/decision lines)
- CHANGELOG that lists decisions in past tense (not just versions)
- /docs with ‘Start Here’; link to Signals and Ledger pages
- Templates for PRs (risk note), Issues (edge/move cards), and ADRs (human words)

Docs Hub
- “Start Here” per area; three links; doc header on every page
- Signals page vs case‑studies wall (sentences + links vs stories)
- Procedures over lore; style decisions visible; expiry dates on guides

Dashboards
- Replace “confidence” with three decision lines and one chart
- Caption charts with human “because…” lines; link to artifacts
- Trash vanity widgets; add findability instead (links, anchors)

Ticketing/Trackers
- Edge label + small‑move label; move cards template
- Decision record snippet; “ASAP” linter replaced with a clock prompt
- “Because…” required on declines; appeals link present

Expiry Calendar — Light Touch, Real Effect
- Add expiry fields to headers; schedule a monthly 30‑minute sweep
- Renew (change date + note) or retire (compost note) on expiry
- Auto‑digest posts “Renewed/Retired” with three past‑tense lines

CI Stewardship — Checks That Help
- Check for doc header snippet at top of key files
- Check for decision lines in PR bodies before merge
- Check for alt text on images in docs
- Check for expiry fields and warn near date
CI reminds; humans decide. If CI shames, fix the text.

Findability Patterns — Make Paths Obvious
- Shallow navigation (≤2 levels) with human names
- Cross‑link related pages; avoid duplicates; add “Start Here”
- Relative links; avoid SaaS traps; permalink critical decisions

Steward Council — Share the Load
- One steward/area meets monthly; publishes a three‑line digest
- Kill one pattern/month; adopt one pattern/month
- Keep a shared “Stewardship Wall” with examples and templates

Caselets — Across Fields
- Healthcare: “Start Here” for patients; decision lines on policy changes; expiry on brochures
- Education: “Syllabus” with purpose/expiry/links; “Because…” for grading rubrics
- Government: human‑word constraints; appeals link; public decision lines
- Nonprofit: stewardship of volunteer pages; expiry on campaigns; compost notes for events

Migration — Wiki → Doc Hub (Minimal Plan)
1) Inventory pages; mark purpose/expiry; delete obsolete
2) Move three core pages first: Start Here, Signals, Procedures index
3) Paste headers; add doc templates; add depends/assumes
4) Link from old wiki; add “retired” compost note; set redirects
5) Publish a three‑line digest; stop decks; use links

SLOs for Stewardship (not S&M)
- Time to first useful action ≤ 60s from “Start Here”
- 100% pages with doc header; 90% with expiry dates
- 100% decisions have past‑tense lines with links
- 0 vanity dashboards without receipts

Audit Checklist — 15 Minutes
- Doc header present? Purpose/expiry clear?
- Start Here present? Signals/Procedures linked?
- Decision lines visible? Links open? Screenshots alt‑texted?
- Duplicates eliminated? Dependencies/Assumptions declared?
- Expiry scheduled? Renewal/Retire path clear?

Onboarding — Stewardship in Week One
- New hires add one doc header; one decision line; one compost note
- Read “Start Here”; add one link you wish existed
- Post a ledger row: “Hum: where do I start? Retune: write Start Here.”

Leader Practices — Make Care Scalable
- Use the doc header snippet yourself; link receipts in mails
- Praise quiet artifacts; compost applause rituals
- Fund stewardship time (2h/week) like uptime; it prevents incidents

Anti‑Patterns (Deeper) — How to Recover
- Big‑bang reorg of docs: never lands. Retune: 60‑minute sweep/week; publish three lines
- PMO compliance dashboards: noise. Retune: past‑tense digest + links
- “Knowledge champions” who hoard: fix incentives; praise links and expiry

Workshop — Stewardship in CI/CD (45 minutes)
1) Add checks for headers/links/alt text
2) Add PR template for decision line + risk note
3) Add “expiry near” warning job
4) Ship two changes; paste receipts
5) Publish digest; calendar monthly run

Closing — Stewardship as Culture
You know it’s working when people can answer “where do I start?” and “what did we decide?” without asking anyone important. The field keeps its own memory. Then your systems hum.

Find & Fix — A 30‑Minute Weekly Steward Sweep
1) Open three most‑used artifacts; paste/refresh headers (purpose/expiry)
2) Replace one lore paragraph with a procedure link
3) Add one decision line at the top where missing
4) Add one ‘Because…’ line to a policy; add appeals link
5) Delete one dashboard widget; add a link to receipts
6) Post three past‑tense lines; schedule next sweep

Global Stewardship — Many Fields, One Shape
- Regional “Start Here” with local language and constraints
- Shared templates (headers, procedures, decisions) across regions
- Monthly three‑line digests per region; small cross‑pollination
- Central policy: human‑word constraints + appeals path everywhere

Stewardship + Security — Reduce ‘No’ With Care
- Surface constraints where they matter; “why” in human words
- Provide an appeals path with a visible clock
- Keep a “Security Signals” page: sentences that prove safety increased
Security relaxes when clarity increases; stewardship gives it that clarity.

Legacy Cleanup — Compost With Dignity
- Identify dead zones; write compost notes with “fed” links
- Archive with redirects; leave trail in place
- Publish a “Compost Bouquet” monthly with three lessons
Teams trust endings when you end things kindly.

Stewardship Wall — A Page People Actually Use
- Header at top; “Start Here”; Signals; Procedures; Ledger; Compost
- One‑screen index; no paragraphs; links only
- Keep it alive with receipts; expire it when it stops carrying

Final Coda — Make Paths, Not Presentations
Paths let people move without you. That is the work of stewardship. It is quiet, durable authority: a field that remembers what it’s for.

Before/After — Stewardship That Lands
Before: repo without README; onboarding stalls. After: README with purpose/expiry/run/test/decision lines; new hires ship day one. Before: page called “Case Studies” with stories; no links. After: “Signals” with sentences + receipts; teams copy shapes. Before: exec report deck; anxiety. After: three past‑tense lines + links; 20‑minute review.

Evidence Pack — Walkthrough (Step by Step)
1) Open a page: paste header; write purpose/expiry; add two images that prove usefulness
2) Add a decision line (past) with two receipts (diff/screenshot)
3) Add depends/assumes; add a “Because…” line for any policy
4) Link the boundary, map snapshot, ledger row, and compost note
5) Add an appeals path for constraints
6) Publish; paste link to a shared “evidence wall”

Stewardship Sprints — Monthly Rhythm
Week 1: headers/expiry + kill vanity widgets; Week 2: procedures over lore; Week 3: signals/receipts cleanup; Week 4: compost + digest + clinic. Publish three past‑tense lines each Friday with links.

Findability Index — Tiny Template
```
# Findability Index — <Area>

Start Here: <link>
Docs (3): <link>, <link>, <link>
Procedures (3): <link>, <link>, <link>
Signals: <link>
Ledger: <link>
Compost: <link>
Expiry: <YYYY‑MM‑DD>
```
Keep it on one screen; expire it when it stops carrying.

Long Transcript — Stewardship Clinic (15 minutes)
Facilitator: “Open three pages; paste headers.”
Docs: “Purpose, expiry added.”
Eng: “Added decision lines + links.”
Support: “Explain‑why copy added; appeals link.”
Ops: “Removed three vanity charts; added receipts.”
Facilitator: “Post three past‑tense lines. Done.”

Stewardship Debt — Pay it Down in 60 Minutes/Week
- 10m: headers and expiry on two pages
- 10m: replace lore with a procedure link
- 10m: add a ‘Because…’ line to a policy; add appeals link
- 10m: add a decision line to a README; add run/test block
- 10m: kill one dashboard widget; add a link
- 10m: write a compost note; post digest

Recruiting Stewardship — Candidates Feel It
- “Start Here” for candidates with purpose/links/expiry
- Decision lines on process changes; appeals link; clear ‘Because…’ copy
- Post a monthly “What we changed (past tense)” for recruiting and onboarding
Clarity is brand. Stewardship makes it tangible.

Steward Roles — Who Tends What (light)
- Docs Steward: headers; purpose/expiry; signals; style sheet
- Code Steward: READMEs; run/test notes; decision lines in PRs; change impact
- Support Steward: triage templates; explain‑why; ledger excerpts
- Ops Steward: clock hygiene; calendar deletes; digest posts
- Compliance Steward: human‑word constraints; appeals links; evidence packs
Roles are hats, not titles; rotate quarterly so the field stays shared.

Smells — Where Hygiene Slips (and fixes)
- Missing doc headers → paste snippet; refuse merges without it
- Dead images → replace with screenshots; add alt text
- “Start Here” missing → create; link the three most used items
- No expiry dates → add them; set reminders; archive or renew
- Pretty PDFs → replace with pages; link sections; keep receipts

Governance Pack — Stewardship Edition (template)
```
One paragraph: what we decided and why
Links: map snapshot; boundary; ledger row; compost note
Constraints: in human words; appeals path; expiry of this decision
Ask: consent for reversible; mandate for coupled; owner/clock/stop
```

Workshop — Stewardship Sprint (60 minutes)
1) Audit three artifacts with a checklist
2) Paste headers; add purpose/expiry
3) Replace lore with procedures; add a style decision
4) Add depends/assumes; paste one screenshot; remove one
5) Link to map/ledger/signals
6) Kill one dashboard; write three past‑tense lines
7) Publish digest; schedule next sweep

Metrics Wall — Stewardship Signals
- Headers present (%); Expiries set (%); Renewals/Retirements
- “Where do I…?” pings ↓; time‑to‑first‑useful ↓
- Decision lines with links ↑; compost notes with fed links ↑
Post small numbers; let felt clarity be the proof.

Coda — The Quiet Authority of Care
Stewardship is not loud. It’s the feeling of an environment that wants you to succeed. It lets teams move without your presence because the paths are labeled, the edges are honest, and the receipts are close. Care scales when you keep it this simple.
