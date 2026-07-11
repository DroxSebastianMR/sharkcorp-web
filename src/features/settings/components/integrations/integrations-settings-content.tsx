import { CustomWebhooksCard } from "@/features/settings/components/integrations/custom-webhooks-card";
import { IntegrationLogsTable } from "@/features/settings/components/integrations/integration-logs-table";
import { IntegrationsGrid } from "@/features/settings/components/integrations/integrations-grid";
import type {
  IntegrationItem,
  IntegrationLog,
} from "@/features/settings/types/settings.types";

type IntegrationsSettingsContentProps = {
  integrations: IntegrationItem[];
  logs: IntegrationLog[];
};

export const IntegrationsSettingsContent = ({
  integrations,
  logs,
}: IntegrationsSettingsContentProps) => {
  return (
    <>
      <IntegrationsGrid integrations={integrations} />
      <section className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
        <IntegrationLogsTable logs={logs} />
        <CustomWebhooksCard />
      </section>
    </>
  );
};
