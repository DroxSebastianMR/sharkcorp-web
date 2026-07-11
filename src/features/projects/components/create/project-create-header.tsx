import { ChevronLeft } from "lucide-react";

type ProjectCreateHeaderProps = {
  onBack: () => void;
};

export const ProjectCreateHeader = ({ onBack }: ProjectCreateHeaderProps) => {
  return (
    <>
      <button
        className="mb-5 flex cursor-pointer items-center gap-2 font-button text-sm font-semibold text-slate-600 transition hover:text-[#0757ff]"
        onClick={onBack}
        type="button"
      >
        <ChevronLeft className="h-4 w-4" />
        Volver
      </button>

      <section>
        <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
          Crear nuevo proyecto
        </h2>
        <p className="mt-1 text-sm font-medium text-slate-500">
          Define parametros basicos y equipo para iniciar una nueva iniciativa.
        </p>
      </section>
    </>
  );
};
