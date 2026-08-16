# UniMind: الماستر بلان بالمصري

**نسخة مخصصة للقراية بصوت عالي والمراجعة بالتسجيل الصوتي**  
**لأحمد وزياد وCodex**  
**الحالة:** مسودة للنقاش والتعديل  
**آخر تحديث:** 16 أغسطس 2026

## إزاي تستخدم النسخة دي في التسجيل

النسخة دي مكتوبة بالمصري وبطريقة أسهل في القراية من الجداول التقنية. المصطلحات المهمة زي `Cohort` و`Module` و`Subject` و`Batch Leader` و`RAG` و`Markdown` متسابّة بالإنجليزي عشان لما التسجيل يتحول لـ text المعنى مايتغيرش.

أثناء التسجيل، لما تحب تعدل حاجة، الأفضل تقول بالشكل ده:

- "تعديل على القسم رقم كذا" وبعدها تقول التعديل.
- أو "احذف النقطة دي" وتقرأ أول جزء منها.
- أو "ضيف بعد النقطة دي" وتقول الإضافة.
- لو القسم مناسب زي ما هو، ممكن تقول "القسم ده معتمد".

## 1. هدف الوثيقة دي

الوثيقة دي هي المصدر الأساسي اللي هنشتغل منه في الـ Proof of Concept، أو الـ `PoC`، بتاع UniMind. هي بتحول الفكرة العامة لخطة منتج وتنفيذ نقدر نراجعها ونعدّلها مع بعض.

الـ PoC هنا مش مجرد Chat Demo صغير. المطلوب إنه يثبت إن UniMind مفيد للطلبة، موثوق، قابل للإدارة، قابل للتوسع، وممكن نختبر عليه نموذج تجاري حقيقي بعد ما نعدي اختبارات الجودة والأمان.

### 1.1 إيه اللي اتغير عن الخطة القديمة

أول تغيير: الهيكل القديم كان بيقف عند جامعة، كلية، سنة، ترم، مادة، ومحاضرة. الهيكل الجديد لازم يبدأ من `Education Stage`، عشان نقدر نضيف الجامعة دلوقتي والثانوية العامة بعدين من غير ما نعيد تصميم قاعدة البيانات.

تاني تغيير: الطالب مش هيختار Subject وخلاص. الطالب هيختار المسار المتاح ليه من الجامعة أو النظام التعليمي، وبعدها البرنامج أو الكلية، وبعدها السنة، والترم، والـ Cohort، وبعدين يفتح Curriculum Unit متاحة، والـ Unit دي ممكن تظهر باسم Module أو Subject حسب نظام الكلية.

تالت تغيير: تجميع المحتوى هيبقى من خلال `Collection Campaign`. أحمد أو زياد هيحددوا Cohort معينة، ويتواصلوا مع Batch Leader مسؤول عنها، والـ Batch Leader يرفع المواد المطلوبة بصلاحيات محدودة.

رابع تغيير: نجاح معالجة الملفات تقنياً مش معناه إنها تظهر للطلبة تلقائي. المعالجة توصل المصدر لحالة `READY`، وبعد كده أحمد أو زياد ينشروا الـ Curriculum Units ويفتحوا الـ Cohort من الـ Admin Dashboard.

خامس تغيير: الملفات الأصلية الكبيرة مش هتتخزن بشكل دائم كقاعدة عامة. الصوت يتحول Transcript كامل، والـ PDF أو الكتاب يتحول لـ Markdown أو Structured Text خفيف. بعد ما نتأكد إن التحويل كامل وسليم وإن الـ citations محفوظة، الملف الأصلي يتحذف ويتسجل حدث الحذف.

سادس تغيير: ظهور المحتوى للطالب مش هيعتمد على زرار واحد اسمه available. المحتوى يظهر بس لو الطالب عضو في الـ Cohort، والـ Cohort مفتوحة، والـ Unit منشورة، وفي مصدر معالج جاهز، والصلاحيات والـ Curriculum Edition مناسبين.

سابع تغيير: كلمة Module أو Subject مش هتكون مكتوبة جوه الكود بشكل ثابت. كل Program أو كلية هيبقى ليها Configuration يحدد نوع الـ Curriculum Unit والاسم اللي يظهر في الواجهة.

## 2. رؤية المنتج

UniMind هيبقى Educational Platform قابلة للتوسع. أول نطاق فعلي هو Human Medicine وVeterinary Medicine. لكن تصميم الـ Catalog، والصلاحيات، ومعالجة المحتوى، والواجهة، لازم من البداية يسمح بإضافة Pharmacy وEngineering وأي كلية تانية من غير Schema Redesign.

على المدى البعيد، المنصة لازم تسمح بإضافة مرحلة High School، ومنها Thanaweya Amma بمساراتها ومناهجها، من غير ما نتعامل مع المسار الثانوي كأنه كلية جامعة.

المنتج التعليمي الحالي هو Tutor ثنائي اللغة. بياخد المصادر الخاصة بكل Cohort، ويحوّلها لإجابات عليها citations، وملخصات، وFlashcards، وMCQs، وQuizzes، وتدريب مناسب للامتحانات.

المنتج بيدعم English، وEgyptian Arabic، وMixed Style. المصطلحات الطبية والهندسية والعلمية الدقيقة تفضل بالإنجليزي لما يكون ده أوضح وأأمن.

