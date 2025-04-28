import {useState,useEffect} from 'react';
import {motion,AnimatePresence} from "motion/react";
import { service_header } from '../../data/services_data';
import { FaRegArrowAltCircleRight,FaRegArrowAltCircleLeft } from "react-icons/fa"
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch,useSelector } from 'react-redux';
import { setSelectedService } from '../../store/HeaderSlice';


export default function ServiceHeader({scrollToServices}) {
   const dispatch=useDispatch()
    const {
      cardsCache,
      isImagesLoadedHeader:IsImagesLoaded,
     }=useSelector((state)=>state.Header)
    const [service_index,set_service]=useState(0)
    const [auto_switch]=useState(true)
      
      const[selected,setSelected]=useState({
        isSelected:true,
        image:service_header[0].background,
        id:1,
        title:service_header[0].background_title,
        text:service_header[0].background_text,
      
      })
      let VIS_AMOUNT=3
      const [visible_cards, setVisibleCards] = useState(service_header.slice(0, VIS_AMOUNT));
      const getVisibleCards=(startIndex,amount,list)=>{
        const cards=[]
        for(let i=0;i<amount;i++){
          const index = (startIndex + i) % list.length; // Wrap around
          cards.push(list[index]);
        }    
        return cards
      
      }
      const ChooseCard=(data)=>{
       const {isSelected,image,id,title,text}=data
       let index=id-1
       let new_selected={isSelected,image:cardsCache[data.id],id,title,text}
       setSelected(new_selected)
       dispatch(setSelectedService(new_selected))
       set_service(index)
       const cards=getVisibleCards(index,VIS_AMOUNT,service_header)
       setVisibleCards(cards)
       
      }

      
    const nextCard = () => {
      let newIndex;
      if (service_index < service_header.length - 1) {
        newIndex = service_index + 1;
      } else {
        newIndex = 0;
      }
      
      set_service(newIndex);
      const cards = getVisibleCards(newIndex, VIS_AMOUNT, service_header);
      setVisibleCards(cards);
      
      // Update selected card when wrapping around
      const newSelected = {
        isSelected: true,
        image: cardsCache[service_header[newIndex].id] || service_header[newIndex].background,
        id: service_header[newIndex].id,
        title: service_header[newIndex].background_title,
        text: service_header[newIndex].background_text
      };
      
      setSelected(newSelected);
      dispatch(setSelectedService(newSelected))
  }
    const prevCard = () => {
      let newIndex;
      if (service_index > 0) {
        newIndex = service_index - 1;
      } else {
        newIndex = service_header.length - 1;
      }
      
      set_service(newIndex);
      const cards = getVisibleCards(newIndex, VIS_AMOUNT, service_header);
      setVisibleCards(cards);
      
      const newSelected = {
        isSelected: true,
        image: cardsCache[service_header[newIndex].id] || service_header[newIndex].background,
        id: service_header[newIndex].id,
        title: service_header[newIndex].background_title,
        text: service_header[newIndex].background_text
      };
      
      setSelected(newSelected);
      dispatch(setSelectedService(newSelected));
    
    }
    useEffect(()=>{
       let interval;
       if(auto_switch){
        interval=setInterval(()=>{
            nextCard()
        },5000)
        }
        return ()=>clearInterval(interval)
    },[auto_switch,service_index])
    
     useEffect(()=>{
      if (cardsCache[service_index]) {
        const new_selected = {
            isSelected: true,
            image: cardsCache[service_index],
            id: service_header[service_index].id,
            title: service_header[service_index].background_title,
            text: service_header[service_index].background_text
          };
      setSelected(new_selected)
      dispatch(setSelectedService(new_selected))
      
     }},[service_index,cardsCache])

    

   return (
         <div 
         
         className='flex flex-row items-center justify-between xl:m-8 lg:m-4'>
  
   <div className="relative hidden  z-10 xl:w-1/4 lg:w-1/3    lg:ml-8 lg:flex flex-col gap-6 text-white max-w-lg">
   
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
         className="lg:text-4xl xl:text-5xl font-raleway  font-bold absolute w-full will-change-transform"
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
        <button onClick={scrollToServices} aria-label='Explore' className="bg-dark_green font-semibold font-raleway hover:bg-opacity-80 px-5 py-2">
          Explore
        </button>
      </motion.div>
    </AnimatePresence>
  </div>
  <div className="    hidden lg:flex items-center gap-4">
    <FaRegArrowAltCircleLeft 
      onClick={prevCard} 
      size={35} 
      className={`text-white cursor-pointer `}  
    />
    <FaRegArrowAltCircleRight 
      onClick={nextCard} 
      size={35} 
      className={`text-white cursor-pointer `} 
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
     
     <motion.div className="relative  flex flex-row gap-6"
     initial={{opacity:0,translateX:-20}}
       animate={{
       translateX:0,
       opacity:1
      }}
      transition={{
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        duration:1,
        ease: [0.33, 1, 0.68, 1]
      }}
     
     >
    <AnimatePresence>
  {visible_cards.map((card, index) => {
    const isSelected = selected.id === card.id;
   
    
    // Only apply x movement to selected card
    const targetX = isSelected ? -40 : 0;
    
    // Remove marginRight animation that was causing jumps
    return (
      <motion.div
        key={card.id}
        onClick={() => {
          ChooseCard({
            isSelected: true,
            image: card.background,
            id: card.id,
            title: card.background_title,
            text: card.background_text
          });
        }}
        className={`relative xl:w-48 xl:h-52 w-36 h-38 min-h-32 bg-white rounded-lg ${
          isSelected ? 'opacity-100 z-10' : 'opacity-50 z-0'
        } shadow-lg cursor-pointer overflow-hidden`}
        initial={{ scale: 1, x: 0, opacity: 0 }}
        animate={{
          scale: isSelected ? 1.2 : 1,
          y: isSelected ? -20 : 0,
          opacity: isSelected ? 1 : 0.8,
          height: isSelected ? "20rem" : "16rem",
          zIndex: isSelected ? 10 : 1,
          x: targetX
        }}
        exit={{
          opacity: 0,
          x: 60,
          scale: 0.8,
          transition: { duration: 0.6 }
        }}
        transition={{
          duration: 0.7, // Faster transition
          ease: [0.2, 0, 0, 1] // Smoother easing
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        layout="position" // Only animate position, not size
      >
        {/* Card Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${card.image})` }}
        />
        
        {/* Card Content */}
        <motion.div className="absolute bottom-0 w-full p-4 text-white">
          <h3 className="text-xl font-raleway font-bold">{card.title}</h3>
        </motion.div>
      </motion.div>
    );
  })}
</AnimatePresence>
     </motion.div>
    
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
        
          <button 
            aria-label='prevCard'
            onClick={prevCard}
            className="p-2"
          >
            <MdKeyboardArrowLeft size={36} />
          </button>
        
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
            className="text-2xl sm:text-3xl font-raleway font-bold text-center line-clamp-2"
          >
            {selected.title}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Right arrow - maintain space even when hidden */}
      <div className="w-10 h-10 flex items-center justify-center">
        
          <button 
            aria-label='nextCard'
            onClick={nextCard}
            className="p-2"
          >
            <MdKeyboardArrowRight size={36} />
          </button>
        
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
          className="text-xl sm:text-2xl text-center font-raleway leading-normal "
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
          <button onClick={scrollToServices} aria-label="scrollToServices" className="bg-dark_green font-raleway font-medium px-5 py-2 rounded-md min-w-[120px]">
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
