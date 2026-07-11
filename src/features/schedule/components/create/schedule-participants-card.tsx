import { Plus, Search, Users } from "lucide-react";

import type {
  ScheduleParticipant,
  ScheduleSuggestedParticipant,
} from "@/features/schedule/types/schedule.types";

type ScheduleParticipantsCardProps = {
  selectedParticipants: ScheduleParticipant[];
  suggestedParticipants: ScheduleSuggestedParticipant[];
};

export const ScheduleParticipantsCard = ({
  selectedParticipants,
  suggestedParticipants,
}: ScheduleParticipantsCardProps) => {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <h3 className="flex items-center gap-2 font-heading text-xl font-extrabold text-[#083da8]">
        <Users className="h-5 w-5" />
        Participantes
      </h3>

      <div className="mt-4 flex h-12 items-center gap-2 rounded-xl bg-slate-100 px-4 text-slate-400">
        <Search className="h-4 w-4" />
        <span className="text-sm font-medium">Buscar por nombre</span>
        <button
          aria-label="Agregar participante"
          className="ml-auto grid h-8 w-8 cursor-pointer place-items-center rounded-lg bg-blue-50 text-[#0757ff] transition hover:bg-blue-100"
          type="button"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 rounded-2xl border border-dashed border-slate-300 p-4">
        <div className="space-y-2">
          {selectedParticipants.map((person, index) => (
            <div
              className={[
                "flex items-center gap-3 rounded-full px-3 py-2",
                index === 0 ? "bg-[#0757ff] text-white" : "bg-slate-100 text-slate-600",
              ].join(" ")}
              key={person.name}
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20 text-[10px] font-extrabold">
                {person.initials}
              </span>
              <span className="min-w-0 flex-1 truncate text-xs font-bold">
                {person.name} ({person.detail})
              </span>
              {index > 0 ? (
                <button className="cursor-pointer text-xs" type="button">
                  x
                </button>
              ) : null}
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs font-medium text-slate-400">
          Agrega hasta 25 participantes.
        </p>
      </div>

      <p className="mt-5 font-heading text-xs font-extrabold uppercase tracking-[0.1em] text-slate-400">
        Sugeridos frecuentemente
      </p>
      <div className="mt-3 space-y-3">
        {suggestedParticipants.map((person) => (
          <button
            className="flex w-full cursor-pointer items-center gap-3 rounded-xl p-2 text-left transition hover:bg-slate-50"
            key={person.name}
            type="button"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#2e4a93] text-xs font-extrabold text-white">
              {person.initials}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-bold text-slate-700">
                {person.name}
              </span>
              <span className="block truncate text-xs font-medium text-slate-400">
                {person.role}
              </span>
            </span>
            <Plus className="h-4 w-4 text-[#0757ff]" />
          </button>
        ))}
      </div>
    </article>
  );
};
