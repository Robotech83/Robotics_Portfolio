// src/pages/controlhub/VirtualModel/components/VMControlsPanel.tsx

import React from "react";
import type { ViewerSettings, VMTabKey, RotationDeg, Vec3Number } from "./types";

import VMTabBar from "./VMTabBar";
import TransformTab from "./tabs/TransformTab";
import DisplayTab from "./tabs/DisplayTab";
import LightingTab from "./tabs/LightingTab";

type Props = {
  activeTab: VMTabKey;
  onTabChange: (tab: VMTabKey) => void;

  fileInputRef: React.RefObject<HTMLInputElement>;

  modelScale: number;
  setModelScale: React.Dispatch<React.SetStateAction<number>>;

  modelRotation: RotationDeg;
  setModelRotation: React.Dispatch<React.SetStateAction<RotationDeg>>;

  modelPosition: Vec3Number;
  setModelPosition: React.Dispatch<React.SetStateAction<Vec3Number>>;

  viewerSettings: ViewerSettings;
  setViewerSettings: React.Dispatch<React.SetStateAction<ViewerSettings>>;
  toggleSetting: (setting: keyof ViewerSettings) => void;

  onImportFile: (file: File) => void;
};

export default function VMControlsPanel({
  activeTab,
  onTabChange,
  fileInputRef,
  modelScale,
  setModelScale,
  modelRotation,
  setModelRotation,
  modelPosition,
  setModelPosition,
  viewerSettings,
  setViewerSettings,
  toggleSetting,
  onImportFile,
}: Props) {
  return (
    <div className="vm-controls-top">
      <VMTabBar activeTab={activeTab} onTabChange={onTabChange} />

      <div className="tab-content-top">
        {activeTab === "transform" && (
          <TransformTab
            fileInputRef={fileInputRef}
            modelScale={modelScale}
            setModelScale={setModelScale}
            modelRotation={modelRotation}
            setModelRotation={setModelRotation}
            modelPosition={modelPosition}
            setModelPosition={setModelPosition}
            onImportFile={onImportFile}
          />
        )}

        {activeTab === "display" && (
          <DisplayTab viewerSettings={viewerSettings} toggleSetting={toggleSetting} />
        )}

        {activeTab === "lighting" && (
          <LightingTab viewerSettings={viewerSettings} setViewerSettings={setViewerSettings} />
        )}
      </div>
    </div>
  );
}
