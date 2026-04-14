"use client";

import { useTheme } from "@/context/theme-context";
import { LuMoon, LuSun } from "react-icons/lu";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button onClick={toggle}>
      {theme === "dark" ? <LuMoon /> : <LuSun />}
    </button>
  );
}
