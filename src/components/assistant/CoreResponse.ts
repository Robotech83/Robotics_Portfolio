// src/components/CoreResponse.ts

import type { PersonalityFn } from "./personalities/types";
import { knowledgeBase } from "./data/knowledgebase";

function normalizeInput(input: string): string {
  return (input ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, "");
}

export function getResponse(
  input: string,
  personalityFn: PersonalityFn
): string {
  const clean = normalizeInput(input);

  if (!clean) {
    return personalityFn("Please say that again.");
  }

  const match = knowledgeBase.find((item) =>
    item.keywords.some((keyword) => clean.includes(normalizeInput(keyword)))
  );

  const response = match
    ? match.response
    : "I do not know that yet, but my creator is still teaching me.";

  return personalityFn(response);
}