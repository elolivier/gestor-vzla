"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const current = theme === "system" ? systemTheme : theme;

  return (
    <Button
      onClick={() => {
        setTheme(current === "dark" ? "light" : "dark");
      }}
      className="p-2 rounded"
    >
      {current === "dark" ? "🌞 Claro" : "🌙 Oscuro"}
    </Button>
  );
}
