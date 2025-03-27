import React, { memo, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { IoMail, IoMailOutline, IoArrowDownSharp } from "react-icons/io5";
import { MdArrowUpward } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import whiteLogo from "../assets/Vertical_White_Comp_2.png";

function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_4d3bt0l"; // Your EmailJS service ID
    const templateID = "template_gmfru5h"; // Replace with your EmailJS template ID
    const publicKey = "yYI_SrlAbAIO3BQdH"; // Replace with your EmailJS public key

    const templateParams = {
      user_email: email,
      message: `Dear UGOA Team,

I hope this email finds you well. I am reaching out to explore potential collaboration opportunities and discuss how your expertise in business consulting can align with our goals.

Please let me know a suitable time for a discussion.

Looking forward to your response.

Best regards,  
${email}`,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);     
      })
      .catch((error) => {
        console.error("Failed to send email", error);
      })
      .finally(() => setLoading(false));

    setEmail(""); // Clear the input field
  };

  return (
    <footer className="w-full mt-24 grid grid-cols-1 divide-y items-start justify-center gap-4 bg-secondary px-4 py-2
      xl:grid-cols-3 xl:gap-12 xl:px-12 xl:py-10 xl:divide-x xl:divide-y-0
      lg:grid-cols-3 lg:gap-10 lg:px-10 lg:py-8 lg:divide-x lg:divide-y-0
      md:grid-cols-3 md:gap-8 md:px-8 md:py-6 md:divide-x md:divide-y-0
      sm:grid-cols-1 sm:gap-6 sm:px-6 sm:py-4 sm:divide-y">
      
      {/* === SECTION 1: LOGO === */}
      <div className="flex justify-center">
        <img src={whiteLogo} alt="Company Logo" className="min-w-xs object-cover xl:max-w-xl lg:max-w-lg md:max-w-md sm:max-w-sm" />
      </div>

      {/* === SECTION 2: CONTACT INFO === */}
      <div className="w-full h-full flex flex-col justify-center gap-2 px-2 py-3
        xl:justify-start xl:gap-8 xl:items-start xl:px-10 xl:py-9
        lg:justify-start lg:gap-8 lg:items-start lg:px-8 lg:py-9
        md:justify-start md:gap-6 md:items-start md:px-6 md:py-9
        sm:justify-start sm:items-start sm:px-4 sm:py-6">

        <div className="flex w-full gap-3 items-center">
          <IoArrowDownSharp size={25} className="text-white -rotate-45" />
          <h3 className="uppercase w-full text-white font-semibold text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl">
            Contact Us Today
          </h3>
        </div>

        <div className="flex flex-col gap-2 xl:gap-10 lg:gap-8 md:gap-6 sm:gap-4">
          <p className="text-white text-sm font-light w-3/4 sm:text-md md:text-md lg:text-lg xl:text-xl">
            Contact us today to schedule a consultation and discover how we can help your business thrive.
          </p>

          <div className="flex gap-3">
            <a className="socialIcon-footer"><FaFacebook className="text-white" /></a>
            <a className="socialIcon-footer"><FaInstagram className="text-white" /></a>
            <a className="socialIcon-footer"><FaLinkedinIn className="text-white" /></a>
            <a className="socialIcon-footer"><FaYoutube className="text-white" /></a>
          </div>
        </div>
      </div>

      {/* === SECTION 3: CONSULTATION & CONTACT DETAILS === */}
      <div className="w-full h-full flex flex-col gap-2 px-2 py-3
        xl:justify-start xl:gap-8 xl:items-start xl:px-10 xl:py-9
        lg:justify-start lg:gap-8 lg:items-start lg:px-8 lg:py-9
        md:justify-start md:gap-6 md:items-start md:px-6 md:py-9
        sm:justify-start sm:items-start sm:px-4 sm:py-6">

        <h2 className="uppercase w-full text-white font-semibold text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl">
          Get a Free Consultation
        </h2>

        {/* Email Input & Button */}
        <form onSubmit={sendEmail} className="flex items-center gap-3 py-4 w-full">
          <div className="bg-white flex items-center rounded-full px-4 py-2 gap-2 w-[250px] h-10">
            <IoMailOutline size={18} className="text-gray-500" />
            <input
              type="email"
              className="bg-transparent w-full outline-none font-medium placeholder-gray-400 text-xs"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" disabled={loading} 
            className="bg-dark_green hover:bg-dark_green/80 transition text-white font-medium px-3 py-2 h-10 
            rounded-full flex items-center justify-center gap-2 shrink-0">
            <span className="text-xs uppercase hidden lg:block">{loading ? "Sending..." : "Get Started"}</span>
            <div className="bg-white text-black rounded-full p-1">
              <MdArrowUpward size={16} className="rotate-45" />
            </div>
          </button>
        </form>

        {/* Contact Details */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 items-center">
            <div className="footerIcon"><FaPhoneAlt size={15} /></div>
            <p className="text-white text-sm font-light">+971545423530</p>
          </div>

          <div className="flex gap-3 items-center">
            <div className="footerIcon"><IoMail size={15} /></div>
            <p className="text-white text-sm font-light">ahmed_elmizayen@ugoa.me</p>
          </div>

          <div className="flex gap-3 items-center">
            <div className="footerIcon"><FaLocationDot size={15} /></div>
            <p className="text-white text-sm font-light">
              Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, UAE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