### 2.1 شكل التوسع الأساسي

الترتيب الدائم للمنصة هو:

`Education Stage`، بعدين `Institution أو System`، بعدين `Program`، بعدين `Academic Level`، بعدين `Term`، بعدين `Cohort أو Curriculum Edition`، وبعدها `Curriculum Unit`.

في الجامعة، الـ Program غالباً هيظهر للطالب باسم Faculty.

في الثانوية العامة مستقبلاً، الـ Program ممكن يكون Track أو Stream، مش Faculty.

الـ Curriculum Unit نوعها قابل للتغيير. Human Medicine غالباً تستخدم `MODULE`. معظم الكليات التانية تستخدم `SUBJECT`. وممكن مستقبلاً نحتاج `COURSE` أو `TOPIC`.

الواجهة تقرأ الاسم من الـ Configuration. ممنوع نعتمد على شرط ثابت جوه الكود بيقول لو Human Medicine اكتب Module، أو نكتب Subject في كل الشاشات بشكل ثابت.

### 2.2 الوعد الأساسي للطالب

لما الطالب يسأل عن Curriculum Unit متاحة، UniMind لازم:

- يجاوب من المصادر المعتمدة للكورس.
- يعرض citation فيها رقم صفحة أو timestamp لأي معلومة مهمة.
- يقول بوضوح لما الأدلة مش كفاية.
- يعرض التعارض بين المصادر بدل ما يختار إجابة في السر.
- يفصل بين Course Material وأي External Information اختيارية.
- يساعد الطالب يراجع عن طريق Summaries وFlashcards وMCQs.

## 3. تعريف الـ PoC

### 3.1 معنى إن الـ PoC يكون كبير ومعتبر

الـ PoC لازم يختبر دورة التعلم كاملة، مش جزء تقني واحد.

الـ Admin ينشئ Target Cohort وCollection Campaign مرتبطة بجامعة أو نظام، وProgram، وسنة، وترم.

الـ Batch Leader المسموح له يقدّم الكتب والـ PDFs والتسجيلات والامتحانات وباقي المواد الخاصة بالـ Cohort.

النظام يراجع الملفات، ويعمل extraction أو transcription، ويحسّن التخزين، ويعمل indexing وquality checks.

بعد كده الطالب يسأل سؤال بالإنجليزي أو العربي أو الاتنين، وياخد إجابة عليها citations.

الطالب يقدر يعمل Summary أو Flashcards أو Quiz ويكمل تجربة مذاكرة كاملة.

النظام يسجل الجودة، والـ feedback، والاستخدام، والـ latency، والتكلفة.

وفي النهاية أحمد وزياد هم اللي يحددوا من الـ Admin Dashboard إيه اللي يظهر للطلبة وإمتى.

### 3.2 الـ Pilot فيه اتنين Cohorts

الـ Cohort الأولى Human Medicine، والواجهة فيها تعرض Modules. دي تتبني وتتراجع الأول عشان نثبت الـ intake، والـ module display، ومعالجة المصادر، وتجربة الطالب كاملة.

الـ Cohort التانية Veterinary Medicine. بشكل افتراضي تعرض Subjects، إلا لو نظام الجامعة الحقيقي مختلف. دي تتضاف قبل ما نعتبر الـ PoC مكتمل، عشان تثبت إن الـ Catalog والـ availability والـ retrieval والواجهة configurable مش مخصوصين لـ Human Medicine.

مش هنشتغل على الاتنين في نفس الوقت من أول أسبوع. هنثبت الـ pipeline وتجربة الـ Tutor على الـ Human Medicine Cohort، وبعدها ندخل الـ Veterinary Cohort على نفس Quality Gates.

### 3.3 حجم المحتوى المستهدف

لكل Cohort نستهدف:

- من 8 لـ 12 Module أو Subject أو مجموعة محاضرات مترابطة.
- من 15 لـ 25 PDF أو Slide Deck أو كتاب أو ملف منظم.
- من 3 لـ 5 ساعات تسجيلات صوتية متنوعة.
- مجموعة امتحانات سابقة أو Question Bank مسموح باستخدامها لو متاحة.
- من 100 لـ 150 Gold Evaluation Case للـ Tutor.
- من 30 لـ 50 Evaluation Case لتوليد الـ MCQs.
- أمثلة English وArabic وMixed.
- حالات مفيش ليها إجابة في المصادر.
- حالات فيها تعارض بين المصادر.
- حالات Prompt Injection أو محتوى عدائي.

الإجمالي في الـ PoC تقريباً من 16 لـ 24 Curriculum Unit، ومن 30 لـ 50 Source File، ومن 6 لـ 10 ساعات صوت، ومن 200 لـ 300 Tutor Evaluation Case، ومن 60 لـ 100 MCQ Evaluation Case.

### 3.4 حجم الـ Private Beta

المستهدف من 30 لـ 60 طالب Active في Private Beta متحكم فيها.

النجاح مش بعدد الـ registrations. النجاح الحقيقي إن الطالب يعمل Study Session مفيدة ويرجع يستخدم المنصة تاني.

## 4. حدود الـ Scope

### 4.1 الحاجات الموجودة في الـ PoC

