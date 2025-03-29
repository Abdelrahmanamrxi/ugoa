import {useState} from 'react';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import {motion} from "motion/react";
import consult from "../assets/consult.jpg";
import aboutImg from "../assets/about_header_img.jpg";
import { service_header } from '../data/services_data';

const Header = () => {
  const [service,set_service]=useState(1)
  const[selected,setSelected]=useState({
    isSelected:true,
    image:service_header[0].background,
    id:1,
    title:'',
    text:''
  })
  
  const location=useLocation()
  function backgroundCheck(){
    if(location.pathname==="/contact"){
      return "bg-gradient-primary"
    }
    if(location.pathname==="/services"){
      return ""
    }
    if(location.pathname==="/about_us"){
      return ""
    }
    
  }
  function backgroundImageCheck(){
    if(location.pathname==="/services"){
      return `url(${selected.image})`
    }
    if(location.pathname === "/about_us"){
      return `url(${aboutImg})`;
    }
  }
  function renderContent(){
    if(location.pathname==="/contact"){
      return(
      <div>
        <motion.div
        className='mt-16 md:ml-8 ml-3   '
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:-40}}
        transition={{duration:1.2 ,ease:"easeInOut"}}>
          <motion.h2 
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{duration:1.8,ease:"easeOut",delay:0.2}}
          className="font-raleway font-bold text-opacity-90 text-offwhite md:text-4xl text-2xl">Contact Us</motion.h2>
          <motion.p
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          duration={{duration:2,ease:"easeOut",delay:1}}
           className='lg:w-1/3 md:w-1/2 mt-5  text-offwhite text-opacity-90 font-raleway text-md md:text-lg '>Read our Global Annual Review, meet our Global Leadership Team, discover our approach to corporate sustainability, our commitment to diversity, inclusion, and more.</motion.p>
        </motion.div>
      </div>
      )
    }
    if(location.pathname==="/about_us"){
      return(
      <div>
        <motion.div
        className='mt-16  flex flex-col justify-center items-center'
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:-40}}
        transition={{duration:1.2 ,ease:"easeInOut"}}>
          <motion.h2 
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{duration:1.8,ease:"easeOut",delay:0.2}}
          className="font-raleway font-bold text-white md:text-4xl text-2xl">About Us</motion.h2>
          <motion.p
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          duration={{duration:2,ease:"easeOut",delay:1}}
           className='md:w-1/2 mt-5 text-center font-light text-white font-raleway text-xs w-3/4 md:text-md '>
            Guiding Your Success Journey Through Expertise and Innovation
          </motion.p>
        </motion.div>
      </div>
      )
    }
    if(location.pathname==="/services"){
      return(
    
          
        <div className="relative flex justify-end mr-12 items-center  md:h-screen">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center backdrop-blur-lg  transition-all duration-500"
        style={{
          backgroundImage: selected.id !== null ? `url(${service_header.image})` : "none",
          opacity: selected.id !== null ? 1 : 0.5,
          zIndex:-1
        }}
      />
    

      {/* Card Container */}
      <div className="relative flex gap-6">
        {service_header.map((card) => (
          <motion.div
            
            key={card.id}
            onClick={() => setSelected({isSelected:true,image:card.background,id:card.id,title:card.background_title,text:card.background_text})}
            className="relative w-48 h-52  min-h-32 bg-white rounded-lg shadow-lg cursor-pointer overflow-hidden"
            initial={{ scale: 1 }}
            animate={{
              scale: selected.id === card.id ? 1.1 : 1,
              y: selected.id === card.id ? -20 : 0,
              height: selected.id === card.id ? "20rem" : "16rem",
              zIndex: selected.id === card.id ? 10 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            {/* Card Background Image */}
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${card.image})` }}
              
              
            />

            {/* Card Content */}
            <motion.div
              className="absolute bottom-0 w-full p-4 text-white "
            >
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className="text-sm">{card.text}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
   
      )
    }
  
  }
  return (
    
    <div className="relative w-full">
    {/* Blurred Background Image */}
    <div
    
      className={`${backgroundCheck()} absolute inset-0 w-full h-full  bg-cover bg-center`}
      style={{
        backgroundImage: backgroundImageCheck(),
        filter:location.pathname==="/services"? "blur(4px)":'', // This blurs ONLY the background
      }}
    ></div>
  
    {/* Content Container (Not Blurred) */}
    <div className="text-white z-10  ">
      <Navbar loc={location.pathname} />
      <div className={`${location.pathname==="/services"?"h-screen":'h-[24vh] md:h-[40vh]'}`}>
      {renderContent()}
      </div>
    </div>
  </div>
  
    
  )
}

export default Header
