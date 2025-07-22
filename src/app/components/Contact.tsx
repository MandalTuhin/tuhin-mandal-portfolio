import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import ContactForm from "./ContactForm";
import CopyableLink from "./CopyableLink";

// app/components/Contact.tsx
const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Contact
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Want to connect or collaborate? I would love to hear from you. Feel free
        to reach out via my social links or the form below.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <div className="flex flex-col space-y-4 text-gray-700 dark:text-gray-300">
            <CopyableLink
              href="mailto:mandaltuhin7@gmail.com"
              copyText="mandaltuhin7@gmail.com"
            >
              <FaEnvelope size={20} />
              <span>mandaltuhin7@gmail.com</span>
            </CopyableLink>
            <a
              href="https://github.com/MandalTuhin/"
              className="font-medium hover:text-pink-600 dark:hover:text-pink-500 transition-colors flex items-center gap-3"
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/tuhin-mandal-2157102aa/"
              className="font-medium hover:text-pink-600 dark:hover:text-pink-500 transition-colors flex items-center gap-3"
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
