import { useState } from "react";
import ObjectDetectionCanvas from "../components/ObjectDectection/ObjectDetectionCanvas"; // Fixed import path
import "../styles/objectdetect.css";
//import { BackButton } from "../components/BackButton";
import { ControlHubButton } from "../components/ControlHubButton";

export default function ObjectScanner() {
  const [mode, setMode] = useState<"kitchen" | "clothing">("kitchen");

  return (
    <div className="detect-page"> {/* Changed from scanner-page */}
      <h1 className="detect-title">AI Object Scanner</h1> {/* Changed from scanner-title */}

      <div className="mode-buttons">
        <button 
          className={mode === "kitchen" ? "mode-btn active" : "mode-btn"}
          onClick={() => setMode("kitchen")}
        >
          🍽 Kitchen
        </button>

        <button 
          className={mode === "clothing" ? "mode-btn active" : "mode-btn"}
          onClick={() => setMode("clothing")}
        >
          👕 Clothing
        </button>
      </div>

      <ControlHubButton />
      {/* Detection Window */}
      <ObjectDetectionCanvas 
        title={mode === "kitchen" ? "DishFinder — Kitchen Mode" : "FitFinder — Clothing Mode"}
        highlightColor={mode === "kitchen" ? "#00ffc8" : "#ff00ff"}
      />
    </div>
  );
}