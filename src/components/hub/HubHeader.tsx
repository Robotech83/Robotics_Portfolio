import { TerminalLine } from "./ui/TerminalLine";

type Props = {
  title: string;
  subtitle: string;
};

export function HubHeader({ title, subtitle }: Props) {
  return (
    <header className="controlhub-header neon-panel">
      <TerminalLine>boot --control-hub</TerminalLine>

      <h1 className="controlhub-title">{title}</h1>
      <p className="controlhub-subtitle">{subtitle}</p>
    </header>
  );
}
