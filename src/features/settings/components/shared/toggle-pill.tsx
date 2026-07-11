type TogglePillProps = {
  enabled: boolean;
  label?: string;
};

export const TogglePill = ({ enabled, label }: TogglePillProps) => {
  return (
    <span
      aria-label={label}
      className={[
        "flex h-7 w-12 items-center rounded-full p-1",
        enabled ? "justify-end bg-[#0757ff]" : "justify-start bg-slate-300",
      ].join(" ")}
    >
      <span className="h-5 w-5 rounded-full bg-white shadow-sm" />
    </span>
  );
};
