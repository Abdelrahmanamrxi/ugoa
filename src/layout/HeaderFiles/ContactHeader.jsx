import React from 'react'
import {motion} from 'framer-motion'
export default function ContactHeader() {
  return (
    <div className='md:m-2 '>
    <motion.div
      className="mt-16 p-1 sm:mt-0 md:ml-8 ml-3 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: -40 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
        className="font-raleway font-bold text-opacity-90 text-offwhite md:text-4xl text-2xl"
      >
        Contact Us for Expert Consultation
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 1 }}
        className=" md:w-3/4  tracking-tight mt-5  text-offwhite   text-opacity-90 font-raleway text-sm md:text-md md:text-lg"
      >
       We welcome your inquiries and collaboration opportunities.
      Whether you're seeking strategic support, looking to invest,
       or exploring partnerships within the recycling and sustainability sectors,
        our team is ready to assist. Get in touch to start the conversation.
      </motion.p>
    </motion.div>
  </div>
  )
}
