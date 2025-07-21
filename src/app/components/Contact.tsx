import {FaGithub, FaEnvelope, FaLinkedin} from "react-icons/fa";

// app/components/Contact.tsx
const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Contact</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Want to connect or collaborate? I would love to hear from you.
      </p>
      <div className="flex flex-col space-y-2 text-gray-700 dark:text-gray-200">
        <a
          href="mailto:mandaltuhin7@gmail.com"
          className="font-medium hover:underline"
        >
        <FaEnvelope className="inline mr-2" />
          Email: mandaltuhin7@gmail.com
        </a>
        <a href="https://github.com/MandalTuhin/" className="font-medium hover:underline">
         <FaGithub className="inline mr-2" />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/tuhin-mandal-2157102aa/" className="font-medium hover:underline">
          <FaLinkedin className="inline mr-2" />
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
