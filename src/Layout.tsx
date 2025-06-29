import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import ProjectExperience from "./components/Project&Experience";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

const Layout = () => {
  return (
    <>
      <Navbar />

      <section id="home">
        <HomePage />
      </section>

      <section id="about me">
        <AboutMe />
      </section>

      <section id="projects">
        <ProjectExperience />
      </section>

      <motion.div
        whileHover={{ scale: 1.06 }}
        className="text-center text-white bg-[#0a0908] py-5 font-bold text-xl"
      >
        Made with ♥️ by Avi
      </motion.div>
    </>
  );
};

export default Layout;
