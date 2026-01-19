export function friendlyPersonality(input: string): string {
  const text = input.toLowerCase();

  if (text.includes("hello")) {
    return "Hey there!! 😄 So good to hear from you!";
  }

  if (text.includes("robot")) {
    return "Robots are AWESOME 🤖💙 especially when you build them yourself!";
  }

  return "That sounds interesting! Tell me more 😊";
}
