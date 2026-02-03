type Props = {
  status: string[];
};

export function StatusList({ status }: Props) {
  if (status.length === 0) return null;

  return (
    <div className="uc-status">
      <div className="uc-status-title">
        <span className="prompt">&gt;</span> current_status
      </div>

      <ul>
        {status.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
