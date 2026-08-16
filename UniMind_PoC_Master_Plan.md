# UniMind: Master PoC Plan

**Working document for Ahmed, Ziad, and Codex**  
**Status:** Draft for discussion and execution  
**Last updated:** 16 August 2026

## 1. Purpose of this document

This is the working source of truth for the UniMind proof of concept (PoC). It supplements the original Word blueprint and turns it into an execution plan that we can update together.

The PoC is intentionally substantial. It must prove that UniMind is useful, trustworthy, operable, and commercially testable for real students. It is not only a chat demo and it is not a full university launch.

## 2. Product vision

UniMind is a bilingual academic tutor for Human Medicine and Veterinary Medicine students. It helps a student study their own course material through cited explanations, summaries, flashcards, quizzes, and exam-oriented practice.

The tutor supports English, Egyptian Arabic, and a natural mixed style. Medical and veterinary terminology remains in English when that is clearer or safer.

### Core promise to a student

When a student asks about an enrolled subject, UniMind should:

- answer from the approved course sources;
- show a page or timestamp citation for material claims;
- state clearly when evidence is insufficient;
- show source conflicts instead of silently selecting one answer;
- distinguish course material from optional external information;
- help the student revise using summaries, flashcards, and MCQs.

## 3. PoC definition

### 3.1 What “substantial PoC” means

The PoC will validate the complete learning loop, not just one technical component:

1. A student creates an account and enters an allowed subject.
2. Founders upload or receive real lecture material.
3. The system extracts, transcribes, indexes, and quality-checks that material.
4. The student asks a bilingual question and receives a cited answer.
5. The student generates study material and completes a quiz.
6. The system records quality feedback, usage, latency, and cost.
7. Founders can review content, failures, student reports, and payment/credit records.

### 3.2 Two-track pilot

The completed PoC includes two independent curriculum tracks:

| Track | Faculty | Build sequence | Why it matters |
| --- | --- | --- | --- |
| Track A | Human Medicine | Build and validate first | Gives Ahmed a focused path for early product, UX, and content decisions. |
| Track B | Veterinary Medicine | Add before PoC completion | Proves that the catalog, retrieval, language behavior, and admin tools are faculty-flexible. |

We will not develop both tracks at the same time in the first weeks. We will stabilize the pipeline and tutor experience on Track A, then bring Track B through the same quality gates.

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
- Institution, faculty, year, semester, subject, and lecture catalog.
- Subject enrollment and strict access control.
- English, Egyptian Arabic, and mixed-language tutoring.
- PDF, scanned-slide, and lecture-audio ingestion.
- OCR and transcription only where needed.
- Subject-filtered hybrid retrieval and citations.
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

1. **Subject isolation:** a student must never retrieve content from another subject or faculty without explicit access.
2. **Evidence before confidence:** citations and evidence sufficiency are part of the answer flow, not cosmetic UI.
3. **No invented citations:** a citation must resolve to a stored page, timestamp, or external source record.
4. **Visible uncertainty:** if the course material does not support an answer, UniMind explains the gap.
5. **Conflict transparency:** when approved sources disagree, display the conflict and its evidence.
6. **Educational safety:** UniMind supports exam preparation, not real-patient medical or veterinary decision-making.
7. **Privacy by default:** student chats are not available to founders by default; reported or consented cases are auditable exceptions.
8. **Immutable academic evidence:** source replacement creates a new version rather than overwriting historical citations.
9. **Ledger, not editable balance:** all credit movements are append-only, idempotent accounting entries.
10. **Measure before pricing:** no credit price is final until real p50/p95 action costs are measured.

## 6. Required user experience

### Student journey

1. Register, verify email, accept terms and the educational-use boundary.
2. Choose an accessible institution/faculty/year/semester/subject.
3. Open a subject-scoped study area.
4. Choose English, Egyptian Arabic, or mixed response style.
5. Ask a question and receive a streamed answer with citations.
6. See separate sections for course material, external information, conflicts, and uncertainty when relevant.
7. Generate a summary, flashcards, or an MCQ quiz for selected lectures.
8. Review every MCQ explanation and citation.
9. See progress by lecture/topic and report a poor answer or question.
10. View free allowance, credit usage, and payment-order status.

### Founder/admin journey

1. Create catalog metadata before content enters the system.
2. Upload through the approved Drive/Telegram process and assign a source to a curriculum path.
3. Follow each job through validation, extraction/transcription, normalization, chunking, embedding, quality check, and publication.
4. Review only failures, low-confidence results, conflicts, and reported answers.
5. Activate/deactivate source versions without destroying historical evidence.
6. Run evaluation sets before provider, prompt, or retrieval changes go live.
7. Monitor quality, latency, cost, student feedback, and operational failures.
8. Review manual payment evidence and approve/reject orders through an audited transaction.

