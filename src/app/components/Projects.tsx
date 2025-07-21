// app/components/Projects.tsx
import ProjectCard from "./ProjectCard";
import { FaServer } from "react-icons/fa";

const projects = [
  {
    name: "KPA-api",
    description: "A backend API for submitting and retrieving form data securely.",
    githubUrl: "https://github.com/MandalTuhin/KPA-api",
    liveUrl: "#",
    image: <FaServer size={64} className="text-gray-400 dark:text-gray-500" />,
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Things I have Built</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
