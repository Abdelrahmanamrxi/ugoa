import React, { useState, useEffect, useMemo } from 'react';
import Navbar from '../components/Navbar';
import { useLocation, } from 'react-router-dom';
import { easeIn, motion, AnimatePresence } from "framer-motion";
import aboutImg from "../assets/about_header_img2.jpg";
import { service_header } from '../data/services_data';
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import ServiceHeader from './HeaderFiles/ServiceHeader';
import spareImage from "../assets/vidSpareImg.jpg";
import Loading from '../components/Loading';
import { useSelector,useDispatch } from 'react-redux';

const LazyVideoHeader = () => {
  const [vid, setVid] = useState(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const loadVideo = async () => {
      const video = await import("../assets/vid2.mp4");
      setVid(video.default);
    };

    loadVideo();
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      {/* Show spare image until video is ready */}
      {!isVideoReady && (
        <img
          src={spareImage}
          className="absolute top-0 left-0 w-full h-full object-cover -z-20"
          alt="Fallback"
        />
      )}

      {/* Video with readiness check */}
      {vid && (
        <video
          src={vid}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-30"
          onCanPlayThrough={() => setIsVideoReady(true)}
        />
      )}

      {/* Header text */}
    </div> 
  );
};

const Header = ({
  scrollToServices,
}) => {
  const {isImagesLoadedHeader,imageCache,selectedService}=useSelector((state)=>state.Header)

const aboutHeaderWords = ["Sustainability", "Innovation", "Recycling"];
const [aboutWord, setAboutWord] = useState(aboutHeaderWords[0]);

useEffect(() => {
  const interval = setInterval(() => {
    setAboutWord(prev => {
      const currentIndex = aboutHeaderWords.indexOf(prev);
      const nextIndex = (currentIndex + 1) % aboutHeaderWords.length;
      return aboutHeaderWords[nextIndex];
    });
  }, 2000); // change word every 2 seconds

  return () => clearInterval(interval); // cleanup
}, [aboutWord]);
  const location = useLocation();
  let loading=isImagesLoadedHeader.loading
 

  const PageHeaderLoad = () => {
    if (location.pathname === "/services" && !isImagesLoadedHeader.loading) {
      
      return (
        <SmoothBackground
          image={imageCache[selectedService.id]}
          prevImage={service_header[0].background}
          blur
        />
      );
    }
  };

  const backgroundCheck = useMemo(() => {
    switch (location.pathname) {
      case "/":
        return "";
      case "/contact":
        return "bg-gradient-primary";
      case "/services":
        return "";
      case "/about_us":
        return "";
      default:
        return "";
    }
  }, [location.pathname]);

  const backgroundImageCheck = useMemo(() => {
    if (location.pathname === "/about_us" && !isImagesLoadedHeader.loading)
      return `url(${imageCache["about_img"]})`;
    if (location.pathname === "/services" && !isImagesLoadedHeader.loading)
      return `url(${imageCache[selectedService.id]})`;
    return "";
  }, [location.pathname, imageCache,loading]);

  function renderContent() {
    if (location.pathname === "/contact") {
      return (
        <div>
          <motion.div
            className="mt-16 md:ml-8 ml-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: -40 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
              className="font-raleway font-bold text-opacity-90 text-offwhite md:text-4xl text-2xl"
            >
              Contact Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut", delay: 1 }}
              className="lg:w-1/3 md:w-1/2 mt-5 text-offwhite text-opacity-90 font-raleway text-md md:text-lg"
            >
              Read our Global Annual Review, meet our Global Leadership Team, discover our approach to corporate sustainability, our commitment to diversity, inclusion, and more.
            </motion.p>
          </motion.div>
        </div>
      );
    }
    if (location.pathname === "/about_us" && !isImagesLoadedHeader.loading) {
      return (
        <div className="h-full flex flex-col justify-center items-center">
          <motion.div
            className="w-full px-6 md:px-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: -40 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
              className="font-raleway uppercase font-bold text-white text-left md:text-4xl text-2xl"
            >
              UGOA
                <AnimatePresence mode="wait">
                  <motion.span
                    key={aboutWord} // Important for triggering remount
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut", delay:0.3 }}
                    className="text-primary inline-block ml-4"
                  >
                    {aboutWord}
                  </motion.span>
              </AnimatePresence> 
              <h2>experience</h2>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }}
              className="w-full mt-5 text-left font-light text-white font-raleway text-sm md:text-lg"
            >
              Guiding Your Success Journey Through Expertise and Innovation
            </motion.p>
          </motion.div>
        </div>
      );
    }
    if (location.pathname === "/services" && !isImagesLoadedHeader.loading) {
      return (
        <div>
          <ServiceHeader
            scrollToServices={scrollToServices}   
          />
        </div>
      );
    }
    if (location.pathname === "/" && !isImagesLoadedHeader.loading) {
      return (
        <div className="w-full h-screen overflow-hidden">
          <LazyVideoHeader />
          <motion.div 
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 2, ease: "easeInOut"}}
          className='flex flex-col px-6 w-full gap-4 md:gap-6 justify-center font-raleway items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
            <h1 className="font-bold text-xl w-full md:text-3xl text-center">
                First-Class Business Consultant
            </h1>
            <p className='text-center font-light text-xs md:text-sm w-4/5 md:w-1/4'>
              We know how large objects will act, but things on a small scale just do not act that way.
            </p>
            <div className='flex gap-4 h-auto mt-2 py-2'>
              <motion.button 
              initial={{scale:1}}
              whileHover={{scale:1.1}}
              whileTap={{scale:0.9}}
              transition={{duration:0.3, ease:"easeInOut"}}
              className='bg-primary rounded-full px-2 py-1 text-xs md:text-sm md:px-4 md:py-2 hover:bg-white hover:text-primary'>
                Get Consult Now
              </motion.button>
              <motion.button 
              initial={{scale:1}}
              whileHover={{scale:1.1}}
              whileTap={{scale:0.9}}
              transition={{duration:0.3, ease:"easeInOut"}}
              className='border-primary px-2 py-1 text-xs md:text-sm hover:text-primary hover:border-transparent hover:bg-white border-2 rounded-full md:px-4 md:py-2'>
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      );
    }
  }

  const SmoothBackground = ({ image, prevImage, blur }) => (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${prevImage})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          filter: blur ? "blur(4px)" : "none",
        }}
      />
      <motion.div
        key={image}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          filter: blur ? "blur(4px)" : "none",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );

  return (
    <div id="header" className="relative w-full">
      {PageHeaderLoad()}
      {location.pathname !== "/services" ? (
        <motion.div
          key="background-image"
          className={`${backgroundCheck} absolute transition-all duration-300 inset-0 w-full h-full lg:h-[52vh] bg-cover bg-center`}
          style={{
            backgroundImage: backgroundImageCheck,
            filter: location.pathname === "/services" ? "blur(4px)" : "",
          }}
        />
      ) : (
        ""
      )}

      {isImagesLoadedHeader.loading === false ? (
        <div className="text-white z-10">
          <Navbar loc={location.pathname} />
          <div
            className={`${
              location.pathname === "/services" ? "h-screen" : "h-[40vh] md:h-[50vh]"
            }`}
          >
            {renderContent()}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
