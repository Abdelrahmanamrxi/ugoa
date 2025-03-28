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
    <div className="bg-dark_green gap-8 px-2 md:px-10 py-5 w-full h-full flex flex-col justify-center items-center rounded-3xl relative">
      <h1 className="text-white pt-10 items-center text-2xl md:text-4xl uppercase font-raleway font-bold">
        Our Presence
      </h1>

      <div className="flex flex-col xl:flex-row relative">
        <div className="flex flex-col w-2/5 justify-center items-center gap-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col w-3/4 items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex justify-between items-center w-full"
            >
              <h2 className="md:text-xl text-lg font-medium font-raleway text-white">
                What services does Conscellence offer?
              </h2>
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
            className="text-white text-justify font-raleway md:text-base font-light w-3/4 text-sm"
          >
            We offer a range of services including Customized Strategy
            Development, Operational Efficiency Optimization, Market Analysis
            and Insights, and Leadership and Team Building programs. Each
            service is tailored to meet the specific needs of your business.
          </motion.p>
        </div>

        {/* Map Container */}
        <div className="w-full h-full p-4 flex justify-center">
          <MapSVG onHover={handleMouseOver} />
        </div>

        {/* Tooltip Display */}
        {showMessage && (
          <div
            className="absolute bg-black text-white text-xs md:text-sm font-raleway font-medium p-2 rounded-md md:rounded-lg 
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
