import { useState, useCallback, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { service_header } from '../data/services_data';
import aboutImg from "../assets/about_header_img.jpg";

import { PiArrowFatLineUp } from "react-icons/pi";
import { motion } from "framer-motion";
import Loading from '../components/Loading';

const Layout = ({ scrollToServices }) => {
  const [imageCache, setImageCache] = useState({});
  const [selectedService, setSelectedService] = useState({
    isSelected: true,
    image: service_header[0].background,
    id: 1,
    title: service_header[0].background_title,
    text: service_header[0].background_text
  });

  const location = useLocation();
  const [IsImagesLoadedHeader, setIsImagesLoadedHeader] = useState({
    loading: location.pathname === "/" || location.pathname === "/contact" ? false : true,
    loc: ""
  });

  const [cardsCache, setCardsCache] = useState({});

  const preloadAllImagesHeader = useCallback(async (input, name) => {
    try {
      setIsImagesLoadedHeader({ loading: true, loc: location.pathname });

      if (Array.isArray(input)) {
        const bgCache = {};
        const cardCache = {};

        await Promise.all(input.map(service =>
          Promise.all([
            new Promise(resolve => {
              if (imageCache[service.id]) {
                resolve();
                return;
              }
              const img = new Image();
              img.src = service.background;
              img.onload = () => {
                bgCache[service.id] = service.background;
                resolve();
              };
              img.onerror = () => {
                console.warn(`Failed to load bg image: ${service.background}`);
                resolve();
              };
            }),
            new Promise(resolve => {
              if (cardsCache[service.id]) {
                resolve();
                return;
              }
              const img = new Image();
              img.src = service.image;
              img.onload = () => {
                cardCache[service.id] = service.image;
                resolve();
              };
              img.onerror = () => {
                console.warn(`Failed to load card image: ${service.image}`);
                resolve();
              };
            })
          ])
        ));

        if (Object.keys(bgCache).length > 0) {
          setImageCache(prev => ({ ...prev, ...bgCache }));
        }
        if (Object.keys(cardCache).length > 0) {
          setCardsCache(prev => ({ ...prev, ...cardCache }));
        }

        setIsImagesLoadedHeader({
          loc: location.pathname,
          loading: false
        });
      } else {
        if (!imageCache[name]) {
          await new Promise(resolve => {
            const img = new Image();
            img.src = input;
            img.onload = () => {
              setImageCache(prev => ({ ...prev, [name]: input }));
              resolve();
            };
            img.onerror = () => {
              console.warn(`Failed to load image: ${input}`);
              resolve();
            };
          });
        }

        setIsImagesLoadedHeader({
          loc: location.pathname,
          loading: false
        });
      }
    } catch (err) {
      console.error("Image preloading failed:", err);
      setIsImagesLoadedHeader({ loading: false, loc: location.pathname });
    }
  }, [imageCache, cardsCache, location.pathname]);

  useEffect(() => {
    let isMounted = true;
    if (location.pathname === "/services" && isMounted) {
      preloadAllImagesHeader(service_header);
    }
    if (location.pathname === "/about_us" && isMounted) {
      preloadAllImagesHeader(aboutImg, "about_img");
    }
    return () => {
      isMounted = false;
    };
  }, [location.pathname, preloadAllImagesHeader]);

  return (
    <>
      {IsImagesLoadedHeader.loading ? (
        <Loading onFinish={() => setIsImagesLoadedHeader(prev => ({ ...prev, loading: false }))} />
      ) : (
        <>
          <Header
            scrollToServices={scrollToServices}
            setIsImagesLoaded={setIsImagesLoadedHeader}
            IsImagesLoaded={IsImagesLoadedHeader}
            selectedService={selectedService}
            imageCache={imageCache}
            cardsCache={cardsCache}
            setSelectedService={setSelectedService}
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
