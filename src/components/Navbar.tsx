import { motion } from "framer-motion";
import { useMediaQuery } from "../customHooks/useMediaQuery";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { SiGamedeveloper } from "react-icons/si";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [isOpen, setOpen] = useState(false);

  const navItems = ["Home", "About Me", "Projects"];

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
          <h2 className="transition-colors">AVI GARG</h2>
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
               <Link to="/">{item}</Link>
              </motion.h2>
            ))}
            <motion.h2
             whileHover={navHover}
             whileTap={{ scale: 0.9 }}
             transition={{ duration: 0.3 }}
             className="cursor-pointer text-white hover:text-[#edf2f4]"
            >
            <NavLink to="/skills">Skills</NavLink>  
            </motion.h2>
            <motion.h2
             whileHover={navHover}
             whileTap={{ scale: 0.9 }}
             transition={{ duration: 0.3 }}
             className="cursor-pointer text-white hover:text-[#edf2f4]"
            >
            <NavLink to="/education">Education</NavLink>  
            </motion.h2>
            <motion.h2
             whileHover={navHover}
             whileTap={{ scale: 0.9 }}
             transition={{ duration: 0.3 }}
             className="cursor-pointer text-white hover:text-[#edf2f4]"
            >
            <NavLink to="/contactme">Contact Me</NavLink>  
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
          className="fixed top-20 left-0 z-40 w-full h-full flex flex-col items-start gap-6 px-6 py-8 text-white font-mono text-xl font-semibold backdrop-blur-md bg-[#161a1d]/80"
        >
          {navItems.map((text) => (
            <motion.div
              key={text}
              onClick={() => scrollToSection(text)}
              whileHover={{ scale: 1.08, paddingLeft: 12 }}
              transition={{ duration: 0.4 }}
              className="cursor-pointer text-[#f8f9fa] hover:text-[#f87171]"
            >
             <Link to="/">{text}</Link> 
            </motion.div>
            
          ))}
             <motion.h2
               whileHover={{ scale: 1.08, paddingLeft: 12 }}
               transition={{ duration: 0.2 }}
               className="cursor-pointer text-[#f8f9fa] hover:text-[#f87171]"
            >
            <NavLink to="/skills">Skills</NavLink>  
            </motion.h2>
            <motion.h2
               whileHover={{ scale: 1.08, paddingLeft: 12 }}
               transition={{ duration: 0.2 }}
               className="cursor-pointer text-[#f8f9fa] hover:text-[#f87171]"
            >
            <NavLink to="/education">Education</NavLink>  
            </motion.h2>
            <motion.h2
               whileHover={{ scale: 1.08, paddingLeft: 12 }}
               transition={{ duration: 0.2 }}
               className="cursor-pointer text-[#f8f9fa] hover:text-[#f87171]"
            >
            <NavLink to="/contactme">Contact Me</NavLink>  
            </motion.h2>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
