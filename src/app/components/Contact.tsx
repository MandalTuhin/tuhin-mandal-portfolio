// app/components/Contact.tsx
const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Contact</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Want to connect or collaborate? I'd love to hear from you.
      </p>
      <div className="flex flex-col space-y-2 text-gray-700 dark:text-gray-200">
        <a
          href="mailto:tuhin@example.com"
          className="font-medium hover:underline"
        >
          Email: mandaltuhin7@gmail.com
        </a>
        <a href="https://github.com/MandalTuhin/" className="font-medium hover:underline">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/tuhin-mandal-2157102aa/" className="font-medium hover:underline">
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