- Accounts بالإيميل والباسورد مع Email Verification.
- Catalog جاهز لمراحل تعليم مختلفة.
- Institution أو System، وProgram أو Faculty، وAcademic Level، وTerm، وCohort أو Curriculum Edition، وCurriculum Units بأنواع مختلفة.
- Module أو Subject terminology جاي من الـ Configuration.
- Cohort Membership، وCohort Unlock، وUnit Publication، وصلاحيات دقيقة.
- دعوة Batch Leader، وCollection Campaign محدودة، وتتبع للـ submissions.
- Tutor بالإنجليزي والمصري والـ Mixed Style.
- استقبال كتب وPDFs وScanned Slides وتسجيلات صوت.
- OCR للصفحات اللي محتاجاه، وTranscription للصوت.
- تحويل Verified لـ Structured Text خفيف، وبعده حذف الملف الأصلي تلقائياً بعد Quality Validation.
- Hybrid Retrieval متفلتر بالـ Cohort والـ Curriculum Unit ومعاه citations.
- Evidence Sufficiency، وSource Conflicts، وStudent Reporting.
- Summaries وFlashcards وMCQs وQuizzes وإشارات مبدئية للـ Weak Topics.
- Admin Dashboard لإدارة المحتوى، والجودة، والـ feedback، والتكلفة، والتخزين.
- Daily Free Allowance وAppend-only Credit Ledger.
- Test أو Manual Payment Orders، وTelegram للتواصل والإيصالات.
- Google Drive Inbox وLocal Workflow Automation للمحتوى الموثوق.

### 4.2 حاجات مؤجلة

- Native Android أو iOS Apps.
- Public Launch كبير في جامعات كتير مرة واحدة.
- Student Private Uploads أو NotebookLM-like Workspaces شخصية.
- تشخيص أو علاج لحالة مريض حقيقي.
- نشر أوتوماتيك كامل لمحتوى من Uploader غير موثوق.
- Automatic Card أو Wallet Settlement.
- وصول الدكتور لمحادثات طالب فردية.
- بناء أو استضافة Frontier Model خاص بينا.

## 5. قواعد المنتج اللي ماينفعش نتنازل عنها

أول قاعدة: Cohort and Unit Isolation. الطالب ممنوع يوصل لمحتوى Cohort أو Program أو Institution أو Curriculum Unit تانية من غير صلاحية واضحة.

تاني قاعدة: Evidence Before Confidence. الـ citations وقياس كفاية الدليل جزء من الإجابة، مش مجرد شكل في الواجهة.

تالت قاعدة: ممنوع Invented Citations. أي citation لازم تفتح على صفحة أو timestamp أو External Source Record موجود فعلاً.

رابع قاعدة: Uncertainty تكون ظاهرة. لو المصدر مش كفاية، UniMind يقول إيه الموجود وإيه الناقص.

خامس قاعدة: Source Conflicts تظهر للطالب. لو مصدرين معتمدين مختلفين، نعرض الاتنين وأدلتهم.

سادس قاعدة: Educational Safety. UniMind للمذاكرة والاستعداد للامتحان، مش لاتخاذ قرار تشخيص أو علاج لمريض حقيقي.

سابع قاعدة: Privacy by Default. أحمد وزياد مايفتحوش محادثات الطلبة بشكل عادي. الاستثناء لما الطالب يعمل Report أو يدي Consent، وكل وصول يتسجل.

تامن قاعدة: Processed Evidence تكون Immutable. لو المصدر اتغير نعمل Version جديدة. الـ citation الدائمة تشير للـ Structured Text والـ page أو timestamp locator حتى بعد حذف الملف الأصلي.

تاسع قاعدة: الـ Credit Ledger هو الحقيقة. مفيش خانة Balance قابلة للتعديل اليدوي. كل حركة Append-only وIdempotent.

عاشر قاعدة: نقيس قبل التسعير. مانحددش سعر الـ Credits قبل ما نقيس التكلفة الحقيقية عند p50 وp95.

القاعدة رقم 11: Admin-controlled Availability. مجرد إن المصدر اتعالج مش معناه إنه يظهر. لازم المصدر يبقى READY، والـ Unit منشورة، والـ Cohort مفتوحة.

القاعدة رقم 12: Verified Deletion مش Premature Deletion. الملفات الأصلية مؤقتة، وتتحذف أوتوماتيك أول ما التحويل والـ locators والـ checksums والـ quality review المطلوب ينجحوا. التحويل الفاشل أو غير المتأكد منه مايتحذفش على إنه ناجح.

## 6. تجربة المستخدم المطلوبة

### 6.1 رحلة الطالب

الطالب يعمل Register، ويفعّل الإيميل، ويوافق على الشروط وحدود الاستخدام التعليمي.

بعد كده يعمل Filter بالـ Institution، والـ Faculty أو Program، والـ Academic Year أو Level، والـ Term.

الطالب يشوف بس الـ Cohorts والـ Curriculum Units اللي مصادرها جاهزة والـ Admin فاتحها.

في Human Medicine يشوف كلمة Modules. في الـ Programs العادية يشوف Subjects، حسب الـ Configuration.

يختار أسلوب الإجابة English أو Egyptian Arabic أو Mixed.

