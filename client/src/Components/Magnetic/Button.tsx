import React, { useRef, useState } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ButtonProps {
  link: string & number;
  label: string;
}

// Famer-motion
export const Button: React.FC<ButtonProps> = ({ link, label }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };
  const { x, y } = position;

  return (
    <motion.Link
      to={link}
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {label}
    </motion.Link>
  );
};
