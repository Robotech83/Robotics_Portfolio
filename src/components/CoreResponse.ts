import { defaultPersonality } from "./personalities/DefaultBot";
import { friendlyPersonality } from "./personalities/FriendlyBot";
import { sarcasticPersonality } from "./personalities/SarcasticBot";
import { robotButlerPersonality } from "./personalities/RobotButler";

export type PersonalityType =
  | "default"
  | "friendly"
  | "sarcastic"
  | "butler";

export function getResponse(
  input: string,
  personality: PersonalityType
): string {
  switch (personality) {
    case "friendly":
      return friendlyPersonality(input);
    case "sarcastic":
      return sarcasticPersonality(input);
    case "butler":
      return robotButlerPersonality(input);
    default:
      return defaultPersonality(input);
  }
}
