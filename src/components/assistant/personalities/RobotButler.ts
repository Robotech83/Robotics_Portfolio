import type { PersonalityFn } from "./types";

export const robotButlerPersonality: PersonalityFn = (text: string) => {
  return `Certainly. ${text}`;
};