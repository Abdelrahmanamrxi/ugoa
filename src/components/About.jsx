import React from "react";
import vLogo from "../assets/vertical.png";
import {motion} from "motion/react";
import { GoArrowDownRight } from "react-icons/go";
import visionIcon from "../assets/vision_icon.svg";
import { PiTargetLight  } from "react-icons/pi";
import { whoWeAre, team } from "../data/content";
import { TiArrowForward } from "react-icons/ti";
import horizontalImg from '../assets/horizontalImg.svg';
import TeamCard from "./TeamCards";
import Map from "./Map.jsx";

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
                transition={{duration:2,ease:"easeOut",delay:1}} />
                 
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
            <motion.div 
            className="mt-24 flex flex-col md:gap-16 md:flex-row md:mx-8 mx-4 gap-10 divide-gray-300 divide-y-2 md:divide-y-0 
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

                <motion.div 
                initial={{opacity:0, x:-30}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:0.8, delay:0.2}}
                viewport={{once:true, amount:0.5}}
                className="md:w-1/2 flex flex-col gap-4 md:gap-8 md:p-6">
                    <div className="flex justify-start gap-2 md:gap-6 items-center">
                        <img src={visionIcon} className="w-[40px] md:min-w-[64px]" />
                        <h2 className="font-raleway text-dark_green uppercase font-bold text-lg md:text-3xl">Vision</h2>
                    </div>
                    <p className="font-raleway font-light text-justify w-full md:w-3/4">
                    To lead the transformation of the global recycling industry by providing strategic solutions 
                    that drive circular economies, sustainability, and operational excellence.
                    </p>
                </motion.div>


                <motion.div 
                    initial={{opacity:0, x:30}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:0.8, delay:0.2}}
                viewport={{once:true, amount:0.5}}
                className="md:w-1/2 flex flex-col gap-8 md:p-6 ">
                    <div className="flex justify-start gap-2 md:gap-6 items-center">
                        <PiTargetLight  size={64} src={visionIcon} className="w-[40px] text-dark_green md:min-w-[64px]" />
                        <h2 className="font-raleway text-dark_green uppercase font-bold text-lg md:text-3xl">Mission</h2>
                    </div>
                    <p className="font-raleway font-light text-justify w-3/4">
                    To lead the transformation of the global recycling industry by providing strategic solutions 
                    that drive circular economies, sustainability, and operational excellence.
                    </p>
                </motion.div>

                
            </motion.div>

            {/* Section 3 */}

            <div className="mt-24 md:mt-48 flex flex-col gap-6 mx-8 md:mx-48">
                
                <motion.div 
                initial={{opacity:0,y:30}}
                whileInView={{opacity:1,y:0}}
                transition={{duration: 0.6, ease: "easeOut"}}
                viewport={{once:true, amount:1}}
                className="flex items-center gap-4">
                    <h1 className="font-raleway text-xl md:text-4xl font-bold text-dark_green">Who we are</h1>
                    <GoArrowDownRight size={30} className=" text-dark_green " />
                </motion.div>

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

            {/* Section 4 */}

            <div className="mt-32 flex h-auto flex-col md:flex-row gap-6 justify-center items-center">

  {/* Image Container */}
            <motion.div 
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:0.5,delay:0.3}}
            viewport={{once:true, amount:0.5}}
            className="h-full w-full md:w-1/2 flex justify-center items-center overflow-hidden">
                <img 
                src={horizontalImg}
                className="w-full max-h-96 md:max-h-[500px] object-fill" 
                alt="Background" 
                />
            </motion.div>




                <div className="w-full md:w-1/2 px-6 flex flex-col gap-8">
                <motion.div 
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5,delay:0.3}}
                viewport={{once:true, amount:0.5}}
                className="flex items-center gap-4">

                    <h1 className="font-raleway text-2xl md:text-4xl font-bold text-dark_green">Who we do</h1>
                    <GoArrowDownRight size={30} className=" text-dark_green " />

                </motion.div>
                <motion.div
                 variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        staggerChildren: 0.3, // Delays each child’s animation
                        when: "beforeChildren", // Starts staggering before animating parent
                      },
                    },
                }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="font-raleway flex justify-center items-center flex-col gap-6 text-justify
                                font-light text-lg">

                    <motion.p
                    variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}>
                        At UGOA, we are proud to offer our partners a comprehensive consultation service that leverages
                        over ten years of in-depth experience in the PET recycling industry. 
                    </motion.p>
                    <motion.p
                    variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}>              
                        Our service is built on a
                        foundation of unmatched hands-on technical and operational expertise combined with advanced
                        data analytics capabilities.  
                    </motion.p>
                    <motion.p
                    variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}>
                        This unique blend enables us to provide a detailed and multifaceted
                        market analysis that spans global, regional, and country perspectives, ensuring that our partners
                        are equipped with the most accurate and actionable insights available.
                    </motion.p>
                    <motion.p
                    variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}>                   
                        Our consultation service delves deep into the dynamics of the recycling industry, with a strong
                        focus on the global transition toward a circular economy. We provide a robust 10-year forecast for
                        recycled PET (rPET), analyzing key trends that influence production, demand, and technological
                        advancements. 
                    </motion.p>
                    <motion.p
                    variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}>
                        Our market analysis covers the evolution of collection rates, highlighting shifts in
                        waste management practices and the impact these have on the overall supply chain. We also
                        examine the strategic plans of major brand owners who are committed to increasing their recycled
                        content, providing insights into how these initiatives are reshaping the market.  
                    </motion.p>
                </motion.div>
                
                </div>

            </div>

            {/* Section 5 */}
            <motion.div 
            initial={{opacity:0, scale:0.95}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:0.8, delay:0.2}}
            viewport={{once:true, amount:0.5}}
            className="flex flex-col py-10 justify-center bg-darkWhite shadow-xl items-center mt-24 gap-14">
                <h1 className="text-dark_green font-raleway text-2xl md:text-4xl font-bold uppercase">Meet our team</h1>
                <div className="card px-6 grid grid-cols-1 justify-center items-center md:grid-cols-3 gap-8">
                    {team.map((card)=>{
                        return(
                            <TeamCard key={card.mail}
                            name={card.name}
                            image={card.photo}
                            role={card.role }
                            email={card.mail}
                            linkedin={card.linkedIn} />
                        )
                    })}
                </div>

            </motion.div>
            <motion.div 
            initial={{opacity:0, scale:0.95}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:0.8, ease:"easeOut"}}
            viewport={{once:true, amount:0.5}}
            className="px-4 md:px-20 mt-24">
                <Map />
            </motion.div>
            
        </>
    );
}