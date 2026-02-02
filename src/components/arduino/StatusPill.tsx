import type { ArduinoProjectStatus } from "./types/arduino";

type Props = {
  status: ArduinoProjectStatus;
};

export function StatusPill({ status }: Props) {
  const label =
    status === "featured" ? "FEATURED" : status === "in-progress" ? "IN PROGRESS" : "COMPLETED";

  return <span className={`status-pill ${status}`}>{label}</span>;
}
