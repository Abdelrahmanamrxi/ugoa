import {useState,useRef} from 'react'
import Background from '../assets/background.png'
import { GoArrowDownRight } from "react-icons/go";
import location_data from '../data/location';
import {motion} from "motion/react"
import { MdOutlineEmail } from "react-icons/md";
import { MdArrowUpward,MdOutlineErrorOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiArrowRightUpLine } from "react-icons/ri";
import { MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser"
import { Map,input_variable,currently_selected,not_selected } from '../utility/ContactFunc.jsx';
const Contact = () => {
    const[current,set_current]=useState(1)
    const[data,set_data]=useState({first_name:"",last_name:"",company_name:"",phone_number:"",user_email:"",subject_title:"",message:""})
    const [error,set_error]=useState({})
    const[OnHoverPhone,set_phone]=useState(false)
    const form=useRef()
    const handleChange=(e)=>{
      const{name,value}=e.target
      set_data((dt)=>{
        return {...dt,[name]:value}
      })

    }
 
    const sendEmail = async (e) => {
      e.preventDefault();
      let now = new Date();
    
      const formattedTime = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} at ${
        now.getHours() % 12 || 12
      }:${now.getMinutes().toString().padStart(2, "0")} ${now.getHours() >= 12 ? "PM" : "AM"}`;
      
      document.getElementById("time").value = formattedTime;

      let new_errors = {};
      
      let validateEmail= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      Object.entries(data).forEach(([key, value]) => {
        if (value.trim() === "" && key!="phone_number") {
          new_errors[key] = "This is a required field.";
        }
        else if(!validateEmail.test(value) && key==="user_email"){
          new_errors[key]="Invalid Email."
        }
        
      });
      set_error(new_errors);
    
      if (Object.keys(new_errors).length > 0) {
        return;
      }
    
      try {
        const response = await emailjs.sendForm(
          "service_b5wn7kd",
          "template_qp7079s",
          form.current,
          "6kiY5fp0FtdJRFVzu"
        );
        console.log("Email has been Sent:", response.text);
        form.current.reset();
        set_data({ first_name: "", last_name: "", company_name: "", phone_number: "", user_email: "", subject_title:"",message: "" });
        set_error({});
      } catch (err) {
        console.log(err);
      }
    };
    
    console.log(error)
  return (
    <div className="h-full relative overflow-hidden flex">

    <div
      className="w-1/12 mt-10 h-screen"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "repeat-y", 
        backgroundPosition: "center",
      }}
    ></div>
  

    <div className=" flex flex-col w-3/4 m-3 mt-10  pl-10"> 
      <h1 className="uppercase mb-5 font-bold text-dark_green flex flex-row items-center text-2xl  md:text-4xl font-raleway">
        Get in touch <span><GoArrowDownRight /></span>
      </h1>
      
      <form onSubmit={sendEmail} onChange={handleChange} ref={form} className="flex flex-col justify-center  w-full border-2 border-dark">
  <div className="p-8 flex flex-col gap-10 w-full">
    <div className=' flex-col gap-10 flex md:gap-5 g md:flex-row w-full '>
  <div className='flex-col flex w-full '>
      <input
        type="text"
        placeholder="FIRST NAME"
        name="first_name"
        className={`${input_variable} w-full`}
      />
      {error.first_name&&<p className='text-red-800 flex flex-row items-center gap-1 text-sm mt-2 font-raleway'><MdOutlineErrorOutline/>{error.first_name}</p>}
      </div>
      <div className='flex flex-col w-full'>
      <input
        type="text"
        name="last_name"
        placeholder="LAST NAME"
        className={`${input_variable}`}
      />
      {error.last_name&&<p className='text-red-800 flex flex-row items-center gap-1 text-sm mt-2 font-raleway'><MdOutlineErrorOutline/>{error.last_name}</p>}
      </div>
      </div>
    <div className='md:flex flex flex-col gap-10 md:flex-row md:gap-3'>
   
  <div className='w-full flex flex-col'>
    <input
        type="email"
        placeholder="EMAIL"
        name="user_email"
        className={input_variable}
      /> 
      {error.user_email&&<p className='text-red-800 flex flex-row items-center gap-1 text-sm mt-2 font-raleway'><MdOutlineErrorOutline/>{error.user_email}</p>}
      </div>
      <div className='flex flex-col w-full'>
       <input
        type="number"
        name="phone_number"
        placeholder="PHONE"
        className={input_variable}
        onMouseEnter={()=>{set_phone(true)}}
        onMouseLeave={()=>{set_phone(false)}}
      />
     
      {OnHoverPhone&& <p className="text-gray-500 text-xs mt-1 flex flex-row items-center gap-1"><MdOutlineErrorOutline/> Phone number is optional.</p>}
      </div>
      </div>
       <div className='flex-col gap-10 flex md:gap-5 g md:flex-row w-full'>
       <div className='flex flex-col w-full'>
        <input
        type="text"
        name="company_name"
        placeholder="COMPANY NAME"
        className={`${input_variable} `}
      />
      {error.company_name&&<p className='text-red-800 flex flex-row items-center gap-1 text-sm mt-2 font-raleway'><MdOutlineErrorOutline/>{error.company_name}</p>}
      </div>
      <div className="flex flex-col w-full">
        <input type='text' name="subject_title" placeholder='SUBJECT' className={`${input_variable}`}/>
        {error.subject_title&&<p className='text-red-800 flex flex-row items-center gap-1 text-sm mt-2 font-raleway'><MdOutlineErrorOutline/>{error.subject_title}</p>}
      </div>
      </div>
      <div className='flex flex-col w-full'>
         <textarea
        name="message"
        placeholder="MESSAGE"
        className={input_variable}
      />
      {error.message&&<p className='text-red-800 flex flex-row items-center gap-1 text-sm mt-2 font-raleway'><MdOutlineErrorOutline/>{error.message}</p>}
      </div>
      <input type="hidden" name="time" id="time"></input>
       <div className='flex w-full  md:justify-end justify-center mt-7 text-right '>
    <motion.button 
    initial={{scale:1}}
    whileHover={{scale:1.1}}
    whileTap={{scale:0.9}}
    className='uppercase font-semibold bg-primary text-white font-raleway rounded-full w-full md:w-1/3 py-2'>Send A Message</motion.button>

   
  </div>
    
  </div>
 
</form>
<div className='flex gap-5 justify-center m-5  flex-row'>
<button onClick={()=>{set_current(1)}}  className={`${current===1?currently_selected:not_selected}`}>Egypt<span className={`${current===1?"bg-white transition-all duration-300 rounded-full p-2 text-black":'bg-dark_green transition-all duration-300 rounded-full text-white p-2'}`}>{current===1?(<RiArrowRightUpLine size={20}/>):<GoArrowDownRight className='font-bold' size={20} />}</span></button>
<button onClick={()=>{set_current(2)}}  className={`${current===2?currently_selected:not_selected}`}>UAE<span className={`${current===2?"bg-white rounded-full p-2 transition-all duration-300 text-black":"bg-dark_green rounded-full transition-all duration-300 text-white p-2"}`}>{current===2?(<RiArrowRightUpLine size={20}/>):<GoArrowDownRight className='font-bold' size={20} />}</span></button>
</div>
{location_data.map((data)=>{
    
    if(data.id===current){
       
        return(
            <div key={current} className='w-full flex flex-col justify-center md:flex-row gap-5'>
                <div className='flex font-raleway flex-col gap-2 rounded-md shadow-md border-2 p-8 w-full md:w-1/4'>
                    <h5><MdOutlinePhone className="text-dark_green" size={30}/></h5>
                    <h6 className="text-dark_navy font-semibold">Phone</h6>
                    <p className='text-gray-600'>{data.phone}</p>
                </div>
                <div className='flex font-raleway flex-col gap-2 rounded-md shadow-md border-2 p-8 w-full md:w-1/4'>
                    <h5><MdOutlineEmail className="text-dark_green" size={30}/></h5>
                    <h6 className="text-dark_navy font-semibold">Email</h6>
                    <p className='text-gray-600 break-words'>{data.email}</p>
                </div>
                <div className='flex font-raleway flex-col bg-dark_green gap-2 rounded-md shadow-md border-2 p-8 w-full md:w-1/4'>
                    <h5><IoLocationOutline className="text-white" size={30}/></h5>
                    <h6 className="text-white font-semibold">Address</h6>
                    <p className='text-white'>{data.location}</p>
                </div>
            </div>

        )
    }

})}
{Map(current)}
    




    </div>
  
   
  </div>
  
  )
}

export default Contact
