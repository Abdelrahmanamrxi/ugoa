import React from 'react'
import whiteArrow from '../assets/whiteDownwardArrow.svg';
import facebook from '../assets/facebookIcon.svg';
import insta from '../assets/instaIcon.svg';
import linkedIn from '../assets/inIcon.svg';
import youtube from '../assets/youtubeIcon.svg';
import darkArrow from '../assets/darkUpwardArrow.svg';
import grayMail from '../assets/grayMailIcon.svg';
import phone from '../assets/phoneIcon.svg';
import mail from '../assets/mailIcon.svg';
import loc from '../assets/locIcon.svg';


export default function Footer() {
  return (
    <footer className='w-full h-full flex gap-10 bg-secondary p-[7.5rem]'>

      <div className='w-1/2 flex flex-col gap-6 justify-between'>
        {/* 1 left part */}

        <div className='flex flex-col gap-4 items-start'> 
          <div className='flex gap-4 items-center'>
            <img src={whiteArrow} alt="white down ward arrow" />
            <h1 className='uppercase text-white font-semibold text-4xl'>contact </h1>
          </div>
          <h1 className='uppercase text-white font-semibold text-4xl'>us today</h1>
        </div>

        <p className=' text-white font-light w-3/5'>
          Contact us today to schedule a 
          consultation and discover how we can help your business thrive.</p>

          <div className='flex gap-3 items-center'>
              <a className='socialIcon-footer'><img src={facebook} alt="Facebook-Icon" /></a>
              <a className='socialIcon-footer'><img src={insta} alt="Instagram-Icon" /></a>
              <a className='socialIcon-footer'><img src={linkedIn} alt="LinkedIn-Icon" /></a>
              <a className='socialIcon-footer'><img src={youtube} alt="Youtube-Icon" /></a>          
          </div>
  
      </div>

    {/* 2 */}
      <div className='w-1/2 flex flex-col gap-6 justify-between items-start'>

        <div>
          <h2 className='uppercase text-white mb-2 text-lg font-semibold'>get a free consultation</h2>
          <div className='flex gap-6'>
          <div className="bg-white flex items-center rounded-full px-9 py-2 gap-2">
            <img src={grayMail} alt="Email icon" className="w-5 h-5" />
            <input 
              className="bg-transparent min-w-[220px] outline-none font-medium placeholder-gray-400"
              placeholder="Enter your email to get started"
            />
          </div>

            <button 
              className="bg-dark_green hover:bg-dark_green/80 transition w-full text-white font-medium 
              px-2 py-3 rounded-full flex items-center justify-center gap-3">
              <span className="uppercase">Get Started</span>
              <img src={darkArrow} alt="Arrow icon" className="footerIcon" />
            </button>
     
          </div>
        </div>


        <div className='flex flex-col gap-6'>
          <div className='flex gap-4 items-center'>
            <div className='footerIcon'><img className='icon' src={phone} alt="" /></div>
            <p className='text-white font-semibold'>(987)-749-5403</p>
          </div>
          <div className='flex gap-4 items-center'>
            <div className='footerIcon'><img className='icon' src={mail} alt="" /></div>
            <p className='text-white font-semibold'>info@conscellence.com</p>
          </div>
          
          <div className='flex gap-4 items-center'>
            <div className='footerIcon'><img className='icon' src={loc} alt="" /></div>
            <p className='text-white font-semibold'>
            123 Business Road, Suite 456, City, State, ZIP Code
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}
