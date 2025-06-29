import { motion,useScroll } from "motion/react";
import Navbar from "./Navbar";

interface Skill {
  img: string;
  text: string;
}

const Skills = () => {
    const {scrollYProgress} = useScroll(); 
    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      };
      
    interface Skill {
        img: string;
        text: string;
      }
      
      const skillData: Skill[] = [
        {
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          text: "ReactJS",
        },
        {
            img: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
            text: "JavaScript"
        },
        {
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          text: "TypeScript",
        },
        {
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          text: "HTML5",
        },
        {
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          text: "CSS3",
        },
        {
          img: "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000",
          text: "Tailwind CSS",
        },
        {
          img: "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000",
          text: "GitHub",
        },
        {
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          text: "MySQL",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJg0qaCfprZtt-Yzbv62jDodTej4HcxRZtw49sbn5I17NxN_5iBrw5wiFsuNDy170hmU&usqp=CAU",
          text: "Zustand",
        },
      ];
      
  return (
    <div className="bg-[#0a0908] px-10 pt-20 min-w-screen min-h-screen">
        <Navbar/>
      <div className="text-center text-white text-5xl mt-10 mb-20 font-mono font-bold">
        My Skills <span className="text-red-500">&</span> Abilities
      </div>

      <div className="flex flex-col md:flex-row gap-10 mb-16 justify-around items-center">
        <motion.div
          whileHover={{ scale: 1.05, backgroundColor: "#354f52", boxShadow: "0px 8px 20px rgba(0,0,0,0.4)" }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl text-xl text-white p-10 bg-[#2f3e46]/30 font-bold w-full md:w-1/2 text-center"
        >
          ⚡ Building responsive website front end using ReactJS
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, backgroundColor: "#354f52", boxShadow: "0px 8px 20px rgba(0,0,0,0.4)" }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl text-xl text-white p-10 bg-[#2f3e46]/30 font-bold w-full md:w-1/2 text-center"
        >
          ⚡ Creating application backend in Node JS & Express JS
        </motion.div>
      </div>

      <motion.div
      variants={cardVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  transition={{ staggerChildren: 0.1 }}
  className="grid rounded-2xl grid-cols-2 md:grid-cols-4 gap-8 mt-10"
>
  {skillData.map(({ img, text }, index) => (
    <motion.div
      key={text}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.1 }}
      className="flex hover:bg-[#354f52] flex-col items-center bg-[#2f3e46]/30 p-6 rounded-xl shadow hover:shadow-lg transition"
    >
      <img src={img} alt={text} className="w-16 h-16 object-contain mb-4" />
      <p className="text-white font-semibold">{text}</p>
    </motion.div>
  ))}
</motion.div>

<motion.div
        whileHover={{ scale: 1.06 }}
        className="text-center p-5 text-white bg-[#0a0908] py-5 font-bold text-xl"
      >
        Made with ♥️ by Avi
      </motion.div>
    </div>
  );
};

export default Skills;
