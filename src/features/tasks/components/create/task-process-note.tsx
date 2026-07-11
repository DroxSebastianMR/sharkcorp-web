import { Info } from "lucide-react";

export const TaskProcessNote = () => {
  return (
    <section className="mt-6 rounded-2xl border-l-4 border-[#0757ff] bg-blue-50 p-5">
      <div className="flex gap-3">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#0757ff]" />
        <div>
          <h3 className="font-heading text-sm font-extrabold text-[#0757ff]">
            Nota de proceso
          </h3>
          <p className="mt-1 text-sm font-medium text-slate-600">
            Al asignar esta tarea, el responsable recibira una notificacion
            inmediata en su terminal de SharkCorp Enterprise.
          </p>
        </div>
      </div>
    </section>
  );
};
