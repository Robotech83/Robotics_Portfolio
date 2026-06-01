import type { PersonalityKey, PersonalityOption } from "./data/types";

type Props = {
  value: PersonalityKey;
  onChange: (key: PersonalityKey) => void;
  options: PersonalityOption[];
};

export function PersonalitySelect({ value, onChange, options }: Props) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value as PersonalityKey)}>
      {options.map((opt) => (
        <option key={opt.key} value={opt.key}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
