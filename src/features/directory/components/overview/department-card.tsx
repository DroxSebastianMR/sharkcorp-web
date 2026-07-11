import type { DirectoryDepartment } from "@/features/directory/types/directory.types";

type DepartmentCardProps = {
  department: DirectoryDepartment;
};

export const DepartmentCard = ({ department }: DepartmentCardProps) => {
  return (
    <article className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <div className="absolute right-5 top-5 font-heading text-7xl font-extrabold text-slate-100">
        {department.initials}
      </div>

      <div className="relative grid gap-5 lg:grid-cols-[minmax(0,1fr)_150px]">
        <div>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold text-[#0757ff]">
            {department.eyebrow}
          </span>
          <h3 className="mt-5 font-heading text-2xl font-extrabold text-slate-950">
            {department.title}
          </h3>
          <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-slate-600">
            {department.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-8">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.1em] text-slate-400">
                Miembros
              </p>
              <p className="font-heading text-xl font-extrabold text-[#0757ff]">
                {department.members}
              </p>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.1em] text-slate-400">
                Proyectos activos
              </p>
              <p className="font-heading text-xl font-extrabold text-[#0757ff]">
                {department.activeProjects}
              </p>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.1em] text-slate-400">
                Reporta a
              </p>
              <p className="font-heading text-sm font-extrabold text-slate-700">
                {department.parent}
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-end">
          <img
            alt={`Mascota temporal para ${department.title}`}
            className="h-36 w-36 object-contain drop-shadow-[0_18px_28px_rgba(7,87,255,0.18)]"
            src={department.image}
          />
        </div>
      </div>

      <div className="relative mt-6 grid gap-4 md:grid-cols-2">
        {department.leaders.map((leader) => (
          <div
            className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4"
            key={`${department.id}-${leader.name}`}
          >
            <span
              className={`grid h-14 w-14 place-items-center rounded-2xl text-sm font-extrabold text-white ${leader.colorClass}`}
            >
              {leader.initials}
            </span>
            <div>
              {leader.badge ? (
                <span className="rounded-md bg-blue-50 px-2 py-1 text-[10px] font-extrabold uppercase text-[#0757ff]">
                  {leader.badge}
                </span>
              ) : null}
              <h4 className="mt-1 font-heading text-base font-extrabold text-slate-950">
                {leader.name}
              </h4>
              <p className="text-xs font-medium text-slate-500">{leader.role}</p>
            </div>
          </div>
        ))}

        {department.collaborators.map((person) => (
          <div
            className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4"
            key={`${department.id}-${person.name}`}
          >
            <span
              className={`grid h-11 w-11 place-items-center rounded-full text-xs font-extrabold text-white ${person.colorClass}`}
            >
              {person.initials}
            </span>
            <div>
              <h4 className="font-heading text-sm font-extrabold text-slate-950">
                {person.name}
              </h4>
              <p className="text-xs font-medium text-slate-500">{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};
