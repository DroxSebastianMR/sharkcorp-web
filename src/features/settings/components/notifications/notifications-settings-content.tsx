import { EmailAlertsCard } from "@/features/settings/components/notifications/email-alerts-card";
import { ManagementAlertsCard } from "@/features/settings/components/notifications/management-alerts-card";
import { PushNotificationsCard } from "@/features/settings/components/notifications/push-notifications-card";
import type { ToggleItem } from "@/features/settings/types/settings.types";

type NotificationsSettingsContentProps = {
  emailAlerts: ToggleItem[];
  pushCards: ToggleItem[];
};

export const NotificationsSettingsContent = ({
  emailAlerts,
  pushCards,
}: NotificationsSettingsContentProps) => {
  return (
    <>
      <section className="mt-7 grid gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
        <EmailAlertsCard alerts={emailAlerts} />
        <ManagementAlertsCard />
      </section>
      <PushNotificationsCard pushCards={pushCards} />
    </>
  );
};
