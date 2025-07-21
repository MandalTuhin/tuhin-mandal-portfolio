// app/components/Toolbox.tsx
import {
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const tools = [
  { name: "Node.js", icon: <FaNodeJs size={48} /> },
  { name: "Express.js", icon: <SiExpress size={48} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={48} /> },
  { name: "MongoDB", icon: <SiMongodb size={48} /> },
  { name: "FastAPI", icon: <SiFastapi size={48} /> },
  { name: "TypeScript", icon: <SiTypescript size={48} /> },
  { name: "Next.js", icon: <SiNextdotjs size={48} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={48} /> },
];

const Toolbox = () => {
  return (
    <section id="about" className="py-16">
      <h2 className="text-3xl font-bold mb-4">My Toolbox</h2>
      <p className="dark:text-gray-300 text-gray-600 mb-8">
        The skills, tools and technologies I use to bring my projects to life.
      </p>
      <div className="flex flex-wrap gap-8 justify-center md:justify-start">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex flex-col items-center justify-center p-4 w-32 h-32 
                       border border-gray-200 dark:border-gray-700 
                       rounded-lg shadow-sm bg-white dark:bg-gray-800 
                       hover:shadow-md hover:scale-105 transition-all"
          >
            <div className="text-gray-600 dark:text-gray-300 mb-2">
              {tool.icon}
            </div>
            <p className="font-semibold text-gray-800 dark:text-gray-200 text-center">
              {tool.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Toolbox;
