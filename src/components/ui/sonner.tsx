import type { CSSProperties } from "react";

import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  Info,
  Loader2Icon,
} from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

import { useThemeContext } from "@/app/providers/theme";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useThemeContext();

  return (
    <Sonner
      theme={theme}
      position="bottom-right"
      closeButton
      richColors={false}
      className="toaster group"
      icons={{
        success: <CheckCircle className="size-4 text-emerald-600" />,
        info: <Info className="size-4 text-[#0757ff]" />,
        warning: <AlertTriangle className="size-4 text-amber-600" />,
        error: <AlertCircle className="size-4 text-destructive" />,
        loading: <Loader2Icon className="size-4 animate-spin text-[#0757ff]" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "calc(var(--radius) * 1.35)",
        } as CSSProperties
      }
      toastOptions={{
        classNames: {
          toast:
            "relative w-full max-w-xs gap-3 rounded-xl border border-border bg-popover p-3 pr-10 text-popover-foreground shadow-[0_18px_45px_rgba(15,23,42,0.16)] font-sans data-[type=success]:border-emerald-600/50 data-[type=error]:border-destructive/50 data-[type=warning]:border-amber-600/50",
          icon: "mt-0.5",
          title:
            "font-button text-xs font-semibold leading-none data-[type=success]:text-emerald-600 data-[type=error]:text-destructive data-[type=warning]:text-amber-600",
          description: "mt-1 text-xs text-muted-foreground",
          actionButton:
            "h-8 cursor-pointer rounded-lg bg-primary px-3 font-button text-xs font-bold text-primary-foreground hover:bg-primary/90",
          cancelButton: "bg-muted text-muted-foreground font-button",
          closeButton:
            "!absolute !left-auto !right-3 !top-1/2 !h-6 !w-6 !translate-x-0 !-translate-y-1/2 !border-0 !bg-transparent !text-muted-foreground !shadow-none transition hover:!bg-transparent hover:!text-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
