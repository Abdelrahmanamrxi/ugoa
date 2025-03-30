import {useState,useEffect,useMemo,useCallback} from 'react';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import {motion,AnimatePresence} from "motion/react";
import aboutImg from "../assets/about_header_img.jpg";
import { service_header } from '../data/services_data';
import { FaRegArrowAltCircleRight,FaRegArrowAltCircleLeft } from "react-icons/fa"
import ServiceHeader from './HeaderFiles/ServiceHeader';

const Header = () => {
  const[IsImagesLoaded,setIsImagesLoaded]=useState(false)
  const [imageCache,setImageCache]=useState({})
  const location=useLocation()
  const [selectedService, setSelectedService] = useState({
    isSelected: true,
    image: service_header[0].background,
    id: 1,
    title: service_header[0].background_title,
    text: service_header[0].background_text
  });
  const preloadAllImages = useCallback(async (image_array) => {
    try {
      setIsImagesLoaded(false);
      const cache = {};
      
      await Promise.all(image_array.map(service => 
        new Promise(resolve => {
          if (imageCache[service.id]) {
            resolve();
            return;
          }
         
          const img = new Image();
          img.src = service.background;
          
          img.onload = () => {
            cache[service.id] = img.src;
            resolve();
          };
          
          img.onerror = () => {
            console.warn(`Failed to load image: ${service.background}`);
            resolve();
          };
        })
      ));
  
      setImageCache(prev => {
        const newCache = { ...prev, ...cache };
        return Object.keys(cache).length > 0 ? newCache : prev;
      });
      
      setIsImagesLoaded(true);
    } catch(err) {
      console.error("Image preloading failed:", err);
      setIsImagesLoaded(false);
    }
  }, [imageCache]);
  
  useEffect(() => {
    let isMounted = true;
    
    if (location.pathname === "/services" && isMounted) {
      preloadAllImages(service_header);
    }
  
    return () => {
      isMounted = false;
    };
  }, [location.pathname, preloadAllImages]);
  
  
 
  
  const backgroundCheck =useMemo(()=>{
    switch(location.pathname){
      case "/contact":
        return "bg-gradient-primary"
      case "/services":
        return ""
      case "/about_us":
        return ""
    }
  },[location.pathname])
 
  
  const backgroundImageCheck=useMemo(()=>{
     switch(location.pathname){
      case "/about_us":
        return `url(${aboutImg})`
      case "/services":
        return `url(${imageCache[selectedService.id]})`
     }
  },[location.pathname,imageCache,selectedService.id])
  function renderContent(){
    if(location.pathname==="/contact"){
      return(
      <div>
        <motion.div
        className='mt-16 md:ml-8 ml-3   '
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:-40}}
        transition={{duration:1.2 ,ease:"easeInOut"}}>
          <motion.h2 
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{duration:1.8,ease:"easeOut",delay:0.2}}
          className="font-raleway font-bold text-opacity-90 text-offwhite md:text-4xl text-2xl">Contact Us</motion.h2>
          <motion.p
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          duration={{duration:2,ease:"easeOut",delay:1}}
           className='lg:w-1/3 md:w-1/2 mt-5  text-offwhite text-opacity-90 font-raleway text-md md:text-lg '>Read our Global Annual Review, meet our Global Leadership Team, discover our approach to corporate sustainability, our commitment to diversity, inclusion, and more.</motion.p>
        </motion.div>
      </div>
      )
    }
    if(location.pathname==="/about_us"){
      return(
      <div className='h-full flex flex-col justify-center items-center'>
        <motion.div
        className='w-full'
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:-40}}
        transition={{duration:1.2 ,ease:"easeInOut"}}>
          <motion.h2 
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{duration:1.8,ease:"easeOut",delay:0.2}}
          className="font-raleway font-bold text-white text-center md:text-4xl text-2xl">About Us</motion.h2>
          <motion.p
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          duration={{duration:2,ease:"easeOut",delay:1}}
           className='w-full mt-5 text-center font-light text-white font-raleway text-xs  md:text-md '>
            Guiding Your Success Journey Through Expertise and Innovation
          </motion.p>
        </motion.div>
      </div>
      )
    }
    if(location.pathname==="/services"){
      
      return (
        <div>
       <ServiceHeader imageCache={imageCache} IsImagesLoaded={IsImagesLoaded} OnSelectChange={setSelectedService}/>
        </div>

   

      )
    }
  
  }
  const SmoothBackground = ({ image, prevImage, blur }) => (
    <div className="absolute inset-0 w-full h-full">
      {/* Permanent fallback */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${prevImage})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          filter: blur ? "blur(4px)" : "none"
        }}
      />
      
      {/* Animated foreground */}
      <motion.div
        key={image}
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${image})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          filter: blur ? "blur(4px)" : "none"
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
  
  return (
    
    <div className="relative w-full">   
{location.pathname === "/services" && IsImagesLoaded ? (
   <SmoothBackground 
   image={imageCache[selectedService.id]} 
   prevImage={service_header[0].background}
   blur
 />
):(<p>Loading..</p>)}
      {/**UNDER IS THE HEADER OF THE OTHER PAGES */}
        {location.pathname!="/services"?<motion.div
          key="background-image"
        className={`${backgroundCheck} absolute transition-all duration-300 inset-0 w-full h-full lg:h-[52vh] bg-cover bg-center`}
        style={{
          backgroundImage: backgroundImageCheck,
          filter: location.pathname === "/services" ? "blur(4px)" : "",
        }}/>:''}
  
    <div className="text-white z-10  ">
      <Navbar loc={location.pathname} />
      <div className={`${location.pathname==="/services"?"h-screen":'h-[24vh] md:h-[40vh]'}`}>
      {renderContent()}
      </div>
      </div>
  
    
  </div>
  
    
  )
}

export default Header
