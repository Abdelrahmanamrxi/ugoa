import {motion} from "motion/react"

export default function WhatWeOffer(prop) {
const projects=prop.projects
const type=prop.type
const CheckType=()=>{
  if(type==="new"){
    return "bg-secondary text-white"
  }
  else if(type==="existing"){
    return "bg-white text-dark_green border border-black"
  }
}

  return (
    <div>
  <h1 className="font-raleway lg:text-4xl md:text-3xl text-xl text-center font-semibold text-dark_green uppercase mb-8 mt-12">
    What we offer to {type} projects?
  </h1>

 
  <div className={`${CheckType()} z-10 font-raleway p-14 rounded-xl  flex flex-col  lg:grid md:grid-cols-[1fr_auto_1fr]  gap-10 relative`}>
    
 
    <div className="flex flex-col gap-5 justify-between">
      {projects.map((item, index) => (
        <div key={index} className="flex flex-col">
          <motion.h3 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.2 }}
            className="text-xl md:text-2xl font-bold uppercase"
          >
            {item.title}
          </motion.h3>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.4 }}
            className="w-full mt-2 text-base lg:hidden"
          >
            {item.text}
          </motion.p>
          <hr className={`mb-3 mt-5 lg:hidden ${type==="existing"?"border-t border-black/100":""}`} />
        </div>
      ))}
    </div>

    
    <motion.div className=" flex-col hidden lg:flex items-center justify-between relative">
      <div className="absolute w-1  bg-[#0D5C63] h-full"></div>
      {[...Array(4)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.2 }}
          className="w-5 h-5 bg-[#0D5C63]"
        ></motion.div>
      ))}
    </motion.div>

  
    <div className="hidden lg:flex flex-col gap-5 justify-between">
      {projects.map((line, index) => (
        <motion.p
          key={index}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.4 }}
          className="font-raleway text-base xl:text-lg font-medium   leading-[170%]  tracking-[0]"
        >
          {line.text}
        </motion.p>
      ))}
    </div>
  </div>
</div>
  )
}
