import { motion } from "framer-motion";
import { useMediaQuery } from "../customHooks/useMediaQuery";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { SiGamedeveloper } from "react-icons/si";
import {  NavLink } from "react-router";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [isOpen, setOpen] = useState(false);

  const navItems = ["home", "aboutme", "projects"];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const navHover = {
    scale: 1.05,
    paddingLeft: 16,
    paddingRight: 16,
    color: "#f87171",
  };

return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full h-20 flex items-center justify-between px-6 backdrop-blur-md bg-[#2f3e46]/20 text-white">
        <motion.div
          whileHover={{ scale: 0.9 }}
          className="flex items-center gap-2 font-mono font-extrabold text-3xl text-[#ef233c] hover:text-[#8d99ae]"
        >
          <SiGamedeveloper size={28} />
          <HashLink to="/#home" className="transition-colors">AVI GARG</HashLink>
        </motion.div>

        {isDesktop ? (
          <div className="flex gap-6 font-mono font-medium text-lg">
            {navItems.map((item) => (
              <motion.h2
                key={item}
                onClick={() => scrollToSection(item)}
                whileHover={navHover}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-white hover:text-[#edf2f4]"
              >
               <HashLink smooth to={`/#${item}`}>{`${item.toLocaleUpperCase()}`}</HashLink>
              </motion.h2>
            ))}
            <motion.h2
             whileHover={navHover}
             whileTap={{ scale: 0.9 }}
             transition={{ duration: 0.3 }}
             className="cursor-pointer text-white hover:text-[#edf2f4]"
            >
            <NavLink to="/skills">SKILLS</NavLink>  
            </motion.h2>
            <motion.h2
             whileHover={navHover}
             whileTap={{ scale: 0.9 }}
             transition={{ duration: 0.3 }}
             className="cursor-pointer text-white hover:text-[#edf2f4]"
            >
            <NavLink to="/education">EDUCATION</NavLink>  
            </motion.h2>
            <motion.h2
             whileHover={navHover}
             whileTap={{ scale: 0.9 }}
             transition={{ duration: 0.3 }}
             className="cursor-pointer text-white hover:text-[#edf2f4]"
            >
            <NavLink to="/contactme">CONTACT ME</NavLink>  
            </motion.h2>
          </div>
        ) : (
          <div>
            <Hamburger direction="right" toggled={isOpen} toggle={setOpen} />
          </div>
        )}
      </div>

    
      {!isDesktop && isOpen && (
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          exit={{ x: "100vw" }}
          transition={{ duration: 0.4 }}
          className="fixed top-20 left-0 z-40 ml-10 mt-5 w-full h-auto flex rounded-2xl flex-col items-start gap-6 px-6 py-8 text-white font-mono text-xl font-semibold backdrop-blur-md bg-[#161a1d]/80"
        >
          {navItems.map((text) => (
            <motion.div
              key={text}
              onClick={() => scrollToSection(text)}
              whileHover={{ scale: 1.08, paddingLeft: 12 }}
              transition={{ duration: 0.4 }}
              className="cursor-pointer text-[#f8f9fa] hover:text-[#f87171]"
            >
              <HashLink smooth to={`/#${text}`}>{`${text.toLocaleUpperCase()}`}</HashLink>
            </motion.div>
            
          ))}
             <motion.h2
               whileHover={{ scale: 1.08, paddingLeft: 12 }}
               transition={{ duration: 0.2 }}
               className="cursor-pointer text-[#f8f9fa] hover:text-[#f87171]"
            >
            <NavLink to="/skills">SKILLS</NavLink>  
            </motion.h2>
            <motion.h2
               whileHover={{ scale: 1.08, paddingLeft: 12 }}
               transition={{ duration: 0.2 }}
               className="cursor-pointer text-[#f8f9fa] hover:text-[#f87171]"
            >
            <NavLink to="/education">EDUCATION</NavLink>  
            </motion.h2>
            <motion.h2
               whileHover={{ scale: 1.08, paddingLeft: 12 }}
               transition={{ duration: 0.2 }}
               className="cursor-pointer text-[#f8f9fa] hover:text-[#f87171]"
            >
            <NavLink to="/contactme">CONTACT ME</NavLink>  
            </motion.h2>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
