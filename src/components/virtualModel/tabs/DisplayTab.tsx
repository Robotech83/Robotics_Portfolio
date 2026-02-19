// src/pages/controlhub/VirtualModel/components/tabs/DisplayTab.tsx

import type { ViewerSettings } from "../types";

type Props = {
  viewerSettings: ViewerSettings;
  toggleSetting: (setting: keyof ViewerSettings) => void;
};

export default function DisplayTab({ viewerSettings, toggleSetting }: Props) {
  return (
    <div className="tab-panel-top">
      <div className="control-section">
        <h4>Visual Settings</h4>

        <div className="toggle-grid-top">
          <label className="toggle-item-top">
            <input
              type="checkbox"
              checked={viewerSettings.showGrid}
              onChange={() => toggleSetting("showGrid")}
            />
            <span>Show Grid</span>
          </label>

          <label className="toggle-item-top">
            <input
              type="checkbox"
              checked={viewerSettings.showShadows}
              onChange={() => toggleSetting("showShadows")}
            />
            <span>Show Shadows</span>
          </label>

          <label className="toggle-item-top">
            <input
              type="checkbox"
              checked={viewerSettings.showAxes}
              onChange={() => toggleSetting("showAxes")}
            />
            <span>Show Axes</span>
          </label>

          <label className="toggle-item-top">
            <input
              type="checkbox"
              checked={viewerSettings.showReflections}
              onChange={() => toggleSetting("showReflections")}
            />
            <span>Show Reflections</span>
          </label>

          <label className="toggle-item-top">
            <input
              type="checkbox"
              checked={viewerSettings.wireframe}
              onChange={() => toggleSetting("wireframe")}
            />
            <span>Wireframe Mode</span>
          </label>
        </div>
      </div>
    </div>
  );
}
