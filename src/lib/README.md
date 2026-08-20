# Library modules

Each child directory is one domain or platform module. Its README names its interface, allowed dependencies, prohibited dependencies, and owner. Shared layer rules live in `docs/agents/module-boundaries.md` and are enforced by `pnpm check:boundaries`.

Use direct imports from the file that owns an interface. Do not create a broad cross-module barrel.
