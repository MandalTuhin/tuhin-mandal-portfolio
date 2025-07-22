// src/components/ThemeToggle.tsx
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Avoid hydration mismatch by waiting for the component to mount.
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render a placeholder on the server to prevent a layout shift.
    return (
      <button
        aria-label="Toggle Dark Mode"
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
        disabled
      >
        <div className="w-6 h-6" />
      </button>
    );
  }

  return (
    <button 
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="cursor-pointer p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
    >
      {resolvedTheme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}
