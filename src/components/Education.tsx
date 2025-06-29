import Navbar from "./Navbar";
import { motion,useScroll } from "motion/react";
import logo from "../assests/thaparlogo.png";
import { FaCheckCircle } from "react-icons/fa";
import schoollogo from '../assests/school.png';

const Education = () => {
    const {scrollYProgress} = useScroll()
  return (
    <div className="bg-[#0a0908] px-6 md:px-10 pt-20 min-h-screen w-full">
      <Navbar />

      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.5 }}
        className="bg-[#2f3e46]/30 mt-16 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-10 shadow-xl border border-[#ffffff22]"
      >

        <motion.img
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="object-cover w-full md:w-[500px] h-[300px] rounded-3xl shadow-md"
          src="https://www.thapar.edu/images/phocagallery/Thapar_Uni/481222_10200103839211427_1230338241_n.jpg"
          alt="Thapar Campus"
        />

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-white w-full md:w-2/3">
       
          <motion.img
            whileHover={{ scale: 1.1, rotate: 3 }}
            src={logo}
            alt="Thapar Logo"
            className="w-50 h-40 object-contain drop-shadow-xl"
          />

          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl hover:text-red-500 font-bold text-[#edf2f4]">
              Thapar Institute of Engineering & Technology
            </h3>
            <p className="text-lg text-gray-300">B.E. in Electronics and Communication</p>
            <p className="text-green-400 font-medium mb-4">2024 – Present</p>

            <ul className="space-y-3 text-sm text-white/90">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-red-500 mt-1" />
                Studying core ECE subjects: Digital Electronics, Ambeded Electronics, DSA.
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-red-500 mt-1" />
                Completed Full Stack (MERN) development courses.
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-red-500 mt-1" />
                Built several self-driven full-stack projects.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.5 }}
        style={{scaleX:scrollYProgress}}
        className="bg-[#2f3e46]/30 mt-16 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-10 shadow-xl border border-[#ffffff22]"
      >

        <motion.img
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="object-cover w-full md:w-[500px] h-[300px] rounded-3xl shadow-md"
          src="https://lh3.googleusercontent.com/KEzYn9wu1LJHEtAzlwIYr5l143Hvs3bHbLNVNQb8uEhzQj2iy8jb6d2Kl7Ogr6PWSA=h500"
          alt="school Campus"
        />

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-white w-full md:w-2/3">
       
          <motion.img
            whileHover={{ scale: 1.1, rotate: 3 }}
            src={schoollogo}
            alt="School Logo"
            className="w-50 h-40 object-contain drop-shadow-xl"
          />

          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl hover:text-red-500 font-bold text-[#edf2f4]">
             Swami Vivekanand Public School
            </h3>
            <p className="text-lg text-gray-300">9<sup>th</sup>- 12<sup>th</sup></p>
            <p className="text-green-400 font-medium mb-4">2021 – 2024</p>

            <ul className="space-y-3 text-sm text-white/90">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-red-500 mt-1" />
                Studying core ECE subjects: Digital Electronics, Ambeded Electronics, DSA.
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-red-500 mt-1" />
                Completed Full Stack (MERN) development courses.
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-red-500 mt-1" />
                Built several self-driven full-stack projects.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.06 }}
        className="text-center p-5 mt-10 relative bottom-0 left-0 text-white bg-[#0a0908] py-5 font-bold text-xl"
      >
        Made with ♥️ by Avi
      </motion.div>
    </div>
  );
};

export default Education;
