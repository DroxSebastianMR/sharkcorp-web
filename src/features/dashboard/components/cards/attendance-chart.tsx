import { TrendingUp } from "lucide-react";

import { AttendanceBar } from "./attendance-bar";

import type { AttendanceChartProps } from "../types/dashboard.types";

export const AttendanceChart = ({
  data,
  average,
  variation,
  periodLabel = "Esta semana",
}: AttendanceChartProps) => {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.1)] ring-1 ring-slate-200/70">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-xl font-extrabold text-slate-950">
            Asistencia por día
          </h2>

          <p className="mt-1 text-sm font-medium text-slate-400">
            {periodLabel.toLowerCase()}
          </p>
        </div>

        <button
          type="button"
          className="flex h-10 items-center gap-3 rounded-full bg-slate-100 px-5 font-button text-sm font-bold text-slate-700"
        >
          {periodLabel}
        </button>
      </div>

      <div className="mt-5 h-[230px] rounded-2xl bg-[linear-gradient(to_right,#dbe3ef_1px,transparent_1px),linear-gradient(to_bottom,#dbe3ef_1px,transparent_1px)] bg-[size:20%_25%] px-6 pt-4">
        <div className="flex h-full items-end justify-between gap-5">
          {data.map((item) => (
            <AttendanceBar key={item.day} item={item} />
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-50 text-[#0757ff]">
          <TrendingUp className="h-5 w-5" />
        </span>

        <div>
          <p className="text-sm font-medium text-slate-500">
            Promedio semanal:
            <strong className="font-heading text-slate-950"> {average}%</strong>
          </p>

          <p className="text-xs font-extrabold text-emerald-600">{variation}</p>
        </div>
      </div>
    </article>
  );
};
