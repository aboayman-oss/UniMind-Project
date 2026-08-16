# UniMind PoC: Detailed Execution Runbook

**Purpose:** The concrete, ordered implementation checklist for UniMind. Use it with `UniMind_PoC_Master_Plan.md`.

**Completion rule:** A task is complete only when its verification evidence is recorded. Working code without evidence does not close a task.

## 1. Rules for all implementation work

1. Check current official documentation before installing a package, selecting an AI provider, or relying on hosting or provider limits.
2. Pin package versions and commit the lockfile. Do not use unpinned global tools as production dependencies.
3. Use separate development and beta-production environments. Development contains synthetic or sanitised data only.
4. Keep all provider keys, service-role keys, webhook secrets, originals, and payment evidence server-side/private.
5. Never authorise from a browser-supplied user ID, role, cohort ID, or curriculum-unit ID. Derive identity server-side and validate all requested resources.
6. Enable Row Level Security (RLS) on every exposed database table, then test denied access as seriously as allowed access.
7. Use Server Components for internal page reads, Server Actions for browser form mutations, and Route Handlers for streaming chat and third-party webhooks.
8. Use the Node.js runtime by default. Do not move a route to Edge without a specific need and compatibility test.
9. Treat all source and web text as untrusted data, not instructions.
10. Every model/transcription/search call needs a correlation ID, provider/model identifier, usage data, latency, and cost event.

## 2. Exact delivery order

| Order | Work package | Required outcome before moving on |
| --- | --- | --- |
| 0 | Pilot decision pack | Selected cohorts, Batch Leaders, source rights, deletion policy, testers, gold cases, and spend cap. |
| 1 | Repository and environments | Reproducible local application, CI, development/beta separation. |
| 2 | Auth, generic catalog, release, and access control | Proven Student/Batch Leader/Admin isolation and derived availability. |
| 3 | Intake, source optimization, and deletion | Versioned citeable processed text with verified raw deletion. |
| 4 | Retrieval evaluation | Retrieval is relevant, citeable, and zero-leakage before chat. |
| 5 | Grounded tutor and credits | Cited bilingual answers, safe fallback, correct settlement. |
| 6 | Study tools | Validated summaries, flashcards, MCQs, and quizzes. |
| 7 | Founder operations/integrations | Drive, Telegram, jobs, admin, payments, and runbooks. |
| 8 | Veterinary Medicine cohort | Same gates pass with Subject terminology on a second program. |
| 9 | Private beta | Evidence of quality, repeat value, cost, and operability. |
| 10 | Paid pilot | Limited real payments with reconciliation and support. |

## 3. Work package 0 — Pilot decision pack

### 3.1 Build a source inventory

Create one inventory row for every available source. Required fields:

- education stage, institution/system, program/faculty, academic level, term, cohort/curriculum edition, curriculum unit and unit type;
- source type: slide, handout, recording, original exam, answer key, supplementary source;
- original filename, owner/uploader, expected MIME type, size, and audio duration;
- language mix, scan/audio quality, and whether diagrams/tables are important;
- patient/personal-data risk;
- permission state: unknown, verbal, written, restricted, or denied;
- permission for temporary raw storage, extraction, OCR/transcription, AI processing, durable processed-text retention, cited excerpts, raw deletion, exam display, and future commercial student access.

Do not send a source to an external provider while its third-party processing right is unknown.

### 3.2 Select the two pilot tracks

Score candidate Human Medicine and Veterinary Medicine cohorts from 0-5 for each criterion:

1. A complete, permitted lecture block exists.
2. Ahmed or Ziad can academically review it.
3. Past exams, verified keys, or credible professor hints exist.
4. Scan/audio quality is representative but workable.
5. At least ten reachable testers exist.
6. Students have a clear revision problem or willingness to try the product.

Record the calculation. Select one Human Medicine cohort first, then one Veterinary Medicine cohort before PoC completion. Record institution, program, level, term, curriculum edition, curriculum-unit type, and proposed Batch Leader. If a cohort lacks rights, coherent content, a leader/source path, or testers, replace it before engineering begins.

### 3.3 Create immutable rights records

For each content collection, create a rights record with a unique ID and written proof/reference. It must state whether UniMind may:

- store the raw source temporarily until verified conversion and deletion;
- extract text, OCR pages, transcribe audio, chunk, and embed it;
- send it to the selected AI/transcription providers;
- show a limited excerpt/page/timestamp citation to enrolled students;
- use original exam questions and answer keys;
- retain the optimized text/locators and automatically delete the raw file under an auditable process;
- give commercial access later.

Every source version will later link to this rights record. Do not use informal chat messages as the only rights evidence.

### 3.4 Prepare the evaluation datasets before model selection

