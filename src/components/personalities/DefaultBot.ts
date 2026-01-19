export function defaultPersonality(input: string): string {
  const text = input.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    return "Hello! I'm your AI assistant. How can I help today?";
  }

  if (text.includes("skills") || text.includes("tech")) {
    return "I work with React, TypeScript, robotics, and AI systems.";
  }

  if (text.includes("project")) {
    return "You're currently exploring a modular robotics control platform.";
  }

  if (text.includes("help")) {
    return "You can ask me about projects, robotics, AI, or voice control.";
  }

  return "I'm not sure yet — but I'm learning more every day.";
}
