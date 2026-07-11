import { ClientFormActions } from "@/features/clients/components/create/client-form-actions";
import { ClientFormFields } from "@/features/clients/components/create/client-form-fields";
import { ClientLogoUploader } from "@/features/clients/components/create/client-logo-uploader";
import type { ClientIndustryOption } from "@/features/clients/types/clients.types";

type ClientCreateFormProps = {
  industryOptions: ClientIndustryOption[];
  onCancel: () => void;
};

export const ClientCreateForm = ({
  industryOptions,
  onCancel,
}: ClientCreateFormProps) => {
  return (
    <section className="mt-8 rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <div className="grid gap-8 xl:grid-cols-[180px_minmax(0,1fr)]">
        <ClientLogoUploader />
        <ClientFormFields industryOptions={industryOptions} />
      </div>

      <ClientFormActions onCancel={onCancel} />
    </section>
  );
};
