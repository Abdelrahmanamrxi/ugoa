
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
        <>
        <title>UGOA-Contact</title>
        <meta name="description" content="Contact us for strategic support, partnerships, and sustainability solutions. Reach out via phone, email, or visit us in Egypt or UAE for more details."/>
        <link rel='canonical' href='https://ugoa.me/contact'/>
        <ContactHeader/>
        </>
      );
    }
    if (location.pathname === "/about_us" && !isImagesLoadedHeader.loading) {
      return (
        <>
        <title>UGOA-About us</title>
        <meta name="description" content="UGOA offers end-to-end recycling consultancy—facility design, supply chain optimization & ESG compliance—helping businesses build profitable, sustainable operations." />
        <link rel="canonical" href="https://ugoa.me/about_us" />
       <AboutHeader/>
       </>
      );
    }
    if (location.pathname === "/services" && !isImagesLoadedHeader.loading) {
      return (
        <div>
          <title>UGOA-Services</title>
          <meta name="description" content="Discover our range of services designed to meet your needs. From new projects to existing ones, we offer tailored solutions for every stage." />
          <link rel="canonical" href="https://ugoa.me/services" />
          <ServiceHeader
            scrollToServices={scrollToServices}   
          />
        </div>
      );
    }
    if (location.pathname === "/" && !isImagesLoadedHeader.loading) {
      return (
        <>
        <title>UGOA</title>
        <meta name="description" content="UGOA Consultation drives recycling growth with expert guidance, market insights & sustainable solutions. We empower recyclers & investors to build efficient operations." />
        <link rel="canonical" href="https://ugoa.me/" />
        <HomeHeader/>
        </>
      );
    }
  }

  return (
    <div id="header" className="relative w-full overflow-hidden">
      {PageHeaderLoad()}
      {location.pathname !== "/services" ? (
        <motion.div
          key="background-image"
          className={`${backgroundCheck(location.pathname)} absolute transition-all duration-300 inset-0 w-full h-full  bg-cover bg-center`}
          style={{
            backgroundImage: backgroundImageCheck(location.pathname,imageCache,isImagesLoadedHeader,selectedService),
            filter: location.pathname === "/services" ? "blur(4px)" : "",
          }}
        />
      ) : (
        ""
      )}

      {isImagesLoadedHeader.loading === false ? (
        <div className="text-white h-full relative ">
          <Navbar loc={location.pathname} />
          <div
            className={`${
              location.pathname === "/services" ? "h-screen" : "mt-14 "
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
