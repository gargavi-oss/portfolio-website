
import { motion } from 'framer-motion';

interface Props {
  text: string;
  className?: string;
}

const LetterHoverAnimation = ({ text, className = "" }: Props) => {
  return (
    <h1 className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          whileHover={{
            scale: 1.3,
            rotate: [0, 10, -10, 0],
            color: "#60a5fa", // Tailwind blue-400
            textShadow: "0px 0px 8px rgba(255,255,255,0.8)",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 10,
          }}
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
};

export default LetterHoverAnimation;
