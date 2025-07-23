import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const AboutMe = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"], 
  });

  const headingY = useTransform(scrollYProgress, [0, 1], ["100px", "0px"]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const contentY = useTransform(scrollYProgress, [0.1, 0.7], ["40px", "0px"]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  const gridY = useTransform(scrollYProgress, [0.2, 0.8], ["60px", "0px"]);
  const gridOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-[#ef3b3b] to-[#b32020] px-6 md:px-16 py-5 text-white "
    >
      <div className="text-center mb-12">
        <motion.h2
          style={{
            y: headingY,
            opacity: headingOpacity,
          }}
          className="text-4xl md:text-6xl font-extrabold text-[#fff5f5] drop-shadow-md mb-20"
        >
          About Me
        </motion.h2>

        <motion.p
          style={{ opacity: contentOpacity, y: contentY }}
          className="max-w-4xl mx-auto text-base md:text-lg leading-relaxed text-white/90"
        >
          I am a Developer and Designer based in Haryana, India 🌍. Fascinated by
          knowledge 🧠 and always curious to learn, I’ve spent my life speaking,
          reading, and writing fluent English. I'm currently exploring RESTful APIs 👩🏾‍💻
          and backend technologies. Outside of work, I enjoy YouTube 💻, music 🎧, and
          creative design. I’m passionate about building responsive and scalable digital
          experiences.
        </motion.p>
      </div>

      <motion.div
        style={{ opacity: gridOpacity, y: gridY,}}
        whileHover={{scale: 1.05, x:5}}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg max-w-4xl mx-auto bg-white/5 p-8 rounded-xl shadow-md backdrop-blur-xl"
      >
        <div className="space-y-3">
          <p><span className="font-semibold text-white">Age:</span> 18</p>
          <p><span className="font-semibold text-white">Gender:</span> Male</p>
          <p><span className="font-semibold text-white">Languages:</span> Hindi, English</p>
        </div>

        <div className="space-y-3">
          <p><span className="font-semibold text-white">Phone:</span> +91-7404648978</p>
          <p>
            <span className="font-semibold text-white">Email:</span>{" "}
            <a
              href="mailto:avigarg258@gmail.com"
              className="underline hover:text-yellow-300 transition"
            >
              avigarg258@gmail.com
            </a>
          </p>
          <p><span className="font-semibold text-white">Address:</span> Haryana, India – 133103</p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
