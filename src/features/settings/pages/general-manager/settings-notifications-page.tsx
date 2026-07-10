import { Bell, CalendarDays, Mail, Save, ShieldAlert } from "lucide-react";

const emailAlerts = [
  ["Resumen de operaciones", "Reporte diario de actividades estrategicas.", true],
  ["Alertas de seguridad", "Accesos inusuales o cambios en roles criticos.", true],
  ["Nuevas integraciones", "Notifica cuando se vincula un nuevo servicio.", false],
];

const pushCards = [
  ["Insights en tiempo real", "Alertas inmediatas cuando se detectan anomalias.", true],
  ["Chat del equipo", "Mensajes directos y menciones en canales estrategicos.", true],
  ["Actualizacion de tareas", "Notificar al completar un hito operativo.", false],
];

export const SettingsNotificationsPage = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] px-5 py-5 lg:px-10">
      <section>
        <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">Configuracion de alertas</h2>
        <p className="mt-1 max-w-2xl text-sm font-medium leading-relaxed text-slate-500">
          Administra como y cuando recibes actualizaciones criticas de SharkCorp Enterprise.
        </p>
      </section>
      <section className="mt-7 grid gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
        <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
          <h3 className="flex items-center gap-3 font-heading text-xl font-extrabold text-slate-950">
            <Mail className="h-5 w-5 text-[#0757ff]" />
            Notificaciones por correo
          </h3>
          <div className="mt-6 space-y-4">
            {emailAlerts.map(([title, detail, enabled]) => (
              <div className="flex items-center justify-between gap-4 rounded-xl bg-slate-100 p-4" key={title as string}>
                <div>
                  <p className="font-heading text-sm font-extrabold text-slate-950">{title as string}</p>
                  <p className="text-xs font-medium text-slate-500">{detail as string}</p>
                </div>
                <span className={`flex h-7 w-12 items-center rounded-full p-1 ${enabled ? "justify-end bg-[#0757ff]" : "justify-start bg-slate-300"}`}>
                  <span className="h-5 w-5 rounded-full bg-white" />
                </span>
              </div>
            ))}
          </div>
        </article>
        <article className="rounded-2xl bg-[#061b63] p-6 text-white shadow-[0_16px_32px_rgba(14,43,92,0.16)]">
          <ShieldAlert className="h-7 w-7 text-blue-100" />
          <h3 className="mt-5 font-heading text-xl font-extrabold">Alertas de gerencia</h3>
          <p className="mt-4 text-sm font-medium leading-relaxed text-blue-100">
            Canales exclusivos para incidentes criticos que requieren atencion inmediata.
          </p>
          <div className="mt-6 space-y-4 text-sm font-bold">
            <div className="flex items-center justify-between">Llamadas directas <span className="h-6 w-11 rounded-full bg-[#0757ff]" /></div>
            <div className="flex items-center justify-between">SMS de emergencia <span className="h-6 w-11 rounded-full bg-[#0757ff]" /></div>
          </div>
        </article>
      </section>
      <section className="mt-6 rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h3 className="flex items-center gap-3 font-heading text-xl font-extrabold text-slate-950">
            <CalendarDays className="h-5 w-5 text-[#0757ff]" />
            Notificaciones push
          </h3>
          <div className="flex gap-3">
            <button className="h-10 cursor-pointer rounded-xl border border-slate-200 px-5 font-button text-sm font-bold text-slate-600" type="button">Pausar todo</button>
            <button className="h-10 cursor-pointer rounded-xl bg-[#0757ff] px-5 font-button text-sm font-bold text-white" type="button">Probar notificacion</button>
          </div>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {pushCards.map(([title, detail, active]) => (
            <article className={`rounded-xl border p-5 ${active ? "border-[#0757ff] bg-blue-50" : "border-slate-200 bg-white"}`} key={title as string}>
              <Bell className="h-5 w-5 text-[#0757ff]" />
              <p className="mt-5 font-heading text-sm font-extrabold text-slate-950">{title as string}</p>
              <p className="mt-2 text-xs font-medium leading-relaxed text-slate-500">{detail as string}</p>
            </article>
          ))}
        </div>
        <div className="mt-7 flex justify-end gap-4">
          <button className="h-11 cursor-pointer rounded-xl border border-slate-200 px-6 font-button text-sm font-bold text-slate-600" type="button">Descartar cambios</button>
          <button className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-6 font-button text-sm font-bold text-white" type="button"><Save className="h-4 w-4" />Guardar configuracion</button>
        </div>
      </section>
    </div>
  );
};
