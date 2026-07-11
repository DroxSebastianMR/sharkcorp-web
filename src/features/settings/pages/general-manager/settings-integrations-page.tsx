import { IntegrationsSettingsContent } from "@/features/settings/components/integrations/integrations-settings-content";
import { SettingsPageShell } from "@/features/settings/components/layout/settings-page-shell";
import { SettingsHeader } from "@/features/settings/components/shared/settings-header";
import { useSettingsIntegrations } from "@/features/settings/hooks/use-settings-integrations";

export const SettingsIntegrationsPage = () => {
  const { header, integrations, logs } = useSettingsIntegrations();

  return (
    <SettingsPageShell>
      <SettingsHeader header={header} />
      <IntegrationsSettingsContent integrations={integrations} logs={logs} />
    </SettingsPageShell>
  );
};
