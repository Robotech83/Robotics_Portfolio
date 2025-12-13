// pages/VoiceModule/CommandTrainerPage.tsx
import { Link } from "react-router-dom";

export default function CommandTrainerPage() {
  return (
    <div className="subpage">
      <Link to="/voice-module" className="back-btn">← Back</Link>

      <h1>Command Trainer</h1>

      <div className="panel">
        <label>New Command</label>
        <input type="text" placeholder="e.g. 'Sonny wave'" />
      </div>

      <div className="panel">
        <label>Response</label>
        <input type="text" placeholder="What should Sonny do?" />
      </div>

      <button className="save-btn">Add Command</button>
    </div>
  );
}
