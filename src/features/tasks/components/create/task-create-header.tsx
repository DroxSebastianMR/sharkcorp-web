import { ChevronLeft } from "lucide-react";

type TaskCreateHeaderProps = {
  onBack: () => void;
};

export const TaskCreateHeader = ({ onBack }: TaskCreateHeaderProps) => {
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
          Crear nueva tarea
        </h2>
        <p className="mt-1 text-sm font-medium text-slate-500">
          Complete la informacion requerida para asignar una nueva responsabilidad.
        </p>
      </section>
    </>
  );
};
