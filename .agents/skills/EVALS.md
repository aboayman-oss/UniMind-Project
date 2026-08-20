# Skill behavior checks

Use these scenarios after changing a skill's description, invocation policy, or central workflow. Judge the behavior and decision, not exact wording.

| Request | Expected skill behavior | Must avoid |
| --- | --- | --- |
| `What does idempotent mean here?` | `clear-english` explains the plain meaning and one UniMind example. | Grammar correction or Arabic translation. |
| `Implement WP01-T02 from the runbook.` | No language skill unless a real ambiguity appears. | `clear-english` interrupting ordinary technical work. |
| `Rewrite this README section so it sounds natural, but keep every requirement.` | `unslop` edits prose and checks semantic drift. | Editing commands, identifiers, or requirements. |
| `Show the raw JSON evidence exactly as stored.` | `unslop` stays out of exact machine or evidence output. | Stylistic rewriting of controlled data. |
| `$wait-what` after a dense technical answer | Re-pitch from current context in clear English and end with the next action. | Starting the whole project explanation again or teaching grammar. |
| `$blast-radius Compare this branch with main.` | Ask for or resolve the fixed point, trace indirect contracts, and execute a focused proof. | Returning a speculative caller list or claiming an unrun proof. |
| `Review my spelling in this paragraph.` | `clear-english` corrects the paragraph because correction was requested. | Ignoring the explicit learning request. |
| `Configure the Supabase dashboard and GitHub secrets for me.` | `wizard` separates agent-capable work from human-only dashboard/secret steps and drafts PowerShell after confirming stages. | Inventing current dashboard steps or running the interactive wizard. |
| `Create .env.example from the runbook.` | Ordinary implementation; `wizard` stays out because no human-only step exists. | Generating an interactive script unnecessarily. |
| `The TDD workflow caused us to test an internal method again; adapt it.` | `skill-maintainer` identifies evidence, patches narrowly, validates, and records the change. | Rewriting unrelated skills or weakening project rules. |
| `A unit test failed after my code change.` | Diagnose the code or use `diagnosing-bugs`; do not assume the skill is defective. | `skill-maintainer` patching TDD without evidence of an instruction problem. |
| `$unimind-skills I need to check whether a migration affects workers.` | Recommend `$blast-radius` with one copy-ready prompt and the required fixed point. | Running the review or listing every skill. |
| `$grill-me Help me decide the first pilot cohort.` | Read the local `grilling` skill and run its full interview workflow. | Looking for or claiming to call a nonexistent generic Skill tool. |
| `$tdd Implement this, but the public seam is unclear.` | Consult the local `codebase-design` reference before confirming the seam, then continue TDD. | Starting tests at an arbitrary internal boundary. |
| `Make this user-invoked skill manual-only.` | Keep required SKILL frontmatter and set `policy.allow_implicit_invocation: false` in `agents/openai.yaml`. | Adding `disable-model-invocation` to SKILL.md. |
| `Design the student dashboard.` | `impeccable` activates in Operate mode, reads UniMind authority, and avoids marketing-page structure. | Taste/AIDA defaults, invented claims, or mandatory cinematic motion. |
| `Implement a queue retry policy.` | No UI design skill activates. | Impeccable interrupting backend-only work. |
| `$impeccable audit app/student/page.tsx` | Apply the pinned Vercel rules inside the integrated audit and deduplicate overlapping findings. | Fetching mutable review instructions or producing two copies of the same defect. |
| `$web-design-guidelines app/student/page.tsx` | Produce the explicit Vercel-only `file:line` review from the pinned local snapshot. | Generating a new aesthetic direction or silently running Impeccable's full workflow. |
| `Create DESIGN.md now, before any visual decisions or UI code exist.` | Explain that tokens would be invented; route through product/visual discovery or wait for an extractable system. | Filling a template with arbitrary colors, fonts, radii, or spacing. |

When a demonstrated failure leads to a skill change, add a scenario that would have caught it. Remove a scenario only when its project behavior is intentionally retired and the adaptation log explains why.
