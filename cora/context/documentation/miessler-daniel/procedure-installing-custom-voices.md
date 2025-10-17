Below is how Daniel seems to do it, step by step. I leave open where you’ll need to adapt keys, IDs, paths.

  

### **Prerequisites & assumptions**

- You have the **PI repo**/cloned system he refers to (agents, context, voice server, etc.).
    
- You have an **11 Labs** account / API key (or some voice API) to generate voices.
    
- The voice server infrastructure is part of his repo.
    
- Agents are structured to send outputs to a voice server endpoint.
    
- The “output format” logic (custom completed, voice routing) is editable.
    

---

### **Steps**

1. **Define voice IDs in “stop hook” / output-format configuration**
    
    - In the hooks (e.g. “stop hook”) file, include voice-IDs (from 11 Labs) assigned per agent.
        
    - Example: you’ll see something like
        
    

```
"voice_id": "some_11labs_id",
```

1. - or routing logic for voices inside the “completed” output format.
        
    - That “completed” template is a custom output format you define (not just generic “task done”).
        
    
2. **Modify / set up custom output format**
    
    - In the main “context” or “output format” file, override the “completed” behavior.
        
    - Include fields such that, when an agent finishes a task, the output includes:
        
        - The “textual summary” (what they did)
            
        - The result (if applicable)
            
        - The voice routing metadata (voice IDs)
            
        
    - This custom output format must be recognized by the system so that the voice-layer is triggered.
        
    
3. **Hook the agent to send its output to the voice server**
    
    - In each agent’s code (e.g. the Pentester agent file), after loading context, package its response message and metadata (voice ID etc.) and send that to a **voice server endpoint** (running locally or remote).
        
    - The code snippet will include something like:
        
    

```
send_to_voice_server({
  "voice_id": agent_voice_id,
  "text": agent_response_text,
  ...
})
```

3. -   
        
    - The voice server then returns audio or triggers spoken output.
        
    
4. **Run / host the voice server**
    
    - The voice server lives within the repo (in a “voice server” directory).
        
    - It listens (e.g. on localhost) for incoming voice-requests from agents.
        
    - It forwards these requests (voice_id + text) to the 11 Labs API, gets back audio, and either returns or plays it.
        
    - Ensure your voice server is configured (API keys, rate limits) and running when agents fire.
        
    
5. **Define agent voice assignment & routing logic**
    
    - In the “stop hook” / routing logic, map agents (Kai, Pentester, Designer, etc.) to their voice IDs.
        
    - In agent code, when finishing, route their output via the voice server with their voice.
        
    - After the sub-agent completes and returns control, have the main agent (Kai) summarize and speak via its own voice.
        
    
6. **Test & validate**
    
    - Start the system.
        
    - Invoke a command that triggers an agent (e.g. “use Pentester to compute primes”).
        
    - Observe voices: You should hear distinct voices per agent and then the main one.
        
    - If voices mismatch or not played, troubleshoot:
        
        - Voice IDs incorrect or unauthorized in 11 Labs
            
        - Voice server not running or misconfigured
            
        - Output format hook not being invoked
            
        
    

---

If you like, I can turn this into a more concrete template (with file stubs, code snippets) based on his repo. Want me to do that?