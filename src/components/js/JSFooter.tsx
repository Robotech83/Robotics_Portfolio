type Props = {
  text: string;
};

export function JSFooter({ text }: Props) {
  return <footer className="jsSceneFooter">{text}</footer>;
}
