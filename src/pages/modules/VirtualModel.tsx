// src/pages/controlhub/VirtualModel/VirtualModelPage.tsx

import { useRef, useState } from "react";
import ThreeDScene from "../../components/modelviewer/ThreeDScene";
import "../../styles/modules/virtualmodel.css";
import { ControlHubButton } from "../../components/ControlHubButton";

import type { ViewerSettings, VMTabKey, RotationDeg, Vec3Number } from "../../components/virtualModel/types";

import VMHeader from "../../components/virtualModel/VMHeader";
import ViewerSection from "../../components/virtualModel/ViewerSection";
import ViewerStats from "../../components/virtualModel/ViewerStats";
import VMControlsPanel from "../../components/virtualModel/VMControl.Panel";
import VMGuidePanel from "../../components/virtualModel/VMGuidePanel";

export default function VirtualModelPage() {
  const fileInputRef = useRef<HTMLInputElement>(null!);

  const [modelName, setModelName] = useState<string>("Sonny.glb");

  const [viewerSettings, setViewerSettings] = useState<ViewerSettings>({
    showGrid: true,
    showShadows: true,
    showAxes: false,
    showReflections: false,
    wireframe: false,
    ambientLightIntensity: 0.4,
    directionalLightIntensity: 1,
    backgroundColor: "#000000",
  });

  const [modelScale, setModelScale] = useState<number>(3);

  const [modelRotation, setModelRotation] = useState<RotationDeg>({
    x: 0,
    y: 25,
    z: 0,
  });

  const [modelPosition, setModelPosition] = useState<Vec3Number>({
    x: 0,
    y: -1.4,
    z: 0,
  });

  const [activeTab, setActiveTab] = useState<VMTabKey>("transform");

  const handleFileImport = (file: File) => {
    setModelName(file.name);
    console.log("Importing model:", file.name);
    // Later: createObjectURL(file) and pass into ThreeDScene modelUrl
  };

  const toggleSetting = (setting: keyof ViewerSettings) => {
    setViewerSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  const resetModel = () => {
    setModelScale(3);
    setModelRotation({ x: 0, y: 25, z: 0 });
    setModelPosition({ x: 0, y: -1.4, z: 0 });
    setViewerSettings((prev) => ({
      ...prev,
      backgroundColor: "#000000",
    }));
  };

  return (
    <div className="virtual-model-top">
      <VMHeader
        left={<ControlHubButton />}
        modelName={modelName}
        onReset={resetModel}
      />

      <ViewerSection>
        <div className="viewer-container-top">
          <ThreeDScene
            viewerSettings={viewerSettings}
            modelScale={modelScale}
            modelRotation={modelRotation}
            modelPosition={modelPosition}
          />
        </div>

        <ViewerStats
          modelScale={modelScale}
          modelRotation={modelRotation}
          modelPosition={modelPosition}
        />
      </ViewerSection>

      <div className="vm-layout-top">
        <VMControlsPanel
          activeTab={activeTab}
          onTabChange={setActiveTab}
          fileInputRef={fileInputRef}
          modelScale={modelScale}
          setModelScale={setModelScale}
          modelRotation={modelRotation}
          setModelRotation={setModelRotation}
          modelPosition={modelPosition}
          setModelPosition={setModelPosition}
          viewerSettings={viewerSettings}
          setViewerSettings={setViewerSettings}
          toggleSetting={toggleSetting}
          onImportFile={handleFileImport}
        />

        <VMGuidePanel modelName={modelName} viewerSettings={viewerSettings} />
      </div>
    </div>
  );
}
