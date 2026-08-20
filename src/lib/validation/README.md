# Validation module

- **Interface:** Shared Zod schemas and framework-neutral parsing/result helpers used at public seams.
- **Allowed dependencies:** Zod and shared type declarations.
- **Prohibited dependencies:** React, Next.js request objects, provider SDKs, database clients, and hidden side effects.
- **Owner:** The agent that owns the consuming contract; shared changes require affected-module review.
