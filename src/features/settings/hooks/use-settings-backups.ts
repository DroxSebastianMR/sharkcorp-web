import {
  backupChecks,
  backupFrequencies,
  backupMetrics,
  retentionOptions,
  settingsHeaders,
} from "@/features/settings/mocks/settings.mock";

export const useSettingsBackups = () => {
  return {
    checks: backupChecks,
    frequencies: backupFrequencies,
    header: settingsHeaders.backups,
    metrics: backupMetrics,
    retentionOptions,
  };
};
