import { useState } from 'react';
import '../styles/labnotebook.css';

interface Note {
  title: string;
  details: string;
}

export function LabNotebook() {
  const notes: Note[] = [
    { title: "", details: "Diagrams for Arduino Mega → PCA9685 wiring." },
    { title: "Pi → Arduino Comm", details: "Serial communication setup between Raspberry Pi and Arduino." },
    { title: "Face Recognition Pipeline", details: "How camera input is processed and analyzed for detection." },
    { title: "Power Distribution", details: "Battery setup, voltage regulation, and distribution notes." },
  ];

  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="lab-section" id="lab">
      <h2 className="section-title">Robotics Lab Notebook</h2>
      <div className="notes-grid">
        {notes.map((note, index) => (
          <div 
            key={note.title} 
            className={`note-card ${expanded === index ? "expanded" : ""}`}
            onClick={() => setExpanded(expanded === index ? null : index)}
          >
            <h3>{note.title}</h3>
            {expanded === index && <p>{note.details}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
