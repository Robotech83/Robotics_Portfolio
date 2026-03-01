type Props = {
  systemStatus: {
    cpu: number;
    memory: number;
    storage: number;
    network: boolean;
    temperature: number;
    uptime: string;
    lastUpdate: string;
  };
};

export default function SystemStatusPanel({ systemStatus }: Props) {
  return (
    <div className="system-panel status-panel">
      <h3>System Status</h3>

      <div className="status-grid">
        <div className="status-item">
          <span className="status-label">CPU Usage:</span>
          <div className="status-value">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${systemStatus.cpu}%` }}
              />
            </div>
            <span>{systemStatus.cpu.toFixed(1)}%</span>
          </div>
        </div>

        <div className="status-item">
          <span className="status-label">Memory:</span>
          <div className="status-value">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${systemStatus.memory}%` }}
              />
            </div>
            <span>{systemStatus.memory.toFixed(1)}%</span>
          </div>
        </div>

        <div className="status-item">
          <span className="status-label">Storage:</span>
          <div className="status-value">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${systemStatus.storage}%` }}
              />
            </div>
            <span>{systemStatus.storage}%</span>
          </div>
        </div>

        <div className="status-item">
          <span className="status-label">Network:</span>
          <span
            className={`status-indicator ${
              systemStatus.network ? "online" : "offline"
            }`}
          >
            {systemStatus.network ? "Online" : "Offline"}
          </span>
        </div>

        <div className="status-item">
          <span className="status-label">Temperature:</span>
          <span className="status-value">{systemStatus.temperature}°C</span>
        </div>

        <div className="status-item">
          <span className="status-label">Uptime:</span>
          <span className="status-value">{systemStatus.uptime}</span>
        </div>
      </div>

      <div className="last-update">Last update: {systemStatus.lastUpdate}</div>
    </div>
  );
}