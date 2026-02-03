// src/pages/UnderConstruction.tsx
// Generic "Under Construction" page for unfinished modules

import { useNavigate } from "react-router-dom";
import "../styles/underconstruction.css";

import { BackButtonTop } from "../components/underconstruction/ui/BackButtonTop";
import { UnderConstructionPanel } from "../components/underconstruction/UnderConstructionPanel";

type Props = {
  title?: string;
  description?: string;
  status?: string[];
};

export default function UnderConstruction({
  title = "Module Under Construction",
  description = "This module is actively being developed and will be available soon.",
  status = [],
}: Props) {
  const navigate = useNavigate();

  return (
    <div className="uc-page">
      <BackButtonTop onClick={() => navigate("/")} />

      <UnderConstructionPanel title={title} description={description} status={status} />
    </div>
  );
}
