import React, { useState } from "react";
import { homeServices1, homeServices2 } from "../data/homeContent";
import { motion, AnimatePresence } from "framer-motion";
import { FaCircle, FaCircleArrowRight } from "react-icons/fa6"; // Import FaCircle
import { GoArrowDownRight } from "react-icons/go";
import { Link } from "react-router-dom";

export default function HomeServices() {
  const [displayservices, setDisplayServices] = useState(true);

  return (
    <section className="relative px-6 mt-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="flex w-full justify-start items-center gap-4"
      >
        <h2 className="text-dark_green w-2/3 uppercase font-bold text-lg md:text-3xl">
          What we can do for you?
        </h2>
        <GoArrowDownRight size={25} className=" text-dark_green" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="flex p-2 justify-between"
      >
        <div className="flex gap-1">
          <FaCircle
            className={`${displayservices ? "text-primary" : "text-gray-400"}`}
          />
          <FaCircle
            className={`${!displayservices ? "text-primary" : "text-gray-400"}`}
          />
        </div>
        <FaCircleArrowRight
          onClick={() => setDisplayServices((prev) => !prev)}
          size={30}
          className="text-dark_green cursor-pointer"
        />
      </motion.div>

      <AnimatePresence mode="wait" key={displayservices.toString()}> {/* Added key to AnimatePresence */}
        {displayservices ? (
          <motion.ul
            key="services1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: [0,1], x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between items-center"
          >
            {homeServices1.map((data, index) => (
              <Link to="/services" state={{scrollTo:data.id}}  key={index}> {/* Added key here as well */}
                <li
                  className="bg-dark_green h-[190px] gap-4 rounded-3xl flex flex-col justify-start items-center p-4"
                >
                  <img src={data.icon} 
                  className={ `${data.id % 2===0 ? 'w-25 ':'w-10'} h-20 ` }
                  alt={data.title} /> {/* Added alt */}

                  <h4 className="text-white text-center font-semibold text-sm md:text-lg">
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
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between"
          >
            {homeServices2.map((data, index) => (
              <Link state={{scrollTo:data.id}} to="/services" key={index}> {/* Added key here as well */}
                <li
                  className="bg-dark_green gap-4 rounded-3xl flex flex-col justify-start items-center p-4 h-full"
                >
                  <img src={data.icon} 
                  className={ `${data.id % 2 === 0 ? 'w-25 ':'w-10'} h-20 ` } 
                  alt={data.title} /> {/* Added alt */}

                  <h4 className="text-white text-center font-semibold text-sm lg:text-lg">
                    {data.title}
                  </h4>
                </li>
              </Link>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </section>
  );
}

// export default function HomeServices() {
//   const [services, setServices] = useState(homeServices.slice(0, 3));
//   const fullServices = useRef(homeServices);
//   const animationDirection = useRef("forward");
//   const isAnimating = useRef(false);
//   const animationDuration = 0.3;

//   const handleDisplayedServices = (direction) => {
//     if (isAnimating.current) return;
//     isAnimating.current = true;
//     animationDirection.current = direction;

//     setTimeout(() => {
//       if (direction === "forward") {
//         fullServices.current.push(fullServices.current.shift());
//       } else {
//         fullServices.current.unshift(fullServices.current.pop());
//       }
//       setServices(fullServices.current.slice(0, 3));
//       isAnimating.current = false;
//     }, animationDuration * 1000);
//   };

//   const containerVariants = {
//     hidden: { opacity: 1 },
//     visible: {
//       opacity: 1,
//     },
//   };

//   const itemVariants = {
//     animate: (direction, index) => ({
//       x: 0,
//       opacity: 1,
//       layout: true,
//       transition: { type: "spring", stiffness: 200, damping: 20, duration: animationDuration },
//     }),
//     initial: (direction, index) => ({
//       x: direction === "forward" && index === 2 ? 50 : direction === "backward" && index === 0 ? -50 : 0,
//       opacity: 1,
//     }),
//   };

//   return (
//     <section className="relative px-6 mt-20 overflow-hidden">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 2, ease: "easeInOut" }}
//         viewport={{ once: true }}
//         className="flex md:w-1/4 justify-start md:justify-between items-center gap-4"
//       >
//         <h2 className="text-dark_green w-2/3 uppercase font-bold text-lg md:text-3xl">
//           What we can do for you?
//         </h2>
//         <GoArrowDownRight size={25} className="text-dark_green" />
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 2, ease: "easeInOut" }}
//         viewport={{ once: true }}
//         className="flex p-2 justify-end gap-2"
//       >
//         <FaCircleArrowLeft
//           onClick={() => handleDisplayedServices("backward")}
//           size={30}
//           className="text-dark_green cursor-pointer"
//         />

//         <FaCircleArrowRight
//           onClick={() => handleDisplayedServices("forward")}
//           size={30}
//           className="text-dark_green cursor-pointer"
//         />
//       </motion.div>

//       <motion.ul
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[30vh] justify-center"
//       >
//         {services.map((data, index) => (
//           <motion.li
//             key={data.title}
//             custom={animationDirection.current}
//             variants={itemVariants}
//             initial={(p) => itemVariants.initial(p, index)}
//             animate={(p) => itemVariants.animate(p, index)}
//             className="bg-dark_green gap-4 rounded-3xl  flex flex-col justify-center items-center p-4 h-full"
//           >
//             <Link
//               to="/services"
//               onClick={() => window.scrollTo(0, 0)}
//               className="w-full h-full flex flex-col justify-center items-center"
//             >
//               <img src={data.icon} className="w-10 md:w-16" alt={data.title} />
//               <h4 className="text-white font-semibold text-sm md:text-lg text-center">
//                 {data.title}
//               </h4>
//             </Link>
//           </motion.li>
//         ))}
//       </motion.ul>
//     </section>
//   );
// }
