import { Link } from "react-router-dom";

import { BackButton } from "../components/BackButton";

import "../styles/controlhub.css";



export default function ControlHub() {
  return (
    <div className="control-hub-container">
      <h1 className="control-hub-title">Control Hub</h1>
      <p className="control-hub-subtitle">Select a module to begin</p>

       <BackButton />

      <div className="control-hub-grid">


        <Link to="/robotstudio" className="control-hub-card">
          <h2 className="control-hub-card-title">Virtual Robot Studio</h2>
          <p className="control-hub-card-text">3D Viewer + Movement Controls</p>
        </Link>

        <Link to="/object-scanner" className="control-hub-card">
          <h2 className="control-hub-card-title">Object Detection Studio</h2>
          <p className="control-hub-card-text">Real-time Object Scanner</p>
        </Link>



        <Link to="/sensors" className="control-hub-card">
          <h2 className="control-hub-card-title">Sensor Monitor</h2>
          <p className="control-hub-card-text">Real-time robot telemetry</p>
        </Link>

       <Link to="/AIAssistant" className="control-hub-card">
          <h2 className="control-hub-card-title">AI Assistant</h2>
          <p className="control-hub-card-text">Voice and text-based AI assistant</p>
        </Link>

       
        

      </div>

     
    </div>
  );
}
