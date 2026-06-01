import type { PersonalityFn } from "./types";

export const defaultPersonality: PersonalityFn = (text: string) => {
  return text;
};