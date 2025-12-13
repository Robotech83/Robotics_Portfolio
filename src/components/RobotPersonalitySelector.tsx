

interface SelectorProps {
  personality: string;
  onPersonalityChange: (value: string) => void;
}

export default function RobotPersonalitySelector({
  personality,
  onPersonalityChange,
}: SelectorProps) {
  return (
    <div className="personality-selector">
      <label>Robot Personality</label>
      <select
        value={personality}
        onChange={(e) => onPersonalityChange(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="friendly">Friendly</option>
        <option value="sarcastic">Sarcastic</option>
        <option value="butler">Robot Butler</option>
      </select>
    </div>
  );
}
