import type { LucideIcon } from "lucide-react";

interface DashboardStatCardProps {
  label: string;
  value: string | number;
  detail: string;
  color: string;
  sparkline: string;
  icon: LucideIcon;
}

export const DashboardStatCard = ({
  label,
  value,
  detail,
  color,
  sparkline,
  icon: Icon,
}: DashboardStatCardProps) => {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.1)] ring-1 ring-slate-200/70">
      <div className="flex items-start gap-3">
        <span
          className="grid h-9 w-9 place-items-center rounded-xl"
          style={{
            backgroundColor: `${color}14`,
            color,
          }}
        >
          <Icon className="h-4.5 w-4.5" strokeWidth={2.5} />
        </span>

        <div>
          <p className="font-heading text-xs font-extrabold text-slate-950">
            {label}
          </p>

          <strong className="mt-1 block font-heading text-3xl font-extrabold leading-none text-slate-950">
            {value}
          </strong>

          <span className="mt-2 block text-xs font-extrabold text-emerald-600">
            {detail}
          </span>
        </div>
      </div>

      <svg
        className="mt-4 h-16 w-full"
        preserveAspectRatio="none"
        viewBox="0 0 192 92"
      >
        <path d={`${sparkline} L184 92 L8 92 Z`} fill={color} opacity="0.08" />

        <path
          d={sparkline}
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="4"
        />
      </svg>
    </article>
  );
};
