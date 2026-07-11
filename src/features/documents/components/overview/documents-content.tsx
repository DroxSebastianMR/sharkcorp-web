import { DocumentsInsightCards } from "@/features/documents/components/overview/documents-insight-cards";
import { DocumentsTableCard } from "@/features/documents/components/overview/documents-table-card";
import type {
  CompanyDocument,
  DocumentPaginationItem,
} from "@/features/documents/types/documents.types";

type DocumentsContentProps = {
  documents: CompanyDocument[];
  paginationItems: DocumentPaginationItem[];
};

export const DocumentsContent = ({
  documents,
  paginationItems,
}: DocumentsContentProps) => {
  return (
    <main className="space-y-5">
      <DocumentsTableCard documents={documents} paginationItems={paginationItems} />
      <DocumentsInsightCards />
    </main>
  );
};
