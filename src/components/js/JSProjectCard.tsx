import type { JsProject } from "./types/jsProject";
import { JSTagChips } from "./JSTagChips";
import { JSProjectActions } from "./JSProjectAction";

type Props = {
  project: JsProject;
};

export function JSProjectCard({ project }: Props) {
  return (
    <div className="jsSceneCard neon-hover">
      <div className="jsCardTop">
        <h3 className="jsCardTitle">{project.title}</h3>
        <JSTagChips tags={project.tags} />
      </div>

      <p className="jsCardDesc">{project.description}</p>

      <JSProjectActions portfolioPath={project.portfolioPath} githubUrl={project.githubUrl} />
    </div>
  );
}
