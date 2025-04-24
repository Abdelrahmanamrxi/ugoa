import {motion} from "framer-motion"
import LazyVideoHeader from './LazyVideoHeader'
import { Link } from "react-router-dom"

export default function HomeHeader() {
  return (
    <div className="w-full h-[64vh] overflow-hidden">
    <LazyVideoHeader />
    <motion.div 
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 2, ease: "easeInOut"}}
    className='flex flex-col px-6 w-full gap-4 md:gap-6 justify-start font-raleway items-start absolute top-1/2 md:left-6 transform -translate-y-20 z-10'>
      <h1 className="font-bold w-full md:text-3xl text-left">
        Enabling Growth in Recycling & Sustainability
      </h1>
      <p className='font-light text-justify text-sm md:text-lg w-4/5 md:w-1/4'>
        UGOA empowers recyclers and investors with expert guidance, deep market insight, 
        and turnkey solutions to build sustainable, high-impact operations.
      </p>
      <div className='flex gap-4 h-auto mt-2 py-2'>
        <Link to="/contact">
          <motion.button 
          initial={{scale:1}}
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          transition={{duration:0.3, ease:"easeInOut"}}
          className='bg-primary rounded-full px-2 py-1 text-xs md:text-sm md:px-4 md:py-2 hover:bg-white hover:text-primary'>
            Get Consult Now
          </motion.button>
        </Link>
        <Link to='/about_us'>
          <motion.button 
          initial={{scale:1}}
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          transition={{duration:0.3, ease:"easeInOut"}}
          className='border-primary px-2 py-1 text-xs md:text-sm hover:text-primary hover:border-transparent hover:bg-white border-2 rounded-full md:px-4 md:py-2'>
            Learn More
          </motion.button>
        </Link>
        
      </div>
    </motion.div>
  </div>
  )
}
