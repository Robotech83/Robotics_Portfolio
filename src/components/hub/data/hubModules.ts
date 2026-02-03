import { Bot, Cpu, Eye, Mic, Power, Wifi, ScanSearch, Gamepad2 } from "lucide-react";
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
    id: "voice-module",
    title: "Voice Module",
    subtitle: "Wake word • TTS • Commands • AI Assistant",
    to: "/voice",
    Icon: Mic,
    status: "LIVE",
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
    id: "vision",
    title: "Vision System",
    subtitle: "Camera + detection experiments",
    to: "/vision",
    Icon: Eye,
    status: "IN PROGRESS",
  },
  {
    id: "object-scanner",
    title: "Object Scanner",
    subtitle: "Kitchen + clothing detection (demo)",
    to: "/object-scanner",
    Icon: ScanSearch,
    status: "IN PROGRESS",
  },
  {
    id: "power",
    title: "Power System",
    subtitle: "Battery • regulators • wiring docs",
    to: "/power",
    Icon: Power,
    status: "IN PROGRESS",
  },
  {
    id: "network",
    title: "Network System",
    subtitle: "ESP32 • Pi comms • protocols",
    to: "/network",
    Icon: Wifi,
    status: "IN PROGRESS",
  },
  {
    id: "firmware",
    title: "Firmware Tools",
    subtitle: "Arduino / ESP32 utilities & logs",
    to: "/firmware",
    Icon: Cpu,
    status: "IN PROGRESS",
  },
];
