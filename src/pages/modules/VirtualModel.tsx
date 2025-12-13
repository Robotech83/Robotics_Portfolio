import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ThreeDScene from '../../components/modelviewer/ThreeDScene';
import '../../styles/modules/virtualmodel.css';
import { ControlHubButton } from '../../components/ControlHubButton';

// Define the interface for viewer settings to ensure type safety
interface ViewerSettings {
  showGrid: boolean;           // Toggle for grid display
  showShadows: boolean;        // Toggle for shadow rendering
  showAxes: boolean;           // Toggle for coordinate axes display
  showReflections: boolean;    // Toggle for reflection effects
  wireframe: boolean;          // Toggle for wireframe rendering mode
  ambientLightIntensity: number; // Intensity of ambient (global) light
  directionalLightIntensity: number; // Intensity of directional (sun-like) light
  backgroundColor: string;     // Background color of the 3D canvas
}

export default function VirtualModel() {
  // Initialize navigation hook for programmatic routing
  const navigate = useNavigate();
  
  // Create a ref for the hidden file input element
  const fileInputRef = useRef<HTMLInputElement>(null!);
  
  // State for tracking current model name
  const [modelName, setModelName] = useState<string>("Sonny.glb");
  
  // State for all viewer display settings with default values
  const [viewerSettings, setViewerSettings] = useState<ViewerSettings>({
    showGrid: true,           // Grid visible by default
    showShadows: true,        // Shadows enabled by default
    showAxes: false,          // Axes hidden by default
    showReflections: false,   // Reflections disabled by default
    wireframe: false,         // Solid rendering mode by default
    ambientLightIntensity: 0.4, // Moderate ambient light
    directionalLightIntensity: 1, // Standard directional light
    backgroundColor: "#000000", // Black background by default
  });

  // State for model transformation properties
  const [modelScale, setModelScale] = useState<number>(3); // Default scale factor
  const [modelRotation, setModelRotation] = useState({
    x: 0,   // Rotation around X-axis (pitch) in degrees
    y: 25,  // Rotation around Y-axis (yaw) in degrees - angled for better view
    z: 0    // Rotation around Z-axis (roll) in degrees
  });
  const [modelPosition, setModelPosition] = useState({
    x: 0,      // X position in 3D space
    y: -1.4,   // Y position (negative means slightly below ground)
    z: 0       // Z position (depth)
  });

  // State for active control panel tab
  const [activeTab, setActiveTab] = useState<'transform' | 'display' | 'lighting'>('transform');

  /**
   * Handles importing a new 3D model file
   * @param {File} file - The uploaded model file
   */
  const handleFileImport = (file: File) => {
    setModelName(file.name); // Update displayed model name
    console.log("Importing model:", file.name);
    // Note: In a production app, you would add logic here to:
    // 1. Upload the file to a server
    // 2. Convert to a blob URL
    // 3. Update the ThreeDScene component to use the new model
  };

  /**
   * Toggles a boolean setting in viewerSettings
   * @param {keyof ViewerSettings} setting - The setting key to toggle
   */
  const toggleSetting = (setting: keyof ViewerSettings) => {
    setViewerSettings(prev => ({
      ...prev, // Spread existing settings
      [setting]: !prev[setting] // Toggle the specified setting
    }));
  };

  /**
   * Resets all model settings to their default values
   */
  const resetModel = () => {
    setModelScale(3); // Reset to default scale
    setModelRotation({ x: 0, y: 25, z: 0 }); // Reset to default rotation
    setModelPosition({ x: 0, y: -1.4, z: 0 }); // Reset to default position
    setViewerSettings(prev => ({
      ...prev, // Keep other settings
      backgroundColor: "#000000" // Reset background to black
    }));
  };

  return (
    <div className="virtual-model-top">
      {/* ===================== HEADER SECTION ===================== */}
      {/* Contains navigation and reset controls */}
      <div className="vm-header-top">
        {/* Back button to return to Control Hub */}
        <ControlHubButton />

        
        {/* Center section with title and model name */}
        <div className="header-center-top">
          <h1>VIRTUAL MODEL</h1>
          <p className="model-name-display-top">{modelName}</p>
        </div>
        
        {/* Reset button to restore all default settings */}
        <button className="reset-btn-top" onClick={resetModel}>
          Reset All
        </button>
      </div>

      {/* ===================== MAIN VIEWER SECTION ===================== */}
      {/* Primary 3D visualization area at the top of the page */}
      <div className="main-viewer-section">
        {/* Container for the 3D scene component */}
        <div className="viewer-container-top">
          {/* ThreeDScene renders the actual 3D environment with the model */}
          <ThreeDScene
            viewerSettings={viewerSettings}   // Pass all display settings
            modelScale={modelScale}           // Pass current scale
            modelRotation={modelRotation}     // Pass current rotation
            modelPosition={modelPosition}     // Pass current position
          />
        </div>
        
        {/* Statistics bar displayed below the 3D viewer */}
        <div className="viewer-stats-top">
          <div className="stats-grid">
            {/* Scale statistic display */}
            <div className="stat-card">
              <span className="stat-label-top">SCALE</span>
              <span className="stat-value-top">{modelScale.toFixed(2)}</span>
            </div>
            
            {/* Rotation statistics display */}
            <div className="stat-card">
              <span className="stat-label-top">ROTATION</span>
              <span className="stat-value-top">
                X: {modelRotation.x}° | Y: {modelRotation.y}° | Z: {modelRotation.z}°
              </span>
            </div>
            
            {/* Position statistics display */}
            <div className="stat-card">
              <span className="stat-label-top">POSITION</span>
              <span className="stat-value-top">
                X: {modelPosition.x.toFixed(2)} | Y: {modelPosition.y.toFixed(2)} | Z: {modelPosition.z.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== CONTROLS PANEL SECTION ===================== */}
      {/* Contains all control inputs organized in tabs */}
      <div className="vm-layout-top">
        
        {/* Left side - Tabbed control interface */}
        <div className="vm-controls-top">
          {/* Tab navigation buttons */}
          <div className="control-tabs-top">
            {/* Transform tab - for position, rotation, and scale controls */}
            <button 
              className={`tab-btn-top ${activeTab === 'transform' ? 'active' : ''}`}
              onClick={() => setActiveTab('transform')}
            >
              <span className="tab-icon">⚙️</span>
              <span>Transform</span>
            </button>
            
            {/* Display tab - for visual toggles (grid, shadows, etc.) */}
            <button 
              className={`tab-btn-top ${activeTab === 'display' ? 'active' : ''}`}
              onClick={() => setActiveTab('display')}
            >
              <span className="tab-icon">👁️</span>
              <span>Display</span>
            </button>
            
            {/* Lighting tab - for light intensity and background controls */}
            <button 
              className={`tab-btn-top ${activeTab === 'lighting' ? 'active' : ''}`}
              onClick={() => setActiveTab('lighting')}
            >
              <span className="tab-icon">💡</span>
              <span>Lighting</span>
            </button>
          </div>

          {/* Content area that changes based on active tab */}
          <div className="tab-content-top">
            
            {/* ========== TRANSFORM TAB CONTENT ========== */}
            {activeTab === 'transform' && (
              <div className="tab-panel-top">
                {/* Scale control section */}
                <div className="control-section">
                  <h4>Model Transform</h4>
                  <div className="control-group-top">
                    <div className="slider-control">
                      <div className="slider-header">
                        <label>Scale</label>
                        <span className="slider-value">{modelScale.toFixed(1)}</span>
                      </div>
                      <input
                        type="range"
                        min="0.1"
                        max="10"
                        step="0.1"
                        value={modelScale}
                        onChange={(e) => setModelScale(parseFloat(e.target.value))}
                      />
                    </div>
                  </div>
                  
                  {/* Position controls (X, Y, Z) */}
                  <div className="control-group-top">
                    <h5>Position</h5>
                    <div className="vector-controls-top">
                      {/* X-axis position control */}
                      <div className="axis-control">
                        <span className="axis-label">X</span>
                        <input
                          type="range"
                          min="-5"
                          max="5"
                          step="0.1"
                          value={modelPosition.x}
                          onChange={(e) => setModelPosition(prev => ({ ...prev, x: parseFloat(e.target.value) }))}
                        />
                        <span className="axis-value">{modelPosition.x.toFixed(1)}</span>
                      </div>
                      
                      {/* Y-axis position control */}
                      <div className="axis-control">
                        <span className="axis-label">Y</span>
                        <input
                          type="range"
                          min="-3"
                          max="3"
                          step="0.1"
                          value={modelPosition.y}
                          onChange={(e) => setModelPosition(prev => ({ ...prev, y: parseFloat(e.target.value) }))}
                        />
                        <span className="axis-value">{modelPosition.y.toFixed(1)}</span>
                      </div>
                      
                      {/* Z-axis position control */}
                      <div className="axis-control">
                        <span className="axis-label">Z</span>
                        <input
                          type="range"
                          min="-5"
                          max="5"
                          step="0.1"
                          value={modelPosition.z}
                          onChange={(e) => setModelPosition(prev => ({ ...prev, z: parseFloat(e.target.value) }))}
                        />
                        <span className="axis-value">{modelPosition.z.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Rotation controls (X, Y, Z) */}
                  <div className="control-group-top">
                    <h5>Rotation</h5>
                    <div className="vector-controls-top">
                      {/* X-axis rotation control */}
                      <div className="axis-control">
                        <span className="axis-label">X</span>
                        <input
                          type="range"
                          min="-180"
                          max="180"
                          step="1"
                          value={modelRotation.x}
                          onChange={(e) => setModelRotation(prev => ({ ...prev, x: parseInt(e.target.value) }))}
                        />
                        <span className="axis-value">{modelRotation.x}°</span>
                      </div>
                      
                      {/* Y-axis rotation control */}
                      <div className="axis-control">
                        <span className="axis-label">Y</span>
                        <input
                          type="range"
                          min="-180"
                          max="180"
                          step="1"
                          value={modelRotation.y}
                          onChange={(e) => setModelRotation(prev => ({ ...prev, y: parseInt(e.target.value) }))}
                        />
                        <span className="axis-value">{modelRotation.y}°</span>
                      </div>
                      
                      {/* Z-axis rotation control */}
                      <div className="axis-control">
                        <span className="axis-label">Z</span>
                        <input
                          type="range"
                          min="-180"
                          max="180"
                          step="1"
                          value={modelRotation.z}
                          onChange={(e) => setModelRotation(prev => ({ ...prev, z: parseInt(e.target.value) }))}
                        />
                        <span className="axis-value">{modelRotation.z}°</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Model import button */}
                  <div className="model-import-section">
                    <button
                      className="import-btn-top"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      Import 3D Model
                    </button>
                    {/* Hidden file input triggered by the button */}
                    <input
                      ref={fileInputRef}
                      type="file"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileImport(file);
                      }}
                      accept=".glb,.gltf,.obj,.fbx,.stl"
                      style={{ display: "none" }}
                    />
                    <p className="file-hint">Supports: .glb, .gltf, .obj, .fbx, .stl</p>
                  </div>
                </div>
              </div>
            )}

            {/* ========== DISPLAY TAB CONTENT ========== */}
            {activeTab === 'display' && (
              <div className="tab-panel-top">
                <div className="control-section">
                  <h4>Visual Settings</h4>
                  <div className="toggle-grid-top">
                    {/* Grid toggle */}
                    <label className="toggle-item-top">
                      <input
                        type="checkbox"
                        checked={viewerSettings.showGrid}
                        onChange={() => toggleSetting('showGrid')}
                      />
                      <span>Show Grid</span>
                    </label>
                    
                    {/* Shadows toggle */}
                    <label className="toggle-item-top">
                      <input
                        type="checkbox"
                        checked={viewerSettings.showShadows}
                        onChange={() => toggleSetting('showShadows')}
                      />
                      <span>Show Shadows</span>
                    </label>
                    
                    {/* Axes toggle */}
                    <label className="toggle-item-top">
                      <input
                        type="checkbox"
                        checked={viewerSettings.showAxes}
                        onChange={() => toggleSetting('showAxes')}
                      />
                      <span>Show Axes</span>
                    </label>
                    
                    {/* Reflections toggle */}
                    <label className="toggle-item-top">
                      <input
                        type="checkbox"
                        checked={viewerSettings.showReflections}
                        onChange={() => toggleSetting('showReflections')}
                      />
                      <span>Show Reflections</span>
                    </label>
                    
                    {/* Wireframe mode toggle */}
                    <label className="toggle-item-top">
                      <input
                        type="checkbox"
                        checked={viewerSettings.wireframe}
                        onChange={() => toggleSetting('wireframe')}
                      />
                      <span>Wireframe Mode</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* ========== LIGHTING TAB CONTENT ========== */}
            {activeTab === 'lighting' && (
              <div className="tab-panel-top">
                <div className="control-section">
                  <h4>Lighting & Environment</h4>
                  
                  {/* Ambient light intensity control */}
                  <div className="control-group-top">
                    <div className="slider-control">
                      <div className="slider-header">
                        <label>Ambient Light</label>
                        <span className="slider-value">{viewerSettings.ambientLightIntensity.toFixed(1)}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="2"
                        step="0.1"
                        value={viewerSettings.ambientLightIntensity}
                        onChange={(e) => setViewerSettings(prev => ({ 
                          ...prev, 
                          ambientLightIntensity: parseFloat(e.target.value) 
                        }))}
                      />
                    </div>
                  </div>
                  
                  {/* Directional light intensity control */}
                  <div className="control-group-top">
                    <div className="slider-control">
                      <div className="slider-header">
                        <label>Directional Light</label>
                        <span className="slider-value">{viewerSettings.directionalLightIntensity.toFixed(1)}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="5"
                        step="0.1"
                        value={viewerSettings.directionalLightIntensity}
                        onChange={(e) => setViewerSettings(prev => ({ 
                          ...prev, 
                          directionalLightIntensity: parseFloat(e.target.value) 
                        }))}
                      />
                    </div>
                  </div>
                  
                  {/* Background color picker */}
                  <div className="color-picker-top">
                    <label>Background Color</label>
                    <div className="color-picker-row-top">
                      <input
                        type="color"
                        value={viewerSettings.backgroundColor}
                        onChange={(e) => setViewerSettings(prev => ({ 
                          ...prev, 
                          backgroundColor: e.target.value 
                        }))}
                        className="color-input-top"
                      />
                      <span className="color-value-top">{viewerSettings.backgroundColor}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ===================== USER GUIDE SECTION ===================== */}
        {/* Right side - Help information and controls guide */}
        <div className="vm-guide-top">
          <div className="guide-section">
            <h3>Controls Guide</h3>
            <div className="guide-content">
              <div className="guide-item">
                <span className="guide-icon">🖱️</span>
                <div>
                  <strong>Orbit:</strong> Left-click + drag to rotate view
                </div>
              </div>
              <div className="guide-item">
                <span className="guide-icon">🔍</span>
                <div>
                  <strong>Zoom:</strong> Scroll wheel or pinch gesture
                </div>
              </div>
              <div className="guide-item">
                <span className="guide-icon">↔️</span>
                <div>
                  <strong>Pan:</strong> Right-click + drag or middle-click + drag
                </div>
              </div>
              <div className="guide-item">
                <span className="guide-icon">🔄</span>
                <div>
                  <strong>Reset View:</strong> Double-click the "Reset All" button
                </div>
              </div>
            </div>
          </div>
          
          <div className="guide-section">
            <h3>Quick Tips</h3>
            <ul className="tips-list">
              <li>Use the <strong>Transform tab</strong> to position and rotate your model</li>
              <li>Toggle <strong>Wireframe mode</strong> to see the model's structure</li>
              <li>Adjust <strong>lighting</strong> to highlight different details</li>
              <li>Import your own 3D models using the import button</li>
            </ul>
          </div>
          
          <div className="current-settings">
            <h3>Current Settings</h3>
            <div className="settings-list">
              <div className="setting-item">
                <span>Model:</span>
                <span>{modelName}</span>
              </div>
              <div className="setting-item">
                <span>Background:</span>
                <span style={{ color: viewerSettings.backgroundColor }}>
                  {viewerSettings.backgroundColor}
                </span>
              </div>
              <div className="setting-item">
                <span>Grid:</span>
                <span>{viewerSettings.showGrid ? "Visible" : "Hidden"}</span>
              </div>
              <div className="setting-item">
                <span>Shadows:</span>
                <span>{viewerSettings.showShadows ? "Enabled" : "Disabled"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}