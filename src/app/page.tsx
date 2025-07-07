// app/page.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Toolbox from "./components/Toolbox";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

    <main className="container mx-auto max-w-4xl px-4 dark:bg-gray-900 dark:text-gray-100 bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Projects />
      <Toolbox />
      <Contact />
      <Footer />
    </main>
    </div>
  );
}
