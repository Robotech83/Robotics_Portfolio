import { TerminalLine } from "./ui/TerminalLine";

type Props = {
  tip: string;
};

export function HubFooter({ tip }: Props) {
  return (
    <footer className="controlhub-footer neon-panel">
      <TerminalLine>{tip}</TerminalLine>
    </footer>
  );
}
