// pages/VoiceModule/WakeWordPage.tsx
import { Link } from "react-router-dom";

export default function WakeWordPage() {
  return (
    <div className="subpage">
      <Link to="/voice-module" className="back-btn">← Back</Link>

      <h1>Wake-Word Settings</h1>

      <div className="panel">
        <label>Wake Word</label>
        <input type="text" placeholder="e.g. 'Hey Sonny'" />
      </div>

      <div className="panel">
        <label>Engine</label>
        <select>
          <option>Mycroft Precise</option>
          <option>PocketSphinx</option>
          <option>Vosk (Keyword Mode)</option>
        </select>
      </div>

      <button className="save-btn">Save Settings</button>
    </div>
  );
}
