import './HomePage.css';
import { ReactTyped } from "react-typed";
import { motion } from 'motion/react';
import LetterHoverMotion from '../LetterHoverMotion';
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import image from '../assests/img.jpeg';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className="relative pt-10  md:pb-[150px] pb-[100px] min-w-screen bg-[#0a0908] text-white overflow-hidden">

      <div className="md:p-20 pb-[100px] flex flex-col md:flex-row mt-10 gap-16 md:gap-10 justify-between items-center">
        <div className="w-full md:w-1/2 ml-10">
          <div className="text-5xl md:text-7xl  mb-5">
            <LetterHoverMotion text="HELLO, I'M " className="outline-text" />
            <LetterHoverMotion text="AVI GARG" className="filled-text" />
          </div>

          <motion.div
            whileHover={{ paddingLeft: 16, scale: 1.03 }}
            className="text-2xl into-text"
          >
            I am into{" "}
            <span className="text-red-500">
              <ReactTyped
                strings={[
                  "Web Development",
                  "Frontend Development",
                  "Backend Development",
                 "MERN Stack"
                ]}
                typeSpeed={80}
                loop
              />
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03, paddingLeft: 16 }}
            className="mt-5 text-gray-500 font-sans pr-5"
          >
            I make websites that are easy to use, meet the client's needs, and work well even as they grow. I pay close attention to every little thing to make sure they work fast and are reliable.
          </motion.div>

          <div className="mt-5 mb-5 flex space-x-5 cursor-pointer text-2xl">
            <motion.span whileHover={{ scale: 1.6 }}>
            <a href="https://github.com/gargavi-oss" target="_blank" rel="noopener noreferrer">
  <IoLogoGithub className="text-2xl hover:text-red-500 transition duration-300" />
</a>

            </motion.span>
            <motion.span whileHover={{ scale: 1.6 }}>
              
              <a href="https://www.linkedin.com/in/avi-garg-401884321/" target="_blank" rel="noopener noreferrer">
  <FaLinkedin className="text-2xl hover:text-red-500 transition duration-300" />
</a>

            </motion.span>
            <motion.span whileHover={{ scale: 1.5 }}>
             
              <a href="https://www.instagram.com/garg__avi/" target="_blank" rel="noopener noreferrer">
  <FaInstagram className="text-2xl hover:text-red-500 transition duration-300" />
</a>
            </motion.span>
          </div>

          <div className="flex gap-6 mt-8">
         
            <motion.button     
              onClick={()=>{navigate("/contactme")}}
              whileTap={{ paddingTop: 20 }}
              className="h-11 px-5 rounded-3xl border-2 z-50 cursor-pointer  hover:border-red-600 hover:bg-[#343a40]"
            >
         Hire Me
            </motion.button>
         
            <motion.button

              whileTap={{ paddingTop: 20 }}
              className="btn btn-active btn-primary z-50 bg-red-600 hover:bg-[#ddb892] border-red-400 h-11 px-5 rounded-3xl border-2 cursor-pointer"
            >
             <a href="https://drive.google.com/file/d/1icWweUGFISUwsEjuLKfhUj-7n0R22vZN/view?usp=sharing" className=''>Get Resume</a>
            </motion.button>
           
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center">
          <motion.img
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.4 }}
            src={image}
            className="h-[400px] w-[400px] object-cover rounded-2xl shadow-lg"
            alt="Avi Garg"
          />
        </div>
      </div>

      <div className="
      absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
  <svg
    id="wave"
    viewBox="0 0 1440 260"
    xmlns="http://www.w3.org/2000/svg"
    className="block w-full -mb-1"
  >
   <defs>
  <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
    <stop stopColor="#ef3b3b" offset="0%" />
    <stop stopColor="#0a0908" offset="100%" />
  </linearGradient>
</defs>

    <path
      fill="url(#sw-gradient-0)"
      d="M0,26L26.7,52C53.3,78,107,130,160,160.3C213.3,191,267,199,320,186.3C373.3,173,427,139,480,108.3C533.3,78,587,52,640,73.7C693.3,95,747,165,800,190.7C853.3,217,907,199,960,173.3C1013.3,147,1067,113,1120,108.3C1173.3,104,1227,130,1280,125.7C1333.3,121,1387,87,1440,60.7L1440,260L0,260Z"
    />
  </svg>
</div>

    
    </div>
  );
};

export default HomePage;
