import {useState,useRef} from 'react'
import { GoArrowDownRight } from "react-icons/go";
import services_data from '../data/services_data';
import { FaArrowRight } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import {motion,useScroll,useTransform} from "motion/react"


const Services = () => {
    
    const[service,set_service]=useState({
        id:null,
        title:"",
        icon:"",
        read_more:""
    })
    console.log(service)
  return (
    <div className=' relative'>
        <div className='m-8'>
    <h1 className=' uppercase font-raleway w-1/12 mb-8 text-dark_green font-semibold flex  flex-row items-center gap-2 md:text-3xl text-2xl'>Our Services <span className=''><GoArrowDownRight size={30}/></span></h1>
    <div className="md:grid md:grid-cols-2 md:grid-rows-2 flex flex-col gap-6">
        {services_data.map((service)=>{
            return(
            <motion.div 
            initial={{opacity:0,y:30}}
            animate={{opacity:1,y:0}}
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
      
            className='fixed inset-0 z-50 flex items-center justify-center transition-all backdrop-blur-sm h-full '>
            <div className=' m-10 rounded-lg p-8 bg-dark_green'>
            <div className='flex flex-row justify-between items-center gap-3'>
            <div className='flex flex-row gap-4 items-center'>
            <img loading='lazy' src={service.icon} className='w-24'/>
            <h2 className='text-white font-semibold text-2xl '>{service.title}</h2>
            </div>
            <p onClick={()=>{set_service({})}} className='text-white cursor-pointer  font-semibold'><IoMdClose className='hover:opacity-80' size={30}/></p>
           
            </div>
          
            <p className='text-white leading-relaxed mt-4 font-raleway'>{service.read_more}</p>
                
            </div>
            </motion.div>
  }
<div className="m-8 flex flex-col justify-center items-center">
  <h1 className="font-raleway md:text-3xl text-xl font-semibold text-dark_green uppercase mb-5 mt-5">
    What we offer to new projects?
  </h1>

  <div className="text-white z-1 font-raleway p-10 rounded-lg bg-secondary flex flex-row gap-10 relative">
 
    <div className="flex flex-col md:gap-10 justify-between">
      <h3 className="text-xl font-semibold uppercase">Feasibility Study</h3>
      <p className='w-full flex mb-3  mt-2 md:hidden text-sm '>Reviewing assumptions to ensure numbers are correct inline with industry trends</p>
      <hr className='mb-3 md:hidden'/>
      <h3 className="text-xl font-semibold uppercase">Pre Installation</h3>
      <p className='w-full mb-3 flex  mt-2 md:hidden text-sm '>Factory layout review, machines selection, tendering process management till contracts signage.</p>
      <hr className='mb-3 md:hidden'/>
      <h3 className="text-xl font-semibold uppercase">Installation and Pre-Production</h3>
      <p className='w-full mb-3 flex  mt-2 md:hidden text-sm'>Supervision on installation process while
      preparing SOPs for each department and start with essential preparation for plant establishment and compliance.</p>
      <hr className='mb-3 md:hidden'/>
      <h3 className="text-xl font-semibold uppercase">Post Installation</h3>
      <p className='w-full mb-2 flex  mt-2 md:hidden text-sm'>Knowledge transfer of efficient processes
      in different department. optimum production setup, importation process and start brands approval process</p>
    </div>

   
    <motion.div
    className=" flex-col hidden md:flex items-center justify-between relative">
      
      <div className="absolute w-1 bg-[#0D5C63] h-full"></div>
      <div key={1}  className="w-5 h-5 bg-[#0D5C63]"></div>
      <div key={2}  className="w-5 h-5 bg-[#0D5C63]"></div>
      <div key={3}  className="w-5 h-5 bg-[#0D5C63]"></div>
      <div key={4}  className="w-5 h-5 bg-[#0D5C63]"></div>
    </motion.div>
    <div className='md:flex md:flex-col hidden justify-between'>
    <p className='w-full '>Reviewing assumptions to ensure numbers are correct inline with industry trends</p>
    <p>Factory layout review, machines selection, tendering process management till contracts signage.</p>
    <p>Supervision on installation process while
    preparing SOPs for each department and start with essential preparation for plant establishment and compliance.</p>
    <p>Knowledge transfer of efficient processes
    in different department. optimum production setup, importation process and start brands approval process</p>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default Services
