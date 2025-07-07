// app/components/Navbar.tsx
// import { Moon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-8">
      <div className="font-bold text-xl text-gray-900 dark:text-gray-100">Tuhin</div>
      <div className="hidden md:flex items-center space-x-8 text-gray-600 dark:text-gray-300">
        <a href="#home" className="hover:text-black dark:hover:text-gray-100">
          Home
        </a>
        <a href="#projects" className="hover:text-black dark:hover:text-gray-100">
          Projects
        </a>
        <a href="#about" className="hover:text-black dark:hover:text-gray-100">
          About
        </a>
        <a href="#contact" className="hover:text-black dark:hover:text-gray-100">
          Contact
        </a>
      </div>
      <button>
        <ThemeToggle />
      </button>
    </nav>
  );
};

export default Navbar;
