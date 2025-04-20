import { useState, useCallback, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { service_header } from '../data/services_data';
import aboutImg from "../assets/vidSpareImg.jpg";
import { useSelector,useDispatch } from 'react-redux';
import { PiArrowFatLineUp } from "react-icons/pi";
import { motion } from "framer-motion";
import Loading from '../components/Loading';
import { preloadAllImagesHeader,setIsImagesLoadedHeader,setSelectedService } from '../store/HeaderSlice';



const Layout = ({ scrollToServices }) => {
  const dispatch=useDispatch()
  const {isImagesLoadedHeader}=useSelector((state)=>state.Header)
  const location=useLocation()
 
  useEffect(() => {
    let isMounted = true;
    if (location.pathname === "/services" && isMounted) {
      dispatch(preloadAllImagesHeader({ input: service_header, name: "service_header", pathname: location.pathname }));
    }
    if (location.pathname === "/about_us" && isMounted) {
      dispatch(preloadAllImagesHeader({ input: aboutImg, name: "about_img", pathname: location.pathname }));
    }
    return () => {
      isMounted = false;
    };
  }, [location.pathname]);

  return (
    <>
      {isImagesLoadedHeader.loading ? (
        <Loading onFinish={() => {dispatch(setIsImagesLoadedHeader({loading:false,location:location.pathname}))}} />
      ) : (
        <>
          <Header
            scrollToServices={scrollToServices}
        
          />
          <Outlet />
          <motion.a
            href="#header"
            className="fixed z-40 bottom-5 right-5 md:bottom-6 md:right-6 shadow-md rounded-full shadow-black/40"
            initial={{ y: 0 }}
            animate={{ y: -5 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              ease: 'easeInOut'
            }}
          >
            <PiArrowFatLineUp size={35} className="bg-dark p-1 text-white rounded-full" />
          </motion.a>
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
