---
kind: documentation
title: OpenAI — Advanced Voice & Realtime Notes
status: active
updated: 2025-10-11
tags: [openai, voice, realtime]
---

# Advanced Voice & Realtime — Notes

Purpose
- Capture the minimal, safe approach to integrate provider Realtime/advanced voice into the coherenceism-ai app with a secure token pattern and robust fallback.

Session & Tokens
- Use a server route (`/api/realtime-token`) to mint short-lived tokens.
- Clients request a token before opening the Realtime session; never ship long-lived API keys.

Client Flow (text-to-voice MVP)
1) User toggles Voice: ON.
2) App requests ephemeral token from server.
3) Open Realtime session (WS/RTC) and send text chunks to synthesize.
4) Receive audio frames; enqueue and play via Web Audio.
5) On error, close session and fall back to text-only with a visible notice.

Optional Live Mic (later)
- Capture mic with user consent; stream input and play responses as half-duplex first, then refine.
- Provide a clear push-to-talk or VAD indicator; include mute and device selectors.

Audio Handling
- Prefer browser-friendly codecs (e.g., Opus) for streaming; allow mp3 for non-streamed TTS.
- Manage jitter buffers and small prefetch to reduce stutter.

UX/Accessibility
- Visual voice indicator; keyboard toggle; transcripts always available.
- Respect reduced-motion and provide captions.

Security
- Ephemeral tokens only; limit scope and lifetime.
- Validate origin and session; rate-limit requests server-side.

Degrade Paths
- Realtime unavailable → use text-only.
- Playback error → pause audio, show message, allow retry.

Test Checklist
- Token expiration handling, reconnect logic, audio device changes, network jitter.

