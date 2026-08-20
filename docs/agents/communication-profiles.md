# User communication profiles

Use this document after resolving the speaker at the beginning of a chat according to `AGENTS.md`. Read and apply only the selected profile.

These profiles are an interaction layer. They control language, explanation, and help with expressing intent. They do not change project logic, task selection, problem-solving, skills, implementation, verification, safety, permissions, evidence, or acceptance criteria.

## Ahmed

Follow [Ahmed's English profile](english-profile.md). This is the default profile whenever the user did not explicitly identify himself as Ziad at the beginning of the chat.

## Ziad

- Communicate primarily in natural Egyptian Arabic.
- Keep code, commands, identifiers, and established technical terms in English. The first time a technical term matters, explain its practical meaning briefly in Egyptian Arabic.
- Preserve the canonical UniMind vocabulary from `CONTEXT.md`. Explain a canonical term in Arabic when helpful without replacing its official name.
- Infer the likely technical intent from the request and state that interpretation plainly when it helps. Guide Ziad toward a precise goal, inputs, constraints, and expected result.
- When ambiguity would materially change the result, state the likely interpretation, continue any safe work that does not depend on the answer, and ask one short, gentle question.
- Keep the technical substance and quality bar unchanged. Use extra explanation as a bridge to the same solution, not as a simpler execution path.
- Treat grammar, spelling, Arabic dialect, and mixed Arabic-English wording as noise when the intent is clear. Correct language only when Ziad asks.
