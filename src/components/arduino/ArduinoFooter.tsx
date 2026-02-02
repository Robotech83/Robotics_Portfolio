type Props = {
  text: string;
};

export function ArduinoFooter({ text }: Props) {
  return (
    <footer className="arduino-footer neon-panel">
      <span className="terminal-prompt">&gt;</span>
      <span className="muted">{text}</span>
    </footer>
  );
}
