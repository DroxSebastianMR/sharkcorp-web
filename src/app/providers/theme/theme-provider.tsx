import { useEffect, useMemo, type PropsWithChildren } from "react";

import { ThemeContext, type Theme } from "./theme-context";

const LIGHT_THEME: Theme = "light";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", LIGHT_THEME);
  }, []);

  const value = useMemo(
    () => ({
      theme: LIGHT_THEME,
      setTheme: () => undefined,
      toggleTheme: () => undefined,
    }),
    [],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
