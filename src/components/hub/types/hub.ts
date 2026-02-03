export type HubStatus = "LIVE" | "IN PROGRESS";

export type HubModule = {
  id: string;
  title: string;
  subtitle: string;
  to: string;
  Icon: React.ComponentType<{ size?: number }>;
  status?: HubStatus;
};
