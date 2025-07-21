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
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm bg-white dark:bg-gray-900 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="bg-gray-200 dark:bg-gray-800 h-48 flex items-center justify-center">
        {image ? (
          image
        ) : (
          <span className="text-gray-400 dark:text-gray-500">Image</span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 min-h-[60px]">{description}</p>
        <div className="flex space-x-4 text-sm">
          <a href={githubUrl} className="flex items-center space-x-2 px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md hover:border-pink-500 hover:text-pink-600 dark:hover:border-pink-500 dark:hover:text-pink-500 transition-colors font-medium">
            <FaGithub />
            <span>GitHub</span>
          </a>
          {liveUrl !== "#" && (
            <a href={liveUrl} className="flex items-center space-x-2 px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md hover:border-pink-500 hover:text-pink-600 dark:hover:border-pink-500 dark:hover:text-pink-500 transition-colors font-medium">
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
