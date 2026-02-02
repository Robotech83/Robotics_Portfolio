import type { ArduinoProject } from "../../types/arduino";
import { StatusPill } from "./StatusPill";
import { WiringPreview } from "./WiringPreview";
import { SkillChips } from "./SkillChips";
import { ProjectLinks } from "./ProjectLinks";

type Props = {
  project: ArduinoProject;
};

export function ArduinoProjectCard({ project }: Props) {
  const { title, tagline, description, status, wiringImage, demoUrl, skills, repoUrl } = project;

  return (
    <article className="project-card neon-panel">
      <div className="card-top">
        <div className="card-status">
          <StatusPill status={status} />
        </div>

        <h2 className="project-title">{title}</h2>
        <p className="project-tagline">{tagline}</p>
      </div>

      <WiringPreview title={title} wiringImage={wiringImage} demoUrl={demoUrl} />

      <p className="project-desc">{description}</p>

      <SkillChips skills={skills} />

      <ProjectLinks repoUrl={repoUrl} demoUrl={demoUrl} />
    </article>
  );
}
