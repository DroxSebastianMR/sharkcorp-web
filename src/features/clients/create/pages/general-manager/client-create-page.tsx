import { ClientCreateForm } from "@/features/clients/components/create/client-create-form";
import { ClientCreateHeader } from "@/features/clients/components/create/client-create-header";
import { ClientsPageShell } from "@/features/clients/components/layout/clients-page-shell";
import { useClientCreate } from "@/features/clients/hooks/use-client-create";

export const ClientCreatePage = () => {
  const { industryOptions, onBack } = useClientCreate();

  return (
    <ClientsPageShell>
      <ClientCreateHeader onBack={onBack} />
      <ClientCreateForm industryOptions={industryOptions} onCancel={onBack} />
    </ClientsPageShell>
  );
};
