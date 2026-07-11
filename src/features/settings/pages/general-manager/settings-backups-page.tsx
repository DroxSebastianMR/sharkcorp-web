import { BackupsSettingsContent } from "@/features/settings/components/backups/backups-settings-content";
import { SettingsPageShell } from "@/features/settings/components/layout/settings-page-shell";
import { SettingsHeader } from "@/features/settings/components/shared/settings-header";
import { useSettingsBackups } from "@/features/settings/hooks/use-settings-backups";

export const SettingsBackupsPage = () => {
  const { checks, frequencies, header, metrics, retentionOptions } =
    useSettingsBackups();

  return (
    <SettingsPageShell>
      <SettingsHeader header={header} />
      <BackupsSettingsContent
        checks={checks}
        frequencies={frequencies}
        metrics={metrics}
        retentionOptions={retentionOptions}
      />
    </SettingsPageShell>
  );
};
