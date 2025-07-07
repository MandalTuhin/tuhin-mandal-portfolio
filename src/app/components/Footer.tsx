// app/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="text-center py-8 border-t border-gray-200 dark:border-gray-700 mt-16">
      <p className="text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Tuhin. Built with Next.js and Tailwind
        CSS.
      </p>
    </footer>
  );
};

export default Footer;
