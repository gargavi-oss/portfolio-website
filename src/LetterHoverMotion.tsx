import { motion } from "motion/react";

interface LetterHoverMotionProps {
  text: string;
  className?: string;
}

const LetterHoverMotion = ({ text, className = "" }: LetterHoverMotionProps) => {
  return (
    <h1 className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          whileHover={{
            scale: 1.3,
            y: -5,
            color: "red", 
            textShadow: "0px 0px 6px rgba(255,255,255,0.8)",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 12,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  );
};

export default LetterHoverMotion;
