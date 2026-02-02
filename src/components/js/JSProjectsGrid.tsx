import type { JsProject } from "./types/jsProject";
import { JSProjectCard } from "./JSProjectCard";

type Props = {
  projects: JsProject[];
};

export function JSProjectsGrid({ projects }: Props) {
  return (
    <div className="jsSceneGrid">
      {projects.map((p) => (
        <JSProjectCard key={p.title} project={p} />
      ))}
    </div>
  );
}
