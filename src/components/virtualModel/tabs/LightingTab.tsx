// src/pages/controlhub/VirtualModel/components/tabs/LightingTab.tsx

import React from "react";
import type { ViewerSettings } from "../types";

type Props = {
  viewerSettings: ViewerSettings;
  setViewerSettings: React.Dispatch<React.SetStateAction<ViewerSettings>>;
};

export default function LightingTab({ viewerSettings, setViewerSettings }: Props) {
  return (
    <div className="tab-panel-top">
      <div className="control-section">
        <h4>Lighting & Environment</h4>

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
              onChange={(e) =>
                setViewerSettings((prev) => ({
                  ...prev,
                  ambientLightIntensity: parseFloat(e.target.value),
                }))
              }
            />
          </div>
        </div>

        <div className="control-group-top">
          <div className="slider-control">
            <div className="slider-header">
              <label>Directional Light</label>
              <span className="slider-value">
                {viewerSettings.directionalLightIntensity.toFixed(1)}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="5"
              step="0.1"
              value={viewerSettings.directionalLightIntensity}
              onChange={(e) =>
                setViewerSettings((prev) => ({
                  ...prev,
                  directionalLightIntensity: parseFloat(e.target.value),
                }))
              }
            />
          </div>
        </div>

        <div className="color-picker-top">
          <label>Background Color</label>
          <div className="color-picker-row-top">
            <input
              type="color"
              value={viewerSettings.backgroundColor}
              className="color-input-top"
              onChange={(e) =>
                setViewerSettings((prev) => ({
                  ...prev,
                  backgroundColor: e.target.value,
                }))
              }
            />
            <span className="color-value-top">{viewerSettings.backgroundColor}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
