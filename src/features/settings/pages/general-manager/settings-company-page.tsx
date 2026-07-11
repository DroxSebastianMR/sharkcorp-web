import { CompanyActions } from "@/features/settings/components/company/company-actions";
import { CompanySettingsContent } from "@/features/settings/components/company/company-settings-content";
import { SettingsPageShell } from "@/features/settings/components/layout/settings-page-shell";
import { SettingsHeader } from "@/features/settings/components/shared/settings-header";
import { useSettingsCompany } from "@/features/settings/hooks/use-settings-company";

export const SettingsCompanyPage = () => {
  const { colors, fields, header } = useSettingsCompany();

  return (
    <SettingsPageShell>
      <SettingsHeader actions={<CompanyActions />} header={header} />
      <CompanySettingsContent colors={colors} fields={fields} />
    </SettingsPageShell>
  );
};
