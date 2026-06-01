import { useEffect, useMemo, useState, type PropsWithChildren } from "react";

import { ThemeContext, type Theme } from "./theme-context";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;

    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme: setThemeState,
      toggleTheme: () =>
        setThemeState((current) => (current === "light" ? "dark" : "light")),
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
