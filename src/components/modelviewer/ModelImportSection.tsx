interface Props {
  fileInputRef: React.RefObject<HTMLInputElement>;
  modelName: string;
  onFileImport: (file: File) => void;
}

export default function ModelImportSection({
  fileInputRef,
  modelName,
  onFileImport
}: Props) {

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileImport(file);
    }
  };

  return (
    <div className="control-section">
      <h4>Model Information</h4>

      <div className="model-info">
        <span className="info-label">Current Model:</span>
        <span className="info-value">{modelName}</span>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        onChange={handleImport}
        accept=".glb,.gltf,.obj,.fbx,.stl"
        style={{ display: "none" }}
      />

      <button
        className="btn btn-import"
        onClick={() => fileInputRef.current?.click()}
      >
        Import 3D Model
      </button>

      <p className="file-hint">Supports: .glb, .gltf, .obj, .fbx, .stl</p>
    </div>
  );
}
