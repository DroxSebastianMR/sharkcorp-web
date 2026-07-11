import { SettingsPageShell } from "@/features/settings/components/layout/settings-page-shell";
import { SecurityOverview } from "@/features/settings/components/security/security-overview";
import { SettingsHeader } from "@/features/settings/components/shared/settings-header";
import { useSettingsSecurity } from "@/features/settings/hooks/use-settings-security";

export const SettingsGeneralManagerPage = () => {
  const { activeSessions, hardeningItems, header } = useSettingsSecurity();

  return (
    <SettingsPageShell>
      <SettingsHeader header={header} />
      <SecurityOverview
        hardeningItems={hardeningItems}
        sessions={activeSessions}
      />
    </SettingsPageShell>
  );
};
