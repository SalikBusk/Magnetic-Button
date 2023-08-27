import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
}

export const FramerMagnetic: React.FC<ButtonProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null); // Use HTMLDivElement ref
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = e;
    if (ref.current) {
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX, y: middleY });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className=""
    >
      {children}
    </motion.div>
  );
};
