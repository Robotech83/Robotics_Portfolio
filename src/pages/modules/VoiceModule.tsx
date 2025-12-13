// pages/VoiceModule/VoiceModule.tsx
import { Link } from "react-router-dom";
import "../../styles/modules/voicemodule.css";
import { BackButton } from "../../components/BackButton";

export default function VoiceModule() {
  return (
    <div className="voice-module-page">

      <BackButton />

      <h1 className="vm-title">Voice Control Module</h1>
      <p className="vm-subtitle">
        Manage wake-word detection, speech output, and command training.
      </p>

      <div className="vm-card-container">

        <Link to="/voice/wakeword" className="vm-card">
          <h2>Wake-Word Settings</h2>
          <p>Configure recognition engine and microphone settings.</p>
        </Link>

        <Link to="/voice/tts" className="vm-card">
          <h2>Speech Output</h2>
          <p>Control voice type, speed, pitch, and TTS engine.</p>
        </Link>

        <Link to="/voice/commands" className="vm-card">
          <h2>Command Trainer</h2>
          <p>Teach Sonny new commands and behaviors.</p>
        </Link>

      </div>
    </div>
  );
}
