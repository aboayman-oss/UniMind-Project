# UniMind: Master PoC Plan

**Working document for Ahmed, Ziad, and Codex**  
**Status:** Draft for discussion and execution  
**Last updated:** 16 August 2026

## 1. Purpose of this document

This is the working source of truth for the UniMind proof of concept (PoC). It supplements the original Word blueprint and turns it into an execution plan that we can update together.

The PoC is intentionally substantial. It must prove that UniMind is useful, trustworthy, operable, and commercially testable for real students. It is not only a chat demo and it is not a full university launch.

### 1.1 Change analysis from the previous plan

| Previous plan assumption | Updated direction |
| --- | --- |
| Platform hierarchy ended at university faculty/subject/lecture | Add an education stage and generic program/curriculum-unit model so new faculties and Thanaweya Amma do not require a redesign. |
| Students selected an enrolled subject | Students filter to a released cohort, then open an available typed curriculum unit shown as Module or Subject. |
| Trusted founders/uploaders supplied content | Admins create cohort collection campaigns and invite restricted Batch Leaders to submit the complete material set. |
| Technically clean trusted content could publish | Processing produces `READY`; Ahmed/Ziad separately publish units and unlock cohorts. |
| Original files could remain in private archival storage | Raw files are temporary by default; durable Markdown/structured transcripts, locator sidecars, checksums, and deletion events replace permanent raw storage. |
| Availability was mostly catalog/enrollment based | Availability is derived from membership + cohort unlock + unit publication + ready processed source + rights/edition. |
| Faculty terminology was implicit | Program configuration provides curriculum-unit type and singular/plural UI labels. |

## 2. Product vision

UniMind is a scalable educational platform whose first launch serves Human Medicine and Veterinary Medicine. The catalog, access model, content pipeline, and user interface must also support Pharmacy, Engineering, and other university faculties without a schema redesign. The longer-term catalog must be able to introduce a High School education stage, including Thanaweya Amma tracks and curricula, without pretending that a high-school track is a university faculty.

The current learning product is a bilingual academic tutor that turns cohort-specific study sources into cited explanations, summaries, flashcards, quizzes, and exam-oriented practice. It supports English, Egyptian Arabic, and a natural mixed style while preserving precise technical terminology.

### Expansion model

The durable hierarchy is:

`Education stage -> Institution/system -> Program -> Academic level -> Term -> Cohort/curriculum edition -> Curriculum unit`

- For university education, a program is normally presented as a Faculty.
- For future High School education, a program can be a Track/Stream rather than a faculty.
- A curriculum unit has a configurable type and display label. Human Medicine uses `MODULE`; most other faculties currently use `SUBJECT`.
- The user interface reads these labels from configuration. It must not hard-code `Subject` or `Module` in shared screens.

### Core promise to a student

When a student asks about an unlocked curriculum unit, UniMind should:

- answer from the approved course sources;
- show a page or timestamp citation for material claims;
- state clearly when evidence is insufficient;
- show source conflicts instead of silently selecting one answer;
- distinguish course material from optional external information;
- help the student revise using summaries, flashcards, and MCQs.

## 3. PoC definition

### 3.1 What “substantial PoC” means

The PoC will validate the complete learning loop, not just one technical component:

1. Admins create a target cohort and collection campaign for a specific institution/program/level/term.
2. A restricted Batch Leader submits the cohort's permitted books, PDFs, recordings, exams, and related study materials.
3. The system validates, extracts/transcribes, optimizes, indexes, and quality-checks those materials.
4. The student asks a bilingual question and receives a cited answer.
5. The student generates study material and completes a quiz.
6. The system records quality feedback, usage, latency, and cost.
7. Ahmed and Ziad decide exactly which processed curriculum units and cohorts are visible through the admin dashboard.

### 3.2 Two-cohort pilot

The completed PoC includes two independent curriculum tracks:

| Cohort | Program | Curriculum display | Build sequence | Why it matters |
| --- | --- | --- | --- | --- |
| Cohort A | Human Medicine | Modules | Build and validate first | Proves cohort intake, module display, source processing, and the complete learning loop. |
| Cohort B | Veterinary Medicine | Subjects unless its institution configures otherwise | Add before PoC completion | Proves that the catalog, availability, retrieval, and UI are program-configurable. |

