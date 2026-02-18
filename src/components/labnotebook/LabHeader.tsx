type Props = {
  title: string;
  subtitle: string;
};

export default function LabHeader({ title, subtitle }: Props) {
  return (
    <div className="lab-header">
      <h2 className="lab-title">{title}</h2>
      <p className="lab-subtitle">{subtitle}</p>
    </div>
  );
}
