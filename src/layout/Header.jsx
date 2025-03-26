import React from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import {motion} from "motion/react"
import consult from "../assets/consult.jpg"


const Header = () => {
  const location=useLocation()
  function backgroundCheck(){
    if(location.pathname==="/contact"){
      return "bg-gradient-primary"
    }
    if(location.pathname==="/services"){
      return ""
    }
  }
  function backgroundImageCheck(){
    if(location.pathname==="/services")
      return `url(${consult})`
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
  
  }
  return (
   <div style={{backgroundImage:backgroundImageCheck(), backgroundSize:"cover", backgroundPosition:"center" }} className={`${backgroundCheck()} text-white md:h-[62vh] lg:h-[54vh] h-[45vh] `}>
    <Navbar loc={location.pathname}/>
    {renderContent()}
    </div>
  )
}

export default Header