يسأل سؤال وياخد Streaming Answer عليها citations.

لو موجود، يشوف Course Material وExternal Information وConflict وUncertainty في أجزاء منفصلة.

يقدر يولد Summary أو Flashcards أو MCQ Quiz على Units أو Lessons محددة.

بعد الـ Quiz يشوف تفسير كل اختيار والـ citation الخاصة بيه.

يشوف تقدمه حسب الـ Unit أو Topic، ويقدر يعمل Report لإجابة أو سؤال سيئ.

يشوف الـ Free Allowance والـ Credit Usage وحالة الـ Payment Orders.

### 6.2 رحلة أحمد وزياد كـ Admins

الـ Admin ينشئ Education Stage، وInstitution، وProgram أو Faculty، وLevel، وTerm، وCohort، وCurriculum Units.

يفتح Collection Campaign، ويدعو Batch Leader محدد بصلاحية رفع محدودة.

يستقبل submissions من Drive أو Telegram أو Object Storage، ويربط كل مصدر بالـ Cohort والـ Curriculum Unit الصح.

يتابع الملف الأصلي من validation، للاستخراج أو الـ transcription، للـ optimization، للـ quality review، لحذف الملف الأصلي، للـ indexing، لحد READY.

يعمل Preview لنفس شكل المحتوى اللي الطالب هيشوفه قبل فتح الـ Cohort.

ينشر أو يخفي Unit واحدة، ويفتح أو يقفل Cohort كاملة، من غير تعديل يدوي في الـ database.

يراجع conversion failures، والـ low confidence، وتعارض المصادر، وتقارير الطلبة، وفشل الحذف، واستهلاك التخزين.

يفعّل أو يقفل Processed Source Version من غير ما يكسر الـ historical citations.

يشغّل Evaluation Sets قبل تغيير Model أو Prompt أو Retrieval أو Publication Rule.

يتابع الجودة والـ latency والتكلفة والـ feedback والأعطال.

ويراجع Manual Payment Evidence ويقبل أو يرفض Order عن طريق Audited Transaction.

### 6.3 رحلة الـ Batch Leader

الـ Batch Leader يستقبل دعوة ليها Expiry ومربوطة بـ Collection Campaign واحدة وCohort واحدة.

يشوف Checklist بالمواد المطلوبة وقواعد الرفع.

يرفع الملفات أو Drive References المسموح بيها، ومعاها الـ metadata المطلوبة.

يتابع الحالات: Received، Processing، Needs Information، Accepted، Rejected، أو Completed.

ماياخدش Admin Privileges، ومايشوفش Student Chats، ومايغيرش Providers، وماينشرش Units، ومايفتحش Cohorts، ومايوصلش لحملة تانية.

## 7. الـ Technical Architecture

### 7.1 التطبيق

الـ Web App مبني بـ Next.js وTypeScript.

الواجهة Responsive، وتدعم RTL للعربي وLTR للمصطلحات الإنجليزية جوه نفس الرسالة.

Authentication والـ Database باستخدام Supabase Auth وPostgreSQL.

الصلاحيات باستخدام Row Level Security، وServer-side Authorization، وProtected Database Functions.

في Preview Environment للـ development، وBeta Production Environment منفصلة.

المعالجة الثقيلة زي الملفات الكبيرة والـ transcription الطويل تشتغل في Durable Background Worker أو Job System، مش جوه Web Request قصيرة.

التخزين له Provider-agnostic Adapter. Google Drive ممكن يكون Intake Source، لكن الـ Database هي المصدر الأساسي للـ metadata وحالة الـ jobs.

### 7.2 الـ Catalog والـ Availability

جدول `education_stages` يفرق بين `UNIVERSITY` و`HIGH_SCHOOL` مستقبلاً.

جدول `institutions` يتبع Education Stage.

جدول `programs` يمثل Faculty في الجامعة أو Track في الثانوية، وبيخزن UI terminology.

جدول `academic_levels` يمثل 3rd Year أو أي مستوى دراسي مرتب.

جدول `terms` يمثل First Semester وSecond Semester أو أي نظام Terms مختلف.

جدول `cohorts` يربط Institution وProgram وLevel وTerm وCurriculum Edition أو Batch.

جدول `curriculum_units` يتبع Cohort، ونوعه ممكن يكون `MODULE` أو `SUBJECT` أو `COURSE` أو `TOPIC`، ومعاه الاسم المفرد والجمع اللي يظهروا في الواجهة.

جدول `cohort_memberships` يحدد الطلبة المسموح لهم.

جدول `cohort_releases` يخزن حالة فتح أو قفل الـ Cohort.

الـ Unit تظهر للطالب بس لو الـ Cohort مفتوحة، والـ Unit منشورة، وفي Processed Source Version واحدة على الأقل READY وPUBLISHED، وباقي شروط الصلاحية والـ edition ناجحة.

### 7.3 تعديلات الـ Database Schema

بدل `faculties` لوحدها، نستخدم `programs`. الجدول يشمل `program_type`، و`default_unit_type`، و`unit_label_singular`، و`unit_label_plural`.

بدل `study_years` نستخدم `academic_levels`، ومعاها ترتيب وDisplay Label وربط بالـ Program.

بدل `semesters` نستخدم `terms`، وتكون configurable حسب النظام.

