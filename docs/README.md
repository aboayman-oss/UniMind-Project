# UniMind documentation

This directory separates authoritative plans, executable procedures, and reusable working templates. Keep decisions and implementation evidence linked from the execution runbook instead of adding unrelated documents at the repository root.

## Plans

- [PoC master plan](plans/poc-master-plan.md) — authoritative scope, product rules, architecture, roadmap, gates, and decision log.
- [Egyptian-Arabic plan](plans/poc-master-plan-ar-eg.html) — rendered Arabic companion for project communication. The English Markdown master plan remains authoritative.

## Runbooks

- [PoC execution runbook](runbooks/poc-execution-runbook.md) — dependency-ordered build tutorial, atomic task list, verification gates, rollback guidance, troubleshooting, and final release checks.

## Templates

- [Template index](templates/README.md) — decision, cohort, rights, raw-data, provider, RLS, load, gate, and incident templates.

## Placement rules

- Put approved product and architecture direction in `plans/`.
- Put repeatable execution, recovery, and operating procedures in `runbooks/`.
- Keep blank reusable forms in `templates/`; copy them to the destination named by the runbook before filling them.
- Store sanitized gate output under root `evidence/`. Private source material, student data, secrets, and unredacted logs must never be committed.
- Use lowercase kebab-case for new filenames and descriptive singular directory names.
