import {useState,useRef,Suspense,lazy, useEffect} from 'react'
import Background from '../assets/background.png'
import { GoArrowDownRight } from "react-icons/go";
import location_data from '../data/location';
import {easeInOut, motion, time} from "motion/react"
import { MdOutlineEmail } from "react-icons/md";
import { MdArrowUpward,MdOutlineErrorOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { RiArrowRightUpLine } from "react-icons/ri";
import { MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser"
import {LanguageCheck} from '../utility/utility.jsx'
const  EGMAP=lazy(()=>import('../utility/EGMap.jsx'))
const UAEMAP=lazy(()=>import('../utility/UAEMap.jsx'))
import { input_variable,currently_selected,not_selected } from '../utility/ContactFunc.jsx';
import { ImSpinner8 } from "react-icons/im";
import { MdCheckCircle } from 'react-icons/md';
import {useDispatch,useSelector} from "react-redux"
import { setData,setDebounce,setTime,setTimeRemaining } from '../store/FormSlice.js';
import { ImSpinner2 } from "react-icons/im";
const Contact = () => {
    const[current,set_current]=useState(1)
    const dispatch=useDispatch()
    const [Loading,set_loading]=useState(false)
    const [clicks,set_click]=useState(0)
    const [error,set_error]=useState({})
    const[OnHoverPhone,set_phone]=useState(false)
    const [Success,set_success]=useState(false)
    const[Disabled,set_disabled]=useState(false)
    const TrackClicks=useRef(clicks)  
    const form=useRef()
    const handleChange=(e)=>{
      const{name,value}=e.target
       dispatch(setData({[name]:value}))
    }
    const formData=useSelector((state)=>state.formData)
    
    const sendEmail = async (e) => {
      e.preventDefault();
      let now = new Date();
      if(Disabled) return;
      set_click((prev)=>prev+1)
      const formattedTime = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} at ${
        now.getHours() % 12 || 12
      }:${now.getMinutes().toString().padStart(2, "0")} ${now.getHours() >= 12 ? "PM" : "AM"}`;
      
      document.getElementById("time").value = formattedTime;

      let new_errors = {};
     
      let validateEmail= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      Object.entries(formData.form).forEach(([key, value]) => {
        if (value.trim() === "" && key!="phone_number") {
          new_errors[key] = "This is a required field.";
        }
        else if(!validateEmail.test(value) && key==="user_email"){
          new_errors[key]="Invalid Email."
        }
        if(key==="message" && value.length<15 && LanguageCheck(value)!="und"){
          new_errors[key]="Please enter a valid message."
        }
        
        
      });
      set_error(new_errors);
    
      if (Object.keys(new_errors).length > 0) {
        return;
      }
    
      try {
        if(!formData.debouncing && !formData.TimeRemaining){
        set_loading(true)
        const response = await emailjs.sendForm(
          "service_b5wn7kd",
          "template_qp7079s",
          form.current,
          "15yh83s6ohhngZ2Zc"
        );
        console.log("Email has been Sent:", response.text);
        form.current.reset();
        dispatch(setData({ first_name: "", last_name: "", company_name: "", phone_number: "", user_email: "", subject_title:"",message: "" }));
        dispatch(setDebounce(true))
        localStorage.setItem('debouncing',true)
        const now = new Date().getTime();
        dispatch(setTime(now))
        localStorage.setItem('last_time',now)
        set_loading(false)
        set_success(true)
        setTimeout(()=>{
          set_success(false)
        },2000)
        set_error({});
        set_click(0)
      }
      } catch (err) {
        console.log(err);
      }
    };
    useEffect(() => {
      TrackClicks.current = clicks;
    }, [clicks]);
useEffect(()=>{
  let IntervalID;
  const updateTimeSpam=()=>{
    const last_time=parseInt(localStorage.getItem('last_time')) || 0
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - last_time;
    
    if (!formData.debouncing || timeDifference >= 60000) {
         dispatch(setDebounce(false))
         dispatch(setTime(null))
         localStorage.setItem('debouncing',false)
         localStorage.setItem('last_time',null)
         dispatch(setTimeRemaining(null))
         clearInterval(IntervalID)
         set_click(0)
         set_disabled(false)
         
    } else {
      const remainingSeconds = Math.ceil((60000 - timeDifference) / 1000); 
      if(TrackClicks.current>1){
        dispatch(setTimeRemaining(remainingSeconds))
        set_disabled(true)
      }
      
    }
  }
   IntervalID = setInterval(updateTimeSpam, 1000);
  return () => clearInterval(IntervalID);
  
},[formData.debouncing])

  return (
    <div className="h-full  relative overflow-hidden flex">

    <div
      className="w-1/12 mt-10 min-h-screen "
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "repeat-y", 
        backgroundPosition: "center",
        opacity:0.7,
        
      }}
    ></div>
  

    <div className=" flex flex-col w-3/4 lg:m-8 m-6  mt-10 md:pl-10   "> 
      <h2 className="uppercase mb-5 font-bold text-dark_green flex flex-row items-center text-xl sm:text-xl  md:text-2xl lg:text-3xl    font-raleway">
        Get in touch <span><GoArrowDownRight aria-hidden="true" /></span>
      </h2>
      
      <form onSubmit={sendEmail} onChange={handleChange} ref={form} className="flex mt-2 flex-col justify-center  w-full border-2 border-dark">
  <div className="p-8 flex flex-col gap-10 w-full">
    <div className=' flex-col gap-10 flex md:gap-10 g md:flex-row w-full '>
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
    <div className='md:flex flex flex-col gap-10 md:flex-row md:gap-10'>
   
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
     
      {OnHoverPhone&& <p className="text-gray-500 text-sm mt-2 font-raleway flex flex-row items-center gap-1"><MdOutlineErrorOutline/> Phone number is optional.</p>}
      </div>
      </div>
       <div className='flex-col gap-10 flex md:gap-10 g md:flex-row w-full'>
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
        style={{width:"100%",height:"150px"}}
        className={`${input_variable} resize-none mt-5  `}
      />
      {error.message&&<p className='text-red-800 flex flex-row items-center gap-1 text-sm mt-2 font-raleway'><MdOutlineErrorOutline/>{error.message}</p>}
      </div>
      
      <input type="hidden" name="time" id="time"></input>
       <div className='flex w-full  md:justify-end justify-center  mt-7 text-right '>
    
    <motion.button
    aria-label='Submit-Button' 
    disabled={Disabled}
    initial={{scale:1}}
    whileHover={{opacity:0.8}}
    whileTap={{scale:0.9}}
    className='uppercase text-sm  md:text-sm font-semibold bg-primary text-white font-raleway rounded-full w-full md:w-1/3 py-3'>{
      Loading?(<div className='flex flex-row items-center justify-center gap-3'><p>Sending..</p><ImSpinner8 className='animate-spin'/></div>)
      :Success?
      (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.8,ease:"easeInOut"}} 
        className='flex flex-row justify-center items-center gap-3'>
          <p>Sent</p>
          <MdCheckCircle aria-hidden="true" size={20}/>
        </motion.div>
      )
      :
      <motion.p
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.8,ease:"easeInOut"}} 
      >Send A Message</motion.p>
    
    }</motion.button>

   
  </div>
  {formData.TimeRemaining&&<p className='text-red-800 font-raleway text-sm '>Please wait {formData.TimeRemaining} seconds before trying to submit the form again.</p>}
  </div>
  
 
</form>
<div className='flex gap-5 justify-center md:justify-start sm:justify-center m-5  flex-row'>
<button aria-label='Egypt-Button' onClick={()=>{set_current(1)}}  className={`${current===1?currently_selected:not_selected}`}>Egypt<span className={`${current===1?"bg-white transition-all duration-300 rounded-full p-2 text-black":'bg-dark_green transition-all duration-300 rounded-full text-white p-2'}`}>{current===1?(<RiArrowRightUpLine aria-hidden="true" size={20}/>):<GoArrowDownRight aria-hidden="true" className='font-bold' size={20} />}</span></button>
<button aria-label="UAE-Button" onClick={()=>{set_current(2)}}  className={`${current===2?currently_selected:not_selected}`}>UAE<span className={`${current===2?"bg-white rounded-full p-2 transition-all duration-300 text-black":"bg-dark_green rounded-full transition-all duration-300 text-white p-2"}`}>{current===2?(<RiArrowRightUpLine aria-hidden="true" size={20}/>):<GoArrowDownRight aria-hidden="true" className='font-bold' size={20} />}</span></button>
</div>
{location_data.map((data)=>{
    
    if(data.id===current){
       
        return(
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1,ease:easeInOut}}
            key={current} className='w-full flex flex-col justify-center md:flex-row gap-5'>
                <div className='flex font-raleway flex-col gap-2 rounded-md shadow-md border-2 p-8 w-full md:w-1/3 lg:w-1/3'>
                    <h3><MdOutlinePhone className="text-dark_green " size={30}/></h3>
                    <h4 className="text-dark_navy text-lg font-semibold">Phone</h4>
                    <p className='text-gray-600  text-base lg:text-base '>{data.phone}</p>
                </div>
                <div className='flex font-raleway flex-col gap-2 rounded-md shadow-md  border-2 p-8 w-full md:w-1/3 lg:w-1/3'>
                    <h3><MdOutlineEmail className="text-dark_green " size={30}/></h3>
                    <h4 className="text-dark_navy text-lg font-semibold">Email</h4>
                    <p className='text-gray-600 text-base  lg:text-base break-words'>{data.email}</p>
                </div>
                <div className='flex font-raleway flex-col hover:scale-none bg-dark_green gap-2 rounded-md shadow-md border-2 p-8 w-full md:w-1/3 lg:w-1/3'>
                    <h3><CiLocationOn  className="text-white " size={30}/></h3>
                    <h4 className="text-white font-semibold text-lg">Address</h4>
                    <p className='text-white text-base lg:text-base '>{data.location}</p>
                </div>
            </motion.div>

        )
    }

})}
<Suspense fallback={<p className='flex items-center flex-col justify-center gap-2 text-secondary font-semibold  text-sm md:text-md'><ImSpinner2 className='animate-spin'/>Loading...</p>}>
{current===1 && <EGMAP/>}
{current===2 && <UAEMAP/>}
</Suspense>
    




    </div>
  
   
  </div>
  
  )
}

export default Contact
