import { Bot,  ScanSearch, Gamepad2 } from "lucide-react";
import type { HubModule } from "../types/hub";

export const hubModules: HubModule[] = [
  {
    id: "robot-studio",
    title: "Robot Studio",
    subtitle: "Virtual model + movement controls",
    to: "/robotstudio",
    Icon: Gamepad2,
    status: "IN PROGRESS",
  },

  {
    id: "ai-assistant",
    title: "AI Assistant",
    subtitle: "Text + voice demo with personalities",
    to: "/ai-assistant",
    Icon: Bot,
    status: "LIVE",
  },
 
  {
    id: "object-scanner",
    title: "Object Scanner",
    subtitle: "Kitchen + clothing detection (demo)",
    to: "/object-scanner",
    Icon: ScanSearch,
    status: "IN PROGRESS",
  },

];
