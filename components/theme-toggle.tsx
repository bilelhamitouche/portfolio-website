"use client";

import { useTheme } from "@/context/theme-context";
import { LuMoon, LuSun } from "react-icons/lu";
import Button from "./button";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <Button variant="ghost" size="icon" onClick={toggle}>
      {theme === "dark" ? <LuMoon size="20" /> : <LuSun size="20" />}
    </Button>
  );
}
