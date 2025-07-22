import { motion} from "motion/react";
import Navbar from "./Navbar";


const Skills = () => {

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
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Redux_Logo.png/1600px-Redux_Logo.png",
          text: "React Redux"
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
          img: "data:image/png;base64,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",
          text: "Node Js"
        },
        {
          img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fsearch%3Fq%3Dexpressjs&psig=AOvVaw1X9LwhWhV40d3YyPPe439W&ust=1753290622662000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNiqu-z60I4DFQAAAAAdAAAAABAE",
          text: "Express Js"
        },
        {
          img: "https://w7.pngwing.com/pngs/63/19/png-transparent-mongodb-database-nosql-postgresql-mongo-text-logo-business-thumbnail.png",
          text: "MongoDB"
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
