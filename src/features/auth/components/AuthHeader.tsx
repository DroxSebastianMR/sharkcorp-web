import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface AuthHeaderProps {
  icon: LucideIcon;
  title: string;
  description?: ReactNode;

  iconContainerClassName?: string;
  iconClassName?: string;

  rounded?: "xl" | "full";

  className?: string;
}

export const AuthHeader = ({
  icon: Icon,
  title,
  description,
  iconContainerClassName = "bg-[#dfe7ff] text-[#0757ff]",
  iconClassName = "bg-[#0757ff]/20",
  rounded = "xl",
  className = "",
}: AuthHeaderProps) => {
  return (
    <header className={className}>
      <div className="relative">
        <div
          className={`
            absolute
            -left-16
            top-0
            flex
            h-12
            w-12
            items-center
            justify-center
            ${rounded === "full" ? "rounded-full" : "rounded-xl"}
            ${iconContainerClassName}
          `}
        >
          <span
            className={`
              absolute
              inset-0
              animate-icon-pulse
              ${rounded === "full" ? "rounded-full" : "rounded-xl"}
              ${iconClassName}
            `}
          />

          <Icon className="relative z-10 h-6 w-6" />
        </div>

        <h1 className="text-[30px] font-extrabold leading-tight tracking-[-0.02em] text-slate-950">
          {title}
        </h1>
      </div>

      {description && (
        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      )}
    </header>
  );
};
