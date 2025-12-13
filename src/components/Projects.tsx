
import '../styles/project.css';

export function Projects() {
  const projects = [
    {
      name: "InMoov Humanoid Robot",
      github: "https://github.com/Robotech83/Offline-Voice-Assistant",
    },
    {
      name: "Face Recognition System",
      github: "https://github.com/yourusername/face-recognition",
    },
    {
      name: "Arduino Servo Controller",
      github: "https://github.com/yourusername/arduino-servo",
    },
    {
      name: "React Robot Dashboard",
      github: "https://github.com/yourusername/react-robot-dashboard",
    },
    {
      name: "Voice Assistant",
      github: "https://github.com/Robotech83/Sonny-Voice",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card neon-border"
          >
            <h3>{p.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}
