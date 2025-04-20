import React from 'react'
import spareImage from "../../assets/vidSpareImg.jpg"
import {useState,useEffect } from 'react'
export default function LazyVideoHeader() {
  const [vid, setVid] = useState(null);
   const [isVideoReady, setIsVideoReady] = useState(false);
 
   useEffect(() => {
     const loadVideo = async () => {
       const video = await import("../../assets/vid2.mp4");
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
}
