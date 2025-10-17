---
kind: chapter
book_slug: resonance-cartography
number: 7
title: Compost Cycles
slug: compost-cycles
created: 2025-10-14
pov: 2nd
tense: present
target_words: 4875
themes: [learning, endings]
status: draft
updated: 2025-10-14
---

# Beats
- Reframe post‑mortems as harvests; name nutrients.
- Capture three decisions to repeat; three to change.
- Write one procedure from the learning.
- Archive with a one‑line lesson where the work lives.
- Schedule the next planting with scope and clock.

# Chapter
Endings can rot or feed. Compost Cycles turns endings into nutrients you can use next week. You don’t do this with post‑mortems that read like a courtroom transcript; you do it with harvests that smell like soil and show up where the work lives.

You keep the tone invitational. No blame, no trophies. The point isn’t justice; it’s fertility. You’re making the system more capable of learning without burning the people who keep it alive.

Reframe Post‑Mortems as Harvests
You rename the ritual. A “post‑mortem” summons defense. A “harvest” asks, “What feeds us?” You open a doc at the place the work lives (repo, doc, ticket) and paste a template that fits on a screen. It asks for three kinds of fruit: decisions you’d repeat, moves you’d change, and procedures you can write from what you learned.

Harvest Template (one screen)
- Keep (repeat): three decisions you’d make again; say why in Tuesday words.
- Change: three decisions you’d do differently; write the smallest alternative.
- Learn → Procedure: one repeatable step you can capture; link the draft.
- Trail: screenshot or diff; past‑tense outcome.
- Next planting: one scope + clock.

Name Nutrients, Not Heroes
You list nutrients as properties of moves, not of people. “Small PRs gave us faster feedback,” “Two‑line decisions reduced drift,” “Consent for reversible changes let us learn.” People relax when the soil gets credit. You still celebrate humans in #wins; harvest is for the field.

Capture Three Decisions to Repeat; Three to Change
You pick three of each to prevent the ritual from becoming a laundry list. “Repeat” forces gratitude; “Change” forces courage. You write the “Change” items in a shape that could survive Tuesday: a sentence, an owner, a clock.

Write One Procedure From the Learning
You prove that learning wasn’t a mood by turning it into a procedure or editing an existing one. “We added a risk note to PRs” becomes a step under `procedures/book/dev_edit.md` or a small new procedure. This is the compost: context → method.

Archive With a One‑Line Lesson Where the Work Lives
You add a single line to the top of the doc where the work will be seen next: “Lesson: write past‑tense decisions at top.” You don’t bury it in a wiki. You plant it in the path.

Schedule the Next Planting (Scope + Clock)
You end the harvest by naming a small move with a date. Too many retros end with hope. Compost ends with work.

Method — 15‑Minute Harvest
1) Brief recap in Tuesday words (60s)
2) Keep/Change (4m): three and three; write as moves
3) Learn → Procedure (4m): draft or edit one
4) Trail (2m): paste screenshot/diff and past‑tense line
5) Next planting (2m): scope + clock; owner
6) Stop (2m): no blame speeches; save poetry for the bar

Case — The Feature That Broke Quietly
You shipped a helpful hint. It helped until it didn’t: a rare state made the hint jump. Support saw the wobble and filed a ticket with a screenshot. In harvest, you kept “Next + Why,” changed “assume hover states always exist,” and wrote a procedure to test hints with crawling tools. The trail shows a diff and a gif. The next planting? Fix the CSS and add a test harness; clock Friday. The tone stayed fond of the work and suspicious of certainty.

Case — The Roadmap That Was Too Big
The team attempted five projects and finished none. The harvest named two projects to keep and three to compost. The lesson was structural: portfolio maps (Chapter 6) showed that the same three dots mattered. The procedure: “Quarterly portfolio overlay with five thumbnail maps; kill projects that don’t move dots.” The next planting: a single map review with two consent moves by Friday.

Remote Variant — Async Harvest
You run harvest in a doc. People paste three keeps and three changes under initials with one‑line lessons and links. A scribe writes the procedure and pastes the trail. The owner writes the next planting line and tags owners. No meeting unless heat appears.

