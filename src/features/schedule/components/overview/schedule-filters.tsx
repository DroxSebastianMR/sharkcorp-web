import type { ScheduleSelectOption } from "@/features/schedule/types/schedule.types";

type ScheduleFiltersProps = {
  dayOptions: ScheduleSelectOption[];
  monthOptions: ScheduleSelectOption[];
  yearOptions: ScheduleSelectOption[];
};

export const ScheduleFilters = ({
  dayOptions,
  monthOptions,
  yearOptions,
}: ScheduleFiltersProps) => {
  return (
    <section className="mt-6 flex flex-wrap items-end gap-3 rounded-2xl bg-white p-4 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <ScheduleSelect label="Año" defaultValue="2023" options={yearOptions} />
      <ScheduleSelect label="Mes" defaultValue="octubre" options={monthOptions} />
      <ScheduleSelect label="Dia" defaultValue="12" options={dayOptions} compact />

      <button
        className="h-11 cursor-pointer rounded-xl bg-[#0757ff] px-6 font-button text-sm font-bold text-white shadow-[0_14px_28px_rgba(7,87,255,0.18)] transition hover:bg-[#064be0]"
        type="button"
      >
        Aplicar filtro
      </button>
    </section>
  );
};

type ScheduleSelectProps = {
  compact?: boolean;
  defaultValue: string;
  label: string;
  options: ScheduleSelectOption[];
};

const ScheduleSelect = ({
  compact,
  defaultValue,
  label,
  options,
}: ScheduleSelectProps) => {
  return (
    <label className={compact ? "min-w-[120px]" : "min-w-[150px] flex-1"}>
      <span className="font-heading text-xs font-extrabold uppercase tracking-[0.08em] text-slate-500">
        {label}
      </span>
      <select
        className="mt-2 h-11 w-full cursor-pointer rounded-xl border border-transparent bg-slate-100 px-4 font-button text-sm font-semibold text-slate-700 outline-none transition focus:border-[#0757ff] focus:bg-white focus:ring-4 focus:ring-blue-100"
        defaultValue={defaultValue}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};
