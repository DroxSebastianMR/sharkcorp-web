import { ActiveSessionsTable } from "@/features/settings/components/security/active-sessions-table";
import { PasswordPolicyCard } from "@/features/settings/components/security/password-policy-card";
import { SecurityInsights } from "@/features/settings/components/security/security-insights";
import { TwoFactorCard } from "@/features/settings/components/security/two-factor-card";
import type { SettingsSession } from "@/features/settings/types/settings.types";

type SecurityOverviewProps = {
  hardeningItems: string[];
  sessions: SettingsSession[];
};

export const SecurityOverview = ({
  hardeningItems,
  sessions,
}: SecurityOverviewProps) => {
  return (
    <main className="mt-7 space-y-6">
      <section className="grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
        <TwoFactorCard />
        <PasswordPolicyCard />
      </section>

      <section className="space-y-6">
        <ActiveSessionsTable sessions={sessions} />
        <SecurityInsights hardeningItems={hardeningItems} />
      </section>
    </main>
  );
};
