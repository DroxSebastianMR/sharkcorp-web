import { ClientsPageShell } from "@/features/clients/components/layout/clients-page-shell";
import { ClientsDirectoryCard } from "@/features/clients/components/overview/clients-directory-card";
import { ClientsHeader } from "@/features/clients/components/overview/clients-header";
import { ClientsStatsGrid } from "@/features/clients/components/overview/clients-stats-grid";
import { useClientsOverview } from "@/features/clients/hooks/use-clients-overview";

export const ClientsGeneralManagerPage = () => {
  const { clients, onCreateClient, stats } = useClientsOverview();

  return (
    <ClientsPageShell>
      <ClientsHeader onCreateClient={onCreateClient} />
      <ClientsStatsGrid stats={stats} />
      <ClientsDirectoryCard clients={clients} />
    </ClientsPageShell>
  );
};
