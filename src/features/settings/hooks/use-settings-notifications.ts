import {
  emailAlerts,
  pushCards,
  settingsHeaders,
} from "@/features/settings/mocks/settings.mock";

export const useSettingsNotifications = () => {
  return {
    emailAlerts,
    header: settingsHeaders.notifications,
    pushCards,
  };
};
