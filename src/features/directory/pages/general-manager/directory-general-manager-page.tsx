import { DirectoryPageShell } from "@/features/directory/components/layout/directory-page-shell";
import { DepartmentsDirectory } from "@/features/directory/components/overview/departments-directory";
import { DirectoryHeader } from "@/features/directory/components/overview/directory-header";
import { OrganizationChart } from "@/features/directory/components/overview/organization-chart";
import { useDirectoryOverview } from "@/features/directory/hooks/use-directory-overview";

export const DirectoryGeneralManagerPage = () => {
  const { departments, organizationChart } = useDirectoryOverview();

  return (
    <DirectoryPageShell>
      <DirectoryHeader />
      <OrganizationChart chart={organizationChart} />
      <DepartmentsDirectory departments={departments} />
    </DirectoryPageShell>
  );
};
