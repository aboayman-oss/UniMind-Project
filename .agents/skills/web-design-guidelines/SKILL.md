---
name: web-design-guidelines
description: Review selected UI files against the pinned Vercel Web Interface Guidelines and report concise file:line findings.
---

# Web Design Guidelines

This is an explicit second-opinion review. It does not generate a visual direction and does not replace `$impeccable audit`.

1. Resolve the files or glob supplied by the user. If no target is supplied, ask for one concise target.
2. Read [`references/guidelines.md`](references/guidelines.md) completely. Do not fetch a newer copy during the task.
3. Inspect the selected implementation and verify each applicable rule in context.
4. Report only actionable findings as `file:line — finding — user impact — recommended fix`, ordered by severity.
5. Separate certain defects from items that need rendered or assistive-technology verification. Do not claim a pass for checks that were not run.

When `$impeccable audit` is active, its audit reference already consumes this pinned ruleset. Do not run a duplicate standalone report unless the user explicitly asks for the Vercel-only view.
