import type { PersonalityFn } from "./types";

export const sarcasticPersonality: PersonalityFn = (text: string) => {
  return `${text} ...obviously.`;
};