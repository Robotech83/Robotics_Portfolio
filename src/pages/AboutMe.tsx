import { BackButton } from "../components/BackButton";
import "../styles/aboutme.css";

export default function AboutMePage() {
  const imgPath = `${import.meta.env.BASE_URL}images/me/ObjectDetect.JPG`;

  return (
    <div className="about-page">
      <BackButton />

      <h1 className="about-title">About Me</h1>
      <p className="about-subtitle">
        Self-taught robotics developer building offline humanoid systems.
      </p>

      <section className="about-hero">
        <div className="holo-profile">
          <div className="holo-frame">
            <img
              src={imgPath}
              alt="Keneshia working on robotics"
              className="holo-img"
            />
            <div className="scanlines"></div>
          </div>
        </div>

        <div className="sonny-card">
          <p className="terminal-label">FLAGSHIP PROJECT</p>
          <h2>Sonny OS</h2>
          <p>
            An offline humanoid robotics platform built with Raspberry Pi,
            Arduino, computer vision, local memory, voice control, and servo
            motion systems.
          </p>
        </div>
      </section>

      <section className="about-content">
        <p>
          Hi, I'm Keneshia — a self-taught robotics builder, programmer, and
          creative engineer. I specialize in embedded systems, offline AI,
          computer vision, servo motion, and humanoid robotics.
        </p>

        <p>
          My biggest ongoing project is <strong>Sonny</strong>, a full InMoov
          humanoid robot built from scratch using Raspberry Pi, multiple
          Arduinos, PCA9685 servo controllers, and a completely offline voice,
          vision, memory, and motion system.
        </p>

        <p>
          I learn by building — wiring real circuits, debugging real failures,
          writing real code, and turning ideas into machines that actually move.
        </p>

        <p className="mission">
          My mission: <strong>create robotics that feel alive.</strong>
        </p>
      </section>

      <section className="status-panel">
        <h2>Sonny Build Status</h2>
        <div className="status-grid">
          <span>✓ Offline Voice System</span>
          <span>✓ Facial Recognition</span>
          <span>✓ Local Memory System</span>
          <span>✓ Vision Event System</span>
          <span>✓ Raspberry Pi Control Core</span>
          <span>✓ Arduino Servo Control</span>
          <span>⧗ Head / Eye / Jaw Motion</span>
          <span>⧗ Full Arm Motion</span>
          <span>⧗ Stable Power System</span>
        </div>
      </section>

      <section className="tech-stack">
        <h2>Tech Stack</h2>
        <div className="tech-grid">
          <span>Python</span>
          <span>Raspberry Pi</span>
          <span>Arduino</span>
          <span>OpenCV</span>
          <span>Vosk</span>
          <span>Linux</span>
          <span>PCA9685</span>
          <span>Servo Control</span>
          <span>Offline AI</span>
          <span>Face Recognition</span>
        </div>
      </section>

      <section className="architecture">
        <h2>System Architecture</h2>
        <div className="arch-flow">
          <div>Raspberry Pi 4</div>
          <span>↓</span>
          <div>Arduino Mega</div>
          <span>↓</span>
          <div>PCA9685 Servo Controllers</div>
          <span>↓</span>
          <div>Eyes / Jaw / Neck / Arms</div>
        </div>
      </section>

      <section className="stats-panel">
        <div className="stat-chip">5+ Robotics Systems Built</div>
        <div className="stat-chip">3D Printing & CAD</div>
        <div className="stat-chip">Servo Motion Engineering</div>
        <div className="stat-chip">Raspberry Pi & Arduino</div>
        <div className="stat-chip">Offline AI & Vision</div>
      </section>

      <section className="fun-fact">
        <h2>Fun Fact</h2>
        <p>
          Sonny currently runs on multiple Raspberry Pis, multiple Arduinos,
          servo controllers, custom Python scripts, local face recognition, and
          a rapidly growing pile of wires that only looks suspicious to people
          who lack vision.
        </p>
      </section>

      <section className="timeline">
        <h2 className="timeline-title">Robotics Journey</h2>

        <div className="timeline-item left">Started robotics exploration</div>
        <div className="timeline-item right">First Arduino servo project</div>
        <div className="timeline-item left">
          Face tracking + Pi → Arduino control
        </div>
        <div className="timeline-item right">InMoov humanoid build begins</div>
        <div className="timeline-item left">
          Offline voice assistant + vision system
        </div>
        <div className="timeline-item right">
          Robot Control Hub development
        </div>
      </section>
    </div>
  );
}