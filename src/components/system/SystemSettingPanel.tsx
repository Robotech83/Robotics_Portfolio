type Settings = {
  autoUpdate: boolean;
  logsEnabled: boolean;
  notifications: boolean;
  powerSaver: boolean;
  theme: string;
};

type Props = {
  settings: Settings;
  handleSettingToggle: (setting: keyof Settings) => void;
  rebootSystem: () => void;
};

export default function SystemSettingsPanel({
  settings,
  handleSettingToggle,
  rebootSystem,
}: Props) {
  return (
    <div className="system-panel settings-panel">
      <h3>Settings</h3>

      <div className="settings-list">
        {Object.entries(settings).map(([key, value]) => (
          <div key={key} className="setting-item">
            <span className="setting-label">
              {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}:
            </span>

            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={value as boolean}
                onChange={() => handleSettingToggle(key as keyof Settings)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        ))}
      </div>

      <div className="settings-actions">
        <button className="action-btn save-btn">Save Settings</button>
        <button className="action-btn reboot-btn" onClick={rebootSystem}>
          Reboot System
        </button>
      </div>
    </div>
  );
}