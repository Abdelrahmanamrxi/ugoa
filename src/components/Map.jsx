import { useState, useEffect } from "react";
import MapSVG from "./MapSVG.jsx";
import { GoArrowDownRight } from "react-icons/go";
import { motion } from "framer-motion";

function Map() {
  const [showMessage, setShowMessage] = useState(false);
  const [messagePosition, setMessagePosition] = useState({ x: 0, y: 0 });
  const [country, setCountry] = useState("");

  // Map fill colors to country names
  const countryMap = {
    "#F24822": "MOROCCO",
    "#FFC943": "EGYPT",
    "#42AAF8": "NIGERIA",
    "#0CF0F0": "MOZAMBIQUE",
    "#66D575": "GHANA",
    "#874FFF": "UAE",
    "#FF9E42": "SAUDI ARABIA",
    "#BC0202": "OMAN",
    "#F45DC5": "PAKISTAN",
  };

  // Handle mouse over on country paths
  const handleMouseOver = (event) => {
    const target = event.target;
    if (target.tagName === "path") {
      const fillColor = target.getAttribute("fill");
      if (countryMap[fillColor]) {
        setCountry(countryMap[fillColor]);
        setShowMessage(true);
      } else {
        setShowMessage(false);
        setCountry("");
      }
    }
  };

  // Update tooltip position
  const handleMouseMove = (event) => {
    setMessagePosition({ x: event.clientX + 25, y: event.clientY + 25 });
  };

  useEffect(() => {
    if (showMessage) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [showMessage]);

  return (
    <div className="bg-dark_green gap-8 px-2 md:px-10 py-5 w-full h-full flex flex-col justify-center lg:justify-start items-center lg:items-start rounded-xl md:rounded-3xl relative">
      <h2 className="text-white pt-10 md:px-4 font-bold text-lg md:text-3xl uppercase font-raleway">
        Our Presence
      </h2>
      

      <div className="flex flex-col justify-center itemes-center px-2 md:px-4 py-6 gap-6 lg:flex-row relative">
        <div className="flex flex-col w-full lg:w-2/5 justify-center items-center gap-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col w-full items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex justify-between items-center w-full"
            >
              <h3 className="md:text-xl text-lg font-medium font-raleway text-white">
                What services does Conscellence offer?
              </h3>
              <GoArrowDownRight size={25} className="text-white" />
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="h-[1px] bg-white mt-2"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-white text-justify font-raleway md:text-lg font-light w-full text-sm"
          >
            We take pride in the wealth of
            experience we have accumulated over the years,
            working in various geographical regions. 
            This diverse exposure has provided us with valuable
            insights to assist our customers, regardless of their location.
            Our team has operated in Europe, Southeast Asia, the
            Middle East, North America, and South America.
            At present, we are actively involved in four projects
            located in Egypt, Saudi Arabia, Oman, UAE, Morocco,
            Nigeria, Ghana and Mozambique.
          </motion.p>
        </div>

        {/* Map Container */}
        <div className="w-full h-auto p-1 flex justify-center items-center">
          <MapSVG onHover={handleMouseOver} />
        </div>

        {/* Tooltip Display */}
        {showMessage && (
          <div
            className="absolute bg-black text-white text-xs md:text-sm lg:text-base xl:text-lg font-raleway font-medium p-2 rounded-md md:rounded-lg 
             transition duration-300 "
            style={{
              left: `${messagePosition.x}px`,
              top: `${messagePosition.y}px`,
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              opacity: 1,
            }}
          >
            {country}
          </div>
        )}
      </div>
    </div>
  );
}

export default Map;
