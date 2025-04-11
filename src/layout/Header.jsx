import {useState,useEffect,useMemo,useCallback} from 'react';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import {motion,AnimatePresence} from "motion/react";
import aboutImg from "../assets/about_header_img.jpg";
import { service_header } from '../data/services_data';
import { FaRegArrowAltCircleRight,FaRegArrowAltCircleLeft } from "react-icons/fa"
import ServiceHeader from './HeaderFiles/ServiceHeader';

const Header = ({IsImagesLoaded,setIsImagesLoaded,selectedService,imageCache,setSelectedService}) => {
  const location=useLocation()
  const PageHeaderLoad=()=>{
    if(location.pathname==="/services" && IsImagesLoaded){
      return (
        <SmoothBackground 
        image={imageCache[selectedService.id]} 
        prevImage={service_header[0].background}
        blur
      /> 
      )
    }
  }
 
 
  
  const backgroundCheck =useMemo(()=>{
    switch(location.pathname){
      case "/":
        return "bg-black"
      case "/contact":
        return "bg-gradient-primary"
      case "/services":
        return ""
      case "/about_us":
        return ""
      
    }
  },[location.pathname])
 
  
  const backgroundImageCheck=useMemo(()=>{
     if(location.pathname==="/about_us" && IsImagesLoaded.loading===false)
        return `url(${imageCache["about_img"]})`
      if(location.pathname==="/services" && IsImagesLoaded.loading===false) 
        return `url(${imageCache[selectedService.id]})`
      else  return ""
  },[location.pathname,imageCache,IsImagesLoaded])
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
    if(location.pathname==="/about_us" && IsImagesLoaded.loading===false){
      return(
      <div className='h-full flex flex-col justify-center items-center'>
        <motion.div
        className='w-full'
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:-40}}
        transition={{duration:1.2 ,ease:"easeInOut"}}>
          <motion.h2 
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{duration:1.8,ease:"easeOut",delay:0.2}}
          className="font-raleway font-bold text-white text-center md:text-4xl text-2xl">About Us</motion.h2>
          <motion.p
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          duration={{duration:2,ease:"easeOut",delay:1}}
           className='w-full mt-5 text-center font-light text-white font-raleway text-xs  md:text-md '>
            Guiding Your Success Journey Through Expertise and Innovation
          </motion.p>
        </motion.div>
      </div>
      )
    }
    if(location.pathname==="/services" && IsImagesLoaded.loading===false){
      
      return (
        <div>
       <ServiceHeader imageCache={imageCache} IsImagesLoaded={IsImagesLoaded} OnSelectChange={setSelectedService}/>
        </div>

   

      )
    }
  
  }
  const SmoothBackground = ({ image, prevImage, blur }) => (
    <div className="absolute inset-0 w-full h-full">
      {/* Permanent fallback */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${prevImage})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          filter: blur ? "blur(4px)" : "none"
        }}
      />
      
      {/* Animated foreground */}
      <motion.div
        key={image}
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${image})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          filter: blur ? "blur(4px)" : "none"
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
  
  return (
    
    <div id='header' className="relative w-full">   
       {PageHeaderLoad()}
      {/**UNDER IS THE HEADER OF THE OTHER PAGES */}
        {location.pathname!="/services"?<motion.div
          key="background-image"
        className={`${backgroundCheck} absolute transition-all duration-300 inset-0 w-full h-full lg:h-[52vh] bg-cover bg-center`}
        style={{
          backgroundImage: backgroundImageCheck,
          filter: location.pathname === "/services" ? "blur(4px)" : "",
        }}/>:''}
  
  {IsImagesLoaded.loading===false?<div className="text-white z-10  ">
      <Navbar loc={location.pathname} />
      <div className={`${location.pathname==="/services"?"h-screen":'h-[24vh] md:h-[40vh]'}`}>
      {renderContent()}
      </div>
      </div>:''}
  
    
  </div>
  
    
  )
}

export default Header
