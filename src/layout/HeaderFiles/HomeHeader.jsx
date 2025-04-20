import {motion} from "framer-motion"
import LazyVideoHeader from './LazyVideoHeader'

export default function HomeHeader() {
  return (
    <div className="w-full h-screen overflow-hidden">
    <LazyVideoHeader />
    <motion.div 
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 2, ease: "easeInOut"}}
    className='flex flex-col px-6 w-full gap-4 md:gap-6 justify-start font-raleway items-start absolute top-1/2 left-6 transform -translate-y-1/2 z-10'>
      <h1 className="font-bold w-full md:text-4xl text-2xl text-left">
          First-Class Business Consultant
      </h1>
      <p className='text-left font-light text-sm md:text-lg w-4/5 md:w-1/4'>
        We know how large objects will act, but things on a small scale just do not act that way.
      </p>
      <div className='flex gap-4 h-auto mt-2 py-2'>
        <motion.button 
        initial={{scale:1}}
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        transition={{duration:0.3, ease:"easeInOut"}}
        className='bg-primary rounded-full px-2 py-1 text-xs md:text-sm md:px-4 md:py-2 hover:bg-white hover:text-primary'>
          Get Consult Now
        </motion.button>
        <motion.button 
        initial={{scale:1}}
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        transition={{duration:0.3, ease:"easeInOut"}}
        className='border-primary px-2 py-1 text-xs md:text-sm hover:text-primary hover:border-transparent hover:bg-white border-2 rounded-full md:px-4 md:py-2'>
          Learn More
        </motion.button>
      </div>
    </motion.div>
  </div>
  )
}
