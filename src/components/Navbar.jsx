import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import Logo from '../assets/Horizontal_White_Comp_3.png'
import { MdClose } from "react-icons/md";
import {motion} from "motion/react"
import MenuLogo from "../assets/Vertical_White_Comp_2.png"
import { Link } from "react-router-dom";


const Navbar = ({loc}) => {
  
  const[Menu,set_Menu]=useState(false);
  const [activeLink, setActiveLink]= useState(null);
  return (
   <nav className='flex relative md:p-8 p-5  items-center  justify-between'>
  
    <img src={Logo} className='w-16 object-cover '/>

    <IoMdMenu onClick={()=>{set_Menu(true)}} className='md:hidden cursor-pointer flex' size={30}/>
    {Menu && (
      <motion.div
      initial={{ x: "100%" }}
      animate={{ x: Menu ? "0%" : "100%" }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      className="fixed top-0 right-0 transform w-2/3 h-full bg-primary z-50 flex flex-col transition-transform ease-in-out duration-800 overflow-y-auto"
    >
      {/* Fixed Close Button */}
      <div className="absolute top-0 mb-4 left-2 m-4 z-50">
        <MdClose 
          onClick={() => set_Menu(false)} 
          className="cursor-pointer text-white" 
          size={35} 
        />
      </div>
    
      {/* Empty Spacer to Prevent Overlap */}
      <div className="h-16"></div>
    
      {/* Navigation Links */}
      <ul className="text-xl font-raleway flex flex-col gap-6 w-full items-end text-right">
        <Link to="/" className={`${loc === "/" ? "bg-secondary" : ""} hover:bg-secondary w-full transition-all duration-200 py-2 px-4`}>
          Home
        </Link>
        <Link to="/about_us" className={`${loc === "/about_us" ? "bg-secondary" : ""} hover:bg-secondary transition-all duration-200 w-full py-2 px-4`}>
          About Us
        </Link>
        <Link to="/services" className={`${loc === "/services" ? "bg-secondary" : ""} hover:bg-secondary transition-all duration-200 w-full py-2 px-4`}>
          Services
        </Link>
        <Link to="/contact" className={`${loc === "/contact" ? "bg-secondary" : ""} hover:bg-secondary transition-all duration-200 w-full py-2 px-4`}>
          Contact Us
        </Link>
      </ul>
    
      {/* Bottom Logo */}
      <div className="flex flex-col items-center justify-center mt-auto">
        <img className="w-full" src={MenuLogo} />
      </div>
    </motion.div>
    
    )} 
    <ul className='uppercase hidden m-auto  md:flex justify-around md:gap-10 gap-5 text-md font-raleway items-center'>
      <Link to ="/services" onClick={()=>setActiveLink("services")} className={` ${loc==="/services"?"font-bold":''} hover:font-bold ${activeLink==="services"? 'font-bold' :""} transition-all duration-200 `}>Services</Link>
      <Link to="/about_us" onClick={()=>setActiveLink("about")}  className={`${loc==="/about_us"?"font-bold ":''} hover:font-bold ${activeLink==="about"? 'font-bold' :""} transition-all duration-200`}>About Us</Link>
      <Link to="/contact" onClick={()=>setActiveLink("contact")} className={` ${loc==="/contact"?"font-bold":""} hover:font-bold ${activeLink==="contact"? 'font-bold' :""} transition-all duration-200`}>Contact Us</Link>
    </ul>
    <div className='hidden md:flex'>
    <p className='border-2   p-2 text-sm rounded-full'>010-2589-6653</p>
    </div>
    </nav>
  )
}

export default Navbar
