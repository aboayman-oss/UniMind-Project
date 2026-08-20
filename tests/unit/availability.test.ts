import { describe, expect, it } from "vitest";

import {
  availabilityReasonCodes,
  deriveAvailability,
  type AvailabilityFacts,
} from "../../src/lib/availability/derive-availability.domain";

const availableFacts: AvailabilityFacts = {
  hasActiveMembership: true,
  cohortReleased: true,
  unitPublished: true,
  hasActiveReadySource: true,
  rightsValid: true,
  curriculumEditionMatches: true,
};

describe("deriveAvailability", () => {
  it("returns available only when every authorized predicate passes", () => {
    expect(deriveAvailability(availableFacts)).toEqual({
      available: true,
      reasons: [],
    });
  });

  it.each([
    ["hasActiveMembership", "membership_missing"],
    ["cohortReleased", "cohort_locked"],
    ["unitPublished", "unit_unpublished"],
    ["hasActiveReadySource", "ready_source_missing"],
    ["rightsValid", "rights_invalid"],
    ["curriculumEditionMatches", "curriculum_edition_mismatch"],
  ] as const)("reports %s as %s", (predicate, expectedReason) => {
    const result = deriveAvailability({
      ...availableFacts,
      [predicate]: false,
    });

    expect(result).toEqual({
      available: false,
      reasons: [expectedReason],
    });
  });

  it("keeps the reason-code set stable and explicit", () => {
    expect(availabilityReasonCodes).toHaveLength(6);
  });
});
