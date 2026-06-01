import type { PersonalityFn } from "./types";

export const friendlyPersonality: PersonalityFn = (text: string) => {
  return `😊 ${text}`;
};