import { useNavigate } from "react-router-dom";

import { PATHS } from "@/app/router/constants/paths";
import {
  documentCategories,
  documentPaginationItems,
  documents,
  documentSizeFilters,
} from "@/features/documents/mocks/documents.mock";

export const useDocumentsOverview = () => {
  const navigate = useNavigate();

  return {
    categories: documentCategories,
    documents,
    onCreateDocument: () => navigate(PATHS.DOCUMENTS.CREATE),
    paginationItems: documentPaginationItems,
    sizeFilters: documentSizeFilters,
  };
};
