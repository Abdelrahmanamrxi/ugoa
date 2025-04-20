import React, { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/Horizontal_White.png";

export default function Loading({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 1000); // Keep for 2 seconds

    return () => clearTimeout(timer); // Clean up if unmounted
  }, [onFinish]);

  return (
    <div className="relative w-full h-full flex justify-center items-center bg-white">
      {/* Background div with morphing effect and rotation */}
      <motion.div
        className="absolute w-[200px] h-[200px] bg-secondary rounded-full"
        animate={{
          borderRadius: ["0%", "50%", "0%"], // Morph from square to circle and back
          rotate: [0, 90, 180], // Rotate 90 degrees every cycle
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />

      {/* Logo image on top */}
      <motion.img
        src={logo}
        alt="UGOA Horizontal Logo"
        initial={{ scale: 1 }}
        animate={{
          scale: 1,
          filter: ["grayscale(100%)", "grayscale(0%)", "grayscale(100%)"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="max-w-[200px] z-10" // Make sure it stays above the background
      />
    </div>
  );
}
