import { useNavigate } from "react-router-dom";
import "../styles/skills.css";

const SKILLS = [
  { label: "Python", route: "/python-projects" },
  { label: "Linux", route: "/linux-projects" },
  { label: "Bash", route: "/bash-projects" },
  { label: "JavaScript", route: "/js-projects" },
  { label: "Arduino", route: "/arduino-projects" },
  { label: "React", route: "/react-projects" },
  { label: "Robotics", route: "/robotics-projects" },
  { label: "Machine Vision", route: "/vision-projects" },
];

export function Skills() {
  const navigate = useNavigate();

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-row">
        {SKILLS.map((skill) => (
          <button
            key={skill.label}
            className="skill-button"
            onClick={() => navigate(skill.route)}
            type="button"
          >
            {skill.label}
          </button>
        ))}
      </div>
    </section>
  );
}