We will not develop both cohorts at the same time in the first weeks. We will stabilize the pipeline and tutor experience on Cohort A, then bring Cohort B through the same quality gates.

### 3.3 Target pilot corpus

For each track, target:

- 8-12 lectures or modules.
- 15-25 PDFs, slide decks, or structured documents.
- 3-5 hours of representative lecture audio.
- At least one permitted past-exam collection or question bank where available.
- 100-150 tutor gold-evaluation cases.
- 30-50 MCQ-generation evaluation cases.
- English, Arabic, and mixed-language examples.
- Insufficient-evidence, source-conflict, and prompt-injection test cases.

Across the PoC, this is approximately 16-24 lectures, 30-50 source files, 6-10 audio hours, 200-300 tutor evaluation cases, and 60-100 MCQ evaluation cases.

### 3.4 Beta size

Target a controlled private beta of 30-60 active students. Do not define success from registrations alone; the important measure is whether students complete useful study sessions and come back.

## 4. Scope boundaries

### Included in the PoC

- Email/password accounts and verified email.
- Education-stage-ready catalog: institution/system, program/faculty, academic level, term, cohort/curriculum edition, and typed curriculum units.
- Configurable Module versus Subject terminology driven by program/curriculum data.
- Cohort enrollment, cohort unlock, unit publication, and strict access control.
- Batch Leader invitation, restricted collection campaign, and submission tracking.
- English, Egyptian Arabic, and mixed-language tutoring.
- Books, PDFs, scanned slides, and lecture-audio ingestion.
- OCR and transcription only where needed.
- Verified conversion to optimized structured text and automatic raw-file deletion after quality validation.
- Curriculum-unit/cohort-filtered hybrid retrieval and citations.
- Evidence sufficiency, conflicts, and student reporting.
- Summaries, flashcards, MCQs, quizzes, and basic weak-topic signals.
- Admin content operations, quality review, feedback review, and cost dashboard.
- Daily free allowance and an append-only credit ledger.
- Test/manual payment order workflow with Telegram used for receipts and communication.
- Google Drive inbox and local workflow automation for trusted content.

### Explicitly deferred

- Native Android or iOS applications.
- Full public launch across multiple universities.
- Student private uploads and NotebookLM-like personal workspaces.
- Patient-specific diagnosis or treatment advice.
- Fully autonomous publication of untrusted uploads.
- Automatic card/wallet settlement.
- Professor access to individual student chats.
- Building or hosting a frontier model.

## 5. Product rules that cannot be compromised

1. **Cohort and unit isolation:** a student must never retrieve content from another cohort, program, institution, or curriculum unit without explicit access.
2. **Evidence before confidence:** citations and evidence sufficiency are part of the answer flow, not cosmetic UI.
3. **No invented citations:** a citation must resolve to a stored page, timestamp, or external source record.
4. **Visible uncertainty:** if the course material does not support an answer, UniMind explains the gap.
5. **Conflict transparency:** when approved sources disagree, display the conflict and its evidence.
6. **Educational safety:** UniMind supports exam preparation, not real-patient medical or veterinary decision-making.
7. **Privacy by default:** student chats are not available to founders by default; reported or consented cases are auditable exceptions.
8. **Immutable processed evidence:** a source replacement creates a new processed version. Durable citations point to structured text plus preserved page/timestamp locators even after the temporary raw file is deleted.
9. **Ledger, not editable balance:** all credit movements are append-only, idempotent accounting entries.
10. **Measure before pricing:** no credit price is final until real p50/p95 action costs are measured.
11. **Admin-controlled availability:** processed content is not automatically student-visible. Availability requires a ready processed source, a published curriculum unit, and an unlocked cohort.
12. **Verified deletion, not premature deletion:** raw uploads are temporary and automatically deleted as soon as conversion, locator preservation, integrity checks, and required admin review succeed. Failed or unverified conversions are never treated as safe to delete.

