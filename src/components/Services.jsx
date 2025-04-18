import {useState,useEffect} from 'react'
import { GoArrowDownRight } from "react-icons/go";
import services_data from '../data/services_data';
import { FaArrowRight } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import {AnimatePresence, motion} from "motion/react"
import WhatWeOffer from './WhatWeOffer';
import { new_projects,old_projects } from '../data/services_data';


const Services = ({refProp,scrollToServices}) => {
  const [isMobile, setIsMobile] = useState(false);
 const CheckPadding=(id)=>{
   if(id===8 || id===7 || id==4)
    return ' '
   else
   return 'p-5'
 }
useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768); 
  };
  
  checkMobile();  // Check on mount
  
  window.addEventListener('resize', checkMobile); 
  return () => {
    window.removeEventListener('resize', checkMobile);  
  };
}, []);
    const[service,set_service]=useState({
        id:null,
        title:"",
        icon:"",
        read_more:""
    })
    useEffect(() => {
      if (service.id) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [service]);
  return (
    <div className='relative overflow-hidden'>
    <div className='lg:m-8'>
    <h1 className=' uppercase font-raleway w-1/12 lg:m-5 m-5 md:m-8 mb-5 text-dark_green font-semibold flex  flex-row items-center gap-2 md:text-4xl text-2xl'>Our Services <span className=''><GoArrowDownRight size={30}/></span></h1>
    <div className='flex flex-col m lg:justify-normal md:justify-center md:items-center lg:items-start'>
    <div id="services" ref={refProp} className="lg:grid lg:grid-cols-2 md:w-5/6 lg:w-full lg:grid-rows-2 m-5 flex flex-col gap-6">
        {services_data.map((service)=>{
            return(
            <motion.div 
            onClick={()=>{set_service({ id:service.id,title:service.title,icon:service.icon,read_more:service.read_more})}}
            initial={{opacity:0,y:30}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:1,ease:"easeInOut",delay:service.id*0.1}}

            whileHover={{ 
               
              boxShadow: "0 4px 20px rgba(0, 128, 0, 0.2)", 
              transition: {
                duration: 0.4,
                ease: "easeInOut"
              }
              }}
            key={service.id} className="shadow-md  cursor-pointer  flex flex-row">
              
  <img alt={service.title}  className={`${CheckPadding(service.id)} bg-dark_green lg:w-1/5 md:w-32 w-1/5 lg:h-full     object-contain   rounded-tl-lg rounded-bl-lg`} src={service.icon}/>
    <div className="flex flex-col relative md:justify-center justify-between font-raleway gap-2 m-3">
      <h2 className="text-dark_green  text-lg md:text-2xl font-semibold">{service.title}</h2>
      <ul className="text-gray-500 sm:tracking-wide text-xs leading-normal  sm:leading-relaxed md:text-sm ">
        <li>{service.paragraph_1}</li>
        <li>{service.paragraph_2}</li>
        <li>{service.paragraph_3}</li>
        {service.paragraph_4 && <li>{service.paragraph_4}</li>}
      </ul>
      <p onClick={()=>{set_service({
        id:service.id,title:service.title,icon:service.icon,read_more:service.read_more})}} className="flex flex-row  text-sm hover:underline cursor-pointer  items-center gap-2">
        Read More<span><FaArrowRight /></span>
      </p>
    </div>
  </motion.div>
            )
        })}
       
        </div>
       
        <AnimatePresence>
      {service.id&& !isMobile &&( 
      <motion.div 
         key="modal"
         
         initial={{ opacity: 0}} 
         animate={{ opacity: 1} }
         exit={{ opacity: 0, x: window.innerWidth > 768 ? "10%" : 0 }} 
         transition={{ duration: 0.3, ease: "easeInOut" }}
            className='fixed inset-0 z-50 
            flex items-center justify-center  transition-all backdrop-blur-sm h-full '>
            <div className=' m-10 rounded-lg max-h-[90vh] overflow-y-auto  p-8 bg-dark_green'>
            <div className='flex flex-row justify-between items-center gap-3'>
            <div className='flex flex-row gap-4 items-center'>
            <img  src={service.icon} className={`${[8,7,4].includes(service.id)?"md:w-32 w-24 h-32":"md:w-24 w-12 h-24 p-2 "} `}/>
            <h2 className='text-white font-semibold text-sm md:text-2xl '>{service.title}</h2>
            </div>
        
            <p onClick={()=>{
              set_service({}) 
              scrollToServices()
          } }className='text-white cursor-pointer  font-semibold'><IoMdClose className='hover:opacity-80' size={30}/></p>
           
            </div>
            <p className='text-white text-md md:text-lg leading-relaxed mt-4 font-raleway'>{service.read_more}</p>
                
            </div>
            </motion.div>
      )
  }
  </AnimatePresence>
  {service.id && isMobile && (
     <div 
        className='fixed inset-0 z-50 
        flex items-center justify-center service-webkit transition-opacity  backdrop-blur-sm h-full '>
        <div className=' m-10 rounded-lg max-h-[90vh] overflow-y-auto  p-8 bg-dark_green'>
        <div className='flex flex-row justify-between items-center gap-3'>
        <div className='flex flex-row gap-4 items-center'>
        <img  src={service.icon} className={`${[8,7,4].includes(service.id)?"md:w-32 sm:w-28 w-11":"md:w-24 p-2 w-14 sm:w-16"}`}/>
        <h2 className='text-white font-semibold  text-lg sm:text-lg md:text-xl '>{service.title}</h2>
        </div>
    
        <p onClick={()=>{set_service({})} }className='text-white cursor-pointer  font-semibold'><IoMdClose className='hover:opacity-80' size={30}/></p>
       
        </div>
        <p className='text-white text-md sm:text-lg md:text-xl leading-relaxed mt-4 font-raleway'>{service.read_more}</p>
            
        </div>
        </div>
  )}
<div className="m-8 grid grid-cols-1 justify-center items-center">
    {/**WHAT WE OFFER TO NEW PROJECTS */}
    <WhatWeOffer projects={new_projects} type="new"/>
    <WhatWeOffer projects={old_projects} type="existing"/>
  {/**WHAT WE OFFER TO EXISTING PROJECTS */}
</div>
</div>

</div>

    </div>
  )
}

export default Services
