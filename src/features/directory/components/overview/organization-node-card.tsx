import type { DirectoryNode } from "@/features/directory/types/directory.types";

type OrganizationNodeCardProps = {
  node: DirectoryNode;
  size?: "root" | "executive" | "department";
};

export const OrganizationNodeCard = ({
  node,
  size = "department",
}: OrganizationNodeCardProps) => {
  const Icon = node.icon;
  const isRoot = size === "root";
  const isExecutive = size === "executive";

  return (
    <article
      className={[
        "relative rounded-2xl border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(14,43,92,0.1)]",
        isRoot
          ? "border-[#0757ff] shadow-[0_16px_32px_rgba(7,87,255,0.12)]"
          : "border-slate-200",
        isExecutive ? "bg-blue-50/40" : "",
      ].join(" ")}
    >
      <div className="flex items-start gap-3">
        <span
          className={[
            "grid shrink-0 place-items-center rounded-2xl",
            size === "department" ? "h-11 w-11" : "h-12 w-12",
            node.accentClass,
          ].join(" ")}
        >
          <Icon className={size === "department" ? "h-5 w-5" : "h-6 w-6"} />
        </span>
        <div className="min-w-0">
          <h3
            className={[
              "font-heading font-extrabold leading-tight",
              isRoot ? "text-lg text-[#0757ff]" : "text-sm text-slate-950",
            ].join(" ")}
          >
            {node.title}
          </h3>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.08em] text-slate-500">
            {node.subtitle}
          </p>
        </div>
      </div>

      {node.acronym ? (
        <span className="mt-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold text-[#0757ff]">
          {node.acronym}
        </span>
      ) : null}
    </article>
  );
};
