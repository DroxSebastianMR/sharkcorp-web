import type { LucideIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

interface AuthInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  Icon: LucideIcon;
  rightElement?: React.ReactNode;
}

export const AuthInput = ({
  id,
  label,
  type = "text",
  placeholder,
  Icon,
  rightElement,
}: AuthInputProps) => {
  return (
    <div className="space-y-3">
      <label htmlFor={id} className="text-[13px] font-medium">
        {label}
      </label>

      <div
        className="
          group
          relative
          overflow-hidden
          rounded-xl
          border
          border-border
          bg-muted
          transition-all
          duration-200
          focus-within:border-primary
          focus-within:ring-4
          focus-within:ring-primary/10
        "
      >
        <Icon
          size={16}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-muted-foreground
            transition-colors
            duration-200
            group-focus-within:text-primary
          "
        />

        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          className="
            h-12
            border-0
            bg-transparent
            pl-11
            pr-11
            text-sm
            shadow-none
            focus-visible:ring-0
            focus-visible:border-0
          "
        />

        {rightElement && (
          <div
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-muted-foreground
              transition-colors
              duration-200
              group-focus-within:text-primary
            "
          >
            {rightElement}
          </div>
        )}
      </div>
    </div>
  );
};
