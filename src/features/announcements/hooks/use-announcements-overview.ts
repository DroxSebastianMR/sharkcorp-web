import { useNavigate } from "react-router-dom";

import { PATHS } from "@/app/router/constants/paths";
import {
  announcementCards,
  announcementMetrics,
  announcementPaginationItems,
  announcementTabs,
} from "@/features/announcements/mocks/announcements.mock";

export const useAnnouncementsOverview = () => {
  const navigate = useNavigate();

  return {
    cards: announcementCards,
    metrics: announcementMetrics,
    onCreateAnnouncement: () => navigate(PATHS.ANNOUNCEMENTS.CREATE),
    paginationItems: announcementPaginationItems,
    tabs: announcementTabs,
  };
};