## 6. Required user experience

### Student journey

1. Register, verify email, accept terms and the educational-use boundary.
2. Filter by institution, faculty/program, academic year/level, and term.
3. See only cohorts and curriculum units that are both source-ready and unlocked by an admin.
4. See `Modules` for configured Human Medicine curricula and `Subjects` for standard curricula.
5. Choose English, Egyptian Arabic, or mixed response style.
6. Ask a question and receive a streamed answer with citations.
7. See separate sections for course material, external information, conflicts, and uncertainty when relevant.
8. Generate a summary, flashcards, or an MCQ quiz for selected curriculum units/lessons.
9. Review every MCQ explanation and citation.
10. See progress by curriculum unit/topic and report a poor answer or question.
11. View free allowance, credit usage, and payment-order status.

### Founder/admin journey

1. Create the education stage, institution, program/faculty, level, term, cohort, and curriculum-unit metadata.
2. Open a collection campaign and invite a specific Batch Leader with limited submission permission.
3. Receive Drive/Telegram/object-storage submissions and map every source to its cohort and curriculum unit.
4. Follow raw files through validation, extraction/transcription, optimization, quality review, raw deletion, indexing, and readiness.
5. Preview the exact student-facing hierarchy and content before unlocking a cohort.
6. Publish/hide individual curriculum units and unlock/lock the whole cohort without database edits.
7. Review failures, low-confidence conversions, conflicts, reported answers, deletion failures, and storage usage.
8. Activate/deactivate processed source versions without breaking historical citations.
9. Run evaluation sets before provider, prompt, retrieval, or publication-rule changes go live.
10. Monitor quality, latency, cost, student feedback, and operational failures.
11. Review manual payment evidence and approve/reject orders through an audited transaction.

### Batch Leader journey

1. Receive an expiring invitation tied to one collection campaign and cohort.
2. View the requested material checklist and submission rules.
3. Submit permitted files/Drive references plus required source metadata.
4. Track received, processing, needs-information, accepted, rejected, and completed states.
5. Never receive admin privileges, student-chat access, provider controls, publication controls, or access to another cohort.

## 7. Technical product architecture

### Application

- **Web app:** Next.js with TypeScript.
- **UI:** responsive web interface with proper right-to-left support for Arabic and left-to-right medical terminology.
- **Authentication and database:** Supabase Auth and PostgreSQL.
- **Authorization:** Row Level Security, server-side authorization, and protected database functions.
- **Deployment:** preview environment for development and separate beta-production environment.
- **Heavy processing:** durable background worker/job system; large uploads and multi-hour transcription do not execute inside a short-lived web request.
- **Storage:** provider-agnostic object-storage adapter. Google Drive can be an intake source, but database metadata and job state remain authoritative.

### Catalog and availability architecture

- `education_stages` distinguishes `UNIVERSITY` from the future `HIGH_SCHOOL` stage.
- `institutions` belongs to an education stage.
- `programs` represents a university faculty or a high-school track and stores its UI terminology configuration.
- `academic_levels` represents 3rd Year and similar levels.
- `terms` represents First/Second Semester or another configured term system.
- `cohorts` binds institution, program, level, term, and curriculum edition/batch.
- `curriculum_units` belongs to a cohort and has `unit_type = MODULE | SUBJECT | COURSE | TOPIC` plus configurable singular/plural display labels.
- `cohort_memberships` authorizes students; `cohort_releases` stores admin lock/unlock state.
- Student-visible availability is derived, not manually duplicated: cohort released AND curriculum unit published AND at least one processed source version ready and published.

### Database schema delta

