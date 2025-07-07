// app/components/Toolbox.tsx
const Toolbox = () => {
  return (
    <section id="about" className="py-16">
      <h2 className="text-3xl font-bold mb-4">My Toolbox</h2>
      <p className="dark:text-gray-300 text-gray-600 mb-8">
        These are the tools I reach for regularly.
      </p>
      <div className="flex flex-wrap gap-x-8 gap-y-4 text-lg font-semibold dark:text-gray-300 text-gray-700">
        {/* For logos, you can use SVGs or an icon library */}
        <span>NEXT.js</span>
        <span>Tailwind CSS</span>
        <span>TypeScript</span>
        <span>Node.js</span>
        <span>MongoDB</span>
      </div>
    </section>
  );
};

export default Toolbox;
