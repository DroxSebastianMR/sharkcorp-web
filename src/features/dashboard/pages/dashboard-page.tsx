import {
  AnnouncementsCard,
  AttendanceChart,
  DashboardStatCards,
  QuickActions,
  UpcomingEvents,
} from "@/features/dashboard/components";

import {
  announcements,
  attendance,
  quickActions,
  statCards,
} from "@/features/dashboard/mocks/dashboard.mock";

export const DashboardPage = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] px-5 py-5 lg:px-12">
      <DashboardStatCards cards={statCards} />
      <section className="mt-6 grid items-start gap-6 xl:grid-cols-[1.55fr_0.95fr]">
        <div className="space-y-5">
          <AttendanceChart
            data={attendance}
            average={90.8}
            variation="+3.2% vs semana anterior"
          />
          <QuickActions actions={quickActions} />
        </div>
        <aside className="space-y-7">
          <AnnouncementsCard announcements={announcements} />
          <UpcomingEvents />
        </aside>
      </section>
    </div>
  );
};
