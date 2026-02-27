// src/components/labnotebook/LabNotebook.tsx
// Purpose: show short, structured "engineering log" entries on the homepage.

import "../../styles/labnotebook.css";

import LabHeader from "./LabHeader";
import LabPanel from "./LabPanel";
import { labEntries } from "./LabEntryCard";

export function LabNotebook() {
  return (
    <section className="lab-section" id="lab">
      <LabHeader
        title="Robotics Lab Notebook"
        subtitle="Short experiment logs — what I tried, what broke, what I learned."
      />

      <LabPanel entries={labEntries} />
    </section>
  );
}
