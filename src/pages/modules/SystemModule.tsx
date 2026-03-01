import { useState, useEffect } from "react";
import "../../styles/modules/systemmodule.css";
import { useNavigate } from "react-router-dom";

import SystemStatusPanel from "../../components/system/SystemStatusPanel";
import SystemDiagnosticsPanel from "../../components/system/SystemDiagnosticsPanel";
import SystemSettingsPanel from "../../components/system/SystemSettingPanel";
import SystemLogsPanel from "../../components/system/SystemLogPanel";

export default function SystemModule() {
  const navigate = useNavigate();

  // ===== STATE =====
  const [systemStatus, setSystemStatus] = useState({
    cpu: 45,
    memory: 68,
    storage: 82,
    network: true,
    temperature: 42,
    uptime: "5d 12h 34m",
    lastUpdate: new Date().toLocaleTimeString(),
  });

  const [diagnostics, setDiagnostics] = useState({
    errors: 2,
    warnings: 5,
    lastScan: "2024-01-15 14:30",
    systemHealth: "Good",
  });

  const [settings, setSettings] = useState({
    autoUpdate: true,
    logsEnabled: true,
    notifications: true,
    powerSaver: false,
    theme: "dark",
  });

  const [logs, setLogs] = useState([
    { id: 1, time: "14:30:22", type: "INFO" as const, message: "System boot completed" },
    { id: 2, time: "14:31:45", type: "WARN" as const, message: "Memory usage above 70%" },
    { id: 3, time: "14:32:10", type: "ERROR" as const, message: "Network connection lost" },
    { id: 4, time: "14:33:05", type: "INFO" as const, message: "Network restored" },
    { id: 5, time: "14:35:20", type: "INFO" as const, message: "Diagnostic scan completed" },
  ]);

  // ===== EFFECTS =====
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemStatus((prev) => ({
        ...prev,
        cpu: Math.min(100, Math.max(10, prev.cpu + (Math.random() * 10 - 5))),
        memory: Math.min(100, Math.max(20, prev.memory + (Math.random() * 8 - 4))),
        lastUpdate: new Date().toLocaleTimeString(),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // ===== HANDLERS =====
  const handleSettingToggle = (setting: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  const runDiagnostics = () => {
    setDiagnostics((prev) => ({
      ...prev,
      lastScan: new Date().toLocaleString(),
      systemHealth: Math.random() > 0.3 ? "Good" : "Needs Attention",
    }));

    setLogs((prev) => [
      {
        id: prev.length + 1,
        time: new Date().toLocaleTimeString(),
        type: "INFO" as const,
        message: "Manual diagnostic scan initiated",
      },
      ...prev.slice(0, 9),
    ]);
  };

  const rebootSystem = () => {
    if (window.confirm("Are you sure you want to reboot the system?")) {
      alert("System rebooting...");
    }
  };

  const clearLogs = () => {
    setLogs([]);
  };

  // ===== UI =====
  return (
    <div className="system-module">
      <button className="back-btn-top" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2>System Controls</h2>

      <div className="system-grid">
        <SystemStatusPanel systemStatus={systemStatus} />
        <SystemDiagnosticsPanel diagnostics={diagnostics} runDiagnostics={runDiagnostics} />
        <SystemSettingsPanel
          settings={settings}
          handleSettingToggle={handleSettingToggle}
          rebootSystem={rebootSystem}
        />
        <SystemLogsPanel logs={logs} clearLogs={clearLogs} />
      </div>
    </div>
  );
}