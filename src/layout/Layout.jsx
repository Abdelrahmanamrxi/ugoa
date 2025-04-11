import {useState,useCallback,useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet,useLocation} from 'react-router-dom'
import { service_header } from '../data/services_data';
import aboutImg from "../assets/about_header_img.jpg"
import { PiArrowFatLineUp } from "react-icons/pi";
import {motion} from "motion/react";
const Layout = () => {
  const [imageCache,setImageCache]=useState({})
  const [selectedService, setSelectedService] = useState({
    isSelected: true,
    image: service_header[0].background,
    id: 1,
    title: service_header[0].background_title,
    text: service_header[0].background_text
  });
  const location=useLocation()
   const[IsImagesLoadedHeader,setIsImagesLoadedHeader]=useState({
      loading:location.pathname==="/"? false:true,
      loc:""
    })
    const[IsImagesLoadedFooter,setIsImagesLoadedFooter]=useState(false)
  
    const preloadAllImagesHeader = useCallback(async (input,name) => {
      try {
        setIsImagesLoadedHeader({loading:true , loc:location.pathname});
        const cache = {};
        const loadImage = (service) =>
          new Promise((resolve) => {
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
            
          });
    
        if (Array.isArray(input)) {
          await Promise.all(input.map(service => loadImage(service)));
          setImageCache((prev) => {
            const newCache = { ...prev, ...cache };
            return Object.keys(cache).length > 0 ? newCache : prev;
          });
        } else {
          if(!imageCache[name]){
          await new Promise((resolve) => {
            const img = new Image();
            img.src = input;
    
            img.onload = () => {
              cache[name] = img.src;
              resolve();
            };
    
            img.onerror = () => {
              console.warn(`Failed to load image: ${input.background}`);
              resolve();
            };
          
          });
          setImageCache((prev) => {
            const newCache = { ...prev, ...cache };
            return Object.keys(cache).length > 0 ? newCache : prev;
          });
        }
        }
    
      
        if(Object.keys(imageCache).length>0){
          setIsImagesLoadedHeader({loc:location.pathname,loading:false});
        }
      } catch (err) {
        console.error("Image preloading failed:", err);
        setIsImagesLoadedHeader({loading:true,loc:location.pathname});
      }
    }, [imageCache,location.pathname]);
    
      useEffect(() => {
        let isMounted = true;
        if (location.pathname === "/services" && isMounted) {
          preloadAllImagesHeader(service_header);
        }
        if(location.pathname==="/about_us" && isMounted){
          preloadAllImagesHeader(aboutImg,"about_img")
        }
      
        return () => {
          isMounted = false;
        };
      }, [location.pathname, preloadAllImagesHeader]);
      
      
  
  return(
    <>
  {IsImagesLoadedHeader.loading===false ?
  <>
  <Header setIsImagesLoaded={setIsImagesLoadedHeader} IsImagesLoaded={IsImagesLoadedHeader} selectedService={selectedService} imageCache={imageCache} setSelectedService={setSelectedService}/>
    <Outlet/>

    <motion.a href='#header' className='fixed z-40 bottom-3 right-4 md:bottom-6 md:right-6 shadow-md rounded-full shadow-black/40'
    initial={{y:0}}
    animate={{y:-5}}
    transition={{repeat: Infinity, repeatType: "reverse", 
    duration:1, ease:'easeInOut'}}>
      <PiArrowFatLineUp size={30} className='bg-dark p-1 text-white rounded-full'/>
    </motion.a>
  <Footer IsImagesLoaded={IsImagesLoadedFooter} setIsImagesLoaded={setIsImagesLoadedHeader}/>
    </>
    :<p>Loading..</p>}
    
    
  
  </>
  )
}

export default Layout
