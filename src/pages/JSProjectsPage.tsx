/**
 * JSProjectsPage
 * --------------
 * Full page that showcases my Vanilla JavaScript projects.
 * Reached via the Skills → JavaScript button.
 */

import { useNavigate } from "react-router-dom";
import "../styles/jsProjectsScene.css";

import { JS_PROJECTS } from "../components/js/data/jsProjects";
import { JSHeader } from "../components/js/JSHeader";
import { JSProjectsGrid } from "../components/js/JSProjectsGrid";
import { JSFooter } from "../components/js/JSFooter";

export default function JSProjectsPage() {
  const navigate = useNavigate();

  return (
    <div className="jsScenePage">
      <JSHeader
        title="JavaScript Projects"
        subtitle="Vanilla JavaScript projects focused on DOM, logic, and browser APIs."
      />

      <main className="jsSceneBody">
        <JSProjectsGrid projects={JS_PROJECTS} />

        <button onClick={() => navigate(-1)}>← Back</button>

        <JSFooter text="These projects use vanilla JavaScript — no frameworks." />
      </main>
    </div>
  );
}
