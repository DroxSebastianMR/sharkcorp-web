import {
  integrationLogs,
  integrations,
  settingsHeaders,
} from "@/features/settings/mocks/settings.mock";

export const useSettingsIntegrations = () => {
  return {
    header: settingsHeaders.integrations,
    integrations,
    logs: integrationLogs,
  };
};
