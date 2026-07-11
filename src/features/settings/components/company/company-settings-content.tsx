import { CompanyContactCard } from "@/features/settings/components/company/company-contact-card";
import { CompanyIdentityCard } from "@/features/settings/components/company/company-identity-card";
import { CompanyInfoCard } from "@/features/settings/components/company/company-info-card";
import type { SettingsField } from "@/features/settings/types/settings.types";

type CompanySettingsContentProps = {
  colors: string[];
  fields: SettingsField[];
};

export const CompanySettingsContent = ({
  colors,
  fields,
}: CompanySettingsContentProps) => {
  return (
    <section className="mt-7 grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)]">
      <CompanyIdentityCard colors={colors} />
      <main className="space-y-6">
        <CompanyInfoCard fields={fields} />
        <CompanyContactCard />
      </main>
    </section>
  );
};
