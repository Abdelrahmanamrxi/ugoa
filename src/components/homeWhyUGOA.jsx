import React from "react";
import { whyUGOA } from "../data/homeContent";
import { useState, useEffect } from "react";
import reuse from "../assets/reuse.svg";
import { motion, AnimatePresence } from "framer-motion";
import maze from "../assets/background_80.jpg";

export default function WhyUGOA() {

    const [reason, setReason] = useState(whyUGOA[0]);
      useEffect(() => {
        const interval = setInterval(() => {
          setReason((prev) => {
            const currentIndex = whyUGOA.indexOf(prev);
            const nextIndex = (currentIndex + 1) % whyUGOA.length;
            return whyUGOA[nextIndex];
          });
        }, 3000); // change word every 2 seconds
    
        return () => clearInterval(interval); // cleanup
      }, []);

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      viewport={{once:true}}
      className="w-full px-6 mt-40 flex flex-col items-center"
    >
      <h2 className="text-dark_green text-center w-2/3 uppercase font-bold text-lg md:text-3xl">
        Why UGOA?
      </h2>

      <div className="w-full mt-6">
        <div className="bg-dark_green px-4 md:px-10 w-full h-64 rounded-t-3xl flex justify-center items-center gap-2">
          <div className="relative flex w-1/3 h-full p-10 items-center justify-center rounded-tl-3xl">
            {/* Rotating background image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={`rotate-${reason.title}`}
                initial={{ rotate: -180 }}
                animate={{ rotate: 0 }}
                exit={{ rotate: -180 }}
                width={64}
                height={64}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                src={reuse}
                
                alt="reusability"
                className="absolute min-w-20 md:min-w-[128px]"
              />
            </AnimatePresence>

            {/* Centered icon */}
            <AnimatePresence mode="wait">
              <motion.img
                key={`icon-${reason.title}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src={reason.icon}
                alt={reason.title}
                width={64}
                height={64}
                className="absolute max-w-[32px] max-h-[32px] md:min-w-[64px] md:min-h-[64px]"
              />
            </AnimatePresence>
          </div>

          <div className="flex flex-col flex-grow px-2 md:px-8 gap-2 md:gap-4 justify-center relative">
            <AnimatePresence mode="wait">
              <motion.h2
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
                className="text-white uppercase font-bold text-sm md:text-xl pb-2" // Added pb-2 for spacing
                key={reason.title}
              >
                {reason.title}
              </motion.h2>
            </AnimatePresence>

            <div
              className="relative bottom-2 md:bottom-4 left-0 h-[1px] bg-white w-full" // The underline
            />

            <AnimatePresence mode="wait">
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                className="text-white font-light text-xs md:text-lg text-justify"
                key={reason.description}
              >
                {reason.description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
        whileHover={{y:-10}}
          className="w-full flex flex-col gap-4 p-6 justify-center items-center rounded-b-3xl"
          style={{
            backgroundImage: `url(${maze})`,
            objectFit: "cover",
          }}
        >
          <h2 className="text-dark_green w-2/3 text-center uppercase font-bold text-lg md:text-3xl">
            +41
          </h2>
          <h3 className="text-dark_green text-center w-full uppercase font-bold text-base md:text-2xl">
            Years of recycling experience
          </h3>
        </motion.div>
      </div>
    </motion.section>
  );
}
