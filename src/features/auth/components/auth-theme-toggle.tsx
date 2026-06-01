import { MoonStar, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useTheme } from "@/hooks/use-theme";

export const AuthThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={
        theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"
      }
      className="
        h-10
        w-10
        cursor-pointer
        rounded-full
        bg-muted/50
        text-muted-foreground
        transition-all
        duration-200
        hover:scale-105
        hover:bg-muted
        hover:text-foreground
        active:scale-95
      "
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <MoonStar className="h-4 w-4" />
      )}
    </Button>
  );
};
