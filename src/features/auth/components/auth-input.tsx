import type { ComponentProps, ReactNode } from "react";

import type { LucideIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface AuthInputProps extends ComponentProps<"input"> {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  Icon: LucideIcon;
  rightElement?: ReactNode;
  error?: string;
}

export const AuthInput = ({
  id,
  label,
  type = "text",
  placeholder,
  Icon,
  rightElement,
  error,
  className,
  ...props
}: AuthInputProps) => {
  const isPassword = type === "password";
  const hasError = Boolean(error);

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-semibold text-slate-900">
        {label}
      </label>

      <div
        className={cn(
          `
            group
            relative
            overflow-hidden
            rounded-xl
            border
            bg-muted
            transition-all
            duration-200
            focus-within:border-primary
            focus-within:ring-4
            focus-within:ring-primary/10
          `,
          hasError
            ? "border-destructive focus-within:border-destructive focus-within:ring-destructive/10"
            : "border-border",
        )}
        aria-invalid={hasError}
        data-invalid={hasError}
      >
        <Icon
          size={16}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-slate-500
            transition-colors
            duration-200
            group-focus-within:text-[#0757ff]
          "
        />

        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${id}-error` : undefined}
          className={cn(
            `
              h-12
              border-0
              bg-transparent
              pl-11
              pr-11
              text-sm
              text-slate-900
              shadow-none
              focus-visible:ring-0
              focus-visible:border-0
            `,
            isPassword && "tracking-[0.24em] placeholder:tracking-normal",
            className,
          )}
          {...props}
        />

        {rightElement && (
          <div
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-slate-500
              transition-colors
              duration-200
              group-focus-within:text-[#0757ff]
            "
          >
            {rightElement}
          </div>
        )}
      </div>

      {error && (
        <p id={`${id}-error`} className="text-xs font-semibold text-destructive">
          {error}
        </p>
      )}
    </div>
  );
};
