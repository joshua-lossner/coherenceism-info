# Suno v5 — Using Custom Lyrics

## Introduction

Suno v5 can generate full songs from your own lyrics. This guide covers how to format sections, write effective lines for AI performance, include optional musical cues, and where to provide lyrics (UI vs. API).

## Formatting Lyrics for v5

- Enable lyric mode: In the Studio UI, toggle Lyrics or Custom Mode to paste your text.
- Use section tags: Place common song section tags on their own lines:
  - [Intro], [Verse], [Chorus], [Bridge], [Outro]
  - You may number sections: [Verse 1], [Verse 2]
- Non‑sung directions: Put any instructions or descriptors not meant to be sung in square brackets on their own lines (e.g., [Soft instrumental intro], [Guitar solo over chords], [Fade‑out]). Avoid parentheses for cues.
- One section per line: Tag line, then the lines for that section. Example:

```
[Intro]
[Short instrumental intro]

[Verse 1]
Your verse lyrics go here…

[Chorus]
Your chorus lyrics go here…
```

- Instrumental/breaks: Use [Break], [Instrumental Interlude], [Guitar Solo], [Drop], etc., with a short note, e.g. [Instrumental Bridge: guitar solo over chords]. Prefer common terms.
- Structure recommendation: Favor familiar forms such as Intro → Verse → Chorus → Verse → Bridge → Chorus → Outro. Ensure content matches tag intent (high‑energy, hooky language for [Chorus]; narrative for [Verse]).
- Optional musical details: You may include top‑of‑file meta lines like [Key: C Major], [Tempo: 90 BPM], [Time Signature: 4/4], and [Chord Progression]. Example:

```
[Chord Progression]
Verse: Am7 – Dm7 – G7 – Cmaj7
Chorus: Fmaj7 – Em7 – Dm7 – E7
```

## Writing Lyrics That Work Well

- Keep lines singable: moderate length, clear rhythm; aim for consistent syllable counts within a section.
- Rhyme/meter: light, consistent rhyme (AABB/ABAB) helps phrasing; avoid forced wordiness.
- Hooks: craft a short, repeatable chorus phrase; repeat exact wording for stronger memorability.
- Clarity: choose vivid but simple imagery; avoid dense metaphors that hinder delivery.
- Language and voice: specify language in the prompt or a tag; indicate vocal character if needed (e.g., [Vocalist: Female], [Mood: Somber]) on their own lines.

## Examples

Singer‑Songwriter (ballad)

```
[Title: “Fading Lanterns”]
[Key: G Major]
[Tempo: 78 BPM]

[Intro]
(Soft piano and strings)

[Verse 1]
Streetlights whisper in the rain,
Footsteps trace your name again.

[Chorus]
I carry all our yesterdays,
In every light that fades away.

[Bridge]
[Guitar solo with harmonized vocals]

[Outro]
[Soft fade‑out with vocal ad‑libs]
```

Blues (12‑bar)

```
[Title: “Whiskey & Regret”]
[Key: C Major]
[Chord Progression: I–IV–V (C7, F7, G7)]

[Intro]
[Slow bluesy guitar riff]

[Verse 1]
Whiskey in my glass, regrets on my mind,
Left her at the station, left my heart behind.

[Chorus]
Oh, whiskey tears, rolling slow,
Every sip, every song, just won’t let her go.

[Bridge]
[Harmonica solo wails over the band]

[Outro]
[Fading guitar riff with soft piano fills]
```

Hip‑Hop / Rap (trap‑style hook)

```
[Title: “City Grind”]
[Genre: Trap]

[Intro]
[808s kick in, hi‑hat rolls]

[Verse 1]
Neon lights flicker on these midnight streets,
I’m chasing dreams awake while the whole city sleeps.
Hustle in my heartbeat, grinding through the night,
No one gonna stop me ’til I see the morning light.

[Chorus]
We rise, we fall, we climb (we climb),
On the city grind we shine.

[Outro]
[Beat fades out, last chorus line echoes]
```

## Using Custom Lyrics: UI vs. API

- Web (Studio): Paste structured lyrics in Lyrics/Custom Mode. Note any UI length limits; for long songs, generate in parts or use extension features.
- API: Use a custom‑lyrics mode to send your full text for singing verbatim; ensure instrumental is off. Check Suno docs for request shape, length limits, and authentication.

## Notes

- Keep tags and lines concise; match energy to section type.
- Non‑sung guidance should be in square brackets on its own line; do not use parentheses for cues.
- Pair with a style prompt for arrangement guidance.
- Avoid copyrighted lyrics; write original text.

## Sources

Suno documentation and community best practices on v5 lyric usage.
