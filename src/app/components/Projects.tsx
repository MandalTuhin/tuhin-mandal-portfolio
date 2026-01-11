// app/components/Projects.tsx
import ProjectCard from "./ProjectCard";
import { FaServer, FaChartLine } from "react-icons/fa";

const projects = [
  {
    name: "KPA-api",
    description:
      "A backend API for submitting and retrieving form data securely.",
    githubUrl: "https://github.com/MandalTuhin/KPA-api",
    liveUrl: "#",
    image: <FaServer size={64} className="text-gray-400 dark:text-gray-500" />,
  },
  {
    name: "LeetCode Tracker API",
    description:
      "High-performance RESTful API for tracking LeetCode progress, built with FastAPI",
    githubUrl: "https://github.com/MandalTuhin/leetcode-tracker-api",
    liveUrl: "https://leetcode-tracker-api-production.up.railway.app/docs",
    image: (
      <FaChartLine size={64} className="text-gray-400 dark:text-gray-500" />
    ),
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Things I have Built</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.name} className="h-full">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>{" "}
    </section>
  );
};

export default Projects;
