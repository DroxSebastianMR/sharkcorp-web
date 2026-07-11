import {
  companyColors,
  companyFields,
  settingsHeaders,
} from "@/features/settings/mocks/settings.mock";

export const useSettingsCompany = () => {
  return {
    colors: companyColors,
    fields: companyFields,
    header: settingsHeaders.company,
  };
};
