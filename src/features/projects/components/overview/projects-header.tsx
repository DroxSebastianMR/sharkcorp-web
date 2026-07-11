import { Plus } from "lucide-react";

type ProjectsHeaderProps = {
  onCreateProject: () => void;
};

export const ProjectsHeader = ({ onCreateProject }: ProjectsHeaderProps) => {
  return (
    <section className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
          Proyectos empresariales
        </h2>
        <p className="mt-1 text-sm font-medium text-slate-500">
          Supervisa iniciativas, avance operativo y entregables clave.
        </p>
      </div>

      <button
        className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-6 font-button text-sm font-bold text-white shadow-[0_14px_28px_rgba(7,87,255,0.22)] transition hover:bg-[#064be0]"
        onClick={onCreateProject}
        type="button"
      >
        <Plus className="h-4 w-4" />
        Crear proyecto
      </button>
    </section>
  );
};
