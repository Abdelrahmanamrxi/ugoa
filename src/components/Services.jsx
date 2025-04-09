import {useState} from 'react'
import { GoArrowDownRight } from "react-icons/go";
import services_data from '../data/services_data';
import { FaArrowRight } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import {motion} from "motion/react"
import WhatWeOffer from './WhatWeOffer';
import { new_projects,old_projects } from '../data/services_data';


const Services = () => {
    
    const[service,set_service]=useState({
        id:null,
        title:"",
        icon:"",
        read_more:""
    })
   
  return (
    <div className='relative overflow-hidden'>
    <div className='m-8'>
    <h1 className=' uppercase font-raleway w-1/12 mb-8 text-dark_green font-semibold flex  flex-row items-center gap-2 md:text-3xl text-2xl'>Our Services <span className=''><GoArrowDownRight size={30}/></span></h1>
    <div className="md:grid md:grid-cols-2 md:grid-rows-2 flex flex-col gap-6">
        {services_data.map((service)=>{
            return(
            <motion.div 
            initial={{opacity:0,y:30}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:1,ease:"easeInOut",delay:service.id*0.1}}

            whileHover={{scale:1.05,transition:{
                duration:0.5,
                ease:"easeInOut"
            }}}
            key={service.id} className="shadow-md cursor-pointer  flex flex-row">
  <img alt={service.title} loading='lazy' className='bg-dark_green w-1/4 lg:w-1/5  object-contain md:h-full p-5 rounded-tl-lg rounded-bl-lg' src={service.icon}/>
    <div className="flex flex-col relative justify-between font-raleway gap-2 m-3">
      <h2 className="text-dark_green text-xl font-semibold">{service.title}</h2>
      <ul className="text-gray-500 tracking-wide  leading-relaxed text-xs md:text-sm">
        <li>{service.paragraph_1}</li>
        <li>{service.paragraph_2}</li>
        <li>{service.paragraph_3}</li>
        {service.paragraph_4 && <li>{service.paragraph_4}</li>}
      </ul>
      <p onClick={()=>{set_service({
        id:service.id,title:service.title,icon:service.icon,read_more:service.read_more})}} className="flex flex-row  text-sm hover:underline cursor-pointer items-center gap-2">
        Read More<span><FaArrowRight /></span>
      </p>
    </div>
  </motion.div>
            )
        })}
        
        </div>
      {service.id&&<motion.div 
         initial={{ opacity: 0, scale: 0.8 }} 
         animate={{ opacity: 1, scale: 1 }} 
         exit={{ opacity: 0, scale: 0}} 
         transition={{ duration: 0.5, ease: "easeInOut" }}
      
            className='fixed inset-0 z-50 
            flex items-center justify-center transition-all backdrop-blur-sm h-full '>
            <div className=' m-10 rounded-lg max-h-[90vh] overflow-y-auto  p-8 bg-dark_green'>
            <div className='flex flex-row justify-between items-center gap-3'>
            <div className='flex flex-row gap-4 items-center'>
            <img loading='lazy' src={service.icon} className='md:w-24 w-12'/>
            <h2 className='text-white font-semibold text-sm md:text-2xl '>{service.title}</h2>
            </div>
        
            <p onClick={()=>{set_service({})}} className='text-white cursor-pointer  font-semibold'><IoMdClose className='hover:opacity-80' size={30}/></p>
           
            </div>
            <p className='text-white text-md md:text-lg leading-relaxed mt-4 font-raleway'>{service.read_more}</p>
                
            </div>
            </motion.div>
  }
<div className="m-8 grid grid-cols-1 justify-center items-center">
    {/**WHAT WE OFFER TO NEW PROJECTS */}
    <WhatWeOffer projects={new_projects} type="new"/>
    <WhatWeOffer projects={old_projects} type="existing"/>
  {/**WHAT WE OFFER TO EXISTING PROJECTS */}
</div>


</div>

    </div>
  )
}

export default Services
