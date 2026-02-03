import type { HubModule } from "./types/hub";
import { ModuleCard } from "./ModuleCard";

type Props = {
  modules: HubModule[];
};

export function ModuleGrid({ modules }: Props) {
  return (
    <section className="controlhub-grid">
      {modules.map((m) => (
        <ModuleCard key={m.id} module={m} />
      ))}
    </section>
  );
}
