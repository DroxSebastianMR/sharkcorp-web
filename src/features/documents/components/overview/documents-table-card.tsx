import { DocumentsPagination } from "@/features/documents/components/overview/documents-pagination";
import { DocumentsTable } from "@/features/documents/components/overview/documents-table";
import type {
  CompanyDocument,
  DocumentPaginationItem,
} from "@/features/documents/types/documents.types";

type DocumentsTableCardProps = {
  documents: CompanyDocument[];
  paginationItems: DocumentPaginationItem[];
};

export const DocumentsTableCard = ({
  documents,
  paginationItems,
}: DocumentsTableCardProps) => {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <DocumentsTable documents={documents} />
      <DocumentsPagination items={paginationItems} />
    </article>
  );
};
