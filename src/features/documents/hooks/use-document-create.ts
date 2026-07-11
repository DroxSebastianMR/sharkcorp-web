import { useNavigate } from "react-router-dom";

import { PATHS } from "@/app/router/constants/paths";
import { documentCategoryOptions } from "@/features/documents/mocks/documents.mock";

export const useDocumentCreate = () => {
  const navigate = useNavigate();

  return {
    categoryOptions: documentCategoryOptions,
    onBack: () => navigate(PATHS.DOCUMENTS.HOME),
  };
};