## 7. Technical product architecture

### Application

- **Web app:** Next.js with TypeScript.
- **UI:** responsive web interface with proper right-to-left support for Arabic and left-to-right medical terminology.
- **Authentication and database:** Supabase Auth and PostgreSQL.
- **Authorization:** Row Level Security, server-side authorization, and protected database functions.
- **Deployment:** preview environment for development and separate beta-production environment.

### Tutor pipeline

1. Authenticate the student and validate subject enrollment.
2. Enforce rate limits and reserve an estimated allowance/credit amount.
3. Normalize the retrieval query while retaining the student's visible wording.
4. Run subject-filtered keyword/full-text and vector search in parallel.
5. Merge, deduplicate, rerank, and assess evidence sufficiency.
6. Build a compact evidence packet with stable citation IDs.
7. Generate a streamed answer under strict course-evidence rules.
8. Validate citation IDs, claim support, subject scope, and policy output.
9. Settle actual usage, release unused reservation, and store data according to retention choice.

### Content pipeline

1. Receive an upload request with metadata and an idempotency key.
2. Validate uploader authority, file type, size, permissions, and duplicate hash.
3. Extract native PDF text page by page.
4. OCR only low-text or image-based pages.
5. Transcribe audio with timestamps, confidence, and terminology support.
6. Normalize text while preserving page and timestamp provenance.
7. Chunk by headings and semantic units; never split a table, definition, list, or MCQ carelessly.
8. Create versioned embeddings in one defined embedding space.
9. Run quality checks for coverage, confidence, duplicates, chunk quality, and citation mapping.
10. Publish technically valid trusted content or send it to review.

## 8. Workstreams and deliverables

| Workstream | PoC deliverables |
| --- | --- |
| Product and UX | Student dashboard, subject selection, chat, study tools, quizzes, Arabic/English support, feedback flow. |
| Identity and access | Authentication, profiles, roles, enrollment, RLS tests, admin protection. |
| Content operations | Catalog, source versions, permissions, jobs, quality reports, review queue. |
| Retrieval and tutor | Hybrid search, citations, evidence sufficiency, conflict handling, bilingual behavior, external-search flag. |
| Study tools | Summaries, flashcards, original questions, generated MCQs, quiz sessions, progress signals. |
| Credits and payments | Allowance, ledger, reservations, usage events, test payment orders, Telegram receipt linking. |
| Automation | Drive inbox, Telegram webhook, local n8n orchestration, retries, duplicate protection. |
| Quality and safety | Gold datasets, regression runner, prompt-injection tests, safety boundaries, reporting workflow. |
| Operations | CI, migrations, monitoring, incident runbooks, backups/restore rehearsal before paid operation. |

## 9. Delivery roadmap

### Phase 0 — Confirm the pilot and remove blockers

**Estimated effort:** 1 week

Deliverables:

- Select the Human Medicine and Veterinary Medicine pilot subjects.
- Define the exact lecture blocks and source inventory.
- Record content permissions, provider-processing permissions, and commercial-use permissions.
- Recruit at least 10 committed testers before heavy build work; target 30-60 eventual active beta students.
- Approve a maximum test spend and confirm a viable API billing path.
- Create the tutor and MCQ evaluation-set template.
- Record every unresolved decision in the decision log below.

Exit gate: both tracks have a viable content path, permissions path, reviewer, tester pool, and cost cap.

### Phase 1 — Engineering foundation

**Estimated effort:** 2 weeks

Deliverables:

- Repository, TypeScript app, linting, type checks, tests, CI, and environment templates.
- Supabase development and beta environments with versioned migrations.
- Email verification, roles, profiles, catalog, enrollment, and RLS tests.
- Responsive bilingual shell, retention preference, account settings, and admin shell.
- Mocked AI responses for UI and database work without avoidable provider spend.

Exit gate: a verified student can access only their permitted subject data and cannot access administration or another student's data.

### Phase 2 — Manual ingestion and retrieval backbone

**Estimated effort:** 3 weeks

Deliverables:

- Source metadata, rights, versioning, private archival references, and ingestion-job records.
- PDF extraction, OCR routing, audio transcription, normalization, chunking, and embeddings.
- Technical quality report, duplicate detection, retry policy, and review queue.
- Subject-filtered hybrid search, stable citation IDs, and retrieval evaluation runner.
- Ingest the Human Medicine pilot corpus and correct source-processing defects.

