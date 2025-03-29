import { useState, useEffect } from "react";
import MapSVG from "./MapSVG.jsx";
import { GoArrowDownRight } from "react-icons/go";
import { motion } from "motion/react";

// Create cursor element
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

// Move cursor with mouse
document.addEventListener("mousemove", (event) => {
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});

function Map() {
  const [showMessage, setShowMessage] = useState(false);
  const [messagePosition, setMessagePosition] = useState({ x: 0, y: 0 });
  const [country, setCountry] = useState("");

  const handleMouseOver = (event) => {
    const target = event.target;

    if (target.tagName === "path") {
      // Ensure it's a path
      const fillColor = target.getAttribute("fill");
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

      if (fillColor in countryMap) {
        setCountry(countryMap[fillColor]);
        setShowMessage(true);
      } else {
        setShowMessage(false);
        setCountry("");
      }
    }
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMessagePosition({ x: event.clientX + 15, y: event.clientY + 15 });
    };

    if (showMessage) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [showMessage]);

  return (
    <>
      <div className="bg-dark_green gap-8 px-2 md:px-32 py-5 w-full h-full flex flex-col justify-center items-center rounded-3xl relative">
        
        <h1 className="text-white pt-10 items-center text-2xl md:text-4xl uppercase font-raleway font-bold">
          Our presence
        </h1>

        <div className=" flex flex-col justify-center items-center gap-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col w-3/4 items-center"
          >
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex justify-between items-center w-full"
            >
              <h2 className="md:text-2xl text-lg font-medium font-raleway text-white">
                What services does Conscellence offer?
              </h2>
              <GoArrowDownRight size={15} className="text-white" />
            </motion.div>

            {/* Animated Bottom Border */}
            <motion.div
              variants={{
                hidden: { width: 0 },
                visible: { width: "100%" },
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="h-[1px] bg-white mt-2 origin-left"
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

        <div className="w-full h-full p-10 flex justify-center">
            <MapSVG onHover={handleMouseOver} />
        </div>


        {showMessage && (
          <div
            className="absolute bg-secondary/95 text-white font-raleway font-medium p-2 rounded-lg opacity-0 transition-opacity duration-500 transform translate-y-2"
            style={{
              left: messagePosition.x,
              top: messagePosition.y,
              opacity: 1,
              transform: "translateY(0)",
              pointerEvents: "none",
            }}
          >
            {country}
          </div>
        )}
      </div>
    </>
  );
}

export default Map;
