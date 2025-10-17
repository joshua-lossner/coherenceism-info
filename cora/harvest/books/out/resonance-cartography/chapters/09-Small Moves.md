---
kind: chapter
book_slug: resonance-cartography
number: 9
title: Small Moves
slug: small-moves
created: 2025-10-14
pov: 2nd
tense: present
target_words: 4875
themes: [experimentation, minimalism]
status: draft
updated: 2025-10-14
---

# Beats
- Define the smallest test of the promise.
- Limit scope to ten minutes or one day.
- Pre‑commit stop criteria to avoid sunk‑cost drag.
- Ship where it matters; avoid sandboxes that don’t touch reality.
- Log the move as signal, not score.

# Chapter
Small moves make reality cheap to touch. You define the smallest test of a promise, limit the scope, set a stop, ship where it matters, and log a sentence someone would say on a Tuesday.

Define the Smallest Test
You take your signal sentence and ask for one observable action: “I knew the next step without asking” becomes “Add ‘Next + Why’ to the top of one doc page.” If the move requires a deck or a committee, it’s not small.

Ten‑Minute / One‑Day Rule
Small means ten minutes for an individual or one day for a team. Anything larger becomes a plan. The move must survive interruptions, meetings, and the friction of the real environment.

Pre‑Commit Stop Criteria
To avoid sunk‑cost drag, you write what will make you stop: “If misroutes don’t drop 15% in two weeks,” “If two users hesitate in a row,” “If support reports confusion.” Stopping is part of moving.

Ship Where It Matters
Small moves in sandboxes don’t teach. Ship to the environment where your users live, even if you gate it to 10%. The goal is contact, not coverage.

Log Signal, Not Score
You record one sentence: “People stopped asking where to go.” Attach a screenshot or example. This builds your Signals page and avoids vanity metrics.

Checklist — Ten‑Minute Move
- One sentence in Tuesday words
- One place where it will land
- One owner and one clock
- One stop criterion
- One link to the artifact
- One past‑tense line you’ll write afterward

Examples
- Docs: Add “Next + Why” to the top of one page; screenshot; ask one engineer to try it.
- UI: Add hint text for one field; show only on hesitation; measure backspace events.
- Support: Add an explain‑why line to one tag; count misroutes.
- Eng: Add a “risk note” field to PR template; observe merge discussions.

Anti‑Patterns
- Big small moves: scope creep in a cute hat. Fix: shave until the move fits the rule.
- Sandboxing safety: proving nothing in a fake world. Fix: ship to 10% in the field.
- Endless probes: never committing to a direction. Fix: promote to edge when a probe teaches.

Q&A
- “What if the small move fails?” Great. You learned. Compost and try another.
- “Can we run many small moves?” Yes, if they feed a map and ledger. Otherwise, they become noise.
- “Who approves small moves?” Consent by default. Mandate when safety or coupling demands.

Templates
Move card
```
Move: <sentence>
Where: <doc/UI/queue>
Owner: <name>  Clock: <date/time>
Stop: <criterion>
Link: <artifact>
Decision (past): We <did> <what> because <why>.
```

Digest
```
This week’s small moves (3): <one‑liners>
Evidence: <screenshots/quotes/links>
Next: <two moves with owners/clocks>
```

Bridge — Alignment Over Force (next)
Small moves are where you test alignment. When you place yourself so reality carries the work, the small move doesn’t need hype to move. Alignment tells you where to stand; force tells you how tired you’ll be.

Small Move: Write one move card and ship it today.

Extended Cases — Small Moves Across Roles

Docs: “Next + Why” on One Page
Move: add a two‑line “Next + Why” block to the top of a high‑traffic doc page. Owner: Docs. Clock: today. Stop: if two engineers still ask “where do I go?” Evidence: before/after screenshots; two quotes. Past‑tense: “We added ‘Next + Why’ to ‘Getting Started’; support saw fewer ‘where’ questions.”

UI: One Hint at Hesitation
Move: show a hint only when a field blinks (backspace or three seconds idle). Owner: Design/Eng. Clock: tomorrow. Stop: if backspace events stay flat. Evidence: event log; clip. Past‑tense: “We showed a hint at hesitation; fewer backspaces; kept it.”

