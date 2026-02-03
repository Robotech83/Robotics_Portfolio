import type { HubStatus } from "../types/hub";

type Props = {
  status: HubStatus;
};

export function StatusPill({ status }: Props) {
  const cls = status === "LIVE" ? "live" : "progress";
  return <span className={`status-pill ${cls}`}>{status}</span>;
}
