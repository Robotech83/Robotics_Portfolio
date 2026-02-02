type Props = {
  title: string;
  subtitle: string;
};

export function JSHeader({ title, subtitle }: Props) {
  return (
    <header className="jsSceneHeader neon-border">
      <div>
        <h1 className="rgb-gradient">{title}</h1>
        <p className="jsSceneSubtitle">{subtitle}</p>
      </div>
    </header>
  );
}