بدل `subjects` و`lectures` كجداول ثابتة، نستخدم `curriculum_units` بشكل Hierarchical. كل Unit ليها `unit_type`، وممكن يبقى ليها `parent_unit_id`، وترتيب، وحالة نشر.

بدل `subject_enrollments` نستخدم `cohort_memberships`.

نضيف `batch_leader_assignments` و`collection_campaigns` و`source_submissions` عشان صلاحيات الرفع تبقى محددة بالحملة.

في `source_assets` نضيف Storage Provider وStorage Key مؤقت، والـ hash، ووقت الاستلام، و`delete_after`، و`raw_status`، وHold Reason، وآخر Deletion Error.

نضيف `processed_documents` عشان نخزن الـ Markdown أو Structured Transcript الدائم.

نضيف `source_locators` عشان نربط مكان النص الدائم برقم الصفحة الأصلي أو الـ timestamp.

نفصل بين `source_versions.processing_status`، و`curriculum_units.publication_status`، و`cohort_releases.release_status`.

نضيف `raw_deletion_events` كـ Append-only Log لكل محاولة حذف ونتيجتها والتحقق منها.

ممنوع نكرر الـ Availability في Boolean قابلة للتعديل. نستخدم Security-invoker View أو Caller-scoped Query تطبق كل الشروط.

### 7.4 Tutor Pipeline

أولاً، نعمل Authenticate للطالب ونتأكد من Cohort Membership، وحالة الـ release، وإن الـ Curriculum Unit متاحة.

ثانياً، نطبق Rate Limits ونحجز Estimated Allowance أو Credits.

ثالثاً، نعمل Normalize للـ retrieval query من غير ما نغير السؤال اللي الطالب شايفه.

رابعاً، نشغل Keyword أو Full-text Search وVector Search بالتوازي، ومتفلترين بالـ Cohort والـ Curriculum Units.

خامساً، نعمل Merge وDeduplication وReranking وEvidence Sufficiency.

سادساً، نبني Evidence Packet صغير ومعاه Stable Citation IDs.

سابعاً، نولد Streaming Answer تحت Course-evidence Rules صارمة.

ثامناً، نراجع إن الـ citations صحيحة، وإن الـ claims مدعومة، وإن مفيش Cohort أو Unit غلط دخلت في الإجابة.

تاسعاً، نحاسب الاستخدام الحقيقي، ونرجع الجزء المحجوز اللي ماستخدمش، ونخزن المحادثة حسب Retention Choice.

### 7.5 Content Pipeline

أول خطوة: الـ Admin يعمل Collection Campaign، والـ Batch Leader يقدّم Raw File أو Reference ومعاه metadata وIdempotency Key.

تاني خطوة: نراجع Campaign Scope، وصلاحية الـ uploader، والـ rights، ونوع وحجم الملف، والـ malware risk، والـ duplicate hash.

تالت خطوة: نحط الملف الأصلي في Private Temporary Location، ونسجل Deletion Deadline وRaw Status.

رابع خطوة: لو PDF أو كتاب، نستخرج النص صفحة صفحة، ونستخدم OCR للصفحات اللي النص فيها قليل، وننتج Normalized Markdown ومعاه Structured Locator Sidecar. نحافظ على الجداول والمعادلات ووصف الرسومات المهمة. مانضحيش بالمعنى عشان نوفر مساحة.

خامس خطوة: لو Audio، نعمل Transcription لكل التسجيل مع timestamps وconfidence وlanguage mix والمصطلحات، وننتج Markdown وJSON مضغوطين.

سادس خطوة: نراجع Conversion Coverage والـ locators والـ checksums والمصطلحات المهمة، ونتأكد إن الـ processed object بيتقري.

سابع خطوة: بعد نجاح الاختبارات والـ admin review المطلوب، نحذف الملف الأصلي باستخدام Storage Provider API، ونتأكد إنه مش موجود، ونسجل Deletion Event. لو الحذف فشل، الحالة تفضل ظاهرة وقابلة للـ retry.

تامن خطوة: نقسم النص الدائم لـ chunks حسب العناوين والمعنى.

تاسع خطوة: نعمل Versioned Embeddings في Embedding Space واحدة محددة.

عاشر خطوة: نعمل Final Checks على التغطية والـ duplicates والـ chunks والـ citations وحالة حذف الملف الأصلي.

الخطوة رقم 11: نخلي المصدر `READY`. لكنه لسه مش ظاهر للطلبة إلا لما الـ Admin ينشر الـ Unit ويفتح الـ Cohort.

## 8. مسارات الشغل الرئيسية

Product and UX يشمل الفلاتر حسب المرحلة، والـ dynamic Module أو Subject labels، والـ Cohort Dashboard، والـ Chat، وأدوات المذاكرة، والـ Quizzes، ودعم العربي والإنجليزي، والـ feedback.

Identity and Access يشمل Authentication، والـ profiles، وأدوار Admin وBatch Leader وStudent، والـ Cohort Membership، واختبارات RLS.

Catalog and Release Control يشمل Education Stages، وInstitutions، وPrograms، وLevels، وTerms، وCohorts، وTyped Curriculum Units، والنشر والفتح والقفل.

