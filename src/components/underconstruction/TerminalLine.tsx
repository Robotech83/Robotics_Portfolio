type Props = {
  children: React.ReactNode;
};

export function TerminalLine({ children }: Props) {
  return (
    <div className="uc-terminal">
      <span className="prompt">&gt;</span> {children}
    </div>
  );
}
