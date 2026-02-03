import { Send } from "lucide-react";

type Props = {
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
};

export function ChatInput({ value, onChange, onSubmit }: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder="Say something..." />
      <button type="submit">
        <Send size={18} />
      </button>
    </form>
  );
}
