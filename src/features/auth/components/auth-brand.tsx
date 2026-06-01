import { Building2 } from "lucide-react";

export const AuthBrand = () => {
  return (
    <div className="flex items-center gap-3">
      <div
        className="
          flex h-9 w-9 items-center justify-center
          rounded-xl
          bg-white/10
          backdrop-blur-md
        "
      >
        <Building2 className="h-4 w-4 text-white" />
      </div>

      <span className="text-sm font-semibold tracking-tight text-white">
        SharkCorp Intranet
      </span>
    </div>
  );
};
