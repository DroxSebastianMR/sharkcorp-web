import { BackupInsightsGrid } from "@/features/settings/components/backups/backup-insights-grid";
import { BackupMetricsGrid } from "@/features/settings/components/backups/backup-metrics-grid";
import { BackupScheduleCard } from "@/features/settings/components/backups/backup-schedule-card";
import { DisasterRecoveryCard } from "@/features/settings/components/backups/disaster-recovery-card";
import type { BackupMetric } from "@/features/settings/types/settings.types";

type BackupsSettingsContentProps = {
  checks: string[];
  frequencies: string[];
  metrics: BackupMetric[];
  retentionOptions: string[];
};

export const BackupsSettingsContent = ({
  checks,
  frequencies,
  metrics,
  retentionOptions,
}: BackupsSettingsContentProps) => {
  return (
    <>
      <BackupMetricsGrid metrics={metrics} />
      <section className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_330px]">
        <BackupScheduleCard
          checks={checks}
          frequencies={frequencies}
          retentionOptions={retentionOptions}
        />
        <DisasterRecoveryCard />
      </section>
      <BackupInsightsGrid />
    </>
  );
};
