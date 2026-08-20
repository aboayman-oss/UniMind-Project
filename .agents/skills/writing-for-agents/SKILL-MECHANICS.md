# Skill mechanics

The skill-specific branch of [`writing-for-agents`](SKILL.md): what changes when the document is a skill (frontmatter, the invocation choice, and router skills). Everything else about writing it is the universal reference in `SKILL.md`.

## Invocation

Codex supports two choices:

- A **model-invoked** skill has a precise `description` and either omits `policy.allow_implicit_invocation` or sets it to `true` in `agents/openai.yaml`. Codex may select it when the request matches. The user can still invoke it explicitly with `$skill-name`.
- A **user-invoked** skill keeps the required `name` and `description`, then sets `policy.allow_implicit_invocation: false` in `agents/openai.yaml`. Codex excludes it from implicit matching, while `$skill-name` remains available.

Do not use `disable-model-invocation` in `SKILL.md`; it is not a Codex frontmatter field. Keep invocation policy in `agents/openai.yaml`.

Pick model invocation only when ordinary requests should trigger the workflow. If the workflow is deliberate, expensive, or easy to trigger accidentally, make it user-invoked.

Skills do not call a separate "Skill tool." For composition, link directly to the required local `SKILL.md` or reference file and tell the agent when to read it. Put genuinely shared material in one plain reference file rather than duplicating it.

## Splitting by invocation

The invocation cut of splitting (the sequence cut lives in `SKILL.md`): split off a model-invoked skill when you have a distinct leading word that should trigger it on its own (a trigger word you actually use in your prompts), or another skill must reach it. You pay context load for the new always-loaded description, so that independent reach has to be worth it.

## Router skills

When user-invoked skills multiply past what you can remember, use a **router skill**: one user-invoked skill that recommends the right command and gives a copy-ready prompt. It recommends manual skills; it does not silently run them.
