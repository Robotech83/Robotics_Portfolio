import { TerminalLine } from "./TerminalLine";
import { StatusList } from "./StatusList";
import { UnderConstructionFooter } from "./UnderConstructionFooter";

type Props = {
  title: string;
  description: string;
  status: string[];
};

export function UnderConstructionPanel({ title, description, status }: Props) {
  return (
    <div className="uc-panel neon-panel">
      <TerminalLine>cd ~/robotics</TerminalLine>

      <h1 className="uc-title">{title}</h1>
      <p className="uc-description">{description}</p>

      <StatusList status={status} />

      <UnderConstructionFooter />
    </div>
  );
}
