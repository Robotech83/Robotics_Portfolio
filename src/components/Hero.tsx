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
        Robotics Developer & Python Engineer
      </h1>

      <p className="hero-subtitle fade-in-delayed">
        I build robots that see, talk, and move. Specializing in Python, Linux,
        Arduino, and computer vision.
      </p>

      {/* Hero button → Control Hub page */}
      <Link to="/control-hub" className="hero-button neon-hover">
        Enter Control Hub
      </Link>
    </section>
  );
}