| Previous/current concept | Required schema adjustment |
| --- | --- |
| `faculties` | Replace/generalize with `programs`, including `program_type`, `default_unit_type`, `unit_label_singular`, and `unit_label_plural`. A university faculty is one program type; a future High School track is another. |
| `study_years` | Generalize to `academic_levels` with program, ordered position, display label, and optional stage-specific metadata. |
| `semesters` | Generalize to `terms`, retaining program/level scope and configurable display/order. |
| `subjects` + `lectures` | Replace with hierarchical `curriculum_units` using `unit_type`, optional `parent_unit_id`, cohort, title, order, and publication state. |
| `subject_enrollments` | Replace with `cohort_memberships`; unit availability is inherited from the cohort plus publication/readiness rules. |
| uploader approval only | Add `batch_leader_assignments`, `collection_campaigns`, and `source_submissions` with campaign-scoped permissions/status. |
| source asset private archive | Add temporary raw lifecycle fields: storage provider/key, hash, received time, `delete_after`, `raw_status`, hold reason, and last deletion error. |
| page/transcript rows tied to original | Add durable `processed_documents` and `source_locators` linking Markdown/JSON offsets to original page numbers/timestamps after raw deletion. |
| publication on source processing | Separate `source_versions.processing_status`, `curriculum_units.publication_status`, and `cohort_releases.release_status`. |
| no deletion ledger | Add append-only `raw_deletion_events` with request/result/verification/retry fields and an admin storage dashboard. |

Do not duplicate availability into a writable Boolean. Implement a security-invoker view or caller-scoped query that returns a unit only when the membership, release, publication, processed-source, rights, and edition predicates all pass.

### Tutor pipeline

1. Authenticate the student and validate cohort membership/release plus curriculum-unit availability.
2. Enforce rate limits and reserve an estimated allowance/credit amount.
3. Normalize the retrieval query while retaining the student's visible wording.
4. Run cohort- and curriculum-unit-filtered keyword/full-text and vector search in parallel.
5. Merge, deduplicate, rerank, and assess evidence sufficiency.
6. Build a compact evidence packet with stable citation IDs.
7. Generate a streamed answer under strict course-evidence rules.
8. Validate citation IDs, claim support, cohort/unit scope, and policy output.
9. Settle actual usage, release unused reservation, and store data according to retention choice.

### Content pipeline

1. Admin creates a collection campaign and the Batch Leader submits a raw file/reference with metadata and an idempotency key.
2. Validate campaign scope, uploader authority, rights, file type, size, malware risk, and duplicate hash.
3. Store the raw object in a private temporary location and set a deletion deadline/status.
4. For PDFs/books, extract native text page by page, OCR low-text pages, and create normalized Markdown plus a structured locator sidecar. Preserve essential tables, formulas, and diagram descriptions; do not discard meaning merely to save space.
5. For audio, transcribe the entire recording with timestamps, confidence, language mix, and terminology support; create compressed Markdown/JSON transcript output.
6. Validate conversion coverage, locators, checksums, critical terminology samples, and processed-object readability.
7. After required checks/admin review, delete the raw object through the storage provider API, verify absence, and append a deletion audit event. A failed deletion remains visible and retryable.
8. Chunk the durable processed text by headings and semantic units.
9. Create versioned embeddings in one defined embedding space.
10. Run final checks for coverage, duplicates, chunk quality, citation mapping, and raw-deletion status.
11. Mark the processed source `READY`; an admin still controls unit publication and cohort unlock.

## 8. Workstreams and deliverables

| Workstream | PoC deliverables |
| --- | --- |
| Product and UX | Stage-aware filters, dynamic Module/Subject labels, cohort dashboard, chat, study tools, quizzes, Arabic/English support, feedback flow. |
| Identity and access | Authentication, profiles, admin/Batch Leader/student roles, cohort membership, RLS tests, admin protection. |
| Catalog and release control | Education stages, institutions, programs, levels, terms, cohorts, typed curriculum units, publication and unlock controls. |
| Content operations | Collection campaigns, submissions, optimized processed versions, permissions, jobs, deletion audit, quality reports, review queue. |
| Retrieval and tutor | Hybrid search, citations, evidence sufficiency, conflict handling, bilingual behavior, external-search flag. |
| Study tools | Summaries, flashcards, original questions, generated MCQs, quiz sessions, progress signals. |
| Credits and payments | Allowance, ledger, reservations, usage events, test payment orders, Telegram receipt linking. |
| Automation | Drive inbox, Telegram webhook, local n8n orchestration, retries, duplicate protection. |
| Quality and safety | Gold datasets, regression runner, prompt-injection tests, safety boundaries, reporting workflow. |
| Operations | CI, migrations, monitoring, incident runbooks, backups/restore rehearsal before paid operation. |

