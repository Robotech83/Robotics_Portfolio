type Diagnostics = {
  errors: number;
  warnings: number;
  lastScan: string;
  systemHealth: string;
};

type Props = {
  diagnostics: Diagnostics;
  runDiagnostics: () => void;
};

export default function SystemDiagnosticsPanel({ diagnostics, runDiagnostics }: Props) {
  return (
    <div className="system-panel diagnostics-panel">
      <h3>Diagnostics</h3>

      <div className="diagnostics-info">
        <div className="diag-item">
          <span className="diag-label">System Health:</span>
          <span
            className={`health-status ${diagnostics.systemHealth
              .toLowerCase()
              .replace(" ", "-")}`}
          >
            {diagnostics.systemHealth}
          </span>
        </div>

        <div className="diag-item">
          <span className="diag-label">Errors:</span>
          <span className="error-count">{diagnostics.errors}</span>
        </div>

        <div className="diag-item">
          <span className="diag-label">Warnings:</span>
          <span className="warning-count">{diagnostics.warnings}</span>
        </div>

        <div className="diag-item">
          <span className="diag-label">Last Scan:</span>
          <span className="scan-time">{diagnostics.lastScan}</span>
        </div>
      </div>

      <button className="action-btn scan-btn" onClick={runDiagnostics}>
        Run Diagnostics
      </button>
    </div>
  );
}