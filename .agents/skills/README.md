# Repository skills

Codex loads these project-scoped skills from `.agents/skills/`. See `docs/agents/skills-guide.md` for invocation examples, `.agents/skills/ADAPTATIONS.md` for UniMind-specific changes, and `.agents/skills/EVALS.md` for behavior checks used during adaptation.

## Source policy

Third-party skills are copied into the repository at fixed commits. Review upstream changes before updating, preserve the license, reapply intentional UniMind adaptations, and validate the result. Never run an unpinned bulk update.

| Source | Pinned commit | License |
| --- | --- | --- |
| <https://github.com/mattpocock/skills> | `885e2ca4d842d139e9aef4e48d366c63cb1b8013` | MIT, `MATT-POCOCK-LICENSE.txt` |
| <https://github.com/cursor/plugins/tree/main/pstack> | `fd6dd6f7276956a532bb78a748a8d2818b6eb5f4` | MIT, `LAUREN-TAN-LICENSE.txt` |
| <https://github.com/pbakaus/impeccable> | `f88b2837a7d7c3182e46307bbbb091a1ed547571` | Apache-2.0, `IMPECCABLE-LICENSE.txt` |
| <https://github.com/vercel-labs/web-interface-guidelines> | `e3d624baaf29dc1fc645aff3e38f03e564d2d6b1` | MIT, `VERCEL-WEB-GUIDELINES-LICENSE.txt` |
| <https://github.com/google-labs-code/design.md> | `9bf8eae67128b6cc55ad9bf86665767deb4c11cd` | Apache-2.0, `GOOGLE-DESIGN-MD-LICENSE.txt` |

## Skill inventory

| Skill | Origin | Invocation | Purpose |
| --- | --- | --- | --- |
| `unimind-skills` | UniMind | Manual | Recommend the next skill and a copy-ready prompt. |
| `grill-me` | Matt Pocock | Manual | Run a full design or decision interview. |
| `wait-what` | Matt Pocock, adapted | Manual | Re-explain the previous message in clear English. |
| `blast-radius` | Cursor pstack, adapted | Manual | Prove indirect change risk beyond a diff. |
| `web-design-guidelines` | Vercel rules, adapted | Manual | Give a separate review against a pinned Vercel rules snapshot. |
| `clear-english` | UniMind | Automatic | Help Ahmed understand or express technical ideas in English. |
| `unslop` | Cursor pstack, adapted | Automatic | Remove AI writing patterns without semantic drift. |
| `grilling` | Matt Pocock | Automatic | Stress-test a plan or idea. |
| `domain-modeling` | Matt Pocock | Automatic | Maintain domain language and ADRs. |
| `codebase-design` | Matt Pocock | Automatic | Design deep modules and stable seams. |
| `tdd` | Matt Pocock | Automatic | Guide requested test-first vertical slices. |
| `diagnosing-bugs` | Matt Pocock | Automatic | Diagnose hard bugs through a reproducible loop. |
| `wizard` | Matt Pocock, adapted | Automatic | Generate Windows/PowerShell manual-setup walkthroughs. |
| `writing-for-agents` | Matt Pocock | Automatic | Improve skills and agent-facing instructions. |
| `skill-maintainer` | UniMind | Automatic | Adapt skills from demonstrated project feedback. |
| `impeccable` | Paul Bakaus, adapted | Automatic | Design, critique, and audit distinctive production UI. |

"Automatic" means Codex may load the skill when a request matches its narrow description. It does not grant permission for external changes, paid calls, deployment, or destructive operations.