Content Operations يشمل Collection Campaigns، والـ submissions، والـ processed versions، والـ permissions، والـ jobs، والـ deletion audit، والـ quality reports، والـ review queue.

Retrieval and Tutor يشمل Hybrid Search، والـ citations، وEvidence Sufficiency، والـ conflicts، والسلوك ثنائي اللغة، والـ External Search Feature Flag.

Study Tools تشمل Summaries، وFlashcards، والأسئلة الأصلية، والـ Generated MCQs، والـ Quiz Sessions، والـ progress signals.

Credits and Payments تشمل Allowance، وLedger، وReservations، وUsage Events، وTest Payment Orders، وربط إيصالات Telegram.

Automation تشمل Drive Inbox، وTelegram Webhook، وLocal n8n، والـ retries، والـ duplicate protection.

Quality and Safety تشمل Gold Datasets، وRegression Runner، وPrompt Injection Tests، وSafety Boundaries، والـ reporting workflow.

Operations تشمل CI، والـ migrations، والـ monitoring، والـ incident runbooks، وتجربة الـ backup والـ restore قبل التشغيل المدفوع.

## 9. الـ Delivery Roadmap

### Phase 0: تحديد الـ Pilot Cohorts والـ Leaders وسياسة الملفات

المدة التقديرية أسبوع.

نختار Human Medicine وVeterinary Medicine Cohorts بمسار Institution وProgram وLevel وTerm واضح.

نحدد هل كل واحدة تعرض Modules أو Subjects، ونحدد الـ Curriculum Units.

نحدد Batch Leaders وCollection Campaigns.

نوثق الصلاحيات، واستخدام الـ providers، والاستخدام التجاري.

نعتمد Raw-file Policy فيها Temporary Storage، واختبارات التحويل، وDeletion Deadline، والاستثناءات والـ audit.

نوصل لعشرة Testers على الأقل قبل البناء الثقيل، والمستهدف النهائي 30 لـ 60 Active Student.

نعتمد Maximum Test Spend وطريقة دفع للـ APIs.

نعمل Tutor وMCQ Evaluation Templates.

الـ Exit Gate: كل Cohort ليها Batch Leader أو Source Path حقيقية، وهيكل Curriculum متظبط، وصلاحيات، ومراجع، وTesters، وسياسة حذف، وCost Cap.

### Phase 1: Engineering Foundation

المدة التقديرية أسبوعين.

نعمل Repository وNext.js TypeScript App، وLinting وType Checks وTests وCI وEnvironment Templates.

نعمل Supabase Development وBeta Environments منفصلين، ومigrations عليها versioning.

نعمل Email Verification، وProfiles، وأدوار Admin وBatch Leader وStudent، والـ Generic Catalog، والـ Cohort Membership وRelease، واختبارات RLS.

نعمل Bilingual UI Shell، وStage-aware Filters، وDynamic Module أو Subject labels، وRetention Settings، وAdmin Shell.

نعمل Admin Preview ونشر Unit وفتح أو قفل Cohort باستخدام Mocked Source Readiness.

الـ Exit Gate: الطالب يشوف بس Cohorts وUnits المسموح بيها، والـ Batch Leader يرفع بس للحملة المكلف بيها ومايقدرش ينشر أو يدير المنصة.

### Phase 2: Intake وOptimization وDeletion وRetrieval

المدة التقديرية 3 أسابيع.

نبني Collection Campaigns، وBatch Leader Submissions، والـ source metadata والـ rights، والـ temporary raw lifecycle، والـ processed versions، والـ durable jobs.

نبني تحويل PDF أو Book لـ Markdown وLocator Sidecar، وOCR، وFull Audio Transcription، وCompressed Processed Storage، وChunking، وEmbeddings.

نبني Conversion Quality Report، وDuplicate Detection، وRaw Deletion Queue وAudit، وRetry وReview Queue.

نبني Hybrid Retrieval متفلتر بالـ Cohort والـ Unit، وStable Citations، وEvaluation Runner.

ندخل Human Medicine Corpus ونصلح عيوب التحويل.

الـ Exit Gate: Human Medicine Cohort عندها Optimized Sources جاهزة، والملفات الأصلية المتأكد منها اتحذفت واتسجلت، والـ Modules المنشورة ماتظهرش غير بعد فتح الـ Cohort، ومفيش Cross-cohort Leakage، والـ citations شغالة بعد حذف الأصل.

### Phase 3: Grounded Tutor والـ Credits Core

المدة التقديرية 3 أسابيع.

نبني Streaming Bilingual Tutor، وEvidence Sufficiency، وCited-answer Contract، وSource Conflicts، وExternal Search Preference ورا Feature Flag.

نبني Daily Allowance وCredit Ledger وReservation وSettlement وRefund وRate Limits وUsage Events.

نبني Chat Retention وDelete Flow وReport Flow وAdmin Diagnostics بصلاحيات محدودة.

نشغل Evaluation بعد أي تغيير في Retrieval أو Prompt أو Provider.

الـ Exit Gate: Human Medicine Gold Set تعدي الجودة، والطلبات الفاشلة ترجع الـ credits صح.

### Phase 4: Study Tools والـ MCQ Engine

المدة التقديرية أسبوعين.

نبني Summaries وFlashcards مربوطين بـ Source Versions.

