// src/pages/controlhub/VirtualModel/components/VMHeader.tsx

import React from "react";

type Props = {
  left: React.ReactNode;
  modelName: string;
  onReset: () => void;
};

export default function VMHeader({ left, modelName, onReset }: Props) {
  return (
    <div className="vm-header-top">
      {left}

      <div className="header-center-top">
        <h1>VIRTUAL MODEL</h1>
        <p className="model-name-display-top">{modelName}</p>
      </div>

      <button className="reset-btn-top" onClick={onReset}>
        Reset All
      </button>
    </div>
  );
}
