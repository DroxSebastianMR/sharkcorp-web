import { Clock3, MapPin } from "lucide-react";

import type {
  ScheduleCommitment,
  ScheduleTodayHighlight,
} from "@/features/schedule/types/schedule.types";

type ScheduleSidePanelProps = {
  commitments: ScheduleCommitment[];
  highlights: ScheduleTodayHighlight[];
};

export const ScheduleSidePanel = ({
  commitments,
  highlights,
}: ScheduleSidePanelProps) => {
  return (
    <aside className="space-y-6">
      <ScheduleTodayCard highlights={highlights} />
      <ScheduleCommitmentsCard commitments={commitments} />
    </aside>
  );
};

type ScheduleTodayCardProps = {
  highlights: ScheduleTodayHighlight[];
};

const ScheduleTodayCard = ({ highlights }: ScheduleTodayCardProps) => {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-sm font-extrabold text-slate-950">Hoy</h3>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold text-[#0757ff]">
          12 Oct
        </span>
      </div>
      <div className="mt-4 space-y-2">
        {highlights.map((item) => (
          <div
            className={`rounded-xl px-3 py-2 text-sm font-bold ${item.tone}`}
            key={item.label}
          >
            {item.label}
          </div>
        ))}
      </div>
    </article>
  );
};

type ScheduleCommitmentsCardProps = {
  commitments: ScheduleCommitment[];
};

const ScheduleCommitmentsCard = ({ commitments }: ScheduleCommitmentsCardProps) => {
  return (
    <article className="rounded-2xl bg-white shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <h3 className="font-heading text-sm font-extrabold text-slate-950">
          Proximos compromisos
        </h3>
        <button
          className="cursor-pointer font-button text-xs font-bold text-[#0757ff]"
          type="button"
        >
          Ver todo
        </button>
      </div>
      <div className="divide-y divide-slate-100">
        {commitments.map((item) => (
          <ScheduleCommitmentItem item={item} key={`${item.title}-${item.time}`} />
        ))}
      </div>
    </article>
  );
};

type ScheduleCommitmentItemProps = {
  item: ScheduleCommitment;
};

const ScheduleCommitmentItem = ({ item }: ScheduleCommitmentItemProps) => {
  return (
    <div className="flex gap-4 px-5 py-4">
      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-50 text-center">
        <span>
          <span className="block text-[10px] font-extrabold text-[#0757ff]">
            {item.label}
          </span>
          <strong className="font-heading text-lg font-extrabold text-[#0757ff]">
            {item.day}
          </strong>
        </span>
      </div>
      <div>
        <h4 className="font-heading text-sm font-extrabold text-slate-950">
          {item.title}
        </h4>
        <p className="mt-1 flex items-center gap-1 text-xs font-medium text-slate-500">
          <Clock3 className="h-3.5 w-3.5" />
          {item.time}
        </p>
        <p className="mt-1 flex items-center gap-1 text-xs font-medium text-slate-500">
          <MapPin className="h-3.5 w-3.5" />
          {item.place}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span
            className={`rounded-full px-2.5 py-1 text-[10px] font-extrabold ${getStatusClass(
              item.status,
            )}`}
          >
            {item.status}
          </span>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-extrabold text-slate-600">
            {item.meetingType}
          </span>
          <span
            className={`rounded-full px-2.5 py-1 text-[10px] font-extrabold ${getImportanceClass(
              item.importance,
            )}`}
          >
            {item.importance}
          </span>
        </div>
      </div>
    </div>
  );
};

const getStatusClass = (status: ScheduleCommitment["status"]) => {
  if (status === "Confirmado") {
    return "bg-emerald-50 text-emerald-600";
  }

  if (status === "Pendiente") {
    return "bg-amber-50 text-amber-600";
  }

  return "bg-red-50 text-red-600";
};

const getImportanceClass = (importance: ScheduleCommitment["importance"]) => {
  if (importance === "Critica") {
    return "bg-red-50 text-red-600";
  }

  if (importance === "Alta") {
    return "bg-orange-50 text-orange-600";
  }

  return "bg-blue-50 text-[#0757ff]";
};
