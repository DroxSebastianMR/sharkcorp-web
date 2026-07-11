import {
  activeSessions,
  hardeningItems,
  settingsHeaders,
} from "@/features/settings/mocks/settings.mock";

export const useSettingsSecurity = () => {
  return {
    activeSessions,
    hardeningItems,
    header: settingsHeaders.security,
  };
};
