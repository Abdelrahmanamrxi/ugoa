import React from 'react'
import {motion} from 'framer-motion'
export default function ContactHeader() {
  return (
    <div>
    <motion.div
      className="mt-16 px-4 md:px-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: -40 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
        className="font-raleway font-bold text-opacity-90 text-offwhite md:text-4xl text-2xl"
      >
        Contact Us
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 1 }}
        className="lg:w-1/3 md:w-1/2 w-full mt-5 text-offwhite text-justify text-opacity-90 font-raleway text-md md:text-lg"
      >
       We welcome your inquiries and collaboration opportunities.
      Whether you're seeking strategic support, looking to invest,
       or exploring partnerships within the recycling and sustainability sectors,
        our team is ready to assist. Get in touch to start the conversation.
      </motion.p>
    </motion.div>
  </div>
  )
}
