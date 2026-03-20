import { Link } from "react-router-dom";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Particle background */}
      <div className="particles"></div>

      {/* Circuit board overlay */}
      <div className="circuit-overlay"></div>

      {/* Robot silhouette */}
      <div className="robot-silhouette"></div>

      <div className="hero-content">
        <p className="hero-eyebrow">Flagship Project • Sonny OS</p>

        <h1 className="hero-title rgb-gradient neon-border">
          Keneshia Edwards
        </h1>

        <h2 className="hero-role">
          Robotics & Embedded Systems Developer
        </h2>

        <p className="hero-subtitle fade-in-delayed">
          I design and build robotics systems that combine embedded control,
          computer vision, offline voice interaction, and real-world hardware integration.
        </p>

        <p className="hero-subtitle-secondary">
          My flagship project, <strong>Sonny OS</strong>, is an offline humanoid robotics
          platform built for real-world demos using Raspberry Pi, Arduino-based controllers,
          facial recognition, memory, and modular system architecture.
        </p>
         <p className="hero-helper-text">
            Explore supporting systems and demos in the Control Hub.
        </p>

        <div className="hero-actions">
          <Link to="/robotics-projects/sonny-os" className="hero-button primary">
            View Sonny OS →
          </Link>

          <Link to="/control-hub" className="hero-button secondary">
            Enter Control Hub
          </Link>
        </div>

        <div className="hero-sonny-card">
          <p className="hero-featured-label">Featured Project</p>
          <h3>Sonny OS</h3>
          <p>
            Offline humanoid robotics platform with vision, voice interaction,
            memory, and expandable hardware control.
          </p>
        </div>
       
      </div>
      

      <button
        className="hero-scroll-btn"
        onClick={() => {
          const section = document.getElementById("dashboard");
          section?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        ↓ Explore Dashboard
      </button>
    </section>
  );
}