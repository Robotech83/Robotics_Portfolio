export function sarcasticPersonality(input: string): string {
  const text = input.toLowerCase();

  if (text.includes("hello")) {
    return "Oh wow. A greeting. How original.";
  }

  if (text.includes("help")) {
    return "Yes yes, I help. It's literally my job.";
  }

  return "Fascinating. Truly.";
}
