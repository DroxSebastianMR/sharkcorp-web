import { Cloud, Database, FileText, Link2, MessageSquare, Settings } from "lucide-react";

const integrations = [
  {
    name: "Slack Enterprise Grid",
    detail: "Sincroniza alertas y actualizaciones con canales internos.",
    status: "Conectado",
    statusClass: "bg-emerald-100 text-emerald-700",
    icon: MessageSquare,
  },
  {
    name: "Google Workspace",
    detail: "Acceso unificado a Drive, Calendar y SSO corporativo.",
    status: "Pendiente",
    statusClass: "bg-amber-100 text-amber-700",
    icon: Cloud,
  },
  {
    name: "AWS Cloud Storage",
    detail: "Almacenamiento de activos y backups automaticos.",
    status: "Activo",
    statusClass: "bg-emerald-100 text-emerald-700",
    icon: Database,
  },
  {
    name: "Microsoft Azure",
    detail: "Active Directory y servicios de IA empresarial.",
    status: "Desactivado",
    statusClass: "bg-slate-200 text-slate-600",
    icon: Cloud,
  },
];

const logs = [
  ["Slack Enterprise", "Sincronizacion de canal", "Exitoso", "Hace 5 minutos", "System Automator"],
  ["AWS Storage", "Rotacion de Access Key", "Exitoso", "Hoy, 09:12 AM", "GM Avatar"],
  ["Google Workspace", "Intento de conexion OAuth", "Fallido", "Ayer, 18:45 PM", "Admin Console"],
];

export const SettingsIntegrationsPage = () => (
  <div className="min-h-[calc(100vh-5rem)] px-5 py-5 lg:px-10">
    <section>
      <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">Configuracion de integraciones</h2>
      <p className="mt-1 max-w-3xl text-sm font-medium leading-relaxed text-slate-500">
        Gestiona conexiones con servicios externos para optimizar flujos de trabajo y productividad.
      </p>
    </section>
    <section className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {integrations.map(({ name, detail, status, statusClass, icon: Icon }) => (
        <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70" key={name}>
          <div className="flex items-start justify-between">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-slate-50 text-[#0757ff]"><Icon className="h-6 w-6" /></span>
            <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${statusClass}`}>{status}</span>
          </div>
          <h3 className="mt-6 font-heading text-xl font-extrabold text-slate-950">{name}</h3>
          <p className="mt-2 min-h-16 text-sm font-medium leading-relaxed text-slate-500">{detail}</p>
          <button className="mt-5 flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#0757ff] px-4 font-button text-sm font-bold text-white transition hover:bg-[#064be0]" type="button">
            <Settings className="h-4 w-4" />Configurar
          </button>
        </article>
      ))}
    </section>
    <section className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
      <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-heading text-xl font-extrabold text-slate-950">Historial de conexiones</h3>
            <p className="mt-1 text-sm font-medium text-slate-500">Actividad y auditoria de integraciones activas.</p>
          </div>
          <button className="font-button text-sm font-bold text-[#0757ff]" type="button">Descargar CSV</button>
        </div>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[650px] text-left">
            <tbody>
              {logs.map(([service, action, status, date, user]) => (
                <tr className="border-t border-slate-100" key={service as string}>
                  <td className="py-4 text-sm font-bold text-slate-700">{service as string}</td>
                  <td className="py-4 text-sm font-medium text-slate-600">{action as string}</td>
                  <td className={`py-4 text-xs font-extrabold uppercase ${status === "Fallido" ? "text-red-600" : "text-emerald-600"}`}>{status as string}</td>
                  <td className="py-4 text-sm text-slate-500">{date as string}</td>
                  <td className="py-4 text-sm text-slate-500">{user as string}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
      <article className="rounded-2xl border border-dashed border-slate-300 bg-white p-6">
        <Link2 className="h-7 w-7 text-[#0757ff]" />
        <h3 className="mt-5 font-heading text-xl font-extrabold text-slate-950">API Custom Webhooks</h3>
        <p className="mt-2 text-sm font-medium leading-relaxed text-slate-500">Crea conexiones personalizadas REST y webhooks en tiempo real.</p>
        <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-slate-500">
          <FileText className="h-4 w-4" />12 endpoints activos
        </div>
        <button className="mt-6 h-11 w-full cursor-pointer rounded-xl bg-slate-900 font-button text-sm font-bold text-white" type="button">Documentacion API</button>
      </article>
    </section>
  </div>
);
