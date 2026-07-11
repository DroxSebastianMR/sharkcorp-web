import { OrganizationNodeCard } from "@/features/directory/components/overview/organization-node-card";
import type { DirectoryNode } from "@/features/directory/types/directory.types";

type OrganizationChartProps = {
  chart: DirectoryNode;
};

export const OrganizationChart = ({ chart }: OrganizationChartProps) => {
  const executives = chart.children ?? [];

  return (
    <section className="sidebar-scroll-hidden mt-8 overflow-x-auto overflow-y-hidden rounded-3xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <div className="min-w-[1680px]">
        <div className="mx-auto w-[360px]">
          <OrganizationNodeCard node={chart} size="root" />
        </div>

        <div className="mx-auto h-10 w-px bg-slate-300" />
        <div className="mx-auto h-px w-[1420px] bg-slate-300" />

        <div
          className="grid items-start gap-5 pt-8"
          style={{
            gridTemplateColumns: `repeat(${executives.length}, minmax(0, 1fr))`,
          }}
        >
          {executives.map((executive) => (
            <div className="relative" key={executive.id}>
              <span className="absolute -top-8 left-1/2 h-8 w-px -translate-x-1/2 bg-slate-300" />
              <OrganizationNodeCard node={executive} size="executive" />

              {executive.children?.length ? (
                <>
                  <div className="mx-auto h-8 w-px bg-slate-300" />
                  <div
                    className={[
                      "mx-auto grid items-start gap-3",
                      executive.children.length === 1
                        ? "grid-cols-1"
                        : "grid-cols-2",
                    ].join(" ")}
                  >
                    {executive.children.map((area) => (
                      <div className="relative" key={area.id}>
                        <span className="absolute -top-8 left-1/2 h-8 w-px -translate-x-1/2 bg-slate-300" />
                        <OrganizationNodeCard node={area} />

                        {area.children?.length ? (
                          <div className="relative left-1/2 mt-8 w-[620px] -translate-x-1/2 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4">
                            <span className="absolute -top-8 left-1/2 h-8 w-px -translate-x-1/2 bg-slate-300" />
                            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.12em] text-slate-400">
                              Subareas
                            </p>
                            <div className="grid grid-cols-3 gap-4">
                              {area.children.map((team) => (
                                <div key={team.id}>
                                  <OrganizationNodeCard node={team} />
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
