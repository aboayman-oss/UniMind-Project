export const availabilityReasonCodes = [
  "membership_missing",
  "cohort_locked",
  "unit_unpublished",
  "ready_source_missing",
  "rights_invalid",
  "curriculum_edition_mismatch",
] as const;

export type AvailabilityReasonCode = (typeof availabilityReasonCodes)[number];

export type AvailabilityFacts = Readonly<{
  hasActiveMembership: boolean;
  cohortReleased: boolean;
  unitPublished: boolean;
  hasActiveReadySource: boolean;
  rightsValid: boolean;
  curriculumEditionMatches: boolean;
}>;

export type AvailabilityResult = Readonly<{
  available: boolean;
  reasons: readonly AvailabilityReasonCode[];
}>;

const predicates = [
  ["hasActiveMembership", "membership_missing"],
  ["cohortReleased", "cohort_locked"],
  ["unitPublished", "unit_unpublished"],
  ["hasActiveReadySource", "ready_source_missing"],
  ["rightsValid", "rights_invalid"],
  ["curriculumEditionMatches", "curriculum_edition_mismatch"],
] as const satisfies readonly (readonly [
  keyof AvailabilityFacts,
  AvailabilityReasonCode,
])[];

export function deriveAvailability(
  facts: AvailabilityFacts,
): AvailabilityResult {
  const reasons = predicates.flatMap(([predicate, reason]) =>
    facts[predicate] ? [] : [reason],
  );

  return {
    available: reasons.length === 0,
    reasons,
  };
}
