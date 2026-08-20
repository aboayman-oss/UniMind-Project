# UniMind UI design stack

This project uses one design director, one durable design record, and one pinned standards review. The parts cooperate because their responsibilities do not overlap.

## Decision

| Layer | Choice | Responsibility |
| --- | --- | --- |
| Design and refinement | `impeccable` | Product-aware UI direction, implementation, critique, visual verification, and anti-pattern detection. |
| Persistent visual context | root `DESIGN.md` | Confirmed tokens, component language, responsive behavior, and design rationale. It is created after real decisions exist. |
| Standards review | pinned Vercel Web Interface Guidelines | Accessibility, forms, interaction, typography, performance, theming, touch, and internationalization checks. |
| Project learning | `skill-maintainer` | Narrow improvements when real UniMind work exposes a repeatable skill defect. |

Do not run Taste Skill and Impeccable as simultaneous design directors. Their layout, motion, typography, and component opinions can conflict. Do not install separate UI Designer and Brand Guardian role prompts: Impeccable already separates surface modes, project context, critique, audit, and finish review.

## Why Impeccable was selected

Repository popularity is evidence of attention, not proof of output quality. The decision also considered scope, maintenance, licensing, Codex support, and reports from people who tried the tools.

Counts checked on 2026-08-20:

| Candidate | Community signal | Fit for UniMind | Decision |
| --- | --- | --- | --- |
| [Taste Skill](https://github.com/Leonxlnx/taste-skill) | 78.3k stars and 5.3k forks | Strong first-pass visual style, but the current default says it is for landing pages, portfolios, and redesigns—not dashboards or multi-step product UI. Its Codex variant forces AIDA marketing structure and heavy GSAP motion. | Do not install as a second director. Reconsider only for a separate marketing site. |
| [Impeccable](https://github.com/pbakaus/impeccable) | 60.8k stars and 3.7k forks | Supports dashboards and product UI, has an Operate mode, records product/design context, provides focused refinement commands, and includes deterministic checks. Apache-2.0 and Codex-native. | Selected. |
| [Vercel agent skills](https://github.com/vercel-labs/agent-skills) | 30.2k stars and 2.7k forks | `web-design-guidelines` is a reviewer, not a generator. Useful after or during implementation. | Use as a pinned review layer. |
| [Google DESIGN.md](https://github.com/google-labs-code/design.md) | 27.4k stars and 2.3k forks | A portable visual contract with lint/export tooling, but the specification is still alpha. | Pin the current spec and review upgrades manually. |
| [Agency Agents](https://github.com/msitarzewski/agency-agents) | 146.3k stars for the whole multi-role collection | UI Designer and Brand Guardian are Claude-oriented role prompts. The repository total does not measure those two files, and their duties overlap the selected workflow. | Do not install. |

Actual user reports are mixed, which is useful. A [same-prompt comparison](https://www.reddit.com/r/ClaudeCode/comments/1syachi/best_skill_for_uxui_impeccable_vs_uxui_pro_max_vs/) preferred Taste's look by a small margin but preferred Impeccable's coherent documents and features. Other users report that [Impeccable improved Codex frontend output](https://www.reddit.com/r/codex/comments/1vnv0uh/in_your_opinion_how_good_is_gpt56sol_for_frontend/) and that its audit tools help remove the generic AI look and improve accessibility in [real project use](https://www.reddit.com/r/ClaudeCode/comments/1s2cgdo/what_do_you_guys_use_in_promptsskills_to_get_less/). Critical reports also matter: users say design skills can still produce generic or weak UX without a concrete brief or visual reference. A skill is a process aid, not a substitute for product judgment or user feedback.

## How the parts run

```text
UniMind authority (AGENTS.md + master plan + CONTEXT.md)
                         |
                         v
        Impeccable product and surface workflow
                         |
              reads/writes confirmed context
                         v
                    DESIGN.md
                         |
                         v
       implementation + rendered verification
                         |
                         v
 Impeccable audit + pinned Vercel guidelines + detector
                         |
                         v
       evidence-backed fixes and final handoff
```

## Commands

- First UI setup: `$impeccable init`
- Plan a screen or flow: `$impeccable shape <surface>`
- Build or redesign: describe the UI task normally; Impeccable can activate automatically.
- Review UX and hierarchy: `$impeccable critique <target>`
- Run the integrated technical audit: `$impeccable audit <target>`
- Record the implemented design system: `$impeccable document`
- Request only the Vercel rules report: `$web-design-guidelines <file-or-glob>`
- Ask which skill fits: `$unimind-skills <goal>`

The Impeccable hook is intentionally off during planning. When UI code exists, ask for `$impeccable hooks on`, inspect the generated `.codex/hooks.json`, and approve it through Codex's `/hooks` screen only if the automatic detector saves more time than it adds.

## Improvement rule

Do not "self-improve" by rewriting instructions after every preference or model mistake. Capture confirmed design decisions in `DESIGN.md`. Change a skill only when repeated friction, user feedback, or a failed workflow exposes a reusable instruction defect. Record that change in `.agents/skills/ADAPTATIONS.md` and add a case to `.agents/skills/EVALS.md`.
