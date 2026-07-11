import { DepartmentCard } from "@/features/directory/components/overview/department-card";
import { DirectoryQuickSearch } from "@/features/directory/components/overview/directory-quick-search";
import type { DirectoryDepartment } from "@/features/directory/types/directory.types";

type DepartmentsDirectoryProps = {
  departments: DirectoryDepartment[];
};

export const DepartmentsDirectory = ({
  departments,
}: DepartmentsDirectoryProps) => {
  return (
    <section className="mt-7">
      <DirectoryQuickSearch />

      <div className="mb-4 mt-6 flex items-center gap-3">
        <span className="h-1 w-8 rounded-full bg-[#0757ff]" />
        <h3 className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">
          Areas y departamentos
        </h3>
      </div>

      <div className="grid gap-5">
        {departments.map((department) => (
          <DepartmentCard department={department} key={department.id} />
        ))}
      </div>
    </section>
  );
};
