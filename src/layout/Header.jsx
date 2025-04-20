
import Navbar from '../components/Navbar';
import { useLocation, } from 'react-router-dom';
import {motion, AnimatePresence } from "framer-motion";
import { service_header } from '../data/services_data';
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import ServiceHeader from './HeaderFiles/ServiceHeader';
import Loading from '../components/Loading';
import { useSelector } from 'react-redux';
import ContactHeader from './HeaderFiles/ContactHeader';
import AboutHeader from './HeaderFiles/AboutHeader';
import HomeHeader from './HeaderFiles/HomeHeader';
import { backgroundCheck,backgroundImageCheck,SmoothBackground } from '../utility/utility.jsx';
const Header = ({scrollToServices}) => {
const {isImagesLoadedHeader,imageCache,selectedService}=useSelector((state)=>state.Header)
  const location = useLocation();
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
  
  function renderContent() {
    if (location.pathname === "/contact") {
      return (
        <ContactHeader/>
      );
    }
    if (location.pathname === "/about_us" && !isImagesLoadedHeader.loading) {
      return (
       <AboutHeader/>
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
        <HomeHeader/>
      );
    }
  }

  return (
    <div id="header" className="relative w-full">
      {PageHeaderLoad()}
      {location.pathname !== "/services" ? (
        <motion.div
          key="background-image"
          className={`${backgroundCheck(location.pathname)} absolute transition-all duration-300 inset-0 w-full h-full lg:h-[52vh] bg-cover bg-center`}
          style={{
            backgroundImage: backgroundImageCheck(location.pathname,imageCache,isImagesLoadedHeader,selectedService),
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