Compost Library — Notes With Dignity
You keep a folder `harvest/compost/YYYY-MM-DD/` with one file per item you retired. Each file is a paragraph (what it was, what it taught, what it fed) and one link to what came next. You keep it small and visible so people don’t cling to zombies for lack of a grave.

Anti‑Patterns — How Harvests Rot
- Blame hunt dressed as introspection. Retune: write keeps first; point credit at moves; blame disappears.
- Lore wall: “what we learned” pages no one reads. Retune: turn one learning into a procedure; delete the page.
- Ceremony creep: hour‑long post‑mortems with slides. Retune: 15‑minute harvest; one screen; one move.
- Navel gazing: harvest without a next planting. Retune: always add scope + clock.

Q&A — Common Worries
- “Will this hide accountability?” No; it changes its form. Edges and decision records expose choices. Harvest tells you how to change your stance next time.
- “What if we keep making the same mistakes?” Then your procedures are wrong or no one is using them. Harvest that.
- “Isn’t this just retros?” Only if your retros write procedures and schedule next moves. If not, they’re journals.

Templates — Harvest Note, Procedure Stub
Harvest Note
```
# Harvest — <Project/Move>

Keep (repeat)
- <decision + why>
- <decision + why>
- <decision + why>

Change (do differently)
- <small alternative move>
- <small alternative move>
- <small alternative move>

Learn → Procedure
- <title> — <one‑line purpose> — <link>

Trail
- <screenshot/diff>
- Decision (past): “We <did> <what> because <why>.”

Next planting
- <scope + clock + owner>
```

