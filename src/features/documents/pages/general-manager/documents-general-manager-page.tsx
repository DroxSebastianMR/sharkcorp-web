import { DocumentsPageShell } from "@/features/documents/components/layout/documents-page-shell";
import { DocumentsContent } from "@/features/documents/components/overview/documents-content";
import { DocumentsHeader } from "@/features/documents/components/overview/documents-header";
import { DocumentsSidebar } from "@/features/documents/components/overview/documents-sidebar";
import { useDocumentsOverview } from "@/features/documents/hooks/use-documents-overview";

export const DocumentsGeneralManagerPage = () => {
  const {
    categories,
    documents,
    onCreateDocument,
    paginationItems,
    sizeFilters,
  } = useDocumentsOverview();

  return (
    <DocumentsPageShell>
      <DocumentsHeader onCreateDocument={onCreateDocument} />

      <section className="mt-6 grid gap-5 xl:grid-cols-[260px_minmax(0,1fr)]">
        <DocumentsSidebar categories={categories} sizeFilters={sizeFilters} />
        <DocumentsContent documents={documents} paginationItems={paginationItems} />
      </section>
    </DocumentsPageShell>
  );
};