Create 100 Human Medicine tutor cases. Each case needs: an ID, subject/lecture scope, English/Arabic/mixed input language, question, case type, expected source versions/locators, acceptable answer points, must-abstain flag, and reviewer notes.

Use these case types: direct fact, multi-source synthesis, exact terminology, concept retrieval, insufficient evidence, conflicting sources, Arabic/mixed-language question, and adversarial/prompt-injection source content.

Create 30 Human Medicine MCQ-generation cases. Include deliberately ambiguous or flawed prompts so the validator is tested, not only easy questions.

### 3.5 Approve a real spend limit

Write down the total PoC cap, weekly cap, account owner, billing route, 50/75/90% alert levels, authorised approvers, and an immediate provider kill-switch procedure. Do this before enabling real generation, transcription, or search keys.

### 3.6 Exit evidence

- Selected Human Medicine and Veterinary Medicine cohorts with configured Module/Subject display.
- Named candidate Batch Leader and collection campaign scope for each cohort.
- Complete initial source inventory.
- Rights record/status and raw-deletion rule for every candidate source collection.
- Ten committed testers for the first track.
- Signed-off test budget.
- 100 tutor cases and 30 MCQ cases for Human Medicine.
- Updated decision log in the master plan.

## 4. Work package 1 — Repository, environments, and delivery controls

### 4.1 Create the codebase

1. Create one private GitHub repository.
2. Check the current Next.js scaffold CLI help, then create an App Router project with TypeScript, ESLint, Tailwind CSS, `src/`, and `@/*` imports.
3. Pick one package manager and commit its lockfile immediately.
4. Add `.env.example` containing names only; never values.
5. Add `.gitignore` coverage for real environment files, generated output, downloaded originals, test artifacts, and local provider credentials.
6. Write a short README with prerequisites, setup, environment-variable names, and all validation commands.

### 4.2 Create the initial structure

Create these top-level folders: `src/app`, `src/components`, `src/lib`, `src/types`, `supabase/migrations`, `workers/ingestion`, `evals/datasets`, `evals/runners`, `evals/reports`, `docs/adr`, `docs/runbooks`, `n8n/workflows`, and `tests/unit`, `tests/integration`, `tests/e2e`. Inside `src/lib`, create explicit `catalog`, `availability`, `storage`, `auth`, `rag`, `ai`, `credits`, and `validation` modules so catalog/release and storage-deletion rules do not leak into UI components.

Inside `src/app`, use route groups for auth, student, and admin experiences. Keep a UI page and an API route handler in separate route segments; Next.js does not allow a `page.tsx` and `route.ts` to coexist in the same segment.

### 4.3 Create code-quality commands

Add and document commands for formatting check/write, lint, TypeScript check, unit test, integration/database test, end-to-end test, production build, and selected recorded evaluation tests. Normal unit tests must use mocks or recorded fixtures and make no paid AI call.

### 4.4 Create environments

Create distinct Supabase development and beta-production projects. Development uses synthetic/sanitised data; beta production holds permitted pilot data only. Preview deployments use development/sanitised data only, never beta data.

Create separate provider keys, webhook secrets, storage locations, and spend caps for development and beta production. Store the project IDs in a private operational record, not in a public README.

### 4.5 Define environment variables