## 9. Delivery roadmap

### Phase 0 — Confirm pilot cohorts, leaders, and retention policy

**Estimated effort:** 1 week

Deliverables:

- Select the Human Medicine and Veterinary Medicine pilot cohorts and their institution/program/level/term paths.
- Configure whether each pilot displays Modules or Subjects and define its exact curriculum units.
- Identify/contact the target Batch Leaders and define collection campaigns.
- Record content permissions, provider-processing permissions, and commercial-use permissions.
- Approve the raw-file policy: temporary storage, validation requirements, deletion deadline, exceptions/legal hold, and deletion audit.
- Recruit at least 10 committed testers before heavy build work; target 30-60 eventual active beta students.
- Approve a maximum test spend and confirm a viable API billing path.
- Create the tutor and MCQ evaluation-set template.
- Record every unresolved decision in the decision log below.

Exit gate: both cohorts have a viable Batch Leader/source path, configured curriculum structure, permissions, reviewer, tester pool, deletion policy, and cost cap.

### Phase 1 — Engineering foundation

**Estimated effort:** 2 weeks

Deliverables:

- Repository, TypeScript app, linting, type checks, tests, CI, and environment templates.
- Supabase development and beta environments with versioned migrations.
- Email verification, profiles, Admin/Batch Leader/Student roles, generic catalog, cohort membership/release, and RLS tests.
- Responsive bilingual shell, stage-aware filters, dynamic Module/Subject labels, retention preference, account settings, and admin shell.
- Admin preview, per-unit publication, and cohort lock/unlock controls using mocked processed-source readiness.
- Mocked AI responses for UI and database work without avoidable provider spend.

Exit gate: a verified student sees only released cohorts/units available to their membership; a Batch Leader can submit only to an assigned campaign and cannot publish or administer.

### Phase 2 — Intake, optimization, deletion, and retrieval backbone

**Estimated effort:** 3 weeks

Deliverables:

- Collection campaigns, Batch Leader submissions, source metadata/rights, temporary raw-object lifecycle, processed versions, and durable job records.
- PDF/book to Markdown plus locator sidecar, OCR routing, full audio transcription, normalization, compressed processed storage, chunking, and embeddings.
- Conversion quality report, duplicate detection, raw-deletion queue/audit, retry policy, and review queue.
- Cohort/curriculum-unit-filtered hybrid search, stable citations, and retrieval evaluation runner.
- Ingest the Human Medicine pilot corpus and correct source-processing defects.

Exit gate: one Human Medicine cohort has ready optimized sources; verified raw files are deleted and audited; admin-published Modules are visible only after cohort unlock; retrieval has zero cross-cohort/unit leakage and citations resolve to durable locators.

### Phase 3 — Grounded tutor and credit core

**Estimated effort:** 3 weeks

Deliverables:

- Streaming bilingual tutor.
- Evidence sufficiency and cited-answer contract.
- Source-conflict behavior and session-level external-search preference behind a feature flag.
- Daily allowance, credit ledger, reservation, settlement, refund, rate limits, and usage events.
- Chat-retention choice, deletion flow, reporting flow, and consent-limited admin diagnostics.
- Continuous evaluation after each retrieval, prompt, or provider change.

Exit gate: the Human Medicine gold set meets the initial quality gates and failed requests refund correctly.

### Phase 4 — Study tools and MCQ engine

**Estimated effort:** 2 weeks

Deliverables:

- Source-version-bound summaries and flashcards.
- Original-exam import with origin/permission labels.
- Structured MCQ generation with validation and option-level explanations.
- Quiz setup, timed/untimed attempts, saved scores, review, and basic weak-topic signals.
- Reported/failed MCQ review and invalidation after source updates.

Exit gate: a student can go from Module/Subject selection to cited chat, study artifact, quiz completion, and review in one session.

### Phase 5 — Operations, Drive, Telegram, and automation

**Estimated effort:** 2-3 weeks

