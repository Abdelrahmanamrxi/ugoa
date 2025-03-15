import React from 'react'
import { memo } from 'react';
import { FaFacebook,FaInstagram,FaYoutube,FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdArrowUpward } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import whiteLogo from '../assets/Vertical_White_Comp.png';
import { IoArrowDownSharp } from "react-icons/io5";


 function Footer() {
  return (
    <footer className='w-full h-full flex gap-10 bg-secondary p-[7.5rem]'>
      <img src={whiteLogo} className='w-1/3 object-cover' alt="" />
      <div className='w-1/2 flex flex-col gap-6 justify-between'>
        {/* 1 left part */}

        <div className='flex flex-col gap-4 items-start'> 
          <div className='flex gap-4 items-center'>
           <IoArrowDownSharp size={35} className='text-white -rotate-45'/>
            <h1 className='uppercase text-white font-semibold text-4xl'>contact </h1>
          </div>
          <h1 className='uppercase text-white font-semibold text-4xl'>us today</h1>
        </div>

        <p className=' text-white font-light w-3/5'>
          Contact us today to schedule a 
          consultation and discover how we can help your business thrive.</p>

          <div className='flex gap-3 items-center'>
              <a className='socialIcon-footer'><FaFacebook className='text-white'/></a>
              <a className='socialIcon-footer'><FaInstagram className='text-white'/></a>
              <a className='socialIcon-footer'><FaLinkedinIn className='text-white'/></a>
              <a className='socialIcon-footer'><FaYoutube className='text-white'/></a>          
          </div>
  
      </div>

    {/* 2 */}
      <div className='w-1/2 flex flex-col gap-6 justify-between items-start'>

        <div>
          <h2 className='uppercase text-white mb-2 text-lg font-semibold'>get a free consultation</h2>
          <div className='flex gap-6'>
          <div className="bg-white flex items-center rounded-full px-9 py-2 gap-2">
            <IoMailOutline size={20} className='text-gray-500 '/>
            <input 
              className="bg-transparent min-w-[220px] outline-none font-medium placeholder-gray-400"
              placeholder="Enter your email to get started"
            />
          </div>

            <button 
              className="bg-dark_green hover:bg-dark_green/80 transition w-full text-white font-medium 
              px-4 py-3 rounded-full flex items-center justify-center gap-3">
              <span className="uppercase">Get Started</span>
              <div className='bg-white text-black rounded-full '>
              <MdArrowUpward size={30} className='rotate-45'/>
              </div>
            </button>
     
          </div>
        </div>


        <div className='flex flex-col gap-6'>
          <div className='flex gap-4 items-center'>
            <div className='footerIcon'><FaPhoneAlt/></div>
            <p className='text-white font-semibold'>(987)-749-5403</p>
          </div>
          <div className='flex gap-4 items-center'>
            <div className='footerIcon'><IoMail/></div>
            <p className='text-white font-semibold'>info@conscellence.com</p>
          </div>
          
          <div className='flex gap-4 items-center'>
            <div className='footerIcon'><FaLocationDot/></div>
            <p className='text-white font-semibold'>
            123 Business Road, Suite 456, City, State, ZIP Code
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}
export default memo(Footer)