ندخل Original Exam Questions مع Origin وPermission Labels.

نبني Structured MCQ Generation وOption-level Explanations وValidation.

نبني Quiz Setup، وTimed وUntimed Attempts، والـ saved scores، والـ review، وWeak-topic Signals مبدئية.

الـ Exit Gate: الطالب يبدأ من Module أو Subject، ويسأل، ويولد Study Artifact، ويكمل Quiz، ويراجع الإجابات في Session واحدة.

### Phase 5: Operations وDrive وTelegram وAutomation

المدة التقديرية من أسبوعين لـ 3 أسابيع.

نبني Drive أو Object-storage Intake، والـ temporary raw lifecycle، والتحقق من الحذف، ومراقبة الـ processed storage.

نبني Telegram Webhook للـ metadata والـ payment evidence، والملفات الكبيرة تروح Drive.

نبني Local n8n يستدعي Tested Worker Code، مش نخزن الـ business logic جوه Visual Nodes.

نبني Idempotent Retries، وDuplicate Protection، وError Notifications، وAdmin Job Dashboard، وReservation Reconciliation.

نبني Test أو Manual Payment Order Flow بقبول ورفض متسجلين.

الـ Exit Gate: Batch Leader Submission تتعالج وتتحسن وتتحقق وتتحذف Raw File بتاعتها من غير تعديل Database يدوي، وأحمد وزياد يقدروا يعملوا Preview وPublish وUnlock ويحلوا المشاكل من الـ Dashboard.

### Phase 6: اختبار Veterinary Medicine

المدة التقديرية أسبوعين.

ندخل Veterinary Medicine Corpus، ونعمل Gold Evaluation Set، ونختبر المصطلحات، واللغتين، والـ citations، والـ isolation، والـ MCQ Quality.

نتأكد إن كلمة Subjects بتظهر من الـ Configuration، ونشيل أي افتراض جوه الكود خاص بـ Human Medicine.

الـ Exit Gate: الاتنين Cohorts يعدوا نفس جودة الـ conversion والحذف والـ availability والصلاحيات.

### Phase 7: Private Beta

المدة التقديرية من 3 لـ 4 أسابيع.

ندخل من 30 لـ 60 Active Student بشكل متحكم فيه.

نعمل Weekly Interviews وFeedback Triage وRegression Evaluation وتصحيح للمحتوى.

نتابع Activation وReturn Rate والـ reports والـ latency وفشل الـ providers والتكلفة.

نجرب Price وPayment Intent من غير ما ناخد فلوس قبل Commercial Hosting والـ policy gates.

الـ Exit Gate: عندنا دليل حقيقي على الجودة، وتكرار الاستخدام، وقدرتنا على التشغيل، واستعداد للدفع.

### Phase 8: أول Paid Pilot

المدة التقديرية من أسبوعين لـ 4 أسابيع بعد اعتماد الـ PoC.

نحدد Commercial Hosting وProduction Backup.

ننشر Terms وPrivacy Notice وContent Policy وRefund Rules وEducational Disclaimer.

نفعل Credit Products وManual Payment Verification.

نبدأ بمجموعة مدفوعة صغيرة، ونعمل Reconciliation وSupport Runbook ونقيس Gross Margin.

الـ Exit Gate: من 5 لـ 10 Orders حقيقية مربوطة بالـ Ledger تكتمل صح، ونقدر نتعامل مع Refund أو Dispute.

## 10. Quality Gates

Cross-cohort أو Cross-unit Leakage لازم يكون صفر.

Conversion Completeness لازم يغطي 100% من الصفحات أو مدة الصوت المطلوبة، أو المصدر يتعمله Reject بشكل واضح.

Raw Deletion لازم يكون 100% للملفات اللي عدت التحويل، وصفر Premature Deletion.

Availability لازم تكون صح في كل الحالات. مفيش محتوى يظهر من غير Ready Source وPublished Unit وUnlocked Cohort.

Citation Validity لازم تكون 95% على الأقل.

Claim Support لازم تكون 90% على الأقل، وممنوع Critical Unsupported Clinical Claim.

Insufficient Evidence Behavior لازم تكون صح في 90% على الأقل.

Bilingual Usefulness يكون Median 4 من 5 على الأقل.

MCQ Validity تكون 90% على الأقل قبل ما السؤال يظهر للطالب.

الـ Transcription المقبول مايكونش فيه Critical Terminology Error في العينات اللي اتراجعت.

هدف الـ latency المبدئي: p50 أقل من 5 ثواني لأول token، وp95 أقل من 12 ثانية، وبعدها نعدله حسب الواقع.

تكلفة p95 لازم تناسب الـ allowance والـ margin plan.

أي Fabricated Citation، أو Leakage، أو Premature Raw Deletion، أو Availability غلط، أو Critical Unsafe Claim، أو Data Exposure يعتبر Release Blocker حتى لو المتوسطات كويسة.

## 11. علامات نجاح الـ Beta

المستهدف من 30 لـ 60 Active Verified Student.

Activation يكون 60% على الأقل من الطلبة يعملوا Chat أو Quiz مفيد.

7-day Return يكون 25% على الأقل كهدف مبدئي.

Repeated Value: 20% على الأقل يعملوا 3 Meaningful Study Sessions أو أكتر في أسبوع.

