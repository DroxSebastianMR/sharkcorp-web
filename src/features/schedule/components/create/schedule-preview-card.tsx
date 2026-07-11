type SchedulePreviewCardProps = {
  previewDays: string[];
};

export const SchedulePreviewCard = ({ previewDays }: SchedulePreviewCardProps) => {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <h3 className="font-heading text-sm font-extrabold text-slate-950">
        Vista previa
      </h3>
      <div className="mt-4 rounded-2xl bg-slate-50 p-4">
        <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-extrabold text-slate-400">
          {previewDays.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-7 gap-2 text-center text-xs font-bold text-slate-600">
          {Array.from({ length: 14 }, (_, index) => (
            <span
              className={[
                "grid h-8 place-items-center rounded-lg",
                index === 11 ? "bg-[#0757ff] text-white" : "bg-white",
              ].join(" ")}
              key={index}
            >
              {index + 1}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 rounded-xl bg-blue-50 p-4">
        <p className="font-heading text-sm font-extrabold text-[#0757ff]">
          Semana 42
        </p>
        <p className="mt-1 text-xs font-medium leading-relaxed text-slate-500">
          El evento se mostrara en la agenda ejecutiva con su tipo, importancia y
          participantes asignados.
        </p>
      </div>
    </article>
  );
};
