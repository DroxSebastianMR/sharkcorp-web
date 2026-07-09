import type { CSSProperties } from "react";

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

import { useThemeContext } from "@/app/providers/theme";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useThemeContext();

  return (
    <Sonner
      theme={theme}
      position="top-right"
      closeButton
      richColors={false}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4 text-primary" />,
        info: <InfoIcon className="size-4 text-primary" />,
        warning: <TriangleAlertIcon className="size-4 text-amber-500" />,
        error: <OctagonXIcon className="size-4 text-destructive" />,
        loading: <Loader2Icon className="size-4 animate-spin text-primary" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "calc(var(--radius) * 1.2)",
        } as CSSProperties
      }
      toastOptions={{
        classNames: {
          toast:
            "border-border bg-popover text-popover-foreground shadow-xl font-sans",
          title: "font-button text-sm font-semibold",
          description: "text-sm text-muted-foreground",
          actionButton:
            "bg-primary text-primary-foreground font-button hover:bg-primary/90",
          cancelButton: "bg-muted text-muted-foreground font-button",
          closeButton:
            "border-border bg-background text-muted-foreground hover:text-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
