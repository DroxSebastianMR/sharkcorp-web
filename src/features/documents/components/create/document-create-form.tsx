import { DocumentFormActions } from "@/features/documents/components/create/document-form-actions";
import { DocumentFormFields } from "@/features/documents/components/create/document-form-fields";
import { DocumentFormTitleBar } from "@/features/documents/components/create/document-form-title-bar";
import { DocumentPrivacyCard } from "@/features/documents/components/create/document-privacy-card";
import type { DocumentCategoryOption } from "@/features/documents/types/documents.types";

type DocumentCreateFormProps = {
  categoryOptions: DocumentCategoryOption[];
  onCancel: () => void;
};

export const DocumentCreateForm = ({
  categoryOptions,
  onCancel,
}: DocumentCreateFormProps) => {
  return (
    <section className="mt-6 overflow-hidden rounded-2xl bg-white shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <DocumentFormTitleBar />
      <DocumentFormFields categoryOptions={categoryOptions} />
      <DocumentPrivacyCard />
      <DocumentFormActions onCancel={onCancel} />
    </section>
  );
};
