import { Link } from 'react-router-dom';
import '../styles/hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
   {/* Particle background */}
      <div className="particles"></div>

      {/* Circuit board overlay */}
      <div className="circuit-overlay"></div>

      {/* Robot silhouette */}
      <div className="robot-silhouette"></div>

      {/* Hero content */}
      <h1 className="hero-title rgb-gradient neon-border">
        Keneshia Edwards <br />
        Robotics & Embedded Systems Developer
      </h1>

      <p className="hero-subtitle fade-in-delayed">
        I design and build robotic systems that integrate embedded firmware,
        distributed microcontrollers, and real-world electromechanical hardware.
        
        Current flagship project: Sonny — a distributed humanoid robotics platform
        powered by Raspberry Pi, ESP32, and Arduino controllers.
      </p>

      {/* Hero button → Control Hub page */}
      <Link to="/control-hub" className="hero-button neon-hover">
        Enter Control Hub
      </Link>
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
