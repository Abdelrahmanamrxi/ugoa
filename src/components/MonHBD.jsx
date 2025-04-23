import hbd1 from "../assets/hbd1.jpg";
import hbd2 from "../assets/hbd2.jpg";
import { BsCake2Fill } from "react-icons/bs";
import { IoSparklesSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HBD(){
    return(
        <>
            <motion.div 
            initial={{opacity:0, scale:0, rotate:0}}
            whileInView={{opacity:1, scale:1, rotate:360}}
            transition={{duration:2, ease:"easeInOut"}}
            viewport={{once:true}}
            className="h-screen w-full flex flex-col md:flex-row gap-6 justify-center items-center overflow-hidden">
                <img src={hbd1} className="min-w-[128px] object-contain" />
                <div className="flex flex-col gap-4 items-center justify-center">
                    <div className="flex gap-4 ">
                        <IoSparklesSharp size={30} className="text-yellow-400" />
                        <BsCake2Fill size={60}  className="text-red-800"/>
                        <IoSparklesSharp size={30} className="text-yellow-400"/>
                    </div>
                    
                    <h2 className="text-primary font-bold text-center text-lg md:text-4xl p-4">Happy birthday Mon El mizayen</h2>
                    <FaHeart size={60} className="text-red-600"/>
                </div>
                
                <img src={hbd2} className="min-w-[128px] object-contain" />

            </motion.div>
        </>
    )
}