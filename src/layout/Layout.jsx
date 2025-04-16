import {useState,useCallback,useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet,useLocation} from 'react-router-dom'
import { service_header } from '../data/services_data';
import aboutImg from "../assets/about_header_img.jpg"

import { PiArrowFatLineUp } from "react-icons/pi";
import {motion} from "motion/react";
const Layout = ({scrollToServices}) => {
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
      loading:location.pathname==="/" || location.pathname==="/contact"? false:true,
      loc:""
    })
    const [cardsCache, setCardsCache] = useState({}); 
    const preloadAllImagesHeader = useCallback(async (input, name) => {
      try {
        setIsImagesLoadedHeader({loading: true, loc: location.pathname});
        const bgCache = {};
        const cardCache = {};
    
        const loadImage = (url, id, cacheType) => 
          new Promise((resolve) => {
            const currentCache = cacheType === 'bg' ? imageCache : cardsCache;
            if (currentCache[id]) {
              resolve();
              return;
            }
    
            const img = new Image();
            img.src = url;
    
            img.onload = () => {
              if (cacheType === 'bg') {
                bgCache[id] = url;
              } else {
                cardCache[id] = url;
              }
              resolve();
            };
    
            img.onerror = () => {
              console.warn(`Failed to load ${cacheType} image: ${url}`);
              resolve();
            };
          });
    
        if (Array.isArray(input)) {
          await Promise.all(input.map(service => 
            Promise.all([
              loadImage(service.background, service.id, 'bg'), // Background images
              loadImage(service.image, service.id, 'card')    // Card images
            ])
          ));
          
          // Update both caches only if we have new images
          if (Object.keys(bgCache).length > 0) {
            setImageCache(prev => ({...prev, ...bgCache}));
          }
          if (Object.keys(cardCache).length > 0) {
            setCardsCache(prev => ({...prev, ...cardCache}));
          }
        } else {
          if (!imageCache[name]) {
            await loadImage(input, name, 'bg');
            setImageCache(prev => ({...prev, ...bgCache}));
          }
        }
    
        if (Object.keys(imageCache).length > 0 && Object.keys(cardsCache).length > 0) {
          setIsImagesLoadedHeader({loc: location.pathname, loading: false});
        }
      } catch (err) {
        console.error("Image preloading failed:", err);
        setIsImagesLoadedHeader({loading: true, loc: location.pathname});
      }
    }, [imageCache, cardsCache, location.pathname]);
    
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
  <Header scrollToServices={scrollToServices} setIsImagesLoaded={setIsImagesLoadedHeader} IsImagesLoaded={IsImagesLoadedHeader} selectedService={selectedService} imageCache={imageCache} cardsCache={cardsCache} setSelectedService={setSelectedService}/>
    <Outlet/>

    <motion.a href='#header' className='fixed z-40 bottom-5 right-5 md:bottom-6 md:right-6 shadow-md rounded-full shadow-black/40'
    initial={{y:0}}
    animate={{y:-5}}
    transition={{repeat: Infinity, repeatType: "reverse", 
    duration:1, ease:'easeInOut'}}>
      <PiArrowFatLineUp size={30} className='bg-dark p-1 text-white rounded-full'/>
    </motion.a>
  <Footer />
    </>
    
    :<p>Loading..</p>}
    
    
  
  </>
  )
}

export default Layout
