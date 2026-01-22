import JavaScriptProjectsScene from './JavaScriptProjectsScene';

import '../styles/skills.css';

interface Skill {
  name: string;
  link: string; // URL for the skill project/demo
}

export function Skills() {
  const skills: Skill[] = [
    { name: "Python", link: "https://github.com/yourusername/python-projects" },
    { name: "Linux", link: "https://github.com/yourusername/linux-scripts" },
    { name: "Bash", link: "https://github.com/yourusername/bash-scripts" },
    { name: "JavaScript", link: "https://github.com/yourusername/js-projects" },
    { name: "Arduino", link: "https://github.com/yourusername/arduino-projects" },
    { name: "React", link: "https://github.com/yourusername/react-projects" },
    { name: "Robotics", link: "https://github.com/yourusername/robotics" },
    { name: "Machine Vision", link: "https://github.com/yourusername/machine-vision" },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-groups">
        {skills.map((skill) => (
          <a
            key={skill.name}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="skill-chip"
          >
            {skill.name}
          </a>
        ))}
      </div>
    </section>
  );
}