Deliverables:

- Drive/object-storage intake conventions, temporary raw-object lifecycle, deletion verification, and processed-source storage monitoring.
- Telegram webhook for metadata and payment evidence; enforce the small-file limit and direct large files to Drive.
- Local n8n orchestration calling tested worker code rather than containing untested logic in visual nodes.
- Idempotent retries, duplicate protection, error notification, admin job dashboard, and reservation reconciliation.
- Test/manual payment-order flow with audited approval/rejection.

Exit gate: an assigned Batch Leader submission can be processed, optimized, verified, and raw-deleted without manual database work; founders can preview/publish/unlock and resolve processing, deletion, credit, or payment exceptions through the admin interface.

### Phase 6 — Veterinary Medicine track validation

**Estimated effort:** 2 weeks

Deliverables:

- Ingest the Veterinary Medicine pilot corpus.
- Build and run the Veterinary gold evaluation set.
- Validate terminology, bilingual behavior, citations, source isolation, and MCQ quality.
- Confirm Subject terminology and remove Human-Medicine-specific assumptions from the product/data model.

Exit gate: both cohorts pass the same quality, availability, conversion/deletion, and access-control gates.

### Phase 7 — Private beta and evidence review

**Estimated effort:** 3-4 weeks

Deliverables:

- Controlled onboarding for 30-60 active students.
- Weekly student interviews and feedback triage.
- Weekly regression evaluation and content correction cycle.
- Dashboard for activation, return rate, reports, latency, provider failures, and cost.
- Price and payment-intent experiments without charging students until commercial hosting and policy gates are satisfied.

Exit gate: the PoC has credible evidence of quality, repeat usage, operational feasibility, and willingness to pay.

### Phase 8 — First paid pilot (after PoC approval)

**Estimated effort:** 2-4 weeks

Deliverables:

- Commercial hosting and production backup decision.
- Terms, privacy notice, content policy, refund rules, and educational disclaimer.
- Real credit products and manual payment verification.
- Small paid cohort, reconciliation process, support runbook, and measured gross-margin report.

Exit gate: 5-10 real ledger-backed paid orders complete correctly and the founders can support disputes/refunds.

## 10. Quality gates

These are initial targets. We will record the actual baseline and tighten targets before commercial growth.

| Metric | Initial PoC gate | Evidence |
| --- | --- | --- |
| Cross-cohort/unit leakage | 0 cases in evaluation | Retrieved cohort/unit IDs and access tests. |
| Conversion completeness | 100% required pages/audio duration accounted for or explicitly rejected | Processing quality report and locator coverage. |
| Raw deletion correctness | 100% verified raw objects deleted after approved conversion; 0 premature deletions | Storage check, deletion event, and recovery test. |
| Availability correctness | 0 content visible unless source ready + unit published + cohort unlocked | Derived-availability and RLS/E2E tests. |
| Citation validity | At least 95% | Citation resolves to correct page/timestamp. |
| Claim support | At least 90%; no critical unsupported clinical claim | Founder/reviewer rubric against cited source. |
| Insufficient-evidence behavior | At least 90% correct behavior | Negative-answer test cases. |
| Bilingual usefulness | Median at least 4/5 | English, Arabic, and mixed-language tester rubric. |
| MCQ validity | At least 90% valid before student use | Correctness, uniqueness, rationale, citations, distractors. |
| Transcription | No critical terminology error in sampled accepted segments | Reference transcript and terminology-error count. |
| Latency | p50 under 5 seconds to first token; p95 under 12 seconds target | Server telemetry. |
| Cost | p95 action cost fits allowance and margin plan | Usage events and provider invoices. |

Any fabricated citation, cross-cohort/unit leakage, premature raw deletion, incorrect availability, critical unsafe claim, or unauthorized data exposure is a release blocker even if other averages pass.

## 11. Beta success signals

The beta is successful only if quality and student value are both present.

