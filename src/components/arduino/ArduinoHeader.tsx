type Props = {
  title: string;
  subtitle: string;
};

export function ArduinoHeader({ title, subtitle }: Props) {
  return (
    <header className="arduino-header">
      <h1 className="arduino-title">{title}</h1>
      <p className="arduino-subtitle">{subtitle}</p>
    </header>
  );
}
