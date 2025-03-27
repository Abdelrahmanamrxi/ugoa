import React from "react";
import vLogo from "../assets/vertical.png";
import {color, motion} from "motion/react";
import { GoArrowDownRight } from "react-icons/go";
import visionIcon from "../assets/vision_icon.svg";
import { PiTargetLight  } from "react-icons/pi";
import { whoWeAre } from "../data/content";
import { TiArrowForward } from "react-icons/ti";

const fadeInVariants = {
    hidden: { opacity: 0, y: 50,filter: "blur(8px)", scale:0.8},
    visible: { opacity: 1, y: 0,filter: "blur(0px)",scale: 1,
         transition: { duration: 0.6, ease: "easeOut" } },
  };

export default function About(){
    return(
        <>
            {/* Section 1 */}
            <div className="flex flex-col bg-darkWhite sm:flex-row gap-6 px-4 py-10 justify-center items-center shadow-xl">
                <motion.img
                className="w-1/2 max-w-[250px]" src={vLogo} alt=""
                initial={{opacity:0,x:-30}}
                animate={{opacity:1,x:0}}
                transition={{duration:1,ease:"easeOut",delay:1}} />
                 
                <motion.p 
                className="sm:w-1/2 font-raleway text-sm text-justify"
                initial={{opacity:0,x:30}}
                animate={{opacity:1,x:0}}
                transition={{duration:1,ease:"easeOut",delay:1}}>
                UGOA provides end-to-end consultancy and strategic solutions for the recycling industry, helping businesses optimize operations,
                enhance sustainability, and drive profitability. Our services include recycling facility development, from feasibility studies and
                factory design to machinery selection, installation, and commissioning. We specialize in supply chain and sourcing strategies,
                ensuring a stable feedstock supply while maintaining compliance and sustainability standards. UGOA also enhances operational 
                efficiency through SOP development, process optimization, and quality management systems. Additionally, we offer market and 
                business strategy support, including competitive analysis, customer targeting, and revenue diversification. With expertise 
                in ESG integration and regulatory alignment, UGOA empowers recyclers, brand owners, and governments to build scalable,
                efficient, and sustainable recycling operations.
                </motion.p>
            </div>

            {/* Section 2 */}
            <motion.div className="mt-24 flex flex-col md:gap-16 md:flex-row md:mx-8 mx-4 gap-10 divide-gray-300 divide-y-2 md:divide-y-0 
            md:divide-x-[1px] rounded-2xl shadow-lg  md:shadow-xl shadow-dark_green
            justify-center items-center px-4 py-16 md:px-8 md:py-16"
            initial={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
            animate={{
                boxShadow: [
                "0px 0px 10px rgba(13, 92, 99, 0.3)",
                "0px 0px 20px rgba(13, 92, 99, 0.5)",
                "0px 0px 10px rgba(13, 92, 99, 0.3)",
                ],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>

                <div className="md:w-1/2 flex flex-col gap-4 md:gap-8 md:p-6">
                    <div className="flex justify-start gap-2 md:gap-6 items-center">
                        <img src={visionIcon} className="w-[40px] md:min-w-[64px]" />
                        <h2 className="font-raleway text-dark_green uppercase font-bold text-lg md:text-4xl">Vision</h2>
                    </div>
                    <p className="font-raleway font-light text-justify w-full md:w-3/4">
                    To lead the transformation of the global recycling industry by providing strategic solutions 
                    that drive circular economies, sustainability, and operational excellence.
                    </p>
                </div>


                <div className="md:w-1/2 flex flex-col gap-8 md:p-6 ">
                    <div className="flex justify-start gap-2 md:gap-6 items-center">
                        <PiTargetLight  size={64} src={visionIcon} className="w-[40px] text-dark_green md:min-w-[64px]" />
                        <h2 className="font-raleway text-dark_green uppercase font-bold text-lg md:text-4xl">Mission</h2>
                    </div>
                    <p className="font-raleway font-light text-justify w-3/4">
                    To lead the transformation of the global recycling industry by providing strategic solutions 
                    that drive circular economies, sustainability, and operational excellence.
                    </p>
                </div>

                
            </motion.div>

            {/* Section 3 */}

            <div className="mt-24 md:mt-48 flex flex-col gap-6 mx-8 md:mx-48">
                
                <div className="flex items-center gap-4">
                    <h1 className="font-raleway text-xl md:text-4xl font-bold text-dark_green">Who we are</h1>
                    <GoArrowDownRight size={30} className=" text-dark_green " />
                </div>

                <ul className="flex flex-col  gap-6 text-white font-raleway">
                    {whoWeAre.map((data) => {
                        return (
                            <motion.li
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={fadeInVariants}
                            key={data.id}
                            className={`flex relative items-center px-8 py-4 md:px-14 md:py-8 text-justify
                                ${data.role ? 'bg-dark_green' : "bg-primary"}
                                ${data.border} w-full h-60`}
                            >
                            <span className="font-semibold text-sm sm:text-lg md:text-xl">
                                {data.title}
                                <p className={`${data.role ? 'font-bold' : 'font-light'} text-xs sm:text-sm md:text-lg`}>
                                {data.content}
                                </p>
                            </span>

                            {data.arrow && (
                                <TiArrowForward
                                    size={64}
                                    className={`absolute text-dark_green bottom-[-35px] md:bottom-[-40px]
                                    ${data.arrow === 'left' ? 'left-2 rotate-[-135deg] scale-x-[-1]' : 'right-2 rotate-[135deg]'}`}
                                />
                                )}

                            </motion.li>
                        );
                    })}

                </ul>
            </div>
        </>
    );
}