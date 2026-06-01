import { defaultPersonality } from "../personalities/DefaultBot";
import { friendlyPersonality } from "../personalities/FriendlyBot";
import { sarcasticPersonality } from "../personalities/SarcasticBot";
import { robotButlerPersonality } from "../personalities/RobotButler";
import { type PersonalityMap, type PersonalityOption } from "./types";

export const personalityMap: PersonalityMap = {
  default: defaultPersonality,
  friendly: friendlyPersonality,
  sarcastic: sarcasticPersonality,
  butler: robotButlerPersonality,
};

export const personalityOptions: PersonalityOption[] = [
  { key: "default", label: "Default" },
  { key: "friendly", label: "Friendly" },
  { key: "sarcastic", label: "Sarcastic" },
  { key: "butler", label: "Robot Butler" },
];
