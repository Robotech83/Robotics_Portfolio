type Props = {
  title: string;
  subtitle: string;
};

export function StudioHeader({ title, subtitle }: Props) {
  return (
    <div className="robotstudio-header">
      <h1 className="robotstudio-title">{title}</h1>
      <p className="robotstudio-subtitle">{subtitle}</p>
    </div>
  );
}
