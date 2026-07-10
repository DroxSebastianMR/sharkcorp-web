import * as React from "react";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";

import { cn } from "@/lib/utils";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "rounded-2xl bg-white p-3 font-sans text-slate-700",
        className,
      )}
      classNames={{
        root: cn(defaultClassNames.root),
        months: "flex flex-col gap-4",
        month: "space-y-3",
        month_caption: "flex h-10 items-center justify-center gap-2",
        caption_label: "sr-only",
        dropdowns: "flex items-center justify-center gap-2",
        dropdown:
          "h-9 cursor-pointer rounded-xl border-0 bg-slate-100 px-3 font-button text-sm font-bold text-slate-700 outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-[#0757ff]",
        dropdown_root: "relative inline-flex items-center",
        chevron: "h-4 w-4 text-slate-500",
        nav: "absolute inset-x-3 top-3 flex items-center justify-between",
        button_previous:
          "grid h-8 w-8 cursor-pointer place-items-center rounded-xl text-slate-500 transition hover:bg-blue-50 hover:text-[#0757ff]",
        button_next:
          "grid h-8 w-8 cursor-pointer place-items-center rounded-xl text-slate-500 transition hover:bg-blue-50 hover:text-[#0757ff]",
        month_grid: "w-full border-collapse",
        weekdays: "grid grid-cols-7",
        weekday:
          "py-2 text-center text-[11px] font-extrabold uppercase tracking-wide text-slate-400",
        week: "grid grid-cols-7",
        day: "grid place-items-center p-0.5 text-center",
        day_button:
          "grid h-9 w-9 cursor-pointer place-items-center rounded-xl text-sm font-bold text-slate-600 transition hover:bg-blue-50 hover:text-[#0757ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0757ff]/35",
        today: "[&>button]:bg-blue-50 [&>button]:text-[#0757ff]",
        selected:
          "[&>button]:bg-[#0757ff] [&>button]:text-white [&>button]:shadow-[0_8px_18px_rgba(7,87,255,0.22)]",
        outside: "[&>button]:text-slate-300",
        disabled: "[&>button]:cursor-not-allowed [&>button]:text-slate-300",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, className: iconClassName, ...iconProps }) => {
          const Icon =
            orientation === "left"
              ? ChevronLeftIcon
              : orientation === "right"
                ? ChevronRightIcon
                : ChevronDownIcon;

          return <Icon className={cn("h-4 w-4", iconClassName)} {...iconProps} />;
        },
      }}
      {...props}
    />
  );
}

export { Calendar };
