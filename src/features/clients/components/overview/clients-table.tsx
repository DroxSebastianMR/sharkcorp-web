import { Edit3, Eye, Trash2 } from "lucide-react";

import type { Client } from "@/features/clients/types/clients.types";

type ClientsTableProps = {
  clients: Client[];
};

export const ClientsTable = ({ clients }: ClientsTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[860px] text-left">
        <thead>
          <tr className="bg-slate-50 text-xs font-extrabold uppercase tracking-[0.08em] text-slate-500">
            <th className="px-5 py-4">Cliente</th>
            <th className="px-5 py-4">Empresa</th>
            <th className="px-5 py-4">Contacto</th>
            <th className="px-5 py-4">Estado</th>
            <th className="px-5 py-4 text-right">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr className="border-t border-slate-100" key={client.id}>
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className={`grid h-10 w-10 place-items-center rounded-full text-xs font-extrabold text-white ${client.avatarClass}`}>
                    {client.initials}
                  </span>
                  <div>
                    <p className="font-heading text-sm font-extrabold text-slate-950">
                      {client.name}
                    </p>
                    <p className="text-xs font-medium text-slate-500">
                      {client.id}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-4">
                <p className="text-sm font-bold text-slate-800">
                  {client.company}
                </p>
                <p className="text-[10px] font-extrabold uppercase text-[#2e4a93]">
                  Sector: {client.sector}
                </p>
              </td>
              <td className="px-5 py-4 text-xs font-medium text-slate-600">
                <p>{client.email}</p>
                <p className="mt-1">{client.phone}</p>
              </td>
              <td className="px-5 py-4">
                <span className={`rounded-full px-3 py-1 text-[10px] font-extrabold uppercase ${client.statusClass}`}>
                  {client.status}
                </span>
              </td>
              <td className="px-5 py-4">
                <div className="flex justify-end gap-3 text-slate-600">
                  {[Eye, Edit3, Trash2].map((Icon) => (
                    <button
                      className="grid h-8 w-8 cursor-pointer place-items-center rounded-lg transition hover:bg-blue-50 hover:text-[#0757ff]"
                      key={Icon.displayName ?? Icon.name}
                      type="button"
                    >
                      <Icon className="h-4 w-4" />
                    </button>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
