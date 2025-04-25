import React, { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/LogoSVG.svg";

export default function Loading({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 1000); // Keep for 2 seconds

    return () => clearTimeout(timer); // Clean up if unmounted
  }, [onFinish]);

  return (
    <div className="fixed top-0 bottom-0 z-50 w-full h-screen flex justify-center items-center bg-white">
      {/* Background div with morphing effect and rotation */}
      <motion.div
        className="absolute w-[200px] h-[200px] bg-secondary rounded-full"
        animate={{
          borderRadius: ["0%", "50%", "0%"], // Morph from square to circle and back
          rotate: [0, 90, 180], // Rotate 90 degrees every cycle
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[200px] h-[200px] bg-primary rounded-full"
        animate={{
          borderRadius: ["0%", "50%", "0%"], // Morph from square to circle and back
          rotate: [0, -90, -180], // Rotate 90 degrees every cycle
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[190px] h-[190px] border-white border-2 rounded-full"
        animate={{
          scale: [1, 0.8 , 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[200px] h-[200px] border-white border-2 rounded-full"
        animate={{
          scale: [0.8, 1 , 0.8],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
      

      {/* Logo image on top */}
      <motion.img
        src={logo}
        alt="UGOA Horizontal Logo for Our Smooth Loading Screen"
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
        className="max-w-[100px] z-10" // Make sure it stays above the background
      />
    </div>
  );
}
