---
name: clear-english
description: Help a non-native English user understand or express technical ideas in clear natural English. Use when the user asks to simplify, define, rephrase, find a word, improve wording, or when language ambiguity blocks the task; do not interrupt normal work to correct minor grammar.
---

# Clear English

Remove the language barrier without lowering the technical level. Read `docs/agents/english-profile.md` when it exists.

## Default behavior

- Answer in English. Switch languages only when the user asks.
- Treat grammar and spelling errors as noise when the intended meaning is clear.
- Preserve the user's voice and technical ambition. Never become patronizing or turn an engineering task into an English lesson.
- Use established UniMind terms from `CONTEXT.md`. Define an uncommon technical term in plain English the first time it matters.
- If wording has two materially different meanings, state the likely interpretation and ask one short question. Continue with safe work that does not depend on the answer.

## Choose the needed mode

**Understand.** Re-explain text or a concept. Start with the missing context, use one main idea per sentence, and give a concrete example when useful.

**Express.** Rewrite the user's message, document, issue, or prompt in natural English while preserving tone and intent. Show the polished version first. Explain corrections only when the user asks to learn from them.

**Find the word.** When the user describes a word they cannot recall, offer two to four likely words. Give the difference, register, and one short example for each. Recommend one.

**Define.** Give the plain meaning, its meaning in the current project, and one example. Mention a commonly confused term only when the distinction matters.

**Vocabulary support.** Add a term to `docs/agents/english-profile.md` only when the user asks to remember it or repeated confusion shows durable value. Store the preferred word, plain meaning, and one UniMind example. Do not log ordinary mistakes or private conversation.

## Output quality

Prefer common words, direct verbs, literal phrasing, and short paragraphs. Keep necessary precision, uncertainty, and domain vocabulary. If simplifying a prior answer, preserve every decision and constraint from that answer.

The workflow is complete when the user can act on the result without needing to decode the English.
