import type { ProjectPriority } from "@/features/projects/types/projects.types";

type ProjectPrioritySelectorProps = {
  priorities: ProjectPriority[];
};

export const ProjectPrioritySelector = ({
  priorities,
}: ProjectPrioritySelectorProps) => {
  return (
    <div className="md:col-span-2">
      <p className="font-heading text-sm font-bold text-slate-700">Prioridad</p>
      <div className="mt-2 grid gap-3 sm:grid-cols-3">
        {priorities.map((priority) => (
          <button
            className={[
              "h-11 cursor-pointer rounded-xl border font-button text-sm font-bold transition",
              priority.selected
                ? "border-[#0757ff] bg-blue-50 text-[#0757ff]"
                : "border-slate-200 bg-white text-slate-700 hover:border-[#0757ff] hover:text-[#0757ff]",
            ].join(" ")}
            key={priority.label}
            type="button"
          >
            {priority.label}
          </button>
        ))}
      </div>
    </div>
  );
};