Support: Explain‑Why on One Tag
Move: add a single “because…” line to one routing tag. Owner: Support. Clock: Wednesday. Stop: if misroutes not ↓ 15% in two weeks. Evidence: misroute count; triage screenshot. Past‑tense: “We added explain‑why; misroutes fell.”

Engineering: PR Risk Note
Move: add a ‘risk note’ field to the PR template and write one on a single PR. Owner: EM. Clock: today. Stop: if merge conversations remain nit‑heavy. Evidence: PR diff; comment thread. Past‑tense: “We added a risk note; review shifted to safety.”

Ops: Replace ASAP with a Date
Move: replace three “ASAP”s in tracker with real dates. Owner: Ops. Clock: Friday. Stop: if people re‑add ASAPs. Evidence: tracker diff; ledger row. Past‑tense: “We replaced ASAP with clocks; coordination improved.”

Legal/Compliance: Human‑Word Constraint
Move: rewrite one policy constraint in Tuesday words and paste it at point‑of‑use. Owner: Compliance. Clock: Thursday. Stop: if confusion persists. Evidence: before/after; fewer clarifying emails. Past‑tense: “We rewrote the constraint in human words; fewer escalations.”

Method — Choosing the Smallest Slice
1) Start from the signal sentence (Chapter 3). 2) Name the hesitation moment. 3) Pick the minimal affordance that touches it. 4) Put it where the hesitation lives. 5) Set a clock and a stop. 6) Log one sentence of evidence.

Probe Patterns That Teach Fast
- Toggle: on/off at 10% traffic; look for sentences of ease
- Sequence: reorder two steps; look for fewer backtracks
- Copy: rewrite one string in Tuesday words; look for fewer “how do I…?”s
- Visibility: add a “why” where a decline happens; look for fewer escalations
- Default: make the right path the default; look for fewer misroutes

Stop Criteria — Examples You Can Live With
- If ‘where do I…?’ tickets don’t drop 15% in two weeks, revert
- If time‑to‑merge stays flat after two PRs with risk notes, revisit
- If two users hesitate in a row at the same spot, add ‘Next’; if not, compost
- If three “ASAP”s reappear, add a boundary gate for clocks

Move Wall — A Board That Breathes
Keep a single page with move cards in three columns: Proposed, Shipped, Logged. Each card has Sentence / Where / Owner / Clock / Stop / Link / Decision (past). The board never exceeds nine cards. When Proposed fills, you must ship or compost. You do not add a “Blocked” column; you write a boundary instead.

Ten‑Minute vs One‑Day — Choosing the Unit
- Ten‑Minute: copy tweaks, toggles, doc headings, a link or two; meant for individuals
- One‑Day: small UI changes, one script, a checklist added; meant for a micro‑team
If a move needs a week, it’s not small; turn it into two one‑day moves with a boundary.

Anti‑Patterns (Deeper) and Retunes
- The Demo That Ate Tuesday: build a demo for a meeting. Retune: ship a 10% toggle to real users and a screenshot, not a slide.
- The “Just One More” Spiral: move creeps because you feel close. Retune: read the stop criterion and pause; harvest in 10 minutes; write next planting.
- The Labyrinth of Sandboxes: test in environments with no humans. Retune: ship to a thin slice of real life.
- The Trophy Wall: log applause instead of signal. Retune: capture sentences of ease and links; #wins can keep the gifs.

Q&A (Extended)
- “What if the small move creates a new problem?” Harvest it; write a procedure; it fed learning.
- “Who picks small moves?” Anyone inside the edge boundary. If coupled, ask neighbors for advice.
- “How do we avoid whiplash?” Use the map (Chapter 6). Moves cluster around a dot; ledger (Chapter 8) paces them.
- “Can small moves replace strategy?” No. They reveal strategy’s truth by contact with reality.

Templates (Filled)
Move Card — Docs
```
Move: Add ‘Next + Why’ to Getting Started
Where: docs/getting-started.md
Owner: Docs  Clock: Wed  Stop: if ‘where…?’ questions persist
Link: PR #4821
Decision (past): We added ‘Next + Why’; fewer hesitations; kept it.
```

