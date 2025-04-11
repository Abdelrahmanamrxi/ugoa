import { useState, useRef, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import Logo from '../assets/Horizontal_White_Comp_3.png'
import { MdClose } from "react-icons/md";
import {delay, easeIn, easeInOut,AnimatePresence, motion} from "motion/react"
import MenuLogo from "../assets/Vertical_White_Comp_2.png"
import { Link } from "react-router-dom";

const Navbar = ({loc}) => {
  
  const[Menu,set_Menu]=useState(false);
  const [activeLink, setActiveLink]= useState(null);
  const menuRef= useRef();

  useEffect(() => {
    const handleOutsideClick = (e) =>{
      if(Menu && menuRef.current && !menuRef.current.contains(e.target)){
        set_Menu(false);
      }
    };
      document.addEventListener("mousedown",handleOutsideClick);

      return () => {
        document.removeEventListener("mousedown", handleOutsideClick)
      };
  }, [Menu])

  return (
   <nav className='flex relative md:p-8 p-5  items-center  justify-between'>
  
    <img src={Logo} className='w-16  object-cover '/>

    <IoMdMenu onClick={()=>{set_Menu(true)}} className='md:hidden cursor-pointer flex' size={30}/>


<AnimatePresence>
  {Menu && (
    <motion.div
      key="sidebar"
      ref={menuRef}
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "100%" }} // Add exit animation
      transition={{ duration: 0.3, ease: "easeIn" }} // Smooth opening & closing
      className="fixed top-0 right-0 transform w-2/3 h-full sm:flex-row-reverse sm:justify-center sm:items-center bg-dark_navy/40 backdrop-blur-md z-50 flex flex-col transition-transform ease-in-out duration-800 overflow-y-auto"
    >
      {/* Fixed Close Button */}
      <motion.div 
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        exit={{ rotate: 0 }} // Reset rotation when closing
        transition={{ duration: 0.5, ease: "easeOut", delay:0.2 }}
        className="absolute top-0 left-2 m-4 z-50"
      >
        <MdClose
          onClick={() => set_Menu(false)} 
          className="cursor-pointer text-white" 
          size={35} 
        />
      </motion.div>

      {/* Empty Spacer to Prevent Overlap */}
      <div className="h-auto"></div>

      {/* Navigation Links */}
      <ul className="text-xl font-raleway mt-20 sm:mt-0 flex flex-col gap-6 w-full sm:w-1/2 items-end text-right">
        <Link to="/" className={`${loc === "/" ? "bg-secondary" : ""} hover:bg-secondary w-full text-base sm:text-lg transition-all duration-200 py-2 px-4`}>
          Home
        </Link>
        <Link to="/about_us" className={`${loc === "/about_us" ? "bg-secondary" : ""} hover:bg-secondary text-base sm:text-lg transition-all duration-200 w-full py-2 px-4`}>
          About Us
        </Link>
        <Link to="/services" className={`${loc === "/services" ? "bg-secondary" : ""} hover:bg-secondary text-base sm:text-lg transition-all duration-200 w-full py-2 px-4`}>
          Services
        </Link>
        <Link to="/contact" className={`${loc === "/contact" ? "bg-secondary" : ""} hover:bg-secondary text-base sm:text-lg transition-all duration-200 w-full py-2 px-4`}>
          Contact Us
        </Link>
      </ul>

      {/* Bottom Logo */}
      <div className="flex flex-col sm:w-1/2 items-center justify-center mt-auto sm:mt-0">
        <img className="w-full sm:max-w-[300px] md:w-full " src={MenuLogo} />
      </div>
    </motion.div>
  )}
</AnimatePresence>

    <ul className='uppercase hidden m-auto  md:flex justify-around md:gap-10 gap-5 text-md font-raleway items-center'>
      <Link to ="/services" onClick={()=>setActiveLink("services")} className={` ${loc==="/services"?"font-bold":''} hover:font-bold ${activeLink==="services"? 'font-bold' :""} transition-all duration-200 `}>Services</Link>
      <Link to="/about_us" onClick={()=>setActiveLink("about")}  className={`${loc==="/about_us"?"font-bold ":''} hover:font-bold ${activeLink==="about"? 'font-bold' :""} transition-all duration-200`}>About Us</Link>
      <Link to="/contact" onClick={()=>setActiveLink("contact")} className={` ${loc==="/contact"?"font-bold":""} hover:font-bold ${activeLink==="contact"? 'font-bold' :""} transition-all duration-200`}>Contact Us</Link>
    </ul>
    <div className='hidden md:flex'>
    <p className='border-2 p-2 text-sm rounded-full'>010-2589-6653</p>
    </div>
    </nav>
  )
}

export default Navbar
