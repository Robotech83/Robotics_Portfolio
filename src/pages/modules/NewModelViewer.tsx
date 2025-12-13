// ModelViewer.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import React, { Suspense, useState, useRef } from "react";

// Import Components
import Floor from "../../components/modelviewer/Floor";
import GridHelper from "../../components/modelviewer/GridHelper";
import ModelImportSection from "../../components/modelviewer/ModelImportSection";
import ThreeDScene from "../../components/modelviewer/ThreeDScene";

// Import CSS for styling
import '../../styles/modules/modelviewer.css';

// Define viewer settings type
interface ViewerSettings {
  showGrid: boolean;           // Whether to show the grid helper
  showShadows: boolean;        // Whether to render shadows
  showAxes: boolean;           // Whether to show XYZ axes helper
  showReflections: boolean;    // Whether to enable reflections on floor
  wireframe: boolean;          // Whether to render model in wireframe mode
  ambientLightIntensity: number; // Global ambient light brightness
  directionalLightIntensity: number; // Directional light brightness
  backgroundColor: string;     // Canvas background color
}

/* -------------------------------
   Main Viewer Component
--------------------------------*/
export default function ModelViewer() {
  // File input reference for model import - using non-null assertion
  const fileInputRef = useRef<HTMLInputElement>(null!);
  
  // State for model information
  const [modelName, setModelName] = useState<string>("Sonny.glb");
  
  // State for viewer settings with default values
  const [viewerSettings, setViewerSettings] = useState<ViewerSettings>({
    showGrid: true,           // Grid visible by default
    showShadows: true,        // Shadows enabled by default
    showAxes: false,          // Axes helper hidden by default
    showReflections: false,   // Reflections disabled by default
    wireframe: false,         // Solid rendering by default
    ambientLightIntensity: 0.4, // Moderate ambient light
    directionalLightIntensity: 1, // Standard directional light
    backgroundColor: "#000000", // Black background
  });

  // State for model transformations
  const [modelScale, setModelScale] = useState<number>(3); // Initial scale factor
  const [modelRotation, setModelRotation] = useState({
    x: 0,     // Rotation around X-axis in degrees
    y: 25,   // Rotation around Y-axis in degrees (-30 faces slightly left)
    z: 0      // Rotation around Z-axis in degrees
  });
  const [modelPosition, setModelPosition] = useState({
    x: -1.5,  // X position in world space
    y: -1.4,  // Y position (negative = below ground plane)
    z: 0      // Z position (depth)
  });

  // Handle model file import
  const handleFileImport = (file: File) => {
    setModelName(file.name); // Update displayed model name
    // In a real implementation, you would:
    // 1. Upload file to server or convert to blob URL
    // 2. Update ThreeDScene to use the new model
    // 3. Possibly reset transformations to defaults
    console.log("Importing model:", file.name);
    // Future enhancement: Actual model loading logic
  };

  // Toggle boolean settings (grid, shadows, etc.)
  const toggleSetting = (setting: keyof ViewerSettings) => {
    setViewerSettings(prev => ({
      ...prev, // Copy existing settings
      [setting]: !prev[setting] // Toggle the specific setting
    }));
  };

  // Update light intensity (ambient or directional)
  const updateLightIntensity = (light: 'ambient' | 'directional', value: number) => {
    if (light === 'ambient') {
      setViewerSettings(prev => ({ ...prev, ambientLightIntensity: value }));
    } else {
      setViewerSettings(prev => ({ ...prev, directionalLightIntensity: value }));
    }
  };

  return (
    <div className="model-viewer-module">
      {/* Main container with CSS class for styling */}
      <div className="viewer-title">
        <h2>3D Model Viewer</h2>
        
        {/* 
          RIGHT PANEL - 3D Canvas 
          This is placed inside viewer-title for layout positioning
        */}
        <div className="canvas-container">
          {/* Canvas wrapper with cyberpunk styling */}
          <div
            className="canvas-wrapper"
            style={{
              border: "2px solid #00ffc8", // Neon cyan border
              borderRadius: "12px", // Rounded corners
              overflow: "hidden", // Clip content to border radius
              boxShadow: "0 0 20px #00ffc8", // Glow effect
              background: viewerSettings.backgroundColor, // Dynamic background
              height: "600px", // Fixed height
              width: "100%" // Full width of container
            }}
          >
            {/* 
              ThreeDScene component - Renders the 3D environment
              Props:
                - viewerSettings: All display/lighting settings
                - modelScale: Current scale of the model
                - modelRotation: Current rotation in degrees
                - modelPosition: Current position in 3D space
            */}
            <ThreeDScene
              viewerSettings={viewerSettings}
              modelScale={modelScale}
              modelRotation={modelRotation}
              modelPosition={modelPosition}
            />
          </div>

          {/* 
            LEFT PANEL - Controls 
            Note: The layout here has controls below the canvas
          */}
          <div className="viewer-layout">
            {/* Control panel container */}
            <div className="control-panel">
              {/* 
                ModelImportSection component
                Props:
                  - fileInputRef: Reference to hidden file input
                  - modelName: Current model name to display
                  - onFileImport: Callback when user selects a file
              */}
              <ModelImportSection
                fileInputRef={fileInputRef}
                modelName={modelName}
                onFileImport={handleFileImport}
              />

              {/* Display Settings Section */}
              <div className="control-section">
                <h4>Display Settings</h4>
                
                {/* Toggle switches for boolean settings */}
                <div className="toggle-group">
                  <label className="toggle-item">
                    <input
                      type="checkbox"
                      checked={viewerSettings.showGrid}
                      onChange={() => toggleSetting('showGrid')}
                    />
                    <span>Show Grid</span>
                  </label>
                  
                  <label className="toggle-item">
                    <input
                      type="checkbox"
                      checked={viewerSettings.showShadows}
                      onChange={() => toggleSetting('showShadows')}
                    />
                    <span>Show Shadows</span>
                  </label>
                  
                  <label className="toggle-item">
                    <input
                      type="checkbox"
                      checked={viewerSettings.showAxes}
                      onChange={() => toggleSetting('showAxes')}
                    />
                    <span>Show Axes</span>
                  </label>
                  
                  <label className="toggle-item">
                    <input
                      type="checkbox"
                      checked={viewerSettings.showReflections}
                      onChange={() => toggleSetting('showReflections')}
                    />
                    <span>Show Reflections</span>
                  </label>
                  
                  <label className="toggle-item">
                    <input
                      type="checkbox"
                      checked={viewerSettings.wireframe}
                      onChange={() => toggleSetting('wireframe')}
                    />
                    <span>Wireframe Mode</span>
                  </label>
                </div>

                {/* Sliders for light intensity control */}
                <div className="slider-group">
                  <div className="slider-item">
                    <label>Ambient Light: {viewerSettings.ambientLightIntensity.toFixed(1)}</label>
                    <input
                      type="range"
                      min="0"
                      max="2"
                      step="0.1"
                      value={viewerSettings.ambientLightIntensity}
                      onChange={(e) => updateLightIntensity('ambient', parseFloat(e.target.value))}
                    />
                  </div>
                  
                  <div className="slider-item">
                    <label>Directional Light: {viewerSettings.directionalLightIntensity.toFixed(1)}</label>
                    <input
                      type="range"
                      min="0"
                      max="5"
                      step="0.1"
                      value={viewerSettings.directionalLightIntensity}
                      onChange={(e) => updateLightIntensity('directional', parseFloat(e.target.value))}
                    />
                  </div>
                </div>

                {/* Model Transformation Controls */}
                <div className="transform-controls">
                  <h4>Transform Controls</h4>
                  
                  <div className="transform-group">
                    {/* Scale control - adjusts model size */}
                    <div className="transform-item">
                      <label>Scale: {modelScale.toFixed(1)}</label>
                      <input
                        type="range"
                        min="0.1"
                        max="10"
                        step="0.1"
                        value={modelScale}
                        onChange={(e) => setModelScale(parseFloat(e.target.value))}
                      />
                    </div>
                    
                    {/* Rotation X control - tilts model forward/backward */}
                    <div className="transform-item">
                      <label>Rotation X: {modelRotation.x}°</label>
                      <input
                        type="range"
                        min="-180"
                        max="180"
                        step="1"
                        value={modelRotation.x}
                        onChange={(e) => setModelRotation(prev => ({ ...prev, x: parseInt(e.target.value) }))}
                      />
                    </div>
                    
                    {/* Rotation Y control - rotates model left/right (yaw) */}
                    <div className="transform-item">
                      <label>Rotation Y: {modelRotation.y}°</label>
                      <input
                        type="range"
                        min="-180"
                        max="180"
                        step="1"
                        value={modelRotation.y}
                        onChange={(e) => setModelRotation(prev => ({ ...prev, y: parseInt(e.target.value) }))}
                      />
                    </div>
                    
                    {/* Rotation Z control - tilts model side-to-side (roll) */}
                    <div className="transform-item">
                      <label>Rotation Z: {modelRotation.z}°</label>
                      <input
                        type="range"
                        min="-180"
                        max="180"
                        step="1"
                        value={modelRotation.z}
                        onChange={(e) => setModelRotation(prev => ({ ...prev, z: parseInt(e.target.value) }))}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Color Picker */}
              <div className="control-section">
                <h4>Background Color</h4>
                <input
                  type="color"
                  value={viewerSettings.backgroundColor}
                  onChange={(e) => setViewerSettings(prev => ({ ...prev, backgroundColor: e.target.value }))}
                  className="color-picker"
                />
              </div>
            </div>  
          </div>
          
          {/* Canvas Information Footer */}
          <div className="canvas-info">
            {/* Instructions for user interaction */}
            <p>Use mouse to orbit, scroll to zoom, right-click to pan</p>
            {/* Live display of current transform values */}
            <div className="info-tags">
              <span className="info-tag">Scale: {modelScale.toFixed(1)}</span>
              <span className="info-tag">Rotation: ({modelRotation.x}°, {modelRotation.y}°, {modelRotation.z}°)</span>
              <span className="info-tag">Position: ({modelPosition.x.toFixed(1)}, {modelPosition.y.toFixed(1)}, {modelPosition.z.toFixed(1)})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}