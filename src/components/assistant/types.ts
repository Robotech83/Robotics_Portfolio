import { type PersonalityFn } from "../personalities/types";

export type PersonalityKey = "default" | "friendly" | "sarcastic" | "butler";

export type PersonalityOption = {
  key: PersonalityKey;
  label: string;
};

export type PersonalityMap = Record<PersonalityKey, PersonalityFn>;