Willingness to Pay: 10% على الأقل يعملوا Order أو يقولوا التزام واضح في Interview.

Paid Validation بعد الجاهزية: من 5 لـ 10 Paid Credit Orders مكتملين.

## 12. سياسة التحكم في التكلفة

مفيش Real Provider Key تشتغل قبل ما أحمد وزياد يعتمدوا Maximum Test Spend.

نستخدم Mocks في شغل الواجهة والـ database والتطوير العادي.

نستخدم Real Model Calls في الـ evaluation والـ ingestion والـ meaningful end-to-end tests.

نعمل Provider Budgets وAlerts وApplication Kill Switch.

نحدد Source Batch Size وOutput Tokens وعدد الـ MCQs والـ External Search في الـ Beta.

نسجل Model وTokens وAudio Minutes وSearch Calls وLatency وRetries وCost لكل Provider Action.

مانحددش أسعار نهائية قبل 100-action Benchmark يطلع p50 وp95 للتكلفة.

## 13. القرارات اللي لسه محتاجة اعتماد

القرار D-01: أول Human Medicine Cohort والـ Modules بتاعتها. المسؤول أحمد. الحالة Open.

القرار D-02: أول Veterinary Medicine Cohort والـ Subjects بتاعتها. المسؤول زياد. الحالة Open.

القرار D-03: الجامعات التجريبية. الاختيار المقترح يكون حسب أقوى Content Rights وTesters. الحالة Open.

القرار D-04: Generation وEmbedding وTranscription Providers. يتحددوا بعد Project-specific Benchmark. الحالة Open.

القرار D-05: Maximum PoC Spend. لازم Hard Cap قبل الـ live evaluation. الحالة Open.

القرار D-06: External Web Search في الـ Beta. تفضل Feature-flagged لحد Safety وCost Evaluation. الحالة Proposed.

القرار D-07: Real Payments. تبدأ بعد Commercial Hosting والـ policy gates. الحالة Proposed.

القرار D-08: Chat Retention Default. الطالب يتحكم فيه، والـ no-save يحتفظ بأقل Operational Metadata. الحالة Proposed.

القرار D-09: Raw Upload Deletion. الحذف أوتوماتيك بعد Conversion وLocator وChecksum Verification والـ review المطلوب. مفيش Permanent Raw Retention كقاعدة عامة. الحالة Proposed.

القرار D-10: Processed Source Format. Normalized Markdown ومعاه Structured JSON Locator Sidecar، ومضغوط في التخزين. الحالة Proposed.

القرار D-11: Batch Leader Authority. Submission وStatus جوه Campaign معينة فقط. مفيش Publication أو Admin أو Student Data Access. الحالة Proposed.

القرار D-12: Catalog Abstraction. Education Stage، ثم Institution، ثم Program، ثم Level، ثم Term، ثم Cohort، ثم Typed Curriculum Unit. الحالة Proposed.

## 14. أول خطوات مطلوبة دلوقتي

1. نختار Candidate Human Medicine وVeterinary Medicine Cohorts، بكل Institution وProgram وLevel وTerm وCurriculum Edition.
2. نحدد هل كل Program تعرض `MODULE` أو `SUBJECT`.
3. نحدد Batch Leaders ونعمل Material Request Checklist.
4. نعمل Inventory لكل PDFs والكتب والتسجيلات والامتحانات والـ answer keys والـ permissions.
5. نقيم كل Cohort حسب اكتمال المحتوى، وقدرتنا على المراجعة، والامتحانات، وجودة الملفات، والـ testers، والطلب.
6. نأكد Written Rights للـ temporary storage، والـ provider processing، والـ processed-text retention، والـ citations، والامتحانات، وحذف الأصل، والاستخدام التجاري.
7. نعتمد Verified Raw-file Deletion Policy والـ processed formats.
8. نوصل لعشرة Testers على الأقل لأول Cohort.
9. نحدد Maximum PoC Spend وطريقة دفع للـ APIs.
10. نختار 10 Documents أو Pages و60 دقيقة Audio لاختبار التحويل.
11. نبدأ أول 100 Human Medicine Gold Tutor Cases، وفيهم Negative وConflict Cases.
12. نعمل Repository ونبدأ Phase 1 باستخدام Mocked AI Responses.
13. نعمل Benchmark للـ generation والـ embeddings والـ transcription والـ search قبل تثبيت Providers أو أسعار Credits.

## 15. طريقة الشغل من الوثيقة دي

أي قرار أو Scope أو Milestone أو Quality Gate يتغير، نحدث النسخة الإنجليزية الأساسية والنسخة المصرية دي.

ماينفعش نقول إن Phase خلصت لمجرد إن الواجهة شغالة. لازم الـ Exit Gate يبقى عنده Evidence.

أي سؤال أو قرار لسه مفتوح يفضل ظاهر في Decision Log.

الـ Word Blueprint القديم يفضل Reference تفصيلي، لكن الـ Master Plan الإنجليزي هو المصدر التنفيذي الأساسي. النسخة المصرية دي معمولة للمراجعة بالصوت، وأي تعديلات تطلع من التسجيل هنرجع نطبقها على النسخة الإنجليزية وبعدها نحدّث النسخة المصرية.
