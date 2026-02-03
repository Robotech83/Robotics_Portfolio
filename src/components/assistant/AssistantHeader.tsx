type Props = {
  onBack: () => void;
};

export function AssistantHeader({ onBack }: Props) {
  return (
    <>
      <button onClick={onBack}>← Control Hub</button>
      <h1>AI Assistant</h1>
    </>
  );
}
