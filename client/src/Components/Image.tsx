import React from 'react';
import { motion } from 'framer-motion';
import { opacity } from './Anim/Anim';

interface ImageContainerProps {
  src: string;
  isActive: boolean;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ src, isActive }) => {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={isActive ? "open" : "closed"}
      className={`w-[500px] h-[45px] relative`}
    >
      <img
        src={src}
        alt="image"
        className="object-cover"
      />
    </motion.div>
  );
};

export default ImageContainer;
