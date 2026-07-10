import { events } from "@/features/dashboard/mocks/dashboard.mock";

export const UpcomingEvents = () => {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.1)] ring-1 ring-slate-200/70">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-xl font-extrabold text-slate-950">
          Próximos eventos
        </h2>

        <button
          type="button"
          className="font-button text-sm font-extrabold text-[#0757ff]"
        >
          Ver agenda
        </button>
      </div>

      <div className="mt-6 space-y-5">
        {events.map(({ day, month, title, time }) => (
          <div key={title} className="flex gap-4">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-blue-50">
              <span className="text-center">
                <strong className="block font-heading text-xl font-extrabold text-[#0757ff]">
                  {day}
                </strong>

                <span className="text-xs font-extrabold text-[#0757ff]">
                  {month}
                </span>
              </span>
            </div>

            <div>
              <h3 className="font-heading text-base font-extrabold text-slate-950">
                {title}
              </h3>

              <p className="mt-1 text-sm font-medium text-slate-500">{time}</p>

              <p className="mt-1 text-sm font-medium text-slate-500">
                Sala de juntas 1 (Piso 4)
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="mt-6 font-button text-sm font-extrabold text-[#0757ff]"
      >
        Ver todos los eventos
      </button>
    </article>
  );
};
