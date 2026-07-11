import { DocumentCategoriesCard } from "@/features/documents/components/overview/document-categories-card";
import { DocumentSizeFilterCard } from "@/features/documents/components/overview/document-size-filter-card";
import { DocumentStorageCard } from "@/features/documents/components/overview/document-storage-card";
import type {
  DocumentCategory,
  DocumentSizeFilter,
} from "@/features/documents/types/documents.types";

type DocumentsSidebarProps = {
  categories: DocumentCategory[];
  sizeFilters: DocumentSizeFilter[];
};

export const DocumentsSidebar = ({
  categories,
  sizeFilters,
}: DocumentsSidebarProps) => {
  return (
    <aside className="space-y-5">
      <DocumentCategoriesCard categories={categories} />
      <DocumentSizeFilterCard filters={sizeFilters} />
      <DocumentStorageCard />
    </aside>
  );
};