Exit gate: one complete Human Medicine block is published, retrieval has zero cross-subject leakage in tests, and cited sources resolve correctly.

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

Exit gate: a student can go from lecture selection to cited chat, study artifact, quiz completion, and review in one session.

### Phase 5 — Operations, Drive, Telegram, and automation

**Estimated effort:** 2-3 weeks

Deliverables:

- Drive inbox conventions and archival-source references.
- Telegram webhook for metadata and payment evidence; enforce the small-file limit and direct large files to Drive.
- Local n8n orchestration calling tested worker code rather than containing untested logic in visual nodes.
- Idempotent retries, duplicate protection, error notification, admin job dashboard, and reservation reconciliation.
- Test/manual payment-order flow with audited approval/rejection.

Exit gate: a trusted upload can be processed without manual database work, and founders can resolve job, credit, or payment exceptions through the admin interface.

### Phase 6 — Veterinary Medicine track validation

**Estimated effort:** 2 weeks

Deliverables:

- Ingest the Veterinary Medicine pilot corpus.
- Build and run the Veterinary gold evaluation set.
- Validate terminology, bilingual behavior, citations, source isolation, and MCQ quality.
- Remove Human-Medicine-specific assumptions from the product and data model.

Exit gate: both tracks pass the same quality and access-control gates.

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
| Cross-subject leakage | 0 cases in evaluation | Retrieved source subject IDs and access tests. |
| Citation validity | At least 95% | Citation resolves to correct page/timestamp. |
| Claim support | At least 90%; no critical unsupported clinical claim | Founder/reviewer rubric against cited source. |
| Insufficient-evidence behavior | At least 90% correct behavior | Negative-answer test cases. |
| Bilingual usefulness | Median at least 4/5 | English, Arabic, and mixed-language tester rubric. |
| MCQ validity | At least 90% valid before student use | Correctness, uniqueness, rationale, citations, distractors. |
| Transcription | No critical terminology error in sampled accepted segments | Reference transcript and terminology-error count. |
| Latency | p50 under 5 seconds to first token; p95 under 12 seconds target | Server telemetry. |
| Cost | p95 action cost fits allowance and margin plan | Usage events and provider invoices. |

Any fabricated citation, cross-subject leakage, critical unsafe clinical claim, or unauthorized data exposure is a release blocker even if other averages pass.

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
| D-01 | First Human Medicine subject | Choose the highest content-readiness score | Ahmed | Open |
| D-02 | First Veterinary Medicine subject | Choose the highest content-readiness score | Ziad | Open |
| D-03 | Pilot universities | Start with the institutions whose content rights/testers are strongest | Ahmed + Ziad | Open |
| D-04 | Model, embedding, transcription providers | Select after the project-specific benchmark | Ahmed + Ziad | Open |
| D-05 | Maximum PoC spend | Set a hard total cap before live evaluation | Ahmed + Ziad | Open |
| D-06 | External web search in beta | Feature-flagged; enable only after safety and cost evaluation | Ahmed + Ziad | Proposed |
| D-07 | Real payment collection | Only after commercial-hosting and policy gates | Ahmed + Ziad | Proposed |
| D-08 | Chat retention default | Student-controlled, with minimal operational metadata for no-save sessions | Ahmed + Ziad | Proposed |

## 14. Immediate next actions

1. Choose the candidate Human Medicine and Veterinary Medicine subjects.
2. List all available PDFs, recordings, past exams, answer keys, and permission records.
3. Score each candidate with content completeness, reviewer familiarity, exam availability, audio/scan quality, tester availability, and demand.
4. Confirm written rights for storage, processing, excerpts/citations, past exams, and future commercial access.
5. Recruit at least 10 committed testers for the first track.
6. Define the maximum PoC spend and a working billing route.
7. Select 10 representative documents/pages and 60 minutes of mixed-quality audio for the first benchmark.
8. Start the first 100 Human Medicine gold tutor cases, including negative and conflict cases.
9. Create the repository and begin Phase 1 using mocked AI responses.
10. Benchmark generation, embedding, transcription, and search candidates before locking provider choices or credit prices.

## 15. How we will work from this document

- We will update this file when a decision, scope item, milestone, or quality gate changes.
- We will not mark a phase complete because the interface looks finished; the documented exit gate must have evidence.
- We will keep unresolved questions visible in the decision log.
- The original Word blueprint remains a detailed reference. This Markdown plan is the active execution document.
