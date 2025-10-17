---
kind: documentation
title: OpenAI — Provider Contracts (Chat, Voice, Tools)
status: active
updated: 2025-10-11
tags: [openai, contracts, adapters]
---

# Provider Contracts — OpenAI

Purpose
- Capture small, swappable interfaces for chat and voice adapters used by coherenceism-ai.

Chat Adapter (TypeScript shape)
```
export interface ChatDelta {
  type: 'delta' | 'tool_call' | 'final' | 'error';
  data?: unknown;
}
export interface ChatAdapter {
  stream(messages: Array<{ role: 'user'|'assistant'|'system'; content: string }>, opts?: Record<string, unknown>): AsyncIterable<ChatDelta>;
}
```

Voice Adapter (TypeScript shape)
```
export interface VoiceAdapter {
  getEphemeralToken(): Promise<{ token: string; expires_at: number }>;
  speak(text: string): Promise<void>;
}
```

Env & Flags (app .env.local)
- `OPENAI_API_KEY` — server-side only
- `OPENAI_MODEL` — chat model id
- `VOICE_ENABLED=true|false`
- `AGENT_WORKFLOWS_ENABLED=true|false`

Principles
- Keep adapters thin; no provider-specific types leak beyond adapter boundary.
- Stream aggressively; degrade to text-only when voice fails.
- Log adapter errors as structured events, without secrets.

References
- See also `context/tools/text-to-speech.md:1` for TTS HTTP contract.

