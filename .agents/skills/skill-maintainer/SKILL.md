---
name: skill-maintainer
description: Improve a repo-scoped skill when user feedback, repeated friction, a missing UniMind convention, or a failed skill workflow demonstrates a specific gap. Do not use for speculative rewrites or ordinary task failures unrelated to skill instructions.
---

# Skill Maintainer

Turn real project experience into narrow, tested skill improvements. Announce when this skill activates because it may change agent behavior for future tasks.

## Evidence gate

Before editing a skill, identify:

- the triggering request and skill;
- the expected behavior;
- the observed miss or friction;
- the instruction, missing context, dependency, or ambiguity that caused it;
- why the change will help a repeated UniMind workflow rather than one unusual example.

If the evidence does not point to the skill, fix the task, documentation, tooling, or project rule instead. Do not patch a skill to hide a product defect or a one-off misunderstanding.

## Scope the correction

1. Read the complete skill and every referenced resource affected by the change.
2. Check `.agents/skills/README.md` for its upstream source, pinned commit, license, and local adaptation status.
3. Preserve user intent, permission boundaries, security rules, and governing project documents.
4. Prefer one precise correction: sharpen a trigger, repair a completion criterion, add missing project context, remove a false assumption, or fix a reusable script.
5. Keep upstream skills recognizable and attributed. Put UniMind-specific behavior in the local copy; never overwrite the provenance record.

## Validate

- Run `powershell -ExecutionPolicy Bypass -File .agents/skills/skill-maintainer/scripts/validate-repo-skills.ps1`. It bootstraps the official validator's pinned YAML dependency in the system temp directory, not the project.
- Resolve every local reference from `SKILL.md`.
- Test at least one realistic request that should trigger the behavior and one nearby request that should not when invocation changed. Add a case to `.agents/skills/EVALS.md` when the demonstrated failure was not already covered.
- Run or parse supporting scripts without causing external changes. Use an isolated workspace for behavior tests that create files.
- For a complex or high-risk skill change, use an independent evaluation only when delegation is available and authorized.

Record the date, evidence, exact change, validation, and upstream impact in `.agents/skills/ADAPTATIONS.md`. Report the improvement to the user. A skill never edits itself silently, never learns secrets or private content, and never claims to be fully optimized without project evidence.
