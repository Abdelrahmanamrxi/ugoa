import React from 'react';
import { memo } from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { IoMail, IoMailOutline, IoArrowDownSharp } from "react-icons/io5";
import { MdArrowUpward } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import whiteLogo from '../assets/Vertical_White_Comp_2.png';

function Footer() {
  return (
    <footer className='w-full grid grid-cols-3 items-start 
    justify-center gap-8 bg-secondary 
    md:grid-cols-3 md:gap-4 md:px-12 md:py-10 
    sm:grid-cols-1 sm:gap-6 sm:px-8 sm:py-4'
    >
      
      {/* Logo Section */}
      <div className='flex justify-center'>
        <img src={whiteLogo} className='min-w-xs object-cover' alt="Company Logo" />
      </div>
      
      {/* Contact Section */}
      <div className='w-full flex flex-col sm:justify-center sm:items-center gap-6'>
        <div className='flex md:flex-col sm:items-center  sm:flex-row gap-3 items-start justify-center'>
          <div className='flex gap-3 items-center'>
            <IoArrowDownSharp size={30} className='text-white -rotate-45' />
            <h1 className='uppercase text-white font-semibold text-3xl 
            sm:text-xl md:text-2xl'>Contact</h1>
          </div>
          <h1 className='uppercase text-white font-semibold text-3xl 
          sm:text-xl md:text-2xl'>Us Today</h1>
        </div>
        <p className='text-white text-xl font-light w-3/4 sm:text-base md:text-lg'>
          Contact us today to schedule a consultation and discover how we can help your business thrive.
        </p>
        <div className='flex gap-3'>
          <a className='socialIcon-footer'><FaFacebook className='text-white' /></a>
          <a className='socialIcon-footer'><FaInstagram className='text-white' /></a>
          <a className='socialIcon-footer'><FaLinkedinIn className='text-white' /></a>
          <a className='socialIcon-footer'><FaYoutube className='text-white' /></a>
        </div>
      </div>
      
      {/* Consultation & Contact Details Section */}
      <div className='w-full flex flex-col gap-6
      sm:justify-center sm:items-center'>
        <div>
          <h2 className='uppercase text-white mb-2 text-lg font-semibold
          sm:text-xl md:text-2xl'>Get a Free Consultation</h2>
          <div className='flex gap-4'>
            <div className="bg-white flex items-center rounded-full px-6 py-2 gap-2 w-full max-w-[250px]">
              <IoMailOutline size={20} className='text-gray-500' />
              <input 
                className="bg-transparent w-full outline-none font-medium placeholder-gray-400
                sm:text-xs"
                placeholder="Enter your email"
              />
            </div>
            <button 
              className="bg-dark_green hover:bg-dark_green/80 transition w-full max-w-[150px] text-white font-medium px-4 py-3 rounded-full flex items-center justify-center gap-2">
              <span className="uppercase text-xs">Get Started</span>
              <div className='bg-white text-black rounded-full p-1'>
                <MdArrowUpward size={20} className='rotate-45' />
              </div>
            </button>
          </div>
        </div>


        <div className='flex flex-col gap-4'>
          <div className='flex gap-3 items-center'>
            <div className='footerIcon'><FaPhoneAlt /></div>
            <p className='text-white sm:text-xs md:text-sm lg:text-base xl:text-lg  font-normal'>+971545423530</p>
          </div>
          <div className='flex gap-3 items-center'>
            <div className='footerIcon'><IoMail /></div>
            <p className='text-white 
            sm:text-xs md:text-sm lg:text-base xl:text-lg font-normal'>ahmed_elmizayen@ugoa.me</p>
          </div>
          <div className='flex gap-3 items-center'>
            <div className='footerIcon'><FaLocationDot /></div>
            <p className='text-white w-3/4
            sm:text-xs md:text-sm lg:text-base xl:text-lg font-normal '>
              Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, UAE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
