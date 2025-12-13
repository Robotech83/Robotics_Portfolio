import { useState, useEffect } from "react";
import "../../styles/modules/systemmodule.css"; 

export default function SystemModule() {
  // State for system status monitoring - tracks real-time system metrics
  const [systemStatus, setSystemStatus] = useState({
    cpu: 45,           // CPU usage percentage
    memory: 68,        // Memory usage percentage  
    storage: 82,       // Storage usage percentage
    network: true,     // Network connectivity status
    temperature: 42,   // System temperature in Celsius
    uptime: "5d 12h 34m", // How long system has been running
    lastUpdate: new Date().toLocaleTimeString() // Last data refresh time
  });

  // State for system diagnostics - tracks system health and issues
  const [diagnostics, setDiagnostics] = useState({
    errors: 2,                    // Number of active errors
    warnings: 5,                  // Number of active warnings
    lastScan: "2024-01-15 14:30", // When last diagnostic was run
    systemHealth: "Good"          // Overall system health status
  });

  // State for system settings - user-configurable options
  const [settings, setSettings] = useState({
    autoUpdate: true,    // Automatic updates enabled/disabled
    logsEnabled: true,   // System logging enabled/disabled
    notifications: true, // Push notifications enabled/disabled  
    powerSaver: false,   // Power saving mode enabled/disabled
    theme: "dark"        // UI theme preference
  });

  // State for system logs - stores recent system events and messages
  const [logs, setLogs] = useState([
    { id: 1, time: "14:30:22", type: "INFO", message: "System boot completed" },
    { id: 2, time: "14:31:45", type: "WARN", message: "Memory usage above 70%" },
    { id: 3, time: "14:32:10", type: "ERROR", message: "Network connection lost" },
    { id: 4, time: "14:33:05", type: "INFO", message: "Network restored" },
    { id: 5, time: "14:35:20", type: "INFO", message: "Diagnostic scan completed" }
  ]);

  // useEffect hook for simulating real-time system status updates
  // This runs every 5 seconds to update CPU and memory usage
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemStatus(prev => ({
        ...prev,
        // Simulate CPU usage fluctuation between 10-100%
        cpu: Math.min(100, Math.max(10, prev.cpu + (Math.random() * 10 - 5))),
        // Simulate memory usage fluctuation between 20-100%
        memory: Math.min(100, Math.max(20, prev.memory + (Math.random() * 8 - 4))),
        // Update the timestamp to show last refresh
        lastUpdate: new Date().toLocaleTimeString()
      }));
    }, 5000); // Update every 5 seconds

    // Cleanup function - clears interval when component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this runs once on mount

  // Handler function for toggling settings on/off
  const handleSettingToggle = (setting: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting] // Toggle the boolean value
    }));
  };

  // Function to run manual system diagnostics
  const runDiagnostics = () => {
    // Update diagnostics with new scan results
    setDiagnostics(prev => ({
      ...prev,
      lastScan: new Date().toLocaleString(), // Update scan timestamp
      // Randomly determine system health for simulation
      systemHealth: Math.random() > 0.3 ? "Good" : "Needs Attention"
    }));
    
    // Add a new log entry for the diagnostic scan
    setLogs(prev => [
      {
        id: prev.length + 1, // Generate new ID
        time: new Date().toLocaleTimeString(), // Current time
        type: "INFO", // Log type
        message: "Manual diagnostic scan initiated" // Log message
      },
      ...prev.slice(0, 9) // Keep only last 10 logs (new log + 9 previous)
    ]);
  };

  // Function to safely reboot the system
  const rebootSystem = () => {
    // Confirm with user before taking destructive action
    if (window.confirm("Are you sure you want to reboot the system?")) {
      // In a real application, this would make an API call to reboot
      alert("System rebooting...");
      // Additional logic would go here for actual reboot
    }
  };

  // Function to clear all system logs
  const clearLogs = () => {
    setLogs([]); // Reset logs to empty array
  };

  return (
    <div className="system-module">
      <h2>System Controls</h2>
      
      {/* Main grid layout for all system panels */}
      <div className="system-grid">
        
        {/* ===== STATUS PANEL ===== */}
        {/* Shows real-time system metrics and health indicators */}
        <div className="system-panel status-panel">
          <h3>System Status</h3>
          <div className="status-grid">
            
            {/* CPU Usage Display */}
            <div className="status-item">
              <span className="status-label">CPU Usage:</span>
              <div className="status-value">
                {/* Visual progress bar for CPU usage */}
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${systemStatus.cpu}%` }} // Dynamic width based on CPU %
                  ></div>
                </div>
                {/* Numerical CPU percentage */}
                <span>{systemStatus.cpu.toFixed(1)}%</span>
              </div>
            </div>
            
            {/* Memory Usage Display */}
            <div className="status-item">
              <span className="status-label">Memory:</span>
              <div className="status-value">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${systemStatus.memory}%` }} // Dynamic width based on memory %
                  ></div>
                </div>
                <span>{systemStatus.memory.toFixed(1)}%</span>
              </div>
            </div>
            
            {/* Storage Usage Display */}
            <div className="status-item">
              <span className="status-label">Storage:</span>
              <div className="status-value">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${systemStatus.storage}%` }} // Dynamic width based on storage %
                  ></div>
                </div>
                <span>{systemStatus.storage}%</span>
              </div>
            </div>
            
            {/* Network Status Display */}
            <div className="status-item">
              <span className="status-label">Network:</span>
              {/* Conditional styling based on network status */}
              <span className={`status-indicator ${systemStatus.network ? 'online' : 'offline'}`}>
                {systemStatus.network ? 'Online' : 'Offline'}
              </span>
            </div>
            
            {/* Temperature Display */}
            <div className="status-item">
              <span className="status-label">Temperature:</span>
              <span className="status-value">{systemStatus.temperature}°C</span>
            </div>
            
            {/* System Uptime Display */}
            <div className="status-item">
              <span className="status-label">Uptime:</span>
              <span className="status-value">{systemStatus.uptime}</span>
            </div>
          </div>
          {/* Last data update timestamp */}
          <div className="last-update">
            Last update: {systemStatus.lastUpdate}
          </div>
        </div>

        {/* ===== DIAGNOSTICS PANEL ===== */}
        {/* Shows system health and allows manual diagnostic scans */}
        <div className="system-panel diagnostics-panel">
          <h3>Diagnostics</h3>
          <div className="diagnostics-info">
            
            {/* System Health Status */}
            <div className="diag-item">
              <span className="diag-label">System Health:</span>
              {/* Dynamic styling based on health status */}
              <span className={`health-status ${diagnostics.systemHealth.toLowerCase().replace(' ', '-')}`}>
                {diagnostics.systemHealth}
              </span>
            </div>
            
            {/* Error Count Display */}
            <div className="diag-item">
              <span className="diag-label">Errors:</span>
              <span className="error-count">{diagnostics.errors}</span>
            </div>
            
            {/* Warning Count Display */}
            <div className="diag-item">
              <span className="diag-label">Warnings:</span>
              <span className="warning-count">{diagnostics.warnings}</span>
            </div>
            
            {/* Last Diagnostic Scan Time */}
            <div className="diag-item">
              <span className="diag-label">Last Scan:</span>
              <span className="scan-time">{diagnostics.lastScan}</span>
            </div>
          </div>
          {/* Button to manually run system diagnostics */}
          <button className="action-btn scan-btn" onClick={runDiagnostics}>
            Run Diagnostics
          </button>
        </div>

        {/* ===== SETTINGS PANEL ===== */}
        {/* Allows user to configure system preferences */}
        <div className="system-panel settings-panel">
          <h3>Settings</h3>
          <div className="settings-list">
            {/* Dynamically generate settings toggles from settings object */}
            {Object.entries(settings).map(([key, value]) => (
              <div key={key} className="setting-item">
                {/* Convert camelCase to readable label (e.g., "autoUpdate" -> "Auto Update") */}
                <span className="setting-label">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                </span>
                {/* Toggle switch component */}
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={value as boolean} // Current toggle state
                    onChange={() => handleSettingToggle(key as keyof typeof settings)} // Toggle handler
                  />
                  <span className="toggle-slider"></span> {/* Visual slider element */}
                </label>
              </div>
            ))}
          </div>
          {/* Settings action buttons */}
          <div className="settings-actions">
            <button className="action-btn save-btn">Save Settings</button>
            {/* Dangerous action with confirmation */}
            <button className="action-btn reboot-btn" onClick={rebootSystem}>
              Reboot System
            </button>
          </div>
        </div>

        {/* ===== LOGS PANEL ===== */}
        {/* Displays system event log with filtering and management */}
        <div className="system-panel logs-panel">
          <div className="logs-header">
            <h3>System Logs</h3>
            {/* Button to clear all logs */}
            <button className="clear-logs-btn" onClick={clearLogs}>
              Clear Logs
            </button>
          </div>
          {/* Scrollable log entries container */}
          <div className="logs-list">
            {/* Map through logs array and display each entry */}
            {logs.map(log => (
              <div key={log.id} className={`log-entry log-${log.type.toLowerCase()}`}>
                {/* Log timestamp */}
                <span className="log-time">[{log.time}]</span>
                {/* Log type with color coding */}
                <span className="log-type">{log.type}:</span>
                {/* Log message content */}
                <span className="log-message">{log.message}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}