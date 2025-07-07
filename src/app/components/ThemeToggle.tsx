// src/components/ThemeToggle.tsx
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = resolvedTheme || theme;

  return (
    <button 
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      className="cursor-pointer p-2 rounded-full focus:outline-none focus:ring bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
    >
      {current === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
