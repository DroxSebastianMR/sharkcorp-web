import { ClientsPagination } from "@/features/clients/components/overview/clients-pagination";
import { ClientsTable } from "@/features/clients/components/overview/clients-table";
import { ClientsTableToolbar } from "@/features/clients/components/overview/clients-table-toolbar";
import type { Client } from "@/features/clients/types/clients.types";

type ClientsDirectoryCardProps = {
  clients: Client[];
};

export const ClientsDirectoryCard = ({ clients }: ClientsDirectoryCardProps) => {
  return (
    <section className="mt-6 overflow-hidden rounded-2xl bg-white shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <ClientsTableToolbar />
      <ClientsTable clients={clients} />
      <ClientsPagination />
    </section>
  );
};
