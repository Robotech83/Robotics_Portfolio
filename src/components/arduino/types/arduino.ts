export type ArduinoProjectStatus = "featured" | "in-progress" | "completed";

export type ArduinoProject = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  skills: string[];
  repoUrl: string;
  demoUrl?: string;
  wiringImage?: string;
  status: ArduinoProjectStatus;
};

export type FilterValue = "all" | "featured" | "in-progress"| "completed";
