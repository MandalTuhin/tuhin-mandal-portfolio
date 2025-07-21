// app/components/Navbar.tsx
"use client";

import ThemeToggle from "./ThemeToggle";
import { useActiveSection } from "../hooks/useActiveSection";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "Toolbox" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const activeSection = useActiveSection(navLinks.map((link) => link.id));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
        <div className="font-bold text-xl text-gray-900 dark:text-gray-100">
          Tuhin
        </div>
        <div className="hidden items-center space-x-8 text-gray-600 dark:text-gray-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative transition-colors hover:text-black dark:hover:text-gray-100 ${
                activeSection === link.id
                  ? "text-pink-600 dark:text-pink-500"
                  : ""
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-pink-600 dark:bg-pink-500"></span>
              )}
            </a>
          ))}
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Navbar;
