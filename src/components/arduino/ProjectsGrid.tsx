import type { ArduinoProject } from "./types/arduino";
import { ArduinoProjectCard } from "./ArduinoProjectCards";

type Props = {
  projects: ArduinoProject[];
};

export function ProjectsGrid({ projects }: Props) {
  return (
    <section className="arduino-grid">
      {projects.map((p) => (
        <ArduinoProjectCard key={p.id} project={p} />
      ))}
    </section>
  );
}
