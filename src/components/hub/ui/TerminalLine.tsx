type Props = {
  children: React.ReactNode;
};

export function TerminalLine({ children }: Props) {
  return (
    <div className="terminal-line">
      <span className="prompt">&gt;</span> {children}
    </div>
  );
}
