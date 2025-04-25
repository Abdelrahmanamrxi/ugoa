import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "motion/react";
import { useState } from "react";

export default function TeamCard({ name, role, image, email, linkedin }) {
    const [visible, setVisible] = useState(false);

    return (
        <div 
            onMouseEnter={() => setVisible(true)}  // Show icons on hover
            onMouseLeave={() => setVisible(false)} 
            // Hide icons when not hovering
            className="flex relative team gap-8 w-[280px] h-[300px] lg:w-[300px] lg:h-[310px] xl:w-[400px] xl:h-[410px] flex-col shadow-lg
                       justify-between items-center rounded-2xl transition-all duration-500"
        >
            {/* Profile Image */}
            <img loading="lazy" src={image} alt={name} width={400} height={410}     className="rounded-t-2xl" />

            {/* Name & Role */}
            <div className="flex absolute flex-col bottom-6 py-4 justify-center items-center">
                <h3 className="text-notBlack font-bold font-raleway text-lg md:text-xl xl:text-2xl">{name}</h3>
                <h4 className="text-gray-500 font-raleway font-light text-sm lg:text-base xl:text-xl">{role}</h4>
            </div>

            {/* Social Icons - Only Show When Hovering on the Card */}
            <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={visible ? { opacity: 1, width: 80 } : { opacity: 0, width: 0 }}
                transition={{ duration: 0.5 }}
                className="flex right-0 bottom-10 top-0 flex-col absolute gap-4 justify-center items-center px-4">
                <a 
                    href={`mailto:${email}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // Prevents unwanted flickers
                >
                    <MdEmail aria-label="true" size={30} className="text-white cursor-pointer" />
                </a>

                <a 
                    href={linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // Prevents unwanted flickers
                >
                    <FaLinkedin aria-label="true" size={30} className="text-white cursor-pointer" />
                </a>
            </motion.div>
        </div>
    );
}
