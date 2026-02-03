type Props = {
  label?: string;
};

export function UnderConstructionFooter({ label = "ACTIVE DEVELOPMENT" }: Props) {
  return (
    <div className="uc-footer">
      <span className="prompt">&gt;</span> status:
      <span className="uc-active"> {label}</span>
    </div>
  );
}
