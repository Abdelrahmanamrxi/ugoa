import {useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {motion,AnimatePresence} from "motion/react";
import { service_header } from '../../data/services_data';
import { FaRegArrowAltCircleRight,FaRegArrowAltCircleLeft } from "react-icons/fa"
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md";


export default function ServiceHeader({imageCache,setIsImagesLoaded ,OnSelectChange}) {
    const [service_index,set_service]=useState(0)
    const [auto_switch,set_switch]=useState(true)
     
      const[selected,setSelected]=useState({
        isSelected:true,
        image:service_header[0].background,
        id:1,
        title:service_header[0].background_title,
        text:service_header[0].background_text
      })
      let VIS_AMOUNT=3
      const [visible_cards, setVisibleCards] = useState(service_header.slice(0, VIS_AMOUNT));
     
      const ChooseCard=(data)=>{
       const {isSelected,image,id,title,text}=data
       let index=id-1
       let new_selected={isSelected,image:imageCache[data.id],id,title,text}
       setSelected(new_selected)
       OnSelectChange(new_selected)
       set_service(index)
       
       if (index + VIS_AMOUNT > service_header.length) {
        setVisibleCards(service_header.slice(service_header.length - VIS_AMOUNT));
      } else if (index > visible_cards[visible_cards.length - 1]?.id) {
        setVisibleCards(service_header.slice(index, index + VIS_AMOUNT));
      }
      else if(index<visible_cards[0]?.id){
        setVisibleCards(service_header.slice(0,VIS_AMOUNT));
      }
      
      }

      
    const nextCard = () => {
      if (service_index < service_header.length - 1) {
        const newIndex = service_index + 1;
        set_service(newIndex)
        if (newIndex + VIS_AMOUNT > service_header.length) {
          setVisibleCards(service_header.slice(service_header.length - VIS_AMOUNT));
        } else if (newIndex > visible_cards[visible_cards.length - 1]?.id) {
          setVisibleCards(service_header.slice(newIndex, newIndex + VIS_AMOUNT));
        }
        else if (newIndex < visible_cards[0]?.id) {
          setVisibleCards(service_header.slice(0, VIS_AMOUNT));
        }  
      
      }
    
    };
    
    
    const prevCard = () => {
      if (service_index > 0) {
        const newIndex = service_index - 1;
        set_service(newIndex);
        if (newIndex < visible_cards[0]?.id) {
          setVisibleCards(service_header.slice(0, VIS_AMOUNT));
        }  if (newIndex < visible_cards[0]?.id) {
          setVisibleCards(service_header.slice(newIndex, newIndex + VIS_AMOUNT));
        }
      }
    }
    useEffect(()=>{
       let interval;
       if(auto_switch){
        interval=setInterval(()=>{
            nextCard()

        },5000)
        }
        if(auto_switch && service_index+1===service_header.length){
           interval=setInterval(()=>{
            set_service(0)
            setVisibleCards(service_header.slice(0,VIS_AMOUNT))
           },5000)
        }
        return ()=>clearInterval(interval)
    },[auto_switch,service_index])
    
     useEffect(()=>{
      if (imageCache[service_header[service_index]?.id]) {
        const new_selected = {
            isSelected: true,
            image: imageCache[service_header[service_index]?.id],
            id: service_header[service_index].id,
            title: service_header[service_index].background_title,
            text: service_header[service_index].background_text
          };
      setSelected(new_selected)
      OnSelectChange(new_selected)
      
     }},[service_index,imageCache])


   return (
         <div 
         className='flex flex-row items-center   justify-between xl:m-8 lg:m-4'>
  
   <div className="relative hidden z-10 xl:w-1/4 lg:w-1/3    lg:ml-8 lg:flex flex-col gap-6 text-white max-w-lg">
   
   <div className="relative h-24 overflow-hidden">
     <AnimatePresence mode="wait">
       <motion.h1
         key={selected.id + "-title"}
         initial={{ y: 60 }}
         animate={{ 
           y: 0,
           transition: { 
             duration: 0.8,
             ease: [0.33, 1, 0.68, 1]
           }
         }}
         exit={{ 
           y: -80,
           transition: { 
             duration: 0.5,
             ease: [0.32, 0, 0.67, 0]
           } 
         }}
         className="text-5xl font-raleway  font-bold absolute w-full will-change-transform"
       >
         {selected.title}
       </motion.h1>
     </AnimatePresence>
   </div>
 
   {/* Text - Fast replacement */}
   <div className="relative min-h-[120px]  overflow-hidden">
   <AnimatePresence mode="wait">
   <motion.p
     key={selected.id + "-text"}
     initial={{ y: 50 }} // Starts below view
     animate={{ 
       y: 0, 
       transition: {
         duration: 0.4,
         ease: "easeOut"
       }
     }}
     exit={{ 
       y: -100, 
       transition: { 
         duration: 0.4, 
         ease: "easeIn" 
       }
     }}
     className="leading-wide lg:text-lg font-raleway xl:text-2xl md:text-md  w-full"
   >
     {selected.text}
   </motion.p>
 </AnimatePresence>
   </div>
 
   <div className='relative w-full h-16 overflow-hidden flex items-center gap-4'>
  {/* Button - takes available space */}
  <div className="flex-1">
    <AnimatePresence mode="wait">
      <motion.div
        key={selected.id + "-button"}
        initial={{ y: 30, opacity: 0 }}
        animate={{ 
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
            ease: [0.33, 1, 0.68, 1],
            delay: 0.1
          }
        }}
        exit={{ 
          y: -40,
          opacity: 0,
          transition: { 
            duration: 0.2,
            ease: "easeIn"
          }
        }}
        className="will-change-transform"
      >
        <button className="bg-dark_green font-semibold font-raleway hover:bg-opacity-80 px-5 py-2">
          Explore
        </button>
      </motion.div>
    </AnimatePresence>
  </div>
  <div className="    hidden lg:flex items-center gap-4">
    <FaRegArrowAltCircleLeft 
      onClick={prevCard} 
      size={35} 
      className={`text-white cursor-pointer ${service_index <= 0 ? "hidden" : ""}`}  
    />
    <FaRegArrowAltCircleRight 
      onClick={nextCard} 
      size={35} 
      className={`text-white cursor-pointer ${service_index === service_header.length-1 ? "hidden" : ""}`} 
    />
  </div>
  
 
</div>

 </div>

 
   <div className="relative hidden lg:flex flex-col justify-center items-center mr-8 md:h-screen">
   
     <motion.div
       className="absolute inset-0 bg-cover bg-center backdrop-blur-lg transition-all duration-500"
       style={{
         backgroundImage: selected.id !== null ? `url(${service_header.image})` : "none",
         opacity: selected.id !== null ? 1 : 0.5,
         zIndex: -1
       }}
     />
 
 
     {/* CARD CONTAINER */}
     
     
     <div className="relative  flex flex-row gap-6">
       {visible_cards.map((card) => (
         <motion.div
          
           key={card.id}
           onClick={() => ChooseCard( {isSelected: true, image: card.background, id: card.id, title: card.background_title, text: card.background_text }) }
          
           className="relative xl:w-48 xl:h-52 w-40 h-42 min-h-32  bg-white rounded-lg shadow-lg cursor-pointer overflow-hidden"
           initial={{ scale: 1 }}
           animate={{
             scale: selected.id === card.id ? 1.1 : 1,
             y: selected.id === card.id ? -20 : 0,
             opacity: selected.id === card.id ? 1 : 0.8,
             height: selected.id === card.id ? "20rem" : "16rem",
             zIndex: selected.id === card.id ? 10 : 1,
           }}
           
           transition={{ duration: 0.5 }}
         >
           {/* Card Background Image */}
           <motion.div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${card.image})` }} />
 
           {/* Card Content */}
           <motion.div className="absolute bottom-0 w-full p-4 text-white">
             <h3 className="text-xl  font-raleway font-bold">{card.title}</h3>
             <p className="text-sm font-raleway ">{card.text}</p>
           </motion.div>
         </motion.div>
       ))}
     </div>
 
     {/* Arrow Below Cards */}
     
 
   </div>
{/**MOBILE */}
<div className="relative lg:hidden flex flex-col items-center justify-center text-white h-screen px-4 sm:px-8">
  {/* Background Image */}
  <motion.div
    className="absolute inset-0 bg-cover bg-center bg-fixed"
    style={{
      backgroundImage: `url(${selected.image || service_header[0].background})`,
      zIndex: -1,
    }}
    key={`bg-${selected.id}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  />

  {/* Content Container */}
  <div className="relative w-full mx-auto">
    {/* Title Section - Fixed Height with consistent spacing */}
    <div className="relative flex items-center justify-between h-20 mb-4">
      {/* Left arrow - maintain space even when hidden */}
      <div className="w-10 h-10 flex items-center justify-center">
        {service_index > 0 && (
          <button 
            onClick={prevCard}
            className="p-2"
          >
            <MdKeyboardArrowLeft size={36} />
          </button>
        )}
      </div>

      {/* Title - centered with flex-1 */}
      <div className="flex-1 min-w-0 px-2 h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={selected.id + "-title"}
            initial={{ y: 40, opacity: 0 }}
            animate={{ 
              y: 0, 
              opacity: 1,
              transition: { duration: 0.4 }
            }}
            exit={{ 
              y: -40, 
              opacity: 0,
              transition: { duration: 0.3 }
            }}
            className="text-xl sm:text-2xl font-raleway font-bold text-center line-clamp-2"
          >
            {selected.title}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Right arrow - maintain space even when hidden */}
      <div className="w-10 h-10 flex items-center justify-center">
        {service_index < service_header.length - 1 && (
          <button 
            onClick={nextCard}
            className="p-2"
          >
            <MdKeyboardArrowRight size={36} />
          </button>
        )}
      </div>
    </div>

    {/* Description Section - Flexible Height */}
    <div className="relative min-h-[120px] w-full mb-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.id + "-text"}
          initial={{ y: 30, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.3 }
          }}
          exit={{ 
            y: -30, 
            opacity: 0,
            transition: { duration: 0.2 }
          }}
          className="text-lg sm:text-base font-raleway leading-normal text-center"
        >
          {selected.text}
        </motion.div>
      </AnimatePresence>
    </div>

    {/* Button Section - Fixed Position */}
    <div className="relative h-16 flex justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.id + "-button"}
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1,
            transition: { delay: 0.1 }
          }}
          exit={{ 
            y: -20, 
            opacity: 0 
          }}
        >
          <button className="bg-dark_green font-raleway font-medium px-5 py-2 rounded-md min-w-[120px]">
            Explore
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
</div>

   
 </div>
 
    
 
       )
}
