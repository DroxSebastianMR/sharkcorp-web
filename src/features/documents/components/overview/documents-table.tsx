import { Download, MoreVertical } from "lucide-react";

import type { CompanyDocument } from "@/features/documents/types/documents.types";

type DocumentsTableProps = {
  documents: CompanyDocument[];
};

export const DocumentsTable = ({ documents }: DocumentsTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[760px] text-left">
        <thead>
          <tr className="bg-slate-50 text-xs font-extrabold uppercase tracking-[0.08em] text-slate-500">
            <th className="px-5 py-4">Nombre del documento</th>
            <th className="px-5 py-4">Categoria</th>
            <th className="px-5 py-4">Fecha modificacion</th>
            <th className="px-5 py-4 text-right">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {documents.map(({ name, size, category, date, icon: Icon, iconClass }) => (
            <tr className="border-t border-slate-100" key={name}>
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className={`grid h-10 w-10 place-items-center rounded-xl ${iconClass}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-extrabold text-slate-950">
                      {name}
                    </p>
                    <p className="text-xs font-medium text-slate-500">{size}</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-4">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-extrabold text-[#2e4a93]">
                  {category}
                </span>
              </td>
              <td className="px-5 py-4 text-sm font-medium text-slate-600">
                {date}
              </td>
              <td className="px-5 py-4">
                <div className="flex justify-end gap-2">
                  <button
                    aria-label={`Descargar ${name}`}
                    className="grid h-8 w-8 cursor-pointer place-items-center rounded-lg text-[#0757ff] transition hover:bg-blue-50"
                    type="button"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                  <button
                    aria-label={`Mas acciones para ${name}`}
                    className="grid h-8 w-8 cursor-pointer place-items-center rounded-lg text-slate-600 transition hover:bg-blue-50 hover:text-[#0757ff]"
                    type="button"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
