// app/components/Projects.tsx
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Kitabein",
    description: "Share and borrow books near you.",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    name: "PlantShare",
    description: "A platform for sharing your garden to the world.",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    name: "Where is my Bus?",
    description: "A real-time bus tracking application.",
    githubUrl: "#",
    liveUrl: "#",
  },
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
