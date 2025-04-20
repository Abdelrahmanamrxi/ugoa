import {motion} from "framer-motion"

const backgroundImageCheck=(location,imageCache,isImagesLoadedHeader,selectedService)=>{
    if (location === "/about_us" && !isImagesLoadedHeader.loading)
        return `url(${imageCache["about_img"]})`;
      if (location === "/services" && !isImagesLoadedHeader.loading)
        return `url(${imageCache[selectedService.id]})`;
      return "";
}
const backgroundCheck=(location)=>{
    switch (location) {
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
export {backgroundImageCheck,backgroundCheck,SmoothBackground}