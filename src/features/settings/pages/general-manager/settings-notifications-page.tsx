import { SettingsPageShell } from "@/features/settings/components/layout/settings-page-shell";
import { NotificationsSettingsContent } from "@/features/settings/components/notifications/notifications-settings-content";
import { SettingsHeader } from "@/features/settings/components/shared/settings-header";
import { useSettingsNotifications } from "@/features/settings/hooks/use-settings-notifications";

export const SettingsNotificationsPage = () => {
  const { emailAlerts, header, pushCards } = useSettingsNotifications();

  return (
    <SettingsPageShell>
      <SettingsHeader header={header} />
      <NotificationsSettingsContent
        emailAlerts={emailAlerts}
        pushCards={pushCards}
      />
    </SettingsPageShell>
  );
};
