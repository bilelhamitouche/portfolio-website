"use client";

import { LuMoon, LuSun } from "react-icons/lu";
import Button from "./button";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <LuMoon size="20" /> : <LuSun size="20" />}
    </Button>
  );
}