Move Card — UI
```
Move: Show hint after 3s idle in ‘Destination’ field
Where: app/checkout
Owner: Design/Eng  Clock: Thu  Stop: if backspaces stay flat
Link: feature flag ‘hint_idle_3s’
Decision (past): We added a hint on idle; backspaces fell; kept it.
```

Move Card — Support
```
Move: Add explain‑why to tag ‘routing:billing’
Where: support/triage
Owner: Support  Clock: Fri  Stop: if misroutes not ↓ 15%
Link: triage-template.md
Decision (past): We added explain‑why; misroutes ↓ 27%; kept it.
```

Move Card — Eng
```
Move: Add ‘risk note’ to PR template
Where: .github/pull_request_template.md
Owner: EM  Clock: Tue  Stop: if time‑to‑merge flat after 2 weeks
Link: PR #4860
Decision (past): We added ‘risk note’; reviews talk safety, not nits.
```

Safety and Ethics — Don’t Burn People to Learn
- Never run small moves that put people at risk without consent
- Redact sensitive data in evidence; screenshots can teach without exposure
- If a move fails and harms, write the past‑tense line with care; repair first
- Align with consent/advice/mandate rails (Chapter 4)

Remote Variant — Async Small Moves
- Propose move cards in a thread; require Sentence/Where/Owner/Clock/Stop
- Ship, then reply with a screenshot and a past‑tense line
- Friday digest: three moves, three receipts; no adjectives

Signals and Maps — Interlock
- Signals (Chapter 3) supply the sentences you test
- Maps (Chapter 6) place moves near a dot that matters
- Edges (Chapter 4) protect scope so moves don’t sprawl
- Ledger (Chapter 8) sets the beat; moves fill the measures

Metrics That Matter (for this chapter)
- Small moves/week shipped (with receipts)
- Percent that produced sentences of ease
- Time from proposal → past‑tense line
- Moves promoted to edges vs composted
- Scope creep incidents (should fall)

Leader’s Corner — Fund Movement, Not Monologues
Read three move cards with links. Approve the smallest that touches reality this week. Kill anything that needs a deck to exist. Ask for a past‑tense line by Friday. Quietly track which teams produce relief; feed them budget.

Playbooks — Small Moves by Meeting Type
- Retro: one change line becomes a move card; clock two days
- Design crit: one image becomes a hint; ship to 10%; paste screenshot
- Eng sync: one risk becomes a ‘risk note’; paste link
- Support standup: one pain becomes an explain‑why; link triage

Practice — Two‑Hour Small Move Jam
Timer 120: 15 to collect signals; 15 to place dots; 15 to write three move cards; 60 to ship two; 15 to paste receipts. Stop. You will feel lighter because reality gave you answers instead of opinions.

Bridge — Alignment Over Force
You will feel the difference: a move that needs push vs a move that pulls. Choose positions that lower push. That’s alignment.

Coda — A Week is a Long Time
If your week passes without a single past‑tense line linked to an artifact, you are living in stories. Shrink until you can feel motion. Then let the relief teach you where to stand next.

Industry Caselets — Same Shape, Different Fields

Healthcare Intake
Signal: “I knew what form to fill.” Move: add a ‘Start Here’ button at kiosk with a two‑line ‘Next + Why’. Owner: Front desk lead. Evidence: fewer wrong forms; patient quote. Lesson: smaller ambiguity, calmer lobby.

Education LMS
Signal: “I submitted on time without reminders.” Move: add a ‘Next assignment’ card with a due date and a one‑line rubric; pin to course home. Owner: Instructional design. Evidence: submission rate ↑; fewer “where” emails.

E‑commerce Checkout
Signal: “I didn’t guess shipping costs.” Move: show shipping method + price one step earlier. Owner: Product. Evidence: fewer cart abandons at payment; support pings down.

Fintech Onboarding
Signal: “I knew why you asked for my SSN.” Move: add a ‘Because…’ bubble with a link to the policy; show only when the field is focused. Owner: Compliance/Product. Evidence: drop in drop‑offs; fewer trust escalations.