Procedure Stub
```
---
kind: procedure
title: <short>
intent: <one line>
status: draft
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

Metrics That Matter (for this chapter)
- Procedures born from harvest/week
- Next plantings that shipped (owner/clock present)
- Cycle time improved after harvest vs before
- Repeat mistakes reduced (tag count trends)
- Compost items with a “fed” link

Transcripts (Short)
Facilitator: “Three keeps first.”
Room: (lists)
Facilitator: “Three changes. Write the smallest alternative.”
Skeptic: “We should write a procedure.”
Facilitator: “Do it now; paste the link.”
Owner: “Next planting: <scope + clock>.”

Leader’s Corner — Don’t Turn It into Court
Leaders love accountability and often miscast it. You make accountability cheap and visible by writing edges, past‑tense decisions, and procedures. Harvest is about what the system does next. You can still discipline if someone acted in bad faith; just don’t confuse compost with court.

Rehearsal Tip — Harvest Your Own Week
Friday, 20 minutes. Three keeps, three changes, one procedure (maybe a script snippet), one trail (screenshot), one next planting. Your week will get lighter because your mind won’t carry dead things past their funerals.

Compost Etiquette — For Ideas People Love
You don’t mock a retired idea. You give it a one‑line thank‑you and a link to what it fed. This keeps risk cheap and creativity brave. People suggest more moves when they know their work will end well even if it ends.

Flow Check — Threads
- Enters: signals to keep; edges that boxed decisions; tone that made truth cheap.
- Exits: rhythm ledger rows; portfolio maps; governance notes for stubborn patterns.

Bridge — The Rhythm Ledger (next)
You’ll give compost a beat. A ledger entry keeps harvests from becoming mist and makes them part of your weekly pulse.

Small Move: Run a harvest for one decision this week. Three keeps, three changes, one procedure, one trail, one next planting. Paste the note where the work lives and set a reminder to revisit in a week.

Extended Examples — Four Harvests in Practice

1) PR Review Harvest
Keep: small PRs; safety/risk notes; past‑tense decision lines in merge messages. Change: forbid nit‑only comments; require one “risk note”; stop using “LGTM” without content. Learn → Procedure: “PR Review — Safety/Risk Notes” (3 steps). Trail: two diffs; a screenshot of a merge with notes. Next planting: pilot on two repos; owner EM; clock Friday.

2) Incident Harvest
Keep: status cadence; single source of truth doc; decision records each turn. Change: remove Slack‑only updates; add a rollback checklist. Learn → Procedure: “Incident Edge Protocol” (from Chapter 4) extended with a 30‑minute cadence table. Trail: post‑incident with three past‑tense lines. Next planting: add rollback snippet to template; owner on‑call lead; clock tomorrow.

3) Launch Harvest
Keep: consent for reversible copy changes; link artifacts, not decks. Change: trim the launch scope to three moves; schedule a map snapshot post‑launch. Learn → Procedure: “Launch Checklist — Past‑Tense First” (write the outcome sentence before volunteer tasks). Trail: screenshot of doc header with past‑tense line. Next planting: a map review in 7 days; PL owns.

4) Hiring Harvest
Keep: “Start Here” for candidates; two‑line role scope; self‑schedule link. Change: remove “culture” slides; add “Next and Why” to the recruiting page. Learn → Procedure: “Recruiting Email — Next + Why.” Trail: email before/after; candidate quote. Next planting: ship page changes; clock Friday.

Harvest Smells — Diagnostics and Retunes
- Too many adjectives. Fix: move to Tuesday words; add examples.
- No artifacts linked. Fix: require one screenshot/diff; no diff, no harvest.
- Endless lists. Fix: cap at three keeps/changes; the cap forces choice.
- People scapegoated. Fix: move praise/blame to #wins or HR; harvest is structural.
- No “Learn → Procedure.” Fix: timebox to 6 minutes; draft the stub now.

Harvest Email Templates
Subject: Harvest — <project/move>

Short harvest is posted here: <link>.
Keep (3): <one‑liners>
Change (3): <one‑liners>
Learn → Procedure: <link>
Next planting: <scope + clock + owner>

Subject: Compost Note — <item retired>

We retired <item> and learned <one line>. It fed <link>. Thank you to <names>.

Compost Library — Shape and Storage
- Path: `harvest/compost/YYYY‑MM‑DD/<slug>.md`
- Frontmatter: `kind: compost`, `title`, `fed: <link>`, `lesson: <one‑liner>`
- Body: 2–3 paragraphs; one screenshot; no blame; link to what fed.
- Use: link compost items in map snapshots and portfolio pages to show lineage.

Integrations — Map, Ledger, Portfolio
- From Map: retire dots with a compost note; copy one‑line lesson back into the map.
- Into Ledger: add “hum” and “retune” rows that reference a harvest; mark which keeps/changes shipped.
- In Portfolio: monthly, add a tiny section “What we composted (3)” with fed links; this builds organizational courage to stop.

Governance Interplay — When Harvest Demands Escalation
Sometimes a pattern refuses to compost because it’s entangled. Use Resonant Governance: assemble evidence (KNOW/INFER/IMAGINE bullets), two harvests, one map snapshot, and an edge proposal. Ask for mandate on the coupled part, consent for the reversible part.

Equity in Harvest — Protect People While Changing Systems
- Write keeps first; credit moves; reduce bias that finds fault in vulnerable folks.
- Collect anonymous “change” items when power differentials are steep.
- Require a neutral scribe; rotate the role; post harvests publicly with redactions as needed.

Personal Compost — Examples Beyond Work
- “Stop doomscroll at 10 p.m.” Fed: better sleep; past‑tense: “I plugged my phone in the kitchen by 9:30.”
- “Stop bending calendars.” Fed: honest clocks; past‑tense: “I declined meetings without edges.”
- “Retire a clever phrase.” Fed: clearer writing; past‑tense: “I wrote Tuesday sentences first.”

Harvest Roles — Who Holds What
- Facilitator: tone and time; keeps harvest on one screen.
- Scribe: writes keeps/changes; drafts procedure; pastes trail.
- Owner: sets next planting; owns the edge.
- Skeptic: tests for theater; asks for artifacts and decisions in past tense.

Long Transcript (harvest at speed)
Facilitator: “Three keeps; go.”
Team: “Small PRs,” “Past‑tense lines,” “Consent changes.”
Facilitator: “Three changes.”
Team: “No nit comments,” “Rollback snippet,” “Kill the carousel.”
Scribe: “Procedure: PR safety/risk notes.”
Owner: “Next planting: ship snippet Wed, kill carousel Thurs.”
Skeptic: “Trail?”
Scribe: “Gif + diff pasted.”
Facilitator: “Done in 12 minutes.”

Playbooks — Micro‑Harvests
- After a PR merges: 3 minutes → Keep/Change; paste lesson; add to style sheet or procedure.
- After a call with a partner: 5 minutes → one keep, one change; update boundary/owner/clock.
- After a support spike: 10 minutes → add a ledger row; ship one retune; schedule a harvest.

Metrics Wall — Compost Signals
- Procedures born → usage count (referenced in docs/issues)
- “Fed” links per compost item
- Time from harvest → next planting shipped
- Reduction in repeated mistakes (tag trends)
- % harvests posted where work lives (vs wiki)

Case — Composting a Beloved Dashboard
The dashboard was beautiful and dishonest. It summarized feelings and hid decisions. The harvest kept the one chart that predicted load, changed the “confidence” chart to a list of past‑tense decisions, and composted three pages of colors. The procedure “Decision Record Snippet” replaced the dashboard as the source of truth for movement. Two weeks later, fewer meetings happened because the page told people what had already moved.

Case — Retiring a Process
An intake meeting existed because someone once needed to be seen. The harvest revealed it as habit. Keep: the weekly pulse. Change: replace the meeting with a form that asks for an edge and a past‑tense line. Compost: the meeting, with a note that it fed the form. People got three hours a week back.

FAQ — Sharp Questions
- “When is it too soon to harvest?” Never; harvest can be tiny. Just don’t over‑interpret.
- “What if we harvest and learn nothing?” Then you learned that your edges/moves weren’t real; fix that.
- “Who owns the compost library?” The field steward (role) tends it; anyone can add.

Scripts — What to Say
- “We’re not here to blame; we’re here to feed.”
- “Write one sentence a stranger can verify.”
- “Procedure or it didn’t happen.”
- “Next planting or we’re just reminiscing.”

Bridge Snippets — To Rhythm Ledger
- “Turn ‘Next planting’ into a ledger row.”
- “Record the hum this harvest revealed.”
- “Schedule the check‑in and paste it under the ledger.”

Closing — Make Endings Gentle
You will end more things than you keep. If your endings are kind and legible, the system will trust you with new beginnings. People will bring rough drafts and half‑true ideas without fear, because they know endings feed, not punish.

Deep Dive — Turning Learning Into Procedures
You won’t always know whether to make a procedure or a checklist or a note. Use this:
- If the learning repeats weekly, write a procedure (3–7 steps, success signals).
- If it repeats within a meeting, write a checklist block you can paste.
- If it is a naming shift, write a style‑sheet decision (caps, hyphens, labels).
- If it is a structural insight, update a role or workflow document.

Example Transformation
Learning: “Past‑tense decision lines stopped drift.”
Procedure: “Decision Record — Past‑Tense First” with steps: write sentence, add owner/clock, link artifact, post at top, stop after clarity.
Checklist (meeting footer): “Did we write the past‑tense line? Owner/clock? Links?”
Style sheet: “Decision lines: sentence case; no emoji; present links; ‘because’ not ‘due to’.”
Workflow update: add a gate for decision lines before moving a chapter/edge.

Compost Ceremony — Give Endings a Shape
- Naming: call the thing by its best intent and its actual effect.
- Thanks: “It fed…” one line of gratitude.
- Lesson: a single sentence that would have helped your past self.
- Link: what it fed.
- Time‑box: five minutes; avoid eulogies; keep it light.

Portfolio Rhythm — Monthly Compost Review
- Pull three compost notes that fed something important.
- Pull one compost note that taught nothing and ask why you kept it.
- Kill one ritual that calcified; replace with a smaller, clearer one.
- Publish a “compost bouquet”: three lessons that will travel to other teams.

Leader Moves — Make It Safe to End
- Go first: retire one of your own pet ideas in public with a compost note.
- Protect endings: when someone ends a thing, prevent “zombie revivals” for two weeks.
- Pay people back: show what their ended thing fed; link to it.
- Name the soil: praise the move shape, not charisma.

Language Kit — Words That Help
- “fed” instead of “replaced”
- “lesson” instead of “mistake”
- “retire” instead of “kill” (except when you need the sharpness)
- “harvest” instead of “post‑mortem”
- “compost” instead of “deprecate” (unless technical docs need that word)

Opposite Day — What Not To Do
- Don’t write a “lessons learned” doc no one will read. Write a procedure.
- Don’t schedule a 90‑minute post‑mortem. Do a 15‑minute harvest and ship one next planting.
- Don’t center blame or applause. Center the field; praise #wins separately.
- Don’t archive in a private folder. Place notes in the repo/wiki where work lives.

Case — Composting a Team Habit
Habit: weekly “alignment” meeting with no edges. Harvest: keep the check‑in; change to a five‑minute ledger; write a “decision record snippet”; compost the meeting. Procedure: “Weekly Ledger (5m).” Outcome: fewer meetings, more moves, calmer weeks.

Case — Ending a Long Project
The project pursued a platform. It taught you where edges live and which partners mattered. It failed at its stated goal and succeeded at feeding three moves. Harvest: three keeps (edges, partner priorities, decision records), three changes (kill two workstreams; end campaign), procedure (portfolio map overlay), compost notes for two components. The next planting: three small moves by Friday. Morale rose because endings became honest.

Cross‑Team Compost — Shared Garden
Create a shared compost wall where teams post one sentence: what ended; what it fed. No shaming, no debates. Once a month, choose one to write up as a page others can copy. This turns organizational scar tissue into connective tissue.

Compost QA — Make It Stick
- Does the compost note include a link to what it fed?
- Is the lesson one sentence a stranger can act on?
- Did a procedure change or get added?
- Is there a next planting with owner/clock?
- Is the note posted where work lives?

Retire With Dignity — People
When roles shift, harvest what the person built and what the team learned. Write keeps/changes as moves. Show them what their ended duties fed. People accept change more easily when their work becomes soil for the next season, not a footnote.

Small Scripts — During Harvest
- “What would you repeat?”
- “What would you do smaller?”
- “What would you delete?”
- “What procedure exists now that didn’t?”
- “What will we try by Friday?”

Reading List — If You Want Philosophy
You don’t need a canon, but metaphors help: A Pattern Language (seed patterns that endure), Braiding Sweetgrass (reciprocity and tending), any gardening book that teaches the patience of soil. Then return to Tuesday words.

Bridge — Compost → Ledger Examples
- Harvest keep: “past‑tense lines” → Ledger hum: “drift absent” → Retune: require past‑tense line → Owner: PM → Clock: today.
- Harvest change: “remove carousel” → Ledger hum: “noise wins attention” → Retune: add Start Here → Owner: designer → Clock: Friday.
- Harvest learn → Procedure: “risk notes” → Ledger hum: “merges argue nits” → Retune: require risk note in PR template → Owner: EM → Clock: Wednesday.

Governance Note — When Compost Reveals Coupling
If a harvest item fails to change because it is entangled upstream, don’t force it locally. Write a governance pack:
- KNOW/INFER/IMAGINE bullets about the coupling
- Two harvests showing repeated pain
- A current map snapshot with the stubborn dot
- A boundary proposal (scope in/out; mode; owner; clock)
Send to the decision body with one paragraph, three bullets, and a past‑tense line you would like to read next week. Keep the tone human; keep the ask small.

Harvest Kit — Tiny Reusable Blocks
- Decision line snippet (past tense)
- Boundary box template (IN/OUT/mode/owner/clock)
- PR template section (safety/risk notes)
- Doc header snippet (Sentence / Decision / Owner / Clock / Links)
- Compost note stub (fed/lesson/link)

Async Scripts — Chat‑First Harvest
- “Drop one KEEP (decision you’d repeat) and one CHANGE (small alternative).”
- “Paste one artifact (screenshot/diff).”
- “Write a one‑line procedure or link to the one you updated.”
- “Name the next planting (scope + clock + owner).”

Role Cards — Who to Invite
- Operator (knows where strain actually lives)
- Skeptic (keeps you honest)
- Owner (can set next planting)
- Neighbor (adjacent edge; will inherit effects)
Three is enough. More is theater.

Longer Transcript — Product Harvest
Facilitator: “Brief in 20 seconds.”
PL: “Reduce dead ends in onboarding; we shipped Start Here + Next/Why.”
Facilitator: “Keeps?”
Team: “One‑page brief,” “Past‑tense decisions,” “Two‑image rule.”
Facilitator: “Changes?”
Team: “Fewer decks,” “Kill carousel,” “Consent small copy changes.”
Scribe: “Procedure drafted: ‘Narrative Doc Replaces Deck’.”
Owner: “Next planting: remove carousel (Thurs), add ‘Next/Why’ to doc pages (Fri).”
Skeptic: “Ledger row added. Screenshot pasted. Done.”

Retrospective — Two Weeks Later
You reopen the harvest and mark outcomes in past tense. Two keeps stuck. One change was wrong; you compost that too with a lesson: “We over‑generalized from one win.” You update the procedure; you’re not precious about your own compost notes.

Compost Debt — Pay It Like Tech Debt
If you skip harvests, dead ideas rot in place and attract meetings. Pay down debt:
- Do one micro‑harvest daily (3 minutes)
- Post one compost note weekly
- Update one procedure biweekly
Stop when the system feels breathable again (fewer “are we still…” threads; more past‑tense lines).

Edge Case — When a Person Wants Credit
Give credit in #wins. In harvest, translate their claim into the move that actually fed the field and write that. “<Name> reduced dead ends by adding ‘Next/Why’” is both personal and structural. Praise is preserved; compost stays neutral.

Manager Q&A — Hard Ones
- “We failed publicly. Should we harvest publicly?” Yes, with care. Redact secrets; keep tone human; link what fed.
- “Our leader hates the word compost.” Use “retire” or “archive” and keep the practice.
- “A team refuses harvests.” Treat this as a governance/tone issue; run a tiny harvest inside your boundary and show the relief.

Metrics Examples — Before/After Snippets
- Reopens per week: 85 → 62 after Start Here; lesson: “place Next at hesitation.”
- Time‑to‑merge: 2.8d → 1.9d after risk notes; lesson: “talk risk not nits.”
- “Where do I…?” tickets: 37 → 21 after removing carousel; lesson: “compost pretty noise.”

Practice Prompts — Personal
- “Three keeps that honor my week.”
- “Three changes I can do by Friday.”
- “One procedure I could write for my future self.”
- “One compost note I can publish to help a peer.”

Closing Image — The Bed
You kneel at a raised bed with a small trowel and fold in scraps that once were bright. In two weeks, they become something you can’t buy at the store: soil fit for your climate, your sun, your rain. That’s the point of compost: the field gets specific and generous at once.

Linkers — Toward The Rhythm Ledger
- “Harvest becomes pulse when we record it.”
- “The ledger is where lessons keep time.”
- “Next planting is just a ledger row with a clock.”

Rhythm Conversion — From Harvest to Beat
- Copy “Next planting” to the ledger (hum/retune/owner/clock/stop).
- Add the past‑tense line when shipped; link the artifact.
- If a change repeats twice, promote it to a procedure and remove from ledger.
- If a keep repeats twice, record it as a signal and move off the ledger.

Mapping Table — Compost → Procedure Types
- Naming shift → style sheet decision
- Repeated micro‑move → checklist block
- Cross‑session move → procedure
- Cross‑team coordination → workflow entry

Final Q&A
- “What if harvests make us sentimental?” Guard with past‑tense lines and next plantings; feelings are welcome, but movement is mandatory.
- “Do we keep every compost note forever?” No. Keep a year; archive the rest; keep links to what they fed.
- “Can we harvest a success?” Yes. Especially yes. Success hides drift if you don’t extract the pattern.

One More Practice
End one meeting early this week by writing a past‑tense line and a next planting. Then schedule a 10‑minute harvest two days later to see what fed and what strained. Two small beats are enough to start a season.
Let the soil do the quiet work; your job is to keep turning it.
It will look like less effort and feel like more life.
Coda: End gently, learn plainly, begin smaller, and keep the beat.
And breathe; the field will remember how.
