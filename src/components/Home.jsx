import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GoArrowDownRight } from "react-icons/go";
import maze from "../assets/background_80.jpg";
import { homeServices1, homeServices2 } from "../data/homeContent";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import {Link} from "react-router-dom";

export default function Home() {
  const [displayservices, setDisplayServices] = useState(true);

  return (
    <>
      {/* section 1 */}
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
          className="w-full bg-white rounded-3xl md:py-8  px-6 py-6
        shadow-[0_4px_30px_rgba(0,0,0,0.5)] md:w-1/2 font-raleway font-light 
        text-sm xl:text-xl text-justify"
        >
          At UGOA Consultation, we revolutionize recycling with innovative
          solutions, expertise, and a commitment to sustainability. We empower
          businesses for efficiency, minimal creating a sustainable future.
        </motion.p>
      </section>

      {/* Section 2 */}
      <section className="relative px-6 mt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex md:w-1/4 justify-start md:justify-between items-center gap-4"
        >
            <h2 className="text-dark_green w-2/3 uppercase font-bold text-lg md:text-3xl">
              What we can do for you?
            </h2>
            <GoArrowDownRight size={25} className=" text-dark_green" />       
        </motion.div>

        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="flex p-2 justify-between">
        
          <div className="flex gap-1">
            <FaCircle className={`${displayservices ? "text-primary" : "text-gray-400"}`}/>
            <FaCircle className={`${!displayservices ? "text-primary" : "text-gray-400"}`} />    
          </div>
          <FaCircleArrowRight
            onClick={() => setDisplayServices((prev) => !prev)}
            size={30}
            className="text-dark_green"
          />   

        </motion.div>

        <AnimatePresence mode="wait">
          {displayservices ? (
            <motion.ul
              key="services1"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              viewport={{once:true}}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between"
            >
              
              
              {homeServices1.map((data, index) => (
                <Link to="/services">
                  <li
                    key={index}
                    className="bg-dark_green gap-4 rounded-3xl flex flex-col justify-center items-center p-4 h-full"
                  >
                    <img src={data.icon} className="w-10 md:w-16" />
                    <h4 className="text-white font-semibold text-sm md:text-lg">
                      {data.title}
                    </h4>
                  </li>
                </Link>
                
              ))}
            </motion.ul>
          ) : (
            <motion.ul
              key="services2"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5}}
              viewport={{once:true}}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between"
            >
              {homeServices2.map((data, index) => (
                <Link to="/services">
                <li
                  key={index}
                  className="bg-dark_green gap-4 rounded-3xl flex flex-col justify-center items-center p-4 h-full"
                >
                  <img src={data.icon} className="w-10 md:w-16" />
                  <h4 className="text-white font-semibold text-sm md:text-lg">
                    {data.title}
                  </h4>
                </li>
              </Link>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
        
      </section>
    </>
  );
}
