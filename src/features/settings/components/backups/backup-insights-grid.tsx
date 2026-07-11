export const BackupInsightsGrid = () => {
  return (
    <section className="mt-6 grid gap-5 md:grid-cols-2">
      <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70">
        <h3 className="font-heading text-xl font-extrabold text-[#083da8]">
          Nube hibrida premium
        </h3>
        <p className="mt-2 text-sm font-medium text-slate-500">
          Replicacion en 3 centros globales con baja latencia.
        </p>
      </article>
      <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70">
        <h3 className="font-heading text-xl font-extrabold text-slate-950">
          Analisis de crecimiento
        </h3>
        <div className="mt-5 h-3 rounded-full bg-slate-100">
          <div className="h-full w-[70%] rounded-full bg-[#0757ff]" />
        </div>
        <p className="mt-3 text-sm font-medium text-slate-500">
          Espacio utilizado: 1.4 TB. Limite de alerta: 2.0 TB.
        </p>
      </article>
    </section>
  );
};
