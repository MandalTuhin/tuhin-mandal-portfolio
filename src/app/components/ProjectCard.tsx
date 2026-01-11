// app/components/ProjectCard.tsx
// app/components/ProjectCard.tsx
import { ReactNode } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  name: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
  image?: ReactNode;
}

const ProjectCard = ({
  name,
  description,
  githubUrl,
  liveUrl,
  image,
}: ProjectCardProps) => {
  return (
    /* h-full ensures the card fills the parent div; flex-col allows mt-auto to work */
    <div className="flex flex-col h-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow-sm shadow-black/5 hover:shadow-lg dark:shadow-white/5 dark:hover:shadow-white/10 transition-all duration-300 hover:-translate-y-1">
      {/* Header Image/Icon */}
      <div className="bg-gray-200 dark:bg-gray-800 h-48 flex items-center justify-center shrink-0">
        {image ? (
          image
        ) : (
          <span className="text-gray-400 dark:text-gray-500">Image</span>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
          {name}
        </h3>

        {/* flex-grow here ensures this section takes up available space */}
        <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
          {description}
        </p>

        {/* mt-auto pins this div to the very bottom of the p-6 container */}
        <div className="flex flex-wrap gap-3 text-sm mt-auto">
          <a
            href={githubUrl}
            className="flex hover:text-pink-600 dark:hover:border-pink-500 dark:hover:text-pink-500 items-center space-x-2 px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md hover:border-pink-500 transition-colors font-medium"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          {liveUrl !== "#" && (
            <a
              href={liveUrl}
              className="flex hover:text-pink-600 dark:hover:border-pink-500 dark:hover:text-pink-500 items-center space-x-2 px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md hover:border-pink-500 transition-colors font-medium"
            >
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
