import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import Logo from '../assets/Horizontal_White_Comp.png'
import { MdClose } from "react-icons/md";
import {motion} from "motion/react"
import MenuLogo from "../assets/Vertical_White_Comp_2.png"


const Navbar = () => {
  const[Menu,set_Menu]=useState(false)
  return (
   <nav className='flex relative md:p-8 p-3 items-center justify-between'>
    <img src={Logo} className='md:w-24 w-16'/>
    <IoMdMenu onClick={()=>{set_Menu(true)}} className='md:hidden cursor-pointer flex' size={30}/>
    {Menu && (
      <motion.div
      initial={{x:"100%"}}
      animate={{x:Menu?"0%":"100%"}}
      transition={{duration:0.1,ease:"easeInOut",
      }}
       className={`fixed top-0 right-0 transform w-2/3 h-full bg-primary  z-50 flex  flex-col transition-transform ease-in-out duration-800   
      `}>
        <MdClose onClick={()=>{set_Menu(false)}} className='cursor-pointer  m-5 ' size={30}/>
        <ul className="text-xl font-raleway flex flex-col gap-6 w-full items-end text-right">
  <li className="hover:bg-secondary w-full">
    <div className="py-2 px-4">Home</div>
  </li>
  <li className="hover:bg-secondary w-full">
    <div className="py-2 px-4">About Us</div>
  </li>
  <li className="hover:bg-secondary w-full">
    <div className="py-2 px-4">Services</div>
  </li>
  <li className="hover:bg-secondary w-full">
    <div className="py-2 px-4">Contact Us</div>
  </li>
</ul>

<div className="absolute bottom-0">
  <img className="w-full"  src={MenuLogo}/>
  
  </div>
       
      </motion.div>
    )} 
    <ul className='uppercase hidden  md:flex justify-around md:gap-5 gap-3 text-xs md:text-sm font-raleway items-center'>
      <li>Services</li>
      <li>About Us</li>
      <li>Contact Us</li>
    </ul>
    <div className='hidden md:flex'>
    <p className='border-2 p-3 text-sm rounded-full'>010-2589-6653</p>
    </div>
    </nav>
  )
}

export default Navbar
