---
name: unimind-skills
description: Choose the right UniMind repository skill and provide an exact invocation prompt.
---

# UniMind skills

This is the manual router for `$unimind-skills`. Read `docs/agents/skills-guide.md`.

Given the user's current goal:

1. Recommend one primary skill, or say that no special skill is needed.
2. Add one companion skill only when it handles a separate necessary part of the workflow.
3. Say whether the skill normally activates automatically or must be called explicitly.
4. Provide one copy-ready prompt that invokes it correctly.
5. Mention the most important input the user should include, such as a fixed point for blast-radius review or a design question for grill-me.

Do not run the selected workflow, install more skills, or list the entire catalog unless the user asks. The purpose is to reduce the set to the next useful move.
