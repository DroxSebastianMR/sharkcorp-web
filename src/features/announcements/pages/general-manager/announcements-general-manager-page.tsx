import { AnnouncementsPageShell } from "@/features/announcements/components/layout/announcements-page-shell";
import { AnnouncementCardsGrid } from "@/features/announcements/components/overview/announcement-cards-grid";
import { AnnouncementMetricsStrip } from "@/features/announcements/components/overview/announcement-metrics-strip";
import { AnnouncementsHeader } from "@/features/announcements/components/overview/announcements-header";
import { AnnouncementsPagination } from "@/features/announcements/components/overview/announcements-pagination";
import { AnnouncementsToolbar } from "@/features/announcements/components/overview/announcements-toolbar";
import { FeaturedAnnouncementSection } from "@/features/announcements/components/overview/featured-announcement-section";
import { useAnnouncementsOverview } from "@/features/announcements/hooks/use-announcements-overview";

export const AnnouncementsGeneralManagerPage = () => {
  const { cards, metrics, onCreateAnnouncement, paginationItems, tabs } =
    useAnnouncementsOverview();

  return (
    <AnnouncementsPageShell>
      <AnnouncementsHeader onCreateAnnouncement={onCreateAnnouncement} />
      <AnnouncementMetricsStrip metrics={metrics} />
      <AnnouncementsToolbar tabs={tabs} />
      <FeaturedAnnouncementSection />
      <AnnouncementCardsGrid cards={cards} />
      <AnnouncementsPagination items={paginationItems} />
    </AnnouncementsPageShell>
  );
};
