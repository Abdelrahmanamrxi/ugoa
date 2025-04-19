import React, { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/Horizontal_Comp.png";

export default function Loading({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000); // Keep for 2 seconds

    return () => clearTimeout(timer); // Clean up if unmounted
  }, [onFinish]);

  return (
    <div className="w-full h-full flex justify-center items-center bg-white">
      <motion.img
        src={logo}
        alt="UGOA Horizontal Logo"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 1, 1], 
          filter: ["grayscale(100%)", "grayscale(0%)", "grayscale(100%)"] 
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
