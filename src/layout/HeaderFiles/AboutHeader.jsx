import {useState,useEffect} from 'react'
import {motion,AnimatePresence} from 'framer-motion'

export default function AboutHeader() {
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
  return (
    <div className="h-full flex flex-col justify-center items-center">
          <motion.div
            className="w-full px-6 md:px-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: -40 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
              className="font-raleway uppercase font-bold text-white text-left lg:text-4xl text-2xl"
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
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }}
              className="w-full mt-5 text-left font-light text-white font-raleway text-base lg:text-lg"
            >
              Guiding Your Success Journey Through Expertise and Innovation
            </motion.p>
          </motion.div>
        </div>
  )
}
