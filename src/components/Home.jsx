import React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoArrowDownRight } from "react-icons/go";
import maze from "../assets/background_80.jpg";
import reuse from "../assets/reuse.svg";
import { whyUGOA } from "../data/homeContent";
import HomeServices from "./homeServices";
import { Link } from "react-router-dom";
import TeamSection from "./TeamSection";
import Map from "./Map";
import HBD from "./MonHBD";

export default function Home() {
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
    <>
      {/* Section 1 - Our Approach */}
      <HBD />
      <section
        style={{ backgroundImage: `url(${maze})`, objectFit: "cover" }}
        className="bg-darkWhite gap-6 px-6 py-10 flex flex-col md:flex-row justify-center shadow-xl w-full h-auto"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex md:w-1/4 justify-start md:justify-center items-center gap-4"
        >
          <h2 className="text-dark_green uppercase font-bold text-lg md:text-3xl">
            Our Approach
          </h2>
          <GoArrowDownRight
            size={25}
            className="text-white bg-dark_green p-1 rounded-full"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="w-full bg-white rounded-3xl md:py-8 px-6 py-6 shadow-[0_4px_30px_rgba(0,0,0,0.5)] md:w-1/2 font-raleway font-light text-sm xl:text-xl text-justify"
        >
          At UGOA Consultation, we revolutionize recycling with innovative
          solutions, expertise, and a commitment to sustainability. We empower
          businesses for efficiency, minimal creating a sustainable future.
        </motion.p>
      </section>

      {/* Section 2 - Services */}
      <HomeServices />

      {/* Section 3 - Why UGOA */}
      <motion.section 
      initial={{opacity:0,scale:0.95}}
      whileInView={{opacity:1,scale:1}}
      transition={{duration:0.5,ease:"easeInOut"}}
      className="w-full px-6 mt-40 flex flex-col items-center">
        <h2 className="text-dark_green text-center w-2/3 uppercase font-bold text-lg md:text-3xl">
          Why UGOA?
        </h2>

        <div className="w-full mt-6">
          <div className="bg-dark_green px-8 md:px-10 w-full h-64 rounded-t-3xl flex">
            <div className="relative flex w-1/3 h-full p-10 items-center justify-center rounded-tl-3xl">
              {/* Rotating background image */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={`rotate-${reason.title}`}
                  initial={{ rotate: -180 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: -180 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  src={reuse}
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
                  alt=""
                  className="absolute min-w-[28px] min-h-[28px] md:min-w-[64px] md:min-h-[64px]"
                />
              </AnimatePresence>
            </div>

            <div className="flex flex-col flex-grow px-4 md:px-8 gap-4 md:gap-8 justify-center relative">
              <AnimatePresence mode="wait">
                <motion.h2
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
                  className="text-white uppercase font-bold text-base md:text-3xl pb-2" // Added pb-2 for spacing
                  key={reason.title}
                >
                  {reason.title}
                </motion.h2>
              </AnimatePresence>

                  <div
                    className="relative bottom-7 left-0 h-0.5 bg-white w-full" // The underline
                  />

              <AnimatePresence mode="wait">
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                  className="text-white font-light text-xs xl:text-xl text-justify"
                  key={reason.description}
                >
                  {reason.description}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <div
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
          </div>
        </div>
      </motion.section>

      <section className="mt-32">
        <TeamSection />
      </section>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="px-4 md:px-10 mt-24"
      >
        <Map />
      </motion.div>
    </>
  );
}