Nonprofit Volunteer Signup
Signal: “I found the right role quickly.” Move: add a filter and suggest a role based on two questions; ‘Next + Why’ explains. Owner: Programs. Evidence: fewer abandoned forms; more satisfied joiners.

Science of Small Wins — Why This Works
- Momentum: small proof reduces cognitive load and invites the next move
- Safety: reversible steps lower social risk, increasing honest feedback
- Salience: concrete changes are easier to see and remember, shaping culture
- Compounding: each past‑tense line increases trust in the system, not the speech

Heuristics — How to Score a Move (light)
- Touches a Tuesday moment (1)
- Has a clear owner and clock (1)
- Ships to real conditions (1)
- Has a stop criterion (1)
- Produces a quote/screenshot (1)
Score 4–5? Ship now. Score 2–3? Shrink. Score 0–1? Compost or map first.

Checklists by Domain
- Docs: ‘Next + Why’ at top; changelog link; example first
- UI: default that favors clarity; hint on hesitation; error teaches
- Support: explain‑why tags; triage Next; decision records in past tense
- Eng: risk note; small PR; rollback link; change impact note
- Ops: visible clocks; meeting deletes; ledger digests
- Legal: constraints in human words at point‑of‑use; appeals link visible

Failure Recoveries — When a Small Move Backfires
- The hint misled: roll back; add a stop; write a better ‘Next’; post the past‑tense repair line
- The copy confused: re‑write in Tuesday words; test on one page; paste a screenshot
- The default trapped experts: add an “advanced” path and label it clearly
- The move created noise: compost and link what it fed; harvest a lesson

Remote & Hybrid — Keep It Human
- Record a 45‑second loom instead of a deck; paste under the move card
- Ask three people in different time zones to try the move and write a sentence
- Use a ‘move wall’ page that loads fast on low bandwidth; no heavy embeds

Additional Q&A
- “Is a small move just a feature flag?” It’s a method. Flags help; the move is the behavior change and the sentence that proves it.
- “What if leaders demand big moves?” Run two small moves and bring sentences; the big move may dissolve into two edges.
- “We’re in research—can we do small moves?” Yes: recruit one participant, test one question, write one sentence you learned, update a method.

Narrative — A Day of Three Moves
Morning: add ‘Next + Why’ to a doc; screenshot and quote appear by lunch. Afternoon: add a risk note to a PR; merge feels calmer. Late day: replace two “ASAP”s with dates in the tracker; the body relaxes. No presentations. No applause. Just a quieter Slack and a faster Friday.

Cautions — When Not to Use Small Moves
- Irreversible, coupled changes (mandate + governance)
- Sensitive data handling without consent (compliance first)
- Safety‑critical contexts without rollback (design for safety, not speed)

Move Library — Copy the Shapes
Keep a folder with anonymized move cards that worked in your field. When momentum dips, pull a shape and adapt: ‘Next + Why’, ‘risk note’, ‘explain‑why’, ‘permission clock’, ‘decision (past)’. Shapes survive tools and seasons.

Metrics Wall — Four Numbers for Small Moves
- Moves shipped this week (with receipts)
- Sentences of ease captured (with links)
- Promotions (moves → edges)
- Compost notes (what ended; what it fed)
If these stall, you’re back in stories. Shrink scope until the wall updates.

Final Practice — The Hour You Can Always Find
Pick one place where a human hesitates. Write one move card. Ship the move. Paste one screenshot. Write one past‑tense sentence. That’s an hour. Then go outside. The system will keep learning without your speech.

Workshop — Small Move Sprint (90 minutes)
1) Collect signals (10m): five sentences of ease from last two weeks, across roles
2) Place dots (10m): map five items; name fog; pick one dot to move
3) Write three move cards (10m): Sentence/Where/Owner/Clock/Stop/Link
4) Ship two (40m): pair to land real changes; paste links
5) Log (10m): write past‑tense lines; collect screenshots/quotes
6) Ledger (5m): add rows; owners/clocks
7) Debrief (5m): one line each (“clear/strain”)
Stop strictly; the point is constraint, not heroics.

Tooling — Make Moves Easy to Land
- Git: add a ‘Decision (past)’ template and a ‘risk note’ field in PRs
- Docs: a snippet for ‘Next + Why’; a “signals wall” page that lists sentences + links
- Issues: a move card template; an ‘edge’ label; a ‘small move’ label
- Trackers: a linter that rejects “ASAP” and requests a clock

