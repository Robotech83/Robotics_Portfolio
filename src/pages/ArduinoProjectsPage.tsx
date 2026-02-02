import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/arduinoprojects.css";

import { arduinoProjects } from "../components/arduino/data/arduinoProjects";
import type { FilterValue } from "../components/arduino/ProjectsFilterBar";

import { ArduinoHeader } from "../components/arduino/ArduinoHeader";
import { ProjectsFilterBar } from "../components/arduino/ProjectsFilterBar";
import { ProjectsGrid } from "../components/arduino/ProjectsGrid";
import { ArduinoFooter } from "../components/arduino/ArduinoFooter";

export default function ArduinoProjectsPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<FilterValue>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return arduinoProjects;
    return arduinoProjects.filter((p) => p.status === filter);
  }, [filter]);

  return (
    <div className="arduino-page">
      <button onClick={() => navigate(-1)}>← Back</button>

      <ArduinoHeader
        title="Arduino Projects"
        subtitle="Hardware robotics builds — real I2C, real servos, real debugging."
      />

      <ProjectsFilterBar
        filter={filter}
        onChange={setFilter}
        hint="Tip: Add a wiring photo + 10s demo clip for each project to make it “real” instantly."
      />

      <ProjectsGrid projects={filtered} />

      <ArduinoFooter text="Next: add wiring photo + 10s demo clip to Sonny Hand, then update the placeholders." />
    </div>
  );
}
