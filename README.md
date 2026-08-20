# UniMind PoC

This repository contains the source-of-truth plan and executable delivery runbook for the UniMind proof of concept.

## Contents

- [PoC master plan](docs/plans/poc-master-plan.md) — source-of-truth product, scope, and architecture plan.
- [Execution runbook](docs/runbooks/poc-execution-runbook.md) — tutorial-style implementation checklist, verification gates, rollback guidance, and delivery sequence.
- [Agent instructions](AGENTS.md) — always-on repository rules for Codex and compatible coding agents.
- [Domain context](CONTEXT.md) — shared UniMind vocabulary and relationships for discussion, code, tests, and decisions.
- [Repository skills](.agents/skills/README.md) — audited, pinned workflows available to Codex in this repository.
- [Skills guide](docs/agents/skills-guide.md) — which skills run automatically, which to call, and copy-ready examples.
- [UI design stack](docs/agents/ui-design-stack.md) — why Impeccable was selected, how DESIGN.md and the Vercel review fit, and the UI workflow.
- [English profile](docs/agents/english-profile.md) — persistent communication preferences and optional vocabulary notes.
- [Egyptian-Arabic plan](docs/plans/poc-master-plan-ar-eg.html) — rendered Arabic companion for easier project communication.
- [Documentation index](docs/README.md) — map of plans, runbooks, and reusable templates.
- [Evidence index](evidence/README.md) — rules for sanitized gate evidence organized by work package.

## Repository structure

```text
.
├── docs/
│   ├── plans/        # Authoritative scope and architecture plans.
│   ├── runbooks/     # Executable delivery and operational procedures.
│   └── templates/    # Copy-ready controlled project artifacts.
├── evidence/         # Sanitized gate reports and restricted-evidence links.
├── .gitignore
└── README.md
```

## Status

The project is in planning and execution-readiness. Start at section 0 of the [execution runbook](docs/runbooks/poc-execution-runbook.md), complete work package 0 decisions, and then follow packages in dependency order. A package is complete only after its independent gate review passes.

## Notes

This repository is intended to be used as the canonical project home for collaboration, versioning, and publication to GitHub.
