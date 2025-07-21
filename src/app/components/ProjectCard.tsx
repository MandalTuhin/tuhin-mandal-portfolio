// app/components/ProjectCard.tsx
interface ProjectCardProps {
  name: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
}

const ProjectCard = ({
  name,
  description,
  githubUrl,
  liveUrl,
}: ProjectCardProps) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm bg-white dark:bg-gray-900 hover:border-pink-500 dark:hover:border-pink-600 transition-all">
      <div className="bg-gray-200 dark:bg-gray-800 h-48 flex items-center justify-center">
        {/* Placeholder for project image */}
        <span className="text-gray-400 dark:text-gray-500">Image</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 min-h-[60px]">{description}</p>
        <div className="flex space-x-4">
          <a href={githubUrl} className="font-medium hover:underline">
            GitHub
          </a>
          {liveUrl !== "#" && (
            <a href={liveUrl} className="font-medium hover:underline">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
