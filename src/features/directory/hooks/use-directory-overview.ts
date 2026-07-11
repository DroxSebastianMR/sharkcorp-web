import {
  directoryDepartments,
  organizationChart,
} from "@/features/directory/mocks/directory.mock";

const departmentOrder = [
  "general-management",
  "chro",
  "cdo",
  "cto",
  "cpo",
  "cfo",
  "cmo",
  "rrhh",
  "web-design",
  "technology",
  "products",
  "finance",
  "marketing",
  "frontend",
  "backend",
  "database",
];

export const useDirectoryOverview = () => {
  return {
    departments: departmentOrder
      .map((departmentId) =>
        directoryDepartments.find((department) => department.id === departmentId),
      )
      .filter((department): department is (typeof directoryDepartments)[number] =>
        Boolean(department),
      ),
    organizationChart,
  };
};
