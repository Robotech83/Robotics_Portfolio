// src/pages/controlhub/VirtualModel/components/VMGuidePanel.tsx

import type{ ViewerSettings } from "./types";

type Props = {
  modelName: string;
  viewerSettings: ViewerSettings;
};

export default function VMGuidePanel({ modelName, viewerSettings }: Props) {
  return (
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
          <li>
            Use the <strong>Transform tab</strong> to position and rotate your model
          </li>
          <li>
            Toggle <strong>Wireframe mode</strong> to see the model's structure
          </li>
          <li>
            Adjust <strong>lighting</strong> to highlight different details
          </li>
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
  );
}