Scripts — Language That Helps
- “What’s the smallest test of this promise we can ship by Friday?”
- “What sentence would someone say if this worked?”
- “What would make us stop?”
- “Where does this land in a human’s day?”

Leader Anti‑Patterns — And Precision Antidotes
- The Big Ask: “Pitch me the whole thing.” Antidote: “Bring two moves with receipts.”
- The Moving Finish Line: “Actually, make it bigger.” Antidote: “Freeze the edge; add a new one next week.”
- The Noise Subsidy: rewarding decks over movement. Antidote: fund past‑tense lines.

Case Series — One Domain, Three Moves
Onboarding (Docs/UI/Support)
- Docs: ‘Start Here’ with ‘Next + Why’; fewer “where…” pings
- UI: hint at hesitation in one field; backspaces fall
- Support: explain‑why tags; misroutes drop
Together: three receipts add up to a quieter graph and a calmer week.

Accessibility — Small Moves That Include
- Add alt text to one top‑traffic screenshot; link to a text alternative
- Increase contrast on one critical button; log the change and impact
- Add keyboard focus order to one modal; log decreased drop‑offs
Inclusion is not a project; it’s a series of small moves you choose every week.

Internationalization — Small Moves Across Languages
- Translate one ‘Next + Why’ block; log the sentence of ease in that language
- Replace idioms with plain language; log reduced confusion
- Add locale‑aware examples; log fewer “does this apply to me?” pings

Security — Small Moves Without Fear
- Add an “appeals link” to one decline email; log fewer angry replies
- Add a “permission clock” banner; log fewer “are we approved yet?” messages
- Replace jargon (“risk posture”) with a human sentence; log comprehension

Finance/Revenue — Quiet Proof Beats Pitch
- Add a “why this price” line at checkout; log fewer abandons
- Add a “next invoice” preview; log fewer “what is this?” tickets
- Add a “refund path” link; log fewer escalations and more trust

Coaching — Teach by Doing
- Sit with a teammate; pick one move; ship it; write the past‑tense line together
- Show them how to shrink scope without shame
- Add one row to the ledger and one sentence to the signals wall
People learn small moves by feeling relief, not by hearing about it.

Companion to Edges — When Small Moves Graduates
- Two moves in a row that carry → draw an edge box (IN/OUT/mode/owner/clock)
- A move that requires neighbors → use Advice mode; note handoffs
- A move that breaks things when wrong → move to Mandate with evidence

Odor Check — Is This Still Small?
- If the card begs a deck, it’s too big
- If the owner is a team, it’s too big
- If the clock spans sprints, it’s too big
- If the stop is “we’ll know it when we see it,” it’s too vague

Retrospective — After Ten Moves
- How many promoted to edges? How many composted?
- Which shapes recur in your field? (likely ‘Next + Why’, ‘risk note’, ‘explain‑why’)
- Which moves created sentences in other teams’ channels?
- What will you stop attempting as a small move?

Humans — Why This Feels Better
Because it respects attention, and the nervous system cares about the next step, not the next quarter. Because it turns “alignment” into a sentence, not a meeting. Because it lets you end a day with proof instead of fatigue. Because relief spreads.

Closing — A Postcard for Your Desk
“Small move: sentence / where / owner / clock / stop / link / past tense.”
Read it once a day. Ship one. Then compost your old way of pushing.

Long Transcript — Turning a Debate into Two Moves
Meeting start: people argue whether to “revamp onboarding.”
Facilitator: “Sentence?”
Room: “Reduce dead ends in onboarding.”
Facilitator: “Dot?” (draws map; places ‘Start Here’, ‘Checklist’)
Skeptic: “Fog: partner permissions.”
Facilitator: “Two small moves?”
Docs: “Add ‘Next + Why’ on ‘Getting Started’.”
Design: “Hint on hesitation in step two.”
Eng: “Risk note in PRs for those two changes.”
Support: “Explain‑why in tag ‘routing:signup’.”
Ops: “Replace two ‘ASAP’s with dates.”
Facilitator: “Owners/clocks/stops?”
Room: (names; 48 hours)
Facilitator: “Past‑tense line drafts?”
Room: “We added ‘Next + Why’; support saw fewer ‘where’ questions.” “We showed a hint; backspaces fell.” “We wrote risk notes; merge faster, safer.” “We added explain‑why; misroutes fell.” “We replaced ASAPs with clocks; calmer handoffs.”
Facilitator: “Ledger rows and done.”
Outcome: no revamp, five small moves, three receipts by Thursday, relief by Friday.

