import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { GoArrowDownRight } from "react-icons/go";
import maze from "../assets/background_80.jpg";
import WhyUGOA from "./homeWhyUGOA";
import HomeServices from "./homeServices";
import TeamSection from "./TeamSection";
import Map from "./Map";

export default function Home() {
  

  return (
    <>
      {/* Section 1 - Our Approach */}
      <section
        style={{ backgroundImage: `url(${maze})`, objectFit: "cover" }}
        className="bg-darkWhite gap-6 px-6 py-10 flex flex-col md:flex-row justify-center shadow-xl w-full h-auto"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex md:w-1/4 justify-start md:justify-center items-center gap-4"
        >
          <h2 className="text-dark_green uppercase font-bold text-2xl lg:text-4xl">
            Our Approach
          </h2>
          <GoArrowDownRight
            aria-hidden="true"
            size={25}
            className="text-white bg-dark_green p-1 rounded-full"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="w-full  bg-white rounded-3xl md:py-8 px-6 py-6 shadow-[0_4px_30px_rgba(0,0,0,0.5)] md:w-1/2 font-raleway font-light text-base lg:text-lg text-justify"
        >
          At UGOA Consultation, we revolutionize recycling with innovative
          solutions, expertise, and a commitment to sustainability. We empower
          businesses for efficiency, minimal creating a sustainable future.
        </motion.p>
      </section>

      {/* Section 2 - Services */}
      <HomeServices />

      {/* Section 3 - Why UGOA */}
      <WhyUGOA />

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
