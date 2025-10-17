---
kind: documentation
title: Tools — Text-to-Speech (Provider-Agnostic Contract)
status: active
updated: 2025-10-11
tags: [tools, tts, voice]
---

# Text-to-Speech — Provider-Agnostic Contract

Purpose
- Define a minimal HTTP contract and environment for TTS so downstream apps can swap providers (OpenAI, ElevenLabs, etc.) without changing app cores.

HTTP Contract (minimal)
- Endpoint: `POST /tts`
- Request JSON:
  - `provider` (string) — e.g., `openai`, `elevenlabs`
  - `voice_id` (string) — provider voice identifier or preset
  - `text` (string) — content to synthesize
  - `format` (string, optional) — `mp3|wav|opus` (default `mp3`)
  - `speed` (number, optional) — 0.5–2.0
  - `metadata` (object, optional) — passthrough hints
- Response JSON (success): `{ ok: true, url: "<audio-url>", format: "mp3" }`
- Response JSON (error): `{ ok: false, error: "message" }`

Env & Config
- `TTS_PROVIDER` — current provider id
- `TTS_API_KEY` — secret key (server-side only)
- `TTS_SERVER_URL` — base URL for TTS endpoint (if external)

Notes
- Keep provider keys server-side; never expose to the browser.
- Return short-lived URLs if serving audio from a server; or stream bytes if preferred.
- Include clear error messages and consistent `ok`/`error` format.

