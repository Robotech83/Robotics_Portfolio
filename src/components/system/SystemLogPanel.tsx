type LogEntry = {
  id: number;
  time: string;
  type: "INFO" | "WARN" | "ERROR";
  message: string;
};

type Props = {
  logs: LogEntry[];
  clearLogs: () => void;
};

export default function SystemLogsPanel({ logs, clearLogs }: Props) {
  return (
    <div className="system-panel logs-panel">
      <div className="logs-header">
        <h3>System Logs</h3>
        <button className="clear-logs-btn" onClick={clearLogs}>
          Clear Logs
        </button>
      </div>

      <div className="logs-list">
        {logs.map((log) => (
          <div key={log.id} className={`log-entry log-${log.type.toLowerCase()}`}>
            <span className="log-time">[{log.time}]</span>
            <span className="log-type">{log.type}:</span>
            <span className="log-message">{log.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}