Use placeholders at minimum for `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, AI/search/transcription provider keys, `TELEGRAM_BOT_TOKEN`, `TELEGRAM_WEBHOOK_SECRET`, Drive/object-storage credentials, temporary-raw bucket/folder configuration, processed-source bucket/folder configuration, and error-monitoring configuration.

Only `NEXT_PUBLIC_*` values can reach browser code. Search the code and inspect a production build before beta to prove no secret is included in a Client Component.

### 4.6 Configure CI and Git controls

Every pull request must run dependency install from the lockfile, formatter check, lint, type check, unit tests, migration/RLS tests, selected offline evaluation tests, and production build. Protect `main`: pull requests, passing checks, and no force push.

Record commit SHA, migration version, prompt version, and provider configuration version for every beta deployment.

### 4.7 Exit evidence

- A clean clone can start locally and pass checks using only documented setup.
- CI passes on a harmless documentation change.
- Development and beta project IDs/secrets are separate.
- No secret appears in Git history, source code, sample files, or browser bundle.

## 5. Work package 2 — Authentication, catalog, and access control

### 5.1 Configure server-side authentication

Use the current Supabase SSR package for cookie-based Next.js sessions, with distinct browser and server client utilities. Configure the required Next.js session-refresh mechanism for the selected version (current Next.js uses `proxy.ts`; verify this when the project is scaffolded).

Use the SSR/PKCE flow. Do not combine browser local-storage authentication helpers with server cookie authentication. Authenticated pages must be dynamic/private so a refreshed session response is never cached and served to another user.

### 5.2 Implement account lifecycle

Implement and test register, email verification, sign in, sign out, password reset, profile creation, terms/privacy/educational-boundary version acceptance, language preference, and chat-retention default.

For account compromise or deletion, revoke sessions as part of the process. Create an audit event for security-sensitive actions.

### 5.3 Create migrations in this order

Create migration files with the current Supabase CLI migration command. Apply and test each in development before committing.

| Group | Objects |
| --- | --- |
| Platform | Required extensions, private schemas, timestamp helper, restricted grants. |
| Identity | `profiles`, `user_roles`, `user_preferences`, `terms_acceptances`. |
| Generic catalog | `education_stages`, `institutions`, `programs`, `academic_levels`, `terms`, `curriculum_editions`, `cohorts`, `curriculum_units`. |
| Access/release | `cohort_memberships`, `cohort_releases`, `batch_leader_assignments`, `collection_campaigns`, `uploader_approvals`. |
| Intake/content | `source_submissions`, `source_assets`, `source_versions`, `processed_documents`, `source_locators`, `source_segments`, `source_permissions`, `source_conflicts`. |
| Jobs/storage lifecycle | Ingestion requests, jobs, attempts, raw object lifecycle, deletion events, idempotency records. |
| Embeddings | Embedding spaces and versioned segment embeddings. |
| Tutor | Sessions, messages, citations, external search, feedback. |
| Study | Artifacts, cards, questions, options, quiz sessions/answers. |
| Finance | Accounts, ledger, reservations, allowances, products, orders/evidence. |
| Quality/Ops | Evaluation sets/cases/runs, usage/audit events, providers, feature flags. |

### 5.4 Implement scalable catalog, terminology, and role rules

Use stable UUIDs, timestamps, foreign keys, check/unique constraints, and archive fields. Implement this path:

1. `education_stages`: `UNIVERSITY`, later `HIGH_SCHOOL`.
2. `institutions`: Zagazig University or a future school/national curriculum authority; belongs to a stage.
3. `programs`: Human Medicine, Veterinary Medicine, Pharmacy, Engineering, or a future high-school Track; belongs to an institution and carries UI labels.
4. `academic_levels`: 3rd Year or another ordered level; belongs to a program.
5. `terms`: First/Second Semester or a configurable term; belongs to a level.
6. `curriculum_editions`: the academic/curriculum version such as 2026-2027.
7. `cohorts`: binds institution, program, level, term, and edition/batch.
8. `curriculum_units`: belongs to a cohort and uses `unit_type = MODULE | SUBJECT | COURSE | TOPIC`, ordered title, slug, publication state, and optional parent unit.

Store program-level singular/plural labels such as `Module/Modules` or `Subject/Subjects`. Shared UI reads these values; it must not branch on the text `Human Medicine`.

Use trusted role data, not user-editable metadata. Required roles: Student, Admin, Batch Leader, approved uploader where separate, and worker/service identity. Cohort membership is the student access grant; Batch Leader assignment is campaign-scoped submission permission.

### 5.5 Implement derived availability

Do not maintain a manually edited `is_available` flag on multiple rows. Compute student visibility from all of these conditions:

- cohort membership is active;
- cohort release is `UNLOCKED` and within optional availability dates;
- curriculum unit publication state is `PUBLISHED`;
- at least one linked processed source version is `READY` and `PUBLISHED`;
- rights/access rule allows this cohort;
- source/curriculum edition is current for the selected cohort.

Expose this through a security-invoker view or caller-scoped query/RPC that preserves RLS. Admin preview uses an admin-only path and clearly identifies draft/hidden units.

### 5.6 Implement RLS/grants table by table

For every exposed table:

1. Enable RLS.
2. Decide whether browser access is necessary; if not, grant nothing.
3. Use `TO authenticated` plus ownership/enrollment predicates, not `TO authenticated` alone.
4. For updates, use both `USING` and `WITH CHECK` conditions.
5. Test allowed and denied queries.

Use private/unexposed schemas for worker-only data/functions. If a `SECURITY DEFINER` function is unavoidable, place it outside an exposed schema, set a safe search path, authorise the caller inside the function, revoke default `PUBLIC` execute, grant only the necessary role, and add a test proving unauthorised callers cannot run it.

Do not grant browser users bulk access to source segments or embeddings. Retrieval must respect cohort membership, cohort release, unit publication, processed-source readiness, and rights.

### 5.7 Required authorization and availability tests

Create fixtures for Student A, Student B, Admin Ahmed, Admin Ziad, Batch Leader A, and Batch Leader B. Prove:

- Student A reads only their profile, memberships, chats/attempts/orders, and curriculum units satisfying the full availability rule.
- A ready source remains hidden while its unit is draft or cohort locked.
- A published unit remains hidden when no processed source is ready.
- Locking a cohort removes it from new student reads without deleting audit/history.
- Batch Leader A submits and views status only inside assigned Campaign A; cannot access Campaign B, publish/unlock, view students/chats, change providers, or act as admin.
- Student A cannot access Student B, another cohort/program, roles, configurations, versions, ledger mutations, or admin functions through UI, direct query, guessed UUID, or RPC.

### 5.8 Exit evidence

- Migrations through access apply from an empty development database.
- RLS/grant test suite passes.
- Session refresh, expiry, sign out, and protected-page access work correctly.
- Dynamic Module/Subject terminology renders from program configuration.
- Availability tests cover every combination of source ready/not-ready, unit published/draft, and cohort unlocked/locked.
- No cross-student, cross-cohort, cross-program, or campaign record is retrievable by direct client requests.

## 6. Work package 3 — Cohort intake, source optimization, and verified deletion

### 6.1 Build the versioned content model

Implement these records and constraints:

| Record | Required information |
| --- | --- |
| Collection campaign | Cohort, requested unit/material checklist, assigned Batch Leader, invitation/expiry, status, admin owner. |
| Source submission | Campaign, curriculum unit, submitter, declared type/title/author, rights reference, received status. |
| Source asset | Submission, temporary raw object reference, SHA-256, MIME type, size/duration, storage provider, raw lifecycle/deletion deadline. |
| Source version | Immutable version number, asset link, cohort/unit, curriculum edition, source type, status, lineage, publication/deactivation data. |
| Processed document | Durable Markdown/structured-text object reference, locator-sidecar reference, compression, checksum, byte size, conversion version. |
| Source locator | Version, original page number or audio start/end, processed text offsets/section ID, extraction confidence. |
| Source segment | Version, curriculum unit, locator range, heading path, normalised text, permitted excerpt, token count, segment hash. |
| Permission | Rights record and access/display rule. |
| Conflict | Competing evidence, topic, status, resolution/reason, audit fields. |
| `raw_deletion_events` | Asset, requested/completed time, storage API result, verification result, actor/job, error/retry. Append-only. |

Published processed versions are immutable except for controlled status/deactivation changes. Every searchable segment belongs to one source version, cohort, and curriculum unit. Duplicate raw hashes must be rejected or deliberately linked. After raw deletion, keep checksum, file metadata, conversion evidence, processed text, locators, rights, and deletion audit—never a stale storage URL that pretends the original still exists.

### 6.2 Build durable job records

Create `ingestion_requests`, `processing_jobs`, `job_attempts`, and idempotency records. Each job stage has its own durable state, attempt count, start/end time, error category, retry time, provider request ID, and cost.

Use the state flow: `RECEIVED -> VALIDATING -> RAW_STORED_TEMPORARILY -> EXTRACTING -> OCR or TRANSCRIBING -> NORMALIZING -> OPTIMIZING -> CONVERSION_QUALITY_CHECK -> RAW_READY_TO_DELETE -> RAW_DELETING -> RAW_DELETED -> CHUNKING -> EMBEDDING -> FINAL_QUALITY_CHECK -> READY -> PUBLISHED | REVIEW_REQUIRED | FAILED`.

Retries must not duplicate assets, processed documents, locators, segments, embeddings, deletion events, or provider charges. Never rely only on n8n execution history as job history. A deletion failure is a retryable operational state, not a reason to report the source as fully optimized.

### 6.3 Build one local worker before automation

Create a local command-line worker under `workers/ingestion` that takes one job ID and performs: campaign/scope validation, rights/hash/malware check, temporary raw storage, file-type routing, extraction/transcription, normalization, optimized-output writing, conversion validation, raw deletion and verification, chunking, embedding, final quality checks, and durable status/result writes.

Test it on the first ten representative Human Medicine files. Do not automate Drive/Telegram until the worker can be rerun safely.

### 6.4 PDF/book conversion and acceptance checks

Convert each PDF/book to normalized Markdown (or an equivalent lightweight structured-text format) plus a JSON locator sidecar. Compress durable outputs at rest when supported. Record page count, extracted page count, low-text pages, OCR use, original page number, headings, tables/formulas, diagram captions/descriptions, repeated headers/footers, unreadable scans, missing pages, permitted excerpts, checksums, and page-to-text/segment mapping.

Text-only conversion must not silently destroy academically important tables, equations, charts, or diagrams. Route such pages to structured extraction/description or `REVIEW_REQUIRED`. If meaning cannot be preserved, keep the raw object temporarily and block deletion/publication until an admin decides to reject the source or approve an exception.

The ten-file test set must include native text, scanned/OCR, diagram-heavy, and table-heavy examples.

### 6.5 Full-audio transcription and acceptance checks

For every recording, transcribe the full duration. Create durable Markdown for reading plus structured JSON/JSONL for timestamps, speakers/confidence, and exact locator mapping. Record original/processed duration, language mix, speaker metadata where available, and a curriculum vocabulary list. Sample clear/noisy/English/Arabic/mixed/student-question segments against a manually corrected reference. Critical terminology errors or uncovered duration enter review and block deletion.

### 6.6 Raw-file deletion gate

The intent is no permanent raw-file retention by default. Deletion occurs automatically as soon as all applicable checks pass:

1. processed object exists and can be read back;
2. processed checksum matches the recorded checksum;
3. PDF page coverage or audio duration coverage is complete/accepted;
4. page/timestamp locators resolve correctly;
5. required terminology/table/diagram samples pass;
6. rights/deletion policy permits deletion and no legal/admin hold exists;
7. processed version is committed durably;
8. the deletion job calls the storage provider API and verifies the raw object no longer exists;
9. a deletion audit event is appended.

Do not delete by removing only a database/storage metadata row. Use the storage provider API so the underlying object is deleted, then verify it. For a temporary Google Drive object, delete/trash using its API and verify according to the selected retention policy. For Supabase Storage, use the Storage API rather than SQL metadata deletion.

Configure a short operational deadline (for example, immediately after validation with a maximum temporary window) rather than deleting before conversion is verified. An admin can place a documented temporary hold only for failed conversion, rights dispute, or required quality review.

### 6.7 Implement chunking and embedding rules

Start around 350-700 tokens with 60-100-token overlap, then tune only through evaluation. Preserve heading path and exact page/timestamp range. Do not separate definitions, tables, algorithms, differential lists, or MCQs into unrelated chunks. Store segment hashes and source-version IDs.

Benchmark embedding candidates on the frozen gold retrieval set before selecting a provider. Store provider, model, version, dimension, distance metric, and activation state in `embedding_spaces`. The database vector dimension must exactly match the selected model. An incompatible model/dimension requires a new embedding space and complete re-embedding; never mix vector spaces.

### 6.8 Produce quality and storage reports

Generate a machine-readable and admin-readable report per source version: conversion coverage, processed/raw byte sizes and reduction ratio, locator/checksum validation, low-confidence locators, empty/duplicate segments, segment-size distribution, embedding completion, citation-map gaps, prompt-like source content, duplication warning, raw lifecycle/deletion result, status, and recommended action.

Never auto-publish merely because processing succeeded. Mark the source `READY` after technical checks and verified raw deletion. Student visibility still requires an admin-published curriculum unit and an unlocked cohort.

### 6.9 Exit evidence

- Ten Human Medicine representative files can process repeatedly without duplicate output/cost/deletion events.
- A quality report exists for every processed version.
- Source segment IDs resolve through durable processed text to the original page/timestamp locator after raw deletion.
- Every successfully converted raw object is absent from temporary storage and has a verified deletion event.
- Failed conversion never triggers premature deletion and remains blocked/reviewable.
- Failure states identify stage, locator, raw lifecycle, error type, retry eligibility, and next action.

## 7. Work package 4 — Retrieval evaluation before chat

### 7.1 Build one authorised retrieval interface

The retrieval layer receives server-derived user identity, active cohort, validated curriculum-unit IDs, original query, and retrieval-config version. It returns segment/source version IDs, source type, durable processed-text locators, permitted excerpts, ranking signals, and conflict flag—never a deleted/nonexistent raw-file URL.

Use a caller-scoped database client/RPC that respects membership, cohort release, unit publication, processed-source readiness, rights, and RLS. Never pass browser-selected cohort/unit IDs to an unrestricted service-role query without validating the full availability rule.

### 7.2 Implement hybrid retrieval sequence

1. Detect language and preserve the student wording.
2. Produce a retrieval-only normalised form with English medical/veterinary terms when useful.
3. Run full-text/keyword and vector searches concurrently.
4. Filter both searches by active cohort, selected curriculum units, curriculum edition, ready/published processed versions, and permissions.
5. Deduplicate results by segment/version.
6. Rerank using semantic score, direct terms, optional curriculum-unit scope, source type, and edition.
7. Attach conflict metadata and calculate transparent evidence-sufficiency features.
8. Write a privacy-minimised retrieval log.

### 7.3 Build the retrieval runner

For every gold case, record top 1/3/5 segments, expected-evidence recall, out-of-cohort/unit leakage, active filters, latency, configuration version, and failure category. Failure categories are missing source, conversion, locator, chunking, embedding, availability filter, keyword, or reranking failure.

Run this frozen set after every change to source corpus, embedding, chunking, filters, full-text ranking, reranking, or source weights. Preserve old runs; do not overwrite them.

### 7.4 Exit evidence

Publish a Human Medicine retrieval report including dataset/cohort/processed-corpus/embedding/configuration versions, top-k recall, latency, leakage result, failure classification, and a proceed/fix decision. Zero cross-cohort/program/unit leakage is mandatory.

## 8. Work package 5 — Grounded tutor, citations, and credits

### 8.1 Define provider adapters

Create separate interfaces for answer generation, structured study generation, embeddings, transcription, and web search. Each call returns provider/model IDs, provider request ID where available, token/audio/search usage, latency, retries, provider cost if supplied, internally calculated cost, and normalised error type.

Keep provider/model selection in versioned configuration, not hardcoded across pages or prompts.

### 8.2 Execute chat requests in this exact order

1. Authenticate user server-side.
2. Validate JSON/schema.
3. Validate cohort membership/release and curriculum-unit filters against the derived availability query.
4. Apply request-size, rate-limit, and patient/real-treatment safety checks.
5. Reserve estimated allowance/credits with idempotency key.
6. Retrieve authorised evidence.
7. Decide evidence sufficient or insufficient.
8. Build compact evidence packet with stable citation IDs.
9. Generate a streamed answer.
10. Post-validate citations, scope, and policy result.
11. Capture actual usage or release/refund unused reservation.
12. Persist only according to chat retention preference.

Use a Node.js Route Handler for streaming chat. It needs server credentials, provider SDK support, and database access.

### 8.3 Version and enforce tutor policy

The tutor system policy must require course evidence only unless external search was explicitly enabled; only supplied stable citations; no invented pages/timestamps/URLs/quotes; explicit insufficiency; separate Course Material, External Information, Conflict, and Uncertainty sections where applicable; preserved English terminology; untrusted retrieved text treated as data; no patient-specific diagnosis/treatment; and short permitted excerpts.

Version prompts in source control. Record prompt version on every answer/artifact.

### 8.4 Implement citation post-validation

The model returns stable citation IDs using structured output/side channel, not invented prose citations. Server code resolves them to durable processed-text locators. Reject citations outside the evidence packet, another cohort/unit/version, or an invalid locator. Classify degraded answers and preserve sufficient diagnostics for reported answers without retaining no-save chats unnecessarily.

### 8.5 Implement transparent insufficiency handling

Use testable signals: number of non-duplicate results, heading/direct term match, score gap, coverage of multi-part question, source conflict, and missing expected topic. If evidence is insufficient and external search is off, say what course material supports, what is missing, and offer session-level external search. Do not fill the gap with hidden model knowledge.

### 8.6 Implement external search only behind a flag

Require session opt-in and cost disclosure. Remove identifiers/patient information, query an authoritative allowlist first, fetch only necessary passages, isolate prompt-like text, rank authority/freshness/relevance, display external content separately with URL/retrieval date, and log cost/freshness metadata. Keep disabled until evaluation passes.

### 8.7 Build chat/report/retention data

Create cohort- and curriculum-unit-linked chat sessions, messages, answer citations, external search events, and feedback reports. No-save sessions discard content after completion under the documented policy but retain minimal non-content operational data. Reported answers may retain the exchange, citations, source/model/prompt configuration, and consent for a defined review window.

### 8.8 Implement the credit ledger transaction

For every billable action: calculate conservative estimate; reserve units with request ID; lock account/allowance; verify availability; append `RESERVE`; call provider; append `CAPTURE` for actual cost; append `RELEASE`/`REFUND` for unused amount; fully release on failure; reconcile old reservations.

Ledger records are append-only and idempotent. They include user, action, units, cost metadata, request/reservation/order references, actor, timestamp, and correlation ID. No normal application role may update/delete ledger rows.

### 8.9 Exit evidence

- End-to-end cited chat works for Human Medicine.
- At least 95% citations resolve correctly in the current evaluation run.
- At least 90% material claims are supported; no critical unsupported clinical claim.
- Insufficient-evidence cases follow safe/helpful behavior at least 90% of the time.
- Failed/cancelled requests do not consume reserved balance.
- Student report links an answer to evidence/configuration without exposing unrelated chats.

## 9. Work package 6 — Study tools and quiz engine

### 9.1 Shared artifact contract

Every generated artifact stores type, config, requester/scope, cohort/curriculum units, immutable processed source versions, retrieval config, model/prompt version, generation parameters, validation status, usage event, and invalidation status. Reuse only exact source-version/configuration matches.

### 9.2 Build summaries and flashcards

Summaries require selected Modules/Subjects (and optional child lessons/topics), depth, and language. They include learning objectives, structured explanation, high-yield points, labelled professor hints, conflicts, citations, and missing areas.

Every flashcard has front, back, optional explanation, topic/tags, difficulty, citation, source versions, and validation. Reject unsupported answers, duplicate fronts, ambiguous pronouns, and cards that are not independently understandable.

### 9.3 Build structured MCQ validation

Require origin label, stem, four/five unique options, exactly one correct option for single-best-answer mode, per-option rationale, difficulty/reason, controlled topic IDs, citations/source versions, and validation record.

Reject unsupported correct answers, duplicate text, multiple plausible correct choices, contradictory rationales, missing citations, cross-cohort/unit taxonomy, near-duplicates, and original exam material lacking permission metadata.

### 9.4 Build the quiz state machine

Student selects an available cohort and allowed Modules/Subjects/topics, count, difficulty, and timed/untimed mode. Server validates the full availability rule, chooses eligible validated questions, snapshots the quiz, records selections without trusting client correctness, submits/expires, calculates score, stores response times/topics/difficulty/version, and displays cited review with origin labels. Show weak-topic signals only after enough data; never claim mastery from one quiz.

### 9.5 Exit evidence

- Cited summary and flashcard set generated from a selected lecture.
- Generated MCQ batch passes validity target before student visibility.
- Timed and untimed quiz complete with correct stored score, explanations, origins, citations, and attempt records.
- Source deactivation marks dependent artifacts for review/invalidation.

## 10. Work package 7 — Operations, Drive, Telegram, automation, and payments

### 10.1 Build admin console in this order

1. Education stage, institution, program/faculty/track, academic level, term, curriculum edition, and cohort management.
2. Program terminology configuration and curriculum-unit tree/order management.
3. Batch Leader invitations, collection campaigns, requested-material checklist, and submission status.
4. Source rights, temporary raw lifecycle, processed version, and deletion audit view.
5. Job detail, retry, deletion retry, and error explanation.
6. Conversion quality and review-required queue.
7. Student-facing preview, per-unit publish/hide, and cohort unlock/lock controls.
8. Source conflict resolution.
9. Reported-answer/MCQ review.
10. Evaluation runs and reports.
11. Provider configuration and feature flags.
12. Usage/cost/storage-reduction dashboard.
13. Payment orders and ledger audit view.

Every admin mutation writes an audit event with actor, target, action, before/after summary, timestamp, and correlation ID.

### 10.2 Implement Drive process

Use controlled temporary intake folders per collection campaign. Require app/Telegram metadata; folder names are never the source of academic metadata. Record private Drive file IDs rather than public links. The database submission/ingestion request is the source of truth. UI must say `queued` because polling is not instant. After verified conversion, delete/trash the raw Drive object according to policy, verify the result, and retain only the optimized processed object plus provenance/deletion audit. Detect duplicate hashes before paid processing.

### 10.3 Implement Telegram safely

Use Telegram for Batch Leader invitation handoff, guided metadata, small-file references, receipts, and notifications. The webhook handler verifies secret, validates update schema, deduplicates update ID, verifies the sender's active campaign assignment, stores minimal IDs/metadata, avoids proxying large bytes through the app, directs oversized files to the campaign's temporary intake location, creates a durable submission/job/order link, and writes safe audit data.

Never request card numbers, PINs, OTPs, or banking credentials through Telegram.

### 10.4 Add n8n only after worker stability

Use n8n to poll/trigger, call tested workers by job ID, send Batch Leader/admin notifications, and schedule deletion retries/reconciliation/reports. Do not keep extraction/transcription/deletion/chunking/embedding business logic inside visual nodes. Version exported workflows under `n8n/workflows`, prune binary/execution data, and prove repeated triggers create no duplicate work, deletion, or cost.

### 10.5 Implement test/manual payment flow

Student selects credit product -> application creates unique expiring `PENDING` order -> student sends order reference/receipt -> Telegram links minimal evidence -> founder independently verifies -> founder approves/rejects through audited UI -> protected idempotent transaction appends `PAYMENT_CREDIT` -> user receives confirmation -> daily reconciliation compares orders, receipts, external statement, and ledger.

An admin must never directly type a new credit balance.

### 10.6 Write and exercise runbooks

Create and test runbooks for wrong/high-risk answer, provider failure, stuck credit reservation, bad source publication, failed raw deletion, premature raw deletion, incomplete transcript/Markdown after raw deletion, leaked secret, suspected data exposure, payment dispute, source takedown, database restore, and re-index. Each must state first action, evidence to preserve, owner, disable/rollback action, communications decision, and regression test.

### 10.7 Exit evidence

- Founder creates a campaign, assigns a Batch Leader, processes/reviews a source, previews a curriculum unit, and unlocks a cohort through UI without manual DB edits.
- Webhook replay does not duplicate job/payment/cost.
- Worker outage does not stop use of published material.
- Repeated payment approval creates exactly one credit event.
- Verified raw deletion removes the object while preserving processed content/citations; deletion failure is visible and retryable.
- Each incident runbook has a safe test record.

## 11. Work package 8 — Veterinary Medicine validation

Create a separate cohort, Batch Leader campaign, inventory, rights set, and gold dataset for Veterinary Medicine. Configure its standard display as `Subject/Subjects` unless its real curriculum requires otherwise. Repeat intake, conversion/deletion, retrieval, tutor, terminology/bilingual, MCQ, availability, and isolation tests. Remove any Human-Medicine-only labels, taxonomy assumptions, prompt content, or special code.

Exit evidence: Human and Veterinary students cannot retrieve one another's segments; Modules versus Subjects render from configuration; both cohorts pass the same conversion/deletion/citation/safety/MCQ gates; program-specific behavior is explicit data, not hidden custom logic.

## 12. Work package 9 — Private beta

### 12.1 Before inviting anyone

Prepare invitation/verification, onboarding explaining citations and limits, terms/privacy/boundary records, support contact, feedback categories, beta cap, feature flags, and rollback process.

### 12.2 Release cohorts

Release in this order: founder accounts; 5-10 close testers; 15-20 primary-track students; remaining verified students after stability. Pause growth on citation, leakage, security, or uncontrolled-cost incidents.

### 12.3 Weekly beta cadence

Every week run frozen retrieval/tutor/MCQ regressions; triage reports; review job/source failures; review latency/provider errors; review token/audio/search costs; review activation/D1/D7 return/meaningful sessions/quiz completion/payment intent; interview active and inactive students; record fix/disable/expand decisions.

### 12.4 Exit evidence

Proceed only when safety/access blockers are absent, quality gates hold, founders can operate the queues/support, p50/p95 costs are understood, repeat use exists, and commercial/rights/privacy/terms/refund decisions are ready.

## 13. Work package 10 — First paid pilot

Before a real payment, confirm commercial-host permission, backups/recovery, paid-provider/content rights, published terms/privacy/disclaimer/refund/expiry rules, payment/support owners, and feature kill switches.

Start with a small cohort. Test founder orders first, reconcile daily, measure actual margin including provider, hosting/storage, refund, and failed-call cost. Do not expand universities, platforms, private uploads, or automation until 5-10 real orders reconcile correctly and founders issue a written continue/revise/pause decision.

## 14. Mandatory verification checklist

### Database/security

- Full generic-catalog and operational migration chain applies to an empty development database.
- All exposed tables have intended grants and RLS.
- Derived availability returns rows only when membership + cohort unlock + unit publication + ready processed source + rights all pass.
- Storage policies are tested where storage is used.
- Views and privileged functions are protected.
- Database security advisors are run after material schema/RLS changes and findings are resolved/documented.

### Web application

- Authenticated responses are not cache-shared.
- Server-to-client props are serialisable plain data.
- Client Components are not asynchronous server-fetch components.
- Important routes have loading, expected-error, unauthorised/forbidden, and not-found states.
- All mutations validate server-side.
- Arabic/English mixed text preserves reading direction, terminology, and citations.

### AI/retrieval

- Adapters are replaceable and fixture-testable.
- Every generation carries sources, prompt/model/config versions, and cost.
- Evaluation runner is repeatable from a clean checkout.
- Citation display resolves server-side stable IDs.
- External sources are visibly separate from course material.
- Prompt-injection cases run for uploaded and web content.

### Credits/payments

- Every mutation is idempotent.
- Click/webhook/retry/timeout paths cannot double charge or double credit.
- Reserve/capture/release totals reconcile.
- Failure releases full reservation.
- Students see only their own ledger/orders/evidence references.

### Operations

- Retry/restart is safe.
- Source deactivation removes future retrieval but preserves audit history.
- Raw deletion is verified using the storage API/provider, not a database metadata delete.
- Processed Markdown/locator sidecar backups and restoration are tested because the raw source may no longer exist.
- Restore/re-index is rehearsed before paid use.
- Feature flags disable a model, source, external search, or study generation quickly.
- Alerts cover provider errors, cost cap, failed jobs, stuck reservations, webhook issues, and anomalous access.

## 15. First execution session

1. Complete cohort scoring, Batch Leader identification, source inventory, rights/deletion checks, tester recruitment, evaluation cases, and spend cap.
2. Choose the first Human Medicine cohort and configure its institution/program/level/term/edition and `Module/Modules` labels.
3. Create the private repository and scaffold the web application.
4. Create separate development and beta Supabase projects.
5. Add `.env.example`, CI, README, and branch protection.
6. Implement and test platform, identity, generic catalog, cohort release, campaign/Batch Leader, and access migrations with the complete RLS/availability matrix.
7. Build registration, verification, cascading filters, dynamic Module/Subject labels, admin preview/unlock, and cohort membership using mocked source readiness.
8. Create the first Batch Leader campaign and process the first ten representative Human Medicine source files through conversion, validation, verified raw deletion, and indexing.

**Hard stop:** Do not enable a real generation/transcription/search provider or delete a raw source until the spend cap, rights/deletion policy, test corpus, provider benchmark, conversion checks, and deletion verification path have been approved.
