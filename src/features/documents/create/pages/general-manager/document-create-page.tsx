import { DocumentCreateForm } from "@/features/documents/components/create/document-create-form";
import { DocumentCreateHeader } from "@/features/documents/components/create/document-create-header";
import { DocumentsPageShell } from "@/features/documents/components/layout/documents-page-shell";
import { useDocumentCreate } from "@/features/documents/hooks/use-document-create";

export const DocumentCreatePage = () => {
  const { categoryOptions, onBack } = useDocumentCreate();

  return (
    <DocumentsPageShell>
      <DocumentCreateHeader onBack={onBack} />
      <DocumentCreateForm categoryOptions={categoryOptions} onCancel={onBack} />
    </DocumentsPageShell>
  );
};
