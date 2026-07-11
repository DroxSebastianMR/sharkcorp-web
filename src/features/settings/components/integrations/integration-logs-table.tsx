import type { IntegrationLog } from "@/features/settings/types/settings.types";

type IntegrationLogsTableProps = {
  logs: IntegrationLog[];
};

export const IntegrationLogsTable = ({ logs }: IntegrationLogsTableProps) => {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-heading text-xl font-extrabold text-slate-950">
            Historial de conexiones
          </h3>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Actividad y auditoria de integraciones activas.
          </p>
        </div>
        <button className="font-button text-sm font-bold text-[#0757ff]" type="button">
          Descargar CSV
        </button>
      </div>
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[650px] text-left">
          <tbody>
            {logs.map((log) => (
              <tr className="border-t border-slate-100" key={log.service}>
                <td className="py-4 text-sm font-bold text-slate-700">
                  {log.service}
                </td>
                <td className="py-4 text-sm font-medium text-slate-600">
                  {log.action}
                </td>
                <td
                  className={[
                    "py-4 text-xs font-extrabold uppercase",
                    log.status === "Fallido"
                      ? "text-red-600"
                      : "text-emerald-600",
                  ].join(" ")}
                >
                  {log.status}
                </td>
                <td className="py-4 text-sm text-slate-500">{log.date}</td>
                <td className="py-4 text-sm text-slate-500">{log.user}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
};
