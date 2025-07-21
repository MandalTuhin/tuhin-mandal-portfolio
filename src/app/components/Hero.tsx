// app/components/Hero.tsx
const Hero = () => {
  return (
    <section id="home" className="text-center py-20">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
        Hi, I&apos;m Tuhin.
      </h1>
      <h2 className="text-4xl md:text-5xl font-light text-gray-800 dark:text-gray-200 mb-6">
        A backend developer who builds robust and scalable systems.
      </h2>
      <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
        Focused on writing clean, efficient, and secure code.
      </p>
      <a
        href="#projects"
        className="bg-pink-600 text-white dark:bg-pink-600 dark:text-gray-100 font-semibold py-3 px-8 rounded-lg hover:bg-pink-700 dark:hover:bg-pink-500 transition-colors"
      >
        View Projects
      </a>
    </section>
  );
};

export default Hero;
