// src/pages/controlhub/VirtualModel/components/VMTabBar.tsx

import type { VMTabKey } from "./types";

type Props = {
  activeTab: VMTabKey;
  onTabChange: (tab: VMTabKey) => void;
};

export default function VMTabBar({ activeTab, onTabChange }: Props) {
  return (
    <div className="control-tabs-top">
      <button
        className={`tab-btn-top ${activeTab === "transform" ? "active" : ""}`}
        onClick={() => onTabChange("transform")}
      >
        <span className="tab-icon">⚙️</span>
        <span>Transform</span>
      </button>

      <button
        className={`tab-btn-top ${activeTab === "display" ? "active" : ""}`}
        onClick={() => onTabChange("display")}
      >
        <span className="tab-icon">👁️</span>
        <span>Display</span>
      </button>

      <button
        className={`tab-btn-top ${activeTab === "lighting" ? "active" : ""}`}
        onClick={() => onTabChange("lighting")}
      >
        <span className="tab-icon">💡</span>
        <span>Lighting</span>
      </button>
    </div>
  );
}
