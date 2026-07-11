import { IntegrationCard } from "@/features/settings/components/integrations/integration-card";
import type { IntegrationItem } from "@/features/settings/types/settings.types";

type IntegrationsGridProps = {
  integrations: IntegrationItem[];
};

export const IntegrationsGrid = ({ integrations }: IntegrationsGridProps) => {
  return (
    <section className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {integrations.map((integration) => (
        <IntegrationCard integration={integration} key={integration.name} />
      ))}
    </section>
  );
};
