import { ChevronDown, Cloud, DatabaseBackup, RotateCcw, Save, TriangleAlert } from "lucide-react";

const backupMetrics = [
  {
    label: "Salud del sistema",
    value: "99.9%",
    detail: "Ultimo backup: hace 14 min",
    icon: Cloud,
  },
  {
    label: "Uso de nube",
    value: "1.4 TB",
    detail: "De 5 TB disponibles",
    icon: DatabaseBackup,
  },
  {
    label: "Puntos de restauracion",
    value: "48",
    detail: "Disponibles para recuperar",
    icon: RotateCcw,
  },
];

export const SettingsBackupsPage = () => (
  <div className="min-h-[calc(100vh-5rem)] px-5 py-5 lg:px-10">
    <section>
      <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">Respaldos y retencion</h2>
      <p className="mt-1 max-w-3xl text-sm font-medium leading-relaxed text-slate-500">
        Gestiona resiliencia de datos, redundancia, archivo legal y recuperacion ante desastres.
      </p>
    </section>
    <section className="mt-7 grid gap-4 md:grid-cols-3">
      {backupMetrics.map(({ label, value, detail, icon: Icon }) => (
        <article className="rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70" key={label}>
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-[#0757ff]"><Icon className="h-5 w-5" /></span>
          <p className="mt-4 text-sm font-bold text-[#2e4a93]">{label}</p>
          <p className="mt-2 font-heading text-3xl font-extrabold text-slate-950">{value}</p>
          <p className="mt-1 text-xs font-medium text-slate-500">{detail}</p>
        </article>
      ))}
    </section>
    <section className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_330px]">
      <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
        <h3 className="font-heading text-xl font-extrabold text-slate-950">Frecuencia y programacion</h3>
        <div className="mt-5 border-t border-slate-200 pt-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-heading text-sm font-bold text-slate-700">Backups automaticos</p>
              <p className="mt-1 text-sm text-slate-500">Intervalo entre capturas de estado de la base de datos.</p>
            </div>
            <div className="flex rounded-xl bg-slate-100 p-1">
              {["Cada 1h", "Cada 6h", "Diario"].map((item, index) => (
                <button className={`h-10 cursor-pointer rounded-lg px-5 font-button text-sm font-bold ${index === 0 ? "bg-white text-[#0757ff] shadow-sm" : "text-slate-600"}`} key={item} type="button">{item}</button>
              ))}
            </div>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {["2 años (cumplimiento estandar)", "180 dias (recomendado)"].map((item) => (
              <button className="flex h-12 cursor-pointer items-center justify-between rounded-xl bg-slate-100 px-4 font-button text-sm font-semibold text-slate-700" key={item} type="button">
                {item}
                <ChevronDown className="h-4 w-4" />
              </button>
            ))}
          </div>
          <div className="mt-7 space-y-4">
            {["Cifrado de extremo a extremo en reposo", "Validacion de integridad automatica"].map((item, index) => (
              <label className="flex cursor-pointer items-center gap-3" key={item}>
                <span className={`grid h-5 w-5 place-items-center rounded-md border ${index === 0 ? "border-[#0757ff] bg-[#0757ff]" : "border-[#0757ff] bg-white"}`} />
                <span className="text-sm font-bold text-slate-700">{item}</span>
              </label>
            ))}
          </div>
          <div className="mt-8 flex justify-end gap-4">
            <button className="h-11 cursor-pointer px-5 font-button text-sm font-bold text-slate-600" type="button">Descartar cambios</button>
            <button className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-8 font-button text-sm font-bold text-white" type="button"><Save className="h-4 w-4" />Guardar configuracion</button>
          </div>
        </div>
      </article>
      <article className="rounded-2xl bg-slate-900 p-6 text-white shadow-[0_16px_32px_rgba(14,43,92,0.18)]">
        <h3 className="font-heading text-2xl font-extrabold">Recuperacion ante desastres</h3>
        <p className="mt-4 text-sm font-medium leading-relaxed text-slate-300">Activa protocolo de emergencia para restaurar infraestructura completa.</p>
        <div className="mt-7 space-y-4 text-sm font-bold">
          <p><span className="mr-2 text-emerald-400">●</span>Region primaria: US-East-1</p>
          <p><span className="mr-2 text-slate-400">●</span>Region espejo: EU-West-1</p>
        </div>
        <button className="mt-12 flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-red-600 font-button text-sm font-bold text-white" type="button"><TriangleAlert className="h-4 w-4" />Iniciar failover</button>
      </article>
    </section>
    <section className="mt-6 grid gap-5 md:grid-cols-2">
      <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70">
        <h3 className="font-heading text-xl font-extrabold text-[#083da8]">Nube hibrida premium</h3>
        <p className="mt-2 text-sm font-medium text-slate-500">Replicacion en 3 centros globales con baja latencia.</p>
      </article>
      <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70">
        <h3 className="font-heading text-xl font-extrabold text-slate-950">Analisis de crecimiento</h3>
        <div className="mt-5 h-3 rounded-full bg-slate-100"><div className="h-full w-[70%] rounded-full bg-[#0757ff]" /></div>
        <p className="mt-3 text-sm font-medium text-slate-500">Espacio utilizado: 1.4 TB. Limite de alerta: 2.0 TB.</p>
      </article>
    </section>
  </div>
);
