import { Link } from "react-router-dom";
import "../styles/roboticsProject.css";

const base = import.meta.env.BASE_URL;

/*
=========================================
DATA (kept separate for clarity)
=========================================
*/

// Feature cards
const featureCards = [
  {
    title: "Offline Voice Interaction",
    description:
      "Sonny runs local speech recognition and speech output for hands-on demos without depending on the cloud.",
  },
  {
    title: "Facial Recognition + Memory",
    description:
      "Recognizes familiar people, stores simple profile data, and turns vision events into interactions.",
  },
  {
    title: "Modular Robotics Architecture",
    description:
      "Built as separate systems for vision, voice, memory, and movement so each piece can be tested and upgraded independently.",
  },
  {
    title: "Humanoid Demo Platform",
    description:
      "Designed as a real-world maker lab demo robot focused on presence, personality, and future body movement.",
  },
];

// Milestones
const milestones = [
  "Built on Raspberry Pi 4 with Arduino integration for future motion control",
  "Offline speech stack using Vosk + pyttsx3",
  "Camera-based facial recognition and person event handling",
  "JSON-based memory files for known people and interaction state",
  "Planned upgrades include jaw animation, tracking, and expanded physical motion",
];

// Tech stack
const techStack = [
  "Python",
  "Raspberry Pi 4",
  "Arduino Mega",
  "OpenCV",
  "face_recognition",
  "Vosk",
  "pyttsx3",
  "PiCamera2",
  "JSON",
  "Linux",
];

// Gallery
const sonnyGallery = [
  {
    src: `${base}images/sonny/lab.jpg`,
    alt: "Sonny workspace",
    title: "Development Environment",
    description: "Full robotics workspace and live build setup.",
  },
  {
    src: `${base}images/sonny/code.jpg`,
    alt: "Code setup",
    title: "Software Integration",
    description: "System architecture and active development.",
  },
  {
    src: `${base}images/sonny/engineering.jpg`,
    alt: "Hardware work",
    title: "Engineering",
    description: "Electronics and prototyping work.",
  },
  {
    src: `${base}images/sonny/proof.jpg`,
    alt: "Live demo",
    title: "Live Demo",
    description: "Sonny actively running.",
  },
];

/*
=========================================
COMPONENT
=========================================
*/

export default function SonnyPortfolioPage() {
  return (
    <main className="sonny-page">

      {/* =========================
          HERO SECTION
      ========================= */}
      <section className="sonny-hero">

        <div className="sonny-hero-grid">

          {/* LEFT SIDE (TEXT) */}
          <div className="sonny-hero-text">

            <p className="sonny-badge">Robotics Flagship Project</p>

            <h1>Sonny OS</h1>

            <p className="sonny-subtitle">
              Offline humanoid AI assistant built for real-world demos.
            </p>

            <p className="sonny-description">
              Sonny is my flagship robotics platform focused on offline AI interaction,
              facial recognition, memory, and modular system design.
            </p>

            <div className="sonny-buttons">
              <Link to="/robotics-projects" className="sonny-btn primary">
                Back to Projects
              </Link>

              <a
                href="https://github.com/Robotech83/Offline-Voice-Assistant"
                target="_blank"
                rel="noreferrer"
                className="sonny-btn secondary"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* RIGHT SIDE (IMAGE + STATUS) */}
          <div className="sonny-hero-right">

            {/* HERO IMAGE */}
            <div className="sonny-hero-container">
              <img
                src={`${base}images/sonny/hero.jpg`}
                alt="Sonny robot"
                className="sonny-hero-image"
              />
            </div>

            {/* STATUS CARD */}
            <div className="sonny-status-card">
              <h3>Project Status</h3>
              <p><strong>Status:</strong> Active Build</p>
              <p><strong>Platform:</strong> Humanoid Robotics</p>
              <p><strong>Focus:</strong> Voice, memory, recognition</p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          FEATURES
      ========================= */}
      <section className="sonny-section">

        <h2>What Sonny Does</h2>

        <div className="sonny-features-grid">
          {featureCards.map((card, index) => (
            <div key={`${card.title}-${index}`} className="sonny-card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

      </section>

      {/* =========================
          GALLERY
      ========================= */}
      <section className="sonny-section">

        <h2>Project Gallery</h2>

        <div className="sonny-gallery-grid">
          {sonnyGallery.map((item, index) => (
            <div key={`${item.title}-${index}`} className="sonny-card">

              <img
                src={item.src}
                alt={item.alt}
                className="sonny-gallery-image"
              />

              <div className="sonny-card-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* =========================
          VIDEO
      ========================= */}
      <section className="sonny-section">

        <h2>Live Demo</h2>

        <div className="sonny-video-container">
          <video controls>
            <source
              src={`${base}videos/sonny/demo.mp4`}
              type="video/mp4"
            />
          </video>
        </div>

      </section>

    </main>
  );
}