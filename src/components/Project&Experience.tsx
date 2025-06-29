import { motion,useScroll } from "motion/react";

const ProjectExperience = () => {
    const {scrollYProgress}= useScroll()
  return (
    <section
      className="min-w-screen min-h-screen text-white px-6 md:px-20 py-20"
      style={{
        background: "linear-gradient(to bottom, #0a0908, #ef3b3b)",
      }}
    >
      <div className="text-center max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
        <motion.span
  whileHover={{ scale: 1.2,y:12, color: "#ef4444" }} 
  transition={{ type: "spring", stiffness: 300 }}
  className="text-white"
>
  Projects
</motion.span>{" "}
<motion.span
  whileHover={{ scale: 1.2,y:12, color: "#ef4444" }} 
  transition={{ type: "spring", stiffness: 300 }}
  className="text-white"
>& </motion.span>
<motion.span
  whileHover={{ scale: 1.2,y:12, color: "#ef4444" }} 
  transition={{ type: "spring", stiffness: 300 }}
  className="text-white"
>Experiences</motion.span>
        </h2>

        <p className="text-lg md:text-xl py-5 text-gray-300 mb-10 px-4">
          You can find all of my projects on my GitHub profile — from complete apps to ongoing builds. I'm passionate about crafting clean, scalable code and always exploring new ideas. 
          Feel free to explore, star a project, or drop a comment to start a discussion. I'm also open to collaborations, so connect with me through the social links below.
        </p>

        <div className="mt-6">
          <a
            href="https://github.com/gargavi-oss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button whileHover={{scale:1.1, y:5}} className="bg-red-600 hover:bg-red-500 cursor-pointer transition duration-300 text-white text-lg font-semibold px-6 py-3 rounded-3xl shadow-md">
              ⭐️ Star Me On GitHub
            </motion.button>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 px-4 md:px-0">
     
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          style={{scaleX: scrollYProgress}}
          className="bg-[#1a1a1a] rounded-xl p-6 text-left shadow-lg"
        >
          <img
            src="https://cdn.pixabay.com/photo/2018/08/13/22/53/resume-3604240_1280.jpg"
            alt="Resume Builder"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-bold text-red-500">Resume Builder</h3>
          <p className="mt-2 text-gray-400 text-sm">
            A React-based app to build and download customizable resumes. Includes real-time editing and live preview.
          </p>
          <div className="mt-4 flex gap-5">
            <a
              href="https://github.com/gargavi-oss/Resume-Builder"
              className="text-red-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code →
            </a>
            <a
              href="https://resume-project-red.vercel.app/"
              className="text-red-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo →
            </a>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          style={{scaleX: scrollYProgress}}
          className="bg-[#1a1a1a] rounded-xl p-6 text-left shadow-lg"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Library Project"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-bold text-red-500">Library Project</h3>
          <p className="mt-2 text-gray-400 text-sm">
            A virtual library interface to manage book listings using simple JS and DOM logic.
          </p>
          <div className="mt-4 flex gap-5">
            <a
              href="https://github.com/gargavi-oss/LibraryProject"
              className="text-red-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code →
            </a>
            <a
              href="https://gargavi-oss.github.io/LibraryProject/"
              className="text-red-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectExperience;
