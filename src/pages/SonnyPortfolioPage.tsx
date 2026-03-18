import { Link } from "react-router-dom";
import "../styles/sonnyPortfolio.css";
import { useNavigate } from "react-router-dom";

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

 //Milestones
const milestones = [
  "Raspberry Pi 4 core system with planned Arduino motion integration",
  "Offline speech pipeline using Vosk and pyttsx3",
  "Facial recognition with person event handling",
  "JSON-based memory and interaction state storage",
  "Next phase: jaw animation, tracking, and expanded movement",
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
  const navigate = useNavigate();
  return (
    <main className="sonny-page">

      <button
  className="back-btn"
  onClick={() => navigate("/robotics-projects")}
>
  ← Back
</button>

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
  Offline humanoid robotics platform for real-world demos and future motion control.
</p>

            <p className="sonny-description">
              Sonny is my flagship robotics platform focused on offline AI interaction,
              facial recognition, memory, and modular system design.
            </p>
            <div className="sonny-quickstats">
  <div className="sonny-quickstat">
    <span className="sonny-quickstat-label">Platform</span>
    <strong>Raspberry Pi 4</strong>
  </div>
  <div className="sonny-quickstat">
    <span className="sonny-quickstat-label">Mode</span>
    <strong>Offline AI</strong>
  </div>
  <div className="sonny-quickstat">
    <span className="sonny-quickstat-label">Focus</span>
    <strong>Vision + Voice</strong>
  </div>
</div>

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
        HOW IT WORKS
      ========================= */}
  <section className="sonny-section">

    <h2>How Sonny Works</h2>

    <div className="sonny-card">
      <p>
      Sonny is built as a modular robotics system where each subsystem communicates
      through lightweight event data. This allows vision, voice, and memory to operate
      independently while still working together in real time.
    </p>

    <div className="sonny-architecture">
      <p><strong>System Flow:</strong></p>

      <ul>
        <li>📷 Camera captures image → OpenCV processes face detection</li>
        <li>🧠 Face recognized → system generates <code>vision_event.json</code></li>
        <li>💬 Chat system reads event → determines response</li>
        <li>🔊 Text-to-Speech (TTS) generates voice output</li>
        <li>🤖 (Future) Arduino controls mouth movement for lip sync</li>
      </ul>
    </div>

    <p>
      This event-driven architecture makes Sonny flexible, scalable, and capable
      of running fully offline on limited hardware like a Raspberry Pi.
    </p>
  </div>

</section>
<section className="sonny-section">
  <h2>Current Build Focus</h2>

  <div className="sonny-features-grid">
    <div className="sonny-card">
      <h3>Vision Pipeline</h3>
      <p>Face detection, recognition events, and person-aware interactions.</p>
    </div>

    <div className="sonny-card">
      <h3>Voice Pipeline</h3>
      <p>Offline speech recognition and speech output for live demo interaction.</p>
    </div>

    <div className="sonny-card">
      <h3>Memory System</h3>
      <p>JSON-based identity and interaction storage for persistent behavior.</p>
    </div>

    <div className="sonny-card">
      <h3>Next Hardware Step</h3>
      <p>Arduino-driven mouth motion, face tracking, and future physical expression.</p>
    </div>
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
    TECH STACK
========================= */}
<section className="sonny-section">
  <h2>Tech Stack</h2>

  <div className="sonny-tech-grid">
    {techStack.map((tech) => (
      <div key={tech} className="sonny-tech-pill">
        {tech}
      </div>
    ))}
  </div>
</section>

{/* =========================
    MILESTONES
========================= */}
<section className="sonny-section">
  <h2>Development Milestones</h2>

  <div className="sonny-milestones">
    {milestones.map((item, index) => (
      <div key={`${item}-${index}`} className="sonny-milestone-item">
        {item}
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