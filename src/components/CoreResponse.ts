// src/components/CoreResponse.ts
import type { PersonalityFn } from "./personalities/types";

/**
 * CoreResponse is intentionally thin:
 * It delegates response generation to the selected personality function.
 */
export function getResponse(input: string, personalityFn: PersonalityFn): string {
  const clean = (input ?? "").trim();

  // Safety fallback
  if (!clean) return "Say that again?";

  return personalityFn(clean);
}
