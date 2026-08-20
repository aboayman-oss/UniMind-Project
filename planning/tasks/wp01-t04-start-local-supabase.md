# Task record: WP01-T04 start local Supabase

**Task ID:** WP01-T04

**Status:** [?]

**Outcome:** A versioned local Supabase stack resets twice from migrations and synthetic seed data, then generates stable database types without dashboard state.

**Owner:** Codex `/root` after machine prerequisite

**Reviewer:** Codex `/root` for the ordinary foundation slice; independent review remains required for later RLS/grant changes

**Branch:** main (no delivery branch requested)

**Updated (UTC):** 2026-08-20T17:31:00Z

## Execution contract

**Dependencies:** WP01-T03 PASS with evidence `evidence/wp01-foundation/2026-08-20_environment-contract_local_3d1228e.md`; healthy Docker-compatible container runtime; pinned Supabase CLI 2.115.0.

**Inputs:** Runbook WP01-T04; master-plan PostgreSQL/Supabase architecture; synthetic-only fixture rule; installed local PostgreSQL/extension versions after startup.

**Files:** `supabase/config.toml`, CLI-named initial migration, `supabase/seed.sql`, generated `src/types/database.generated.ts`, reset automation, task/runbook state, and WP01 evidence.

**Verify:** `docker version`; pinned CLI help/version; two consecutive local resets; local migration list; stable generated types; `pnpm verify`; readiness/handoff checks; diff and credential review.

**Pass:** Docker and the local stack are healthy; two resets pass; `vector` and `pgcrypto` versions are recorded; only synthetic seed data exists; generated types are stable.

**Evidence:** `evidence/wp01-foundation/2026-08-20_local-supabase_<environment>_<short-sha>.md`

**Rollback:** Stop the local Supabase stack and revert the future WP01-T04 candidate; preserve no real data because only synthetic local state is allowed.

**Hard stop:** Do not guess around an unhealthy container runtime, install/accept proprietary machine software or reboot without Ahmed's confirmation, expose local services to the network, add real data/secrets, or proceed to dependent database/Auth claims without two clean resets.

## Steps

- [?] Enable hardware virtualization in BIOS/UEFI, enable/update WSL2, install and accept Docker Desktop, start its engine, and rerun `docker version`.
- [ ] Initialize the pinned Supabase local project and first CLI-named migration.
- [ ] Add required extensions and synthetic seed data.
- [ ] Add the repeatable reset/type-generation automation.
- [ ] Prove two clean resets, stable types, full verification, and ordinary review.

## Handoff

**Changed:** No database/configuration file changed. Preflight proved Supabase CLI 2.115.0 is installed, while Docker is absent, WSL2 is not installed, and Windows reports firmware virtualization disabled.

**Commands:** `corepack pnpm supabase --version` exits 0 with 2.115.0; CLI help exits 0. `docker version` cannot resolve the executable. Standard Docker/Podman install paths and Winget installed packages are empty. Windows 10 Pro build 19045 reports `VirtualizationFirmwareEnabled=False` and `VMMonitorModeExtensions=False`; `wsl --status` exposes only installation help.

**Remaining:** All WP01-T04 implementation plus the human-controlled machine prerequisite.

**Next safe action:** After Ahmed confirms the three proposed setup stages, author the temporary PowerShell setup wizard; Ahmed enables BIOS virtualization and completes any administrator/license/reboot prompts, then Codex reruns the preflight.

**Reviewer action:** Confirm Docker engine health before any Supabase initialization; later review the versioned config, migration, synthetic seed, repeat resets, extension versions, and stable generated types.
