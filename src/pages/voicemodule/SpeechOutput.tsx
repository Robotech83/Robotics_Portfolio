// pages/VoiceModule/SpeechOutputPage.tsx
import { Link } from "react-router-dom";

export default function SpeechOutputPage() {
  return (
    <div className="subpage">
      <Link to="/voice-module" className="back-btn">← Back</Link>

      <h1>Speech Output</h1>

      <div className="panel">
        <label>Voice Pitch</label>
        <input type="range" min="0" max="2" step="0.1" />
      </div>

      <div className="panel">
        <label>Voice Speed</label>
        <input type="range" min="0.5" max="2" step="0.1" />
      </div>

      <div className="panel">
        <label>Voice Personality</label>
        <select>
          <option>Default</option>
          <option>Friendly</option>
          <option>Sarcastic</option>
          <option>Robot Butler</option>
        </select>
      </div>

      <button className="save-btn">Save</button>
    </div>
  );
}