| Signal | Initial target |
| --- | --- |
| Active beta students | 30-60 verified students |
| Activation | At least 60% complete one useful chat or quiz |
| 7-day return | At least 25% as a provisional target |
| Repeated value | At least 20% complete 3+ meaningful study sessions in one week |
| Willingness to pay | At least 10% create an order or give an explicit interview commitment |
| Paid validation | 5-10 completed paid credit orders after commercial readiness |

## 12. Cost-control policy

- No real provider key is used until Ahmed and Ziad approve a maximum test spend.
- Use mocks for UI, database, and ordinary development work.
- Reserve real model calls for evaluation, content ingestion, and meaningful end-to-end tests.
- Set provider budgets/alerts and an application kill switch by provider/action.
- Limit source-batch size, output tokens, MCQ count, and external search in beta.
- Record model, tokens, audio minutes, search calls, latency, retries, and cost for every provider action.
- Do not set final credit prices until a 100-action benchmark establishes p50 and p95 costs.

## 13. Decision log

Use this table for decisions that influence scope, safety, cost, or schedule. We should update it before beginning a related phase.

| ID | Decision | Proposed default | Owner | Status |
| --- | --- | --- | --- | --- |
| D-01 | First Human Medicine cohort/modules | Choose the highest cohort/content-readiness score | Ahmed | Open |
| D-02 | First Veterinary Medicine cohort/subjects | Choose the highest cohort/content-readiness score | Ziad | Open |
| D-03 | Pilot universities | Start with the institutions whose content rights/testers are strongest | Ahmed + Ziad | Open |
| D-04 | Model, embedding, transcription providers | Select after the project-specific benchmark | Ahmed + Ziad | Open |
| D-05 | Maximum PoC spend | Set a hard total cap before live evaluation | Ahmed + Ziad | Open |
| D-06 | External web search in beta | Feature-flagged; enable only after safety and cost evaluation | Ahmed + Ziad | Proposed |
| D-07 | Real payment collection | Only after commercial-hosting and policy gates | Ahmed + Ziad | Proposed |
| D-08 | Chat retention default | Student-controlled, with minimal operational metadata for no-save sessions | Ahmed + Ziad | Proposed |
| D-09 | Raw upload deletion | Delete automatically only after conversion/locator/checksum verification and required review; no permanent raw retention by default | Ahmed + Ziad | Proposed |
| D-10 | Processed source format | Normalized Markdown plus structured JSON locator sidecar, compressed at rest | Ahmed + Ziad | Proposed |
| D-11 | Batch Leader authority | Campaign-scoped submission/status only; no publication/admin/student-data access | Ahmed + Ziad | Proposed |
| D-12 | Catalog abstraction | Education stage -> institution -> program -> level -> term -> cohort -> typed curriculum unit | Ahmed + Ziad | Proposed |

## 14. Immediate next actions

1. Choose candidate Human Medicine and Veterinary Medicine cohorts, including institution, program, academic level, term, and curriculum edition.
2. Define each program's curriculum display configuration (`MODULE` or `SUBJECT`).
3. Identify/contact candidate Batch Leaders and create the material-request checklist.
4. List all available PDFs, books, recordings, past exams, answer keys, and permission records.
5. Score each cohort with content completeness, reviewer familiarity, exam availability, audio/scan quality, tester availability, and demand.
6. Confirm written rights for temporary raw storage, provider processing, processed-text retention, citations, exams, raw deletion, and future commercial access.
7. Approve the verified raw-file deletion policy and processed-source formats.
8. Recruit at least 10 committed testers for the first cohort.
9. Define the maximum PoC spend and a working billing route.
10. Select 10 representative documents/pages and 60 minutes of mixed-quality audio for the conversion benchmark.
11. Start the first 100 Human Medicine gold tutor cases, including negative and conflict cases.
12. Create the repository and begin Phase 1 using mocked AI responses.
13. Benchmark generation, embedding, transcription, and search candidates before locking provider choices or credit prices.

## 15. How we will work from this document

- We will update this file when a decision, scope item, milestone, or quality gate changes.
- We will not mark a phase complete because the interface looks finished; the documented exit gate must have evidence.
- We will keep unresolved questions visible in the decision log.
- The original Word blueprint remains a detailed reference. This Markdown plan is the active execution document.
