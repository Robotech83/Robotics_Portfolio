type Props = {
  onClick: () => void;
  label?: string;
};

export function BackButtonTop({ onClick, label = "← Back" }: Props) {
  return (
    <button className="back-btn-top" onClick={onClick} type="button">
      {label}
    </button>
  );
}