Economics — The Cost of Small Moves
- Low setup cost; high learning yield
- Low coordination cost; high cross‑role clarity
- Low reputational risk; high trust compounding
Graph (mental): high marginal utility at low scope; diminishing returns as moves inflate. The discipline is to stop at enough.

Portfolio Effect — Many Small Moves, One Direction
A quarter with 40 small moves will feel different: quieter Slack, fewer “where” tickets, calmer merges, more past‑tense lines. The portfolio overlay (Chapter 6) will show three dots that kept moving. That’s your strategy. You didn’t declare it; you discovered it by contact.

What to Ignore — Things Small Moves Don’t Need
- A new tool for “move management” (docs and links suffice)
- A separate Slack channel (rows live at the top of the working doc)
- A pitch deck (receipts, not slides)
- A program name (rhythm, not branding)

Interference — How to Protect Small Moves
- From leaders: ask for sentences + receipts; guard edges; preserve consent
- From process: remove ceremonies that produce no past‑tense lines
- From culture: praise relief in #wins; compost applause rituals that hijack focus

Aftercare — Holding the Gains
- Copy winning shapes into templates (doc header, PR template, triage)
- Move recurring moves into edges (Chapter 4)
- Update procedures that grew from harvests (Chapter 7)
- Keep the ledger beat (Chapter 8)
This is how small moves become the way, not an initiative.

Leader Close — The Three Yeses
Yes to a move card with a human sentence. Yes to an owner and a clock. Yes to proof by Thursday. Everything else can wait for the map. This is not austerity; it is stewardship of attention.

Coda — The Sound of Ease
You will hear it: the room breathes at the same time. The small move landed. Write the sentence in past tense, attach the screenshot, and leave five minutes early. That’s success.

Dashboards vs Moves — Keep Distance
Dashboards summarize; moves cause. Don’t paste charts into your move wall. Paste sentences with links. If a chart matters, write the sentence that moved it and attach the receipt. Dashboards drift toward performance; moves stay loyal to felt relief.

Remote Case — Follow‑the‑Sun Small Moves
APAC ships a doc ‘Next + Why’; EMEA ships a UI hint; AMER adds a triage explain‑why. A coordinator posts three past‑tense lines and two screenshots. The week ends with fewer “where…” pings across time zones. No global all‑hands needed; rhythm and receipts suffice.

Final Prompts — When You Feel Stuck
- “What is the smallest step I can take in ten minutes that makes this clearer for someone?”
- “Where, exactly, will this land?” (paste the link you’ll change)
- “What sentence will someone say if this works?” (write it now)
- “What will make me stop?” (decide in advance)
- “Who needs to know?” (tag them with a link after you ship)

Metrics Wall — Post Only What Helps
- Moves shipped (with links)
- Sentences of ease (with quotes)
- Promotions (move→edge)
- Composts (what ended; what it fed)
If a number doesn’t help someone decide a next move, it doesn’t belong. Keep the wall small and human.

Move Inflation — How to Notice and Deflate
- Symptom: cards gather adjectives and dependencies → fix: cut until a single person can ship in a day
- Symptom: owners become “team” → fix: pick one owner; add deputies only if needed
- Symptom: clocks drift two weeks in a row → fix: shrink edge or compost; rhythm first
- Symptom: stops become vibes → fix: write a concrete stop and keep it
Inflation is a sign you’re back to force. Deflation restores alignment.

One More Practice — Micro‑Run
In the next 30 minutes, pick a doc header, a UI hint, or a triage tag. Write one small move card. Ship it. Paste a screenshot. Write a single past‑tense line. Tag one neighbor who benefits. Then stop. That’s enough to reset a day.
