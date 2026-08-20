# Raw and processed data lifecycle policy

**Status:** DRAFT | APPROVED | SUPERSEDED

**Owner:** <name>

**Approvers:** <names>

**Version/effective date:** <value / YYYY-MM-DD>

**Blocks:** <task IDs until approval>

## Scope and definitions

Define raw source, temporary derived object, processed document, locator, segment, metadata, legal/rights hold, deletion deadline, verified deletion, quarantine, and takedown.

## Data-flow inventory

| Stage | Data | Location/provider/region | Encryption/access | Maximum retention | Exit condition |
| --- | --- | --- | --- | --- | --- |
| Upload | Raw |  |  |  |  |
| Processing | Temporary derived |  |  |  |  |
| Accepted | Processed |  |  |  |  |

## Exact retention rules

- Raw deletion deadline calculation:
- Temporary normalized audio/OCR image deadline:
- Failed conversion retention and action:
- Quarantine retention and access:
- Processed content retention:
- Locator/metadata retention after deletion:
- Reported answer/artifact evidence retention:
- Backup interaction and expiry:

## Minimum processed acceptance

### Native PDF

- Required coverage/checksum/readability/locator thresholds:

### Scanned PDF

- Required OCR/visual meaning/coverage/quality thresholds:

### Audio

- Required duration coverage/timestamps/terminology/confidence thresholds:

## Deletion procedure

1. Revalidate accepted processed state.
2. Revalidate no active hold.
3. Delete exact object.
4. Independently verify absence.
5. Append attempt/result evidence.
6. Retry or incident on uncertainty/deadline breach.

Specify provider verification method, retry intervals, maximum uncertainty window, severity, recipients, and escalation.

## Holds, rights revocation, and takedown

Define who may place/remove a hold, evidence/reason, expiry/review, immediate retrieval deactivation, derived-artifact invalidation, and preserved audit records.

## Prohibited behavior

- No permanent raw retention by default.
- No deletion before verified processed acceptance.
- No `DELETED_VERIFIED` state based only on a successful delete response.
- No private raw/source content in logs or evidence repositories.

## Approval

| Name | Role | Decision | Date |
| --- | --- | --- | --- |
|  |  |  |  |
